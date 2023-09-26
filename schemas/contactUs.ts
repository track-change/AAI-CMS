import {defineField, defineType} from 'sanity'

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
  ],
})
