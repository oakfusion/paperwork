import { Contract } from "./Contract";
import { Vendor } from "./Vendor";

export type Project = {
    id: number
    name: string
    contracts: Contract[]
    vendor: Vendor
    value: number
}