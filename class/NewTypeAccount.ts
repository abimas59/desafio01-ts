import { DioAccount } from "./DioAccount";

export class NewTypeAccount extends DioAccount{

    deposit = (valor: number):void =>{
        this.setBalance(valor+10);
    }
}