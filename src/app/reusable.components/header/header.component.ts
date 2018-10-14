import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { PaymentsService } from '../../services/payments/payments.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() theme: string;
  @Input() dashboard: string;
  @ViewChild("burger", { read: ElementRef }) burger: ElementRef;

  isActive: any = false;
  showModal: boolean = false;
  usersAvatar: string;

  constructor(
    private el: ElementRef,
    public _userService: UserService,
    private _payments: PaymentsService,
    private _login: LoginService
  ) { }

  ngOnInit() {
    console.log("HEADER INIT");

    this._userService.isLogged();
    this._userService.avatarObsv
      .subscribe(avatar => {
        console.warn('avatar', avatar);

        this.usersAvatar = avatar
      });
    this._login.loginModalSwitch
      .subscribe((resp) => {
        this.isActive = false;
        this.showModal = false;
        this.burger.nativeElement.checked = false
        // console.warn(this.isActive);
        // console.warn(this.showModal);
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
    this._login.loginModal.next(this.showModal);
    this.burger.nativeElement.checked = false
  }

}
