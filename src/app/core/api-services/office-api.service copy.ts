import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Office } from 'src/app/models/office';
import {
  Firestore,
  collectionData,
  docData,
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class OfficeApiService {
  constructor(private firestore: Firestore) {}

  index(): Observable<Office[]> {
    const officesRef = collection(this.firestore, 'offices');
    return collectionData(officesRef, { idField: 'id' }) as Observable<
      Office[]
    >;
  }

  create(office: Office) {
    const officesRef = collection(this.firestore, 'offices');
    return addDoc(officesRef, office);
  }

  show(id: string): Observable<Office> {
    const officeRef = doc(this.firestore, `offices/${id}`);
    return docData(officeRef, { idField: 'id' }) as Observable<Office>;
  }

  update(office: Office) {
    const officeRef = doc(this.firestore, `offices/${office.id}`);
    return updateDoc(officeRef, { ...office });
  }

  destroy(id: string) {
    const officeRef = doc(this.firestore, `offices/${id}`);
    return deleteDoc(officeRef);
  }
}
