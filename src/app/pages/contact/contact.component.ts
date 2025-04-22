import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      subscribe: [false]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // In a real app, you would send this data to a server
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
