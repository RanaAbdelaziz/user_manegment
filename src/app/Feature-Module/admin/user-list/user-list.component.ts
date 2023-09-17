import { Component , OnInit} from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  customers!: any[];

  constructor()
  {

  }

  ngOnInit(){
    this.customers = [
      {
        id : 1,
        name : 'ahmed',
        company : 'dddd',
        number : 55
      },
      {
        id : 1,
        name : 'ahmed',
        company : 'dddd',
        number : 55
      },
      {
        id : 1,
        name : 'Mohammed',
        company : 'dddd',
        number : 55
      },
      {
        id : 1,
        name : 'ahmed',
        company : 'dddd',
        number : 55
      },
      {
        id : 1,
        name : 'ahmed',
        company : 'dddd',
        number : 55
      },
      {
        id : 1,
        name : 'ahmed',
        company : 'sss',
        number : 55
      },
      {
        id : 1,
        name : 'ahmed',
        company : 'dddd',
        number : 55
      },
      {
        id : 1,
        name : 'ahmed',
        company : 'dddd',
        number : 55
      },

    ]

  }


  clear(table: Table) {
    table.clear();
    
}

}
