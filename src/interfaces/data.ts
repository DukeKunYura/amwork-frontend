export interface IDataItem {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

export type TData = IDataItem[];