/**
 * Created by ms on 2022-06-20.
 */
import { track} from 'lwc';
import LwcComBase from "c/lwcComBase";
import initData from '@salesforce/apex/OrderNewForContract.init';

const COLS = [
    {label : '제품 이름', fieldName : 'Name'},
    {label : '제품 코드', fieldName : 'ProductCode'},
    {label : '제품 내용', fieldName : 'Description'},
    {label : '제품 종류', fieldName : 'Family'}
]

export default class OrderNewForContract extends LwcComBase {
    @track targetObjectList = 'Order';
    @track labelOrder = {};
    @track cols = COLS;
    accountId = '';

    connectedCallback() {
        this.init();
    }

    init(){
        this.doGetSobjectData(this.targetObjectList).then(r => {
            this.labelOrder = this.labelMap.Order;
        });
        this.getInitData();
    }

     getInitData(){
        initData()
            .then(data => {
                this.recordList = data.recordList;
            })
            .catch(error => {
                this.doApexErrorHandle(error);
            });
    }

    moveSearchList(){
        if(this.accountId == '') {
            this.doToast('Warning','주문 고객을 선택해야 합니다.', 'w');
            return;
        }else{

        }
    }

    naviService(){
        this.doNaviService({
            type: "standard__recordPage",
            attributes: {
                recordId: "0015h00000oHW92AAG",
                objectApiName: "Account", // objectApiName is optional
                actionName: "view"
            }
        });
    }

    handleChange(event){
        this.accountId = event.target.value;
    }
}