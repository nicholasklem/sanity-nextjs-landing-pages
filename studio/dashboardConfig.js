export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d934a92d32d4d65225d0433',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a2ipvk3x',
                  apiId: '6a0f2eb5-8c8c-4626-b75c-c5c0b0128200'
                },
                {
                  buildHookId: '5d934a92841e086ddc28e82e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3ye61pmr',
                  apiId: '4d2e7ae5-ce4e-44ea-acad-3a091ba244fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3ye61pmr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
