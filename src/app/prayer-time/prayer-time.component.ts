import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prayer-time',
  templateUrl: './prayer-time.component.html',
  styleUrls: ['./prayer-time.component.scss']
})
export class PrayerTimeComponent implements OnInit {

  @Input()
  public title: string = '';
  
  @Input()
  public prayerTime: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
