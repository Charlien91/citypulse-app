export async function GET() {
  const data = [
    { label: 'Emerging Market', value: 'Quantum Computing - Boston', trend: 'up', growth: '+47%' },
    { label: 'Hot Sector', value: 'Climate Tech - London', trend: 'up', growth: '+38%' },
    { label: 'Partnership Gap', value: 'EU-US Biotech', trend: 'neutral', growth: 'High Potential' }
  ];
  return Response.json({ insights: data });
}
