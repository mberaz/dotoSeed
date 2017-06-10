import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:['./modal/modal.css']
})
export class AppComponent {
  bodyText='this is a text for baron';
  constructor(private modalService: ModalService) {
    }
 openModal(id: string){
        this.modalService.open(id);
    }
 
    closeModal(id: string){
        this.modalService.close(id);
    }
  name = 'Angular';
  title = 'app works!';
  appPageTitle: string = 'todos seed app';
}
