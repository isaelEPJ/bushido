export interface UserModel {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  password: string;
  codename: string;
  cpf: string;
  graduation: string;
  description: string;
  isAdmin: boolean;
  isActivate: boolean;
  alteredAt: Date;
  createdAt: Date;
}
