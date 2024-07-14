import { Component, OnInit, Input } from '@angular/core';
import { ILaunch } from '../../../interfaces/launch';

@Component({
	selector: 'app-launch-row',
	standalone: true,
	templateUrl: './launch-row.component.html',
	styleUrls: ['./launch-row.component.scss']
})
export class LaunchRowComponent implements OnInit {

	/* One launch object passed down from launch-table */
	@Input() launch: ILaunch;

	/* An evaluated link to launch info */
	private link: string;

	/**
	 * Sets the link property to the press kit link.
	 * A fallback has set here to link to the article link.
	 * And in the event that does not exist to the wikipedia article.
	 * This ensures that almost all rows have a valid link to go to.
	 */
	ngOnInit () {
		const launch = this.launch;
		this.link = launch.links.presskit || launch.links.article || launch.links.wikipedia;
	}

	/**
	 * Opens the link in a new browser tab.
	 */
	public goToArticle = () => {
		window.open(this.link, '_blank');
	};
}
