import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 0, name: 'Zero'},
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
        return {heroes};
    }
}
