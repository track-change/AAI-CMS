import {StructureBuilder, StructureResolverContext} from 'sanity/lib/exports/desk'

export const structure = (S: StructureBuilder , context: StructureResolverContext)=>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
            .title('Settings')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings'].includes(<string>listItem.getId())
      ),
    ]);