import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/Services/orderdetails.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private services:OrderdetailsService) { }
  fooddata:any;
  ngOnInit():void {
    this.fooddata = this.services.foodDetails;
  }

}
