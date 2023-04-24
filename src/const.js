export const AppRoute = {
  Home: '/',
  Quotes: '/quotes',
  QuotesSelected: '/quotes/:id',
  Tags: '/tags',
  Author: '/author',
  PrivacyPolicy: '/privacy-policy',
};

export const AppPage = {
  Home: 'Home',
  Quotes: 'Thoughts',
  Tags: 'Tags',
  Author: 'About Author',
  PrivacyPolicy: 'Terms of use',
};

export const navs = [
  {
    title: AppPage.Quotes,
    path: AppRoute.Quotes,
  },
  {
    title: AppPage.Tags,
    path: AppRoute.Tags,
  },
  {
    title: AppPage.Author,
    path: AppRoute.Author,
  }
];