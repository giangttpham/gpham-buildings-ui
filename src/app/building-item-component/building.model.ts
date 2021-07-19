export interface Building {
  address: string;
  id: number;
  name: string;
  state: string;
  zipcode: string;
}

export interface CreateBuildingRequest {
  address: string;
  name: string;
  state: string;
  zipcode: string;
}
