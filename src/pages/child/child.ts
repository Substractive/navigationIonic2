import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-childPage',
  templateUrl: 'child.html'
})
export class Child {
    constructor(public navCtrl: NavController)
    {
        console.log("child page constructed");
    }

    goBack()
    {
        this.navCtrl.pop();
        console.log("go back");
    }
 ionViewDidLoad() {
    console.log('Hello Organisations Page');
  }
}