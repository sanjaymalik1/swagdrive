"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { CONTACT_HREF } from "@/components/layout/nav";

export default function SignInForm() {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    setNotRegistered(false);
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    setLoading(false);
    setNotRegistered(true);
  }

  const fieldClass =
    "h-11 w-full rounded-lg border border-blue-secondary/20 bg-white px-3.5 font-[family-name:var(--font-overpass)] text-[15px] text-blue-primary outline-none transition-[border-color,box-shadow] placeholder:text-[#9aa3b2] focus:border-blue-secondary focus:shadow-[0_0_0_3px_rgba(5,65,123,0.14)]";

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col" noValidate>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={emailId}
            className="font-[family-name:var(--font-overpass)] text-sm font-medium text-blue-primary"
          >
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            aria-invalid={notRegistered}
            aria-describedby={notRegistered ? `${emailId}-error` : undefined}
            onChange={(e) => {
              setEmail(e.target.value);
              if (notRegistered) setNotRegistered(false);
            }}
            placeholder="you@company.com"
            className={
              notRegistered
                ? `${fieldClass} border-[#c2410c] focus:border-[#c2410c] focus:shadow-[0_0_0_3px_rgba(194,65,12,0.12)]`
                : fieldClass
            }
          />
          {notRegistered ? (
            <p
              id={`${emailId}-error`}
              role="alert"
              className="m-0 font-[family-name:var(--font-overpass)] text-[13px] leading-snug text-[#c2410c]"
            >
              Email not registered
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={passwordId}
            className="font-[family-name:var(--font-overpass)] text-sm font-medium text-blue-primary"
          >
            Password
          </label>
          <div className="relative">
            <input
              id={passwordId}
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              minLength={1}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (notRegistered) setNotRegistered(false);
              }}
              placeholder="Enter your password"
              className={`${fieldClass} pr-11`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute top-1/2 right-2.5 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-[#6b7280] transition-colors hover:bg-blue-secondary/6 hover:text-blue-primary"
            >
              {showPassword ? (
                <EyeOff className="size-4" strokeWidth={1.75} />
              ) : (
                <Eye className="size-4" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-6" />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-[3rem] bg-yellow-primary px-6 text-[15px] leading-none font-normal text-blue-primary transition-colors hover:bg-yellow-secondary active:brightness-95 disabled:pointer-events-none disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" strokeWidth={2} />
            Signing in…
          </>
        ) : (
          "Sign in"
        )}
      </button>

      <p className="mt-6 m-0 text-center font-[family-name:var(--font-overpass)] text-sm leading-5 text-[#4a5568]">
        Don&apos;t have an account?{" "}
        <Link
          href={CONTACT_HREF}
          className="font-semibold text-blue-secondary no-underline transition-colors hover:text-blue-primary"
        >
          Book a demo
        </Link>
      </p>
    </form>
  );
}
