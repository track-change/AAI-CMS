import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'Asian Arts Initiative Website',

  projectId: 'jy6yg9wb',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
