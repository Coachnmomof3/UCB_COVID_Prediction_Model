function init() {
    var selector = d3.select("#selDataset");
  
//     d3.json("samples.json").then((data) => {
//       console.log(data);
//       var sampleNames = data.names;
//       sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
//       optionChanged(sampleNames[0]); 
//   })}
  
//   init();

// function optionChanged(newSample) {
//     buildMetadata(newSample);
//     buildBarChart(newSample);
//     buildBubbleChart(newSample);
//     buildGauge(newSample); 
//     }

// function buildMetadata(sample) {
// d3.json("samples.json").then((data) => {
//     var metadata = data.metadata;
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     var PANEL = d3.select("#sample-metadata");

//     PANEL.html("");
//     PANEL.append("h6").text('ID: ' + result.id)
//     PANEL.append("h6").text('Ethnicity: ' + result.ethnicity)
//     PANEL.append("h6").text('Gender: ' + result.gender)
//     PANEL.append("h6").text('Age: ' + result.age)
//     PANEL.append("h6").text('Location: ' + result.location)
//     PANEL.append("h6").text('BBTYPE: ' + result.bbtype)
//     PANEL.append("h6").text('WFREQ: ' + result.wfreq);
// });
// }


// // BAR CHART
// // 1. Create the buildCharts function.
// function buildBarChart(sample) {
//   // 2. Use d3.json to load and retrieve the samples.json file 
//   d3.json("samples.json").then((data) => {
//     // 3. Create a variable that holds the samples array. 
//     var sampleData = data.samples;

//     // 4. Create a variable that filters the samples for the object with the desired sample number.
//     var filterSample = sampleData.filter(sampleObj => sampleObj.id == sample); 
  
//     //  5. Create a variable that holds the first sample in the array.
//     var result = filterSample[0]; 

//     // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.

//     var userIds = result.otu_ids.slice(0,11); 
//     var yvalue = userIds.map(id => "OTU" + id).reverse(); 
//     var labels = result.otu_labels.slice(0,11).reverse(); 
//     var sampVals = result.sample_values.slice(0,11).reverse(); 

//     console.log(userIds)
//     console.log(yvalue)
//     console.log(labels)
//     console.log(sampVals)


//     // 7. Create the yticks for the bar chart.
//     // Hint: Get the the top 10 otu_ids and map them in descending order  
//     //  so the otu_ids with the most bacteria are last. 

//     // 8. Create the trace for the bar chart. 
//     var barData = {
//       x: sampVals, 
//       y: yvalue, 
//       type: "bar", 
//       text: labels, 
//       orientation: "h"
//     };
   
//     // 9. Create the layout for the bar chart. 
//     var barLayout = {
//       title: "Top 10 Samples"
//     };
//     // 10. Use Plotly to plot the data with the layout. 
//     Plotly.newPlot("bar", [barData], barLayout)
  
//   });
// }

// // BUBBLE CHART
// // Create the buildCharts function.
// function buildBubbleChart(sample) {
//   // Use d3.json to load and retrieve the samples.json file 
//   d3.json("samples.json").then((data) => {
//     // Create a variable that holds the samples array. 
//     var sampleData = data.samples;

//     // Create a variable that filters the samples for the object with the desired sample number.
//     var filterSample = sampleData.filter(sampleObj => sampleObj.id == sample); 

//     // Create a variable that holds the first sample in the array.
//     var result = filterSample[0]; 

//     // Create variables that hold the otu_ids, otu_labels, and sample_values.

//     var userIds = result.otu_ids; 
//     //var yvalue = userIds.map(id => "OTU" + id).reverse(); 
//     var labels = result.otu_labels; 
//     var sampVals = result.sample_values; 

//     // Create the yticks for the bar chart.
//     // Hint: Get the the top 10 otu_ids and map them in descending order  
//     // so the otu_ids with the most bacteria are last. 

//     // 1. Create the trace for the bubble chart.
//     var bubbleData = [{
//       x: userIds, 
//       y: sampVals, 
//       text: labels, 
//       mode: 'markers', 
//       marker: {
//         size: sampVals, 
//         color: userIds
//       }
//     }];

//     // 2. Create the layout for the bubble chart.
//     var bubbleLayout = {
//       title: "Bubble Chart", 
//       xaxis: {title: "OTU IDS"}, 
//       yaxis: {title: "Sample Values"}
//     };

//     // 3. Use Plotly to plot the data with the layout.
//     Plotly.newPlot("bubble", bubbleData, bubbleLayout)

//   });
// }





// Sankey Diagram 
// function buildSankey(data)



Plotly.d3.json('https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/sankey_energy.json', function(fig){
  var data = {
  type: "sankey",
  orientation: "h",
  node: {
    pad: 15,
    thickness: 30,
    line: {
      color: "black",
      width: 0.5
    },
   label: ["A1", "A2", "B1", "B2", "C1", "C2"],
   color: ["blue", "blue", "blue", "blue", "blue", "blue"]
      },

  link: {
    source: [0,1,0,2,3,3],
    target: [2,3,3,4,4,5],
    value:  [8,4,2,8,4,2]
  }
}

  var data = [data];
  console.log('hello');

  var layout = {
    title: "Basic Sankey",
    font: {
      size: 10
    }
  }

Plotly.newplot('sankey', data, layout)
})};

// //GAUGE CHART
// function buildGauge(sample) {
//   // Use d3.json to load the samples.json file 
//   d3.json("samples.json").then((data) => {
//     console.log(data);

//     // Create a variable that holds the samples array. 
//       var metadata = data.metadata;
//       var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);

//     // Create a variable that filters the samples for the object with the desired sample number.

//     // 1. Create a variable that filters the metadata array for the object with the desired sample number.

//     // Create a variable that holds the first sample in the array.
  

//     // 2. Create a variable that holds the first sample in the metadata array.
    

//     // Create variables that hold the otu_ids, otu_labels, and sample_values.


//     // 3. Create a variable that holds the washing frequency.
//    var washfreq = resultArray[0].wfreq


//     // 4. Create the trace for the gauge chart.
//     var gaugeData = [{
//       domain: {x:[0,1], y: [0,1]}, 
//       value: washfreq, 
//       title: {text: "Washing Frequency"}, 
//       type: "indicator", 
//       mode: "gauge+number", 
//       gauge: {
//         axis:{range:[null, 10]}, 
//     steps: [
//       {range: [0, 2], color: "red"},
//       {range: [2, 4], color: "orange"},
//       {range: [4, 6], color: "yellow"},
//       {range: [6, 8], color: "lightgreen"}, 
//       {range: [8, 10], color: "green"}
//      ], 
//      threshold: {
//        line: {color: "grey", width: 5}, 
//     thickness:.75, 
//     value: washfreq
//   }
// }
// }
// ];
    
//     // 5. Create the layout for the gauge chart.
//     var gaugeLayout = { 
//       width: 600, height: 500, margin: {t:0, b: 0}};

//     // 6. Use Plotly to plot the gauge data and layout.
//     Plotly.newPlot("gauge", gaugeData, gaugeLayout)
//   });
// }