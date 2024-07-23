import { Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { NewsComponent } from './body/news/news.component';
import { CoursesComponent } from './body/courses/courses.component';
import { FaqComponent } from './body/faq/faq.component';
import { ContactComponent } from './body/contact/contact.component';
import { WhoWeAreComponent } from './body/about/who-we-are/who-we-are.component';
import { OurVisionComponent } from './body/about/our-vision/our-vision.component';
import { OurTeamComponent } from './body/about/our-team/our-team.component';
import { AboutComponent } from './body/about/about.component';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'news', component: NewsComponent, title: 'News' },
  { path: 'courses', component: CoursesComponent, title: 'Courses' },
  { path: 'faq', component: FaqComponent, title: 'FAQ' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  {
    path: 'about-us',
    title: 'About Us',
    component: AboutComponent,
    children: [
      { path: 'who-we-are', component: WhoWeAreComponent, title: 'Who We Are' },
      {
        path: 'our-vision',
        component: OurVisionComponent,
        title: 'Our Vision',
      },
      { path: 'our-team', component: OurTeamComponent, title: 'Our Team' },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
