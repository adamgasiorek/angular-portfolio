import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [AsyncPipe, RouterLink, PageLayoutComponent, GalleryComponent],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.scss',
})
export class PicturesComponent {
  list = [
    {
      link: 'https://photos.app.goo.gl/xG8FAQiCLtMSxPcA6',
      title: 'Top pictures',
      thumb:
        'https://lh3.googleusercontent.com/pw/AP1GczOV2HpnVamC5W-DSyEP0AejoLeNbBmOExPPkxdhscoi-JGb50OIQv9nSapkGdguEHnjh4YXmHSQHbU_2xvf9xrgnjjb0DorbwLYLVIsnRbuFQaPYDC8dHagF49tOALN0iHrKROfteTsUdmyfhiLP6jFsg=w2304-h1536-s-no-gm?authuser=0',
    },
    {
      link: 'https://photos.app.goo.gl/6Y59RuNe2s4iGk2n8',
      title: 'Wild animals',
      thumb:
        'https://lh3.googleusercontent.com/pw/AP1GczMHzzC8ti_5tZuFyQzDmwFTVrxNXvHVGxq9h36hYNNkixTtSopoKnJrwmIuld2BdIVohwgMXUXO9Sfqm1AVvfai-U11GNR6AHKsEBJnMXZXPZOI34DU5yM-AlaV3qrSfCzQkoYpVrkt2T8ZLdQacidz0Q=w1816-h1548-s-no-gm?authuser=0',
    },
  ];
}
