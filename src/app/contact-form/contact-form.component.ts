import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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

  constructor(private http: HttpClient) {   }




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
            alert('Thank you, your message was send successfully.');
            // Here Message was send
          },
          error: (error) => {
            console.error(error);
            alert('Error! Your message was not send. Please try it later.');
            // Here Message was not send
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

}
