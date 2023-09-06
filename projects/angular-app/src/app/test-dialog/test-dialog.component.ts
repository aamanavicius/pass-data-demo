import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.formGroup = this.formBuilder.group({
      id: [1],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [''],
    });
  }

  onSave(): void {
    let model = this.formGroup.getRawValue();
    window.opener.postMessage(model, '*');
  }
}
