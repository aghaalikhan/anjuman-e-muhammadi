import { DeviceTypeService } from './../core/services/device-type-service/device-type.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.scss']
})
export class NavigationComponentComponent implements OnInit {

  public isMobile$: Observable<boolean>;
  public openSideNav$ = new BehaviorSubject<boolean>(true);

  @ViewChild('drawer') public drawer!: ElementRef<HTMLInputElement>;

  constructor(private deviceTypeService: DeviceTypeService) {
    this.isMobile$ = deviceTypeService.isMobile$;    
   }

  ngOnInit(): void {
  }

  public toggleMenu() {
    this.openSideNav$.next(!this.openSideNav$.value);
  }
}
