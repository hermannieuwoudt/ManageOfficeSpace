import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OfficeContainerComponent } from './containers/office-container/office-container.component';

const routes: Routes = [
  {
    path: 'offices',
    component: OfficeContainerComponent,
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
