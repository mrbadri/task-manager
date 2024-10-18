/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TaskType {
  id: string;
  label: string;
  description: string;
  baord?: { label: string; id: string };
  assignee?: string[];
}

export interface TaskStore {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  removeTask: (task: TaskType) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [
        {
          id: "1",
          label: "Item 1",
          description: "Item 1 description",
          baord: { label: "Do it", id: "do-it" },
          assignee: ["John Doe"],
        },
      ],
      addTask: (task: TaskType) => {
        set((state) => ({
          tasks: [...state.tasks, task],
        }));
      },
      removeTask: (task: TaskType) => {
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== task.id),
        }));
      },
    }),
    {
      name: "task-manager",
    },
  ),
);
