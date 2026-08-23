import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './contato.html',
  styleUrl: '../app.css',
})
export class Contato {
  private fb = inject(FormBuilder);
  private service = inject(ContatoService);
  enviando = false; sucesso = ''; erro = '';

  form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });


  onSubmit() {
    this.sucesso = ''; this.erro = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const primeiroInvalido = Object.keys(this.form.controls)
      .find(campo => this.form.get(campo)?.invalid);

    if (primeiroInvalido) {
      setTimeout(() => {
      document.getElementById(primeiroInvalido)?.focus();
    });
    }
      this.erro = 'Corrija os campos destacados antes de enviar.';
      return;
    }
    this.enviando= true;
    this.service.enviar(this.form.getRawValue()).subscribe({
      next: (resp) => {
        this.sucesso = resp.mensagem;
        this.form.reset();
        this.enviando = false;
      },
      error: (err: HttpErrorResponse) => {
        const erros = err.error?.erros;
        this.erro = erros?.join(' ') ?? 'Nao foi possivel enviar. Tente novamente.'; 
        this.enviando = false;
      },
    });
  }
}
