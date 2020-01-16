public with sharing class whitespaceController {

    @AuraEnabled(cacheable = true)
    public static List <Account> getAccountList(Id accountId) {

        List <Whitespace_Filter__c> listFilters = [SELECT Id, Name, Product__c, Product__r.Name FROM Whitespace_Filter__c ORDER BY Product__r.Name];

        List <Id> productIdList = new List <Id> ();

        for (Whitespace_Filter__c filts: listFilters) {
            productIdList.add(filts.Product__c);
        }

        List <Account> theReturnList = new List <Account>();

        theReturnList = [SELECT Id, Name, Industry, Type, ParentId, (SELECT AccountId, Id, Name, Product2Id FROM Assets WHERE Product2Id IN :productIdList) FROM Account WHERE Id =: accountId];

        theReturnList.addAll([SELECT Id, Name, Industry, Type, ParentId, (SELECT AccountId, Id, Name, Product2Id FROM Assets WHERE Product2Id IN :productIdList) FROM Account WHERE ParentId =: accountId ORDER BY Name]);

        return theReturnList;
    }

    @AuraEnabled(Cacheable = true)
    public static List < Whitespace_Filter__c > prodFilters() {
        return [SELECT Id, Name, Product__c, Product__r.Name FROM Whitespace_Filter__c ORDER BY Product__r.Name];
    }

}