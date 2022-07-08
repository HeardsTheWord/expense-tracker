import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ExpenseField } from '../../shared/models/expense-field';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  form: FormGroup | any;
  constructor () { }

  ngOnInit()
  {
    this.form = new FormGroup({
      expenses: new FormArray([
        new FormGroup({
          name: new FormControl(''),
          cost: new FormControl(''),
          month: new FormControl('')
        })
        //new FormGroup(new ExpenseField)
      ])
    });

    console.log(this.form);
  }

  get expenses(): FormArray
  {
    return this.form.get('expenses') as FormArray;
  }

  addExpense()
  {
    this.expenses.push(
      new FormGroup({
        name: new FormControl(''),
        cost: new FormControl(''),
        month: new FormControl('')
      })
    );
  }
}
