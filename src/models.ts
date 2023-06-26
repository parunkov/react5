export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    catrgory: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}