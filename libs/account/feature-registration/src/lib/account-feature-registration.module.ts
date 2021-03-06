import { SharedUtilModule } from './../../../../shared-util/src/lib/shared-util.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDomainModule } from '@sarafan/account/domain';
import { UiModule, MaterialModule } from '@sarafan/ui';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccountRoutingModule } from './account-routing.module';

import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/core/registration.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAccount from './+state/account.reducer';
import { AccountEffects } from './+state/account.effects';
import { SetupAccountComponent } from './setup-account/setup-account.component';
import { TFJSModule } from 'ngx-tfjs';
import { MyToxicityPipe } from './validators/toxicity.pipe';
@NgModule({
  imports: [
    CommonModule,
    UiModule,
    AccountDomainModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    DragDropModule,
    AccountRoutingModule,
    StoreModule.forFeature(
      fromAccount.ACCOUNT_FEATURE_KEY,
      fromAccount.reducer
    ),
    EffectsModule.forFeature([AccountEffects]),
    TFJSModule
  ],
  declarations: [RegistrationComponent, SetupAccountComponent],
  exports: [RegistrationComponent]
})
export class AccountFeatureRegistrationModule {}
