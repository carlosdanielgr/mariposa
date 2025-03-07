import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreatDeliveryComponent } from './components/great-delivery/great-delivery.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    GreatDeliveryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mariposa';
}
