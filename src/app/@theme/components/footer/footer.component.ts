import { Component } from '@angular/core';
import { faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  faFacebook = faFacebookF;
  faInstagram = faInstagramSquare;
  faTwitter = faTwitter;

}

