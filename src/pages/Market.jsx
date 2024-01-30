import { React, useState, useEffect } from "react";
import BottomNavigation from "../assets/components/BottomNavigation";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import {
  RiArrowGoBackLine,
  RiArrowLeftRightLine,
  RiBankCardLine,
  RiBtcFill,
} from "@remixicon/react";
import axios from "axios";

const Market = () => {
  let i = 1;
  const [data, setData] = useState([]);
  const [count, setCount] = useState(50);
  const onCountChangehandler = (e) => {
    e.preventDefault();
    setCount(count + 50);
  };
  const baseUrl =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
  const qs = "?start=1&limit=200&convert=USD";
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

  console.log(data);

  return (
    <div className="h-full w-full bg-sectionColor p-5">
      <div className="h-full mb-16 p-5 w-full">
        <Link to={"/"} className="flex items-center gap-2 text-headingColor">
          <RiArrowGoBackLine size={18} />
          <span>Back to home</span>
        </Link>

        <h3 className="text-3xl text-headingColor font-bold m-5">Market</h3>
        <div className="w-full overflow-x-auto ">
          <table className="w-full my-5 text-headingColor">
            <thead>
              <tr className="font-bold md:text-lg text-sm border-b-2 border-dashed w-full flex items-center justify-between ">
                <th className="pb-5 w-3/12 md:w-1/12">Name</th>
                <th className="pb-5">LastPrice</th>
                <th className="pb-5">24h%</th>
                <th className="pb-5 ">Last 7d%</th>
                <th className="pb-5 md:block hidden">Market Cap</th>
                <th className="pb-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0
                ? data.slice(0, count).map((coin) => {
                    return (
                      <Link to={`/:coin${coin.name}`} state={coin} key={coin.id}>
                        <tr
                          className="w-full p-2 bg-primaryColor bg-opacity-5 transition-colors duration-300 my-2 rounded-lg group text-headingColor hover:bg-primaryColor flex items-center justify-between gap-12 max-h-[70px]"
                          
                        >
                          <td className="w-3/12 flex items-center justify-center md:w-1/12">
                            <div className="flex w-full items-center gap-2">
                              <span>{i <= count ? i++ : i}</span>
                              <img
                                src={ImageUrl + coin.id + ".png"}
                                alt="logo"
                                className="max-w-[30px] p-1 bg-gradient-to-tr from-primaryColor to-secondaryColor rounded-full"
                              />
                              <div className="flex items-start flex-col gap-1">
                                <h3 className="text-headingColor md:text-lg font-bold">
                                  {coin.name.replace(" ", "").slice(0, 10)}
                                </h3>
                                <span className="text-xs text-gray-400 uppercase">
                                  {coin.symbol}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="w-1/12 flex items-center justify-center font-bold">
                            {coin.quote.USD.price.toLocaleString("en-us") + "$"}
                          </td>
                          <td className="w-1/12 flex items-center justify-center">
                            {coin.quote.USD.percent_change_24h > 0 ? (
                              <span className="flex items-center text-green-500">
                                {coin.quote.USD.percent_change_24h.toLocaleString() +
                                  "%"}
                              </span>
                            ) : (
                              <span className="flex items-center text-red-500">
                                {coin.quote.USD.percent_change_24h.toLocaleString() +
                                  "%"}
                              </span>
                            )}
                          </td>
                          <td className="w-1/12">
                            {coin.quote.USD.percent_change_7d > 0 ? (
                              <span className="flex items-center text-green-500">
                                {coin.quote.USD.percent_change_7d.toLocaleString() +
                                  "%"}
                              </span>
                            ) : (
                              <span className="flex items-center text-red-500">
                                {coin.quote.USD.percent_change_7d.toLocaleString() +
                                  "%"}
                              </span>
                            )}
                          </td>
                          <td className="md:block hidden w-1/12">
                            {coin.quote.USD.market_cap.toLocaleString() + "$"}
                          </td>
                          <td className="w-1/12 flex items-center justify-center">
                            <a
                              href="#"
                              className="border p-1 rounded-full flex items-center justify-center bg-primaryColor"
                            >
                              <RiArrowLeftRightLine size={20} />
                            </a>
                          </td>
                        </tr>
                      </Link>
                    );
                  })
                : "data not fount"}
            </tbody>
          </table>
        </div>
        <a
          href="#"
          className="w-full block border border-headingColor hover:bg-headingColor transition-colors duration-300 text-center text-xl font-bold my-5 p-2 rounded-md text-headingColor hover:text-primaryColor"
          onClick={onCountChangehandler}
        >
          load more...
        </a>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Market;
