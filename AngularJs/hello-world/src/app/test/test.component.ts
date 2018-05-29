import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
				<h1>Welcome {{name}}</h1>
				
				<h2>Angular 6 Tutorial - 11 - Template Reference Variables</h2>
				<p>
				test test 	
				</p>
				
				
				<div>greetUser: {{greetUser()}}</div>
				<div>lenght of name : {{name.length}}</div>
				<div>upper: {{name.toUpperCase()}}</div>
				<h2>{{2+2}}</h2>
				<div>{{siteUrl}}</div>
				<input type="text" value="Raim"/>
				<input type="text" [id]="myId" value="Raim"/>
				<input [disabled]="true" type="text" id="{{myId}}" value="Raim"/>
				<input [disabled]="isDisabled" type="text" id="{{myId}}" value="Raim"/>
				<p><input bind-disabled="isDisabled" type="text" id="{{myId}}" value="Raim"/></p>
				
				<p>
					<button (click)="onClick($event)">Greet</button>
					{{greeting}}
					<button (click)="greeting2='Welcome Rasim'">Greet2</button>
					{{greeting2}}
				</p>
				
				<h2>Angular 6 Tutorial - 10 - Template Reference Variables</h2>
				<p>
					<input #myInput type="text">				
					<button (click)="logMessage(myInput.value)">Tutorial 10 - Log</button>
				</p>
			`,
  styles: [`
				h2 {
						color:red;
					}
				`]
})
export class TestComponent implements OnInit {
  public name = "Rasim";
  public myId = "testId";
  public greeting = "";
  public greeting2 = "";
  public isDisabled=true;
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }
  
  greetUser(){
  	return "Hello " + this.name;
  }

	onClick(event){
		console.log(event);
		this.greeting = event.type;
	}
	
	logMessage(value){
		console.log(value);
	}
}
