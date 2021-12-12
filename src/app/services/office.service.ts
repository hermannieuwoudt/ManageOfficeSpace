import { Injectable } from '@angular/core';
import { OfficeApiService } from '../core/api-services/office-api.service copy';
import { Office } from '../models/office';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  constructor(private officeApiService: OfficeApiService) {}

  createOffice(office: Office) {
    this.officeApiService.create(office);
  }

  updateOffice(office: Office) {
    this.officeApiService.update(office);
  }

  deleteOffice(office: Office) {
    this.officeApiService.destroy(office.id);
  }
}
