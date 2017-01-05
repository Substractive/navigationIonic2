import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController, Nav  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { Child } from '../pages/child/child';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginComponent } from '../pages/module/login.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp 
{
  
  @ViewChild(Nav) nav: Nav;
  rootPage = TabsPage;
  pages: Array<{title: string, component: any}>; // nav components
  loginPage : Array <{title:string ,component: any}>;
  //tabs: Array<{title : string , component: any}>; // nav components
  constructor(public platform: Platform,  public menu: MenuController) 
  {
    this.initializeApp();
    // set our app's pages
    // postavljanje pageova za petlju prilikom biranja stranica u navigaciji
    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage },
      { title: 'Organisations', component: OrganisationsPage }  ,
      { title : 'login', component : LoginComponent}    
    ];
    this.loginPage  =[ {title : 'login', component : LoginComponent}];
    /* tab menu views/items
      tab navigacijski itemi su dostupni prilikom importanja gore komponente
    */
    /*this.tabs = 
    [
      {title : 'Tab page 1',component : Child },
      {title : 'Tab page 2',component : Child}
    ];*/
  }
 
 initializeApp() 
 {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
}
openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    console.log(page.component);
    this.nav.setRoot(page.component);
  }

}
