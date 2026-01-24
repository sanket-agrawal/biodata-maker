export type BiodataForm = {
  // Personal Details
  name: string;
  dateOfBirth: string;
  placeOfBirth: string;
  height: string;
  caste: string;
  gotra: string;
  education: string;
  occupation: string;
  languages: string;
  hobbies: string;
  
  // Family Details
  grandfatherName: string;
  grandfatherOccupation: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  uncleName: string;
  uncleOccupation: string;
  elderBrotherName: string;
  elderBrotherOccupation: string;
  youngerBrotherName: string;
  youngerBrotherOccupation: string;
  
  // Contact Details
  contactPerson: string;
  contactNumber: string;
  email: string;
  
  // Photo
  photo?: string; // base64 or URL
};

export const defaultBiodataForm: BiodataForm = {
  name: '',
  dateOfBirth: '',
  placeOfBirth: '',
  height: '',
  caste: '',
  gotra: '',
  education: '',
  occupation: '',
  languages: '',
  hobbies: '',
  grandfatherName: '',
  grandfatherOccupation: '',
  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  motherOccupation: '',
  uncleName: '',
  uncleOccupation: '',
  elderBrotherName: '',
  elderBrotherOccupation: '',
  youngerBrotherName: '',
  youngerBrotherOccupation: '',
  contactPerson: '',
  contactNumber: '',
  email: '',
  photo: '',
};