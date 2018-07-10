import { Website } from './website.model';
import { Location } from './location.model';

export interface Library {
	teacher_in_the_library: string;
	zip: string;
	hours_of_operation: string;
	website: Website;
	address: string;
	city: string;
	phone: string;
	location: Location;
	state: string;
	cybernavigator: string;
	name_: string;
}