radpy.ajax = {
    fileMap             :   {
        //Add
        MakeNewDocumentByDocDefId   :   {
            path    :   radpy.config.root+'Scripts/DocumentWebService.py',  
            params  :   { required : [], optional : ['Id', 'docType']}
        },
        MakeNewDocumentDefinition   :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',  
            params  :   { required : [], optional : ['label', 'docType', 'customToString']}
        },
        MakeNewFieldDefinition      :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : [], optional : ['label', 'fieldDataType', 'docType', 'defaultValue']}
        },
        AddFieldDefToDocDef         :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : ['json_string', 'fieldDefId'], optional : []}
        },
        
        //Update
        SaveDocument                :   {
            path    :   radpy.config.root+'Scripts/DocumentWebService.py',
            params  :   { required : ['json_string'], optional : []}},
        SaveDocumentDefinition      :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : ['DocumentDefinition'], optional : []}},
        SaveFieldDefinition         :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : ['json_string'], optional : []}},
        
        //Get
        GetDocumentById             :   {
            path    :   radpy.config.root+'Scripts/DocumentWebService.py',
            params  :   { required : ['Id'], optional : []}},
        GetDocumentsByDocDefId      :   {
            path    :   radpy.config.root+'Scripts/DocumentWebService.py',
            params  :   { required : ['IdList'], optional : []}},
        GetDocumentDefinitionById   :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : ['Id'], optional : []}},
        GetEntityNamesByDocDefId	:	{
        	path    :   radpy.config.root+'Scripts/DocumentWebService.py',
            params  :   { required : ['Id'], optional : []}},
        GetEntityNamesByDocType		:	{
            path    :   radpy.config.root+'Scripts/DocumentWebService.py',
	    	params  :   { required : [], optional : ['docType'] }},
		GetDocumentDefinitionByDocType: {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
	    	params  :   { required : [], optional : ['docType'] }},
        GetAllDocumentDefinitions      :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : [], optional : []}},
        GetDocDefList                   :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : [], optional : ['docType']}},
        GetAllFieldDefinitions      :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : [], optional : []}},
        GetFieldDefinitionById      :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : ['Id'], optional : []}},
        GetAllFieldDefinitionNames      :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : [], optional : []}},
        
        
        //Delete
        DeleteDocument              :   {
            path    :   radpy.config.root+'Scripts/DocumentWebService.py',
            params  :   { required : ['Id'], optional : []}},
        DeleteDocumentDefinition    :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : ['Id'], optional : []}},
        DeleteFieldDefinition       :   {
            path    :   radpy.config.root+'Scripts/DefinitionWebService.py',
            params  :   { required : ['Id'], optional : []}},
        
        //Transactions
        MakeNewTransactionFilter        :   {
            path    :   radpy.config.root+'Scripts/TransactionWebService.py',
            params  :   { required : [], optional : ['assetIdString', 'locationIdString', 'antennaIdString', 'docDefIdString', 'start', 'end']}},
        GetTransactions                 :   {
            path    :   radpy.config.root+'Scripts/TransactionWebService.py',
            params  :   { required : ['json_string'], optional : []}},
        GetAssetHistory                 :   {
            path    :   radpy.config.root+'Scripts/TransactionWebService.py',
            params  :   { required : ['assetId', 'json_string'], optional : []}},
        GetOverlappingAssetDictionary   :   {
            path    :   radpy.config.root+'Scripts/TransactionWebService.py',
            params  :   { required : ['assetId', 'json_string'], optional : []}},  
        GetGraphData                    :   {
            path    :   radpy.config.root+'Scripts/TransactionWebService.py',
            params  :   { required : ['assetId', 'json_string'], optional : []}},
	    GetAllTransactions		:   {
            path    :   radpy.config.root+'Scripts/TransactionWebService.py',
            params  :   { required : [], optional : []}},
	    SaveTransaction		:   {
            path    :   radpy.config.root+'Scripts/TransactionWebService.py',
            params  :   { required : ['tagNumber', 'readerId', 'antennaNumber'], optional : []}},
            
	//Table Top  
        SetInfectedStatus                    :   {
            path    :   radpy.config.root+'Scripts/TableTopWebService.py',
            params  :   { required : ['assetId', 'infectedStatus'], optional : []}},  
	    
        GetTableTopState                    :   {
            path    :   radpy.config.root+'Scripts/TableTopWebService.py',
            params  :   { required : [], optional : ['sendColorString']}}, 
	    GetTabletopGraphByAssetId			:   {
            path    :   radpy.config.root+'Scripts/TableTopWebService.py',
            params  :   { required : ['assetId'], optional : []}}, 
        GetMovie			:   {
            path    :   radpy.config.root+'Scripts/TableTopWebService.py',
            params  :   { required : [], optional : []}}, 
        ResetTableTop                    :   {
            path    :   radpy.config.root+'Scripts/TableTopWebService.py',
            params  :   { required : [], optional : []}}
            
    },
    mkcall              :   function(fn, data, callback, context){
        if(typeof radpy.ajax.fileMap[fn] !== 'undefined') {
            //merge params into new obj manually to check for required params and 
            //prevent users from adding in non-permitted params
            var params = {'method' : fn},
                index = '',
                missing = [];
                
            //Check/copy required params first
            for( var i in this.fileMap[fn].params.required) {
                index = this.fileMap[fn].params.required[i];
		if(typeof data === 'undefined' || typeof data[index] === 'undefined') {
                    params[index] = null;
                    missing.push(index);
                } else {
                    params[index] = data[index];
                }
            }		

            if(missing.length > 0) {
                //missing required params, throw error and return
                console.error('radpy.ajax.mkcall: missing required params \''+missing.join("', '")+'\'');
                return;
            }
            
            //all required params found, continue with optional params
	    if(typeof data !== 'undefined') {
		for( var i in this.fileMap[fn].params.optional) {
		    //order by params defined above to preserve param ordering (just in case)
		    index = this.fileMap[fn].params.optional[i];
		    if(typeof data[index] !== 'undefined') {
			params[index] = data[index];
		    }
		}
	    }
            
            var ajaxConfig = {
                type        :   'POST',
                url         :   this.fileMap[fn].path,
                contentType :   'application/json: charset=utf-8',
                dataType    :   'json',
                data        :   params,
                cache       :   false,
                async       :   true,
                error: function(xhr, status, error) {
		    console.log(xhr, status, error);
                    radpy.error(error);
                },
                success     :   function(response){
// 		  console.log(response);
                    if(typeof callback !== 'undefined') {
                        if(typeof context === 'undefined') context = this;
                        callback.call(context, response);
                    }
                }
            };
            if(typeof callback === 'undefined') {
	      ajaxConfig['async'] = false;
	    }
            
            //make ajax call
            return $.ajax(ajaxConfig);
        } else {
            console.error('Requested function "'+fn+'" does not exist.');
        }
    }
};