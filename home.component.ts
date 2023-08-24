import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/Services/orderdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private services:OrderdetailsService) { }
  fooddata:any;
  ngOnInit() {
    this.fooddata = this.services.foodDetails;
  }

}
