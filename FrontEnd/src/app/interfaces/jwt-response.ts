export interface JwtResponseI {
  dataUser: {
    id: number;
    name: string;
    email: string;
    type: string;
    accesToken: string;
    expiresIn: string;
  };
}
