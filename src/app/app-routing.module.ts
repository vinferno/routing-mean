import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path: 'todos', component: TodosListComponent},
  {path: 'users', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
