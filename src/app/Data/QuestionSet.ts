//Data/QuestionSet.ts
import { Quiz } from '../Interfaces/quiz-app';
export const quiz: Quiz = {
    questions: [
        {
            id: 6,
            question: 'DevAnagAri lipi ka vikas kis lipi se mana zaTa Hei ?',
            answers: [ 'romAn', 'farsi', 'braHmi', 'khrosthi', ],
            correctAnswer: 'braHmi',
        },
        {
            id: 1,
            question: 'what does Api stAnd for?',
            answers: [
                'ApplicAtion programmiNg interfAce',
                'Advanced programmiNg interfAce',
                'ApplicAtion program interfAce',
                'AutomAted programmiNg interfAce',
            ],
            correctAnswer: 'ApplicAtion programmiNg interfAce',
        },
        {
            id: 3,
            question: `which programmiNg lANguAge is often
                       used for building web servers?`,
            answers: ['java', 'python', 'javascript', 'c#'],
            correctAnswer: 'javascript',
        },
        {
            id: 4,
            question: 'what is the purpose of sql?',
            answers: [
                'styliNg web pAges',
                'queryiNg databAses',
                'creAtiNg AnimAtions',
                'developiNg mobile Apps',
            ],
            correctAnswer: 'queryiNg dAtabAses',
        },
        {
            id: 5,
            question: 'vhat does mvc stAnd for in web development?',
            answers: [
                'model view controller',
                'model visual controller',
                'model view component',
                'model visual component',
            ],
            correctAnswer: 'model view controller',
        },
    ],
};
