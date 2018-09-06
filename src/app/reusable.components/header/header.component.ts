import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { PaymentsService } from '../../services/payments/payments.service';

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
  usersAvatar: string;

  constructor(
    private el: ElementRef,
    public _userService: UserService,
    private _payments: PaymentsService
  ) { }

  ngOnInit() {
    this._userService.avatarObsv
      .subscribe(avatar => {
        this.usersAvatar = avatar
      })
  }

  toggle() {
    this.isActive = !this.isActive;
  }

  loginModal() {
    this.showModal = !this.showModal;
    this.burger.nativeElement.checked = false
    this.isActive = !this.isActive;
  }
  closeModal() {
    this.showModal = !this.showModal;
  }

}
