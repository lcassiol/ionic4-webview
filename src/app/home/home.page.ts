import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url : any;
  constructor(public navCtrl: NavController,private sanitize: DomSanitizer,) {

    let addurl = "https://ne10.uol.com.br";


     this.url = this.sanitize.bypassSecurityTrustResourceUrl(addurl);

  }
}
