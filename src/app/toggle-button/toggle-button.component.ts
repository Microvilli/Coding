import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true,
    }
  ]
})
export class ToggleButtonComponent implements ControlValueAccessor {

  @Input() childButtons: string [];
  onChange: (button: string) => void;
  onTouched: () => void;
  selectedButton: string;
  disabled: boolean;

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.selectedButton = value;
  }

  onButton(button: string) {
    this.onChange(button);
    this.selectedButton = button;
  }
}
