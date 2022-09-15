import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AComponent],
  exports: [AComponent]
})
export class MyLibAModule {}
