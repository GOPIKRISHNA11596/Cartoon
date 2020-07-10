import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartoon } from './cartoon';

@Component({
  selector: 'pm-cartoon-list',
  templateUrl: './cartoon-list.component.html',
  styleUrls: ['./cartoon-list.component.css']
})
export class CartoonListComponent implements OnInit {

  pageTitle: string = 'Cartoon List' ;
  showImage: boolean = false;
  imageWidth : number = 50;
  imageMargin : number = 2;
  //cardBodyTwo : boolean = false;

  filteredCartoons : ICartoon[];

  private _listFilter : string = '';
  get listFilter(): string {
  return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter = value;
    this.filteredCartoons=this.listFilter? this.performFilter(this.listFilter):this.cartoons;
  }


  cartoons: ICartoon[] = [
    {
      "cartoonId": 1,
      "cartoonName": "Mr Bean",
      "releaseDate": "March 19, 2019",
      "description": "Mr. Bean is childish, selfish, extremely competitive and brings various unusual schemes and contrivances to everyday tasks.",
      "imageUrl": "assets/images/MrBean.jpg",
      "starRating":"4.8"
    },
    {
      "cartoonId": 2,
      "cartoonName": "Richie Rich",
      "releaseDate": "March 20, 2019",
      "description": "Richard Richie Rich Jr. is the world's richest kid.",
      "imageUrl": "assets/images/RichieRich.jpg",
      "starRating":"3.2"
    },
    {
      "cartoonId": 3,
      "cartoonName": "Sponge Bob",
      "releaseDate": "March 21, 2019",
      "description": "SpongeBob SquarePants is the title character and protagonist of the American animated... world of SpongeBob.",
      "imageUrl": "assets/images/SpongeBob.jpg",
      "starRating":"2.2"
    },
    {
      "cartoonId": 4,
      "cartoonName": "Tom and Jerry",
      "releaseDate": "March 22, 2019",
      "description": "Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna.",
      "imageUrl": "assets/images/TomJerry.jpg",
      "starRating":"4.2"
    }
  ]


  constructor(private router: Router) {

    this.filteredCartoons = this.cartoons;
    this.listFilter = '';
   }

  ngOnInit(): void {
  }

  performFilter(filterBy: string): ICartoon[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.cartoons.filter((cartoon: ICartoon) =>
            cartoon.cartoonName.toLocaleLowerCase().indexOf(filterBy) >= 0);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onBack(): void{
    this.router.navigate(['/welcome']);
  }
  onRatingClicked(message : string):void{
     console.log('The rating is'+message)
    //this.cardBodyTwo = !this.cardBodyTwo;
  }
}
