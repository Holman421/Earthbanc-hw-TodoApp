type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

type Todo = {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
    priority: Priority;
    createdAt: Date;
  };