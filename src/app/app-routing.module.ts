import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosModule } from './cursos/cursos.module';


const routes: Routes = [

  {
    path: '', pathMatch: 'full', redirectTo: 'cursos'
  },

  {
    path:  'cursos',
    loadChildren: () => CursosModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
