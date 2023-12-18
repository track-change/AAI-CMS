import {defineField, defineType} from 'sanity'
import {ImageIcon, DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'educationPage',
  title: 'Education Page',
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
    // defineField({
    //   name: 'educations',
    //   title: 'Education',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'education',
    //       title: 'Education',
    //       type: 'reference',
    //       to: [{type: 'education'}],
    //     },
    //   ],
    //   validation: (Rule) => Rule.unique().error("Has to be unique, can't have duplicates"),
    // }),
  ],
})
