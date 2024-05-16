import { Component } from '@angular/core';
import { AuthFormComponent } from '../../../components/auth-form/auth-form.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  formType = 'register';

  onSubmit(formData: any) {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // ... (e.g., call an API, handle routing)
  }
}
