import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SuccessModal } from "./SuccessModal";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(10, "Please enter a phone number.")
    .regex(/^[+]?[-()\d\s]{10,}$/, "Please enter a valid phone number."),
  message: z.string().min(10, "Please share a little more about your needs."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = (await response.json()) as { success?: boolean; message?: string; error?: string };

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Unable to submit your message right now.");
    }

    setShowSuccessModal(true);
    reset(defaultValues);
  };

  return (
    <>
      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      <form
      id="contact-form"
      className="surface-card space-y-6 rounded-2xl border border-primary/10 bg-gradient-to-br from-white/90 to-white/70 p-6 shadow-lg shadow-primary/5 sm:p-8"
      onSubmit={handleSubmit(async values => {
        try {
          await onSubmit(values);
        } catch (error) {
          const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
          toast.error(message);
        }
      })}
      noValidate
    >
      <div>
        <h3 className="text-2xl font-semibold">Book Your Consultation</h3>
        <p className="mt-2 text-sm text-muted-foreground">Share a bit about yourself and your wellness goals. We will reach out once we have gone through your request.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Full Name
          </label>
          <Input id="name" placeholder="Your full name" className="rounded-lg border-primary/20 transition-all duration-300 focus:border-primary/50 focus:shadow-md focus:shadow-primary/10" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive font-medium">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email Address
          </label>
          <Input id="email" type="email" placeholder="you@example.com" className="rounded-lg border-primary/20 transition-all duration-300 focus:border-primary/50 focus:shadow-md focus:shadow-primary/10" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive font-medium">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-semibold text-foreground">
          Phone Number
        </label>
        <Input id="phone" placeholder="+91 98765 43210" className="rounded-lg border-primary/20 transition-all duration-300 focus:border-primary/50 focus:shadow-md focus:shadow-primary/10" {...register("phone")} />
        {errors.phone && <p className="text-xs text-destructive font-medium">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Tell us about your wellness goals
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="What challenges are you facing? What kind of support would help you feel more balanced?"
          className="resize-none rounded-lg border-primary/20 transition-all duration-300 focus:border-primary/50 focus:shadow-md focus:shadow-primary/10"
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive font-medium">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending request
          </span>
        ) : (
          "Send Consultation Request"
        )}
      </Button>
    </form>
    </>
  );
}
