import {defineField, defineType} from 'sanity'
import {FiInstagram, FiFacebook, FiGlobe} from 'react-icons/fi'

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
          icon: FiFacebook,
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
          icon: FiInstagram,
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
          icon: FiGlobe,
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
      name: 'frontCaptions',
      title: 'Front Captions',
      type: 'array',
      of: [
        {
          name: 'title',
          title: 'Title',
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
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
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
      media: 'image',
    },
  },
})
