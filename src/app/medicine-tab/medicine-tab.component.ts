import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { DataService } from '../demo-page/data.service';

@Component({
  selector: 'app-medicine-tab',
  templateUrl: './medicine-tab.component.html',
  styleUrls: ['./medicine-tab.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class MedicineTabComponent implements OnInit {
  dataSource: any[] = [];
  columnsToDisplay = ['PrescriptionID', 'PrescribedBy', 'PrescribedOn', 'Validity', 'Status', 'actions'];
  columnsToDisplayWithExpand = ['expand', ...this.columnsToDisplay];
  expandedElement: any | null;
  isTrue: boolean = false

  imageUrl = '../../assets/Frame 772540471.svg';

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.dataSource = data.prescriptions;
    });
  }

  viewImage(): void {
    this.dialog.open(ImageDialogComponent, {
      width: '600px',
      height: '680x',
      data: { imageUrl: this.imageUrl }
    });
  }

  downloadImage(): void {
    const link = document.createElement('a');
    link.href = this.imageUrl;
    link.download = 'image.png';
    link.click();
  }

  toggleRow(element: any): void {
    this.isTrue = true
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
