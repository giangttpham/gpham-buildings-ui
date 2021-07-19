import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BuildingItemComponent } from './building-item-component.component';

@NgModule({
  declarations: [BuildingItemComponent],
  exports: [BuildingItemComponent],
  imports: [CommonModule, MatCardModule],
})
export class BuildingItemComponentModule {}
