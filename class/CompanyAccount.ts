import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor:number): void => {
    if(this.validateStatus()){
      this.setBalance(valor);
      console.log(`Empréstimo realizado com sucesso`)
    }else{
      console.log('Empréstimo não permitido.')
    }
    
  }
}
