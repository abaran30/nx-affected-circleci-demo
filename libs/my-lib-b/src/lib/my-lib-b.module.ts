import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b/b.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BComponent],
  exports: [BComponent]
})
export class MyLibBModule {}
