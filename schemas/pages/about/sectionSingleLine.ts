import {defineType} from 'sanity'
import {MdShortText} from 'react-icons/md'

interface SpanType {
  _type: 'span'
  text: string
}

interface BlockType {
  _type: 'block'
  children: SpanType[]
}

type PortableTextBlock = BlockType

interface SectionSingleLine {
  blocks: PortableTextBlock[]
}
export default defineType({
  name: 'sectionSingleLine',
  title: 'Section Single Line',
  type: 'object',
  icon: MdShortText,
  fields: [
    {
      name: 'blocks',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    select: {
      blocks: 'blocks',
    },
    prepare(value: SectionSingleLine) {
      const block = (value.blocks || []).find((block) => block._type === 'block')
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No title',
      }
    },
  },
})
