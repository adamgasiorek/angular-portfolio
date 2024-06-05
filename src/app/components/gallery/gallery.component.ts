import { Component, HostListener, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  imports: [NgClass],
})
export class GalleryComponent {
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.currentIndex !== null) {
      if (event.key === 'ArrowLeft') {
        this.prev();
      } else if (event.key === 'ArrowRight') {
        this.next();
      } else if (event.key === 'Escape') {
        this.close();
      }
    }
  }

  @Input() images: any[] = [];

  public currentIndex: number | null = null;

  open(index: number): void {
    this.currentIndex = index;
  }

  close(): void {
    this.currentIndex = null;
  }

  prev(): void {
    if (this.currentIndex !== null && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next(): void {
    if (
      this.currentIndex !== null &&
      this.currentIndex < this.images.length - 1
    ) {
      this.currentIndex++;
    }
  }
}
