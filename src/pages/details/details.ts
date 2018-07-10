import { Component, OnInit ,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Library } from '../../models/library.model';
import { Platform } from 'ionic-angular';

@Component({
	selector: 'page-details',
	templateUrl: 'details.html'
})
export class DetailsPage implements OnInit {
  constructor(public navCtrl: NavController, 
  	public platform: Platform,
	private navParams: NavParams) {
  }

  @Input() public library: Library;
  @Input() public mapThumbnailUri: String;
  @Input() public imageWidth: Number;

  ngOnInit() {
  	this.library = this.navParams.get('library');
  	this.imageWidth = this.platform.width();
  	this.mapThumbnailUri = this.getMapsThumbnail();
  }


  getMapsThumbnail() {
  	let platformWidth = this.platform.width();
  	let platformHeight = this.platform.height()/2; // fixing this for simplicity
  	let latitude = this.library.location.latitude;
  	let longitude = this.library.location.longitude;
  	let apiKey = 'AIzaSyAMv4m5Y7mRBrFh1nZOtCyvA-iHTYUDl4E'
  	let googleMapUri = 'http://maps.googleapis.com/maps/api/staticmap';
  	let mapSize = `${platformWidth}x${platformHeight}`;
  	let mapThumbnailUri = `${googleMapUri}?&size=${mapSize}&markers=label:${this.library.name_}%7C${latitude},${longitude}&key=${apiKey}`;

  	return mapThumbnailUri;
  }
}