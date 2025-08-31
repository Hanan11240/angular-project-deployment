import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    configData: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const clientId = 'YOUR_CLIENT_ID'; // replace with actual client id
    const url = `https://testassessment.educian.com/auth/get-configuration?client_id=${clientId}`;

    this.http.get(url).subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.configData = res;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
