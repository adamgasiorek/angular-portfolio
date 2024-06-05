import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatChipGrid,
  MatChipInput,
  MatChipInputEvent,
  MatChipRow,
} from '@angular/material/chips';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatIcon } from '@angular/material/icon';
import { map, Observable, of, startWith } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AsyncPipe } from '@angular/common';
import { tags } from '../../../../../data/tags';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-select-tags',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatChipGrid,
    MatAutocomplete,
    MatChipInput,
    MatAutocompleteTrigger,
    MatChipRow,
    MatIcon,
    AsyncPipe,
    MatInput,
  ],
  templateUrl: './select-tags.component.html',
})
export class SelectTagsComponent implements AfterViewInit {
  @Input() parentFormGroup: FormGroup | undefined;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredFruits: Observable<string[]> = of([]);
  tags: string[] = [];
  allTags: string[] = tags.map(item => item.name);
  fruitCtrl = new FormControl('');

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> | undefined;

  announcer = inject(LiveAnnouncer);

  constructor(private cdr: ChangeDetectorRef) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allTags.slice()
      )
    );
  }

  ngAfterViewInit(): void {
    this.tags = this.parentFormGroup!.get('tags')?.value;
    this.cdr.detectChanges();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();

    this.parentFormGroup!.get('tags')!.patchValue(null);
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.fruitInput!.nativeElement.value = '';
    this.parentFormGroup!.get('tags')!.patchValue(null);
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(fruit =>
      fruit.toLowerCase().includes(filterValue)
    );
  }
}
