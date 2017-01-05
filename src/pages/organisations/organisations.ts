import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Child } from '../child/child';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-organizations',
  templateUrl: 'organisations.html'
})
export class OrganisationsPage {

  tab1Root: any = Child;
  tab2Root: any = OrganisationsPage;
  mySelectedIndex: number;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Organisations Page');
  }
}