import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
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
      name: 'body',
      title: 'Body',
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    }),
  ],
})
