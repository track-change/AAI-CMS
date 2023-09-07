import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'array',
      of: [
        {
          name: 'SingleLine',
          title: 'Single Line',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
        },
        {
          name: 'MultiLine',
          title: 'Multi Line',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'text',
            },
          ],
        },
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'url',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'frontCaptions',
      title: 'Front Captions',
      type: 'array',
      of: [
        {
          name: 'SingleLine',
          title: 'Single Line',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
        },
        {
          name: 'MultiLine',
          title: 'Multi Line',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'text',
            },
          ],
        },
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'url',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})
