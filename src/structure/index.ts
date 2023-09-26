import {schemaTypes} from './../../schemas/index'
import {StructureBuilder, StructureResolverContext} from 'sanity/lib/exports/desk'

export const structure = (S: StructureBuilder, context: StructureResolverContext) => {
  // Define an array of page information (schema type, document ID, and title)
  const pages = [
    {schemaType: 'settings', documentId: 'settings', title: 'Settings'},
    {schemaType: 'visit', documentId: 'visit', title: 'Visit'}, // Add more pages as needed
  ]

  const aboutSection = [
    {schemaType: 'about', documentId: 'about', title: 'About'},
    {schemaType: 'contactUs', documentId: 'contactUs', title: 'Contact Us'},
    {schemaType: 'people', documentId: 'people', title: 'People'},
    {schemaType: 'support', documentId: 'support', title: 'Support'},
    {schemaType: 'partnerships', documentId: 'partnerships', title: 'Partnerships'},
    {schemaType: 'opportunities', documentId: 'opportunities', title: 'Opportunities'},
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
      // create an "About Section" list item and add the aboutSection array as its child
      S.listItem()
        .title('About Section')
        .child(
          S.list()
            .title('About Section')
            .items([
              ...aboutSection.map((page) =>
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
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![...pages, ...aboutSection].some((page) => page.schemaType === listItem.getId())
      ),
    ])
}
