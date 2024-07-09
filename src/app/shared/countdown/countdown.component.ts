import {Component, Input, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {

    @Input() date: Date = this.addDays(new Date(), 7);
    @Input() format: string = 'dd:hh:mm:ss';
    private subscription: Subscription = new Subscription();

    public countdown: {
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    } = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    public formatType: {
        day: boolean,
        hour: boolean,
        minute: boolean,
        second: boolean
    } = {
        day: false,
        hour: false,
        minute: false,
        second: false
    }

    ngOnInit(): void {

        //find string "d" in format if not found make it false
        this.formatType.day = this.format.includes('d');
        this.formatType.hour = this.format.includes('h');
        this.formatType.minute = this.format.includes('m');
        this.formatType.second = this.format.includes('s');

        this.subscription = interval(1000).subscribe(() => this.updateCountdown());
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    addDays(date: Date, days: number): Date {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    private updateCountdown(): void {
        const now = new Date().getTime();
        const distance = this.date.getTime() - now;

        if (distance > 0) {
            this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        } else {
            this.countdown = {days: 0, hours: 0, minutes: 0, seconds: 0};
        }
    }
}
