import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TextbookBuyComponent } from './textbook-buy/textbook-buy.component';
import { TextbookSellComponent } from './textbook-sell/textbook-sell.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { MeetupComponent } from './meetup/meetup.component';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { FindMeetupComponent } from './find-meetup/find-meetup.component';
import { StudyPageComponent } from './study-page/study-page.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { SearchPartnerComponent } from './search-partner/search-partner.component';
import { JoinStudyComponent } from './join-study/join-study.component';
import { DiscountPageComponent } from './discount-page/discount-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TextPageComponent } from './text-page/text-page.component';
import { LoginGuard} from './guards/login.guard';
import { TwitterComponent} from './twitter/twitter.component';
import {TwitterResolverService} from './resolvers/twitter-resolver.service';



const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent},
  { path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  { path: 'aboutUs', component: AboutUsComponent, canActivate: [LoginGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard]},
  { path: 'depaulSocial', component: LandingPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  {path: 'discounts', component: DiscountPageComponent, canActivate: [LoginGuard]},
  { path: 'home', component: HomepageComponent, canActivate: [LoginGuard]},

  {
    path: 'text',
    component: TextPageComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    children: [
      { path: 'booksell', component: TextbookSellComponent },
      { path: 'bookbuy', component: TextbookBuyComponent }    
    ]
  },

  {
    path: 'study',
    component: StudyPageComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    children: [
      { path: 'join-study-group', component: JoinStudyComponent },
      { path: 'create-group', component: CreateGroupComponent },
      { path: 'searchpartner', component: SearchPartnerComponent }
    ]
  },

  {
    path: 'meetup',
    component: MeetupComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    children: [
      { path: 'createMeetup', component: CreateMeetupComponent },
      { path: 'findMeetup', component: FindMeetupComponent }
    ]
  },
  {
    path: 'social',
    children: [
      {
        path: 'depaul-social-twitter', component: TwitterComponent,
        resolve: {Tweets: TwitterResolverService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
