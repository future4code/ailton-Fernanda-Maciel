export class Recipe {
  constructor(
    private id: string,
    private titulo: string,
    private descricao: string,
    private data_criacao: Date,
    private usuario_id: string
  ) {}

  getId() {
    return this.id;
  }
  getTitulo() {
    return this.titulo;
  }
  getDescricao() {
    return this.descricao;
  }
  getData_criacao() {
    return this.data_criacao;
  }
  getUsuarioId() {
    return this.usuario_id;
  }
  setData(data: any) {
    this.data_criacao = data;
  }
}
