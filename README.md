# Vidya's Holistic Healings

This project is a calm, responsive wellness clinic website for **Vidya's Holistic Healings**. It includes routed pages for Home, About, Services, Testimonials, and Contact, along with a validated consultation form and a mock `/api/contact` submission endpoint that logs requests on the server.

## Technology

| Layer | Implementation |
| --- | --- |
| Frontend | React 19 with Wouter routing and Tailwind CSS 4 |
| Server | Express with a mock `/api/contact` endpoint |
| Forms | React Hook Form with Zod validation |
| Testing | Vitest |

## Local development

Run the following commands from the project root:

```bash
pnpm install
pnpm dev
```

The development server will start on an available local port, typically `http://localhost:3000`.

## Useful scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm test` | Run the Vitest suite |
| `pnpm build` | Build the frontend and server bundle |
| `pnpm check` | Run TypeScript checks |

## Contact form behavior

The contact form validates the following fields before submission:

| Field | Validation |
| --- | --- |
| Name | Minimum 2 characters |
| Email | Must be a valid email address |
| Phone | Minimum 10 characters, phone-friendly pattern |
| Message | Minimum 10 characters |

When the form is submitted successfully, the server logs the payload and returns a success message.

## Verification notes

The implementation has been verified through the following checks:

| Check | Result |
| --- | --- |
| TypeScript health | No errors |
| Vitest suite | Passing |
| Browser preview | Homepage and contact page reviewed |
| Form submission | Successful submission confirmed in server logs |

## Design direction

The site uses a warm off-white background, elegant serif headings, clean sans-serif body text, and restrained chakra-inspired accents. The visual approach is intentionally calm, minimal, spiritual in tone, and professional in presentation.
