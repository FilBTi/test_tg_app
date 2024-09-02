async function initMap() {
    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, } = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.695259, 55.750986],
                zoom: 17
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());

    map.addChild(new YMapDefaultFeaturesLayer());

    const content = document.createElement('div');

    content.className = 'icon'
    content.innerHTML = '<img src="img/free-icon-beer-bottle-1676691.png" alt="battle" class="icon_map">';

    const marker = new YMapMarker (
        {
            coordinates: [37.695259, 55.750986],
            draggable: true
        },
        content
    );

    map.addChild(marker);

    
}
initMap();
