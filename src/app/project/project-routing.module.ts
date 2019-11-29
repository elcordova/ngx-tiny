import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressInputComponent } from './address-input/address-input.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { QuillInputComponent } from './quill-input/quill-input.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { CodeHighlightComponent } from './code-highlight/code-highlight.component';

const routes: Routes = [
    { path: 'address-input', component: AddressInputComponent },
    { path: 'multi-select', component: MultiSelectComponent },
    { path: 'quill-input', component: QuillInputComponent },
    { path: 'switch-input', component: SwitchInputComponent },
    { path: 'tag-input', component: TagInputComponent },
    { path: 'code-highlight', component: CodeHighlightComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
