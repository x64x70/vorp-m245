import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private api: ApiService) { }

  summaries: any[] = []

  ngOnInit(): void {
    if (!localStorage.getItem('token')) this.router.navigate(['login'])
    this.getSummaries()
  }

  getUsername(): string {
    return this.api.getUsername()
  }

  getSummaries(): void {
    this.api.getSummaries().subscribe((res: any) => {
      if (res.status == 'success') {
        this.summaries = res.data
      }
    })
  }
}
