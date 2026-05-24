import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { ZodError, z } from "zod";

const schema = z.object({
  // §1 Client Profile
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone is required"),
  dob: z.string().optional(),
  emergencyContact: z.string().optional(),
  // §2 Wellness Focus
  mainReason: z.string().optional(),
  conditionType: z.enum(["physical", "emotional"]).optional(),
  goal1: z.string().optional(),
  goal2: z.string().optional(),
  goal3: z.string().optional(),
  // §3 Health Screening
  hasPacemaker: z.enum(["yes", "no"]).optional(),
  isPregnant: z.enum(["yes", "no"]).optional(),
  pregnancyWeeks: z.string().optional(),
  hadOrganTransplant: z.enum(["yes", "no"]).optional(),
  hasHypertension: z.enum(["yes", "no"]).optional(),
  hasKidneyDisorder: z.enum(["yes", "no"]).optional(),
  hasPhysicianCare: z.enum(["yes", "no"]).optional(),
  // §4 Lifestyle
  stressLevel: z.enum(["low", "moderate", "high", "severe"]).optional(),
  energyLevel: z.enum(["low", "moderate", "vibrant"]).optional(),
  smokesAlcohol: z.enum(["yes", "no"]).optional(),
  openToHygiene: z.enum(["yes", "no"]).optional(),
  // Other
  service: z.string().optional(),
  message: z.string().optional(),
});

type Submission = z.infer<typeof schema>;

// ── Email helpers ─────────────────────────────────────────────────────────────

function field(label: string, value: string | undefined): string {
  if (!value) return "";
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
    <tr><td style="padding:10px 14px;background:#f8f6f3;border-radius:6px;border-left:3px solid #A58D66;">
      <p style="margin:0 0 3px;font-size:10px;color:#A58D66;letter-spacing:0.18em;text-transform:uppercase;font-family:sans-serif;">${label}</p>
      <p style="margin:0;font-size:14px;color:#2E2E2E;font-family:sans-serif;">${value}</p>
    </td></tr>
  </table>`;
}

function yesNoRow(label: string, value: string | undefined, extra?: string): string {
  if (!value) return "";
  const isYes = value === "yes";
  const bg = isYes ? "#fef2f2" : "#f0fdf4";
  const color = isYes ? "#dc2626" : "#16a34a";
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;">
    <tr><td style="padding:10px 14px;background:#f8f6f3;border-radius:6px;">
      <table width="100%"><tr>
        <td style="font-size:13px;color:#2E2E2E;font-family:sans-serif;">${label}${extra ? ` <span style="color:#888;font-size:11px;">(${extra})</span>` : ""}</td>
        <td align="right" style="white-space:nowrap;padding-left:12px;">
          <span style="padding:2px 10px;background:${bg};color:${color};border-radius:99px;font-size:11px;font-family:sans-serif;font-weight:600;">${value.toUpperCase()}</span>
        </td>
      </tr></table>
    </td></tr>
  </table>`;
}

function sectionHead(title: string): string {
  return `<p style="margin:22px 0 12px;font-size:10px;color:#A58D66;letter-spacing:0.24em;text-transform:uppercase;font-family:sans-serif;border-bottom:1px solid #e8e4df;padding-bottom:8px;">${title}</p>`;
}

