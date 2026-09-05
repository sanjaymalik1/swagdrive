"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";
import { submitContactForm } from "@/actions/contact.actions";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const fields: {
  name: keyof ContactFormInput;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}[] = [
  {
    name: "fullName",
    label: "Name",
    placeholder: "Your full name",
    autoComplete: "name",
  },
  {
    name: "companyName",
    label: "Company name",
    placeholder: "Company name",
    autoComplete: "organization",
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "9876543210",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "email",
    label: "Work email",
    placeholder: "you@company.com",
    type: "email",
    autoComplete: "email",
  },
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormInput) {
    setSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      toast.success("Thanks — we’ll be in touch shortly.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-5"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 min-[640px]:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <Label
              htmlFor={field.name}
              className="font-[family-name:var(--font-overpass)] text-[0.6875rem] font-semibold tracking-[0.06em] text-blue-primary uppercase"
            >
              {field.label}
            </Label>
            <Input
              id={field.name}
              type={field.type ?? "text"}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.name])}
              className="h-12 rounded-xl border-blue-primary/15 bg-white px-4 text-base text-blue-primary placeholder:text-muted-foreground md:text-base"
              {...register(field.name)}
            />
            {errors[field.name] ? (
              <p className="m-0 text-sm text-destructive">
                {errors[field.name]?.message}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="message"
          className="font-[family-name:var(--font-overpass)] text-[0.6875rem] font-semibold tracking-[0.06em] text-blue-primary uppercase"
        >
          How can we help?
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="What would your ideal solution look like? Anything else we should know?"
          aria-invalid={Boolean(errors.message)}
          className="min-h-[8.5rem] rounded-xl border-blue-primary/15 bg-white px-4 py-3 text-base text-blue-primary placeholder:text-muted-foreground md:text-base"
          {...register("message")}
        />
        {errors.message ? (
          <p className="m-0 text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[3rem] bg-blue-primary px-5 py-3.5 text-center font-[family-name:var(--font-lexend)] text-base leading-none font-normal text-yellow-secondary no-underline transition-opacity disabled:cursor-not-allowed disabled:opacity-60 min-[640px]:w-auto min-[640px]:min-w-[11rem]"
        >
          {submitting ? "Sending…" : "Submit"}
          <ArrowUpRight
            className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
            aria-hidden
          />
        </button>
      </div>
    </form>
  );
}
