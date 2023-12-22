import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  files: File[] = [];

  upload(file: File): void {
    this.files.push(file);
  }
}
