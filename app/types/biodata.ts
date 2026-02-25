export type BiodataForm = {
  // Meta
  biodataTitle: string;
  godName: string;
  
  // Personal Details
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  height: string;
  religious: string; // Religion
  caste: string;
  subCaste: string;
  gotra: string;
  rashi: string;
  nakshatra: string;
  manglik: string;
  gan: string;
  complexion: string;
  bloodGroup: string;
  education: string;
  occupation: string; // Job/Occupation
  salary: string;
  languages: string;
  hobbies: string;
  
  // Family Details
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: string;
  sisters: string;
  
  // Contact Details
  contactPerson: string;
  contactNumber: string;
  email: string;
  address: string;
  
  // Photo
  photo?: string; // base64 or URL
};

export type FieldVisibility = {
  [key in keyof BiodataForm]?: boolean;
};

export const defaultBiodataForm: BiodataForm = {
  biodataTitle: 'Biodata',
  godName: '|| Ganeshaya Namah ||',
  name: '',
  dateOfBirth: '',
  timeOfBirth: '',
  placeOfBirth: '',
  height: '',
  religious: '',
  caste: '',
  subCaste: '',
  gotra: '',
  rashi: '',
  nakshatra: '',
  manglik: '',
  gan: '',
  complexion: '',
  bloodGroup: '',
  education: '',
  occupation: '',
  salary: '',
  languages: '',
  hobbies: '',
  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  motherOccupation: '',
  brothers: '',
  sisters: '',
  contactPerson: '',
  contactNumber: '',
  email: '',
  address: '',
  photo: '',
};

export const defaultFieldVisibility: FieldVisibility = {
  biodataTitle: true,
  godName: true,
  name: true,
  dateOfBirth: true,
  timeOfBirth: true,
  placeOfBirth: true,
  height: true,
  religious: true,
  caste: true,
  subCaste: true,
  gotra: true,
  rashi: true,
  nakshatra: true,
  manglik: true,
  gan: true,
  complexion: true,
  bloodGroup: true,
  education: true,
  occupation: true,
  salary: true,
  languages: true,
  hobbies: true,
  fatherName: true,
  fatherOccupation: true,
  motherName: true,
  motherOccupation: true,
  brothers: true,
  sisters: true,
  contactPerson: true,
  contactNumber: true,
  email: true,
  address: true,
  photo: true,
};
