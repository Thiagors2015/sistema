import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public actionsheet:ActionSheetController) {

  }
  cadastro(){
    let actionSheet = this.actionsheet.create({
      title: 'Cadastro',
      buttons: [
        {
          text: 'Clientes',
          role: '1',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Fornecedores',
          role: '1',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Representantes',
          role: '1',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Produtos',
          role: '1',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Tabelas Administrativas',
          role: '1',
          handler: () => {
            console.log('Destructive clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

}
