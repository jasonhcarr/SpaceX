import { Component, OnInit, Input } from '@angular/core';
import { ILaunch } from '../../../interfaces/launch';

@Component({
    selector: 'app-launch-row',
    standalone: true,
    templateUrl: './launch-row.component.html',
    styleUrls: ['./launch-row.component.scss']
})
export class LaunchRowComponent implements OnInit {

    constructor() { }

    /* One launch object passed down from launch-table */
    @Input() launch: ILaunch;

    /* An evaluated link to launch info */
    link: string;

    /**
     * Opens the link in a new browser tab.
     */
    goToArticle = () => {
        window.open(this.link, '_blank');
    };

    /**
     * Sets the link property to the press kit link.
     * The requirements did not expressly state what to do in the event there was no press kit link.
     * A default has set here to link to the article link.
     * And in the event that does not exist to the wikipedia article.
     * This ensures that almost all rows have a valid link to go to.
     */
    ngOnInit () {
        const launch = this.launch;
        this.link = launch.links.presskit || launch.links.article_link || launch.links.wikipedia;
    }
}
