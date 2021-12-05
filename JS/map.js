mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbi1tYWx2aXlhIiwiYSI6ImNrdHY2M2IweTFneDQzMnFldDV2dGl0ajYifQ.GeN1NIkwhNdt6UoiXjOGiQ';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/aman-malviya/cktv6blp60aiq17qdw5vw3epl'
    });
    // Create a new marker.
    const marker = new mapboxgl.Marker({
      color:"#e71d36"
    }).setLngLat([77.4090,23.2179])
      .addTo(map);