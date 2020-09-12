import React, {Component} from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];

class Chart extends Component{

    getData(){
        this.props.data.map(datax => {
            dataPoints.push({
                x: datax.timestamp,
                y: [datax.open, datax.high, datax.low, datax.close]
            });
            return dataPoints;
        });
    };


    render() {
        this.getData();
        const options = {
            theme: "dark2", // "light1", "light2", "dark1", "dark2"
            animationEnabled: true,
            exportEnabled: true,
            zoomEnabled: true,
            zoomType: "xy",
            title:{
                text: "ETH-USDT"
            },
            axisX: {
                valueFormatString: "MMM DD"
            },
            axisY: {
                includeZero: false,
                prefix: "$",
                title: "Price (in USDT)"
            },
            data: [{
                type: "candlestick",
                showInLegend: true,
                name: "ETH",
                yValueFormatString: "$###0.00",
                xValueType: "dateTime",
                dataPoints: dataPoints
            }
            ]
        }
        return(
          <div className="chart">
              <CanvasJSChart options={options}/>
          </div>
        );
    }
}

export default Chart;
