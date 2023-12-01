import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artists',
  title: 'Artists',
  type: 'document',
  fields: [
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'blockContent',
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'faqs'}],
          options: {
            filter: 'forPage == $page',
            filterParams: {page: 'artists'},
          },
        },
      ],
      validation: (Rule) => Rule.required() && Rule.unique(),
    }),
  ],
})
