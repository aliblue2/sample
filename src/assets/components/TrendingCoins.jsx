import { RiArrowRightCircleLine, RiBtcLine } from "@remixicon/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TrendingCoins() {
  const [data, setData] = useState([]);
  const baseUrl =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
  const qs = "?start=1&limit=8&convert=USD";
  const ApiKey = "cbe68da5-9559-4a8b-8f7d-560989f4471a";
  const proxyServer = "https://corsproxy.io/?";
  const ImageUrl = "https://s2.coinmarketcap.com/static/img/coins/64x64/";
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        proxyServer + encodeURIComponent(baseUrl + qs),
        {
          headers: {
            "X-CMC_PRO_API_KEY": ApiKey,
            Accept: "*/*",
          },
        }
      );
      const jsBody = res.data.data;
      setData(jsBody);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-bgBottomNavigation p-8 border-slate-800 rounded-2xl flex flex-col items-start">
      <div className="w-full flex items-center justify-between ">
        <h4 className="md:text-xl text-headingColor font-bold">
          TrendingCoins
        </h4>
        <Link className="flex underline items-center gap-2 text-headingColor md:text-xl">
          see all coins
          <RiArrowRightCircleLine size={24} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full my-5">
        {data.length > 0
          ? data.map((coin) => {
              return (
                <div className="flex flex-col items-start justify-center gap-2   bg-primaryColor bg-opacity-5 hover:bg-primaryColor transition-colors duration-300 p-4 text-headingColor rounded-md" key={coin.id}>
                  <div className="flex items-center w-full justify-start gap-2 ">
                    <img src={ImageUrl + coin.id + ".png"} alt={coin.name} className="max-w-[35px] bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full p-1" />
                    <h3 className="font-bold text-lg">{coin.name.replace(" " , "")}</h3>
                    <span className="text-gray-400 text-xs">{coin.symbol}</span>
                  </div>
                  <h3 className="text-xl w-full font-bold">USD {coin.quote.USD.price.toLocaleString('en-us')+" $"}</h3>
                  <div className="flex items-center w-full justify-start gap-5">
                    <span className="text-gray-400">{coin.quote.USD.volume_change_24h.toLocaleString('en-us') + " $"}</span>
                    <span className="bg-gradient-to-r from-primaryColor to-secondaryColor  px-2 rounded-md text-sm">
                      {coin.quote.USD.percent_change_24h.toLocaleString('en-GN')+ " %"}
                    </span>
                  </div>
                </div>
              );
            })
          : "data not found"}
      </div>
    </div>
  );
}
