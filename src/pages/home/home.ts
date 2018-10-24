import { NightPage } from './../night/night';
import { NightTracksPage } from './../night-tracks/night-tracks';
import { NightBioPage } from './../night-bio/night-bio';
import { NightCoverPage } from './../night-cover/night-cover';
import { ThrillPage } from './../thrill/thrill';
import { ThrillTracksPage } from './../thrill-tracks/thrill-tracks';
import { ThrillBioPage } from './../thrill-bio/thrill-bio';
import { ThrillCoverPage } from './../thrill-cover/thrill-cover';
import { DividePage } from './../divide/divide';
import { DivideTracksPage } from './../divide-tracks/divide-tracks';
import { DivideBioPage } from './../divide-bio/divide-bio';
import { DivideCoverPage } from './../divide-cover/divide-cover';
import { MelodramaPage } from './../melodrama/melodrama';
import { MelodramaTracksPage } from './../melodrama-tracks/melodrama-tracks';
import { MelodramaBioPage } from './../melodrama-bio/melodrama-bio';
import { MelodramaCoverPage } from './../melodrama-cover/melodrama-cover';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foto1=MelodramaCoverPage
  artist1=MelodramaBioPage;
  tracks1=MelodramaTracksPage;
  cosas1=MelodramaPage;

  foto2=DivideCoverPage;
  artist2=DivideBioPage;
  tracks2=DivideTracksPage;
  cosas2=DividePage;

  foto3=ThrillCoverPage;
  artist3=ThrillBioPage;
  tracks3=ThrillTracksPage;
  cosas3=ThrillPage;

  foto4=NightCoverPage;
  artist4=NightBioPage;
  tracks4=NightTracksPage;
  cosas4=NightPage;

  constructor(public navCtrl: NavController) {

  }

  imagen1(){
    this.navCtrl.push(this.foto1);
  }
  artista1(){
    this.navCtrl.push(this.artist1);
  }
  canciones1(){
    this.navCtrl.push(this.tracks1);
  }
  comments1(){
    this.navCtrl.push(this.cosas1);
  }

  imagen2(){
    this.navCtrl.push(this.foto2);
  }
  artista2(){
    this.navCtrl.push(this.artist2);
  }
  canciones2(){
    this.navCtrl.push(this.tracks2);
  }
  comments2(){
    this.navCtrl.push(this.cosas2);
  }

  imagen3(){
    this.navCtrl.push(this.foto3);
  }
  artista3(){
    this.navCtrl.push(this.artist3);
  }
  canciones3(){
    this.navCtrl.push(this.tracks3);
  }
  comments3(){
    this.navCtrl.push(this.cosas3);
  }

  imagen4(){
    this.navCtrl.push(this.foto4);
  }
  artista4(){
    this.navCtrl.push(this.artist4);
  }
  canciones4(){
    this.navCtrl.push(this.tracks4);
  }
  comments4(){
    this.navCtrl.push(this.cosas4);
  }


}
