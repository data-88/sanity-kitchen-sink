export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eeb7eb924c20b97cba20ef6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y9wyjq8f',
                  apiId: 'c36f60f3-5a2b-4896-9def-54cba4fc25a9'
                },
                {
                  buildHookId: '5eeb7eba48b9dca36ba84eb7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8grehr9t',
                  apiId: '6c2f3290-fa4f-4baf-9714-1a22bba0caef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/data-88/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8grehr9t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
