import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public personnes: Personne[] = [];
  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => this.personnes = personnes
    );  }
}
