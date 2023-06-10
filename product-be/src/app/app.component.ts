import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-be';

  constructor(private router: Router) {
  }

  reload(navLink: string) {
    const currentLink = this.router.url;
    if (currentLink === navLink) {
      this.router.navigateByUrl('', {skipLocationChange: true}).then(() => this.router.navigateByUrl(currentLink));
    }
  }
}
