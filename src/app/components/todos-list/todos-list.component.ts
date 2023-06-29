import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  constructor(
    private todosService: TodosService
  ) { }

  get todos() {
    return this.todosService.todos;
  }

  ngOnInit(): void {
    this.todosService.getTodos();
  }

}
