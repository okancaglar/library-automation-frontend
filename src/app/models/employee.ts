export class Employee 
{

    id:number;
    firstName:string;
    lastName: string;
    password: string;
    registrationDate:string;
    dailyWage: number;
    role:string;

    constructor(data:any)
    {
        this.id=data.id;
        this.firstName=data.firstName;
        this.lastName = data.lastName;
        this.password=data.password;
        this.registrationDate=data.registrationDate;
        this.dailyWage=data.dailyWage;
        this.role=data.role;
    }




}