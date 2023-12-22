import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  constructor(private uploadService: UploadService) { }

  getFiles(): File[] {
    return this.uploadService.files;
  }

  download(file: File) {
    window.open(window.URL.createObjectURL(file));
  }
}
