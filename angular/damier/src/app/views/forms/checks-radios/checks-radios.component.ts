import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HumanRessourcesService} from "../../../services/human_ressources/human-ressources.service";

@Component({
    selector: 'app-checks-radios',
    templateUrl: './checks-radios.component.html',
    styleUrls: ['./checks-radios.component.scss']
})
export class ChecksRadiosComponent {

    formGroup = this.formBuilder.group({
        flexRadioGroup: this.formBuilder.group({
            flexRadioDefault: this.formBuilder.control('two')
        }),
        flexRadioGroupDisabled: this.formBuilder.group({
            flexRadioDefault: this.formBuilder.control({value: 'two', disabled: true})
        }),
        flexCheckGroup: this.formBuilder.group({
            checkOne: [false],
            checkTwo: [true]
        }),
        flexCheckGroupDisabled: this.formBuilder.group({
            checkThree: [{value: false, disabled: true}],
            checkFour: [{value: true, disabled: true}]
        }),
        btnCheckGroup: this.formBuilder.group({
            checkbox1: [true],
            checkbox2: [false],
            checkbox3: [{value: false, disabled: true}]
        }),
        btnRadioGroup: this.formBuilder.group({
            radio1: this.formBuilder.control({value: 'Radio2'})
        })
    });

    cube = {
        absenteisme: null,
        greve: null,
        recrutement: null,
        turn: null,
        date: null
    };
    position = 'top-end';
    visible = false;
    percentage = 0;

    constructor(
        private formBuilder: FormBuilder,
        private human_ressourcesService: HumanRessourcesService,
    ) {
    }

    setCheckBoxValue(controlName: string) {
        const btnCheckGroup = this.formGroup.controls['btnCheckGroup'];
        const prevValue = btnCheckGroup.get(controlName)?.value;
        const groupValue = {...btnCheckGroup.value};
        groupValue[controlName] = !prevValue;
        btnCheckGroup.patchValue(groupValue);
    }

    setRadioValue(value: string): void {
        const group = this.formGroup.controls['btnRadioGroup'];
        group.setValue({radio1: value});
    }


    addCube() {
        this.human_ressourcesService.postHumanRessources(this.cube).subscribe(value => {
            console.log(value);
            // add toast

        });
    }

}
