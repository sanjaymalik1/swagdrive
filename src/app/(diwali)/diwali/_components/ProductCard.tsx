"use client";

import { useState } from "react";
import Image from "next/image";
import type { DiwaliProduct } from "../_data";

export function ProductCard({ product }: { product: DiwaliProduct }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="diwali-card group flex h-full flex-col p-2">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`View larger image of ${product.name}`}
          className="relative aspect-square cursor-zoom-in overflow-hidden rounded-[3px] bg-white ring-1 ring-[#a87e28]/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <span aria-hidden="true" className="diwali-sweep" />
          <span
            aria-hidden="true"
            className="diwali-view absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2a0823]/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#f7ebd5]"
          >
            View larger
          </span>
        </button>

        <div className="flex flex-1 flex-col items-center px-2 pb-4 pt-4 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8f6a1f]">
            Diwali Edit
          </span>
          <span aria-hidden="true" className="mt-1.5 flex items-center gap-1.5 text-[#b88a2a]/70">
            <span className="h-px w-4 bg-current" />
            <span className="h-[5px] w-[5px] rotate-45 bg-current" />
            <span className="h-px w-4 bg-current" />
          </span>
          <div className="mt-3 flex min-h-[2.4em] flex-1 items-center text-[1.15rem] leading-[1.2] sm:text-[1.28rem]">
            <h3 className="line-clamp-2 font-(family-name:--font-diwali-heading) font-semibold text-card-foreground">
              {product.name}
            </h3>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-[#1c0516]/90 p-6"
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
