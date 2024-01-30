import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BottomNavigation from "../assets/components/BottomNavigation";
import Header from "../assets/components/Header";
import CoinChart from "../assets/components/CoinChart";

const ImageUrl = "https://s2.coinmarketcap.com/static/img/coins/64x64/";

const CoinDetail = () => {
  const coin = useLocation().state;

  console.log(coin);

  return (
    <div className="bg-sectionColor p-12 h-full">
      <div className="max-w-[1200px] mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex-col flex items-start gap-6 text-headingColor">
            <div className="flex gap-5 items-center justify-start w-full">
              <img
                src={ImageUrl + coin.id + ".png"}
                alt={coin.name}
                className="rounded-full max-w-[80px] bg-gradient-to-tr from-primaryColor to-secondaryColor p-1 shadow-md shadow-gray-700"
              />
              <div className="flex-col flex items-start justify-center gap-2">
                <h3 className="text-headingColor font-bold text-3xl ">
                  {coin.name}
                </h3>
                <h6 className="text-gray-500 font-bold">{coin.symbol}</h6>
              </div>
            </div>
            <div className="w-full">
              <h6 className="text-lg font-bold">Tags:</h6>
              <ul className="flex items-center justify-start gap-2 overflow-auto mt-2">
                {coin.tags.map((tag) => {
                  return (
                    <li
                      className="bg-gray-100 text-gray-600 p-1 px-3 rounded-md"
                      key={tag}
                    >
                      {tag.slice(0, 3)}
                    </li>
                  );
                })}
              </ul>
            </div>
            <h2 className="text-3xl font-bold">
              Price : {coin.quote.USD.price.toLocaleString("en-us") + " $"}
            </h2>
            <h3 className="text-2xl font-bold">#Rank : {coin.cmc_rank}</h3>

            <h3 className="text-2xl font-bold">
              MarketCap : {coin.quote.USD.market_cap.toLocaleString("en-us")}
            </h3>
            <h3 className="text-2xl font-bold">
              volume24h : {coin.quote.USD.volume_24h.toLocaleString("en-us")}
            </h3>
            <h3 className="text-2xl font-bold">
              volumeChange24h :{" "}
              {coin.quote.USD.volume_change_24h.toLocaleString("en-us")}
            </h3>
            <div className="w-full flex items-center justify-around">
              <h3 className="text-xl font-bold">1h%</h3>
              <h3 className="text-xl font-bold">24h%</h3>
              <h3 className="text-xl font-bold">7d%</h3>
              <h3 className="text-xl font-bold">30d%</h3>
            </div>
            <div className="grid w-full gap-2 grid-cols-4">
              <div
                className={
                  coin.quote.USD.percent_change_1h > 0
                    ? "bg-gradient-to-b from-green-200 to-green-600 flex items-center md:text-xl font-bold justify-center text-sectionColor rounded-md w-full p-3"
                    : "bg-gradient-to-b from-red-200 to-red-600 flex items-center md:text-lg font-bold justify-center text-sectionColor rounded-md w-full p-3"
                }
              >
                {coin.quote.USD.percent_change_1h.toLocaleString() + "%"}
              </div>
              <div
                className={
                  coin.quote.USD.percent_change_24h > 0
                    ? "bg-gradient-to-b from-green-200 to-green-600 flex items-center md:text-xl font-bold justify-center text-sectionColor rounded-md w-full p-3"
                    : "bg-gradient-to-b from-red-200 to-red-600 flex items-center md:text-lg font-bold justify-center text-sectionColor rounded-md w-full p-3"
                }
              >
                {coin.quote.USD.percent_change_24h.toLocaleString() + "%"}
              </div>
              <div
                className={
                  coin.quote.USD.percent_change_7d > 0
                    ? "bg-gradient-to-b from-green-200 to-green-600 flex items-center md:text-xl font-bold justify-center text-sectionColor rounded-md w-full p-3"
                    : "bg-gradient-to-b from-red-200 to-red-600 flex items-center md:text-lg font-bold justify-center text-sectionColor rounded-md w-full p-3"
                }
              >
                {coin.quote.USD.percent_change_7d.toLocaleString() + "%"}
              </div>
              <div
                className={
                  coin.quote.USD.percent_change_30d > 0
                    ? "bg-gradient-to-b from-green-200 to-green-600 flex items-center md:text-xl font-bold justify-center text-sectionColor rounded-md w-full p-3"
                    : "bg-gradient-to-b from-red-200 to-red-600 flex items-center md:text-lg font-bold justify-center text-sectionColor rounded-md w-full p-3"
                }
              >
                {coin.quote.USD.percent_change_30d.toLocaleString() + "%"}
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center h-96 md:h-full">
            <CoinChart symbol={coin.symbol}/>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default CoinDetail;
