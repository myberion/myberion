import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterOutlet],
  selector: 'myberion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myberion-app';
}
