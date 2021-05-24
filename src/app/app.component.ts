import { Component, OnInit } from '@angular/core';
import { AuthService }   from './services/auth.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {
  title = 'teste-pratico-rabbot';

  public fluxos : any = null;
  public selectedValue : any = null;
  public Id : number;
  public selectedItens : any = [];

  constructor(
    private AuthService: AuthService
    ) { }

  ngOnInit() {
    
  }

  public OnSubmit(idEmpresa){
    this.AuthService.getFluxos(idEmpresa).then((data) => {
      data.json().then((json) => {
        this.fluxos = json
      });
      if (idEmpresa!=1){
        window.alert('ID Inexistente!');
      }
    })
  }

  onChange(newValue) {
    this.selectedValue = newValue;
  }
  

  pushSelecionado(newItem){
    this.selectedItens.push(newItem);
  }
  
}
