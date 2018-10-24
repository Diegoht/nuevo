import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MelodramaPage } from './melodrama';

@NgModule({
  declarations: [
    MelodramaPage,
  ],
  imports: [
    IonicPageModule.forChild(MelodramaPage),
  ],
})
export class MelodramaPageModule {}
