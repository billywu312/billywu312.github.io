import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './services/home.service';
import { Library } from '../../models/library.model';
import { Observable } from 'rxjs/Observable';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private homeService: HomeService) {
  }

  @Input() public libraries: Observable<Library[]>;

  ngOnInit() {
  	this.libraries = this.homeService.getLibraries();
  }

  librarySelected(library: Library) {
    this.navCtrl.push(DetailsPage, {
      library: library
    })
  }
}
