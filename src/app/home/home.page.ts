import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  onboardSlides = [];
  @ViewChild('mainSlides', { static: true}) slides: IonSlides

  constructor() {}

  ngOnInit(){
    this.onboardSlides = [
      {
        title: 'Enjoying the Moment',
        img: 'slide_1',
        desc: 'Most people learn to make every moment count by simple going out'
      },
      {
        title: 'live the life',
        img: 'slide_2',
        desc: 'In our daily lives, We offer good time and good moment to make better life'
      },
      {
        title:'capture the moment',
        img: 'slide_3',
        desc: 'You not alone, Dont miss a good moment'
      }
    ]
  }

  goBack(){
    this.slides.slidePrev();
  }
  skipBtn(){
    console.log('i will go to home');
    
  }
  goNext(){
    this.slides.slideNext();
  }

}
