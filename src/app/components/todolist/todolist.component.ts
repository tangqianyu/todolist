import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-todolist',
	templateUrl: './todolist.component.html',
	styleUrls: ['./todolist.component.less']
})
export class TodolistComponent implements OnInit {

	public toDoList: any[] = []
	public keyword: string

	constructor() {
	}

	ngOnInit() { }

	doAdd(event: any): void {
		if (event.keyCode == '13') {
			this.toDoList.push({
				status: 0,
				keyword: this.keyword
			})
			this.keyword = ''


		}
	}
	doDelete(key: number): void {
		this.toDoList.splice(key, 1)
	}
	doingNum() {
		return this.toDoList.filter(item => item.status == 0).length
	}
	doneNum() {
		return this.toDoList.filter(item => item.status == 1).length
	}
}
