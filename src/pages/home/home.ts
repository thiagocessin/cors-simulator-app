import { CursoService } from './../../services/cursos.service';
import { CursoDTO } from './../../models/curso';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


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
