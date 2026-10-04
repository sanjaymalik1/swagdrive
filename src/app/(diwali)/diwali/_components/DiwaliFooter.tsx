import { SITE_CONFIG } from "@/lib/constants";

export function DiwaliFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-muted-foreground">
        <p>
          Questions about bulk orders? Reach us at{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-primary hover:underline"
          >
            {SITE_CONFIG.email}
          </a>{" "}
          or{" "}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            className="text-primary hover:underline"
          >
            WhatsApp
          </a>
          .
        </p>
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
