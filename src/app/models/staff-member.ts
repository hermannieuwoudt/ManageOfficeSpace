export interface StaffMember {
  id?: string;
  firstName?: string;
  lastName: string;
  avatar?: string;
  officeId: string;
}

export const mockOffice: StaffMember = {
  id: 'QZ4jnPf44AOb9SUFDPfE',
  firstName: 'Jacques',
  lastName: 'Jordaan',
  avatar: '/assets/avatars/Avatar2.svg',
  officeId: 'dZPEKNkV17wNP76shv7z',
};
