import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from 'src/app/Services/orderdetails.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private services:OrderdetailsService) { }
  getmenuId:any;
  menudata:any;
  ngOnInit() {
    this.getmenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getmenuId,'getmenu')

    if(this.getmenuId){
      this.menudata = this.services.foodDetails.filter((value)=>{
        return  value.id==this.getmenuId
      })
    }
  }

}
