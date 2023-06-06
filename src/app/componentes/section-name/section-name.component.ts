import { Component, Input, OnInit } from '@angular/core';
import { Sections } from 'src/app/model/clases/sections';

@Component({
  selector: 'app-section-name',
  templateUrl: './section-name.component.html',
  styleUrls: ['./section-name.component.css']
})
export class SectionNameComponent implements OnInit{

    private htmlSectionsToSee:Sections[];
   
    @Input() sectionToSee:Sections[];


    constructor(){
      
    }

    public ngOnInit(): void {
      
      this.htmlSectionsToSee= this.sectionToSee;
      
    }

    get htmlSectionsToSeeValue(){
      return this.htmlSectionsToSee;
    }


 
}
