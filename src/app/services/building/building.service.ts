import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import {
  Building,
  CreateBuildingRequest,
} from '../../building-item-component/building.model';

@Injectable()
export class BuildingService {
  public _buildingList: Building[] = [];
  private _buildingListSubject: Subject<Building[]> = new Subject<Building[]>();
  public buildingListStream$: Observable<Building[]> =
    this._buildingListSubject.asObservable();

  private baseUrl = 'http://localhost:5000/buildings';

  constructor(private http: HttpClient) {}

  public addBuildingAsync(request: CreateBuildingRequest) {
    let url = `${this.baseUrl}/createBuilding/`;

    var response = this.http.post<Building>(url, request);
    response
      .toPromise()
      .then((res) => this.updateBuildingList())
      .catch((err) => console.log(err));
  }

  public deleteBuildingAsync(id: number) {
    let url = `${this.baseUrl}/deleteBuilding/${id}`;
    var response = this.http.delete<boolean>(url);
    response
      .toPromise()
      .then((res) => this.updateBuildingList())
      .catch((err) => console.log(err));
  }

  public async updateBuildingList() {
    const result = await this.getAllBuildingsAsync()
      .then((res) => {
        this._buildingList = res;
        this._buildingListSubject.next(this._buildingList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private getAllBuildingsAsync(): Promise<Building[]> {
    let url = `${this.baseUrl}/listAll`;
    var response = this.http.get<Building[]>(url);
    return response.toPromise();
  }
}
