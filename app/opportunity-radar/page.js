'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function OpportunityRadar() {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    async function fetchSummaries() {
      const { data, error } = await supabase.from('ai_summaries').select('*').order('created_at', { ascending: false });
      if (error) console.error('Error fetching summaries:', error);
      else setSummaries(data);
    }
    fetchSummaries();
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔮 Opportunity Radar — AI Insights</h1>

      {summaries.length === 0 && <p>No AI summaries found yet.</p>}

      {summaries.map((summary) => (
        <div key={summary.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h3>{summary.summary_type} — {new Date(summary.created_at).toLocaleDateString()}</h3>
          <p>{summary.content}</p>
        </div>
      ))}
    </main>
  );
}

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
