import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await axios.get('https://www.google.com/search', {
      params: {
        q: query
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during the search.' });
  }
}
