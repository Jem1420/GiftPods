import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { SlideAComponent } from './slide-a/slide-a.component';
import { SlideBComponent } from './slide-b/slide-b.component'


@NgModule({
  declarations: [SlidesComponent,StartComponent,LogoComponent,SlideAComponent,SlideBComponent],
  exports: [SlidesComponent,StartComponent,LogoComponent,SlideAComponent,SlideBComponent],
  imports: [
    CommonModule,FormsModule, IonicModule
  ]
})
export class ComponentsModule { }
