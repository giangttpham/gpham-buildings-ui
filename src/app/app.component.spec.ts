import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { Building } from './building-item-component/building.model';
import { BuildingService } from './services/building/building.service';

const MockBuildings: Building[] = [
  {
    address: '123 Bird Ave, CandyCorn Town',
    id: 1,
    name: 'Cartoon Tower',
    state: 'OR',
    zipcode: '652947',
  },
];

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let buildingService: BuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [BuildingService],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    buildingService = fixture.debugElement.injector.get(BuildingService);
  });

  beforeEach(() => {
    spyOn<any>(buildingService, 'getAllBuildingsAsync').and.returnValue(
      Promise.resolve(MockBuildings)
    );
    component.ngOnInit();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  xit('should initialize with empty building list');
  xit('should update building list when building list subscription changes');
  xit('should validate address field');
  xit('should validate name field');
  xit('should validate state field');
  xit('should validate zipcode field');
  xit('should call service to add new building');
});
