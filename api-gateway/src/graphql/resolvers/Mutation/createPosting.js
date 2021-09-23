import PostingsService from '#root/adapters/PostingsService';

const createPostingResolver = async (obj, { description, title }, context) => {
  if (!context.res.locals.userSession) throw new Error('Not logged in!');
  return await PostingsService.createPosting({ description, title });
};

export default createPostingResolver;
