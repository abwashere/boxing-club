import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required(),
        Rule.min(5).error('5 caracters min is required.'),
        Rule.max(80).warning('Shorter titles are usually better'),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'section',
      type: 'string',
      title: 'Section',
      options: {
        list: [
          { title: 'Classes', value: 'classes' },
          { title: 'Coachs', value: 'coachs' },
          { title: 'Administration', value: 'administration' },
          { title: 'Partenaires', value: 'partenaires' },
          { title: 'Autres', value: 'autres' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    }),
    defineField({
      name: 'coaches',
      title: 'Coaches',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
        {
          name: 'focus',
          type: 'string',
          title: 'Focus',
          description: 'Object position',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery',
    }),
    defineField({
      name: 'table',
      title: 'Table',
      type: 'table',
    }),
  ],
});
