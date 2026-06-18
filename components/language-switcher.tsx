"use client";

import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/provider/language-provider";
import { LOCALES } from "@/payload/content-types";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1 rounded-full border border-border bg-muted/50 p-0.5", className)}>
      <Globe className="ml-1.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
      {LOCALES.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLocale(option.code)}
          aria-pressed={locale === option.code}
          title={option.label}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
            locale === option.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {option.short}
        </button>
      ))}
    </div>
  );
}
