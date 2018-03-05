import { Injectable } from '@angular/core';

export interface User {
	first_name: string,
	last_name: string,
	age: number
}

@Injectable()
export class FormService {

	public user: User;
	
	constructor() { }

	saveUser(user: User): void {
		this.user = {
			first_name: user.first_name,
			last_name: user.last_name,
			age: user.age
		}

		localStorage.user = JSON.stringify(this.user);
	}

	getUser(): User {
		if(this.user === undefined) {
			this.user = localStorage.user !== undefined ? JSON.parse(localStorage.user) :
						{
							first_name: null,
							last_name: null,
							age: null
						};
		}
		return this.user;
	}

	clearUser(): void {
		localStorage.removeItem('user');
		this.user = {
					first_name: null,
					last_name: null,
					age: null
				}
	}

}
