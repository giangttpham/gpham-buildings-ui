import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingService } from './building.service';
import { BuildingServiceModule } from './building.service.module';

describe('BuildingService', () => {
  let service: BuildingService;
  let fixture: ComponentFixture<BuildingService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BuildingServiceModule],
    });
    service = TestBed.inject(BuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should get all buildings after deletion');
  xit('should get all buildings after creation');
  xit('should update stream after getting all buildings');
});
