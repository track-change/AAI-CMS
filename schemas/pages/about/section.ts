import {defineField, defineType} from 'sanity'
import {MdShortText} from 'react-icons/md'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  icon: MdShortText,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'blockContent',
    }),
  ],
})
