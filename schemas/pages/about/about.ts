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
          preview: {
            select: {
              title: 'value',
            },
            prepare({title}) {
              return {
                title: title ? `${title.split('\n')[0].slice(0, 50)}...` : 'Body',
              }
            },
          },
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
          preview: {
            select: {
              title: 'value',
            },
            prepare({title}) {
              return {
                title: `⎯ ${title} ⎯` || 'Subheading',
              }
            },
          },
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
