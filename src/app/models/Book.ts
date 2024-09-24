export class Book {

    id: number;
	name: string;
	blurb: string;
	rentalPrice: number;
	addingDate: string;
	genres: string[];
	writer: string;

    constructor(data:any){
        this.id = data.id;
        this.name = data.name;
        this.blurb = data.blurb;
        this.rentalPrice = data.rentalPrice;
        this.addingDate = data.addingDate;
        this.genres = data.genres;
        this.writer = data.writer;
    }

}