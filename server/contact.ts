import type { Request, Response } from "express";
import { ZodError, z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone is required"),
  message: z.string().min(10, "Message is required"),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export async function submitContactMessage(rawInput: unknown) {
  const input = contactSubmissionSchema.parse(rawInput);

  console.log("[Contact Submission]", {
    name: input.name,
    email: input.email,
    phone: input.phone,
    message: input.message,
    receivedAt: new Date().toISOString(),
  });

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
