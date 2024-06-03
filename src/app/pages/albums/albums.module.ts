import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { albumsRouting } from './albums.routing';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(albumsRouting), CommonModule],
})
export class AlbumsModule {}
