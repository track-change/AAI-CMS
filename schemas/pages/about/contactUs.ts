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
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'section',
          type: 'section',
        },
        {
          name: 'sectionSingleLine',
          type: 'sectionSingleLine',
        },
      ],
    }),
    defineField({
      name: 'banners',
      title: 'Banners',
      type: 'array',
      of: [
        {
          name: 'banner',
          title: 'Banner',
          type: 'reference',
          to: [{type: 'banner'}],
        },
      ],
    }),
  ],
})
