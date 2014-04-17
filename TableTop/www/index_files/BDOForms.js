/**
 * Forms
 * ------------------------------------------------------------------------------------------
 */
radpy.display.dom.newDocForm = function(options, filter) {
    if(typeof options === 'undefined') options = this.options;
    if(typeof filter === 'undefined') filter = false;
    this.__loadOptions(options)
    this.options.inputs.descriptionList = true;

    var inputs = '',
        form = this.form(options),
        data = JSON.parse(radpy.ajax.mkcall('GetAllDocumentDefinitions').responseText),
        docDefs = [];

    for(var i in data) {
        docDefs.push({display: data[i].label, value: data[i].Id});
    }
    
    inputs += this.select( jQuery.extend( {}, this.options.inputs, {options:docDefs, style:'float:left;'}));
    inputs += this.input( jQuery.extend( {}, this.options.inputs, {
        style: 'float: right; margin: 1em 5ex;',
        name: 'createDocument', 
        type: 'button', 
        value: filter ? 'GetDocuments' : 'Create New Document'
        /*,
        events: [{ 'createDocument' : {
            event : 'onClick', 
            fn : 'radpy.display.formEvents.newDocForm.createDocument.call(this)'}}]*/
    }) );
    
    return this.appendToDom('form', form, inputs);
};

radpy.display.dom.documentForm = function(doc, options){
    if(typeof options === 'undefined') options = this.options;

    options['tag'] = 'form';
    if(typeof options.id !== 'undefined' || options.id === ''){
        options['id'] = doc.Id;
    }
    options.inputs.descriptionList = true;

    this.__loadOptions(options);
    var inputs = '',
        form = this.form(options);

    //Add inputs for DocDef data type
    //inputs += this.input( jQuery.extend({}, this.options.inputs, {name:'test', id:"test", value:'test', events}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {name:'Id', type:'hidden', value:doc.Id}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {name:'IsNew', type:'hidden', value:doc.IsNew}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {
        name:'documentDefinition', 
        id: doc.documentDefinition.Id, 
        label: 'documentDefinition', 
        disabled: true,
        value: doc.documentDefinition.label
    }) );
    
    var formItems = [], opts;
    
    for(var i in doc.fields) {
        var tempFieldInput = this.fieldInput(doc.fields[i]);
        
        if(typeof tempFieldInput === "string") {
            inputs += tempFieldInput;
        } else {
            formItems.push(tempFieldInput);
        }
    }

    //TODO: create dropdown for field defs to be added to doc def(?)
    if(formItems.length === 0) {
        return this.appendToDom('form', form, inputs);
    } else {
        formItems.unshift(this.appendToDom('form', form, inputs));
        return formItems;
    }
};


