import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import { ZodError, z } from "zod";
import { ENV } from "./_core/env.js";

export const contactSubmissionSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone is required"),
  message: z.string().min(10, "Message is required"),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

function buildEmailHtml(input: ContactSubmission): string {
  const received = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f0ede8;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ede8;padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(8,58,79,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#083A4F,#407E8C);padding:32px 36px;text-align:center;">
            <p style="margin:0;color:#C0D5D6;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-family:sans-serif;">New Consultation Request</p>
            <h1 style="margin:10px 0 0;color:#E5E1DD;font-size:24px;font-weight:300;letter-spacing:0.04em;">Vidya's Holistic Healing</h1>
            <div style="margin:16px auto 0;width:40px;height:2px;background:#A58D66;border-radius:2px;"></div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 36px;">
            <p style="margin:0 0 24px;color:#555;font-size:14px;font-family:sans-serif;line-height:1.6;">
              A new consultation request has been submitted. Details below.
            </p>

            <!-- Fields -->
            ${[
              { label: "Full Name", value: input.name },
              { label: "Email Address", value: `<a href="mailto:${input.email}" style="color:#407E8C;text-decoration:none;">${input.email}</a>` },
              { label: "Phone Number", value: input.phone },
            ]
              .map(
                ({ label, value }) => `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
              <tr>
                <td style="padding:14px 16px;background:#f8f6f3;border-radius:8px;border-left:3px solid #A58D66;">
                  <p style="margin:0 0 4px;font-size:10px;color:#A58D66;letter-spacing:0.18em;text-transform:uppercase;font-family:sans-serif;">${label}</p>
                  <p style="margin:0;font-size:15px;color:#2E2E2E;font-family:sans-serif;">${value}</p>
                </td>
              </tr>
            </table>`
              )
              .join("")}

            <!-- Message -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
              <tr>
                <td style="padding:16px;background:#f8f6f3;border-radius:8px;border-left:3px solid #407E8C;">
                  <p style="margin:0 0 8px;font-size:10px;color:#407E8C;letter-spacing:0.18em;text-transform:uppercase;font-family:sans-serif;">Message</p>
                  <p style="margin:0;font-size:15px;color:#2E2E2E;font-family:sans-serif;line-height:1.7;white-space:pre-line;">${input.message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="padding:0 36px 32px;">
            <a href="mailto:${input.email}?subject=Re: Your Consultation Request&body=Dear ${encodeURIComponent(input.name)},%0A%0AThank you for reaching out to Vidya's Holistic Healing."
               style="display:inline-block;background:linear-gradient(135deg,#407E8C,#A58D66);color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:999px;font-size:14px;font-family:sans-serif;font-weight:500;letter-spacing:0.04em;">
              Reply to ${input.name}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f0ede8;padding:20px 36px;text-align:center;border-top:1px solid #e4dcd5;">
            <p style="margin:0;color:#999;font-size:11px;font-family:sans-serif;">Received on ${received} (IST)</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

async function sendEmail(input: ContactSubmission): Promise<void> {
  const { emailUser, emailPass, emailTo } = ENV;

  if (!emailUser || !emailPass) {
    console.warn("[Contact] EMAIL_USER / EMAIL_PASS not set — skipping email send.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: emailUser, pass: emailPass },
  });

  await transporter.sendMail({
    from: `"Vidya's Holistic Healing" <${emailUser}>`,
    to: emailTo || emailUser,
    replyTo: input.email,
    subject: `New Consultation Request — ${input.name}`,
    html: buildEmailHtml(input),
  });
}

export async function submitContactMessage(rawInput: unknown) {
  const input = contactSubmissionSchema.parse(rawInput);

  console.log("[Contact Submission]", {
    name: input.name,
    email: input.email,
    phone: input.phone,
    receivedAt: new Date().toISOString(),
  });

  try {
    await sendEmail(input);
  } catch (err) {
    console.error("[Contact] Email send failed:", err);
  }

  return {
    success: true,
    message: "Consultation request received. We will contact you soon.",
  } as const;
}

export async function handleContactRequest(req: Pick<Request, "body">, res: Pick<Response, "status" | "json">) {
  try {
    const result = await submitContactMessage(req.body);
    return res.status(200).json(result);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        error: error.issues[0]?.message || "Invalid submission data",
      });
    }

    console.error("[Contact API] submission failed", error);
    return res.status(500).json({
      success: false,
      error: "Unable to process the consultation request right now.",
    });
  }
}
