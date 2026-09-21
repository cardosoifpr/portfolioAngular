import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProjetoService, Projeto } from '../projeto.service';

@Component({
  selector: 'app-gestao',
  imports: [ReactiveFormsModule],
  templateUrl: './gestao.html',
  styleUrl: '../app.css'
})
export class Gestao implements OnInit {
  private service = inject(ProjetoService);

  projetos: Projeto[] = [];
  carregando = true;
  erro = '';

  editandoId: number | null = null;
  salvando = false;

  form = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    descricao: new FormControl(''),
    tecnologias: new FormControl(''),
    link_github: new FormControl(''),
    ano: new FormControl(2026, [
      Validators.required
    ]),

    status: new FormControl<'rascunho' | 'publicado'>('publicado', [
      Validators.required
    ])
  });

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.carregando = true;
    this.erro = '';

    this.service.listar().subscribe({
      next: (lista) => {
        this.projetos = lista;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar os projetos.';
        this.carregando = false;
      }
    });
  }

  editar(p: Projeto) {
  this.editandoId = p.id ?? null;
  this.form.patchValue({
    nome: p.nome,
    descricao: p.descricao,
    tecnologias: p.tecnologias,
    link_github: p.link_github,
    ano: p.ano,
    status: p.status === 'arquivado' ? 'rascunho' : p.status
  });
}

  salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.salvando = true;
    this.erro = '';

    const dados = this.form.value as Projeto;

    const requisicao = this.editandoId
      ? this.service.atualizar(this.editandoId, dados)
      : this.service.criar(dados);

    requisicao.subscribe({
      next: () => {
        this.salvando = false;
        this.editandoId = null;

        this.form.reset({
          nome: '',
          descricao: '',
          tecnologias: '',
          link_github: '',
          ano: 2026,
          status: 'publicado'
        });

        this.carregar();
      },
      error: () => {
        this.salvando = false;
        this.erro = 'Não foi possível salvar o projeto. Tente de novo.';
      }
    });
  }

  excluir(p: Projeto) {
    if (!p.id) return;

    if (
      !confirm(
        `Excluir o projeto "${p.nome}"? Esta ação não pode ser desfeita.`
      )
    ) {
      return;
    }

    this.service.excluir(p.id).subscribe({
      next: () => {
        this.projetos = this.projetos.filter(
          x => x.id !== p.id
        );
      },
      error: () => {
        this.erro = 'Não foi possível excluir o projeto. Tente de novo.';
      }
    });
  }
}