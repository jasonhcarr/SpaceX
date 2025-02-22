import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-launch-footer',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './launch-footer.component.html',
	styleUrls: ['./launch-footer.component.scss']
})
export class LaunchFooterComponent implements OnInit {

	/* The total number of pages as sent from launch-table */
	@Input() numOfPages = 0;

	@Output() pageEvent = new EventEmitter<number>();

	public currentPage = 1;
	public pageRange: number[] = [];

	/**
	 * Sets the initial pageRange.
	 */
	ngOnInit () {
		this.adjustPageRange();
	}

	/**
	 * Decreases the currentPage value by one and updates the pageRange.
	 */
	public prevPage = () => {
		if (this.currentPage !== 1) {
			this.setPage(--this.currentPage);
		}
	};

	/**
	 * Advances the currentPage value by one and updates the pageRange.
	 */
	public nextPage = () => {
		if (this.currentPage !== this.numOfPages) {
			this.setPage(++this.currentPage);
		}
	};

	/**
	 * Sets the currentPage property to the value passed
	 * @param {number} pageNumber
	 */
	public setPage = (pageNumber: number) => {
		this.currentPage = pageNumber;
		this.adjustPageRange();
		this.pageEvent.emit(this.currentPage - 1);
	}

	/**
	 * Sets the range of page buttons to display.
	 */
	private adjustPageRange = () => {
		if ((this.numOfPages - this.currentPage) >= 4) {
			this.pageRange = Array(5)
				.fill(1)
				.map((_num, i) => i + this.currentPage);
		} else {
			this.pageRange = Array(5)
				.fill(1)
				.map((_num, i) => this.numOfPages - (4 - i));
		}
	};
}
