import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraBusca } from './barra-busca/barra-busca';
import { Topo } from './topo/topo';
import { Rodape } from './rodape/rodape';
import { Menu } from './menu/menu';

@Component({
  imports: [RouterOutlet, BarraBusca, Topo, Rodape, Menu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AtividadeWeb');
}
