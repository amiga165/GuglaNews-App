import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPagePageRoutingModule } from './news-page-routing.module';

import { NewsPagePage } from './news-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPagePageRoutingModule
  ],
  declarations: [NewsPagePage]
})
export class NewsPagePageModule {}
