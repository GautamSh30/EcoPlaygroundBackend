import {Router} from "express";
import * as QuizController from  '../controllers/quiz-controller.js';
import * as LessonController from '../controllers/lesson-controller.js';
const router = Router(); 






router.route('/questions')
.get(QuizController.getQuestions)
.post(QuizController.insertQuestions)
.delete(QuizController.dropQuestions);

router.route('/result')
.get(QuizController.getResult)
.post(QuizController.storeResult)
.delete(QuizController.dropResult)



router.route('/lessons')
.get(LessonController.getLessons)
.post(LessonController.insertLessons)
.delete(LessonController.dropLessons)


 


export default router;
