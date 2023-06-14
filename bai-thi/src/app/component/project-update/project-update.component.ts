import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {PersonService} from '../../service/person.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../model/person';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  projectForm: FormGroup;
  id: number;
  personName: string;

  constructor(private projectService: ProjectService,
              private personService: PersonService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectCode: new FormControl('', Validators.required),
      projectDateIn: new FormControl('', Validators.required),
      projectDateOut: new FormControl('', Validators.required),
      projectReason: new FormControl('', Validators.required),
      projectMethod: new FormControl('', Validators.required),
      projectBS: new FormControl('', Validators.required),
      person: new FormControl('', Validators.required),
      personName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^!@#$%^&*()_+=0-9-]+$')
      ]),
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.projectService.findById(this.id).subscribe(data => {
        this.projectForm.patchValue(data);
        this.projectForm.get('person').setValue(data.person.personCode);
        this.personName = data.person.personName;
      });
    });
  }

  updateProject(id: any) {
    const project = this.projectForm.value;

    project.person = {
      personCode: project.person,
      personName: project.personName
    };

    function delay(ms: number) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
        setTimeout(reject, ms);
      });
    }

    delay(0).then(() => {
      this.personService.findById(project.person).subscribe(data => {
        project.person = data;
      });
      return delay(1000);
    })
      .then(() => {
        this.projectService.update(id, project).subscribe(() => {
          this.router.navigateByUrl('/project/list');
        });
        return delay(0);
      });
  }
}
