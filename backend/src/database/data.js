const questions= [
  {
    id: 1,
    question:
      "What should you do with plastic bottles after drinking from them?",
    options: [
        "Recycle them",
      "Throw them in the trash",
      "Leave them on the ground",
      "Use them again and again",
    ],
  },
  {
    id: 2,
    question: "What should you do with old newspapers and magazines ?",
    options: [
      "Throw them in the trash",
      "Recycle them",
      "Burn them",
      "Use them as wrapping paper",
    ],
  },
  {
    id: 3,
    question: " What should you do with food scraps after eating?",
    options: [
      "Throw them in the trash",
      "Feed them to pets",
      "Leave them on the table",
      "Compost them",
    ],
  },
  {
    id: 4,
    question: "What is the main reason for recycling paper?",
    options: [
        'To save money',
        'To make new paper',
        'To help trees',
         'To collect more paper'
        ],
  },
];

 const answers = [0,1,3,2];

 module.exports ={
    questions,
    answers
 }
