import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "../validators/my.validators";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [
          Validators.email,
          Validators.required,
          MyValidators.restrictedEmails,
        ],
        [
          MyValidators.uniqEmail
        ]),
      password: new FormControl("", [
        Validators.required, Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl("ru"),
        city: new FormControl('', [
          Validators.required
        ])
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    console.log("Form", this.form)
    const formData = {...this.form.value}
    console.log("Values", formData)

    this.form.reset()
  }

  setCapital() {
    const cityMap = {
      ru: "Moсква",
      ua: "Киев",
      by: "Минск"
    }
    const cityKey: keyof typeof cityMap = this.form.get("address")?.get('country')?.value as keyof typeof cityMap ?? "ru"
    const city = cityMap[cityKey]
    this.form.patchValue({address: {city}})
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push
    (this.form.get('skills') as FormArray).push(control)
  }

}
