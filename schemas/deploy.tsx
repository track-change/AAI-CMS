import {defineField, defineType} from 'sanity'
import CloudflareDeployWidget from '../components/deployWidget'

export default defineType({
  name: 'deploy',
  title: 'Deploy',
  type: 'document',
  fields: [
    defineField({
      name: 'CloudflareDeployWidget',
      title: 'Cloudflare Deploy Widget',
      type: 'string',
      components: {
        input: CloudflareDeployWidget,
      },
    }),
  ],
})
