interface InitParams {
  user: string;
  address: string;
  sum: number;
}

export class Order {
  private user: string;
  private address: string;
  private sum: number;
  private createDate: Date;
  private deliveryDate: Date;

  constructor(params: InitParams) {
    this.user = params.user;
    this.address = params.address;
    this.sum = params.sum;
    this.createDate = new Date();
    this.deliveryDate = this.generateDeliveryDate();
  }

  get userInfo() {
    return this.user;
  }

  getInfoOrder() {
    const date = `${this.deliveryDate.getDate()}.${this.deliveryDate.getMonth()}.${this.deliveryDate.getFullYear()}`;

    return `${this.user},спасибо за оформление заказа на сумму ${this.sum},ожидайте доставку ${date} по адресу ${this.address}`;
  }

  set newAddress(address: string) {
    this.address = address;
  }

  private generateDeliveryDate() {
    const deliveryDate = new Date(this.createDate);
    deliveryDate.setDate(deliveryDate.getDate() + 7);

    return deliveryDate;
  }
}
