import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,    
    RouterModule,    
    RouterLink,      
    RouterOutlet
  ],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
