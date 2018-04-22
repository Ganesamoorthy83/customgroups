import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import { GroupService } from './group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GroupService]
})
export class AppComponent implements OnInit {
  groupForm: FormGroup;
  customGroups : any;

  constructor(private formBuilder : FormBuilder,

  private groupService : GroupService){}
  ngOnInit() {
    //Initially get all custom groups lists from group service.
    this.customGroups = this.groupService.getCustomGroups();

    this.groupForm = this.formBuilder.group({
      groupName: '',
      codes: [],
    });
  }

  createCustomGroup(){
     console.log("============Created Data==============", this.groupForm);

  }

  editGroup(){

  }

  deleteGroup(){

  }



}
