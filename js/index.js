// Vegalite Map Embed
var spec2 = "data/choropleth_map.vg.json";
vegaEmbed("#choropleth-map", spec2)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
