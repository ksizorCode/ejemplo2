const activities = [
    {
        id: 1,
        title: "Escalada en Roca",
        category: "outdoor",
        image: "https://images.unsplash.com/photo-1522163182402-834f60b58e76?auto=format&fit=crop&q=80&w=800",
        price: "25€",
        description: "Domina las alturas en las mejores paredes naturales."
    },
    {
        id: 2,
        title: "Surf al Amanecer",
        category: "water",
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800",
        price: "15€",
        description: "Conecta con el océano y atrapa las mejores olas."
    },
    {
        id: 3,
        title: "Yoga Vinyasa",
        category: "zen",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
        price: "12€",
        description: "Encuentra tu equilibrio y fluye con cada respiración."
    },
    {
        id: 4,
        title: "Crossfit Intensity",
        category: "indoor",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
        price: "10€",
        description: "Supera tus límites con entrenamientos de alta intensidad."
    },
    {
        id: 5,
        title: "Senderismo de Montaña",
        category: "outdoor",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
        price: "Gratis",
        description: "Explora rutas impresionantes y respira aire puro."
    },
    {
        id: 6,
        title: "Kitesurf Radical",
        category: "water",
        image: "https://images.unsplash.com/photo-1517466787919-ec4577df4690?auto=format&fit=crop&q=80&w=800",
        price: "40€",
        description: "Siente la velocidad impulsada por el viento."
    },
    {
        id: 7,
        title: "Pilates Reformer",
        category: "zen",
        image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=800",
        price: "20€",
        description: "Fortalece tu core con precisión y control."
    },
    {
        id: 8,
        title: "Boxeo Técnico",
        category: "indoor",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800",
        price: "18€",
        description: "Libera tensión y mejora tus reflejos en el ring."
    }
];

const grid = document.getElementById('activity-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderActivities(filter = 'all') {
    grid.innerHTML = '';

    const filtered = filter === 'all'
        ? activities
        : activities.filter(a => a.category === filter);

    filtered.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card glass';
        card.innerHTML = `
            <img src="${activity.image}" alt="${activity.title}" class="activity-img">
            <div class="activity-content">
                <span class="activity-category">${activity.category}</span>
                <h3 class="activity-title">${activity.title}</h3>
                <p class="description">${activity.description}</p>
                <div class="activity-footer">
                    <span class="price">${activity.price}</span>
                    <button class="btn-detail">Ver más</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle Active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter
        const filter = btn.getAttribute('data-filter');
        renderActivities(filter);
    });
});

// Initial render
renderActivities();
