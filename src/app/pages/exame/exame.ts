import DateTimeFormat = Intl.DateTimeFormat;
export class Exame {
  id: String;
  UID: String;
  areahospital: String;
  imagens: String;
  paciente: String;
  medico: String;
  funcionario: String;
  modalidade: String;
  procedimento: String;
  laudo: String;
  notamedico: String;
  audio: String;
  status: String;
  prioridade: String;
  maquina: String;
  dataCadastro: DateTimeFormat;
  dataTermino: DateTimeFormat;
}
