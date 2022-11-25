import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent  {
@Input() quotes: Quotation[];
@Output() vote = new EventEmitter<QuotationEvent>();

addVote(quotation: Quotation, value: number){
  this.vote.emit({quotation, value});
}

}
export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}
