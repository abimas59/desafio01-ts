export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor:number): void => {
    if(this.validateStatus()){
      this.balance += valor;
      console.log(`Deposito realizado, seu novo saldo é ${this.balance}`)
    }else {
      console.log('Impossível realizar deposito. Conta inativa.')
    }
  }

  withdraw = (valor:number): void => {
    if(this.validateStatus() && (this.balance >= valor)){
      this.balance -= valor;
      console.log(`Saque realizado com sucesso, seu novo saldo é: ${this.balance}`)
    }else{
      console.log('Saque não permitido, verifique seu saldo')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }
  setBalance = (valor:number): void => {
    this.balance += valor;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
