import {z} from 'zod';

const schema = z.object({
  title: z.string().min(1, 'Title cannot be empty'),
  description: z.string().min(1, 'Description cannot be empty'),
  price: z.string(),
  location: z.object({
    name: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  }),
  images: z.array(z.object({
    uri: z.string(),
    type: z.string(),
    fileName: z.string(),
  })),
});

type NewProductFormData = z.infer<typeof schema>;

export {schema};
export type {NewProductFormData};
