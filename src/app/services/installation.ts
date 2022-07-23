import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { WindowRef } from './window-ref';

@Injectable({
  providedIn: 'root'
})
export class Installation {

  constructor(public http: HttpClient, private windowRef: WindowRef) {
  }

  getId(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.windowRef.nativeWindow.ParsePushPlugin
      .getInstallationObjectId((id: string) => resolve(id), (err: any) => reject(err));
    });
  }

  save(id: string, data: any = {}): Promise<any> {

    const appId = environment.appId;
    const serverUrl = environment.serverUrl;
    const restApiKey=environment.restApiKey;

    const headers = new HttpHeaders();
    headers.set('X-Parse-Application-Id', appId);
    headers.set('X-Parse-REST-API-Key',restApiKey);

    const bodyString = JSON.stringify(data);
    const url = `${serverUrl}/installations/${id}`;

    return this.http.put(url, bodyString, { headers }).toPromise();
  }

}
