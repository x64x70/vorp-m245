import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {
        path: 'upload',
        pathMatch: 'full',
        component: UploadComponent
    },
    {
        path: 'view',
        pathMatch: 'full',
        component: ViewComponent
    }
];
