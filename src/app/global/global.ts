import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { LoadingComponent } from 'app/components/loading/loading.component';
@Injectable({
	providedIn: 'root'
})
export class GlobalService {
	loadingRef: MatDialogRef<LoadingComponent, any>;
	constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {
	}
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			verticalPosition: 'top'
		});
	}
	showLoading(): void {
		this.loadingRef = this.dialog.open(LoadingComponent, {
			hasBackdrop: true,
			panelClass: 'loading-class'
		});
		/*  dialogRef.afterClosed().subscribe(result => {
			 console.log('The dialog was closed');
			 this.animal = result;
		 }); */
	}
	hideLoading() {
		this.loadingRef.close();
	}
}
