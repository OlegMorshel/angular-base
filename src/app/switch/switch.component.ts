import {Component, forwardRef, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
}

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor{
  state = "off"


  private onChange = (value: any) => {}
  writeValue(obj: any) {
  }
  registerOnChange(fn: any) {
    this.onChange = fn
  }
  registerOnTouched(fn: any) {
  }
  setDisabledState(isDisabled: boolean) {
  }

  setState(str: string) {
    this.state = str
    this.onChange(this.state)
  }
}
