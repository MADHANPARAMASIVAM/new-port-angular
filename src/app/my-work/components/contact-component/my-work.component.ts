import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { init } from 'ityped';  // Import ityped

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Your Customers Page Title'); // Set your page title here
    this.meta.addTag({ name: 'description', content: 'Description for your customers page' });
    this.meta.addTag({ name: 'keywords', content: 'Keywords related to your customers page' });

    // Initialize ityped
    const typingElement = document.querySelector('.cv_profile_name') as HTMLElement;
    if (typingElement) {
      init(typingElement, {
        strings: ['Madhan P.', 'Web Designer !', 'Web Developer !', 'Full Stack Developer !', 'Aspiring Data Scientist !'],
        loop: true,
        typeSpeed: 200,
        backSpeed: 100,
        showCursor: false,
      });
    }
  }
}
