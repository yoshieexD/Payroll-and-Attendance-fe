export interface IEmployee {
    _id: string;
    email: String,
    name: String,
    salary?: {
        monthly?: Number,
        total?: Number,
    }
    startDate: Date,
    employmentType: String
}