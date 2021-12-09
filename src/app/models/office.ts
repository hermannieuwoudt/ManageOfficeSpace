export interface Office {
  id?: number;
  name?: string;
  physicalAddress: string;
  emailAddress: string;
  phoneNumber: string;
  maximumCapacity: number;
  colour: string;
}

export const mockOffice: Office = {
  id: 380,
  name: 'Specno',
  physicalAddress: '10 Willie Van Schoor Dr, Bo Oakdale, C...',
  emailAddress: 'info@specno.com',
  phoneNumber: '082 364 9864',
  maximumCapacity: 25,
  colour: '#FB5607',
};
