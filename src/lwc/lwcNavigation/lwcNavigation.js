/**
 * Created by ms on 2022-06-24.
 */


import LwcComBase from "c/lwcComBase";

export default class LwcNavigation extends LwcComBase {

    handleLoad(){
        this.doNaviService({
            type: "standard__recordPage",
            attributes: {
            recordId: "00Q5h000009HN1kEAG",
            objectApiName: "Lead", // objectApiName is optional
            actionName: "view"
            }
        });
    }
}