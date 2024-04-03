// Affichage de la map leaflet
document.addEventListener("DOMContentLoaded", (event) => {
    const key = 'UsTkArdJgWSIZOEqSvTe';
    const map = L.map('map', { 
        zoomControl: false,
        minZoom: 8,
        maxZoom: 20
    }).setView([48.583328, 7.75], 15);
    const mtLayer = L.maptilerLayer({
        apiKey: key,
        style: "dataviz-dark",
    }).addTo(map);

    var goldIcon = L.icon({
        iconUrl: '../img/h1-pin.png',
    });

    var marker = L.marker([48.583328, 7.75], { icon: goldIcon }).addTo(map);
})