import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = { author: '', sentence: '', votes: 0};
  mainTitle = 'Najlepsze cytaty';
  bestTitle = 'Najlepsze';
  worstTitle = 'Najgorsze';

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation(){
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0};
  }

  deleteQuotation(quotation: Quotation){
    this.quotes = this.quotes.filter(e => e !== quotation);
  }

  addVote(quotation: Quotation, value: number){
    quotation.votes += value;
  }

bestQuotes(){
  return this.quotes.filter(q => q.votes > 0)
}

worstQuotes(){
  return this.quotes.filter(q => q.votes < 0)
}
}
