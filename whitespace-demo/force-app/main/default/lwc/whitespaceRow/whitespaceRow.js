import {
  LightningElement,
  api
} from 'lwc';

export default class WhitespaceRow extends LightningElement {
  @api filter;
  @api account;

  get boolean() {
    if (this.account) {
      if (this.account.hasOwnProperty('Assets')) {
        if (this.filter) {
          for (let i = 0; i < this.account.Assets.length; i++) {
            if (this.account.Assets[i].Product2Id == this.filter.Product__c) {
              return true;
            }
          }

        }
      }
    }
    return false;
  }
}