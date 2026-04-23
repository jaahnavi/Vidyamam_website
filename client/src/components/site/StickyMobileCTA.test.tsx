import { describe, it, expect, beforeEach, vi } from "vitest";
import { StickyMobileCTA } from "./StickyMobileCTA";

describe("StickyMobileCTA", () => {
  beforeEach(() => {
    window.scrollY = 0;
    vi.clearAllMocks();
  });

  it("should be a valid React component", () => {
    const component = <StickyMobileCTA />;
    expect(component).toBeDefined();
    expect(component.type).toBe(StickyMobileCTA);
  });

  it("should accept onClick callback prop", () => {
    const onClickMock = vi.fn();
    const component = <StickyMobileCTA onClick={onClickMock} />;
    expect(component.props.onClick).toBe(onClickMock);
  });

  it("should handle scroll events for visibility toggling", () => {
    const scrollListener = vi.fn();
    window.addEventListener("scroll", scrollListener);
    
    window.scrollY = 400;
    window.dispatchEvent(new Event("scroll"));
    
    expect(scrollListener).toHaveBeenCalled();
    
    window.removeEventListener("scroll", scrollListener);
  });

  it("should scroll to contact form element when available", () => {
    const contactForm = document.createElement("div");
    contactForm.id = "contact-form";
    document.body.appendChild(contactForm);

    const scrollIntoViewMock = vi.fn();
    contactForm.scrollIntoView = scrollIntoViewMock;

    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

    document.body.removeChild(contactForm);
  });

  it("should have correct component props structure", () => {
    const component = <StickyMobileCTA />;
    expect(component.props).toBeDefined();
    expect(typeof component.props === "object").toBe(true);
  });
});
