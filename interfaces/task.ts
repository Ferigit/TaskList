export type ITask = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export interface TaskFormType {
  title: string;
  description: string;
}
