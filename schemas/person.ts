import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      description: 'Prénom puis Nom avec majuscules',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullName',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Nom du poste',
      type: 'string',
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Coach', value: 'coach' },
              { title: 'Manager', value: 'manager' },
              { title: 'Préparateur physique', value: 'fitness-trainor' },
              { title: 'Compétiteur', value: 'competitor' },
            ],
          },
        },
      ],

      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'administrationRole',
      title: 'Administration role',
      description: 'Rôle au sein du bureau',
      type: 'string',
    }),
    defineField({
      name: 'presentation',
      title: 'Presentation',
      type: 'blockContent',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
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
  ],
});
