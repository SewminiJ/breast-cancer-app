module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/data',
        destination: 'http://localhost:5000/api/data', // Update with your Flask backend URL
      },
    ];
  },
};
