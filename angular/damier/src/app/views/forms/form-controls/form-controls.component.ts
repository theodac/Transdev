import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ExploitationService} from "../../../services/exploitation/exploitation.service";

@Component({
    selector: 'app-form-controls',
    templateUrl: './form-controls.component.html',
    styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent {

    public favoriteColor = '#26ab3c';
    exploitation = {
        nbAccidentsMateriels: null,
        nbAccidentsCorporels: null,
        causeAccident: '',
        tauxControle: null,
        dataDate: ''
    };

    constructor(private exploitationService: ExploitationService) {

    }


    addData() {
        console.log('toto')
        console.log(this.exploitation)
        this.exploitationService.postExploitation(this.exploitation).subscribe(
            data => {
                console.log(data)
            }
        )
    }
}
