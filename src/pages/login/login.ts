import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AutenticarProvider } from '../../providers/autenticar/autenticar';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = {email: "", senha: ""};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public auth: AutenticarProvider, 
              public loading: LoadingController,
              public alertCtrl: AlertController) {
  }

  autenticar(){
    let loader = this.loading.create({
      content: "Por favor, Aguarde ..."
    });

    loader.present();

    this.auth.autenticarUsuario(this.usuario.email, this.usuario.senha)
    .then(user => {
        loader.dismiss();
        this.navCtrl.setRoot(HomePage);
    })
    .catch(err => {
      loader.dismiss();
      console.log(err);
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['OK']
      });
      alert.present;
    });
  }

  criarUsuario(){
    let loader = this.loading.create({
      content: "Por favor, Aguarde ..."
    });

    loader.present();

    this.auth.registrarUsuario(this.usuario.email, this.usuario.senha)
    .then((user) => {
        loader.dismiss();
        this.navCtrl.setRoot(HomePage);
    })
    .catch(err => {
      loader.dismiss();
      console.log(err);
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['OK']
      });
      alert.present;
    });
  }

}
