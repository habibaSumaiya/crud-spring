import { Route } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { ViewUserComponent } from "./view-user/view-user.component";




export const routes: Route[] = [
    {
        path: 'add-user',
        component: AddUserComponent
    },
    {
        path: 'update-user/:id',
        component: UpdateUserComponent
    },
    {
        path: 'view-user',
        component: ViewUserComponent
    },
    {
        path: '', redirectTo: 'view-user', pathMatch: 'full'
    }


];




