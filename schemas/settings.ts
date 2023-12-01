import {defineType, defineField} from 'sanity'
import {FiInstagram, FiFacebook, FiTwitter, FiYoutube} from 'react-icons/fi'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [
        {
          name: 'hours',
          title: 'Hours',
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              title: 'Day',
              type: 'string',
              options: {
                list: [
                  {title: 'Monday', value: 'monday'},
                  {title: 'Tuesday', value: 'tuesday'},
                  {title: 'Wednesday', value: 'wednesday'},
                  {title: 'Thursday', value: 'thursday'},
                  {title: 'Friday', value: 'friday'},
                  {title: 'Saturday', value: 'saturday'},
                  {title: 'Sunday', value: 'sunday'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'openingTime',
              title: 'Opening Time',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'closingTime',
              title: 'Closing Time',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'ngoBlurb',
      title: 'NGO Blurb',
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
      name: 'socials',
      title: 'Socials',
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
          name: 'twitter',
          title: 'Twitter',
          type: 'object',
          icon: FiTwitter,
          fields: [
            {
              name: 'url',
              title: 'Twitter',
              type: 'url',
            },
          ],
        },
        {
          name: 'youtube',
          title: 'Youtube',
          type: 'object',
          icon: FiYoutube,
          fields: [
            {
              name: 'url',
              title: 'Youtube',
              type: 'url',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
})
