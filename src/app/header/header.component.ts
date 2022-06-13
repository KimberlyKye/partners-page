import { Component, OnInit } from '@angular/core';
import { User } from '../const/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User = {
    id: 0,
    name: 'Константин',
    picUrl: '../../assets/svg/userpic.svg',
  };
  constructor() {}

  ngOnInit(): void {}
}
