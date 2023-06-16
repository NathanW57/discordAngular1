import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Channel} from "../../../../../model/Channel";
import {ChannelService} from "../../../../../service/channel.service";

@Component({
  selector: 'app-dialog-adding-channel',
  templateUrl: './dialog-adding-channel.component.html',
  styleUrls: ['./dialog-adding-channel.component.scss']
})
export class DialogAddingChannelComponent {

  formulaire: FormGroup;

  errorComplete: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogAddingChannelComponent>,
    private channelService : ChannelService,
  ) {
    this.formulaire = this.formBuilder.group({
      name: ["", [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z0-9\s]*$/)]
      ],
    });


}


  validate(): void {
    if (this.formulaire.valid) {
      this.channelService.addChannel(this.formulaire.value).subscribe( //TODO
        (channel: Channel) => {
          this.dialogRef.close(channel);
        },
        (error) => {
          this.errorComplete = true;
        }
      );
    }
  }


  cancel(): void {
    this.dialogRef.close();
  }
  }
