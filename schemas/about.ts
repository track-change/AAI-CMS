import {defineField, defineType} from 'sanity'
import {ImageIcon, DocumentTextIcon} from '@sanity/icons'

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
          icon: DocumentTextIcon,
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
          icon: DocumentTextIcon,
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
          icon: ImageIcon,
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
