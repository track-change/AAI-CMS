import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'support',
  title: 'Support',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
