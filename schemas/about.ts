import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'body',
          title: 'Body',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'text',
            },
          ],
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
