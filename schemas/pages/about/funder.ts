import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'funder',
  title: 'Funder',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'isMajorFunder',
      title: 'Is Major Funder',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'coverImage',
      hidden: ({parent}) => !parent.isMajorFunder,
    }),
  ],
})
