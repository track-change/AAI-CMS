import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'opportunities',
  title: 'Opportunities',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
