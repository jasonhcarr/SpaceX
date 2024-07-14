import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LaunchTableComponent } from './components/launch-table/launch-table.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, LaunchTableComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'SpaceX';
}
