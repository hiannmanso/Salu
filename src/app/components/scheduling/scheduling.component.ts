import { Component } from '@angular/core';
import { Scheduling } from 'src/app/interfaces/Scheduling';
import { InfosDbService } from 'src/app/services/infos-db.service';
import { SchedulingService } from 'src/app/services/schedulingService/scheduling.service';
@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
})
export class SchedulingComponent {
  schedulings: Scheduling[] = [];
  schedulingSearch: string = '';
  searchtag: string = '/assets/search.svg';
  constructor(private schedulingService: SchedulingService) {
    this.getSchedulings();
  }

  getSchedulings(): void {
    this.schedulingService
      .getAll()
      .subscribe((schedulings) => (this.schedulings = schedulings));
  }
  searching(): void {
    console.log('entrou');
    for (const scheduling of this.schedulings) {
      if (
        scheduling.paciente.toUpperCase() ===
        this.schedulingSearch.toUpperCase()
      ) {
        this.schedulings = [scheduling];
        console.log(scheduling);
      }
    }
    if (this.schedulingSearch === '') {
      this.getSchedulings();
    }
  }
}
