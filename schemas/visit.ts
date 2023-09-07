import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visit',
  title: 'Visit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
