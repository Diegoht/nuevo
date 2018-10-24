import { NightPage } from './../pages/night/night';
import { NightTracksPage } from './../pages/night-tracks/night-tracks';
import { NightCoverPage } from './../pages/night-cover/night-cover';
import { NightBioPageModule } from './../pages/night-bio/night-bio.module';
import { ThrillPage } from './../pages/thrill/thrill';
import { ThrillTracksPage } from './../pages/thrill-tracks/thrill-tracks';
import { MelodramaPage } from './../pages/melodrama/melodrama';
import { MelodramaTracksPage } from './../pages/melodrama-tracks/melodrama-tracks';
import { MelodramaBioPage } from './../pages/melodrama-bio/melodrama-bio';
import { MelodramaCoverPage } from './../pages/melodrama-cover/melodrama-cover';
import { DivideTracksPage } from './../pages/divide-tracks/divide-tracks';
import { DivideCoverPage } from './../pages/divide-cover/divide-cover';
import { DivideBioPage } from './../pages/divide-bio/divide-bio';
import { DividePage } from './../pages/divide/divide';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ThrillCoverPage } from '../pages/thrill-cover/thrill-cover';
import { ThrillBioPage } from '../pages/thrill-bio/thrill-bio';
import { NightBioPage } from '../pages/night-bio/night-bio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MelodramaCoverPage,
    MelodramaBioPage,
    MelodramaTracksPage,
    MelodramaPage,
    DivideBioPage,
    DivideCoverPage,
    DivideTracksPage,
    DividePage,
    ThrillCoverPage,
    ThrillBioPage,
    ThrillTracksPage,
    ThrillPage,
    NightCoverPage,
    NightTracksPage,
    NightPage,
    NightBioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MelodramaCoverPage,
    MelodramaBioPage,
    MelodramaTracksPage,
    MelodramaPage,
    DivideBioPage,
    DivideCoverPage,
    DivideTracksPage,
    DividePage,
    ThrillCoverPage,
    ThrillBioPage,
    ThrillTracksPage,
    ThrillPage,
    NightCoverPage,
    NightTracksPage,
    NightPage,
    NightBioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
