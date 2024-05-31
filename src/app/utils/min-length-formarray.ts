import { AbstractControl } from '@angular/forms';

export const minLengthArray = (min: number) => {
  return (c: AbstractControl): Record<string, any> | null => {
    if (c.value.length >= min) return null;

    return { MinLengthArray: true };
  };
};
