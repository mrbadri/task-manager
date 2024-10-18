"use client";

import { DndProvider } from "react-dnd";
import { Board } from "./board";
import { TaskBoard } from "./task-baord";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CreateBoard } from "./create-board";

export const Boards = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex items-start gap-3 w-full ">
        <Board label="Do it" id="do-it">
          <TaskBoard
            id="1"
            label="Item 1"
            description="Item 1 description"
            assignedTo="John Doe"
          />
          <TaskBoard
            id="2"
            label="Item 2"
            description="Item 2 description"
            assignedTo="John Doe"
          />
          <TaskBoard
            id="3"
            label="Item 3"
            description="Item 3 description"
            assignedTo="John Doe"
          />
        </Board>

        <Board label="in progress" id="in-progress">
          <TaskBoard
            id="4"
            label="Item 4"
            description="Item 4 description"
            assignedTo="John Doe"
          />
          <TaskBoard
            id="5"
            label="Item 5"
            description="Item 5 description"
            assignedTo="John Doe"
          />
          <TaskBoard
            id="6"
            label="Item 6"
            description="Item 6 description"
            assignedTo="John Doe"
          />
        </Board>
        <CreateBoard />
      </div>
    </DndProvider>
  );
};
