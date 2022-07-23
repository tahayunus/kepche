import { NgModule } from '@angular/core';
import { CommentAddPage } from './comment-add';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    CommentAddPage,
  ],
  imports: [
    SharedModule,
    MentionModule,
    RouterModule,
    FormsModule,
  ],
  entryComponents: [
    CommentAddPage
  ]
})
export class CommentAddPageModule {}
