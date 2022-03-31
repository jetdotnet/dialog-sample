import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'ds-root',
  styles: [
    '.margin { margin: 30px; }',
  ],
  template: `
    <input class="btn btn-primary margin" (click)="onDialogOpen()" type="button" value="Open Dialog" />
    <ng-container *ngIf="vm$ | async as vm">
      <kendo-dialog (close)="onDialogClose()" *ngIf=vm.dialogVisible title="I'm a dialog" [width]="600">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <kendo-dialog-actions layout="normal">
          <input class="btn btn-primary" (click)="onDialogClose()" type="button" value="I'm a button" />
          <input class="btn btn-default" (click)="onDialogClose()" type="button" value="I'm also a button" />
        </kendo-dialog-actions>
      </kendo-dialog>
    </ng-container>
  `,
})
export class AppComponent {

  dialogVisible$ = new BehaviorSubject(true);

  vm$ = this.dialogVisible$.pipe(
    map((dialogVisible) => ({
      dialogVisible,
    })),
  );

  onDialogClose = () => this.dialogVisible$.next(false);

  onDialogOpen = () => this.dialogVisible$.next(true);

}
