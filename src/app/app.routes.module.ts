import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

export const APP_ROUTES: Routes = [
  { path: 'body/:id/:chapterId', component: BodyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'body/:id/:chapterId' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
