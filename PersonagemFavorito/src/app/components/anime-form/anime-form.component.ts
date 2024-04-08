import { Component, Input, OnInit, Output, EventEmitter, input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Moment } from '../../Moments';


@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrl: './anime-form.component.scss'
})
export class AnimeFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string
  @Input() momentData:Moment |null =null;
  momentForm!: FormGroup

  constructor() { }
  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value)

    this.onSubmit.emit(this.momentForm.value);

  }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')

    });

  }
  get title() {
    return this.momentForm.get('title')!
  }
  get description() {
    return this.momentForm.get('description')!

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file })
  }
}
