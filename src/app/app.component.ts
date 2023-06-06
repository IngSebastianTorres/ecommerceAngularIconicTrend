import { Component } from '@angular/core';
import { Sections } from './model/clases/sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  
  arraySections:Sections[] = [];

  constructor(){
    const sectionHTML1 = new Sections();
    sectionHTML1.idHtmlElement=1;
    sectionHTML1.visible=true;
    this.arraySections.push(sectionHTML1);

    const sectionHTML2 = new Sections();
    sectionHTML2.idHtmlElement=2;
    sectionHTML2.visible=true;
    this.arraySections.push(sectionHTML2);

  }
}
