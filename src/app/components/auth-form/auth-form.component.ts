import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, RouterOutlet],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  @Input() formType: 'register' | 'login' = 'login';
  @Output() formSubmit = new EventEmitter<object>();

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: [
        '',
        [
          this.formType === 'register'
            ? Validators.required
            : Validators.nullValidator,
          Validators.minLength(7),
        ],
      ], // Conditional validation
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      if (this.formType === 'login') {
        console.log('Formulaire de connexion soumis:', this.form.value);
        // Gérer la logique de connexion ici (par exemple, API, routage)
      } else if (this.formType === 'register') {
        console.log("Formulaire d'inscription soumis:", this.form.value);
        // Gérer la logique d'inscription ici (par exemple, API, routage)
      }
    }
  }

  getMessageError(controlName: string) {
    const control = this.form.get(controlName);

    if (control && control.errors) {
      if (control.errors['required']) {
        return 'Ce champ is obligatoire.';
      }

      if (control.errors['email']) {
        return 'Entrez une mail valide. ';
      }

      if (control.errors['minLength']) {
        const requiredLength: number =
          control.errors['minLength'].requiredLength;
        console.log('minLength');
        return `La longeur minimun est de${requiredLength} characters.`;
      }
    }
    return '';
  }
}
