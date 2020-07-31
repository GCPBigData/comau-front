import DateTimeFormat = Intl.DateTimeFormat;

export class Pessoa {

  id: string;
  nome: string;
  cpf: string;
  sus: string; // 704.2032.3159.7587
  matricula: string;
  estado: string;
  cidade: string;
  endereco: string;
  bairro: string;
  cep: string;
  telefone: string;
  email: string;
  status: string;
  profissao: string;
  //especialidade: string;
  sexo: string;
  etinia: string;
  raca: string;
  sangue: string;
  //imagem: string;
  //Obs: string;
  dataCadastro: DateTimeFormat;

}


export class RequestCreatePessoa{

  nome: string;
  cpf: string;
  sus: string; // 704.2032.3159.7587
  matricula: string;
  estado: string;
  cidade: string;
  endereco: string;
  bairro: string;
  cep: string;
  telefone: string;
  email: string;
  status: string;
  profissao: string;
  sexo: string;
  etinia: string;
  raca: string;
  sangue: string;
  dataCadastro: DateTimeFormat;


}
