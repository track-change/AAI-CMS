import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ticket',
  title: 'Ticket',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'program',
      title: 'Program',
      type: 'reference',
      to: [{type: 'program'}],
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'reference',
      to: [{type: 'tag'}],
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
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'getTicket',
      title: 'Get Ticket',
      type: 'url',
      description: 'Link to ticketing site',
    }),
  ],
})
