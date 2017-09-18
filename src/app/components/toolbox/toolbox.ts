
import { Component, Input } from '@angular/core';

import { IToolbox } from './toolbox.i';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.html',
  styleUrls: ['./toolbox.css']
})
export class Toolbox {
 query: string;

 onFindButtonClick() {
   console.log(this.query);
 }

}
