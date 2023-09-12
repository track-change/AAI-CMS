import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visit',
  title: 'Visit',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'ctafields',
      title: 'CTA Fields',
      type: 'array',
      of: [
        defineField({
          name: 'ctafield',
          title: 'CTA Field',
          type: 'object',
          fields: [
            defineField({
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                }),
              ],
            }),
            defineField({
              name: 'embed',
              title: 'Embed',
              type: 'object',
              fields: [
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                }),
              ],
            }),
            defineField({
              name: 'body',
              title: 'Body',
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
        }),
      ],
    }),
    defineField({
      name: 'forms',
      title: 'Forms',
      type: 'array',
      of: [
        defineField({
          name: 'form',
          title: 'Form',
          type: 'reference',
          to: [{type: 'form'}],
        }),
      ],
    }),
  ],
})
