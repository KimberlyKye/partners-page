import { Component } from '@angular/core';
import { Partner } from '../const/partner';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
  header = 'Наши партнёры';

  partners: Partner[] = [
    { id: 1, url: '../../assets/svg/1.svg' },
    { id: 2, url: '../../assets/svg/2.svg' },
    { id: 3, url: '../../assets/svg/3.svg' },
    { id: 4, url: '../../assets/svg/4.svg' },
    { id: 5, url: '../../assets/svg/5.svg' },
    { id: 6, url: '../../assets/svg/6.svg' },
    { id: 7, url: '../../assets/svg/7.svg' },
  ];

  constructor() {}
}
