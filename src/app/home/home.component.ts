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

}

