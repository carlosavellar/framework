export interface IProductStateItem {
  id: number;
  name: string;
  description: string;
  price: number;
  foto: string;
}

export interface IProductState {
  payload: any;
  value: Array<IProductStateItem>;
}
