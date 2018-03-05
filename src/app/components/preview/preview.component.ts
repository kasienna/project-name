import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

import { User } from '../../services/form.service';

@Component({
	selector: 'app-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.scss']
})

export class PreviewComponent implements OnInit {

	public user: User;

	constructor(private formService: FormService) { }

	ngOnInit() {
		this.user = this.formService.getUser();
	}

	userEmpty() {
		return this.user === null ||
		this.user === undefined ||
		this.user.first_name === null;
 }

}
