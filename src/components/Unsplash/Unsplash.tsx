import React, { useState } from "react";

//styles
import "./unsplash.scss";

// interface for the photo object returned from the Unsplash API
interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface UnsplashProps {
  onPhotoClick: (photoUrl: string) => void;
}

const Unsplash = ({ onPhotoClick }: UnsplashProps) => {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const ACCESS_KEY: string = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const searchPhotos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&orientation=landscape`
    );
    const data = await response.json();
    setPhotos(data.results);
  };

  const handlePhotoClick = (photoUrl: string) => {
    onPhotoClick(photoUrl);
  };

  return (
    <div>
      <form onSubmit={searchPhotos}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search background image"
        />
        <button type="submit">Search</button>
      </form>
      <div className="overlay">
        {photos.map(
          (
            photo: any
          ) /* In a real-world scenario, it would be better to define an interface or type for the photo object to ensure type safety throughout the codebase.*/ => (
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              key={photo.id}
              onClick={() => handlePhotoClick(photo.urls.regular)}
            />
          )
        )}
        button
      </div>
    </div>
  );
};

export default Unsplash;
