import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Intro Helper';
  newItem = '';

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
