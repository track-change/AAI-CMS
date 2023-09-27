import {defineField, defineType} from 'sanity'
import {MdShortText} from 'react-icons/md'
import {GrTextAlignLeft} from 'react-icons/gr'

export default defineType({
  name: 'contactUs',
  title: 'Contact Us',
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
          name: 'singleLine',
          title: 'Single Line',
          type: 'object',
          icon: MdShortText,
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
          name: 'multiLine',
          title: 'Multi Line',
          type: 'object',
          icon: GrTextAlignLeft,
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'blockContent',
            },
          ],
        },
      ],
    }),
  ],
})
