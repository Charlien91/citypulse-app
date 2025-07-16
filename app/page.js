'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import CityChart from '../components/CityChart';

export default function HomePage() {
  const [cities, setCities] = useState([]);

  async function generateSummary(cityName, topic) {
    const response = await fetch('/api/generate-summary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cityName, topic }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('AI Error:', data.error);
    } else {
      console.log('AI Summary:', data.summary);
    }
  }

  useEffect(() => {
    async function fetchCities() {
      const { data } = await supabase.from('cities').select('*');
      setCities(data || []);
    }
    fetchCities();
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>🌍 CityPulse — Global City Intelligence Dashboard</h1>

      <button onClick={() => generateSummary('Boston', 'biotech partnerships')}>
        Generate AI Summary
      </button>

      <CityChart cities={cities} />

      {cities.map((city) => (
        <div key={city.id} style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h2>{city.name}, {city.country}</h2>
          <p><strong>Region:</strong> {city.region}</p>
          <p><strong>Population:</strong> {city.population}</p>
          <p><strong>GDP Total:</strong> {city.gdp_total}</p>
        </div>
      ))}
    </main>
  );
}
