import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CryptoCurrency } from '../../../core/models/crypto';
import { CryptoService } from '../../../core/services/crypto.service';


@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  converterForm: FormGroup;
  cryptocurrencies: CryptoCurrency[] = [];
  conversionResult = 0;
  isConverting = false;
  lastUpdated: Date = new Date();
  popularPairs = [
    { from: 'BTC', to: 'ETH', rate: 14.5 },
    { from: 'ETH', to: 'BTC', rate: 0.069 },
    { from: 'BTC', to: 'USDT', rate: 45000 },
    { from: 'ETH', to: 'USDT', rate: 3200 }
  ];

  constructor(
    private fb: FormBuilder,
    private cryptoService: CryptoService
  ) {
    this.converterForm = this.fb.group({
      amount: [1, [Validators.required, Validators.min(0.00000001)]],
      fromCurrency: ['BTC', Validators.required],
      toCurrency: ['ETH', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCryptocurrencies();
    this.setupFormSubscriptions();
  }

  loadCryptocurrencies(): void {
    this.cryptoService.getTopCryptocurrencies(50).subscribe({
      next: (data) => {
        this.cryptocurrencies = data;
        this.onConvert(); // Auto-convert with default values
      },
      error: (error) => {
        console.error('Error loading cryptocurrencies:', error);
      }
    });
  }

  setupFormSubscriptions(): void {
    this.converterForm.valueChanges.subscribe(() => {
      if (this.converterForm.valid) {
        this.onConvert();
      }
    });
  }

  onConvert(): void {
    if (!this.converterForm.valid) return;

    const { amount, fromCurrency, toCurrency } = this.converterForm.value;
    
    if (!fromCurrency || !toCurrency) return;

    this.isConverting = true;

    this.cryptoService.getConversionRate(fromCurrency, toCurrency, amount).subscribe({
      next: (result) => {
        this.conversionResult = result;
        this.lastUpdated = new Date();
        this.isConverting = false;
      },
      error: (error) => {
        console.error('Error converting currencies:', error);
        this.isConverting = false;
      }
    });
  }

  swapCurrencies(): void {
    const fromCurrency = this.converterForm.get('fromCurrency')?.value;
    const toCurrency = this.converterForm.get('toCurrency')?.value;

    this.converterForm.patchValue({
      fromCurrency: toCurrency,
      toCurrency: fromCurrency
    });
  }

  selectPair(pair: { from: string; to: string; rate: number }): void {
    this.converterForm.patchValue({
      fromCurrency: pair.from,
      toCurrency: pair.to,
      amount: 1
    });
  }
}
