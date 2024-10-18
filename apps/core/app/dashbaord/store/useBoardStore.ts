/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BoardType {
  id: string;
  label: string;
}

export interface BoardStore {
  boards: BoardType[];
  addTask: (baord: BoardType) => void;
  removeTask: (baord: BoardType) => void;
}

export const useBoardStore = create<BoardStore>()(
  persist(
    (set) => ({
      boards: [
        {
          id: "1",
          label: "Item 1",
        },
      ],
      addTask: (task) => {
        set((state) => ({
          boards: [...state.boards, task],
        }));
      },
      removeTask: (task) => {
        set((state) => ({
          boards: state.boards.filter((t) => t.id !== task.id),
        }));
      },
    }),
    {
      name: "task-manager",
    },
  ),
);
