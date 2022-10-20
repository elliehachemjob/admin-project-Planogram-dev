import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VipInnerPageComponent } from './pages/vip-inner-page/vip-inner-page.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)

  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
