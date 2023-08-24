import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }    
    foodDetails=[
{
	id:1,
	foodName:"panner sandwitch",
	foodDetails:"pan-fried masala panner",
	foodPrice:200,
	foodImage:"https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
},
{
  id:2,
	foodName:" grilled chiken",
	foodDetails:"Grilled Chiken",
	foodPrice:300,
	foodImage:"https://images.unsplash.com/photo-1653982151807-a2ee87286ae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGxlZCUyMGNoaWtlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
  id:3,
	foodName:"SpiceChiken pizza",
	foodDetails:"Spicy grilled Chiken Pizza",
	foodPrice:550,
	foodImage:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
},
{
  id:4,
  foodName:"Shawarma",
  foodDetails:"Spicy grilled Chiken Shawarma",
  foodPrice:250,
  foodImage:"https://media.istockphoto.com/id/1311319463/photo/tawook-chicken-shawarma-and-falafel-pita-sandwich-middle-eastern-street-food.webp?b=1&s=170667a&w=0&k=20&c=WONBvR7YAilWv2T1FJkxaUALj9wstVb48cdpSNQzKzk="
}]
}
