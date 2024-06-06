import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { albumsRouting } from './albums.routing';
import { AlbumsService } from './services/albums.service';

@NgModule({
  declarations: [],
  providers: [AlbumsService],
  imports: [RouterModule.forChild(albumsRouting), CommonModule],
})
export class AlbumsModule {}
