import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = 'http://localhost:5000/api/tarefas';

  constructor(private http: HttpClient) { }

  listarTarefas() {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  buscarPorId(id: number) {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  criar(tarefa: Tarefa) {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  atualizar(id: number, tarefa: Tarefa) {
    return this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefa);
  }

  excluir(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}