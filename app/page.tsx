"use client"

import React, { useState } from "react";

export default function Home() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "todo 1", completed: false },
    { todoText: "todo 2", completed: true },
    { todoText: "todo 3", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    // map runs on array and return an array

    const newTodos = todos.map((todo) => {
      console.log("todo:", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };

  const addTodo = (e: any) => {
    e.preventDefault()
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo(" ");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <div className="h-screen bg-gray-800">
      <div className="mx-auto p-20 w-[70%] ">
        <p className="text-3xl font-bold text-white py-5">Todo</p>
        <form className="flex">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => addTodo(e)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <ul className="bg-gray-400 mt-10 rounded-md">

          {todos.map((elm) => {
            return (
              <div key={elm.todoText} className="flex justify-between items-center">
                <div className="space-x-5 ">
                  <li className="font-lg px-5" style={{
                    color: elm.completed ? "green" : "blue",
                    fontStyle: "oblique",
                    listStyle: "none",
                  }}
                    
                  />
                  <input
                    type="checkbox"
                    checked={elm.completed}
                    onChange={() => {
                      onClickHandler(elm);
                    }}
                  />
                  {elm.todoText}
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    deleteTodo(elm);
                  }}
                >
                  Delete
                </button>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
