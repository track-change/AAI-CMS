import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      type: 'coverImage',
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
    }),
    defineField({
      name: 'isBoardMember',
      title: 'Board Member',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      hidden: ({parent}) => parent.isBoardMember,
    }),
    defineField({
      name: 'ext',
      title: 'Ext',
      type: 'string',
      hidden: ({parent}) => parent.isBoardMember,
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
      hidden: ({parent}) => parent.isBoardMember,
    }),
    defineField({
      name: 'affiliations',
      title: 'Affiliations',
      type: 'string',
      hidden: ({parent}) => !parent.isBoardMember,
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'blockContent',
      hidden: ({parent}) => !parent.isBoardMember,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'profileImage',
    },
  },
})
