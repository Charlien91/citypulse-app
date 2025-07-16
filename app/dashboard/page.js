'use client';
import DashboardAccessCard from '../../components/DashboardAccessCard';
import AISummaryCard from '../../components/AISummaryCard';
import DataVisualizationPanel from '../../components/DataVisualizationPanel';
import OpportunityRadarCard from '../../components/OpportunityRadarCard';

export default function DashboardPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>📊 CityPulse Global — Intelligence Dashboard</h1>
      
      <DashboardAccessCard />
      <AISummaryCard />
      <DataVisualizationPanel />
      <OpportunityRadarCard />
    </main>
  );
}
