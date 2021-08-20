import { Questions } from './../questions.model';
import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-mcq',
  templateUrl: './mdf-mcq.component.html',
  styleUrls: ['./mdf-mcq.component.css']
})
export class MdfMcqComponent implements OnInit {
eachQ:FormGroup;
  constructor(public form:FormBuilder, public quesSer: QuestionsService){
    this.eachQ = form.group({});
  }

  msg:string="";
  quest:Array<Questions> = new Array();
  chose:Array<string> = new Array();
  correct:Array<string> = new Array();
  totalCorrect:number = 0;
  total:number=0;
  done:boolean = false;

  ngOnInit(): void {
    this.quesSer.checking().subscribe(result=>{
      for(let item of result){
        this.eachQ?.addControl(item.q, this.form.control(""));
        this.quest.push(item);

      }
    })
  }


  submitMcq(){
    this.quest.forEach(q => this.correct.push(q.correctA));

    Object.keys(this.eachQ.value).forEach(q=>this.chose.push(this.eachQ.value[q]));
    this.total = this.correct.length;
    for(let i = 0; i < this.correct.length; i++){
      if(this.correct[i] === this.chose[i]){
        this.totalCorrect++;
        document.getElementById(this.correct[i])!.setAttribute("style", "background-color:green");
        document.getElementById(this.correct[i])!.append(" <--- ✔");
      }
      else{
        document.getElementById(this.chose[i])!.setAttribute("style", "background-color:red");
        document.getElementById(this.chose[i])!.append(" <--- ❌");
        document.getElementById(this.correct[i])!.setAttribute("style", "background-color:green");
        document.getElementById(this.correct[i])!.append(" <--- ✔");
      }
    }
    this.eachQ.disable();
    this.done=true;
    let percentCorrect : number=((this.totalCorrect/this.total)*100);

    if(percentCorrect > 70){
      document.getElementById("score")!.setAttribute("style", "background-color:green");
      document.getElementById("result")!.setAttribute("style", "background-color:green");
      document.getElementById("result")!.append("You passed, congratulations!");
      document.getElementById("score")!.append(this.totalCorrect+"/"+this.total+" = "+ percentCorrect.toString()+"%");
    }
    else{
      document.getElementById("score")!.setAttribute("style", "background-color:red");
      document.getElementById("result")!.setAttribute("style", "background-color:red");
      document.getElementById("result")!.append("you failed, try again!");
      document.getElementById("score")!.append("Score: " + this.totalCorrect+"/"+this.total+" = "+ percentCorrect.toString()+"%");
    }

  }

}
