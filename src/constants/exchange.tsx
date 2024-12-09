export const currencyLists = [
  { "id": 1027, "title": "Ethereum", "symbol": "ETH", "rank": 1, "logo": "", "network": "Sepolia", "router": '16015286601757825753', "address": "0x0000000000000000000000000000000000000000", "decimals": 18 },
  // { "id": 1839, "title": "CCIP-BnM", "symbol": "CCIP-BnM", "rank": 2 , "logo": "", "network": "Sepolia"}, 
  // { "id": 825, "title": "CCIP-BnM", "symbol": "CCIP-LnM", "rank": 3 , "logo": "", "network": "Sepolia"}, 
  { "id": 3408, "title": "USD Coin", "symbol": "USDC", "rank": 4, "logo": "", "network": "Sepolia", "router": '16015286601757825753', "address": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", "decimals": 6 },
  // { "id": 1027, "title": "Ethereum", "symbol": "ETH", "rank": 1 , "logo": "", "network": "Base"}, 
  // { "id": 1839, "title": "CCIP-BnM", "symbol": "CCIP-BnM", "rank": 2 , "logo": "", "network": "Base"}, 
  // { "id": 825, "title": "CCIP-BnM", "symbol": "CCIP-LnM", "rank": 3 , "logo": "", "network": "Base"}, 
  // { "id": 3408, "title": "USD Coin", "symbol": "USDC", "rank": 4 , "logo": "", "network": "Base"}, 
  { "id": 5805, "title": "Avalanche", "symbol": "AVAX", "rank": 1, "logo": "", "network": "Fuji", "router": '14767482510784806043', "address": "0x0000000000000000000000000000000000000000", "decimals": 18 },
  // { "id": 1839, "title": "CCIP-BnM", "symbol": "CCIP-BnM", "rank": 2 , "logo": "", "network": "Fuji"}, 
  // { "id": 825, "title": "CCIP-BnM", "symbol": "CCIP-LnM", "rank": 3 , "logo": "", "network": "Fuji"}, 
  { "id": 3408, "title": "USD Coin", "symbol": "USDC", "rank": 4, "logo": "", "network": "Fuji", "router": '14767482510784806043', "address": "0x5425890298aed601595a70AB815c96711a31Bc65", "decimals": 6 },
].map((o) => {
  o = {
    ...o,
    logo: `https://s2.coinmarketcap.com/static/img/coins/128x128/${o.id}.png`
  }
  return o;
}, {});