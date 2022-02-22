import { ensureLang } from '../utils/lang'
import navLocale from '../i18n/pages/sidebar.json'

// Mapping the first sub link to the nav link to avoid 404 error.

function getNav() {
  return Object.fromEntries(
    Object.entries(navLocale).map(([lang, locales]) => {
      const item: {
        link: string
        text: string
        activeMatch?: string
      }[] = Object.values(locales).map((item) => ({
        ...item,
        link: `${ensureLang(lang)}${item.link}`,
      }))

      item.push({
        text: lang === 'zh-CN' ? '旧版文档' : 'Old Doc',
        link: 'https://doc-archive.element-plus.org/',
      })

      return [lang, item]
    })
  )
}

export const nav = getNav()
