import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user';
import {Like} from 'src/app/models/like';
import {TweetsService} from 'src/app/Services/tweets.service';

@Component({
  selector: 'app-tweets-listado',
  templateUrl: './tweets-listado.component.html',
  styleUrls: ['./tweets-listado.component.scss']
})
export class TweetsListadoComponent implements OnInit {

  users:User;
  listadoLikes:Like[];

  columnsToDisplay = ['id','username','descripcion','website'];

  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
    this.loadTweets();
  }

  loadTweets(){
    this.tweetsService.getTweets().subscribe(resp=> {
      this.listadoLikes = resp.likes;      
    });

  }

}
