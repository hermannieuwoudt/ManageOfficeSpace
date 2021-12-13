import { Pipe, PipeTransform } from '@angular/core';
import { StaffMember } from '../models/staff-member';

@Pipe({
  name: 'searchFilterPipe',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: StaffMember[], searchString?: string): StaffMember[] {
    if (!items) {
      return [];
    }
    if (!searchString) {
      return items;
    }

    searchString = searchString.toLowerCase();
    return items.filter((staffMember: StaffMember) => {
      const fullName = staffMember.firstName + ' ' + staffMember.lastName;
      return fullName.toLowerCase().includes(searchString);
    });
  }
}
