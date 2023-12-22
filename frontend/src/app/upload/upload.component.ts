import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  constructor(private uploadService: UploadService, private sanitizer: DomSanitizer, private router: Router) { }

  file?: File;
  safeResource?: SafeUrl;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      const reader = new FileReader();
      reader.onload = (e: any) => this.safeResource = this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  }

  upload(): void {
    if (this.file != undefined) {
      this.uploadService.upload(this.file);
      this.router.navigateByUrl('/view');
    }
  }
}
