import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.housingLocationList;
  }


}
