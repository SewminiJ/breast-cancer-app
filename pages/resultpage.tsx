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