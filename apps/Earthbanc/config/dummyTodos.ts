import { Todo } from "@prisma/client";

export const dummyTodos: Todo[] = [
  {
    id: "1",
    title: "Water plants",
    description: "",
    isDone: false,
    priority: "LOW",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    id: "2",
    title: "Apply for new job",
    description: "",
    isDone: false,
    priority: "MEDIUM",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    id: "3",
    title: "Finish this project",
    description: "",
    isDone: true,
    priority: "HIGH",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
];
