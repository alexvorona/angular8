import { Component } from '@angular/core';

export interface  Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Angular todo'

  public todos: Todo[] = [
    {id: 1, title: 'lern typescript', completed: false, date: new Date()},
    {id: 2, title: 'lern angular', completed: false, date: new Date()}
  ]
}
