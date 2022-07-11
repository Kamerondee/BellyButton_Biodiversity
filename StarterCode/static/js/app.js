// Read the json file using d3
function buildMetaData(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      console.log(metadata);

      // Filter the data and select the required panel
        var buildingArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = buildingArray[0];
        var panelData = d3.select("#sample-metadata");