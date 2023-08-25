import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
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
    }),
    defineField({
      name: 'imageCredit',
      title: 'Image Credit',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'Facebook',
              type: 'url',
            },
          ],
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'Instagram',
              type: 'url',
            },
          ],
        },
        {
          name: 'artistWebsite',
          title: 'Artist Website',
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'Artist Website',
              type: 'url',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
