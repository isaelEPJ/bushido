import { Student } from '../../students/model/student.model';

export interface Class {
  id:string;
  name: string;
  sensei_id: string;
  imageUrl: string;
  dojo: string;
  student_id: string;
  description: string;
  location_cidade: string;
  location_rua: string;
  location_numero: string;
  location_cep: string;
  location_estado: string;
  isActivate: boolean;
  date_event: Date;
}
