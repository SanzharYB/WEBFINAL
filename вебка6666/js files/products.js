document.addEventListener('DOMContentLoaded', () => {
    loadFilters();
    applyFilters();

    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
});

function saveFilters() {
    const filters = {
        gender: document.getElementById('gender').value,
        type: document.getElementById('type').value,
        season: document.getElementById('season').value,
        minPrice: document.getElementById('min-price').value,
        maxPrice: document.getElementById('max-price').value,
        searchTerm: document.getElementById('search-term').value.toLowerCase() // Save search term
    };
    localStorage.setItem('filters', JSON.stringify(filters));
}

function loadFilters() {
    const savedFilters = JSON.parse(localStorage.getItem('filters'));
    if (savedFilters) {
        document.getElementById('gender').value = savedFilters.gender || 'all';
        document.getElementById('type').value = savedFilters.type || 'all';
        document.getElementById('season').value = savedFilters.season || 'all';
        document.getElementById('min-price').value = savedFilters.minPrice || '';
        document.getElementById('max-price').value = savedFilters.maxPrice || '';
        document.getElementById('search-term').value = savedFilters.searchTerm || ''; // Load search term
    }
}

function applyFilters() {
    saveFilters();

    const genderFilter = document.getElementById('gender').value;
    const typeFilter = document.getElementById('type').value;
    const seasonFilter = document.getElementById('season').value;
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    const searchTerm = document.getElementById('search-term').value.toLowerCase(); // Get search term

    document.querySelectorAll('.product-item').forEach(item => {
        const itemGender = item.getAttribute('data-gender');
        const itemType = item.getAttribute('data-type');
        const itemSeason = item.getAttribute('data-season');
        const itemPrice = parseFloat(item.getAttribute('data-price'));
        const itemName = item.querySelector('h3').textContent.toLowerCase(); // Get product name

        const matchesGender = genderFilter === 'all' || itemGender === genderFilter;
        const matchesType = typeFilter === 'all' || itemType === typeFilter;
        const matchesSeason = seasonFilter === 'all' || itemSeason === seasonFilter;
        const matchesPrice = itemPrice >= minPrice && itemPrice <= maxPrice;
        const matchesSearch = !searchTerm || itemName.includes(searchTerm); // Check search match

        item.style.display = (matchesGender && matchesType && matchesSeason && matchesPrice && matchesSearch) ? 'block' : 'none';
    });
}

function clearFilters() {
    localStorage.removeItem('filters');
    document.getElementById('gender').value = 'all';
    document.getElementById('type').value = 'all';
    document.getElementById('season').value = 'all';
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    document.getElementById('search-term').value = ''; // Clear search term
    applyFilters();
}
