import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { GreatDeliveryComponent } from './components/great-delivery/great-delivery.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { ColaborateComponent } from './components/colaborate/colaborate.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MainComponent,
    GreatDeliveryComponent,
    FeatureListComponent,
    WhyChooseComponent,
    ColaborateComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mariposa';
}
