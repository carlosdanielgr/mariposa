import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
