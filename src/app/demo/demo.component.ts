import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  html: any=`
  <h1>Random Quote Generator</h1>
  <h2>Property Binding Example</h2>

  <div class="white-box">
    <div class="quote">
      <i class="fa fa-quote-left fa-3x"></i> 
      <p class="random-quote"> <span id="text"></span></p>
    </div>
    <div class="random-author">- <span id="author"></span>
    </div>
    <div class= "buttons">
      
  <a id="tweet" href=""https://twitter.com/intent/tweet"" title="Tweet this!"><button class= "button"><i class= "fa fa-twitter"></i></button></a>
      
      <div class= "new-quote-button" >
      <button class="button" id="new-quote"> New Quote
      </div>
    </div>
  </div>`
  name: string = "Jack";

  serverId: number = 101;
  serverStatus: string = 'Online';

  imageUrl: any = 'https://as2.ftcdn.net/v2/jpg/05/43/02/77/1000_F_543027713_fKPxCWNRflComD7QtT3Q1JHkURt5YWNG.jpg';

  isDisabled = false;

  count = 0; 
  
  userName: string = "codemind technology";
  constructor(private _demoservice:DemoService) { }
  ngOnInit(): void {
  }
  Save(){
    console.log("Button Clicked");  
  }
// print(){
//   alert('print method called');
// }

getServerStatus() {
  return this.serverStatus;
}
clickMe(event: any){
  console.log(event.target.innerText);
  this.count++;
  console.log(this.count);
}
demo(event: any){
  console.log(event.target.value);
  let data = event.target.value;
  //validation
}

//called with template reference variable
demo1(event: any){
  console.log(event.value);
  
  //validation
}
//services
//this is the instance of demo service
// Hello(){
//   const objDemoService = new DemoService();
//   objDemoService.Hello();
// }

}