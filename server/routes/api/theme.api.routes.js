const app = require('../../app');
const router = require('express').Router();
const { Theme, Question } = require('../../db/models');

// router.get('/', async (req, res) => {
//   try {
//     const data = await Question.findAll();
//     res.json(data);
//   } catch (error) {
//     res.status(418).json({ error: error.massage });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const data = await Theme.findAll({ include: Question });
    console.log(data);
    res.json(data);
  } catch (error) {
    res.status(418).json({ error: error.message });
  }
});

module.exports = router;
