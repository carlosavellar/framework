export interface IProductStateItem {
  id: number;
  name: string;
  description: string;
  fruits: [];
}

export interface IProductState {
  value: Array<IProductStateItem>;
}
