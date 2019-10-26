import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from "@/app/ui/frontoffice/home/home.component";
import {EMPTY_PATH, NOT_FOUND_PATH} from "@/app/ui/crossconcern/utilites/properties/path.property";
import NoContentComponent from "@/app/ui/frontoffice/not-content/no-content.component";
import FrontofficeComponent from "@/app/ui/frontoffice/frontoffice.component";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: EMPTY_PATH, name: 'home',component: HomeComponent,},
    {path: NOT_FOUND_PATH, name: '404', component: NoContentComponent},
  ],
});
