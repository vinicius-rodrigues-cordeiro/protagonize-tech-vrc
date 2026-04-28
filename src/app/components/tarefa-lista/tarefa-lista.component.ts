import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './tarefa-lista.component.html',
  styleUrl: './tarefa-lista.component.css'
})
export class TarefaListaComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.listarTarefas().subscribe(dados => {
      this.tarefas = dados;
    });
  }

  excluir(id: number): void {
    if (confirm('Deseja excluir esta tarefa?')) {
      this.tarefaService.excluir(id).subscribe(() => {
        this.carregarTarefas();
      });
    }
  }

}
