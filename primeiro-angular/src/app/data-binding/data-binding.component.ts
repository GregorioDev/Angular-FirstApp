import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www;google.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/animals/';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean;
  nome: string = 'abc';

  nomeCurso: string = 'Angular';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
      this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
