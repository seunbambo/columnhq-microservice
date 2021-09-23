import PostingsService from '#root/adapters/PostingsService';

const postingsResolver = async () => {
  return await PostingsService.fetchAllPostings();
};

export default postingsResolver;
