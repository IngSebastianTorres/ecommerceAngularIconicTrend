import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private logIn: boolean;
  private register: boolean;

  constructor(private modalService: NgbModal) {
    this.logIn=true;
    this.register=false;
  }



  public onMouseEnter(){
    
  }

  openLg(content) {
		this.modalService.open(content, { size: 'lg' , centered:true} );
	}

  onSubmit(){

  }
  iniciarSesionView(){
    this.logIn=true;
    this.register=false;
  }

  registroView(){
    this.logIn=false
    this.register=true;
  }

  get logInValue():boolean{
    return this.logIn;
  }


  get registerValue():boolean{
    return this.register;
  }
}
