import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../models/photo';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  ListPhoto?: Photo[];
  constructor(private service: PhotoService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('albumId');
    this.service.getAbumsPhotoById(Number(id)).subscribe(item => {
      this.ListPhoto = item;
    });
  }

  prikaz(url:string){
    window.open(url,'_blank');
  }

}
