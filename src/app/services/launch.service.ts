import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILaunch } from '../../interfaces/launch';

@Injectable({
	providedIn: 'root',
})
export class LaunchService {

	constructor(private http: HttpClient) { }

	launchScheduleUrl = 'https://api.spacexdata.com/v5/launches';

	getLaunches = () => this.http.get<ILaunch[]>(this.launchScheduleUrl);
}
