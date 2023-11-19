import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'donate',
  title: 'Donate',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'linkTo',
      title: 'Link To',
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'string',
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
