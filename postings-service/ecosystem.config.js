module.exports = {
  apps: [
    {
      name: 'postings-service',
      script: 'dist/bundle.js',
      env: {
        PORT: 80,
        NODE_ENV: 'production',
      },
    },
  ],
};
