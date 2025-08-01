import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import emailjs from 'emailjs-com';

@Component({
  selector: 'app-agriconnect',
  templateUrl: './agriconnect.component.html',
  styleUrls: ['./agriconnect.component.css']
})
export class AgriconnectComponent implements OnInit {
  agrisignup: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder) {
    this.agrisignup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize EmailJS if using
    emailjs.init('U83jSDmTjXqCRtP6S');
  }

  onSubmit() {
    if (this.agrisignup.valid) {
      const formValues = this.agrisignup.value;

      // Prepare template parameters
      const templateParams = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password
      };

      // Replace with your EmailJS service and template IDs
      emailjs.send('service_j9j6588', 'template_k2mb1qp', templateParams)
        .then(() => {
          this.message = 'Thanks for signing up!';
          this.agrisignup.reset();
        })
        .catch(() => {
          this.message = 'Oops! Something went wrong.';
        });
    }
  }

}
