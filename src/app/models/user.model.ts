export interface User{
  uid? : string;
  email : string;
  password : string;
  displayName? : string;
  photoURL? : string;
  phoneNumber? : number;
  emailVerified? : boolean;
  coverPhotoURL? : string;
  recentlysearch? : []
  favorites? : []
}
