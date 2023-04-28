import React, { useState } from 'react';

function Bio() {
  const [photos, setPhotos] = useState([
    'https://example.com/photo1.jpg',
    'https://example.com/photo2.jpg',
    'https://example.com/photo3.jpg',
  ]);

  function handleAddPhoto() {
    const url = prompt('Enter the URL of the photo you want to add:');
    if (url) {
      setPhotos([...photos, url]);
    }
  }

  return (
    <div>
      <h2>About Cuddles and Curiosities</h2>
      <p>We are a small crochet business that specializes in handmade cuddly toys and curious creatures.</p>

      <h3>Photo Album</h3>
      <button onClick={handleAddPhoto}>Add Photo</button>
      {photos.map((photo) => (
        <img src={photo} alt="Cuddles and Curiosities" />
      ))}
    </div>
  );
}

export default Bio;
