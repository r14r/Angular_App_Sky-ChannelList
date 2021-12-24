import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { AuthenticationService, CredentialsService } from '@app/auth';
export interface MenuItem {
  name: string;
  link: string;
}
@Component({
  selector: 'app-shell',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ShellComponent implements OnInit {
  menu = [
    { name: 'About', link: '/about' },
    { name: 'Programme', link: '/channels' },
    { name: 'Demo: Tabellen', link: '/demo/table' },
  ];

  constructor(
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private breakpoint: BreakpointObserver
  ) {}

  ngOnInit() {}

  logout() {
    this.authenticationService
      .logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get isMobile(): boolean {
    return (
      this.breakpoint.isMatched(Breakpoints.Small) ||
      this.breakpoint.isMatched(Breakpoints.XSmall)
    );
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
