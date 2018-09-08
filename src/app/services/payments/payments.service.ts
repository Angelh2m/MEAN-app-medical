import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  public membership: any = {
    price: '0',
    selected: false,
    number: null,
    paid: false,
  }

  constructor() { }


  setPayment(option) {

    switch (option) {
      case 0:
        return this.membership = {
          price: '$45',
          selected: true,
          number: 0,
          paid: false
        }
      case 1:
        return this.membership = {
          price: '$45',
          selected: true,
          number: 1,
          paid: false
        }
      default:
        break;
    }

  }
}
