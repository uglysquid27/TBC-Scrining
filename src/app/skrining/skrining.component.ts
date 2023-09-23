import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skrining',
  templateUrl: './skrining.component.html',
  styleUrls: ['./skrining.component.css']
})
export class SkriningComponent implements OnInit {

  ngOnInit(): void {
  }
  datadiri: boolean = true;
  skrining: boolean = false;

  ddChange() {
    this.skrining = false
    if (this.datadiri == false) {
      this.datadiri = !this.datadiri
    }

  }
  skringingChange() {
    this.datadiri = false
    if (this.skrining == false) {
      this.skrining = !this.skrining
    }
  }
}
