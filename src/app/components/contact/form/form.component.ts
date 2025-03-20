import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form = new FormGroup({
    fullname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  loading = false;

  constructor(private readonly formService: FormService) {}

  postForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    const { fullname, phone, email, city, message, type } = this.form.value;
    const date = new Date().toISOString().split('T');
    const body = {
      Date: `${date[0]} ${date[1].split('.')[0]}`,
      'Full Name': fullname,
      'Phone Number': phone,
      Email: email,
      City: city,
      'Business type': type,
      Message: message,
    };
    this.formService.postForm(body).subscribe({
      next: () => {
        this.form.reset();
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }
}
