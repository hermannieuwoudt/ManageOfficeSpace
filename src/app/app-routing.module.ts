import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OfficePageComponent } from './containers/office-page/office-page.component';

const routes: Routes = [
  {
    path: 'offices',
    component: OfficePageComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'offices',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
