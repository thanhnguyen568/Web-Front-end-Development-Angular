import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {PersonService} from '../../service/person.service';
import {Router} from '@angular/router';
import {Project} from '../../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  project: Project;

  constructor(private projectService: ProjectService,
              private personService: PersonService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject() {
    this.projectService.findAll().subscribe(data => {
      this.projects = data;
    });
  }

  getProject(id: number) {
    this.projectService.findById(id).subscribe(data => {
      this.project = data;
    });
  }

  removeProject() {
    this.projectService.deleteById(this.project.id).subscribe(() => {
      this.getAllProject();
    });
  }

}
