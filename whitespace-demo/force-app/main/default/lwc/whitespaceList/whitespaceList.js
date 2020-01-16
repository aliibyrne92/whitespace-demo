import {
  LightningElement,
  wire,
  api,
  track
} from 'lwc';

import { NavigationMixin } from 'lightning/navigation';
import getAccountList from '@salesforce/apex/whitespaceController.getAccountList';
import prodFilters from '@salesforce/apex/whitespaceController.prodFilters';

export default class WhitespaceList extends NavigationMixin(LightningElement) {
  
  @api recordId;
  @track accounts;

  @wire(getAccountList, {
    accountId: '$recordId'
  })
  wiredAccounts({
    error,
    data
  }) {
    if (error) {
      console.log('error: ', error);
    } else if (data) {
      console.log('data: ', data);
      this.accounts = data;
    }
  }

  @wire(prodFilters)
  wiredFilters({
    error,
    data
  }) {
    if (error) {
      console.log('error: ', error);
    } else if (data) {
      console.log('data: ', data);
      this.filters = data;
    }
  }

  accountClick(event) {
    console.log('event two', event.target.dataset.id);
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: event.target.dataset.id,
         actionName: 'view'
      }
    });
  }


}