"use client";

import { Button } from "@repo/ui/components/button";
import { Plus } from "@repo/icons";

export const CreateBoard = () => {
  return (
    <div
      className={`flex justify-between items-center  gap-3  p-2.5 basis-[300px] rounded bg-zinc-900`}
    >
      <span>New Board</span>
      {/* Actions */}
      <div>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
