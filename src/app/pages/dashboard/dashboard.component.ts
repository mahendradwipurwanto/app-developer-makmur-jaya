import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Ecommerce Component
 */
export class DashboardComponent implements OnInit {
 // bread crumb items
 breadCrumbItems!: Array<{}>;



 ngOnInit(): void {
   /**
    * BreadCrumb
    */
   this.breadCrumbItems = [
     { label: 'DASHBOARD', active: true }
   ];
 }
}
