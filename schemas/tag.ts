import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'tag',
    },
    prepare({title}: {title: string}) {
      return {
        title,
        media: TagIcon,
      }
    },
  },
})
