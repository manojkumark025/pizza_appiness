import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Http ,Response, Headers, RequestOptions} from '@angular/http';
import {HttpClientModule, HttpClient,HttpHeaders} from '@angular/common/http';
import { ListsService } from '../lists.service';

declare var swal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	public listorder: any = [];
	public sName: string = "";
	public documentPopUpData: any;
	
  constructor(private listService: ListsService,private http: HttpClient,public _http: HttpClientModule,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
	  this.getsampleData();
  }
  
  /////// To get data from JSON
  getsampleData (){
    this.listorder = this.listService.getsampleData();
  }
  
  /////// To get the Status Name
  GetStatusName(statusNo){
	  
	  if(statusNo==1) return "Order Received";
	  if(statusNo==2) return "Preparing";
	  if(statusNo==3) return "Ready to serve";

  }
  
  /////// To change the Status Name
  ChangeStatus(statusNo,OrderNo){
	  
	  //alert(statusNo);
	  if (statusNo==3){

		  alert("Order is ready to Serve, Thanks");
		  return;
	  }
	  let Cstatus=0;
	  Cstatus=statusNo+1;
	  
	  //alert(Cstatus);
	  
	  for(var i=0;i<this.listorder.length;i++){
		  
		  if(this.listorder[i].OrdNo==OrderNo)this.listorder[i].Status=Cstatus;
		  
	  }
	  
	  
  }
  
  /////// To get the pop up data
  
  SetDocumentPopUpData(value){
	  
	 //alert(value.Status);
	  this.documentPopUpData=value;

  }
  
  /////// Tocalculate the items and according to amount
  
  TotalCalc(items,x){
	  
	 // alert(x);
	  //alert(items);
	  
	  let mitems=0;
	  mitems=items*x.Price
	  
	  for(var i=0;i<this.listorder.length;i++){
		  
		  if(this.listorder[i].OrdNo==x.OrdNo)this.listorder[i].TotalAmount=mitems;
		  
	  }
	  
	  
	  
  }
  

}
