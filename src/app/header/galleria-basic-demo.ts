import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './galleria-basic-demo.html'
})
export class GalleriaBasicDemo implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    $(document).ready(() => {
      console.log('jQuery is working!');
      // $('.cv_toggle_btn, .cv_menu_close').on('click', function () {
      //   $('body').toggleClass('menu-open');
      // });
    });
  
    // Directly define image data within the component
    this.images = [
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      // Add more images as needed
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}
