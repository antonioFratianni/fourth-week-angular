import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  setClasses() {
    const obj = {
      red: 'red',
    };
    return obj;
  }

  getInlineStyles() {
    let styles = {
      color: 'green',
      'text-decoration': 'none',
    };
    return styles;
  }
}
