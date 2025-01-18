import { Order } from "./src/models/Order";

const user = "Виктор Марш";
const address = "г.хуйпойми,ул.тожехуйпойми,дом 2 закрыли";
const sum = 30000;

const order = new Order({ user, address, sum });
order.newAddress = "г.мск,ул.хуй и два соска";
console.log(order.getInfoOrder());
