import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private router: Router) {
  }

  reload(link: string) {
    const currentLink = this.router.url;
    if (currentLink === link) {
      this.router.navigateByUrl('', {skipLocationChange: true}).then(() => this.router.navigateByUrl(currentLink));
    }
  }
}
