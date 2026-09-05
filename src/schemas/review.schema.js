import { z } from 'zod';

// Esquema para crear una categoría (POST)
export const createCategorySchema = z.object({
  author: z
    .string({ required_error: 'El nombre de la categoría es obligatorio' })
    .min(2, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder los 80 caracteres'),
  rating: z
    .number()
    .int()
    .min(1)
    .max(5),
    comment: z
    .string()
    .min(10)
    .max(500),
});

