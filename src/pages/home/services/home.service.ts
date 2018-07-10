import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Library } from '../../../models/library.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
	constructor(private http: Http) { }
	
	readonly libraryUrl = 'https://data.cityofchicago.org/resource/x8fc-8rcq.json';

	getLibraries(): Observable<Library[]> {
		return this.http.get(this.libraryUrl)
		.pipe(
			map(res => <Library[]>res.json())
		);
	}
}