import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PushSkillService } from '../../Service/push-skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrl: './add-skill.component.css',
})
export class AddSkillComponent {
  form!: FormGroup;
  pushSkill: PushSkillService = inject(PushSkillService);
  loading: boolean = false;
  errorMessage: string | null = null;
  error: boolean = false;
  submit: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl(null, Validators.required),
      img_url: new FormControl(null, Validators.required),
      desc: new FormControl(null, Validators.required),
    });
  }

  formSubmit() {
    console.log(this.form);

    this.loading = true;
    if (this.form.valid) {
      this.pushSkill.pushSkill(this.form.value).subscribe({
        next: (response) => {
          this.submit = true;
          setTimeout(() => {
            this.submit = true;
            this.loading = false;
          }, 5000);
          this.form.reset();
        },
        error: (err) => {
          this.error = true;
          this.errorMessage = err.error.error;
          this.loading = false;
        },
      });
    } else {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
}
