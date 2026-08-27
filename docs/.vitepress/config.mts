import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fortnite Porting Docs',
  description: 'Documentation for Fortnite Porting',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],

  themeConfig: {
    logo: '/favicon.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Application', link: '/app/' },
      { text: 'Blender', link: '/blender/' },
      { text: 'Unreal', link: '/unreal/' },
      { text: 'Contributing', link: '/contributing/' }
    ],

    sidebar: {
      '/app/': [
        {
          text: 'Application',
          items: [
            { text: 'Overview', link: '/app/' }
          ]
        }
      ],
      '/blender/': [
        {
          text: 'Blender',
          items: [
            { text: 'Overview', link: '/blender/' }
          ]
        },
        {
          text: 'Nodes',
          items: [
            { text: 'Overview', link: '/blender/nodes/' }
          ]
        }
      ],
      '/unreal/': [
        {
          text: 'Unreal',
          items: [
            { text: 'Overview', link: '/unreal/' }
          ]
        }
      ],
      '/contributing/': [
        {
          text: 'Contributing',
          items: [
            { text: 'How to add docs', link: '/contributing/' }
          ]
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/h4lfheart/FortnitePortingDocs/edit/main/docs/:path',
      text: 'Edit this page'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/h4lfheart/FortnitePorting' },
      { icon: 'twitter', link: 'https://x.com/FortnitePorting' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>'
        },
        link: 'https://fortniteporting.app',
        ariaLabel: 'Website'
      }
    ],

    footer: {
      copyright: "© 2026 Fortnite Porting. All rights reserved."
    }
  }
})
