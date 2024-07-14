import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../../services/launch.service';
import { ILaunch } from '../../../interfaces/launch';
import { LaunchFooterComponent } from '../launch-footer/launch-footer.component';
import { LaunchRowComponent } from '../launch-row/launch-row.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-launch-table',
	standalone: true,
	imports: [LaunchFooterComponent, LaunchRowComponent, CommonModule],
	templateUrl: './launch-table.component.html',
	styleUrls: ['./launch-table.component.scss']
})
export class LaunchTableComponent implements OnInit {

	/* Boolean flag for sorting purposes */
	public ascending = true;

	/* The set of launch rows currently being displayed */
	public currentIndex = 0;

	/* Sorted and/or filtered list of launches */
	public displayLaunches: ILaunch[][] = [];

	/* 
	 * Static list of data returned by the launch service.
	 * By default, this list is ordered from oldest to most recent launch.
	 */
	private allLaunches: ILaunch[] = [];

	/* Limits the number of launches displayed on a single page. */
	private readonly rowsPerPage = 12;

	constructor(private launchService: LaunchService) { }

	/**
	 * Subscribes to the launch service and receives and array of launch data. 
	 */
	ngOnInit () {
		this.launchService.getLaunches()
			.subscribe((data: ILaunch[]) => {
				this.allLaunches = data;
				this.paginate();
			});
	}

	/**
	 * Receives an event from the launch-footer component to change the 'page'/index being displayed.
	 * @param {number} index the index to be displayed -- this is one less than the page number
	 */
	public receiveIndex = (index: number) => {
		this.currentIndex = index;
	}

	/**
	 * Sorts the launch array based on the passed property value.
	 * @param {keyof ILaunch} field the key on which to sort
	 */
	public sortTable = (field: keyof ILaunch) => {
		this.ascending = !this.ascending;
		this.allLaunches.sort(
			(a, b) => {
				const afield: number = a[field] as number;
				const bfield: number = b[field] as number;
				if (this.ascending) return afield - bfield;
				else return bfield - afield;
			});
		this.paginate();
	};

	/**
	 * Converts the flat allLaunches array into an array of arrays.
	 * The length of the internal arrays is defined by the rowsPerPage property.
	 */
	private paginate = () => {
		const { displayLaunches, allLaunches, rowsPerPage } = this;
		for (let i = 0; i < allLaunches.length; i++) {
			if (i % rowsPerPage === 0) {
				displayLaunches[Math.floor(i / rowsPerPage)] = [allLaunches[i]];
			} else {
				displayLaunches[Math.floor(i / rowsPerPage)].push(allLaunches[i]);
			}
		}
	};
}
