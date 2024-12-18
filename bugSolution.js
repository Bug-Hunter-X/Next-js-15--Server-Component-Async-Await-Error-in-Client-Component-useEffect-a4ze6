import { useState, useEffect } from 'react';

async function getServerData() {
  // Simulate fetching data from a server component
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Simulate a potential server-side error (Uncomment to test)
  // throw new Error('Failed to fetch data');
  return { data: 'Data from server component' };
}

export default function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverData = await getServerData();
        setData(serverData.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <p>Data: {data}</p>
    </div>
  );
}