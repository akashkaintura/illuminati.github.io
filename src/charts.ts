export async function renderChart(data: any[]) {
    const { default: Chart } = await import('chart.js/auto');
    const ctx = document.getElementById('activityChart') as HTMLCanvasElement;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.language),
            datasets: [{ data: data.map(d => d.duration) }],
        },
    });
}
