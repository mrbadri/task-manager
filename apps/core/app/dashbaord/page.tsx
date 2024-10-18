"use client";

import { Boards } from "./components/boards/boards";
import { CreateTaskDialog } from "./components/create-task-dialog";

export function Dashboard() {
  console.log("Run Page");

  return (
    <div className="flex flex-1 flex-col">
      {/* header */}
      <div className="container py-4">
        <h1 className="text-lg font-semibold md:text-xl">
          WorkSpace one - Project One
        </h1>
      </div>

      <hr />

      {/* Tabs */}
      <div className="container py-2 text-base md:text-lg">
        <span>Board</span>
      </div>

      <hr />

      <section className="container flex gap-2 flex-1 py-3">
        <Boards />
      </section>

      {/* Handle with Query Params dialogId=create-task  */}
      <CreateTaskDialog />
    </div>
  );
}

export default Dashboard;
