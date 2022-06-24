/**
 * Created by ms on 2022-06-23.
 */

import {LightningElement, api} from 'lwc';

export default class DragAndDrop extends LightningElement {
    @api copyElement;
    @api labelElement;
    @api inputFieldElement;

    divId;



    drag(event){
        event.dataTransfer.setData("divId", event.target.id);
    }
    allowDrop(event){
        event.preventDefault();
    }
    drop(event){
        event.preventDefault();
        this.divId = event.dataTransfer.getData("divId");

        if(this.divId == 'label'){

        }else if(this.divId == 'inputField'){

        }

        //this.draggedElement = this.template.querySelector('#' +divId);

        event.target.appendChild(this.draggedElement.cloneNode(true));
    }
}