import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 's S s t T t y Y y l L l e E e';
  image1 = 'https://ircimg.net/DQ947h3.jpg';
  image2 = 'https://ircimg.net/1367670634512.jpg';
  image3 = 'https://ircimg.net/941470_452438994831159_1965679624_n.jpg';

  constructor() { }

  ngOnInit() {
  }

}