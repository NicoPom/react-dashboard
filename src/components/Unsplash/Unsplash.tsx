import React, { useState } from "react";

const SearchPhotos: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Array<any>>([]);
  const ACCESS_KEY: string = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const searchPhotos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&orientation=landscape`
    );
    const data = await response.json();
    setPhotos(data.results);
  };

  console.log(photos);

  return (
    <div>
      <form onSubmit={searchPhotos}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search photos on Unsplash"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {photos.map(
          (
            photo: any
          ) /* In a real-world scenario, it would be better to define an interface or type for the photo object to ensure type safety throughout the codebase.*/ => (
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              key={photo.id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SearchPhotos;
