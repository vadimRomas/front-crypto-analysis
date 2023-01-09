import {
      CompanyProfile,
      CryptocurrencyMarket,
      EconomicCalendar,
      ForexCrossRates,
      ForexHeatMap,
      FundamentalData,
      MarketData,
      MarketOverview,
      MiniChart,
      SingleTicker,
      StockMarket,
      SymbolInfo,
      SymbolOverview,
      TickerTape,
      Timeline
} from "react-tradingview-embed";
import React from "react";

export const MoreInformation = (symbol='BINANCE:BTCUSDT') => {
  return (
      <div>
      <h2>MarketOverview</h2>
            <MarketOverview/>
            <br/>
            <h2>MarketData</h2>
            <MarketData/>
            <br/>
            <h2>StockMarket</h2>
            <StockMarket />
            <br/>
            <h2>EconomicCalendar</h2>
            <EconomicCalendar/>
            <br/>
            <br/>
            <h2>TickerTape</h2>
            <TickerTape/>
            <br/>
            <h2>SingleTicker</h2>
            <SingleTicker widgetProps={{symbol: "BINANCE:BTCUSDT"}}/>
            <br/>
            <h2>MiniChart</h2>
            <MiniChart widgetProps={{symbol: "BINANCE:BTCUSDT"}}/>
            <br/>
            <h2>SymbolOverview</h2>
            <SymbolOverview widgetProps={{symbol: "BINANCE:BTCUSDT"}}/>
            <br/>
            <h2>SymbolInfo</h2>
            <SymbolInfo widgetProps={{symbol: "BINANCE:BTCUSDT"}}/>
            <br/>
            <h2>ForexCrossRates</h2>
            <ForexCrossRates/>
            <br/>
            <h2>ForexHeatMap</h2>
            <ForexHeatMap/>
            <br/>
            <h2>CryptocurrencyMarket</h2>
            <CryptocurrencyMarket/>
            <br/>
            <h2>FundamentalData</h2>
            <FundamentalData widgetProps={{symbol: "BINANCE:BTCUSDT"}}/>
            <br/>
            <h2>CompanyProfile</h2>
            <CompanyProfile widgetProps={{symbol: "BINANCE:BTCUSDT"}}/>
            <br/>
            <h2>Timeline</h2>
            <Timeline/>
          </div>
  );
}