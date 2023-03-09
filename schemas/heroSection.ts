import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'heroSection',
  title: 'HeroSection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroGallery',
      title: 'HeroGallery',
      type: 'gallery',
    }),
  ],
});
