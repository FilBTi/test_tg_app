initMap();

const modal = document.querySelector('.modal');

const testObj = [
    {
        coordinates: [37.695259, 55.750986],
    },
    {
        coordinates: [37.678870, 55.747737]
    },
    {
        coordinates: [37.692781, 55.748007]
    }
];

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapControls, YMapGeolocationControl} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.695259, 55.750986],
                zoom: 15
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());

    map.addChild(new YMapDefaultFeaturesLayer());


    testObj.forEach(element => {
        const markerElement = document.createElement('div');
        markerElement.className = 'icon';
        markerElement.onclick = () => {
            modal.classList.toggle('show');
        };
        markerElement.innerHTML = '<img src="img/free-icon-beer-bottle-1676691.png" alt="battle" class="icon_map">';
        map.addChild(new YMapMarker({coordinates: element.coordinates}, markerElement));
    });

    // fetch('https://geocode-maps.yandex.ru/1.x/?apikey=35969933-e384-42c3-8de8-62b3cc344c6a&geocode=Дубай, бульвар Мухаммед Бин Рашид, дом 1&format=json')
    //     .then((data => console.log(data)))


}


// const initPoint = async (dataMarker, map) => {
//     try{
//         dataMarker.forEach(element => {
//             const markerElement = document.createElement('div');
//             markerElement.className = 'icon';
//             markerElement.onclick = () => {
//                 modal.classList.toggle('show');
//             };
//             markerElement.innerHTML = '<img src="img/free-icon-beer-bottle-1676691.png" alt="battle" class="icon_map">';
//             map.addChild(new YMapMarker({coordinates: element.coordinates}, markerElement));
//         });
//     }catch(err){

//     }
    
// };