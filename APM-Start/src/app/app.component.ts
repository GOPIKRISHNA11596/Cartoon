import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Cartoon';
  imageWidth : number = 100;
  imageHeight : number = 60;
  imageMargin : number = 2;
  logoUrl : "assets/images/MrBean.jpg";
}

