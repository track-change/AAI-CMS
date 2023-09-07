import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      placeholder: 'Form Title',
      validation: (Rule) => Rule.required(),
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
        },
      ],
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [
        defineField({
          name: 'field',
          title: 'Field',
          type: 'object',
          fields: [
            defineField({
              name: 'displayTitle',
              title: 'Display Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              initialValue: 'text',
              options: {
                list: [
                  {title: 'Text', value: 'text'},
                  {title: 'Email', value: 'email'},
                  {title: 'Phone', value: 'phone'},
                  {title: 'Number', value: 'number'},
                  {title: 'Date', value: 'date'},
                  {title: 'Time', value: 'time'},
                  {title: 'URL', value: 'url'},
                  {title: 'Checkbox', value: 'checkbox'},
                  {title: 'Radio', value: 'radio'},
                  {title: 'Select', value: 'select'},
                  {title: 'Textarea', value: 'textarea'},
                ],
              },
            }),
            defineField({
              name: 'required',
              title: 'Required',
              type: 'boolean',
              initialValue: false,
            }),

            //     handle if type is checkbox, radio, or select
            //     how do i show it when i need it and hide it when i don't?

            defineField({
              name: 'options',
              title: 'Options',
              type: 'array',
              of: [
                {
                  name: 'option',
                  title: 'Option',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'displayTitle',
                      title: 'Display Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
              hidden: ({parent}) => {
                return !['radio', 'checkbox', 'select'].includes(parent?.type)
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'submitTo',
      title: 'Submit To',
      type: 'string',
      placeholder: 'https://formspree.io/f/xnqoqzqk',
    }),
  ],
})
