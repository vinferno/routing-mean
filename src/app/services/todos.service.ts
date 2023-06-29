import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private _todos: Todo[] = [];



  constructor(private apiService: ApiService) {

  }



  get todos() {
    return this._todos.map(user => ({...user}))
  }

  getTodos() {
    this.apiService.get<Todo[]>('todos').subscribe( todos => {
      this._todos = todos;
    })
  }


}
