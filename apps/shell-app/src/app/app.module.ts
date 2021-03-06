import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/core/app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UiModule ,BetaComponent } from '@sarafan/ui';
import { RootStoreModule } from './root-store.module';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { CallbackComponent } from './auth/components/callback/callback.component';
import { AuthGuard } from './auth/guard/auth/auth.guard';
import { InterceptorService } from './auth/services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components';
import { MaterialModule } from './material.module';
import { AngularFireModule } from '@angular/fire';
 // import localeRu from '@angular/common/locales/ru';
// import { registerLocaleData } from '@angular/common';
// registerLocaleData(localeRu, 'ru');

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent
  },
  {
    path: 'beta',
    component: BetaComponent
  },
  {
    path: 'search',
    loadChildren: () =>
      import('@sarafan/providers/feature-search').then(
        m => m.ProvidersFeatureSearchModule
      )
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
   {
    path:'account',
    loadChildren: () =>
    import('@sarafan/account/feature-registration').then(m => m.AccountFeatureRegistrationModule)
   // canActivate: [AuthGuard]
  },
  {
    path: 'debug',
    loadChildren: () =>
    import('./debug/debug.module').then(
      m => m.DebugModule
    )

  },

];

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [
   CommonModule,
   BrowserAnimationsModule,
    MaterialModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    RootStoreModule,
    AuthModule.forRoot(environment),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
