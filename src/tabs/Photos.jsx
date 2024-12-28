import { getPhotos } from '../apiService/photos';

import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';

const Photos = () => {
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (!query) return;

    const setPhotos = async () => {
      try {
        const photos = await getPhotos(query, 1);
        console.log(photos);
      } catch (error) {
        console.log(error.message);
      }
    };
    setPhotos();
  }, [query]);

  const handleSubmit = text => {
    setQuery(text);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
    </>
  );
};

export default Photos;
