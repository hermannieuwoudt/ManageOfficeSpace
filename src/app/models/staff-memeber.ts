export interface StaffMember {
  id?: number;
  firstName?: string;
  lastName: string;
  avatar?: string;
}

export const mockOffice: StaffMember = {
  id: 380,
  firstName: 'Jacques',
  lastName: 'Jordaan',
  avatar: '',
};
