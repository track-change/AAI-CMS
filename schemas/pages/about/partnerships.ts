import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partnerships',
  title: 'Partnerships',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      type: 'coverImage',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
