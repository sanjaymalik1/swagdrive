"use server";

import { Resend } from "resend";
import ContactDemoNotification from "@/emails/ContactDemoNotification";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/validations";

export type ContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitContactForm(
  input: ContactFormInput
): Promise<ContactFormResult> {
  const parsed = contactFormSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "Invalid form data",
    };
  }

  const to = process.env.CONTACT_EMAIL?.trim();
  if (!to) {
    return {
      ok: false,
      error: "Contact email is not configured. Set CONTACT_EMAIL in your environment.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !from) {
    return {
      ok: false,
      error: "Email delivery is not configured. Check RESEND_API_KEY and RESEND_FROM_EMAIL.",
    };
  }

  const data = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Book a demo — ${data.fullName} (${data.companyName})`,
    react: ContactDemoNotification({ ...data }),
  });

  if (error) {
    console.error("Resend contact form error:", error);
    return {
      ok: false,
      error: "Could not send your request. Please try again shortly.",
    };
  }

  return { ok: true };
}
