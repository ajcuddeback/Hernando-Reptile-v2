import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainSiteRoutingModule } from './main-site-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdoptablesComponent } from './components/adoptables/adoptables.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonationComponent } from './components/donation/donation.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { PITMicroComponent } from './components/pit-micro/pit-micro.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AdoptablesComponent,
    ContactComponent,
    DonationComponent,
    MeetTheTeamComponent,
    PITMicroComponent,
    VolunteerComponent,
    VolunteerComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainSiteRoutingModule
  ]
})
export class MainSiteModule { }
