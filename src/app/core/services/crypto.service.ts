import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, map, catchError } from 'rxjs';
import { CryptoCurrency } from '../models/crypto';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private readonly apiUrl = environment.apiUrl;
  private readonly mockData = this.generateMockData();

  constructor(private http: HttpClient) {}

  getTopCryptocurrencies(limit: number = 50): Observable<CryptoCurrency[]> {
    // Using mock data since CoinMarketCap API requires API key and CORS setup
    return of(this.mockData).pipe(
      map(data => data.slice(0, limit)),
      catchError(error => {
        console.error('Error fetching cryptocurrencies:', error);
        return of(this.mockData.slice(0, limit));
      })
    );
  }

  getConversionRate(fromSymbol: string, toSymbol: string, amount: number = 1): Observable<number> {
    const fromCrypto = this.mockData.find(crypto => crypto.symbol === fromSymbol.toUpperCase());
    const toCrypto = this.mockData.find(crypto => crypto.symbol === toSymbol.toUpperCase());
    
    if (!fromCrypto || !toCrypto) {
      return of(0);
    }

    const fromPrice = fromCrypto.quote.USD.price;
    const toPrice = toCrypto.quote.USD.price;
    const conversionRate = (fromPrice / toPrice) * amount;

    return of(conversionRate);
  }

  private generateMockData(): CryptoCurrency[] {
    const cryptos = [
      { name: 'Bitcoin', symbol: 'BTC', basePrice: 45000, rank: 1 },
      { name: 'Ethereum', symbol: 'ETH', basePrice: 3200, rank: 2 },
      { name: 'Tether', symbol: 'USDT', basePrice: 1, rank: 3 },
      { name: 'BNB', symbol: 'BNB', basePrice: 310, rank: 4 },
      { name: 'Solana', symbol: 'SOL', basePrice: 95, rank: 5 },
      { name: 'XRP', symbol: 'XRP', basePrice: 0.52, rank: 6 },
      { name: 'USDC', symbol: 'USDC', basePrice: 1, rank: 7 },
      { name: 'Cardano', symbol: 'ADA', basePrice: 0.48, rank: 8 },
      { name: 'Dogecoin', symbol: 'DOGE', basePrice: 0.08, rank: 9 },
      { name: 'Avalanche', symbol: 'AVAX', basePrice: 28, rank: 10 },
      { name: 'Polygon', symbol: 'MATIC', basePrice: 0.78, rank: 11 },
      { name: 'Chainlink', symbol: 'LINK', basePrice: 12.5, rank: 12 },
      { name: 'Litecoin', symbol: 'LTC', basePrice: 95, rank: 13 },
      { name: 'Polkadot', symbol: 'DOT', basePrice: 5.2, rank: 14 },
      { name: 'Uniswap', symbol: 'UNI', basePrice: 6.8, rank: 15 }
    ];

    return cryptos.map((crypto, index) => ({
      id: index + 1,
      name: crypto.name,
      symbol: crypto.symbol,
      slug: crypto.name.toLowerCase().replace(/\s+/g, '-'),
      cmc_rank: crypto.rank,
      circulating_supply: Math.floor(Math.random() * 1000000000),
      total_supply: Math.floor(Math.random() * 1000000000),
      max_supply: Math.floor(Math.random() * 1000000000),
      last_updated: new Date().toISOString(),
      quote: {
        USD: {
          price: crypto.basePrice * (0.95 + Math.random() * 0.1),
          volume_24h: Math.floor(Math.random() * 10000000000),
          percent_change_1h: (Math.random() - 0.5) * 10,
          percent_change_24h: (Math.random() - 0.5) * 20,
          percent_change_7d: (Math.random() - 0.5) * 50,
          market_cap: Math.floor(Math.random() * 100000000000),
          last_updated: new Date().toISOString()
        }
      }
    }));
  }
}
