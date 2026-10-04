"use client";

import { useState } from "react";
import Image from "next/image";
import type { DiwaliProduct } from "../_data";

export function ProductCard({ product }: { product: DiwaliProduct }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-colors hover:border-primary">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`View larger image of ${product.name}`}
          className="relative aspect-square cursor-zoom-in overflow-hidden border-b border-border/60 bg-muted"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </button>
        <div className="flex flex-1 items-center p-4">
          <h3 className="line-clamp-2 font-[family-name:var(--font-diwali-heading)] text-lg font-medium text-card-foreground">
            {product.name}
          </h3>
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-6"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="relative h-[85vh] w-full max-w-3xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
