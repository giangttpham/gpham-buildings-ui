import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingService } from '../services/building/building.service';

import { BuildingItemComponent } from './building-item-component.component';
import { BuildingItemComponentModule } from './building-item-component.module';

describe('BuildingItemComponentComponent', () => {
  let component: BuildingItemComponent;
  let fixture: ComponentFixture<BuildingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingItemComponentModule],
      providers: [
        { provide: BuildingService, useValue: new BuildingServiceMock() },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingItemComponent);
    component = fixture.componentInstance;
    component.building = {
      address: '123 Main St, San Diego',
      name: 'Mountain View',
      state: 'CA',
      zipcode: '92101',
      id: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call delete method when delete button is clicked');
});

class BuildingServiceMock {
  public async updateBuildingList() {}
}
