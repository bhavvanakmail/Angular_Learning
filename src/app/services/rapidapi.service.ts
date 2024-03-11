import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
  // rapidApiUrl : string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary';
  rapidApiUrl : string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=ARMN&region=US';

  raApiUrl : string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';

  // headers = new HttpHeaders({
  //   'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
  //   'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  // })

// inject the HttpClient
  constructor(private _httpClient:HttpClient) { }

  getSummary(symbol: string, region: string) : Observable<any> {
    return this._httpClient.get(this.rapidApiUrl)
  }
  getAutoComplete(q: any,region: any): Observable<any> {
    const params = new HttpParams()
    .set("q",q)
    .set("region",region)
    return this._httpClient.get(this.raApiUrl, { params: params})
  }
  getDatafromRapid(){
    
  }
}
