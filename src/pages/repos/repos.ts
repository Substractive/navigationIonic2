import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Child } from '../child/child';
import { OrganisationsPage } from '../organisations/organisations';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
   title : string = "bla";
   childPage = Child;



  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.title = "nešto";

  }

  openChildPage(component)
  {
    this.navCtrl.push(component);
  }

  ionViewDidLoad()
  {
    console.log('Hello Repos Page');
  }
}
