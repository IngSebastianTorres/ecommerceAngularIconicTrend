import { Component, Input, OnInit } from '@angular/core';
import { Sections } from 'src/app/model/clases/sections';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit{

  sectionsToSeeFromSectionNameComponent:Sections[];
  @Input() sections:Sections[];

  constructor(){
  }

  ngOnInit(): void {
    
    this.sectionsToSeeFromSectionNameComponent= this.sections;
  }

  


}
