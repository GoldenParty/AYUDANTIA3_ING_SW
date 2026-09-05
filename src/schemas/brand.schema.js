import { z } from 'zod';

// Esquema para crear una categoría (POST)
export const createCategorySchema = z.object({
  name: z
    .string({ required_error: 'El nombre de la marca es obligatorio' })
    .min(3, 'El nombre debe tener al menos 2 caracteres')
    .max(80, 'El nombre no puede exceder los 80 caracteres'),
  country: z
    .string()
    .max(40, 'El país no puede superar los 40 caracteres')
    .optional(),
    website: z
    .string()
    .optional()
    .url(),
});