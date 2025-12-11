"use client";

import { useState } from "react";
import "./styles.css";

// Fetch all dog breeds
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

export default function Home() {
  const [dogsBreed, setDogsBreed] = useState<string[]>([])

  const getDogDetails = () => {
    fetch(BREEDS_URL)
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      setDogsBreed(breeds);
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
    });
  }

  return (
    <>
      <header>
        <h1>Dog details</h1>
        <button onClick={getDogDetails}>Get Dog details</button>
      </header>
      <main id="dashboard">
        {
          dogsBreed.map(dog => (
            <section key={dog} className="card">
              <div className="metric" id="totalCount">{dog}</div>
            </section>    
          ))
        }
    </main>
    </>
  );
}
