import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CallbackComponent } from './components/callback/callback.component'; 

export interface IEnvironment {
  path: string;
  production: boolean
  authClient: string;
  authDomain: string;
  callback: string;
}
@NgModule({
  declarations: [CallbackComponent]
})
export class AuthModule {

  public static forRoot(environment: IEnvironment): ModuleWithProviders {

      return {
          ngModule: AuthModule,
          providers: [
              AuthService,
              {
                  provide: 'env', // you can also use InjectionToken
                  useValue: environment
              }
          ]
      };
  }
}
