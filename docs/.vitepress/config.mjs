import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'en-US',
  title: "VAULT777 Docs",
  description: "Official documentation for Vault777 — the decentralized on-chain casino.",
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
      { text: 'About', link: '/General/about.md' },
      { text: 'Quick Start', link: '/General/quickstart.md' },
      {
        text: 'Features',
        items: [
          { text: 'Decentralized Betting Protocol', link: '/General/decentralized-betting.md' },
          { text: 'Chainlink VRF Explained', link: '/General/chainlink-vrf.md' },
          { text: 'Multi-Chain Integration', link: '/General/multichain.md' },
          { text: 'Games Ecosystem', link: '/General/games.md' },
          { text: 'Governance: & DAO', link: '/General/governance.md' },
          { text: 'Leaderboards & Incentives', link: '/General/leaderboards.md' },
          { text: 'Social & Referral System', link: '/General/social-referrals.md' },
          { text: 'Risk Management (Kelly Criterion)', link: '/General/kelly-criterion.md' },
          { text: 'Security & Transparency', link: '/General/security.md' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'About', link: '/General/about.md' },
          { text: 'Quick Start', link: '/General/quickstart.md' },
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Decentralized Betting Protocol', link: '/General/decentralized-betting.md' },
          { text: 'Chainlink VRF Explained', link: '/General/chainlink-vrf.md' },
          { text: 'Multi-Chain Integration', link: '/General/multichain.md' },
          { text: 'Games Ecosystem', link: '/General/games.md' },
          { text: 'Governance: & DAO', link: '/General/governance.md' },
          { text: 'Leaderboards & Incentives', link: '/General/leaderboards.md' },
          { text: 'Social & Referral System', link: '/General/social-referrals.md' },
          { text: 'Risk Management (Kelly Criterion)', link: '/General/kelly-criterion.md' },
          { text: 'Security & Transparency', link: '/General/security.md' }
        ]
      },
      
    ],

    footer: {
      message: 'VAULT777 is a decentralized protocol. Please gamble responsibly and in accordance with your local laws and regulations.',
      copyright: 'Copyright © 2025 VAULT777. All rights reserved.'
    },

    socialLinks: [
      { icon: 'homepage', link: 'https://vault777.com' },
      { icon: 'github', link: 'https://github.com/Vault777com' },
      { icon: 'x', link: 'https://x.com' },
      { icon: 'discord', link: 'https://discord.gg' },
      { icon: 'telegram', link: 'https://t.me' }
    ]
  }
})
