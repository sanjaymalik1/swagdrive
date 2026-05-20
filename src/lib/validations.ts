import { z } from "zod";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const indianPhone = z
  .string()
  .regex(
    /^(\+91[\s-]?)?[6-9]\d{9}$/,
    "Enter a valid 10-digit Indian mobile number"
  );

// ─── Public Forms ─────────────────────────────────────────────────────────────

export const quoteRequestSchema = z.object({
  fullName:         z.string().min(2, "Name must be at least 2 characters"),
  companyName:      z.string().min(2, "Company name must be at least 2 characters"),
  email:            z.string().email("Enter a valid email address"),
  phone:            indianPhone,
  city:             z.string().optional(),
  productInterest:  z.string().optional(),
  quantityEstimate: z.string().optional(),
  budgetRange:      z.string().optional(),
  eventDate:        z.string().optional(),
  message:          z.string().max(1000, "Message must be under 1000 characters").optional(),
  source:           z.string().optional(),
});

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email:    z.string().email("Enter a valid email address"),
  phone:    indianPhone.optional(),
  message:  z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

// ─── Admin Forms ──────────────────────────────────────────────────────────────

export const productSchema = z.object({
  name:                 z.string().min(2, "Name must be at least 2 characters"),
  slug:                 z.string().min(2, "Slug must be at least 2 characters"),
  description:          z.string().min(10, "Description must be at least 10 characters"),
  shortDescription:     z.string().max(200, "Short description must be under 200 characters").optional(),
  categoryId:           z.number().int().positive("Select a valid category"),
  isActive:             z.boolean().default(true),
  isFeatured:           z.boolean().default(false),
  minimumOrderQuantity: z.number().int().positive("Minimum order quantity must be a positive number").optional(),
  customizationOptions: z.string().optional(),
  tags:                 z.array(z.string()).optional(),
});

export const categorySchema = z.object({
  name:        z.string().min(2, "Name must be at least 2 characters"),
  slug:        z.string().min(2, "Slug must be at least 2 characters"),
  description: z.string().optional(),
  sortOrder:   z.number().int().default(0),
  isActive:    z.boolean().default(true),
});

export const galleryItemSchema = z.object({
  title:       z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().optional(),
  category:    z.string().optional(),
  isActive:    z.boolean().default(true),
});

// ─── Inferred Types ───────────────────────────────────────────────────────────

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
export type ContactFormInput  = z.infer<typeof contactFormSchema>;
export type ProductInput      = z.infer<typeof productSchema>;
export type CategoryInput     = z.infer<typeof categorySchema>;
export type GalleryItemInput  = z.infer<typeof galleryItemSchema>;
