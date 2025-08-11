module.exports = {
  apps: [
    {
      name: 'zerapos-be',
      script: 'dist/main.js',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
