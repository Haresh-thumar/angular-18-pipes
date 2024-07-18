import { Routes } from '@angular/router';
import { AppGroupByComponent } from './components/aggregate-compo/GroupBy.component';
import { AppMaxNumComponent } from './components/aggregate-compo/maxNum.component';
import { AppMeanComponent } from './components/aggregate-compo/mean.component';
import { AppMinNumComponent } from './components/aggregate-compo/minNum.component';
import { AppSumComponent } from './components/aggregate-compo/sum.component';
import { AppActiveStatusComponent } from './components/folder-v1-compo/active-status.component';
import { AppCamelCaseToSpacesComponent } from './components/folder-v1-compo/camel-Case-To-Spaces.component';
import { AppColorContrastComponent } from './components/folder-v1-compo/color-contrast.component';
import { AppCreditCardMaskComponent } from './components/folder-v1-compo/credit-card-mask.component';
import { AppEveryFirstLetterUppercaseComponent } from './components/folder-v1-compo/everyfirst-letter-upparcase.component';
import { AppFileSizeComponent } from './components/folder-v1-compo/file-size.component';
import { AppFilterComponent } from './components/folder-v1-compo/filter.component';
import { AppFirstLetterUpparcaseComponent } from './components/folder-v1-compo/first-letter-upparcase.component';
import { AppGenderComponent } from './components/folder-v1-compo/gender.component';
import { AppIndianPhoneNumberFormatComponent } from './components/folder-v1-compo/indian-phone-number-format.component';
import { AppInitialsNameComponent } from './components/folder-v1-compo/initials-name.component';
import { AppJsonPrettyPrintComponent } from './components/folder-v1-compo/json-pretty-print.component';

export const routes: Routes = [
  { path: '', redirectTo: 'JsonPrettyPrint', pathMatch: 'full' },

  // Aggregate Component
  { path: 'groupBy', component: AppGroupByComponent },
  { path: 'maxNum', component: AppMaxNumComponent },
  { path: 'minNum', component: AppMinNumComponent },
  { path: 'sum', component: AppSumComponent },
  { path: 'mean', component: AppMeanComponent },

  // Aggregate Component
  { path: 'activestatus', component: AppActiveStatusComponent },
  { path: 'camelCaseToSpaces', component: AppCamelCaseToSpacesComponent },
  { path: 'colorContrast', component: AppColorContrastComponent },
  { path: 'CreditCardMask', component: AppCreditCardMaskComponent },
  {
    path: 'EveryFirstLetterUppercase',
    component: AppEveryFirstLetterUppercaseComponent,
  },
  { path: 'fileSize', component: AppFileSizeComponent },
  { path: 'filter', component: AppFilterComponent },
  { path: 'FirstLetterUpparcase', component: AppFirstLetterUpparcaseComponent },
  { path: 'gender', component: AppGenderComponent },
  {
    path: 'IndianPhoneNumberFormat',
    component: AppIndianPhoneNumberFormatComponent,
  },
  { path: 'InitialsName', component: AppInitialsNameComponent },
  { path: 'JsonPrettyPrint', component: AppJsonPrettyPrintComponent },
];
