import { Component, Input } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { tags } from '../../../../../data/tags';

@Component({
  selector: 'app-select-tags',
  standalone: true,
  imports: [MatFormField, MatLabel, MatOption, MatSelect, ReactiveFormsModule],
  templateUrl: './select-tags.component.html',
})
export class SelectTagsComponent {
  @Input() parentFormGroup: FormGroup | undefined;

  toppings = new FormControl('');
  toppingList = tags.map(item => item.name);
}
