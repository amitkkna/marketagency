import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: any[] = [];
  selectedService: any;
  selectedServiceIndex: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.services = data.services;
      if (this.services.length > 0) {
        this.selectedService = this.services[0];
      }
    });
  }

  selectService(index: number): void {
    this.selectedServiceIndex = index;
    this.selectedService = this.services[index];
  }
}
