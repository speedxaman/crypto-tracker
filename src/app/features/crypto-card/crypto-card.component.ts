import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoCurrency } from '../../core/models/crypto';


@Component({
  selector: 'app-crypto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.scss']
})
export class CryptoCardComponent {
  @Input() crypto!: CryptoCurrency;

  get isPositive24h(): boolean {
    return this.crypto.quote.USD.percent_change_24h > 0;
  }
}
