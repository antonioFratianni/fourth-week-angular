import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-exercise';

  isHide: boolean = false;

  ngOnInit(): void {
    setTimeout(()=>{
      this.isHide = true
    }, 5000);
  }
}
