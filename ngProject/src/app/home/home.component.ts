import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public mockData: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchMockData()
  }

  fetchMockData() {
    var url = 'api/';
    this.dataService.getData(url)
      .subscribe((response: any) => {
        this.mockData = response;
      });

    console.log(this.mockData);
  }
}
