import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostPruebaComponent } from './posts/post-prueba/post-prueba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInputModule} from '@angular/material/input';
import{MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import{MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './posts/header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {MatExpansionModule} from '@angular/material/expansion';


import { FooterComponent } from './posts/footer/footer.component';
import { RadioButoon } from './posts/RadioButton/Radio.component';
import {MatRadioModule} from '@angular/material/radio';
import { PostService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostPruebaComponent,
    HeaderComponent,
    PostListComponent,
    FooterComponent,
    RadioButoon
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
