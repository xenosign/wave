import {
    Wave
} from './wave.js';

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(0, 199, 235, 0.4)', 'rgba(0, 146, 199, 0.4', 'rgba(0, 87, 158, 0.4)'];

        this.waves = [];
    }
}