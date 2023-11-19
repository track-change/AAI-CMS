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
      name: 'funders',
      title: 'Funders',
      type: 'array',
      of: [
        defineField({
          name: 'funder',
          type: 'funder',
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),

    defineField({
      name: 'partnership',
      title: 'Partnership',
      type: 'blockContent',
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
