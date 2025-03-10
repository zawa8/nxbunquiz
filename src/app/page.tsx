// page.tsx
"use client";
import { useState, ChangeEvent } from "react";
import Quiz from "./Components/Quiz";
import FontPicker from "./Components/lifonts/lifp"
export default function Home() {
  // Using `useState` hooks with appropriate types
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  // Define the function to handle input changes
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-green-600 text-3xl font-bold mb-4"> multiple choice questions </h1>
        <h3 className="text-xl mb-6"> quiz app </h3>
        <FontPicker/>
      </div>
      {quizStarted ? ( <Quiz name={name} /> ) : (
        <>
          <div className="mb-4">
            <label
              htmlFor="nameInput"
              className="block text-lg font-medium text-gray-700">
              your nAme enter kro:
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="nameInput"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            // Disable button if name is empty or contains only whitespace
            disabled={!name.trim()}>
            stArt multiple choice kuestion kyuiz
          </button>
        </>
      )}
    </div>
  );
}
