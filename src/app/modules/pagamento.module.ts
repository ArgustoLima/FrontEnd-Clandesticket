import { Usuario } from "./usuario.module";

export interface Pagamentos {
  id? : any,
  tipo: string,
  numero_cartao: string,
}
