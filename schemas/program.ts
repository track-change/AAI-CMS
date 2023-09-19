import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'type',
      title: 'Program Type',
      type: 'string',
      options: {
        list: [
          {title: 'Exhibition', value: 'exhibition'},
          {title: 'Event', value: 'event'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventTypes',
      title: 'Event Types',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'grid',
        list: [
          {title: 'Screening', value: 'screening'},
          {title: 'Performance', value: 'performance'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Concert', value: 'concert'},
          {title: 'Book Talk', value: 'book-talk'},
        ],
      },
      hidden: ({document}) => document?.type !== 'event',
    }),
    defineField({
      name: 'startDateTime',
      title: 'Start Date/Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDateTime',
      title: 'End Date/Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'season',
      title: 'Season and Year',
      type: 'string',
      description: 'e.g., Spring 2020, Fall 2019, Summer 2019...',
      hidden: ({parent}) => parent.endDateTime <= new Date(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'array',
      of: [
        {
          name: 'singleLine',
          title: 'Single Line',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
        },
        {
          name: 'multiLine',
          title: 'Multi Line',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'text',
            },
          ],
        },
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'url',
            },
          ],
        },
        {
          name: 'document',
          title: 'Document',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'chooseFile',
              title: 'Choose file',
              type: 'file',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'frontCaptions',
      title: 'Front Captions',
      type: 'array',
      of: [
        // {
        //   name: 'SingleLine',
        //   title: 'Single Line',
        //   type: 'object',
        //   fields: [
        //     {
        //       name: 'displayTitle',
        //       title: 'Display Title',
        //       type: 'string',
        //     },
        //     {
        //       name: 'value',
        //       title: 'Value',
        //       type: 'string',
        //     },
        //   ],
        // },
        {
          name: 'MultiLine',
          title: 'Multi Line',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'text',
            },
          ],
        },
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'url',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'curator',
      title: 'Curator',
      type: 'string',
    }),
    defineField({
      name: 'artists',
      title: 'Artists',
      type: 'array',
      of: [
        {
          name: 'artist',
          title: 'Artist',
          type: 'reference',
          to: [{type: 'artist'}],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    description: 'Read https://css-tricks.com/use-target_blank/',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
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
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'coverImage',
      endDateTime: 'endDateTime',
    },
    prepare(selection) {
      const now = new Date()
      const endDateTime = new Date(selection.endDateTime)
      const isCurrentOrUpcoming = endDateTime >= now

      return {
        title: selection.title,
        media: selection.media,
        subtitle: isCurrentOrUpcoming ? 'Current & Upcoming' : 'Past Seasons',
        isCurrent: isCurrentOrUpcoming,
      }
    },
  },
  orderings: [
    {
      name: 'endingSoon',
      title: 'Ending Soon',
      by: [
        {
          field: 'endDateTime',
          direction: 'desc',
        },
      ],
    },
  ],
  initialValue: () => ({}),
})
