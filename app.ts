import { CompanyAccount } from './class/CompanyAccount'
import { NewTypeAccount } from './class/NewTypeAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Abimael', 10)
// peopleAccount.deposit(10)
// peopleAccount.withdraw(5)
// peopleAccount.getBalance

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.getLoan(100)
companyAccount.withdraw(5)
companyAccount.getBalance

const newTypeAccount: NewTypeAccount = new NewTypeAccount('David',30)
// newTypeAccount.deposit(10)
// newTypeAccount.withdraw(5)
// newTypeAccount.getBalance