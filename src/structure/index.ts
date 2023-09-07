import {StructureBuilder, StructureResolverContext} from 'sanity/lib/exports/desk'

export const structure = (S: StructureBuilder, context: StructureResolverContext) => {
  // Define an array of page information (schema type, document ID, and title)
  const pages = [
    {schemaType: 'settings', documentId: 'settings', title: 'Settings'},
    {schemaType: 'visit', documentId: 'visit', title: 'Visit'}, // Add more pages as needed
  ]

  return S.list()
    .title('Content')
    .items([
      ...pages.map((page) =>
        S.listItem()
          .title(page.title)
          .child(
            S.editor()
              .id(page.schemaType)
              .schemaType(page.schemaType)
              .documentId(page.documentId)
              .title(page.title)
          )
      ),
      S.divider(), // Add a divider to separate the dynamic pages from other pages
      ...S.documentTypeListItems().filter(
        (listItem) => !pages.some((page) => page.schemaType === listItem.getId())
      ),
    ])
}