radpy.display.dom.documentdefinitionForm = function(docdef, options, dom){
    if(typeof options === 'undefined') options = this.options;
    else this.__loadOptions(options);

    this.options.tag = 'form';
    this.options.inputs.descriptionList = true;
    if(typeof this.options['id'] !== 'undefined' || this.options['id'] === ''){
        this.options['id'] = docdef.Id;
    }
    //cache the docdef to use when saving
    radpy.cache[this.options.id] = docdef;
    var saveOverridden = false,
        event = null,
        saveMethod = {   
            event : 'onSubmit', 
            fn : 'radpy.display.formEvents.documentDefinitionForm.saveDocumentDefinition.call($(this))'};;
    if(radpy.display.gridview.sizeOf(this.options.events)) {
        if(radpy.isArray(this.options.events)) {
            //case: events = [{event, fn}(,{event, fn})]
            for(var i in this.options.events) {
                if(typeof this.options.events[i] === 'undefined') { console.log(i); break; } //something's gone wrong with events, don't parse
                if(typeof this.options.events[i]['event'] !== 'undefined' && this.options.events[i]['event'] === 'onSubmit') {
                    saveOverridden = true;
                }
            }
            if(!saveOverridden) {
                this.options.events[this.options.id].push(saveMethod);
            }
        } else {
            if(this.options.events.hasOwnProperty('event') ) {
                //case: events = {event, fn}
                if(this.options.events.event !== 'onSubmit') {
                    event = this.options.events;
                    this.options.events = [event, saveMethod];
                }
            } else if(this.options.events.hasOwnProperty(this.options.id)) {
                if(this.options.events[this.options.id].hasOwnProperty('event')) {
                    //case: events = {id: {event, fn} }
                    if(this.options.events[this.options.id]['event'] !== 'onSubmit') {
                        event = this.options.events[this.options.id];
                        this.options.events[this.options.id] = [event, saveMethod];
                    }
                } else {
                    //case: events = {id: [{event, fn}] }
                    for(var i in this.options.events[this.options.id]) {
                        if(typeof this.options.events[this.options.id][i] === 'undefined') break;   //Should never happen...
                        if(!this.options.events[this.options.id][i].hasOwnProperty('event')) continue;//Should never happen...
                        if(this.options.events[this.options.id][i]['event'] === 'onSubmit') {
                            saveOverridden = true;
                        }
                    }
                    if(!saveOverridden) {
                        this.options.events[this.options.id].push(saveMethod);
                    }
                }
            } //end if(this.options.events.hasOwnProperty(this.options.id))
        }
    } else {
        //case: events = {} or []
        this.options.events = saveMethod;
    }
    
    var inputs = '',        form = this.form(),
        tempItem = null,    selectList = [],
        active = "",
        inactive = "",
        opts = {
            'label' :   'Field Data Type',
            'id'    :   'fieldDataTypeSelect',
            'name'  :   'type'
        },
        script = '<script>$(".fd-list").sortable({ connectWith: ".fd-list", cursor: "pointer", items: "div" });</script>';

    //build document type dd
    for(var item in radpy.enums.DocumentType) {
        tempItem = {value : radpy.enums.DocumentType[item], display: item};
        if(docdef.type !== null && docdef.type === radpy.enums.DocumentType[item]) {
            tempItem['selected'] = true;
        }
        selectList.push(tempItem);
    }
    opts['options'] = selectList;

    inputs += this.input( jQuery.extend({}, this.options.inputs, {name:'Id', type:'hidden', value:docdef.Id}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {name:'IsNew', type:'hidden', value:docdef.IsNew}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {name:'label', value:docdef.label, label:'Document Definition Label'}) );
    //inputs += this.select( jQuery.extend({}, this.options.inputs, opts) );
    inputs += this.domElement( jQuery.extend({}, this.options.inputs, {name: 'customToString', label: 'Custom To String', tag: 'textarea', content: docdef.customToString}) );

    /* Need to create:
    <div id="fielddef-container">
        <div id="fielddef-inactive" class="fd-list">...</div>
        <div id="fielddef-active" class="fd-list">...</div>
    </div>
    <script>...</script>
    */
   //cache field def info
    radpy.cache['forms-fieldDefList'] = {};
    for(var fd in docdef.fieldDefinitions){
        radpy.cache['forms-fieldDefList'][docdef.fieldDefinitions[fd].Id] = docdef.fieldDefinitions[fd];
        active += '<div id="'+docdef.fieldDefinitions[fd].Id+'">'+docdef.fieldDefinitions[fd].label+'</div>';
    }

    //TODO: Build list of inactive (not including FDs in active list) and add to cache
    var data = JSON.parse(radpy.ajax.mkcall('GetAllFieldDefinitions').responseText);
    for(var i in data) {
    	if(!radpy.cache['forms-fieldDefList'].hasOwnProperty(data[i].Id)) {
    		radpy.cache['forms-fieldDefList'][data[i].Id] = data[i];
    		inactive += '<div id="'+data[i].Id+'">'+data[i].label+'</div>';
    		
    	}
    }
    
    inputs += '<div id="fielddef-container"><span>Field Definitions</span>'
        + '<div id="fielddef-inactive" class="fd-list"><h3>Inactive</h3>' + inactive + '</div>'
        + '<div id="fielddef-active" class="fd-list"><h3>Active</h3>' + active + '</div></div>';

    inputs += this.input(jQuery.extend({}, this.options.inputs, {id: this.options.id+'_submit', name: 'submit', type: 'submit', value: 'Save'}));

    return this.appendToDom('form', form, inputs) + script;
};

