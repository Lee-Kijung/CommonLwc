/**
 * Created by ms on 2022-06-24.
 */

import LwcComBase from "c/lwcComBase";

export default class LwcCreateForm extends LwcComBase {
    handleSuccess(event){
        this.doToastNotification('Success', event.detail.apiName + ' 생성 완료.', 'success');
    }

}