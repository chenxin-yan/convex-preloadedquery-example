"use client";

import { type Preloaded, usePreloadedQuery } from "convex/react";
import type { api } from "../../../../convex/_generated/api";

interface Props {
  preloadedTodos: Preloaded<typeof api.tasks.get>;
}

export function TodoList({ preloadedTodos }: Props) {
  const todos = usePreloadedQuery(preloadedTodos) || [];

  return (
    <>
      <h1>some todos:</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
      <p>above are my todos</p>
    </>
  );
}
