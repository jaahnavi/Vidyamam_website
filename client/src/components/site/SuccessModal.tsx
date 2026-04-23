import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? "bg-black/40 opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`surface-card relative w-full max-w-md transform rounded-2xl border border-primary/20 p-8 shadow-2xl transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-2xl font-semibold text-foreground">Request Received</h2>
          <p className="mt-3 text-muted-foreground">
            Thank you for reaching out. We have received your consultation request and will get back to you within 24 hours.
          </p>

          <div className="mt-6 w-full space-y-3 rounded-lg border border-primary/10 bg-primary/5 p-4">
            <p className="text-sm font-semibold text-foreground">What happens next:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>Vidya will review your message and wellness goals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>We will contact you via phone or email to confirm your appointment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>Your first session will be tailored to your specific needs</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex w-full gap-3">
            <Button
              asChild
              size="lg"
              className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="/">Return Home</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 rounded-full"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
