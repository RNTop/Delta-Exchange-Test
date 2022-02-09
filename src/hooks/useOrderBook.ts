import {useEffect, useState} from 'react';
import {IBuyItem, ISellItem} from '../models';
import {getOrderbookSubscriptionRequest} from '../utils';

export const useOrderBook = (url: string) => {
  const [buy, setBuy] = useState<IBuyItem[]>([]);
  const [sell, setSell] = useState<ISellItem[]>([]);
  const [symbol, setSymbol] = useState<string>('BTC_USDT');

  useEffect(() => {
    let isMounted = true;
    let connected = false;
    const ws = new WebSocket(url);
    const addSubscription = () => {
      if (isMounted && !connected) {
        ws.onopen = () => {
          connected = true;
          setBuy([]);
          setSell([]);
          ws.send(JSON.stringify(getOrderbookSubscriptionRequest(symbol)));
        };
        ws.onmessage = event => {
          const data = JSON.parse(event.data);
          if (data.symbol === symbol) {
            setBuy(data.buy);
            setSell(data.sell);
          }
        };
        ws.onerror = () => {
          /*
           Do add error handler.
          */
        };
        ws.onclose = () => {
          connected = false;
        };
      }
    };
    addSubscription();
    return () => {
      isMounted = false;
      connected && ws.close();
    };
  }, [url, symbol]);

  return {
    buy,
    sell,
    symbol,
    setSymbol,
  };
};
