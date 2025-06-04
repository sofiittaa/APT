// Gráfico de barras - fuentes consultadas
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Bomberos', 'Intendencias', 'Ambientalistas', 'Ecólogos', 'Científicos del Clima'],
        datasets: [{
            label: 'Porcentaje de veces citados en noticias',
            data: [70, 60, 15, 10, 8],
            backgroundColor: ['#ff6347', '#ff7f50', '#90ee90', '#4682b4', '#9370db']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Fuentes más citadas en noticias sobre incendios'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Donut chart - enfoque de los medios
const donutCtx = document.getElementById('donutChart').getContext('2d');
new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Enfoque aislado', 'Enfoque ambiental', 'Vinculado al cambio climático'],
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: ['#f4a460', '#20b2aa', '#b22222'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Tipos de enfoque en medios digitales (simulado)'
            }
        }
    }
});
/*
const infoPanel = document.getElementById('infoPanel');

document.getElementById('uruguay').addEventListener('click', () => {
    infoPanel.textContent = 'Incendios en Uruguay: Datos simulados sobre la frecuencia y el impacto de incendios forestales en Uruguay.';
    infoPanel.classList.add("infoPanel");
    new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Enfoque aislado', 'Enfoque ambiental', 'Vinculado al cambio climático'],
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: ['#f4a460', '#20b2aa', '#b22222'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Tipos de enfoque en medios digitales (simulado)'
            }
        }
    }
});
});

document.getElementById('argentina').addEventListener('click', () => {
    infoPanel.textContent = 'Incendios en Argentina: Datos simulados sobre la situación de incendios en diversas provincias argentinas.';
    infoPanel.classList.add("infoPanel");
    new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Enfoque aislado', 'Enfoque ambiental', 'Vinculado al cambio climático'],
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: ['#f4a460', '#20b2aa', '#b22222'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Tipos de enfoque en medios digitales (simulado)'
            }
        }
    }
});

});

document.getElementById('brasil').addEventListener('click', () => {
    infoPanel.textContent = 'Incendios en Brasil: Datos simulados sobre incendios en la Amazonia y otras regiones afectadas.';
    infoPanel.classList.add("infoPanel");
    new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Enfoque aislado', 'Enfoque ambiental', 'Vinculado al cambio climático'],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ['#f4a460', '#20b2aa', '#b22222'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Tipos de enfoque en medios digitales (simulado)'
            }
        }
    }
});

});
*/
