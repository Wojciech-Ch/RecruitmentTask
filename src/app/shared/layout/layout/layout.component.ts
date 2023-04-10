import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  readonly isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  isOpen: boolean = false;
  language: boolean = false;
  constructor(
    private authService: AuthService,
    public router: Router,
    private translate: TranslateService
  ) {}

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/auth/login']);
      this.isOpen = false;
    });
  }

  toggleLanguage(): void {
    this.translate.use(this.translate.currentLang === 'en' ? 'pl' : 'en');
    this.language = !this.language;
  }
}
