import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  /**
   * This is bind ngForm's InputFields in Template File
   */
  contact = {
    name: '', // Bind to InputField name = "name"
    email: '', // Bind to InputField name = "email"
    message: '', // Bind to InputField name = "message"
  };

  /**
   * a post request construct configuration (where to send the post)
   */
  post = {
    endPoint: 'https://lukas-klammer.developerakademie.net/portfolio/send_mail.php', // where to send the post request (http or https)
    body: (payload: any) => JSON.stringify(payload), // what to send, notive JSON.stringify
    options: { // how to send, notice Content-Type and responseType
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {   }




  /**
   *
   */
  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            console.log(response);
            // this.openSnackBar('Hallo', 'Wert 2');
            // Here Message was send
          },
          error: (error) => {
            console.error(error);
            // Here Message was not send
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

  }
}
