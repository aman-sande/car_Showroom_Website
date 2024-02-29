import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,LoginComponent,NgFor,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products:any[]=[];
  clients:any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {

    this.http.get('assets/Json/products.json').subscribe((data:any)=>{
      this.products=data;
    }),
    this.http.get('assets/Json/clients.json').subscribe((Clientdata:any)=>{
      this.clients=Clientdata;
    });
  }
  homeImage="./assets/image/home-img.png"

  car1="./assets/image/car-1.png";
  car2="./assets/image/car-2.png";
  car3="./assets/image/car-3.png";
  car4="./assets/image/car-4.png";
  car5="./assets/image/car-5.png";
  car6="./assets/image/car-6.png";
  car7="./assets/image/car-7.png";
  car8="./assets/image/car-8.png";

  pic1="./assets/image/pic-1.png";
  pic2="./assets/image/pic-2.png";
  pic3="./assets/image/pic-3.png";
  
  
 
}

