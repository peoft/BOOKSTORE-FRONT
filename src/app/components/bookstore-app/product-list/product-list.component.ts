import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private bookservice: BookService;
  livros: any;

  constructor(private _bookservice: BookService) {
    this.bookservice = _bookservice;
   }

  ngOnInit(): void {
    this.livros = this.bookservice.getBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))
  }

}
