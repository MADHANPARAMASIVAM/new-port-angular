import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    $(document).ready(() => {
      console.log('jQuery is working!');
    });
    $('.cv_toggle_btn, .cv_menu_close').on('click', function () {
      $('body').toggleClass('menu-open');
    });

  }
}
