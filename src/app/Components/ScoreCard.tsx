//Components/ScoreCard.tsx
import React from "react";
import { ScoreCardProps } from "../Interfaces/quiz-app";
const ScoreCard: React.FC<ScoreCardProps> = ({
  quizResult,
  questions,
  name,
}) => {
  const passPercentage = 60;

  const percentage = (quizResult.score / (questions.length * 5)) * 100;
  const status = percentage >= passPercentage ? "Pass" : "Fail";

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">
          Hello, {name}. Here is your Result Analysis
        </h3>
        <table className="min-w-full table-auto">
          <tbody>
            <tr>
              <td className="border px-4 py-2">Total Questions:</td>
              <td className="border px-4 py-2">{questions.length}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Total Score:</td>
              <td className="border px-4 py-2">{quizResult.score}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Correct Answers:</td>
              <td className="border px-4 py-2">{quizResult.correctAnswers}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Wrong Answers:</td>
              <td className="border px-4 py-2">{quizResult.wrongAnswers}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Percentage:</td>
              <td className="border px-4 py-2">{percentage}%</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Status:</td>
              <td className="border px-4 py-2">{status}</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white py-2 px-4
                     rounded-md mt-4 hover:bg-blue-700">
          Restart
        </button>
      </div>
    </>
  );
};

export default ScoreCard;