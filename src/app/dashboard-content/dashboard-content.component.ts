import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FavouritesService } from '../services/favourites.service';
interface restaurant{
  title:string,
  description:string,
  img:string,
  offer?:string,
  hotelName:string,
  rating:number,
  time:string,
  place:string,
  price:number,
  quantity:number,
  favorited:boolean
}

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent implements OnInit {
  
  value: string | null = null;
  descriptionValue:string="";

  constructor(private route: ActivatedRoute,private r:Router,private cartService:CartService,private favService:FavouritesService) {}
  restaurants:restaurant[]=[
    {
      title:"Dosa",
      description:"Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.",
      img:"../../assets/Restaurants/Dosa/Dosa1.avif",
      offer:"125 OFF ABOVE 299",
      hotelName:"Hotel Sri Sankara Vilas",
      rating:4.4,
      time:"30-35 mins",
      place:"South Indian, North Indian Brodipet",
      price:170,
      quantity:1,
      favorited:false
    },
    {
      title:"Dosa",
      description:"Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.",
      img:"../../assets/Restaurants/Dosa/Dosa2.avif",
      offer:"40% OFF UPTO 80",
      hotelName:"New Geeta Star Hotel",
      rating:4.2,
      time:"15-20 mins",
      place:"South Indian Old Guntur",
      price:100,
      quantity:1,
      favorited:false
    },
    {
      title:"Dosa",
      description:"Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.",
      img:"../../assets/Restaurants/Dosa/Dosa3.avif",
      offer:"50% OFF UPTO 100",
      hotelName:"Ganesh Tiffins",
      rating:4.4,
      time:"30-35 mins",
      place:"Biryani, Chinese Lakshmipuram",
      price:100,
      quantity:1,
      favorited:false
    },
    {
      title:"Dosa",
      description:"Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.",
      img:"../../assets/Restaurants/Dosa/Dosa4.avif",
      offer:"10% OFF ABOVE 699",
      hotelName:"Hotel Sri Venkataramana",
      rating:4.2,
      time:"30-35 mins",
      place:"South Indian, Snavks,Fast Food,... Brodipet & Arundalpet",
      price:80,
      quantity:1,
      favorited:false
    },
    {
      title:"Idli",
      description:"Deliciously soft and healthy Idlis for an ideal breakfast.",
      img:"../../assets/Restaurants/Idly/Idly1.avif",
      offer:"175 OFF ABOVE 449",
      hotelName:"JKC Food Court",
      rating:4.2,
      time:"30-35 mins",
      place:"South Indian, Chaat, Chinese JKC College Campus",
      price:60,
      quantity:1,
      favorited:false
    },
    {
      title:"Idli",
      description:"Deliciously soft and healthy Idlis for an ideal breakfast.",
      img:"../../assets/Restaurants/Idly/idly2.avif",
      offer:"40% OFF UPTO 80",
      hotelName:"New Geeta Star Hotel",
      rating:4.2,
      time:"15-20 mins",
      place:"South Indian Old Guntur",
      price:75,
      quantity:1,
      favorited:false
    },
    {
      title:"Idli",
      description:"Deliciously soft and healthy Idlis for an ideal breakfast.",
      img:"../../assets/Restaurants/Idly/idly3.avif",
      offer:"125 OFF ABOVE 299",
      hotelName:"Mourya-Hotel",
      rating:4.4,
      time:"30-35 mins",
      place:"South Indian, North Indian Brodipet",
      price:90,
      quantity:1,
      favorited:false
    },
    {
      title:"Idli",
      description:"Deliciously soft and healthy Idlis for an ideal breakfast.",
      img:"../../assets/Restaurants/Idly/idly4.avif",
      offer:"10% OFF ABOVE 999",
      hotelName:"Mourya Hotel-Veg",
      rating:4.0,
      time:"25-30 mins",
      place:"South Indian Brodipet",
      price:70,
      quantity:1,
      favorited:false
    },
    {
      title:"Pesarattu",
      description:"A delicious staple that is a perfect choice for your breakfast.",
      img:"../../assets/Restaurants/pesarattu/pesarattu1.avif",
      offer:"",
      hotelName:"Geetha Regency Pure Veg",
      rating:4.5,
      time:"25-30 mins",
      place:"South Indian,North Indian Brodipet",
      price:100,
      quantity:1,
      favorited:false
    },
    {
      title:"Pesarattu",
      description:"A delicious staple that is a perfect choice for your breakfast.",
      img:"../../assets/Restaurants/pesarattu/pesarattu2.avif",
      offer:"",
      hotelName:"Mourya Tasty Foods",
      rating:4.6,
      time:"25-30 mins",
      place:"South Indian,Indian,Biryani,Andhra.. Lakshmipuram",
      price:90,
      quantity:1,
      favorited:false
    },
    {
      title:"Cakes",
      description:"Feast on amazing cakes to satisfy your sweet tooth.",
      img:"../../assets/Restaurants/cake/cake1.avif",
      offer:"50% OFF UPTO 100",
      hotelName:"Sweeth Truth-Cake",
      rating:4.2,
      time:"30-35 mins",
      place:"Snacks, Bakery, Desserts, Lakshmipuram",
      price:80,
      quantity:1,
      favorited:false
    },
    {
      title:"Cakes",
      description:"Feast on amazing cakes to satisfy your sweet tooth.",
      img:"../../assets/Restaurants/cake/cake2.avif",
      offer:"",
      hotelName:"RS Cakes",
      rating:3.9,
      time:"30-35 mins",
      place:"Bakery Brodipet",
      price:90,
      quantity:1,
      favorited:false
    },
    {
      title:"Cakes",
      description:"Feast on amazing cakes to satisfy your sweet tooth.",
      img:"../../assets/Restaurants/cake/cake3.avif",
      offer:"",
      hotelName:"Ibaco",
      rating:4.5,
      time:"20-25 mins",
      place:"Lakshmipuram",
      price:250,
      quantity:1,
      favorited:false
    },
    {
      title:"Cakes",
      description:"Feast on amazing cakes to satisfy your sweet tooth.",
      img:"../../assets/Restaurants/cake/cake4.avif",
      offer:"",
      hotelName:"WarmOven Cake & Desserts",
      rating:4,
      time:"40-45 mins",
      place:"Brodipet",
      price:350,
      quantity:1,
      favorited:false
    },
    {
      title:"Vada",
      description:"Snack on these crispy & crunchy Vadas that are also comforting!",
      img:"../../assets/Restaurants/vada/vada1.avif",
      offer:"",
      hotelName:"New Geeta Star Hotel",
      rating:4.2,
      time:"15-20 mins",
      place:"South Indian Old Guntur",
      price:250,
      quantity:1,
      favorited:false
    },
    {
      title:"Vada",
      description:"Snack on these crispy & crunchy Vadas that are also comforting!",
      img:"../../assets/Restaurants/vada/vada2.avif",
      offer:"",
      hotelName:"Eswari Vilas",
      rating:4.2,
      time:"20-25 mins",
      place:"Brodipet & Arundalpet",
      price:100,
      quantity:1,
      favorited:false
    },
    {
      title:"Khichdi",
      description:"Comforting and filling, dive into the delicious flavour of Khichdi.",
      img:"../../assets/Restaurants/kichidi/kichidi1.avif",
      offer:"",
      hotelName:"Sri Lakshmi Foods",
      rating:4.1,
      time:"30-35 mins",
      place:"Srinivasa Naga Colony",
      price:135,
      quantity:1,
      favorited:false

    },
    {
      title:"Khichdi",
      description:"Comforting and filling, dive into the delicious flavour of Khichdi.",
      img:"../../assets/Restaurants/kichidi/kichidi2.avif",
      offer:"",
      hotelName:"Khichdl Kahani",
      rating:3.2,
      time:"35-40 mins",
      place:"Brodipet & Arundalpet",
      price:150,
      quantity:1,
      favorited:false
    },
    {
      title:"poori",
      description:"A delicious, fried breakfast staple that will remind you of home.",
      img:"../../assets/Restaurants/puri/puri1.avif",
      offer:"",
      hotelName:"Geetha Regency Pure Veg",
      rating:4.5,
      time:"25-30 mins",
      place:"Brodipet",
      price:75,
      quantity:1,
      favorited:false
    },
    {
      title:"Shakes",
      description:"Tempt your taste buds with cold and thick milkshakes.",
      img:"../../assets/Restaurants/shakes/shakes1.avif",
      offer:"",
      hotelName:"Lassi Shop",
      rating:4,
      time:"25-30 mins",
      place:"Beverages",
      price:250,
      quantity:1,
      favorited:false
    },
    {
      title:"Shakes",
      description:"Tempt your taste buds with cold and thick milkshakes.",
      img:"../../assets/Restaurants/shakes/shakes2.avif",
      offer:"20% OFF UPTO 50",
      hotelName:"Anand Juice And Chat",
      rating:4.2,
      time:"25-30 mins",
      place:"Brodipet",
      price:300,
      quantity:1,
      favorited:false
    },
    {
      title:"shakes",
      description:"Tempt your taste buds with cold and thick milkshakes.",
      img:"../../assets/Restaurants/shakes/shakes3.avif",
      offer:"",
      hotelName:"Athreyapuram Specials",
      rating:4.3,
      time:"20-25 mins",
      place:"Brodipet & Arundalpet",
      price:350,
      quantity:1,
      favorited:false
    },
    {
      title:"Samosa",
      description:"The perfect snack companion to enjoy your Chai or coffee.",
      img:"../../assets/Restaurants/samosa/samosa1.avif",
      offer:"151 OFF ABOVE 399",
      hotelName:"Bombay Chaat Bhandar",
      rating:4.3,
      time:"20-30 mins",
      place:" North Indian, Chaat Brodipet",
      price:55,
      quantity:1,
      favorited:false
    },
    {
      title:"Samosa",
      description:"The perfect snack companion to enjoy your Chai or coffee.",
      img:"../../assets/Restaurants/samosa/samosa2.avif",
      offer:"",
      hotelName:"Anand Juice",
      rating:4.1,
      time:"30-35 mins",
      place:"Juices,Snacks, Fast Food Kothapet",
      price:75,
      quantity:1,
      favorited:false
    },
    {
      title:"Paratha",
      description:"Explore a wide variety of Parathas to satisfy your cravings.",
      img:"../../assets/Restaurants/Paratha/paratha1.avif",
      offer:"175 OFF ABOVE 649",
      hotelName:"Bowl & Barbeque",
      rating:4.2,
      time:"30-35 mins",
      place:"Biryani,Chinese,Tandoor Brodipet",
      price:150,
      quantity:1,
      favorited:false
    },
    {
      title:"Paratha",
      description:"Explore a wide variety of Parathas to satisfy your cravings.",
      img:"../../assets/Restaurants/Paratha/paratha2.avif",
      offer:"50% OFF UPTO 100",
      hotelName:"Hotel Siddhartha",
      rating:4.4,
      time:"20-30 mins",
      place:"South Indian, North Indian Brodipet",
      price:160,
      quantity:1,
      favorited:false
    },
  ]



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.value = params.get('value');
      console.log(this.value); // Retrieve 'value' from the route
      for(let x of this.restaurants){
        if(x.title?.toLowerCase() === this.value?.toLowerCase()){
          this.descriptionValue=x.description
        }
      }
    });
  }
  AddToCart(product:any){
    this.cartService.addCart(product);
    // this.r.navigate(['/dashboard/cart']);
    // console.log(product);
  }
  AddToFavourite(Restaurant:restaurant) {
    Restaurant.favorited = !Restaurant.favorited;
    if(Restaurant.favorited){
      this.favService.addFav(Restaurant);
      console.log(this.favService.getFavProducts());
    }
  }


}

  