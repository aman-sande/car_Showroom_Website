import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent

    },
    {
    path: '',
   component:HomeComponent
},
];
