const router = require('express').Router();
const questionApi = require('./api/question.api.routes');
const themeApi = require('./api/theme.api.routes');

router.use('/api/question', questionApi);
router.use('/api/theme', themeApi);

module.exports = router;
