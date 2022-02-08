import {useEffect, useState} from 'react';
import {IBuyItem, ISellItem} from '../models';
import {getOrderbookSubscriptionRequest} from '../utils';

export const useWebSocket = (url: string) => {
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
          console.log('[Websocket]', 'connected');
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
          console.log('[Websocket]', 'Received!');
        };
        ws.onerror = error => {
          console.log('[Websocket-ERROR]', error);
        };
        ws.onclose = () => {
          connected = false;
          console.log('[Websocket]', 'disconnected');
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
