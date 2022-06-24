/**
 * Created by ms on 2022-06-24.
 */


import LwcComBase from "c/lwcComBase";
import getLeads from '@salesforce/apex/LeadController.getLeads';

export default class LwcListForm extends LwcComBase {
    leads;

    handleLoad(){
        getLeads()
            .then(data => {
                this.leads = data;
            })
            .catch(error => {
                this.doApexErrorHandle(error);
            });
    }
}