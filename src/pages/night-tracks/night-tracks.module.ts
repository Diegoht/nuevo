import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightTracksPage } from './night-tracks';

@NgModule({
  declarations: [
    NightTracksPage,
  ],
  imports: [
    IonicPageModule.forChild(NightTracksPage),
  ],
})
export class NightTracksPageModule {}
