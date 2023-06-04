import { Component,OnInit } from '@angular/core';
import { AdventureWorkService } from '../shared/adventure-work.service';

@Component({
  selector: 'app-adventure-details',
  templateUrl: './adventure-details.component.html',
  styleUrls: ['./adventure-details.component.css']
})
export class AdventureDetailsComponent {
  constructor(public AdWorkService: AdventureWorkService){}
  ngOnInit() {
    debugger;
    this.AdWorkService.GetDimAccount().subscribe(data => {
      debugger;
     this.AdWorkService.GetDimAccountList = data;
     console.log(this.AdWorkService.GetDimAccountList);
    });
  }
}