function buildEmailHtml(input: Submission): string {
  const received = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const goals = [input.goal1, input.goal2, input.goal3].filter(Boolean).join(" · ");
  const conditionLabel = input.conditionType === "physical" ? "Physical Pain / Ailment" : input.conditionType === "emotional" ? "Stress / Emotional / Psychological" : undefined;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f0ede8;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ede8;padding:32px 16px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(8,58,79,0.10);">

        <tr>
          <td style="background:linear-gradient(135deg,#083A4F,#407E8C);padding:32px 36px;text-align:center;">
            <p style="margin:0;color:#C0D5D6;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-family:sans-serif;">New Client Intake</p>
            <h1 style="margin:10px 0 0;color:#E5E1DD;font-size:24px;font-weight:300;letter-spacing:0.04em;">Vidya's Holistic Healings</h1>
            <div style="margin:16px auto 0;width:40px;height:2px;background:#A58D66;border-radius:2px;"></div>
          </td>
        </tr>

        <tr><td style="padding:28px 36px 8px;">

          ${sectionHead("1. Client Profile")}
          ${field("Full Name", input.name)}
          ${field("Date of Birth", input.dob)}
          ${field("Email Address", `<a href="mailto:${input.email}" style="color:#407E8C;text-decoration:none;">${input.email}</a>`)}
          ${field("Phone Number", input.phone)}
          ${field("Emergency Contact", input.emergencyContact)}

          ${sectionHead("2. Wellness Focus & Primary Concerns")}
          ${field("Main Reason for Visit", input.mainReason)}
          ${field("Type of Condition", conditionLabel)}
          ${field("Wellness Goals", goals || undefined)}
          ${!goals && input.goal1 ? field("Goal 1", input.goal1) : ""}

          ${sectionHead("3. Health Screening (Pranic Healing Safety)")}
          ${yesNoRow("Pacemaker or electrical medical implants?", input.hasPacemaker)}
          ${yesNoRow("Pregnancy?", input.isPregnant, input.isPregnant === "yes" && input.pregnancyWeeks ? `${input.pregnancyWeeks} weeks` : undefined)}
          ${yesNoRow("Organ transplant history?", input.hadOrganTransplant)}
          ${yesNoRow("Severe high blood pressure (hypertension)?", input.hasHypertension)}
          ${yesNoRow("Severe kidney disorders?", input.hasKidneyDisorder)}
          ${yesNoRow("Under care of a physician or psychiatrist?", input.hasPhysicianCare)}

          ${sectionHead("4. Energy Hygiene & Lifestyle")}
          ${field("Current Stress Level", input.stressLevel ? input.stressLevel.charAt(0).toUpperCase() + input.stressLevel.slice(1) : undefined)}
          ${field("Daily Energy Level", input.energyLevel ? input.energyLevel.charAt(0).toUpperCase() + input.energyLevel.slice(1) : undefined)}
          ${yesNoRow("Smokes or regularly consumes alcohol?", input.smokesAlcohol)}
          ${yesNoRow("Open to energetic hygiene habits (e.g. salt water baths)?", input.openToHygiene)}

          ${input.service ? sectionHead("Service Requested") + field("Service", input.service) : ""}
          ${input.message ? sectionHead("Additional Notes") + `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
            <tr><td style="padding:14px 16px;background:#f8f6f3;border-radius:6px;border-left:3px solid #407E8C;">
              <p style="margin:0;font-size:14px;color:#2E2E2E;font-family:sans-serif;line-height:1.7;white-space:pre-line;">${input.message}</p>
            </td></tr>
          </table>` : ""}

        </td></tr>

        <tr>
          <td style="padding:0 36px 28px;">
            <a href="mailto:${input.email}?subject=Re: Your Consultation Request&body=Dear ${encodeURIComponent(input.name)},%0A%0AThank you for reaching out to Vidya's Holistic Healings."
               style="display:inline-block;background:linear-gradient(135deg,#407E8C,#A58D66);color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:999px;font-size:14px;font-family:sans-serif;font-weight:500;letter-spacing:0.04em;">
              Reply to ${input.name}
            </a>
          </td>
        </tr>

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const input = schema.parse(req.body);

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser;

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: emailUser, pass: emailPass },
      });

      await transporter.sendMail({
        from: `"Vidya's Holistic Healings" <${emailUser}>`,
        to: emailTo,
        replyTo: input.email,
        subject: `New Client Intake — ${input.name}`,
        html: buildEmailHtml(input),
      });
    }

    return res.status(200).json({
      success: true,
      message: "Consultation request received. We will contact you soon.",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        error: error.issues[0]?.message || "Invalid submission data",
      });
    }
    console.error("[Contact API] failed:", error);
    return res.status(500).json({
      success: false,
      error: "Unable to process the consultation request right now.",
    });
  }
}
