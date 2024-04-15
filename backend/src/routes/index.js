const express = require('express');
const  QuizController = require('../controllers/quiz-controller');
const router = express.Router(); 



router.route('/questions')
.get(QuizController.getQuestions)
.post(QuizController.insertQuestions)
.delete(QuizController.dropQuestions);

router.route('/result')
.get(QuizController.getResult)
.post(QuizController.storeResult)
.delete(QuizController.dropResult)
router.route('/result')
 


module.exports= router;
