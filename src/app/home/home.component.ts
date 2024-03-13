import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from '../modules/course/category.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private _http: HttpClient) { }
  categories: Category[] | undefined;
  ngOnInit() {
    this._http.get<Category[]>('https://localhost:7218/categories').subscribe(data => this.categories = data)
  }
}
