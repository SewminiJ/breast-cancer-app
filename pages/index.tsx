import { Index } from '@/modules/home/Index'
import { useState, useEffect } from 'react';

export default function Home() {
    const [backendData, setBackendData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            const data = await response.json();
            setBackendData(data);
            console.log(111, data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div>
            {/* {backendData ? (
                <p>{backendData.message}</p>
            ) : (
                <p>Loading...</p>
            )} */}
            <Index />
        </div>
    )
}