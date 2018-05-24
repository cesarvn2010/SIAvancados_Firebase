import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

/*
  Generated class for the AutenticarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticarProvider {

  constructor(public afAuth : AngularFireAuth) {
    
  }

  registrarUsuario(email: string, senha: string) : any{
      return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, senha)
      .then((res) => {
          Promise.resolve(res)
      })
      .catch(err => {
          Promise.reject(err)
      });
  }

  autenticarUsuario(email: string, senha: string) : any{
      return this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then(user => {
          Promise.resolve(user)
      })
      .catch(err => {
          Promise.reject(err);
      });
  }

}
