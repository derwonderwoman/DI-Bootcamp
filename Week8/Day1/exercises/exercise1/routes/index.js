import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Homepage');
});

router.get('/about', (req, res) => {
  res.json('About Us page');
});

export default router;