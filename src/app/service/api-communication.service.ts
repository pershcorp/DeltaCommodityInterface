import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

import {UserAuth} from '../models/user-auth.model'

@Injectable()
export class AppService {
  constructor(private http: Http) {}

}