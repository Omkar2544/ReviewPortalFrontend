import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from "@angular/material/core";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";




@NgModule({

exports:[
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgbRatingModule
   
]
})  

export class MateriaModule {}