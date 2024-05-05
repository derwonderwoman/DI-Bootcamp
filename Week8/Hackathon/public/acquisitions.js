const BASE = 'http://localhost:5000';

window.onload = async function renderChart() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const ctx = document.getElementById('myChart').getContext('2d');

    const categories = await fetch(BASE + '/amounts/' + id)
        .then(resp => resp.json())
        .then(array => array.map(v => v.name));

    const amounts = await fetch(BASE + '/amounts/' + id)
        .then(resp => resp.json())
        .then(array => array.map(v => v.totalamount));

    fetch(BASE + '/advice/' + id)
        .then(resp => resp.text())
        .then(advice => document.getElementById("openai-data").innerHTML = advice);

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:categories,
            datasets: [{
                label: '# Your Expenses',
                data: amounts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 192, 203, 0.2)',
                'rgba(238, 130, 238, 0.2)',
                'rgba(0, 128, 0, 0.2)',
                'rgba(128, 0, 128, 0.2)',
                'rgba(0, 0, 128, 0.2)',
                'rgba(128, 128, 0, 0.2)',
                'rgba(128, 0, 0, 0.2)',
                'rgba(0, 128, 128, 0.2)',
                'rgba(0, 0, 0, 0.2)'
            ],

            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 192, 203, 1)',
                'rgba(238, 130, 238, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(128, 0, 128, 1)',
                'rgba(0, 0, 128, 1)',
                'rgba(128, 128, 0, 1)',
                'rgba(128, 0, 0, 1)',
                'rgba(0, 128, 128, 1)',
                'rgba(0, 0, 0, 1)'
            ],
                borderWidth: 1
            }]
        },
        options: {
            barThickness: 90,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
});

}