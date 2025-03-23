import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'en-US',
  title: "VAULT 777",
  description: "VAULT777 Documentation & Help",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  //lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '中文',
      lang: 'zh', // optional, will be added  as `lang` attribute on `html` tag
      link: '/zh/' // default /fr/ -- shows on navbar translations menu, can be external
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: '/logo.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/General/About.md' },
      { text: 'Quick Start', link: '/markdown-examples' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Games',
        items: [
          { text: 'Dice', link: '/Games/House Originals/Dice.md' },
          { text: 'Plinko', link: '/Games/House Originals/Plinko.md' },
          { text: 'Slots', link: '/Games/House Originals/Slots.md' },
          { text: 'Mines', link: '/Games/House Originals/Mines.md' },
          { text: 'Video Poker', link: '/Games/House Originals/Video Poker.md' },
          { text: 'Rock Paper Scissors', link: '/Games/House Originals/Rock Paper Scissors.md' },
          { text: 'Coin Flip', link: '/Games/House Originals/Coin Flip.md' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Games: House Originals',
        items: [
          { text: 'Dice', link: '/Games/House Originals/Dice.md' },
          { text: 'Plinko', link: '/Games/House Originals/Plinko.md' },
          { text: 'Slots', link: '/Games/House Originals/Slots.md' },
          { text: 'Mines', link: '/Games/House Originals/Mines.md' },
          { text: 'Video Poker', link: '/Games/House Originals/Video Poker.md' },
          { text: 'Rock Paper Scissors', link: '/Games/House Originals/Rock Paper Scissors.md' },
          { text: 'Coin Flip', link: '/Games/House Originals/Coin Flip.md' }
        ]
      },
      
    ],

    footer: {
      message: 'VAULT777 is a decentralized protocol. Please gamble responsibly and in accordance with your local laws and regulations.',
      copyright: 'Copyright © 2025 VAULT777. All rights reserved.'
    },

    socialLinks: [
      { icon: 'homepage', link: 'https://vault777.com' },
      { icon: 'github', link: 'https://github.com/Vault777com/dapp' },
      { icon: 'x', link: 'https://x.com' },
      { icon: 'discord', link: 'https://discord.gg' },
      { icon: 'telegram', link: 'https://t.me' }
    ]
  }
})
