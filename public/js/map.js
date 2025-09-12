maptilersdk.config.apiKey = maptilerApiKey;

const map = new maptilersdk.Map({
  container: "map", // container id
  style: maptilersdk.MapStyle.STREETS,
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 10,
});

const el = document.createElement("div");
el.className = "marker-circle";

const img = document.createElement("img");
img.src = "/images/home.png";
img.className = "marker-icon";
el.appendChild(img);

const marker = new maptilersdk.Marker({ element: el })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);
