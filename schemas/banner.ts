import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'info',
      title: 'Info',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'value',
          title: 'Value',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'info',
      subtitle: 'link.text',
    },
    prepare({title, subtitle}) {
      return {
        title: title || subtitle || 'Banner',
        subtitle: title ? subtitle : undefined,
      }
    },
  },
})
