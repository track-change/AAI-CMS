import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'people',
  title: 'People',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
