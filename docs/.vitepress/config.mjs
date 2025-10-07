import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'en-US',
  title: "VAULT777 Docs",
  description: "Official documentation for Vault777 — the decentralized on-chain casino.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { defer: true, src: 'https://insights.vault777.com/script.js', 'data-website-id': process.env.UMAMI_WEBSITE_ID }]
  ],
  //lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    }
    //zh: {
      //label: '中文',
      //lang: 'zh', 
    //}
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
        text: 'Platform Features',
        items: [
          { text: 'Decentralized Betting Protocol', link: '/General/decentralized-betting.md' },
          { text: 'Chainlink VRF Explained', link: '/General/chainlink-vrf.md' },
          { text: 'Multi-Chain Integration', link: '/General/multichain.md' },
          { text: 'Games Ecosystem', link: '/General/games.md' },
          { text: 'Governance: & DAO', link: '/General/governance.md' },
          { text: 'Leaderboards & Incentives', link: '/General/leaderboards.md' },
          { text: 'Social & Referral System', link: '/General/social-referrals.md' },
          { text: 'Risk Management (Kelly Criterion)', link: '/General/kelly-criterion.md' },
          { text: 'Security & Transparency', link: '/General/security.md' },
          { text: 'Token and Economics', link: '/General/token.md' },
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
        text: 'Platform Features',
        items: [
          { text: 'Decentralized Betting Protocol', link: '/General/decentralized-betting.md' },
          { text: 'Chainlink VRF Explained', link: '/General/chainlink-vrf.md' },
          { text: 'Multi-Chain Integration', link: '/General/multichain.md' },
          { text: 'Games Ecosystem', link: '/General/games.md' },
          { text: 'Governance: & DAO', link: '/General/governance.md' },
          { text: 'Leaderboards & Incentives', link: '/General/leaderboards.md' },
          { text: 'Social & Referral System', link: '/General/social-referrals.md' },
          { text: 'Risk Management (Kelly Criterion)', link: '/General/kelly-criterion.md' },
          { text: 'Security & Transparency', link: '/General/security.md' },
          { text: 'Token and Economics', link: '/General/token.md' }
        ]
      },
      
    ],

    footer: {
      message: 'VAULT777 is a decentralized protocol. Please gamble responsibly and in accordance with your local laws and regulations.',
      copyright: 'Copyright © 2025 VAULT777. All rights reserved.'
    },

    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"/></svg>'}, link: 'https://vault777.com' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M205.4 66.3C167 56 127.5 78.8 117.3 117.2L66.5 306.7C56.2 345.1 79 384.6 117.4 394.9L306.9 445.7C345.3 456 384.8 433.2 395.1 394.8L445.9 205.3C456.2 166.9 433.4 127.4 395 117.1L205.4 66.3zM228.4 272C222.3 262.1 222.1 249.6 227.8 239.5C233.5 229.4 244.3 223.2 256 223.3C267.6 223.4 278.2 229.8 283.8 240C289.9 249.9 290.1 262.4 284.4 272.5C278.7 282.6 267.9 288.8 256.2 288.7C244.6 288.6 234 282.2 228.4 272zM143.2 284.3C153.1 278.2 165.6 278 175.7 283.7C185.8 289.4 192 300.2 191.9 311.9C191.8 323.5 185.4 334.1 175.2 339.7C165.3 345.8 152.8 346 142.7 340.3C132.6 334.6 126.4 323.8 126.5 312.1C126.6 300.5 133 289.9 143.2 284.3zM328.2 380.7C318.3 386.8 305.8 387 295.7 381.3C285.6 375.6 279.4 364.8 279.5 353.1C279.6 341.5 286 330.9 296.2 325.3C306.1 319.2 318.6 319 328.7 324.7C338.8 330.4 345 341.2 344.9 352.9C344.8 364.5 338.4 375.1 328.2 380.7zM337.2 172.3C347.1 166.2 359.6 166 369.7 171.7C379.8 177.4 386 188.2 385.9 199.9C385.8 211.5 379.4 222.1 369.2 227.7C359.3 233.8 346.8 234 336.7 228.3C326.6 222.6 320.4 211.8 320.5 200.1C320.6 188.5 327 177.9 337.2 172.3zM216.2 186.7C206.3 192.8 193.8 193 183.7 187.3C173.6 181.6 167.4 170.8 167.5 159.1C167.6 147.5 174 136.9 184.2 131.3C194.1 125.2 206.6 125 216.7 130.7C226.8 136.4 233 147.2 232.9 158.9C232.8 170.5 226.4 181.1 216.2 186.7zM482 256L441.4 407.2C424.2 471.2 358.4 509.2 294.4 492.1L256.1 481.8L256.1 512C256.1 547.3 284.8 576 320.1 576L512.1 576C547.4 576 576.1 547.3 576.1 512L576.1 320C576.1 284.7 547.4 256 512.1 256L482 256z"/></svg>'}, link: 'https://app.vault777.com'},
      { icon: 'github', link: 'https://github.com/Vault777com' },
      { icon: 'x', link: 'https://x.com/vault777casino' },
      { icon: 'telegram', link: 'https://t.me/Vault777casino' },
      { icon: 'medium', link: 'https://medium.com/@Vault777' }
    ]
  }
})
