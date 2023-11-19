import {StructureBuilder, StructureResolverContext} from 'sanity/lib/exports/desk'

export const structure = (S: StructureBuilder, context: StructureResolverContext) => {
  const pages = [{schemaType: 'settings', documentId: 'settings', title: 'Settings'}]

  const aboutSection = [
    {schemaType: 'about', documentId: 'about', title: 'About'},
    {schemaType: 'contactUs', documentId: 'contactUs', title: 'Contact Us'},
    {schemaType: 'people', documentId: 'people', title: 'People'},
    {schemaType: 'support', documentId: 'support', title: 'Support'},
    {schemaType: 'opportunities', documentId: 'opportunities', title: 'Opportunities'},
  ]

  const sitePages = [
    {schemaType: 'home', documentId: 'home', title: 'Home'},
    {schemaType: 'visit', documentId: 'visit', title: 'Visit'},
    {schemaType: 'venuePage', documentId: 'venuePage', title: 'Venue Page'},
    {schemaType: 'donate', documentId: 'donate', title: 'Donate'},
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
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.list()
                    .title('About')
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
              ...sitePages.map((page) =>
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
          ![...pages, ...aboutSection, ...sitePages].some(
            (page) => page.schemaType === listItem.getId()
          )
      ),
    ])
}
