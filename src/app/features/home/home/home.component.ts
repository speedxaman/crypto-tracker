import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoCardComponent } from '../../crypto-card/crypto-card.component';
import { CryptoCurrency } from '../../../core/models/crypto';
import { CryptoService } from '../../../core/services/crypto.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CryptoCardComponent],
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cryptocurrencies: CryptoCurrency[] = [];
  isLoading = false;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.loadCryptocurrencies();
  }

  loadCryptocurrencies(): void {
    this.isLoading = true;
    this.cryptoService.getTopCryptocurrencies(15).subscribe({
      next: (data) => {
        this.cryptocurrencies = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading cryptocurrencies:', error);
        this.isLoading = false;
      }
    });
  }

  trackByCryptoId(index: number, crypto: CryptoCurrency): number {
    return crypto.id;
  }
}