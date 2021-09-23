import { Posting } from '#root/db/models';

const setupRoutes = (app) => {
  app.get('/postings', async (req, res, next) => {
    try {
      const postings = await Posting.findAll();
      return res.json(postings);
    } catch (e) {
      return next(e);
    }
  });

  app.post('/postings', async (req, res, next) => {
    if (!req.body.description || !req.body.title) {
      return next(new Error('Invalid body!'));
    }

    try {
      const posting = await Posting.create({
        description: req.body.description,
        title: req.body.title,
      });
      return res.json(posting);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;
