/**
 * Created by ms on 2022-06-24.
 */

import {LightningElement} from 'lwc';

export default class LwcQuickAction extends LightningElement {

    header = 'The modal header';

    handleHeaderChange(event) {
        this.header = event.target.value;
    }

    handleShowModal() {
        const modal = this.template.querySelector('c-lwc-com-quick');
        modal.show();
    }

    handleCloseModal() {
        const modal = this.template.querySelector('c-lwc-com-quick');
        modal.hide();
    }
}