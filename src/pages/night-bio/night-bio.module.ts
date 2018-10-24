import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightBioPage } from './night-bio';

@NgModule({
  declarations: [
    NightBioPage,
  ],
  imports: [
    IonicPageModule.forChild(NightBioPage),
  ],
})
export class NightBioPageModule {}
