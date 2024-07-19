import { Routes } from '@angular/router';
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
import { AppGroupByComponent } from './components/aggregate-compo/groupBy.component';
import { AppMaskComponent } from './components/folder-v1-compo/mask.component';
import { AppNumericalToRomanComponent } from './components/folder-v1-compo/numerical-to-roman.component';
import { AppOrdinalNumberComponent } from './components/folder-v1-compo/ordinal-Number.component';
import { AppPasswordStrengthCheckComponent } from './components/folder-v1-compo/password-strength-check.component';
import { AppReverseStringComponent } from './components/folder-v1-compo/reverse-String.component';
import { AppShuffleArrayComponent } from './components/folder-v1-compo/shuffle-array.component';
import { AppSlugifyTextComponent } from './components/folder-v1-compo/slugify-text.component';
import { AppSortArrayAscDescOrderComponent } from './components/folder-v1-compo/sort-array-asc-desc-order.component';
import { AppTimeAgoComponent } from './components/folder-v1-compo/time-ago.component';
import { AppTimeDurationComponent } from './components/folder-v1-compo/time-duration.component';
import { AppTruncateTextComponent } from './components/folder-v1-compo/truncate-text.component';
import { AppAgeCalculationComponent } from './components/aggregate-compo/age-calculation.component';
import { AppFormatDateComponent } from './components/aggregate-compo/format-date.component';
import { AppDefaultsComponent } from './components/objects-compo/default.component';
import { AppPrintObjKeysComponent } from './components/objects-compo/printObjKeyPipe.component';
import { AppToArrayComponent } from './components/objects-compo/printObjValuePipe.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'defaults', pathMatch: 'full' },

  /*---------------------------------------------------------------------------
                              Aggregate Component
  ---------------------------------------------------------------------------*/
  { path: 'groupBy', component: AppGroupByComponent },
  { path: 'maxNum', component: AppMaxNumComponent },
  { path: 'minNum', component: AppMinNumComponent },
  { path: 'sum', component: AppSumComponent },
  { path: 'mean', component: AppMeanComponent },
  { path: 'ageCalculation', component: AppAgeCalculationComponent },
  { path: 'formatDate', component: AppFormatDateComponent },

  /*---------------------------------------------------------------------------
                              Folder-v1 Component
  ---------------------------------------------------------------------------*/
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
  { path: 'mask', component: AppMaskComponent },
  { path: 'numericalToRoman', component: AppNumericalToRomanComponent },
  { path: 'ordinalNumber', component: AppOrdinalNumberComponent },
  {
    path: 'passwordStrengthCheck',
    component: AppPasswordStrengthCheckComponent,
  },
  { path: 'reverseString', component: AppReverseStringComponent },
  { path: 'shuffleArray', component: AppShuffleArrayComponent },
  { path: 'slugifyText', component: AppSlugifyTextComponent },
  {
    path: 'sortArrayAscDescOrder',
    component: AppSortArrayAscDescOrderComponent,
  },
  { path: 'timeAgo', component: AppTimeAgoComponent },
  { path: 'timeDuration', component: AppTimeDurationComponent },
  { path: 'truncateText', component: AppTruncateTextComponent },

  { path: '', redirectTo: 'toArray', pathMatch: 'full' },
  /*---------------------------------------------------------------------------
                              Object-Pipe Component
  ---------------------------------------------------------------------------*/
  { path: 'defaults', component: AppDefaultsComponent },
  { path: 'printObjKey', component: AppPrintObjKeysComponent },
  { path: 'toArray', component: AppToArrayComponent },
];
