"use client";

import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const ItemTypes = {
  KNIGHT: "knight",
};

const Page = () => {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  function Knight() {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.KNIGHT,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    return (
      <div
        ref={drag}
        style={{
          backgroundColor: "transparent !important",
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: "bold",
          cursor: "move",
        }}
        className="flex justify-center items-center"
      >
        ♘
      </div>
    );
  }

  function canMoveKnight(toX: number, toY: number) {
    const [x, y] = position;
    const dx = toX - x;
    const dy = toY - y;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  }

  function handleSquareClick(toX: number, toY: number) {
    console.log(toX, toY, canMoveKnight(toX, toY));

    if (canMoveKnight(toX, toY)) {
      setPosition([toX, toY]);
    }
  }

  function Square({
    black,
    children,
  }: {
    black: boolean;
    children: React.ReactNode;
  }) {
    const fill = black ? "black" : "white";
    const stroke = black ? "white" : "black";

    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: "100%",
          height: "100%",
        }}
        className="flex justify-center items-center"
      >
        {children}
      </div>
    );
  }

  function renderPiece(
    x: number,
    y: number,
    [knightX, knightY]: [number, number],
  ) {
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }

  function renderSquare(i: number, knightPosition: [number, number]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    );
  }

  function Overlay({ color }: { color: string }) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: color,
        }}
      />
    );
  }

  function BoardSquare({
    x,
    y,
    children,
  }: {
    x: number;
    y: number;
    children: React.ReactNode;
  }) {
    const black = (x + y) % 2 === 1;
    const [{ isOver, canDrop }, drop] = useDrop(
      () => ({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => handleSquareClick(x, y),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop(),
        }),
      }),
      [x, y],
    );

    return (
      <div
        ref={drop}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Square black={black}>{children}</Square>
        {isOver && !canDrop && <Overlay color="red" />}
        {!isOver && canDrop && <Overlay color="yellow" />}
        {isOver && canDrop && <Overlay color="green" />}
      </div>
    );
  }

  function Board({ knightPosition }: { knightPosition: [number, number] }) {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i, knightPosition));
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <DndProvider backend={HTML5Backend}>
        <div className="h-96 w-96">
          <Board knightPosition={position} />
        </div>
      </DndProvider>
    </div>
  );
};

export default Page;
