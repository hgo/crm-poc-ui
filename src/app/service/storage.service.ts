import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { State } from 'app/model/state';
// key that is used to access the data in local storage
const STORAGE_KEY = 'state';
@Injectable()
export class LocalStorageService {
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
    public setStateData(state: State): void {
        this.storage.set(STORAGE_KEY, state);
        console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    }
    public getStateData() {
        const data = this.storage.get(STORAGE_KEY) || new State();
        return data;
    }
}