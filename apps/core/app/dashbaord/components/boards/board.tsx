"use client";
import { Button } from "@repo/ui/components/button";
import { DIALOG_QUERY_NAME } from "@repo/ui/components/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import { useQueryParams } from "@repo/ui/hooks/use-query-params";
import { MoreHorizontal, Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import type { BoardType } from "../../store/useBoardStore";
import { CREATE_TASK_DIALOG_QUERY_ID } from "../create-task-dialog";
import { TASK_TYPE_DND } from "./task-baord";

export interface BoardProps extends BoardType {
  children: React.ReactNode;
}

export const Board = ({ children, label, id }: BoardProps) => {
  const [openCreateTicket, setOpenCreateTicket] = useState(false);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: TASK_TYPE_DND,
      drop: () => console.log("test"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [],
  );

  const { setQuery } = useQueryParams();
  const openCreateTaskDialog = () => {
    setQuery(DIALOG_QUERY_NAME, CREATE_TASK_DIALOG_QUERY_ID);
  };

  return (
    <div
      ref={drop}
      className={`flex flex-col gap-3 items-start p-2.5 h-full basis-[300px] rounded bg-zinc-900`}
    >
      {/* Header */}
      <div className="flex justify-between w-full ">
        <Button className="rounded">{label}</Button>
        {/* Actions */}
        <div>
          {/* Other Actions */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Board Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* Edit */}
              <DropdownMenuItem>
                <span>Edit</span>
                <DropdownMenuShortcut>
                  <Pencil className="h-4 w-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              {/* Delete */}
              <DropdownMenuItem>
                <span>Delete</span>
                <DropdownMenuShortcut>
                  <Trash className="h-4 w-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Add Task */}
          <Button
            variant="ghost"
            onClick={() => {
              openCreateTaskDialog();
            }}
            className="h-8 w-8 p-0"
          >
            <span className="sr-only">Open menu</span>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Task Content */}
      <div className="flex gap-2 flex-col w-full">{children}</div>
    </div>
  );
};
