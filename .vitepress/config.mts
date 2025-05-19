import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DaunScape",
  description: 'Welcome! You got any "daun"?',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "Information",
        items: [{ text: "About", link: "/about" }],
      },
      {
        text: "Infrastructure",
        items: [{ text: "Services", link: "/services" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/DaunScape" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg>',
        },
        link: "mailto:hello@daunscape.tech",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/></svg>',
        },
        link: "https://store.daunscape.tech",
      },
    ],
  },
});
