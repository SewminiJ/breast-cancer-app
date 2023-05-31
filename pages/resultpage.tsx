import { useState } from "react";

export default function ResultPage(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Message sent successfully!');
            // Reset form data
            setFormData({
              name: '',
              email: '',
              message: '',
            });
          } else {
            console.error('Failed to send message.');
          }
        } catch (error) {
          console.error('Error sending message:', error);
        }
      };
      
    return(
        <div className="flex items-center justify-center flex-col">
            {/* <div className="mt-24 flex flex-col">
                <input className="mb-2 "type="text" placeholder="diagnosis" />
                <input className="mb-2"type="text" placeholder="radius Mean" />
                <input className="mb-2"type="text" placeholder="texture mean" />
                <input className="mb-2"type="text" placeholder="premeter mean" />
                <input className="mb-2"type="text" placeholder="area mean" />
                <input className="mb-2"type="text" placeholder="smoothness mean" />
                <input className="mb-2"type="text" placeholder="compactness mean" />
                <input className="mb-2"type="text" placeholder="concavity mean" />
                <input className="mb-2"type="text" placeholder="concave points mean" />
                <input className="mb-2"type="text" placeholder="symmetry mean" />
                <input className="mb-2"type="text" placeholder="fractal dimension mean" />
                <input className="mb-2"type="text" placeholder="radius se" />
                <input className="mb-2"type="text" placeholder="texture se" />
                <input className="mb-2"type="text" placeholder="perimeter se" />
                <input className="mb-2"type="text" placeholder="area se" />
                <input className="mb-2"type="text" placeholder="smoothness se" />
                <input className="mb-2"type="text" placeholder="compactness se" />
                <input className="mb-2"type="text" placeholder="concativy se" />
                <input className="mb-2"type="text" placeholder="concave points se" />
                <input className="mb-2"type="text" placeholder="symmetry se" />
                <input className="mb-2"type="text" placeholder="fractal dimension se" />
                <input className="mb-2"type="text" placeholder="radius worst" />
                <input className="mb-2"type="text" placeholder="texture worst" />
                <input className="mb-2"type="text" placeholder="perimeter worst" />
                <input className="mb-2"type="text" placeholder="area worst" />
                <input className="mb-2"type="text" placeholder="smoothness worst" />
                <input className="mb-2"type="text" placeholder="compactness worst" />
                <input className="mb-2"type="text" placeholder="concavity worst" />
                <input className="mb-2"type="text" placeholder="concave points worst" />
                <input className="mb-2"type="text" placeholder="symmetry worst" />
                <input className="mb-2"type="text" placeholder="fractal dimension worst" />
                <button type="submit">Calculate</button>
            </div> */}

            <div className="mt-24">
                <h1>Contact Page</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}