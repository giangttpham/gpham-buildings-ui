import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Building } from './building-item-component/building.model';
import { BuildingService } from './services/building/building.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  public buildingList: Building[];
  public buildingListSubscription: Observable<Building[]> =
    this.buildingService.buildingListStream$;
  public buildingForm: FormGroup;
  constructor(
    private buildingService: BuildingService,
    private formBuilder: FormBuilder
  ) {
    this.buildingList = [];
    this.buildingForm = this.formBuilder.group({
      address: ['', Validators.required],
      name: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.buildingListSubscription.pipe().subscribe((buildings) => {
      this.buildingList = buildings;
    });

    this.buildingService.updateBuildingList();
    this.buildingList = this.buildingService._buildingList;
  }

  public addBuildingAsync() {
    if (confirm('Are you sure you want to add a new building?')) {
      this.buildingService.addBuildingAsync(this.buildingForm.value);
    }
  }
}
