'use client'
import { useEffect } from 'react';

const TickerTape = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR/USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": false,
        "colorTheme": "dark",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "es"
      }
    `;
    document.querySelector('.tradingview-widget-container__widget').appendChild(script);

    return () => {
      document.querySelector('.tradingview-widget-container__widget').innerHTML = '';
    };
  }, []);

  return (
    <div className="tradingview-widget-container bg-black">
      <div className="tradingview-widget-container__widget bg-black"></div>
      <div className="tradingview-widget-copyright bg-black">
      </div>
    </div>
  );
};

export default TickerTape;