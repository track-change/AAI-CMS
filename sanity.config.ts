import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './src/structure/'

export default defineConfig({
  name: 'default',
  title: 'Asian Arts Initiative',

  projectId: '4e5m3wpi',
  dataset: 'development',

  plugins: [deskTool({
   structure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
