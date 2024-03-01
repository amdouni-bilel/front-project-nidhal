import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { PostsComponent } from '../../modules/posts/posts.component';
import { HomeComponent } from '../../modules/home/home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [
    DefaultComponent ,
    PostsComponent,
    HomeComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        SharedModule,

    ]
})
export class DefaultModule { }
