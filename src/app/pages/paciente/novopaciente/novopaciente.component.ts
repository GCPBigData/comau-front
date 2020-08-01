import { Component, OnInit } from '@angular/core';
import { RequestCreatePaciente } from '../../pessoa/pessoa';
import { PessoaService } from '../../pessoa/pessoa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './novopaciente.component.html',
  styleUrls: ['./novopaciente.component.scss']
})
export class NovopacienteComponent implements OnInit {

  showSpinner = false;
  pessoaForm: FormGroup;

  request: RequestCreatePaciente = {
  nome: '',
  cpf: '',
  sus: '',
  estado: '',
  cidade: '',
  endereco: '',
  bairro: '',
  cep: '',
  telefone: '',
  email: '',
  status: '',
  profissao: '',
  dataNascimento: '',
  sexo: '',
  etinia: '',
  raca: '',
  sangue: '',
  doador: '',
  imagem: '',
  Obs: ''
  }

  constructor(
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder,
) {
}

  ngOnInit(): void {
    this.gerarForm();
  }

    // TODO: usado para gerar reconhecimento do combo
    gerarForm() {
      this.pessoaForm = this.formBuilder.group({
          cpf: [null, [ Validators.required ]],
          areahospital: [null],
          imagens: [null],
          paciente: [null],
          medico: [null],
          funcionario: [null],
          modalidade: [null],
          procedimento: [null],
          laudo: [null],
          notamedico: [null],
          audio: [null],
          status: [null],
          prioridade: [null],
          maquina: [null],
          dataTermino: [null],
          dataCadastro: [null]
        });
  }

  save() {
    this.pessoaService.createPaciente(this.request)
        .subscribe(
            data => {
                //this.showNotificationSucesso();
                this.limpa();
            },
            err => {
                //this.showNotificationErro();
            })
}

limpa() {
    this.pessoaForm.reset();
}
}
