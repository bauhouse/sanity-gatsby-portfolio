export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e3f7b48f1d676297ca2bd45',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oussz8sb',
                  apiId: 'a83e1fb9-9add-4359-aa63-656e1ead6239'
                },
                {
                  buildHookId: '5e3f7b48b7d212c838357bb5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gjpqzun1',
                  apiId: '3f0e2d80-d308-4f23-aecf-20c5c57e4cbc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bauhouse/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gjpqzun1.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
