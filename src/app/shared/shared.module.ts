import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
HeaderComponent ,
SidebarComponent ,
FooterComponent 
  ],
  imports: [
    CommonModule ,
    RouterModule ,
    FlexLayoutModule 
  ],
  exports :[
    HeaderComponent ,
    SidebarComponent,
    FooterComponent 
  ]

})
export class SharedModule { }
