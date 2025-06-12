export type RefugeeDto = {
    id?: number ,
    username: string,
    age: string,
    email: string,
    phone: string,
    dateOfBirth: string,
    gender: string,
    address: string,
    nationality: string,
    bgInfo: string,
    status: string,
    arrivalDate: string,
    campId: number 
}


export type CampDto = {
    id?: number,
    campName: string,
    capacity: number,
    manager: string,
    city: string,
    state: string,
    country: string,
    postalCode: string,
     }