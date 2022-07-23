import { Component, Injector, Input } from '@angular/core';
import { Review } from '../../services/review-service';
import { BasePage } from '../base-page/base-page';
import { Place } from 'src/app/services/place-service';
import { User } from 'src/app/services/user-service';
import { Post } from 'src/app/services/post';
import { Photo } from 'src/app/services/photo';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { text } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'page-comment-add',
  templateUrl: 'comment-add.html',
  styleUrls: ['comment-add.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class CommentAddPage extends BasePage {

  @Input() photo:Photo;

  public comment:string;
  public likes;
  public userData;
  public isliked=[];
  public reviews;
  public users: string[];
  public targetComment:number = null;
  public targetUser:User;

  constructor(injector: Injector,private userService: User) {
    super(injector);
  }

  ngOnInit(){
    this.loadData();
  }

  enableMenuSwipe() {
    return false;
  }

  onComment(index,review,isParent){
    this.targetUser = review.user;
    if(isParent){
      this.targetComment = index;
    }else{
      this.targetComment = review.parentId;
    }
    console.log("onCommentIndex",index);
    console.log("onComment",review);
  }

  untargetComment(){
    this.targetComment = null;
    this.targetUser = null;
  }

  async likeButton(index,comments,liked){
    let comment = [];
    comments.forEach(element => {
      delete element.user;
      comment.push(element);
    });
    console.log("aynennn",comment[index]);
    let newLikes = [];
    if(liked){
      for (let like of comment[index].likes){
        if(like != User.getCurrent().id){
          newLikes.push(like);
        }
      }
      comment[index].likes = newLikes;
      const query = new Photo();
      query.id = this.photo.id;
      console.log("aynenn",comment);
      query.set("comment",comment);
      query.save();
      this.isliked[index] = 0;
    }else{
      const query = new Photo();
      query.id = this.photo.id;
      comment[index].likes.push(User.getCurrent().id)
      query.set("comment",comment);
      this.isliked[index] = 1;
      query.save();
    }
  }

  async loadData(){
    const getUsers = await this.userService.load();
    this.userData = getUsers; 
    this.users = [];
    getUsers.forEach(userDetail=>{
      this.users.push(userDetail.username);
    }) 
    console.log("usersss",this.users);
    this.reviews = this.photo.attributes.comment
    let userList = [];
    this.reviews.forEach(review => {
      let isLiked = 0;
      for (let likePhoto of review.likes) {
        if(likePhoto === User.getCurrent().id){
          isLiked = 1;
        }
      }
      this.isliked.push(isLiked);
      userList.push(review.userId);
    });
    const getUser = await this.userService.loadList(userList);
    this.reviews.forEach((review,index) => {
      getUser.forEach(element => {
        if(element.id === review.userId){
          this.reviews[index].user = element;
        }
      });
      let usrList = [];
      getUsers.forEach(usr=>{
        review.mentions.forEach(element => {
          if(usr.id === element){
            usrList.push("@"+usr.username);
          }
        });
      });
      let data = [];
      review.text.split(" ").forEach((re,index) => {
        //console.log("re",re)
        let o = null;
        usrList.forEach((u,i) => {
          if(re === u){
            o = review.mentions[i]
          }
        });
          data.push({
            "text" : re,
            "mention":o
          })
        
      });
      this.reviews[index].t = data;
      this.reviews[index].mention = usrList;
    });
    console.log("hahah",this.reviews)
  }

  async onSubmit() {


    try {
      await this.showLoadingView({ showOverlay: false });
      let mentions = [];
      let mentionsId = [];
      console.log("asdasdassa",this.comment);
      let ids = this.comment.replace(/(\r\n|\n|\r)/gm, "",).split("@").forEach(id=>{
        mentions.push(id.split(" ")[0]);
      });
      this.userData.forEach((u)=>{
        mentions.forEach(m=>{
          if(m === u.username){
            mentionsId.push(u.id);
          }
        })
      });
      console.log("search",mentionsId);
      console.log("asdasdaasdasdasda",ids);
      const query = new Photo();
      query.id = this.photo.id;
      let comments = this.photo.attributes.comment;
      let parentId = null;
      if(this.targetComment != null){
        parentId = this.targetComment;
      }
      comments.push({
        "userId": User.getCurrent().id,
        "date": Date.now(),
        "parentId": parentId,
        "likes": [],
        "mentions":mentionsId,
        "text": this.comment
      })
      query.set('comment',comments);
      query.save();
      this.onDismiss();

      this.showContentView();

    } catch (err) {

      this.showContentView();

      if (err.code === 5000) {
        this.translate.get('REVIEW_ALREADY_EXISTS').subscribe(str => this.showToast(str));
      } else {
        this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      }
    }
  }

  onDismiss(review: Review = null) {
    this.modalCtrl.dismiss(review);
  }

}
