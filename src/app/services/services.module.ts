import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from './shared/header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    HeaderService
  ],
  declarations: []
})
export class ServicesModule { }
