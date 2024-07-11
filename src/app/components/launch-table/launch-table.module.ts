import { NgModule } from '@angular/core';
import { LaunchTableComponent } from './launch-table.component';
import { LaunchRowModule } from '../launch-row/launch-row.module';
import { LaunchFooterModule } from '../launch-footer/launch-footer.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
	declarations: [
		LaunchTableComponent,
	],
	imports: [
		LaunchFooterModule,
		LaunchRowModule,
	],
	providers: [provideHttpClient()],
})
export class LaunchTableModule { }
