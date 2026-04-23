import { describe, expect, it, vi } from "vitest";
import { handleContactRequest, submitContactMessage } from "./contact";

function createMockResponse() {
  const response = {
    statusCode: 200,
    body: undefined as unknown,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: unknown) {
      this.body = payload;
      return this;
    },
  };

  return response;
}

describe("submitContactMessage", () => {
  it("returns a success response for a valid submission", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

    const result = await submitContactMessage({
      name: "Asha Kulkarni",
      email: "asha@example.com",
      phone: "+91 98765 43210",
      message: "I would like to book a consultation for stress support.",
    });

    expect(result).toEqual({
      success: true,
      message: "Consultation request received. We will contact you soon.",
    });
    expect(logSpy).toHaveBeenCalledOnce();

    logSpy.mockRestore();
  });

  it("rejects invalid submission data", async () => {
    await expect(
      submitContactMessage({
        name: "A",
        email: "not-an-email",
        phone: "123",
        message: "short",
      }),
    ).rejects.toThrow();
  });
});

describe("handleContactRequest", () => {
  it("returns HTTP 200 with a success payload for a valid contact request", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
    const response = createMockResponse();

    await handleContactRequest(
      {
        body: {
          name: "Meera Deshpande",
          email: "meera@example.com",
          phone: "+91 99887 77665",
          message: "I want to know more about chakra balancing sessions.",
        },
      },
      response,
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: "Consultation request received. We will contact you soon.",
    });

    logSpy.mockRestore();
  });

  it("returns HTTP 400 when the request body is invalid", async () => {
    const response = createMockResponse();

    await handleContactRequest(
      {
        body: {
          name: "A",
          email: "invalid",
          phone: "123",
          message: "short",
        },
      },
      response,
    );

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      success: false,
      error: "Name is required",
    });
  });
});
