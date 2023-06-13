import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(LanguageSwitcherComponent) languageSwitcher!: LanguageSwitcherComponent;
  data: any;
  title = 'localization-app';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData(); // Call the API on component initialization
  }

  fetchData(): void {
    this.http.get('https://5d0038ff-c851-4d4f-808d-744bc2837331.mock.pstmn.io/giveDesiredLanguage').subscribe(
      // this.http.get('https://b7504d0d-0a48-41ad-8649-79273d29dbf9.mock.pstmn.io/getDesiredLanguageF').subscribe(
      (response) => {
        this.data = response; // Store the API response in the 'data' property
        this.switchLanguage(this.data.language)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  switchLanguage(language: string) {
    console.log("nikhar-->"+language);
    this.languageSwitcher.switchLanguage(language);
  }
}
