export interface IHeaderLinks {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: IHeaderLinks[];
}

export interface headerLinksToggle {
  screenWidth: number;
  collapsed: boolean;
}

export const headerLinksData: IHeaderLinks[] = [
  { routeLink: 'home', label: 'Home' },
  {
    routeLink: 'about-us',
    label: 'About',
    items: [
      { routeLink: 'who-we-are', label: 'Who We Are' },
      { routeLink: 'our-vision', label: 'Our Vision' },
      { routeLink: 'our-team', label: 'Our Team' },
    ],
  },
  { routeLink: 'courses', label: 'Courses' },
  { routeLink: 'news', label: 'News' },
  { routeLink: 'faq', label: 'FAQ' },
  { routeLink: 'contact', label: 'Contact' },
];
