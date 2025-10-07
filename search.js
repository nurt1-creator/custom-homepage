const input = document.getElementById('search-input');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = input.value.trim();
    if (!query) return;

    // Если похоже на URL
    if (query.startsWith('http') || query.includes('.') && !query.includes(' ')) {
      window.open(
        query.startsWith('http') ? query : `https://${query}`,
        '_blank'
      );
    } else {
      // Иначе поиск в Google
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }

    input.value = '';
  }
});
