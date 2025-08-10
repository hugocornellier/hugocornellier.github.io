// hopefully forces all users to have dark theme
(function () {
    document.documentElement.setAttribute('data-theme', 'dark');
    try { localStorage.setItem('theme', 'dark'); } catch {}
})();