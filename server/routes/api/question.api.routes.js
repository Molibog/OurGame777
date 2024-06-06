const { log } = require('console');
const app = require('../../app');
const router = require('express').Router();
const { Question } = require('../../db/models');

// router.get('/', async (req, res) => {
//   try {
//     const data = await Question.findAll();
//     res.json(data);
//   } catch (error) {
//     res.status(418).json({ error: error.massage });
//   }
// });

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findOne({ where: { id } });
    res.json({ message: 'success', question });
  } catch (error) {
    res.status(418).json({ error: error.message });
  }
});

module.exports = router;
