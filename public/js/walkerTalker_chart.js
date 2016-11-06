var chartData;
var body = {
  "name1":"user1",
  "name2":"user2"
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
                  "subcaption": "XY for " + data[0].name + " and " + data[30].name,
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
                  "seriesname": "User1",
                  "color": "#5DA5DA",
                  "anchorsides": "3",
                  "anchorradius": "4",
                  "anchorbgcolor": "#5DA5DA",
                  "anchorbordercolor": "#5DA5DA",
                  "data": make_plottable_data(data[0].acc_x,data[0].acc_y)
              }, {
                  "drawLine":"0",
                  "lineColor": "#f8bd19",
                  "seriesname": "User2",
                  "color": "#f8bd19",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#f8bd19",
                  "anchorbordercolor": "#f8bd19",
                  "data": make_plottable_data(data[30].acc_x,data[30].acc_y)
              }]
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
                  "subcaption": "YZ for " + data[0].name + " and " + data[30].name,
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
                  "seriesname": "User1",
                  "color": "#5DA5DA",
                  "anchorsides": "3",
                  "anchorradius": "4",
                  "anchorbgcolor": "#5DA5DA",
                  "anchorbordercolor": "#5DA5DA",
                  "data": make_plottable_data(data[0].acc_y,data[0].acc_z)
              }, {
                  "drawLine":"0",
                  "lineColor": "#f8bd19",
                  "seriesname": "User2",
                  "color": "#f8bd19",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#f8bd19",
                  "anchorbordercolor": "#f8bd19",
                  "data": make_plottable_data(data[30].acc_y,data[30].acc_z)
              }]
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
                  "subcaption": "ZX for " + data[0].name + " and " + data[30].name,
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
                  "data": make_plottable_data(data[0].acc_z,data[0].acc_z)
              }, {
                  "drawLine":"0",
                  "lineColor": "#f8bd19",
                  "seriesname": "ZX2",
                  "color": "#f8bd19",
                  "anchorsides": "4",
                  "anchorradius": "4",
                  "anchorbgcolor": "#f8bd19",
                  "anchorbordercolor": "#f8bd19",
                  "data": make_plottable_data(data[30].acc_z,data[30].acc_x)
              }]
          }    
      });
      
      scatterChartXY.render();scatterChartYZ.render();scatterChartZX.render();
      var template = Handlebars.compile($("#tabular-template").html());
      $("#table-location").html(template(data));
    }
  });
});
