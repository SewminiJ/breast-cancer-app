export default async function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
  
      console.log(777, data)
      try {
        // Send the data to the Flask backend for prediction
        const response = await fetch('http://localhost:5000/api/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();

        console.log(777, data)
  
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  