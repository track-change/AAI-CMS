import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'coverImage',
  title: 'Cover Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
