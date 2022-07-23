import { Component, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Questions } from 'src/app/services/question-service';
import { User } from 'src/app/services/user-service';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage extends BasePage {
  enableMenuSwipe(): boolean {
    return true;
  }
  public form: FormGroup;
  public user: User;
  public rid: string;
  public question: any;
  public isContentViewVisible: boolean = false;

  constructor(injector: Injector, private questionService: Questions) {
    super(injector);
    this.user = User.getCurrent();
    this.form = new FormGroup({
      answer: new FormControl('', Validators.required),
    });
  }

  isFieldValid(formControl: AbstractControl) {
    return formControl.valid;
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.loadQuestion();
  }

  getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
  }

  async loadQuestion() {
    const questions = await this.questionService.load();
    questions.forEach((data, index) => {
      data.answers.forEach(element => {
        if (element.userId === User.getCurrent().id) {
          delete questions[index];
          questions.length = questions.length - 1;
        }
      });
    })
    if (questions.length > 0) {
      this.isContentViewVisible = true;
    }
    this.question = questions[0];
    console.log("question", questions);
  }

  async loadRelativeQuestion(event) {
    const questions = await this.questionService.loadRelative(event);
    questions.forEach((data, index) => {
      data.answers.forEach(element => {
        if (element.userId === User.getCurrent().id) {
          delete questions[index];
          questions.length = questions.length - 1;
        }
      });
    })
    if (questions.length > 0) {
      this.isContentViewVisible = true;
    }
    this.question = questions[0];
    console.log("question", questions);
  }

  async onSubmit() {

    if (this.form.invalid) {
      const message = await this.getTrans('INVALID_FORM');
      return this.showToast(message);
    }

    const formData = Object.assign({}, this.form.value);

    try {
      await this.showLoadingView({ showOverlay: false });

      const query = new Questions;
      query.id = this.question.id;
      const answer = this.question.answers
      answer.push({ 'userId': User.getCurrent().id, 'answer': formData.answer });
      console.log("asda", answer);
      query.set('answers', answer);
      query.save();

      this.showContentView();

      this.translate.get('SUCCESSFUL').subscribe(str => this.showToast(str));
      this.question.options.forEach(element => {
        if (element.title === formData.answer) {
          this.rid = element.relative;
          const relativeQuestion = new Questions;
          relativeQuestion.id = element.relativeId;
          if (this.rid === '1') {
            this.loadRelativeQuestion(element.relativeId);
            console.log('kashjfvkjsaf', this.loadRelativeQuestion(element.relativeId));
          } else {
            this.loadQuestion();
          }
        }
      });
      
      formData.answer = null;
    } catch (err) {

      this.showContentView();

      if (err.code === 202) {
        this.translate.get('USERNAME_TAKEN').subscribe(str => this.showToast(str));
      } else if (err.code === 203) {
        this.translate.get('EMAIL_TAKEN').subscribe(str => this.showToast(str));
      } else if (err.code === 125) {
        this.translate.get('EMAIL_INVALID').subscribe(str => this.showToast(str));
      } else {
        this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      }

    }

  }


}
