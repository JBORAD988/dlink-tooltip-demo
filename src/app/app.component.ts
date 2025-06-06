import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dlink-tooltip-demo';
eventLog: string[] = [];

  onTooltipShow() {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.unshift(`🟢 Tooltip shown at ${timestamp}`);
    if (this.eventLog.length > 5) {
      this.eventLog.pop();
    }
  }

  onTooltipHide() {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.unshift(`🔴 Tooltip hidden at ${timestamp}`);
    if (this.eventLog.length > 5) {
      this.eventLog.pop();
    }
  }
}