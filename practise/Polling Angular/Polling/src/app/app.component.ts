import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Polling';
  // htmlcode = (<HTMLFormElement>document.getElementById("pollform")).innerHTML;
  loaded() {
    
  }
  submission() {
    alert("Mingey");
    // $( "#pollform" ).load(window.location.href + " #here" );
    // (<HTMLFormElement>document.getElementById("pollform")).innerHTML = this.htmlcode;
    (<HTMLFormElement>document.getElementById("pollform")).reset();
  }
}
