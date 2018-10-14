import { Directive, EventEmitter, HostListener, ElementRef, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appFileUpload]'
})
export class FileUploadDirective {

  @Output() filesDropped = new EventEmitter<FileList>();
  @Output() filesHovered: any = new EventEmitter<FileList>();

  constructor(private el: ElementRef) {

  }

  OnInit() {
    console.log('Directive', this.el);
  }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault()
    let transfer = $event.dataTransfer; // Prevent redirect to the file
    this.filesDropped.emit(transfer.files)
    this.filesHovered.emit(false)
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault()
    let transfer = $event.dataTransfer; // Prevent redirect to the file
    this.filesDropped.emit(transfer.files)
    this.filesHovered.emit(true)

  }
  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault()
    let transfer = $event.dataTransfer; // Prevent redirect to the file
    this.filesDropped.emit(transfer.files)
    this.filesHovered.emit(true)

  }


}
