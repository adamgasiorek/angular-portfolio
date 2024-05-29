import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-pictures-loading',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-row gap-4">
      <div class="flex h-64 w-64 relative">
          <div class="animate-pulse bg-gray-100 h-full w-full"></div>
      </div>
      <div class="flex flex-col gap-4 h-64 w-64 relative">
        <div class="flex w-64 relative">

<!--          <div class="max-w-md mx-auto">-->
<!--            <label for="multiSelect" class="block text-sm font-medium text-gray-700">Select options</label>-->
<!--            <select id="multiSelect" name="options" multiple class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">-->
<!--              <option value="1">Option 1</option>-->
<!--              <option value="2">Option 2</option>-->
<!--              <option value="3">Option 3</option>-->
<!--              <option value="4">Option 4</option>-->
<!--              <option value="5">Option 5</option>-->
<!--            </select>-->
<!--          </div>-->

        </div>

      </div>
    </div>
  `
})
export class UploadPicturesLoadingComponent {

}
