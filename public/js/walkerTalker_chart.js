var chartData;
var body = {
  "name1":"bobby",
  "name2":"bobby"
};
function make_plottable_data(x,y){
  var plottable = [];
  var size = x.length;
  for (i=0;i<size;i++){
    plottable.push({"x":x[i],"y":y[i]});
  }
  return plottable;
};

$(function(){
  $.ajax({
    url: 'http://localhost:3000/walkers',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    type: 'POST',
    success : function(data) {
      var template = Handlebars.compile($("#tabular-template").html());
      $("#table-location").html(template(data));

      var category = [{"categories": [{
            "verticallinecolor": "666666",
            "verticallinethickness": "1",
            "alpha": "100"
          }]
        }];
      
      var scatterChartXY = new FusionCharts({
          type: 'selectscatter',
          id: 'chartXY',
          renderAt: 'chart-locationXY',
          width: '500',
          height: '350',
          dataFormat: 'json',
          dataSource: {
              "chart": {
                  
                  "anmimation" : 1,
                  "theme": "zune",
                  "caption": "XY",
                  "subcaption": "XY for "+data[0].name,
                  "yaxisname": "Y",
                  "xaxisname": "X",            
                  "showcanvasborder": "1",
                  "canvasborderthickness": "0.9",
                  "canvasborderalpha": "50",
                  "showXAxisLine": "0",                        
              },
              "categories": category["categories"],
              "dataset": [{
                  "drawLine":"0",
                  "lineColor": "#5DA5DA",
                  "seriesname": "XY1",
                  "color": "#5DA5DA",
                  "anchorsides": "3",
                  "anchorradius": "4",
                  "anchorbgcolor": "#5DA5DA",
                  "anchorbordercolor": "#5DA5DA",
                  "data": make_plottable_data(data[0].acc_y[0],data[0].acc_z[0])
              }, {
                  "drawLine":"0",
                  "lineColor": "#f8bd19",
                  "seriesname": "XY2",
                  "color": "#f8bd19",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#f8bd19",
                  "anchorbordercolor": "#f8bd19",
                  "data": make_plottable_data(data[0].acc_y[1],data[0].acc_z[1])
              },{
                  "drawLine":"0",
                  "lineColor": "#60BD68",
                  "seriesname": "XY3",
                  "color": "#60BD68",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#60BD68",
                  "anchorbordercolor": "#60BD68",
                  "data": make_plottable_data(data[0].acc_y[2],data[0].acc_z[2])
              },]
          }    
      });
      var scatterChartYZ = new FusionCharts({
          type: 'selectscatter',
          id: 'chartYZ',
          renderAt: 'chart-locationYZ',
          width: '500',
          height: '350',
          dataFormat: 'json',
          dataSource: {
              "chart": {
                  "theme": "zune",
                  "caption": "YZ",
                  "subcaption": "YZ for "+data[0].name,
                  "yaxisname": "Z",
                  "xaxisname": "Y",            
                  "showcanvasborder": "1",
                  "canvasborderthickness": "0.4",
                  "canvasborderalpha": "50",
                  "showXAxisLine": "0",                        
              },
              "categories": category["categories"],
              "dataset": [{
                  "drawLine":"0",
                  "lineColor": "#5DA5DA",
                  "seriesname": "YZ1",
                  "color": "#5DA5DA",
                  "anchorsides": "3",
                  "anchorradius": "4",
                  "anchorbgcolor": "#5DA5DA",
                  "anchorbordercolor": "#5DA5DA",
                  "data": make_plottable_data(data[0].acc_x[0],data[0].acc_y[0])
              }, {
                  "drawLine":"0",
                  "lineColor": "#f8bd19",
                  "seriesname": "YZ2",
                  "color": "#f8bd19",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#f8bd19",
                  "anchorbordercolor": "#f8bd19",
                  "data": make_plottable_data(data[0].acc_x[1],data[0].acc_y[1])
              },{
                  "drawLine":"0",
                  "lineColor": "#60BD68",
                  "seriesname": "YZ3",
                  "color": "#60BD68",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#60BD68",
                  "anchorbordercolor": "#60BD68",
                  "data": make_plottable_data(data[0].acc_x[2],data[0].acc_y[2])
              },]
          }    
      });
      var scatterChartZX = new FusionCharts({
          type: 'selectscatter',
          id: 'chartZX',
          renderAt: 'chart-locationZX',
          width: '500',
          height: '350',
          dataFormat: 'json',
          dataSource: {
              "chart": {
                  
                  "theme": "zune",
                  "caption": "ZX",
                  "subcaption": "ZX for "+data[0].name,
                  "yaxisname": "X",
                  "xaxisname": "Z",            
                  "showcanvasborder": "1",
                  "canvasborderthickness": "0.4",
                  "canvasborderalpha": "50",
                  "showXAxisLine": "0",                        
              },
              "categories": category["categories"],
              "dataset": [{
                  "drawLine":"0",
                  "lineColor": "#5DA5DA",
                  "seriesname": "ZX1",
                  "color": "#5DA5DA",
                  "anchorsides": "3",
                  "anchorradius": "4",
                  "anchorbgcolor": "#5DA5DA",
                  "anchorbordercolor": "#5DA5DA",
                  "data": make_plottable_data(data[0].acc_x[0],data[0].acc_y[0])
              }, {
                  "drawLine":"0",
                  "lineColor": "#f8bd19",
                  "seriesname": "ZX2",
                  "color": "#f8bd19",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#f8bd19",
                  "anchorbordercolor": "#f8bd19",
                  "data": make_plottable_data(data[0].acc_x[1],data[0].acc_y[1])
              },{
                  "drawLine":"0",
                  "lineColor": "#60BD68",
                  "seriesname": "ZX3",
                  "color": "#60BD68",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#60BD68",
                  "anchorbordercolor": "#60BD68",
                  "data": make_plottable_data(data[0].acc_x[2],data[0].acc_y[2])
              },]
          }    
      });
      var scatterChartXY2 = new FusionCharts({
          type: 'selectscatter',
          id: 'chartXY2',
          renderAt: 'chart-locationXY2',
          width: '500',
          height: '350',
          dataFormat: 'json',
          dataSource: {
              "chart": {
                  
                  "theme": "zune",
                  "caption": "XY for two walkers",
                  "subcaption": "XY for "+data[0].name+" and "+data[1].name,
                  "yaxisname": "Y",
                  "xaxisname": "X",            
                  "showcanvasborder": "1",
                  "canvasborderthickness": "0.4",
                  "canvasborderalpha": "50",
                  "showXAxisLine": "0",                        
              },
              "categories": category["categories"],
              "dataset": [{
                  "drawLine":"0",
                  "lineColor": "#5DA5DA",
                  "seriesname": "XY->"+data[0].name,
                  "color": "#5DA5DA",
                  "anchorsides": "3",
                  "anchorradius": "4",
                  "anchorbgcolor": "#5DA5DA",
                  "anchorbordercolor": "#5DA5DA",
                  "data": make_plottable_data(data[0].acc_x[1],data[0].acc_y[1])
              }, {
                  "drawLine":"0",
                  "lineColor": "#f8bd19",
                  "seriesname": "XY->"+data[1].name,
                  "color": "#f8bd19",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#f8bd19",
                  "anchorbordercolor": "#f8bd19",
                  "data": make_plottable_data(data[1].acc_x[0],data[1].acc_y[0])
              }]
          }    
      });
      scatterChartXY.render();scatterChartYZ.render();scatterChartZX.render();
      scatterChartXY2.render();
    }
  });
});
