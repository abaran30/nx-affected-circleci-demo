import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c/c.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CComponent],
  exports: [CComponent]
})
export class MyLibCModule {}
