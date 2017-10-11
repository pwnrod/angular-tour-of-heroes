import {Component} from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
    {id: 11, name: 'Mr. Rice'},
    {id: 12, name: 'Oscillator Terminator'},
    {id: 13, name: 'Bonbeasto'},
    {id: 14, name: 'CeleryGuy'},
    {id: 15, name: 'MagnetHands'},
    {id: 16, name: 'RubberFace'},
    {id: 17, name: 'Dyn-Dyn-DWAN'},
    {id: 18, name: 'Dr. Doctor Dock Turr'},
    {id: 19, name: 'MagdelinaMagnifique'},
    {id: 20, name: 'WindyGuy'}
];

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
}
