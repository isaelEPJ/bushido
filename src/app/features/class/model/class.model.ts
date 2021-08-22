import { Student } from '../../students/model/student.model';

export interface Class {
  id: string;
  name: string;
  sensei: string;
  imageUrl: string;
  dojo: string;
  students: Student[];
  description: string;
  location_cidade: string;
  location_rua: string;
  location_numero: string;
  location_cep: string;
  location_estado: string;
  isActivate: boolean;
  date_event: Date;
  altered_at: Date;
  created_at: Date;
}
