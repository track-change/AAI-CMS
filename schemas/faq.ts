import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'forPage',
      title: 'For Page',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'About', value: 'about'},
          {title: 'Artists', value: 'artists'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
      page: 'forPage',
    },
    prepare({title, page}) {
      return {
        title,
        subtitle: page.charAt(0).toUpperCase() + page.slice(1),
      }
    },
  },
})
