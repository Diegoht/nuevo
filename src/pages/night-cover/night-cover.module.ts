import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightCoverPage } from './night-cover';

@NgModule({
  declarations: [
    NightCoverPage,
  ],
  imports: [
    IonicPageModule.forChild(NightCoverPage),
  ],
})
export class NightCoverPageModule {}
