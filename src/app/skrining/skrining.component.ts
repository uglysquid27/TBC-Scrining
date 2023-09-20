import { Component } from '@angular/core';

@Component({
  selector: 'app-skrining',
  templateUrl: './skrining.component.html',
  styleUrls: ['./skrining.component.css']
})
export class SkriningComponent {
datadiri: boolean = true;
skrining: boolean = false;

ddChange(){
  this.skrining = false
  this.datadiri = !this.datadiri
  console.log(this.datadiri);
  
}
skringingChange(){
  this.skrining = !this.skrining
  this.datadiri = false
  console.log(this.skrining);
  
}
}
