import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //VDAB geeft mee
  options = ['happy', 'birthday','SHUT UP'];
  
  theLibrarySays;
  
  optSelected(event) {
    this.theLibrarySays = event;
  }
}
