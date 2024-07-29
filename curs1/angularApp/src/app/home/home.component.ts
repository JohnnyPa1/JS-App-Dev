import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home:string = 'Titlu din Home Component';
  user = {
    nume:       'Popescu',
    prenume:    'Dan'
  };

  myName:string = 'Popescu Ion';

  cars = ['Tesla','Toyota','BMW', 'Passat', 'Ford'];

  showImg:boolean = true;
  imageUrl = "https://media.istockphoto.com/id/472909414/ro/fotografie/demo-semn-colorat-tag-uri.jpg?s=2048x2048&w=is&k=20&c=jSRNIkpJfqMddHhj-Tcszjoh099GYHXtK-_lhvBpVpM="

  imgShow(){
    if(this.showImg){
      this.showImg = false;
    }else{
      this.showImg = true;
    }
  }


}
