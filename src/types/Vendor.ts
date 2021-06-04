import { Contract } from "./Contract";

export type Vendor = {
    id: number
    name: string
    contracts: Contract[] // HasMany
    firstName: string
    lastName: string
    street: string
    houseNumber: string
    flatNumber: string
    zipCode: string
    city: string
}