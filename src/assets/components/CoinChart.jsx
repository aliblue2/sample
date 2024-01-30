import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget(props) {
  const container = useRef();
  const symbol = props.symbol;
  console.log(symbol);
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "container_id": "technical-analysis-chart-demo",
          "width": "100%",
          "height": "100%",
          "autosize": true,
          "symbol":"BINANCE:${symbol}USDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(203, 203, 203, 0.06)",
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      
    </div>
  );
}

export default memo(TradingViewWidget);