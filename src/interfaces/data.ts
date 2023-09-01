export interface IDataItem {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
  avatar: string;
}

export type TData = IDataItem[] | [];

export interface ICheck {
  id: number
  completed: boolean
}