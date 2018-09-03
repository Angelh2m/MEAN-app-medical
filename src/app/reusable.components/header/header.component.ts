import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() theme: string;
  @ViewChild("burger", { read: ElementRef }) burger: ElementRef;
  isActive: boolean = false;
  showModal: boolean = false;

  constructor(
    private el: ElementRef,
    public _userService: UserService
  ) { }

  ngOnInit() {
    // console.log(this.theme);
    console.log(this._userService.getUserData().avatar);

  }
  toggle() {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }

  loginModal() {
    console.log('Modal Open');
    this.showModal = !this.showModal;
    console.log(this.burger.nativeElement);
    console.log(this.burger.nativeElement.checked = false);
  }
  closeModal() {
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }

}
