import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() // virou um atributo da tag app-star a ser usado no .html
  rating = 0;

  starWidth: number;


  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5; // 74 ou 94
  }
}

