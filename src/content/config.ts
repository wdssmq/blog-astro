import { defineCollection, z } from 'astro:content';
import { blogSchema } from '@/theme-simple/config';

const blog = defineCollection(blogSchema);

export const collections = { blog };
