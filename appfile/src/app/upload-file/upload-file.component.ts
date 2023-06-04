import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  public pageTitle = "";
  fileform = new FormGroup({
    altText: new FormControl(''),
    description: new FormControl(''),
  });
  fileToUpload: any
  handleFileInput(e : any)
  {
    this.fileToUpload = e?.target?.files[0];
  }

  // saveFile() {
  //   debugger;
  //   const FormData : FormData  = new FormData();
  //   FormData.append("myFile",this.fileToUpload);
  // }


}
