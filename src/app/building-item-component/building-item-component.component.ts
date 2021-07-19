import { Component, Input, OnInit } from '@angular/core';
import { BuildingService } from '../services/building/building.service';
import { Building } from './building.model';

@Component({
  selector: 'building-item-component',
  templateUrl: './building-item-component.component.html',
  styleUrls: ['./building-item-component.component.sass'],
})
export class BuildingItemComponent implements OnInit {
  @Input()
  building!: Building;

  constructor(private buildingService: BuildingService) {}

  ngOnInit(): void {}

  public deleteBuildingAsync() {
    if (confirm('Are you sure you want to delete this building?')) {
      this.buildingService.deleteBuildingAsync(this.building.id);
    }
  }
}
