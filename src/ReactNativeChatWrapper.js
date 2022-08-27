import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  processColor,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import moment from 'moment';

import {CandleStickChart} from 'react-native-charts-wrapper';

const App = () => {
  const [legend, setLegend] = useState({
    enabled: true,
    textSize: 14,
    form: 'CIRCLE',
    wordWrapEnabled: true,
    // maxSizePercent:Number
    horizontalAlignment: 'CENTER',
  });
  const [data, setData] = useState({
    dataSets: [
      {
        values: [
          {shadowH: 105.76, shadowL: 100.4, open: 100.78, close: 101.03 },
          {shadowH: 102.91, shadowL: 101.78, open: 101.91, close: 102.52},
          {shadowH: 105.18, shadowL: 103.85, open: 103.96, close: 104.58},
          {shadowH: 106.31, shadowL: 104.59, open: 104.61, close: 105.97},
          {shadowH: 106.47, shadowL: 104.96, open: 105.52, close: 105.8},
          {shadowH: 107.79, shadowL: 104.88, open: 104.89, close: 107.7},
          {shadowH: 110.42, shadowL: 108.6, open: 108.65, close: 109.56},
          {shadowH: 109.9, shadowL: 108.88, open: 109.72, close: 108.99},
          {shadowH: 110, shadowL: 108.2, open: 108.78, close: 109.99},
          {shadowH: 112.19, shadowL: 110.27, open: 110.42, close: 111.08},
          {shadowH: 110.73, shadowL: 109.42, open: 109.51, close: 109.81},
          {shadowH: 110.98, shadowL: 109.2, open: 110.23, close: 110.96},
          {shadowH: 110.42, shadowL: 108.121, open: 109.95, close: 108.54},
          {shadowH: 109.77, shadowL: 108.17, open: 108.91, close: 108.66},
          {shadowH: 110.61, shadowL: 108.83, open: 108.97, close: 109.04},
          {shadowH: 110.5, shadowL: 108.66, open: 109.34, close: 110.44},
          {shadowH: 112.34, shadowL: 110.8, open: 110.8, close: 112.0192},
          {shadowH: 112.39, shadowL: 111.33, open: 111.62, close: 112.1},
          {shadowH: 112.3, shadowL: 109.73, open: 112.11, close: 109.85},
          {shadowH: 108.95, shadowL: 106.94, open: 108.89, close: 107.48},
          {shadowH: 108, shadowL: 106.23, open: 107.88, close: 106.91},
          {shadowH: 108.09, shadowL: 106.06, open: 106.64, close: 107.13},
          {shadowH: 106.93, shadowL: 105.52, open: 106.93, close: 105.97},
          {shadowH: 106.48, shadowL: 104.62, open: 105.01, close: 105.68},
          {shadowH: 105.65, shadowL: 104.51, open: 105, close: 105.08},
          {shadowH: 105.3, shadowL: 103.91, open: 103.91, close: 104.35},
          // {shadowH: 98.71, shadowL: 95.68, open: 96, close: 97.82},
          // {shadowH: 97.88, shadowL: 94.25, open: 97.61, close: 94.8075},
          // {shadowH: 95.9, shadowL: 93.82, open: 95.2, close: 94.19},
          // {shadowH: 94.07, shadowL: 92.68, open: 94, close: 93.24},
          // {shadowH: 93.45, shadowL: 91.85, open: 93.37, close: 92.72},
          // {shadowH: 93.77, shadowL: 92.59, open: 93, close: 92.82},
          // {shadowH: 93.57, shadowL: 92.11, open: 93.33, close: 93.39},
          // {shadowH: 93.57, shadowL: 92.46, open: 93.48, close: 92.51},
          // {shadowH: 92.78, shadowL: 89.47, open: 92.72, close: 90.32},
          // {shadowH: 91.67, shadowL: 89, open: 90, close: 90.52},
        ],
        label: 'Fiverr - client',
        config: {
          highlightColor: processColor('darkgray'),
          shadowColor: processColor('black'),
          shadowWidth: 1,
          shadowColorSameAsCandle: false,
          increasingColor: processColor('#71BD6A'),
          increasingPaintStyle: 'FILL',
          decreasingColor: processColor('#D14B5A'),
        },
      },
    ],
  });

  const [marker, setMarker] = useState({
    enabled: true,
    markerColor: processColor('#2c3e50'),
    textColor: processColor('white'),
  });

  const [zoomXValue, setZoomXValue] = useState(0);
  const [xAxis, setxAxis] = useState({});
  const [yAxis, setyAxis] = useState({});
  const [selectedEntry, setSelectedEntry] = useState({});

  const handleSelect = (event, data) => {
    let entry = event.nativeEvent;
    if (entry == null) {
      // setState({...state})
    } else {
      // console.log("clg ", data)
      setSelectedEntry(JSON.stringify(entry));
      // this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    // console.log(event.nativeEvent);
  };

  useEffect(() => {
    setxAxis({
      drawLabels: true,
      drawGridLines: true,
      position: 'BOTTOM',
      // valueFormatter: "date",
      valueFormatter: ["00:00","00:05","00:10","00:15","00:20","00:25","00:30","00:35","00:40","00:45","00:50","00:55","01:00","01:05","01:10","01:15","01:20","01:25","01:30","01:35","01:40","01:45","01:50","01:55","02:00","02:05","02:10","02:15","02:20","02:25","02:30","02:35","02:40","02:45","02:50","02:55","03:00","03:05","03:10","03:15","03:20","03:25","03:30","03:35","03:40","03:45","03:50","03:55","04:00","04:05","04:10","04:15","04:20","04:25","04:30","04:35","04:40","04:45","04:50","04:55","05:00","05:05","05:10","05:15","05:20","05:25","05:30","05:35","05:40","05:45","05:50","05:55","06:00","06:05","06:10","06:15","06:20","06:25","06:30","06:35","06:40","06:45","06:50","06:55","07:00","07:05","07:10","07:15","07:20","07:25","07:30","07:35","07:40","07:45","07:50","07:55","08:00","08:05","08:10","08:15","08:20","08:25","08:30","08:35","08:40","08:45","08:50","08:55","09:00","09:05","09:10","09:15","09:20","09:25","09:30","09:35","09:40","09:45","09:50","09:55","10:00","10:05","10:10","10:15","10:20","10:25","10:30","10:35","10:40","10:45","10:50","10:55","11:00","11:05","11:10","11:15","11:20","11:25","11:30","11:35","11:40","11:45","11:50","11:55","12:00","12:05","12:10","12:15","12:20","12:25","12:30","12:35","12:40","12:45","12:50","12:55","13:00","13:05","13:10","13:15","13:20","13:25","13:30","13:35","13:40","13:45","13:50","13:55","14:00","14:05","14:10","14:15","14:20","14:25","14:30","14:35","14:40","14:45","14:50","14:55","15:00","15:05","15:10","15:15","15:20","15:25","15:30","15:35","15:40","15:45","15:50","15:55","16:00","16:05","16:10","16:15","16:20","16:25","16:30","16:35","16:40","16:45","16:50","16:55","17:00","17:05","17:10","17:15","17:20","17:25","17:30","17:35","17:40","17:45","17:50","17:55","18:00","18:05","18:10","18:15","18:20","18:25","18:30","18:35","18:40","18:45","18:50","18:55","19:00","19:05","19:10","19:15","19:20","19:25","19:30","19:35","19:40","19:45","19:50","19:55","20:00","20:05","20:10","20:15","20:20","20:25","20:30","20:35","20:40","20:45","20:50","20:55","21:00","21:05","21:10","21:15","21:20","21:25","21:30","21:35","21:40","21:45","21:50","21:55","22:00","22:05","22:10","22:15","22:20","22:25","22:30","22:35","22:40","22:45","22:50","22:55","23:00","23:05","23:10","23:15","23:20","23:25","23:30","23:35","23:40","23:45","23:50","23:55","24:00"],
      granularityEnabled: true,
      // granularity : 36,        
      // labelCount:9,
      valueFormatterPattern: 'hh:mm',
      // valueFormatter: 'date',
      // valueFormatterPattern: 'd MMM',
      yOffset: 10,
      // date : getIndexOfDay(moment.unix(new Date()).format('YYYY-MM-DD,hh:mm')),
      gridDashedLine: {
        lineLength: 10,
        spaceLength: 5,
        // phase: numbe
      },
    });
    setyAxis({
      left: {
        enabled: false,
        // valueFormatter: '$ #',
        limitLines: [
          {
            limit: 112.4,
            lineColor: processColor('red'),
            lineDashPhase: 2,
            lineDashLengths: [10, 20],
          },
          {
            limit: 89.47,
            lineColor: processColor('red'),
            lineDashPhase: 2,
            lineDashLengths: [10, 20],
          },
        ],
      },
      right: {
        // spaceTop:80,
        // axisMaximum:2000,
        valueFormatter: '$ ###.00',
        // enabled: true,
      },
    });
    setZoomXValue(9999);
  }, []);

  return (
    <View style={{flex: 1, padding: 5}}>
      <View style={{padding: '5%'}}>
        <Text>USDJPY,H4 </Text>
        <Text>
          {' '}
          High {selectedEntry?.open}, Low {selectedEntry?.close}
        </Text>
      </View>
      <View style={styles.container}>
        <CandleStickChart
          style={styles.chart}
          data={data}
          marker={marker}
          chartDescription={{text: 'CandleStick'}}
          legend={legend}
          xAxis={xAxis}
          yAxis={yAxis}
          maxVisibleValueCount={16}
          autoScaleMinMaxEnabled={true}
          onSelect={data => {
            let entry = data.nativeEvent;
            console.log(entry);
            setSelectedEntry(entry.data);
          }}
          zoom={{scaleX: 2, scaleY: 1, xValue: zoomXValue, yValue: 1}}
          // zoom={{scaleX: 15.41, scaleY: 1, xValue:  40, yValue: 916, axisDependency: 'LEFT'}}
          // onSelect={handleSelect.bind(this)}
          // ref="chart"
          // onChange={(event) => handleSelect(event)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});

export default App;
