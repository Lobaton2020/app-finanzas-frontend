export interface PayloadJwt {
  sub: number;
  rol: Rol;
  name: string;
  iat: number;
  exp: number;
}

export interface Rol {
  id: number;
  name: string;
}
