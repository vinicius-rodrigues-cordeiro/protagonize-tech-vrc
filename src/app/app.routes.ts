import { Routes } from '@angular/router';
import { TarefaListaComponent } from './components/tarefa-lista/tarefa-lista.component';
import { TarefaFormComponent } from './components/tarefa-form/tarefa-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: TarefaListaComponent },
  { path: 'tarefas/nova', component: TarefaFormComponent },
  { path: 'tarefas/editar/:id', component: TarefaFormComponent },
];
