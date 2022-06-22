/**
 * Created by ms on 2022-06-21.
 */

public with sharing class OrderNewForContract {
    public class InitData extends I2ComClass.InitData {
        @AuraEnabled public List<Product2> recordList {get;private set;}
    }

    @AuraEnabled(cacheable=true)
    public static InitData init(){
        InitData initData = new InitData();
        initData.recordList = [ SELECT id, Name, ProductCode, Description, Family FROM Product2];
        return initData;
    }
}