const { defaultTheme } = require('vuepress')

module.exports = {
  lang: 'ru-RU',
  base: '/',
  title: 'Clientbase Test Doc',
  description: 'clientbase test documentation site',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Начало работы',
        link: '/guide/',
      },
      {
        text: 'Руководство',
        link: '/manual/',
      },
      {
        text: 'Сайт КБ',
        link: 'https://clientbase.ru/',
      },
      {
        text: 'Заявка в ТП',
        link: 'https://clientbase.ru/support/form.html',
      },
    ],
    sidebar: {
      '/manual/': [
        {
          text: 'Пользователю',
          collapsible: true,
          children: ['/manual/user/desktop/'],
        },
        {
          text: 'Другое',
          collapsible: true,
          children: [
            '/manual/other/disable_copyright/',
            '/manual/other/footer_tuning/',
          ],
        },
      ],
    },
  }),

}
