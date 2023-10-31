import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tweets: any[] = [
    { user: 'User 1', text: 'This is a sample tweet.' },
    { user: 'User 2', text: 'Another sample tweet here.' }
  ];
  newTweetText: string = '';

  postTweet() {
    if (this.newTweetText.trim() !== '') {
      this.tweets.push({ user: 'User', text: this.newTweetText });
      this.newTweetText = '';
    }
  }
}
