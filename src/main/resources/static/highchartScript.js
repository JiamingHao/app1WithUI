function drawChart (data) {
    console.log(data)

    // split the data set into ohlc and volume
    var ohlc = [],
        volume = [],
        dataLength = data.length,
        // set the allowed units for data grouping
        groupingUnits = [[
            'week',                         // unit name
            [1]                             // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]],

        i = 0;

    for (i; i < dataLength; i += 1) {
        var ticker = data[i]["id"]['ticker']

        ohlc.push([
            new Date(data[i]['id']['date']).getTime(), // the date
            data[i]['open'], // open
            data[i]['high'], // high
            data[i]['low'], // low
            data[i]['close'] // close
        ]);

        volume.push([
            data[i]['id']['date'], // the date
            data[i]['volume'] // the volume
        ]);
    }


    // create the chart
    Highcharts.stockChart('chart_container', {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: ticker
        },

        yAxis: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'OHLC'
            },
            height: '60%',
            lineWidth: 2,
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],

        tooltip: {
            split: true
        },

        series: [{
            type: 'candlestick',
            name: ticker,
            data: ohlc,
            dataGrouping: {
                units: groupingUnits
            }
        }, {
            type: 'column',
            name: 'Volume',
            data: volume,
            yAxis: 1,
            dataGrouping: {
                units: groupingUnits
            }
        }]
    });
}


function drawOpenCloseChart (data) {
    // Create the chart

    console.log(data)

    // split the data set into ohlc and volume
    var ohlc = [], dataLength = data.length, ticker

    for (var i=0; i < dataLength; i += 1) {

        ohlc.push([
            new Date(data[i]['date']).getTime(), // the date
            data[i]['close'] // close
        ]);
    }

    Highcharts.stockChart('chart_container', {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: ticker + ' Stock Price'
        },

        series: [{
            name: ticker,
            data: ohlc,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
}


function drawHighLowChart (data) {
    // Create the chart

    console.log(data)

    // split the data set into ohlc and volume
    var ohlc = [], dataLength = data.length, ticker

    for (var i=0; i < dataLength; i += 1) {

        ohlc.push([
            new Date(data[i]['date']).getTime(), // the date
            data[i]['high'] // high
        ]);
    }

    Highcharts.stockChart('chart_container', {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: ticker + ' Stock Price'
        },

        series: [{
            name: ticker,
            data: ohlc,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
}