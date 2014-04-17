/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

radpy.enums = {
    reverseLookup   :   function(value){
        //Known naming convention for FieldDataType, check this first if 'fv' is found in name
        if(value.indexOf('fv') !== -1) {
            for(var i in this.FieldDataType) {
                //Make sure that checked value is actually in the FieldDataType enum
                if(this.FieldDataType[i] === value) {
                    return this.FieldDataType;
                }
            }
        }
        //Check everything else
        for(var i in this) {
            //ignore current method
            if(i === 'reverseLookup') continue;
            
            //Check for enum value in each enum
            for(var j in this[i]) {
                if(this[i][j] === value) {
                    return this[i];
                }
            }
        }
        
        return -1; //not found
    },
    ReaderStatus: {
         Inactive: 0,
         Checking: 1,
         Active: 2
     },

     ReaderAPIType  :   {
         Alien: 0,
         Symbol: 1,
         TexasInstraments: 2,
         DTR: 3,
         Impinj: 4,
         None: 100
     },

     ReaderType     :    {
         ExternalRFID: 0,
         BridgedRFID: 1,
         ExternalRFIDGateway: 2,
         Drone: 3,
         Child: 4,
         Server: 5
     },

     ActionType     :   {
         None: 0,
         Get: 1,
         Send: 2,
         Load: 3,
         Update: 4,
         Save: 5
     },
     StepType       :   {
         Trigger: 0,
         Condition: 1,
         Action: 2,
         End: 3
     },
     ConditionType  :   {
         None: 0,
         Any: 1,
         Equals: 2,
         Between: 3,
         GreaterThan: 4,
         GreaterThanOrEqual: 5,
         LessThan: 6,
         LessThanOrEqual: 7,
         InList: 8,
         NotEqual: 9,
         NotInList: 10
     },

     EventType      :   {
         TagRun: 0,
         Write: 1
     },
     FieldDataType  :   {
         fvString: 0,
         fvInteger: 1,
         fvFloat: 2,
         fvDateTime: 3,
         fvBit: 4,
         fvGUID: 5,
         fvSelectString: 6,
         fvFile: 7,
         fvSelectFloat: 8,
         fvSelectInteger: 9,
         fvText: 10,
         fvDocument: 11,
         fvReferenceDocument: 12,
         fvGroups: 13,
         fvDocumentList: 14,
         fvContainer: 15,
         fvItemList: 16
     },

     DocumentType   :   {
         Asset: 0,
         Tag: 1,
         Reader: 2,
         Location: 3,
         Antenna: 4,
         Groups: 5,
         Circle: 6,
         Sensor: 7,
         Event: 8,
         Field: 99
     },

     BDOType        :   {
         NotSet: -1,
         Document: 0,
         DocumentDefinition: 1,
         Field: 2,
         FieldDefinition: 3,
         FieldValue: 4,
         Groups: 5,
         Workflow: 6
     }
};

