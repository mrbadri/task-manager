import { Button } from "@repo/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@repo/ui/components/dropdown-menu";
import { cn } from "@repo/ui/lib/utils";
import { MoreHorizontal, Pencil, Trash } from "@repo/icons";
import { useDrag } from "react-dnd";
import { TaskType } from "../../store/useTaskStor";

export interface TaskBoardProps extends TaskType {}

export const TASK_TYPE_DND = "TASK";

export const TaskBoard = (props: TaskBoardProps) => {
  const { label, description, assignee } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: TASK_TYPE_DND,
    item: props,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={cn(
        "bg-zinc-950 rounded p-2 w-full relative",
        isDragging && "opacity-20",
      )}
    >
      {/* Summery */}
      <div className="flex flex-col gap-0.5">
        <span>{label}</span>
        <span>{description}</span>
        <span>{assignee}</span>
      </div>
      {/* Actions */}
      <div className="absolute right-2 top-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Task Actions</DropdownMenuLabel>
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
      </div>
    </div>
  );
};
