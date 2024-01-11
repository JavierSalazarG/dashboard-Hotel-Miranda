export interface CommentsInterface {
  _id: number;
  nombre: string;
  fecha: string;
  foto_perfil: string;
  archive: boolean;
  comentario: string | null;
}
