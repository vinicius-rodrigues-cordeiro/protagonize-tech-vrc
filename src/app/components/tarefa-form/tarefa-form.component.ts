import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefa-form.component.html',
  styleUrl: './tarefa-form.component.css'
})
export class TarefaFormComponent implements OnInit {

  tarefa: Tarefa = {
    titulo: '',
    descricao: '',
    status: 'Pendente'
  };

  isEdicao = false;

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdicao = true;
      this.tarefaService.buscarPorId(Number(id)).subscribe(dados => {
        this.tarefa = dados;
      });
    }
  }

  salvar(): void {
    if (this.isEdicao) {
      this.tarefaService.atualizar(this.tarefa.id!, this.tarefa).subscribe(() => {
        this.router.navigate(['/tarefas']);
      });
    } else {
      this.tarefaService.criar(this.tarefa).subscribe(() => {
        this.router.navigate(['/tarefas']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/tarefas']);
  }

}