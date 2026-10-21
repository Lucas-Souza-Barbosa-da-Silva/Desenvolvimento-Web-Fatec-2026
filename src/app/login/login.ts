import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
    mensagem: String = "";
    obj: Cliente = new Cliente();
  
  
    gravar(){
      this.mensagem = "Seu cadastro foi realizado com sucesso!";
      let json = JSON.stringify(this.obj);
      localStorage.setItem("cadastro", json);
    }
}
