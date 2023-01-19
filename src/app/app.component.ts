import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube-paginate';
  p: number = 1;
  collection: any[] = ['sleeping','eating','watching','hiking','Reading','walking','crying','touring','cleaning','driving','chatting']; 
}
