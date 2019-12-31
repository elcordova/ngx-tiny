import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AddressInputComponent } from './address-input/address-input.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { ProjectRoutingModule } from './project-routing.module';
import { DemoMultiSelectSimpleComponent } from './multi-select/demo-multi-select-simple/demo-multi-select-simple.component';
import { DemoMultiSelectFormComponent } from './multi-select/demo-multi-select-form/demo-multi-select-form.component';
import { DemoMultiSelectAdvanceComponent } from './multi-select/demo-multi-select-advance/demo-multi-select-advance.component';
import { CodeHighlightComponent } from './code-highlight/code-highlight.component';
import { TabsComponent } from './tabs/tabs.component';
import { DemoRouteAComponent } from './tabs/demo-route-a/demo-route-a.component';
import { DemoRouteBComponent } from './tabs/demo-route-b/demo-route-b.component';
import { DemoQuillEditorFormComponent } from './quill-editor/demo-quill-editor-form/demo-quill-editor-form.component';
import { DemoQuillEditorSimpleComponent } from './quill-editor/demo-quill-editor-simple/demo-quill-editor-simple.component';
import { DemoSwitchInputSimpleComponent } from './switch-input/demo-switch-input-simple/demo-switch-input-simple.component';
import { DemoSwitchInputFormComponent } from './switch-input/demo-switch-input-form/demo-switch-input-form.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DemoDatePickerSimpleComponent } from './date-picker/demo-date-picker-simple/demo-date-picker-simple.component';
import { DemoDatePickerInlineComponent } from './date-picker/demo-date-picker-inline/demo-date-picker-inline.component';
import { DemoDatePickerFormsComponent } from './date-picker/demo-date-picker-forms/demo-date-picker-forms.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { DemoTimePickerSimpleComponent } from './time-picker/demo-time-picker-simple/demo-time-picker-simple.component';
import { DemoTimePickerFormsComponent } from './time-picker/demo-time-picker-forms/demo-time-picker-forms.component';

@NgModule({
  imports: [SharedModule, ProjectRoutingModule],
  declarations: [
    AddressInputComponent,
    MultiSelectComponent,
    QuillEditorComponent,
    SwitchInputComponent,
    TagInputComponent,
    DemoMultiSelectSimpleComponent,
    DemoMultiSelectFormComponent,
    DemoMultiSelectAdvanceComponent,
    CodeHighlightComponent,
    TabsComponent,
    DemoRouteAComponent,
    DemoRouteBComponent,
    DemoQuillEditorFormComponent,
    DemoQuillEditorSimpleComponent,
    DemoSwitchInputSimpleComponent,
    DemoSwitchInputFormComponent,
    ClipboardComponent,
    DatePickerComponent,
    DemoDatePickerSimpleComponent,
    DemoDatePickerInlineComponent,
    DemoDatePickerFormsComponent,
    TimePickerComponent,
    DemoTimePickerSimpleComponent,
    DemoTimePickerFormsComponent,
  ]
})
export class ProjectModule {}
