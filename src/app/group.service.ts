import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {

  constructor() { }
  customGroups = [{
    name : 'SAS NO DESTINATIONS',
    codes : ['ARN','CPH','LLA']
  },
  {
      name : 'SAS NO DESTINATIONS',
      codes : ['ARN','CPH','LLA']
  },
  {
      name : 'SAS NO DESTINATIONS',
      codes : ['ARN','CPH','LLA']
  },
  {
      name : 'SAS NO DESTINATIONS',
      codes : ['ARN','CPH','LLA']
  },
  {
      name : 'SAS NO DESTINATIONS',
      codes : ['ARN','CPH','LLA']
  }]
  getCustomGroups(){
     return this.customGroups;
  }
}
