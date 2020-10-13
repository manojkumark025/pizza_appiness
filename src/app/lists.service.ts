import { Injectable } from '@angular/core';
import { sampleData } from './data'

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  getsampleData(){
    return sampleData;
  }
}

