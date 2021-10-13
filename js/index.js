// Vegalite Map Embed
var spec2 = "data/choropleth_map.vg.json";
vegaEmbed("#choropleth-map", spec2, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec3 = "data/isotype_grid_gender.vg.json";
vegaEmbed("#isotype-grid-gender", spec3, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec4 = "data/isotype_grid_military.vg.json";
vegaEmbed("#isotype-grid-military", spec4, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec5 = "data/age_barchart.vg.json";
vegaEmbed("#age-bar-chart", spec5, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec6 = "data/isotype_dot_plot.vg.json";
vegaEmbed("#isotype-dot-plot", spec6, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec7 = "data/eva_hrs_bar_chart.vg.json";
vegaEmbed("#eva-hrs-bar-chart", spec7, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
