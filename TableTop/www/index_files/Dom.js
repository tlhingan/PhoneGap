/**
 * Display classes: Dom
 * ------------------------------------------------------------------------------------------
 */
radpy.display.dom = {
    options                 :   {
        inputs      :   {
            events      :   {}, //format: Id : [{event : jsEventName, fn : function}]
            configById  :   {}, //format: Id : {property : value}
            codeBefore  :   '',
            codeAfter   :   '',
            labelClass  :   '', //applied to all inputs
            labelStyle  :   '', //applied to all inputs
            'class'     :   '',
            style       :   '',
            descriptionList : false
        },
        events      :   {},
        codeBefore  :   '',
        codeAfter   :   '',
        id          :   '',
        'class'     :   '', //quoted because IE8 is dumb...
        name        :   '',
        method      :   '',
        action      :   '',
        style       :   '',
        legend      :   ''
    },
            
    /**
     * Overwrites values of this.options with param options
     * @param Object options
     * @returns void
     */
    __loadOptions           :   function(options) {
        for(var i in this.options) {
            if(typeof options[i] !== 'undefined'){
                if(i === 'inputs') {
                  this.options[i] = jQuery.extend({}, this.options.inputs, options[i]);  
                } else {
                    this.options[i] = options[i];
                }
            }
        }
    },

/**
 * Base DOM elements
 * ------------------------------------------------------------------------------------------
 */
 
 /**
  * Creates a dom element with configured attributes and content
  * @param Object opts Dom attributes (such as class, id, etc)
  * @returns String
  */
    domElement              :   function(opts) {
        if(typeof opts === 'undefined') options = this.options;
        if(opts.tag === 'undefined') opts['tag'] = 'div';
        var dom = this.__domStarter(opts.tag, null, opts) + '>';
        
        if(dom.indexOf('</' + opts.tag + '>') === -1) {
            dom += '</' + opts.tag + '>';
        }

        if(typeof opts.content !== 'undefined' && dom.indexOf('><') !== -1) {
            dom = this.appendToDom(opts.tag, dom, opts.content);
        }
        return (opts.codeBefore.length > 0 ? opts.codeBefore : '')
            + dom
            + (opts.codeAfter.length > 0 ? opts.codeAfter : '');
    },
        
    /**
     * Creates a form input element with configured attributes
     * @param Object opts (optional)(default: this.options.inputs) Input attributes (including value)
     * @returns String
     */    
    input                   :   function(opts){
        if(typeof opts === 'undefined') opts = this.options.inputs;
        else opts = jQuery.extend({}, this.options.inputs, opts);
        if(typeof opts['type'] === 'undefined') opts['type'] = 'text';
        if(typeof opts['descriptionList'] === 'undefined') {
            opts['descriptionList'] = opts['type'] !== 'hidden' ? true : false;
        }
        
        var input = this.__domStarter('input', opts.type, opts);
        input += ''
	    + (typeof opts.value !== 'undefined' ? 
		  (opts.hasOwnProperty('type') && opts.type === 'checkbox' && opts.value? ' checked="checked"' : ' value="' + opts.value + '"')
		  : '')
	    + ' />'
            + (opts['descriptionList'] ? '</dt>' : '');
    
        return (typeof opts.codeBefore !== 'undefined' && opts.codeBefore.length > 0 ? opts.codeBefore : '')
            + input
            + (typeof opts.codeAfter !== 'undefined' && opts.codeAfter.length > 0 ? opts.codeAfter : '');
    },
        
    /**
     * Creates a form input element with configured attributes
     * @param Object opts Select attributes
     * @returns String
     */ 
    select                  :   function(opts){
        //SK 2013-08-07: As options are either set or pulled from this.options.inputs 
        //for inputs (above), the below code will assume that select-specific options (ie. opts.options)
        //have been merged with base input options by the caller.
        if(typeof opts === 'undefined') {
            //select requires it's own options to function
            console.error('radpy.display.dom.select: options not set for select.');
            return;
        }
        
        var input = this.__domStarter('select', null, opts) + '>';
        for(var i in opts.options){
            input += '<option value="' + opts.options[i].value + '"'
                + (typeof opts.options[i].selected === 'undefined' || !opts.options[i].selected ? '' : ' selected="selected"')
                + '>' 
                + (typeof opts.options[i].display !== 'undefined' ? opts.options[i].display : opts.options[i].value) 
                + '</option>';
        }
        
        return (opts.codeBefore.length > 0 ? opts.codeBefore : '')
            + input + '</select>'
            + (opts.hasOwnProperty('descriptionList') && opts.descriptionList ? '</dt>' : '')
            + (opts.codeAfter.length > 0 ? opts.codeAfter : '');
    },
        
    /**
     * Creates a form element with configured attributes (Note: inputs should be added with the appendToDom fn)
     * @param Object opts Form attributes
     * @returns String
     */    
    form                    :   function(opts){
        if(typeof opts !== 'undefined') {
            //override object options with passed options
            this.__loadOptions(opts); 
        }

        return (this.options.codeBefore.length > 0 ? this.options.codeBefore : '')
            + '<fieldset>'
            + (this.options.hasOwnProperty('legend') && this.options.legend.length > 0 ? 
                '<legend>'+this.options.legend+'</legend>' : '')
            + this.__domStarter('form') + '></form>'
            + '</fieldset>'
            +(this.options.codeAfter.length > 0 ? this.options.codeAfter : '');
    },
        
    /**
     * Inserts designated content into domString (example: let domString = "<div></div>" and content = "blah"; then result will be "<div>blah</div>")
     * @param string tag The dom element tag
     * @param String domString The string representation of a DOM element
     * @param String content The content to be appended to the DOM element
     * @returns String
     */         
    appendToDom             :   function(tag, domString, content){
        var elementEnd = domString.indexOf('</' + tag + '>');
        return domString.substring(0, elementEnd) 
            + (this.options.inputs.hasOwnProperty('descriptionList') && this.options.inputs.descriptionList && tag === 'form' ? 
                '<dl>' : '')
            + content
            + (this.options.inputs.hasOwnProperty('descriptionList') && this.options.inputs.descriptionList && tag === 'form' ? 
                '</dl>' : '')
            + domString.substring(elementEnd);
    },
            
    __domStarter          :   function(tag, type, opts) {
    	//console.log(opts);
        if(typeof opts === 'undefined') opts = this.options;
        var inputClass = opts['class'],
            labelClass = '',
            inputOpts = {};
        //get custom input configuration
        if(typeof opts.id !== 'undefined' && typeof opts.inputs !== 'undefined'){
            if(typeof opts.inputs.configById[opts.id] !== 'undefined') {
                inputOpts = opts.inputs.configById[opts.id];
            }
        }

        if(typeof inputOpts['class'] !== 'undefined') {
            inputClass += inputOpts['class']
            + (inputOpts.hasOwnProperty('required') && inputOpts.required ? ' required' : '');
        }
        
        if (typeof opts['labelClass'] !== 'undefined' && radpy.trim(opts.labelClass) !== '') {
            labelClass += opts['labelClass'];
        }
        
        if(inputOpts.hasOwnProperty('required') && inputOpts.required) {
            labelClass += (labelClass.length > 0 ? ' ' : '') + 'required';
            inputClass += (inputClass.length > 0 ? ' ' : '') + 'required';
        }
        
        var dom = (typeof opts.codeBefore !== 'undefined' ? opts.codeBefore : '')
            + (typeof opts.label === 'undefined' ?
                '' :
                (opts.hasOwnProperty('descriptionList') && opts.descriptionList ? '<dd>' : '')
                + '<label'
                + (typeof opts.name !== 'undefined' && radpy.trim(opts.name) !== '' ? ' for="'+opts.name+'"' : '')
                + (labelClass.length > 0 ? ' class="'+labelClass+'"' : '')
                + (opts.labelStyle.length > 0 ? ' style="'+opts.labelStyle+'"' : '')
                + '>' + opts.label + '</label>'
                + (opts.hasOwnProperty('descriptionList') && opts.descriptionList ? '</dd>' : ''))
            + (opts.hasOwnProperty('descriptionList') && opts.descriptionList ? '<dt>' : '')
            + '<' + tag 
            + (tag === 'input' && typeof type !== 'undefined' && type !== null ? ' type="' + type + '"' : '')
            + (typeof opts.id !== 'undefined' ? ' id="' + opts.id + '"' : '')
            + (typeof opts.method !== 'undefined' ? ' method="' + opts.method + '"' : '')
            + (typeof opts.action !== 'undefined' ? ' action="' + opts.action + '"' : '')
            + (typeof opts.name !== 'undefined' ? ' name="' + opts.name  + '"' : '')
            + (typeof opts.multiple !== 'undefined' && opts.multiple ? ' multiple="multiple"' : '')
            + (typeof opts.inputClass !== 'undefined' && inputClass.length > 0 ? ' class="' + inputClass + '"' : '')
            + (typeof opts.style !== 'undefined' ? ' style="' + opts.style  + '"' : '')
            + ( (typeof opts.disabled !== 'undefined' && opts.disabled) 
                    || (typeof inputOpts.disabled !== 'undefined' && inputOpts.disabled)  ? 
                        ' disabled="disabled"' : '');

        //Allow user to set a bunch of events or a single event (ignore empty objects)
        if(radpy.isArray(opts.events) && opts.events.length > 0) {
            //case: events = [{event, fn}(,{event, fn})]
            for(var x in opts.events) {
                if(typeof opts.events[x] === 'undefined') { 
                    //something's gone wrong with events, don't parse
                    console.log('events['+x+'] undefined'); break; 
                } 
                if(typeof opts.events[x]['event'] !== 'undefined') {
                    dom += ' ' + opts.events[x].event + '="' + opts.events[x].fn + '"';
                }
            }
        } else if(radpy.display.gridview.sizeOf(opts.events) > 0){
            if(opts.events.hasOwnProperty('event') ) {
                //case: events = {event, fn}
                dom += ' ' + opts.events.event + '="' + opts.events.fn + '"';
            } else if(opts.events.hasOwnProperty(opts.id)) {
                if(opts.events[opts.id].hasOwnProperty('event')) {
                    //case: events = {id: {event, fn} }
                    dom += ' ' + opts.events[opts.id].event + '="' + opts.events[opts.id].fn + '"';
                } else if(radpy.isArray(opts.events[opts.id])) {
                    //case: events = {id: [{event, fn}] }
                    for(var y in opts.events[opts.id]) {
                        dom += ' ' + opts.events[opts.id][y].event + '="' + opts.events[opts.id][y].fn + '"';
                    }
                }
            }
        }
        
        return dom;
    },

/**
 * Field-specific DOM elements
 * ------------------------------------------------------------------------------------------
 */            
    /**
     * Creates string for input given field (JSON decoded) object
     * @param Object fieldDef
     * @param String labelOverride
     * @returns String
     */
    fieldInput                :   function(field, opts, nameOverride){
        //Make sure a field has been passed
        if(typeof field.fieldDefinition === 'undefined') {
            console.error('radpy.display.dom.fieldInput: Not given field object (no FieldDefinition attribute found)');
            return '';
        }
        
        //Account for bad data: field value cannot be null
        if(typeof field.value === null) {
            console.error('radpy.display.dom.fieldInput: Field '+field.Id+' value is null');
            return '';
        }
        if(typeof opts === 'undefined') opts = this.options.inputs;
        
        //make sure parameter is named, but allow for override
        opts['name'] = typeof nameOverride === 'undefined' ? field.value.Id : nameOverride;
        if(field.fieldDefinition.fieldDataType === 4) opts['type'] = 'checkbox';
	else opts['type'] = 'text';
            
        if(field.fieldDefinition.fieldDataType === 6 || field.fieldDefinition.fieldDataType === 8 || field.fieldDefinition.fieldDataType === 9  ||
            field.fieldDefinition.fieldDataType === 11 || field.fieldDefinition.fieldDataType === 12) {
            //FieldDef requires select type input, get that
            return this.fieldSelect(field, opts);
        } else if(field.fieldDefinition.fieldDataType === 13 || field.fieldDefinition.fieldDataType === 14) {
            var ds = [];
            
            for(var q in field.value.entities) {
                ds.push({Id: field.value.entities[q].Id, isNew : field.value.entities[q].IsNew, label: field.value.entities[q].fields[0].value.value});
            }
            var n = {
                9: { label: '', content: '<input type="button" value="View/Edit" onclick="radpy.documentPopup.show(\'%Id%\');" />', style:'width: 250px' }
            };
            
            var gv = radpy.display.gridview.createGridView(ds),
                k = {};
            if(typeof gv !== 'undefined') {
                gv.addColumns(n);
                k[field.value.label] = gv;
            } else {
                k[field.value.label] = '';
            }
            return k;
        } else if(field.fieldDefinition.fieldDataType === 16){
		var ds = [];
            
            for(var q in field.value.entities) {
                ds.push({Id: field.value.entities[q].Id, isNew : field.value.entities[q].IsNew, label: field.value.entities[q].fields[0].value.value});
            }
            var n = {
                9: { label: '', content: '<input type="button" value="View/Edit" onclick="radpy.documentPopup.show(\'%Id%\');" />', style:'width: 250px' }
            };
            
            var gv = radpy.display.gridview.createGridView(ds),
                k = {};
            if(typeof gv !== 'undefined') {
                gv.addColumns(n);
                k[field.value.label] = gv;
            } else {
                k[field.value.label] = '';
            }
            return k;
		}
        
        return this.__fieldInputStarter('input', field, opts) 
	    + (typeof field.value.value !== 'undefined' ? 
		  (opts.hasOwnProperty('type') && opts.type === 'checkbox' && field.value.value && field.value.value.toLowerCase() !== 'false'? ' checked="checked"' : ' value="' + field.value.value + '"')
		  : '')
//             + ' value="' + field.value.value +'"'
// 	    + (opts.hasOwnProperty('type') && opts.type === 'checkbox' && field.value.value? ' checked="checked"' : '')
            + ' />'
            + (opts.hasOwnProperty('descriptionList') && opts.descriptionList ? '</dt>' : '')
            + (typeof  this.options.inputs.codeAfter !== 'undefined' ?  this.options.inputs.codeAfter : '');
    },
            
    /**
     * Creates string for select input given field definition (JSON decoded) object
     * @param Object fieldDef
     * @param String labelOverride
     * @returns String
     */
    fieldSelect               :   function(field, opts, nameOverride) {
        //Make sure a field has been passed
        if(typeof field.fieldDefinition === 'undefined') {
            console.error('radpy.display.dom.fieldSelect: Not given field object (no FieldDefinition attribute found)');
            return;
        }
        
        //Account for bad data: field value cannot be null
        if(typeof field.value === null) {
            console.error('radpy.display.dom.fieldSelect: Field '+field.Id+' value is null');
            return '';
        }
        if(typeof opts === 'undefined') opts = this.options.inputs;
        
        //make sure parameter is named, but allow for override
        opts['name'] = typeof nameOverride === 'undefined' ? field.value.Id : nameOverride;
        
        var value = null,
            select = this.__fieldInputStarter('select', field, opts) + '>';
    
        for(var i in field.fieldDefinition.listOfValues) {
            value = field.fieldDefinition.listOfValues[i];
            select += '<option value="' + value.Id + '"'
                + (field.value.Id === value.Id ? ' selected="selected"' : '') + '>';
            
            if(field.fieldDefinition.fieldDataType === 11 || field.fieldDefinition.fieldDataType === 12) {
                select += value.fields[0].value.value;
            } else {
                //if (fieldDef.type == 6 || fieldDef.type == 8 || fieldDef.type == 9)
                select += value.value;
            }
            select += '</option>';
        }
        
        select += '</select>'
            + (opts.hasOwnProperty('descriptionList') && opts.descriptionList ? '</dt>' : '') 
            + (typeof  this.options.inputs.codeAfter !== 'undefined' ?  this.options.inputs.codeAfter : '');
        return select;
    },
            
    __fieldInputStarter       :   function(tag, field, opts){
        if(typeof opts === 'undefined') opts = this.options.inputs;
        
        //input type defaults
        if(typeof opts.type === 'undefined' && tag === 'input') {
            opts['type'] = 'text';
        }
        
        var inputClass = opts['class'],
            labelClass = '',
            inputOpts = {};
    
        //get custom input configuration
        if(typeof opts.configById[field.Id] !== 'undefined') {
            inputOpts = opts.configById[field.Id];
        }

        if(typeof inputOpts['class'] !== 'undefined') {
            inputClass += inputOpts['class'];
        }
        
        if (typeof opts['labelClass'] !== 'undefined' && radpy.trim(opts.labelClass) !== '') {
            labelClass += opts['labelClass'];
        }
        if(inputOpts.hasOwnProperty('required') && inputOpts.required) {
            labelClass += (labelClass.length > 0 ? ' ' : '') + 'required';
            inputClass += (inputClass.length > 0 ? ' ' : '') + 'required';
        }
        
        if(field.value.Id === '4c8d6e9a-e624-4723-bbbb-b6ab456f0b9e') console.log(labelClass.length  > 0 , inputOpts);
        var input = (typeof opts.codeBefore !== 'undefined' ? opts.codeBefore : '')
            + (opts.hasOwnProperty('descriptionList') && opts.descriptionList ? '<dd>' : '')
            + '<label for="' + field.value.Id + '"'
            + (opts.labelStyle > 0 ? ' style="'+opts.labelStyle+'"' : '')
            + (labelClass.length  > 0 ? ' class="'+labelClass+'"' : '') +
            '>' + field.fieldDefinition.label + '</label>'
            + (opts.hasOwnProperty('descriptionList') && opts.descriptionList ? '</dd><dt>' : '')
            + '<' + tag
            + (tag === 'input' && typeof opts.type !== 'undefined' ? ' type="' + opts.type + '"' : '')
            + ' id="' + field.value.Id + '" name="' + opts.name + '"'
            + (inputClass.length > 0 ? ' class="' + inputClass + '"' : '')
            + ( (typeof opts.disabled !== 'undefined' && opts.disabled) 
                    || (typeof inputOpts.disabled !== 'undefined' && inputOpts.disabled)  ? 
                        ' disabled="disabled"' : '');

        //Allow user to set a bunch of events or a single event
        if(typeof opts.events[field.Id] !== 'undefined') {
            console.log(Object.prototype.toString.call( opts.events[field.Id] ));
            if(Object.prototype.toString.call( opts.events[field.Id] ) === '[object Array]') {
                for(var i in opts.events[field.Id]) {
                    input += ' ' + opts.events[field.Id][i].event + '=' + opts.events[field.Id][i].fn;
                }
            } else if(typeof opts.events[field.Id] !== 'undefined' && typeof opts.events[field.Id].event !== 'undefined'){
                input += ' ' + opts.events[field.Id].event + '=' + opts.events[field.Id].fn;
            }
        }
        if(typeof opts.events[field.value.Id] !== 'undefined') {
            if(Object.prototype.toString.call( opts.events[field.value.Id] ) === '[object Array]') {
                for(var i in opts.events[field.value.Id]) {
                    input += ' ' + opts.events[field.value.Id][i].event + '=' + opts.events[field.value.Id][i].fn;
                }
            } else if(typeof opts.events[field.value.Id] !== 'undefined' && typeof opts.events[field.value.Id].event !== 'undefined'){
                input += ' ' + opts.events[field.value.Id].event + '=' + opts.events[field.value.Id].fn;
            }
        }
        
        return input;
    },
    
    /**
     * Shortcut method for creating forms
     * @param {type} BaseObjectName
     * @param {type} object
     * @param {type} options
     * @returns {unresolved}
     */
    createForm              :   function(BaseObjectName, object, params){
        if(typeof BaseObjectName !== 'undefined') {
            //Support base object params with spaces and capitals buy forcing case and whitespace insensitivity
            var o = BaseObjectName.replace(/\s+/g, ' ').toLowerCase();

            if(typeof this[o + 'Form'] !== 'undefined') {
                //copy params to current object options
                if(typeof params !== 'undefined') {
                    this.__loadOptions(params);
                }
                console.log(params, this.options);
                
                if(typeof object !== 'undefined') {
                    //optionals already copied to instance
                    return this[o + 'Form'](object);
                } else {
                    console.error('radpy.display.forms.createForm: A '+BaseObjectName+' object is required to create a form.  '
                        + 'For new documents, create the new object and pass it to the form');
                }
            } else {
                console.error('radpy.display.forms.createForm: The specified Base Object Name is not supported or does not exist.');
            }
        } else {
            return this.domElement(params);
            //return this.form(params);
        }
    },
    getElementCacheData     :   function(selector, cacheDataContainer){
        var data = [];
        $(selector).each(function() {
            if(radpy.cache[cacheDataContainer].hasOwnProperty($(this).attr('id'))) {
                data.push(radpy.cache[cacheDataContainer][$(this).attr('id')]);
            }
        });
        return data;
    }
};