import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  clickLogs = [];

  logClick() {
    this.clickLogs.push(Date.now());
  }
}
