//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
Balance;
Open;

  constructor() {
    this.Balance = 0;
    this.Open = false;
  }

  open() {
    if(this.Open) throw new ValueError();
    this.Open = true;
  }

  close() {
    if(!this.Open) throw new ValueError();
    this.Balance = 0;
    this.Open = false;
  }

  deposit(monto) {
    if(monto < 0 || !this.Open) throw new ValueError();
    this.Balance += monto;
  }

  withdraw(monto) {
    if(!this.Open || this.Balance < monto || monto < 0) throw new ValueError();
    this.Balance -= monto;
  }

  get balance() {
    if(!this.Open) throw new ValueError();
    return this.Balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Error en la cuenta bancaria!');
  }
}
