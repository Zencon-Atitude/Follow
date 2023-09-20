//dados charts
import {dados} from './database.js';

// Função para criar o gráfico e adicionar as velas real time
function createCandlestickChart() {

    var data = dados
    const chart = LightweightCharts.createChart(
    document.getElementById('container'),
    {
    layout: {
        background: { color: '#222' },
        textColor: '#DDD',
    },
    grid: {
        vertLines: { color: '#444' },
        horzLines: { color: '#444' },
    },

    //size of chart
    height: 400,
    width: 1000,
    });    

    let buyCandle = true; // Inicializa a flag como falsa
    let sellCandle = false; // Inicializa a flag como falsa

    function addCandle(index) {
        if (index < data.length) {
            const currentCandle = data[index];
            const previousCandle = index > 0 ? data[index - 1] : null;
            const twoCandlesAgo = index > 1 ? data[index - 2] : null;

            
            if (buyCandle && previousCandle && twoCandlesAgo && currentCandle.low < Math.min(previousCandle.low, twoCandlesAgo.low)) {
            // Se o low do atual for menor que o low dos dois dias anteriores, pinte o candle de azul
            
                buyCandle = false; 
                sellCandle = true;

            candleSeries.update({
                time: currentCandle.time,
                open: currentCandle.open,
                high: currentCandle.high,
                low: currentCandle.low,
                close: currentCandle.close,
                color: 'blue', // Defina a cor como azul
                
            });
            } else if (previousCandle && currentCandle.high > previousCandle.high && sellCandle) {
            // Se o high do atual for maior que o high do dia anterior, pinte o candle de laranja
            
                buyCandle = true; // Inicializa a flag como falsa
                sellCandle = false; // Inicializa a flag como falsa

            candleSeries.update({
                time: currentCandle.time,
                open: currentCandle.open,
                high: currentCandle.high,
                low: currentCandle.low,
                close: currentCandle.close,
                color: '#ff00ff', // Defina a cor como laranja
            });
            } else {
            // Caso contrário, use outra cor ou deixe a cor padrão
            candleSeries.update({
                time: currentCandle.time,
                open: currentCandle.open,
                high: currentCandle.high,
                low: currentCandle.low,
                close: currentCandle.close,
            });
            }

            // Agendar a próxima vela após 1 segundo
            setTimeout(function () {
            addCandle(index + 1);
            }, 500); // 1000 milissegundos = 1 segundo
        }
    }

    //setting currency
    // Get the current users primary locale
    const currentLocale = window.navigator.languages[0];
    // Create a number format using Intl.NumberFormat
    const myPriceFormatter = Intl.NumberFormat(currentLocale, {
        style: "currency",
        currency: "BRL", // Currency for data points
    }).format;

    // Apply the custom priceFormatter to the chart
    chart.applyOptions({
    localization: {
        priceFormatter: myPriceFormatter,
    },
    });
    //end setting currency

    //set timeScale
    // Defina o `timeScale` para mostrar a data e hora no formato "dd/mm/yy hh:mm"
    chart.timeScale().applyOptions({
        timeVisible: true, // Exibir a data e hora no eixo do tempo
        secondsVisible: false, // Se você não quiser exibir segundos, defina como false
    });

    // Setting the border color for the vertical axis
    chart.priceScale().applyOptions({
        borderColor: '#71649C',
        barSpacing: 10,
    });
    
    // Customizing the Crosshair
    chart.applyOptions({
        crosshair: {
            // Change mode from default 'magnet' to 'normal'.
            // Allows the crosshair to move freely without snapping to datapoints
            mode: LightweightCharts.CrosshairMode.Normal,

            // Vertical crosshair line (showing Date in Label)
            vertLine: {
                width: 8,
                color: '#C3BCDB44',
                style: LightweightCharts.LineStyle.Solid,
                labelBackgroundColor: '#9B7DFF',
            },

            // Horizontal crosshair line (showing Price in Label)
            horzLine: {
                color: '#9B7DFF',
                labelBackgroundColor: '#9B7DFF',
            },
        },
    });
    
    var candleSeries = chart.addCandlestickSeries();

    // Comece a adicionar velas a partir do primeiro dados
    addCandle(0);
}

// Chame a função para criar o gráfico
createCandlestickChart();

