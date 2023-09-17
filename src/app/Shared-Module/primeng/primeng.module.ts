import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    TableModule
  ],
  exports:[
    CardModule,
    ButtonModule,
    MenubarModule,
    TableModule
  ]
})
export class PrimengModule { }
