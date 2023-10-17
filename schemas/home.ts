import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'programs',
      title: 'Programs',
      type: 'array',
      of: [
        {
          name: 'program',
          title: 'Program',
          type: 'reference',
          to: [{type: 'program'}],
          options: {
            filter: ({document}) => {
              return {
                filter:
                  'endDateTime >= $now && !(_id in path("drafts.**")) && _id != $currentProgramId',
                params: {
                  currentProgramId: document._id.replace(/^drafts\./, ''),
                  now: new Date(),
                },
                orderings: [
                  {
                    field: 'tags',
                    direction: 'desc',
                  },
                ],
              }
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required().unique().min(1).error('At least one program is required'),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'aboutUs',
      title: 'About Us',
      type: 'array',
      of: [
        {
          name: 'banner',
          title: 'Banner',
          type: 'reference',
          to: [{type: 'banner'}],
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'educations',
      title: 'Education',
      type: 'array',
      of: [
        {
          name: 'education',
          title: 'Education',
          type: 'reference',
          to: [{type: 'education'}],
        },
      ],
      validation: (Rule) => Rule.required().unique().error('At least one program is required'),
    }),
    defineField({
      name: 'mediaLibrary',
      title: 'Media Library',
      type: 'array',
      of: [
        {
          name: 'media',
          title: 'Media',
          type: 'reference',
          to: [{type: 'media'}],
        },
      ],
      validation: (Rule) => Rule.required().unique().error('At least one program is required'),
    }),
    defineField({
      name: 'tickets',
      title: 'Ticket',
      type: 'array',
      of: [
        {
          name: 'ticket',
          title: 'Ticket',
          type: 'reference',
          to: [{type: 'ticket'}],
          options: {
            filter: ({document}) => {
              return {
                filter:
                  'endDateTime >= $now && !(_id in path("drafts.**")) && _id != $currentProgramId',
                params: {
                  currentProgramId: document._id.replace(/^drafts\./, ''),
                  now: new Date(),
                },
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().unique().error('At least one program is required'),
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
      validation: (Rule) => Rule.required().unique().error('At least one program is required'),
    }),
  ],
})
