interface IUserItem {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;
}

export interface IUserState {
  payload: any;
  value: Array<IUserItem>;
}
