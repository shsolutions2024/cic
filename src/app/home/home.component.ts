import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  async ngAfterViewInit() {
    //========= glightbox
    const { default: GLightbox } = await import('glightbox');
    const lightbox = GLightbox({
      selector: '.glightbox',
      width: '900',
      autoplayVideos: true,
    });
    //======== tiny slider for testimonial-one
    tns({
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 0,
      container: '.testimonial-one-active',
      center: true,
      nav: true,
      controls: false,
      speed: 400,
      controlsText: [
        '<i class="lni lni-arrow-left-circle"></i>',
        '<i class="lni lni-arrow-right-circle"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },

        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
}
