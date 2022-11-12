import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DeviceTypeService {
  isMobile$ = this.breakpointObserver.observe('(max-width: 959px)').pipe(
    map((x) => x.matches),
    distinctUntilChanged(),
    shareReplay()
  );

  constructor(private readonly breakpointObserver: BreakpointObserver) {}
}
