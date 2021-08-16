import { CursoService } from './../../services/cursos.service';
import { CursoDTO } from './../../models/curso';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {

  cursos: CursoDTO[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cursoService: CursoService) {
  }

  ionViewDidLoad() {
    this.loadData();
  }


  loadData(){

    this.cursoService.findAll()
      .subscribe((res)=>{
        this.cursos = res;
      },
      (erro)=>{
        console.log(erro);
      });

  }
}
