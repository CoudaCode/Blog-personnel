import { Component } from '@angular/core';
import { AuthFormComponent } from '../../../components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [AuthFormComponent],
})
export class LoginComponent {
  // Optional property (if needed)
  formType = 'login';

  onSubmit(formData: any) {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // ... (e.g., call an API, handle routing)
  }
}
