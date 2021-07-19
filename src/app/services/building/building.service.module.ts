import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BuildingService } from './building.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [BuildingService],
})
export class BuildingServiceModule {}
