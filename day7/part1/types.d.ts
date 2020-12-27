export interface ILuggage {
    name: string,
    capacity: ICapacity[]
}

export interface ICapacity {
    bagRef: string,
    count: number
}

export interface ILuggageRule {
    bagName: string,
    capacity: {
        name: string,
        count: number
    }[]
}