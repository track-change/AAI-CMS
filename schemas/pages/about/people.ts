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
    defineField({
      name: 'coverImage',
      type: 'coverImage',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'boardOfDirectors',
      title: 'Board of Directors',
      type: 'array',
      of: [
        {
          name: 'boardMember',
          type: 'reference',
          to: [{type: 'person'}],
          options: {
            filter: 'isBoardMember == true',
          },
          validation: (Rule) => Rule.unique(),
        },
      ],
    }),
    defineField({
      name: 'staff',
      title: 'Staff',
      type: 'array',
      of: [
        {
          name: 'staffMember',
          type: 'reference',
          to: [{type: 'person'}],
          options: {
            filter: 'isBoardMember == false',
          },
          validation: (Rule) => Rule.unique(),
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
