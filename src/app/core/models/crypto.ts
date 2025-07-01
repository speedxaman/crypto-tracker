export interface CryptoCurrency {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  last_updated: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      market_cap: number;
      last_updated: string;
    };
  };
}

export interface CryptoApiResponse {
  status: {
    timestamp: string;
    error_code: number;
    error_message: string;
    elapsed: number;
    credit_count: number;
  };
  data: CryptoCurrency[];
}

export interface ConversionRate {
  price: number;
  last_updated: string;
}
