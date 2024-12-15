//Components/Quiz.tsx
import React, { useState } from "react";
import { quiz } from "../Data/QuestionSet";
import ScoreCard from "./ScoreCard";
import { QuizProps, QuizResult, Question } from "../Interfaces/quiz-app"

const Quiz: React.FC<QuizProps> = ({ name }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [answerChecked, setAnswerChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [showResults, setShowResults] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<QuizResult>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[currentQuestionIndex];

  const onAnswerSelected = (answer: string, idx: number) => {
    setSelectedAnswerIndex(idx);
    setSelectedAnswer(answer);
    setAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === correctAnswer) {
      setQuizResult((prev) => ({
        ...prev,
        score: prev.score + 5,
        correctAnswers: prev.correctAnswers + 1,
      }));
    } else {
      setQuizResult((prev) => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
    }
    if (currentQuestionIndex !== questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
    setSelectedAnswer("");
    setSelectedAnswerIndex(null);
    setAnswerChecked(false);
  };

  return (
    <div className="container mx-auto mt-10">
      <div>
        {!showResults ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">{question}</h4>
            <ul className="list-none">
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`p-3 mb-2 border rounded-md 
                              cursor-pointer hover:bg-gray-100 ${
                    selectedAnswerIndex === idx ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6">
              <b>
                Question {currentQuestionIndex + 1}/{questions.length}
              </b>
              <button
                onClick={handleNextQuestion}
                className={`bg-blue-600 text-white
                            py-2 px-4 rounded-md ${
                  !answerChecked
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
                disabled={!answerChecked}
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Submit"
                  : "Next Question"}
              </button>
            </div>
          </div>
        ) : (
          <ScoreCard
            quizResult={quizResult}
            questions={questions}
            name={name}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;