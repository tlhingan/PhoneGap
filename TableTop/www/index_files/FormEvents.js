radpy.display.formEvents = {
    fielddefinitionForm : {
        __defaultValueInputHTML :   '<input type="text" value="" style="" name="defaultValue">',
        updateDefaultValInput         :   function(form, fdType, fDocType){
            var defaultVal = form.find('[name="defaultValue"]'),
                fielddef = radpy.cache[form.attr('id')],
                fDataType = parseInt(typeof fdType !== 'undefined' ? fdType : fielddef.fieldDataType),
                fDocType = parseInt(typeof fDocType !== 'undefined' ? fDocType : form.find('#DocumentType :selected').val());
            var container = defaultVal.parent(),
                type = fDataType === 12 || fDataType === 15 ? fDocType : '-1',
                control = '';
        
            if(fDataType === 6 || fDataType === 8 || fDataType === 9 ) {
                console.log(fielddef.listOfValues);
            } else if(fDataType >= 11 && fDataType <= 16) {
                //fvDocument, fvGroups, fvItemList, fvDocList: get list of documents (container of Id, name, and docType?)
                    console.log(fDataType, (fDataType === 12 || fDataType === 15));
                    console.log(fDocType, type);
                if(!radpy.cache.hasOwnProperty('popup-documentList')) radpy.cache['popup-documentList'] = {};
                if(radpy.cache['popup-documentList'].hasOwnProperty(type)) {
                    control = radpy.cache['popup-documentList'][type].control;
                } else {
                    if(!radpy.cache['popup-documentList'].hasOwnProperty(type)) radpy.cache['popup-documentList'][type] = {};
                    var callback = function(data){
                        var opts = [], option = {};
                        
                        for(var i in data) {
                            option = {value : data[i].Id, display : data[i].label};
                            if(data[i].Id === fielddef.defaultValue) {
                                option['selected'] = true;
                            }

                            opts.push(option);
                        }

                        control = radpy.display.dom.select(jQuery.extend({}, radpy.display.dom.options.inputs, {options : opts, name: 'defaultValue'}));
                        radpy.cache['popup-documentList'][type]['data'] = data;
                        radpy.cache['popup-documentList'][type]['control'] = control;
                        container.empty().append(control);
                    };
                    control = radpy.ajax.mkcall('GetDocDefList', {docType : type}, callback, this);
                }
            } else {
                control = this.__defaultValueInputHTML.replace(/value=""/, 'value="'+fielddef.defaultValue+'"');
                container.empty();
                container.append(control);
            }
        },
        fieldDataTypeChanged    :   function () {
	    var form = $('#fieldDataTypeSelect').closest('form');
            if(!radpy.cache.hasOwnProperty(form.attr('id'))) {
		radpy.error('FieldDefinition not found in cache');
		return false;
	    }
            
            //get selected data type
            var selected = $('#fieldDataTypeSelect').find(":selected").val();
	    radpy.cache[form.attr('id')].fieldDataType = selected; //update cached value
	    //get current fielddef
	    var fielddef = radpy.cache[form.attr('id')],
		listOfValues = '';
	    
            //set proper docdef if its a data type that needs one and show the dof def
//            if(selected === '11' || selected === '12' || selected === '13' || selected === '14' || selected === '15') {
            $('#DocumentType').parent().find('span#auto').remove();
            if(selected >= 11 && selected <= 16) {
                //disable DocType dd if not Ref Doc or Container
                if(selected === '12' || selected === '15') {
                    $('#DocumentType').prop('disabled', false);
                } else {
                    $('#DocumentType').prop('disabled', 'disabled').parent().append('<span id="auto"> Doc Type will be determined automatically on save</span>');
                }
                var docDefSelection = '';
                $("#DocumentType > [value='" + docDefSelection + "']").attr("selected", "true");
                $('#DocumentType, label[for="DocumentType"]').show();
            } else {
                $('#DocumentType, label[for="DocumentType"]').hide();
                //cleanup from above
                $('#DocumentType').prop('disabled', false).parent().remove('span#auto');
            } 
            
            this.updateDefaultValInput(form);
        },
        fieldDocumentDefinitionChanged  :   function () {
            var form = $('#DocumentType').closest('form');
            this.updateDefaultValInput(form);
        },
        saveFieldDefinition				:	function() {
            if(!radpy.cache.hasOwnProperty(this.attr('id'))) {
                //throw error
                console.error('saveFieldDefinition: expected context of form with fielddef cache ID as id');
                return;
            }
            var fielddef = radpy.cache[this.attr('id')],
                formData = this.serialize().split('&'),
                data = {},  tmp = null;
		console.log(formData);

            //get form data
            for(var i in formData) {
                tmp = formData[i].split('=');
                data[tmp[0]] = tmp[1];
            }
            
            fielddef.label = data.label;
            fielddef.isTracked = typeof data.isTracked !== 'undefined' ? true : false;
            fielddef.defaultValue = data.defaultValue;
            fielddef.fieldDataType = data.fieldDataTypeSelect;
            
            return radpy.ajax.mkcall('SaveFieldDefinition', {json_string : JSON.stringify(fielddef)});
        }
    },
    newDocForm                  :   {
        createDocument                  :   function() {
            alert('create new form called');
        }
    },
    
    documentFormPopup		:   {
	saveEntity		:  function(entityField) {
	    console.log(this, entityField);
	},
	newEntity		:  function(tab, entityFieldName) {
	    var entityField = radpy.searchMethods.findFieldByFieldDefinitionLabel(radpy.cache['popup-document'], entityFieldName);
	    var newEntity = JSON.parse(radpy.ajax.mkcall('MakeNewDocumentByDocDefId', {Id : entityField.fieldDefinition.defaultValue}).responseText);
	    
	    //update popup cache:
	      for (var i in radpy.cache['popup-document'].fields) {
		if (radpy.cache['popup-document'].fields[i].Id === entityField.Id) {
		    if(typeof radpy.cache['popup-document'].fields[i].value.entities !== 'undefined') {
			radpy.cache['popup-document'].fields[i].value.entities[radpy.display.gridview.sizeOf(radpy.cache['popup-document'].fields[i].value.entities)] = newEntity;
		    } else {
			radpy.cache['popup-document'].fields[i].value.entities = [];
			radpy.cache['popup-document'].fields[i].value.entities.push(newEntity);
		    }
		    
		    console.log(typeof $(this).attr('id'));
		    if(typeof $(this).attr('id') !== 'undefined') {
			radpy.cache.gridviewData[$(this).attr('Id')].data.push({Id : newEntity.Id, isNew: newEntity.IsNew, label: newEntity.fields[0].value.value});
			var gv = radpy.display.gridview.createGridView(radpy.cache.gridviewData[$(this).attr('Id')].data, radpy.cache.gridviewData[$(this).attr('Id')].options);
		    } else {
			var gv = radpy.display.gridview.createGridView([{Id : newEntity.Id, isNew: newEntity.IsNew, label: newEntity.fields[0].value.value}]),
			    n = {
			      9: { label: '', content: '<input type="button" value="View/Edit" onclick="radpy.documentPopup.show(\'%Id%\');" />', style:'width: 250px' }
			    };
			    gv.addColumns(n);
		    }
		    
		    console.log(tab);
		    
		    $(this).remove();
		    tab.prepend(gv.getHTML());
		}
	    }
	  
	},
	groupEntity		:	function(tab, entityFieldName) {
	
	}
    },
    
    documentDefinitionForm      :   {
        saveDocumentDefinition          :   function() {
            if(!radpy.cache.hasOwnProperty(this.attr('id'))) {
                //throw error
                console.error('saveDocumentDefinition: expected context of form with docdef cache ID as id');
                return;
            }
            
            var docdef = radpy.cache[this.attr('id')],
                formData = this.serialize().split('&'),
                fieldDefs = [],
                data = {},  tmp = null;

            //get form data
            for(var i in formData) {
                tmp = formData[i].split('=');
                data[tmp[0]] = tmp[1];
            }

            //get fieldDefs
            $('#'+this.attr('id')+' #fielddef-active div').each(function() {
                if(radpy.cache['forms-fieldDefList'].hasOwnProperty($(this).attr('id'))) {
                    fieldDefs[fieldDefs.length] = radpy.cache['forms-fieldDefList'][$(this).attr('id')];
                }
            });

            docdef.label = data.label;
            docdef.type = data.type;
            docdef.customToString = data.customToString;
            docdef.fieldDefinitions = fieldDefs;
            console.log(docdef);
            
            //TODO: Make ajax call to save and display result
            try {
    			radpy.ajax.mkcall('SaveDocumentDefinition', {'json_string' : JSON.stringify(docdef)});
    		} catch(e) {
    			var err = '<b>saveDocumentDefinition:</b> An error has occurred. Error: "'+e+'"';
    			radpy.error(err);
    		}
            
            return false; 
        }
    }
}