radpy.display.dom.fielddefinitionForm = function(fielddef, options){
    if(typeof options === 'undefined') {
        options = this.options;
    }

    //cache field def for save methods
    radpy.cache[fielddef.Id] = fielddef;
    options.tag = 'form';
    if(typeof options['id'] !== 'undefined' || options['id'] === ''){
        options['id'] = fielddef.Id;
    }

    this.__loadOptions(options);
    this.options.inputs.descriptionList = true;
    var inputs = '',
        form = this.domElement(options);

    //Id, label, isTracked, Default Value
    inputs += this.input( jQuery.extend({}, this.options.inputs, {name:'Id', type:'hidden', value:fielddef.Id}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {name:'IsNew', type:'hidden', value:fielddef.IsNew}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {label: 'label', name:'label', value:fielddef.label}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {label: 'isTracked', type: 'checkbox', name:'isTracked', value:fielddef.isTracked}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {label: 'defaultValue', name:'defaultValue', value:fielddef.defaultValue}));

    //FieldDataType
    var tempItem = null,
    	selectList = [],
    	opts = {
	    id			:	'fieldDataTypeSelect',
	    name		:	'fieldDataTypeSelect',
	    label		:	'fieldDataType'
    };
    
    //SK 2013-08-04: Moved events to object options to prevent user-configured options from being overwritten
    //var opts = {events : { 'fieldDataTypeSelect' : {event : 'onChange', fn : 'radpy.display.formEvents.fielddefinitionForm.fieldDataTypeChanged.call(this)'}}};
    var script = '';
    this.options.inputs.events['fieldDataTypeSelect'] = {event : 'onChange', fn : 'radpy.display.formEvents.fielddefinitionForm.fieldDataTypeChanged()'};
    this.options.inputs.events['DocumentType'] = {event : 'onChange', fn : 'radpy.display.formEvents.fielddefinitionForm.fieldDocumentDefinitionChanged()'};

    for(var item in radpy.enums.FieldDataType) {
        tempItem = {
    		value 		: radpy.enums.FieldDataType[item], 
    		display		: item,
    		selected	: fielddef.fieldDataType !== null 
                                        && fielddef.fieldDataType === radpy.enums.FieldDataType[item]
        };
        selectList.push(tempItem);
    }
    opts['options'] = selectList;
    inputs += this.select( jQuery.extend({}, this.options.inputs, opts) );

    //DocumentDefinition, DocumentType
    selectList = [];
    //opts = {events : { 'DocumentType' : {event : 'onChange', fn : 'radpy.display.formEvents.fielddefinitionForm.fieldDocumentDefinitionChanged.call(this)'}}};
    for(var item in radpy.enums.DocumentType) {
        tempItem = {
	    display		: 	item, 
	    value 		: 	radpy.enums.DocumentType[item],
	    selected		:	fielddef.fieldDataType !== null 
					    && fielddef.fieldDataType === radpy.enums.DocumentType[item]
        };
        
        selectList.push(tempItem);
    }
    opts = {
	id			:	'DocumentType',
	options			:	selectList,
	name			:	'DocumentType',
	label			:	'DocumentType',
 	style			:	'display:none',
 	labelStyle		:	'display:none'
    };
    
    //Case 1: FieldDef is of type FVReferenceDoc (12) or fvDocumentList (14)
    inputs += this.select( jQuery.extend({}, this.options.inputs, opts) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {label: '', name:'docType', type:'hidden', value:fielddef.docType}) );
    inputs += this.input( jQuery.extend({}, this.options.inputs, {label: '', id: this.options.id+'_submit', name: 'submit', type: 'submit', value: 'Save', style : 'margin-left: 75ex;' }) );

    return this.appendToDom('form', form, inputs) + script;
};

/**
 * Update methods (cache documents, not DB)
 * ------------------------------------------------------------------------------------------
 */

radpy.display.dom.updateField = function(field) {
    switch (field.fieldDefinition.fieldDataType) {
        case 0:
        case 5:
        case 10:
            field.value.value = $('input[name="' + field.value.Id + '"]').val();
            break;
        case 1:
            field.value.value = parseInt($('input[name="' + field.value.Id + '"]').val());
            break;
        case 2:
            field.value.value = parseFloat($('input[name="' + field.value.Id + '"]').val());
            break;
        case 3:
            field.value.value = radpy.dateFormat($('input[name="' + field.value.Id + '"]').val());
            break;
        case 4:
            var bitTest = $('input[name="' + field.value.Id + '"]').prop('checked');
//             if (bitTest === "false") {
                field.value.value = bitTest;
//             } else {
//                 field.value.value = true;
//             }
            break;
        case 6:
        case 8:
        case 9:
            var selectId = $('select[name="' + field.value.Id + '"] option:selected').val();
            for (var i = 0; i < field.fieldDefinition.listOfValues.length; i++) {              
                if (field.fieldDefinition.listOfValues[i].Id === selectId) {
                    field.value = field.fieldDefinition.listOfValues[i];
                    break;
                }
            }
            break;
        case 7:
            //TODO: Fix Me
            break;
        case 11:
        case 12:
            var selectId = $('select[name="' + field.value.Id + '"] option:selected').val();
            for (var i = 0; i < field.fieldDefinition.listOfValues.length; i++) {
                if (field.fieldDefinition.listOfValues[i].Id === selectId) {
                    field.value = field.fieldDefinition.listOfValues[i];
                    break;
                }
            }
            break;
        case 13:
        case 14:
            break;
    }
    switch (field.fieldDefinition.fieldDataType) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 10: 
            if (field.fieldDefinition.IsTracked === true) {
                field.history.push(field.value);
            } else {
                field.history = new Array();
                field.history.push(field.value);
            }
            break;
    }
    return field;
};

radpy.display.dom.updateDocument = function(document) {
    var fields = []; //keeps updated fields and existing fields seperate until update complete... may not be required
    for (var i = 0; i < document.fields.length; i++) {
        fields[i] = this.updateField(document.fields[i]);
    }
    document.fields = fields;
    console.log(document);
    return document;
};