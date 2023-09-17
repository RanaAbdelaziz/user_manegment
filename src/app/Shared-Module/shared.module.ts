import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { PrimengModule } from './primeng/primeng.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    PrimengModule

  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    PrimengModule
  ]
})
export class SharedModule { }
