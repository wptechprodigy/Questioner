import express from 'express';
import db from '../../db/db';

const router = express.Router();

// Handle questions route requests
router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Questions retrieved successfully!',
  });
});

// Handle post requests
// router.post('/:questionId', (req, res) => {
//   const questionId = parseInt(req.params.questionId);
// });

export default router;
