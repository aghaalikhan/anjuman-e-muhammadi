import { Component, Input, OnInit } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';
import { AvailableService } from '../models/available-service';

@Component({
  selector: 'services-available',
  templateUrl: './services-available.component.html',
  styleUrls: ['./services-available.component.scss']
})
export class ServicesAvailableComponent implements OnInit {


  @Input()
  public availableServices: AvailableService[] = [] ;
  public activeSlideId: string = '';
  public selectedService: AvailableService;

  constructor() { 
    this.selectedService = this.availableServices[0];
  }

  ngOnInit(): void {
    this.selectedService = this.availableServices[0];
    this.activeSlideId = this.availableServices[0].title;
  }

  onSlideClicked(ev: any) {
    this.selectedService = this.availableServices.find(c => c.title === ev.activeId) as AvailableService;
  }
}
