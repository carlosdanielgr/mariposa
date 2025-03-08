import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreatDeliveryComponent } from './components/great-delivery/great-delivery.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { ColaborateComponent } from './components/colaborate/colaborate.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    GreatDeliveryComponent,
    FeatureListComponent,
    WhyChooseComponent,
    ColaborateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mariposa';
}
