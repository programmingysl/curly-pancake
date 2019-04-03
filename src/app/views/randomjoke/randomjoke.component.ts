import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JokeserviceService} from '../../models/jokeservice.service';

@Component({
  selector: 'app-randomjoke',
  templateUrl: './randomjoke.component.html',
  styleUrls: ['./randomjoke.component.scss']
})
export class RandomjokeComponent implements OnInit {
  joke: string;
  constructor(private jokeFetcher: JokeserviceService) {}

  ngOnInit() {

    this.jokeFetcher.getRandomJoke().subscribe(
      (result) => {
        this.joke = result.joke;
      }
    );

  }

}
