radpy.documentPopup = {
    __popupMainHtml         :   '',
                            
    __currentDocument       :   {},
    __documentStack         :   [],
    __onSaveFunction        :   null,
    
    options                 :   {
        mainPopupId     :   'document_popup',
        newDocMode      :   false,
        save            :   null,
		showGraph		:   false
    },
            
    form                :   null,
            
    __loadOptions           :   function(options){
        for(var i in this.options) {
            if(typeof options !== 'undefined' && options.hasOwnProperty(i)){
                this.options[i] = options[i];
            }
        }
    },
    
    resetPopupData      :   function() {
        this.__documentStack = [];
        radpy.cache['popup-documentStack'] = {};
    },
            
    /**
     * Initializes the popup on the page.
     * Adds close functionality to the popup aswell as save and cancel buttons
     * Appends the html for the popup at the end of the pages body.
     */   
    init             :   function(options){
        var instance = this;
        this.__loadOptions(options);
        this.__popupMainHtml = '<div id="' + this.options.mainPopupId + '" class="Popup">'
            + '<ul id="' + this.options.mainPopupId + '_tabs"></ul></div>';
    
        //radpy.cache['popup-documentStack'] = {};
        //if(radpy.cache.hasOwnProperty('popup-documentStack'))  
        $('body').append(this.__popupMainHtml);
        $("#" + this.options.mainPopupId).dialog({
            modal: true,
            draggable: false,
            close: function () {
//                if (this.__onSaveFunction !== null) { //this won't always work, below is more reliable
                if(typeof this.__onSaveFunction === 'function') {
                    instance.__onSaveFunction.call(this, this.__currentDocument);
                }
                radpy.cache['popup-isOpen'] = false;
            },
            buttons: {
                "Save": function () {
                    //TODO call an ajax save and pass in the document with all the temp changes
		    var doc = instance.updateCurrentDocument();
                    console.log(typeof instance.options.save === 'function');
                    if(typeof instance.options.save === 'function') {
			console.log(doc);
                        instance.options.save(doc);
                    } else {
			//console.log({json_string : JSON.stringify(doc)}, instance);
			var savedDocument = JSON.parse(radpy.ajax.mkcall('SaveDocument', {json_string : JSON.stringify(doc)}).responseText);
			instance.updateEntity(savedDocument);
			
			//go back to root document
			var currentDocument = instance.__documentStack.pop();
			delete radpy.cache['popup-documentStack'][currentDocument];
			
			console.log(instance.__documentStack);
			if (instance.__documentStack.length) {
			    currentDocument = instance.__documentStack[instance.__documentStack.length -1];
			    savedDocument = JSON.parse(radpy.ajax.mkcall('SaveDocument', {json_string : JSON.stringify(radpy.cache['popup-documentStack'][currentDocument])}).responseText);
			    instance.show(currentDocument);
			} else {
			    instance.hide();
			}
                    }
                    //instance.hide();
                },
                Cancel: function () {
                    instance.hide();
                }
            }
        });
        $("#" + this.options.mainPopupId).tabs();
        
        instance.resizeWindow();
        $(window).resize(function () { instance.resizeWindow(); });
        this.hide();
        radpy.cache['popupInitialized'] = true;
        radpy.cache['popup-isOpen'] = false;
        
        return this;
    },
    
    /**
     * This method will show the popup on the page.
     * @param document Can be an ID or a full document. will do an ajax call to get an object if neccicary
     */         
    show                    :   function(document, options){
        if(!radpy.cache.hasOwnProperty('popupInitialized')) this.init(options);
        console.log('popup');
        
        var success = function(document) {
	  //console.log(document);
            var reset = function(document) {
                this.resetPopupData();
                radpy.cache['popup-document'] = document;
		this.__currentDocument = document;
            };
            
            var show = function(document) {
                this.addDocumentToStack(document);
                this.regeneratePopupData();
                radpy.cache['popup-isOpen'] = true;
                
                $('#' + this.options.mainPopupId).dialog("open");
            };
            
            if(radpy.cache['popup-isOpen'] !== false) {
	      console.log();
                if(document.Id !== radpy.cache['popup-document'].Id) {
                    var tempDoc = radpy.searchMethods.findDocumentById(radpy.cache['popup-document'], document.Id);
// 		    console.log(tempDoc);
                    if(tempDoc !== null) {
                        show.call(this, document);
                    } else {
                        //reset.call(this, document);
                        show.call(this, document);
                    }
                } else {
                    reset.call(this, document);
                    show.call(this, document);
                }
            } else {
                reset.call(this, document);
                show.call(this, document);
            }
        };
        
        var ajaxCall = function(documentId) {
            //use this:
            //radpy.ajax.mkcall(fnName, {documentId : document}, success, this); //will execute your success function within the context of this object
            //or
            //var data = radpy.ajax.mkcall(...); //but there's a good chance of running into synchrony issues with this method
        };
        
        if(typeof document !== 'object') {
            if(radpy.cache.hasOwnProperty('popup-document')) {
                var tempDoc = radpy.searchMethods.findDocumentById(radpy.cache['popup-document'], document);
                if(tempDoc !== null) {
                    success.call(this, tempDoc);
                } else {
                    ajaxCall.call(this, document);
                }
            } else {
                ajaxCall.call(this, document);
            }
        } else {
            success.call(this, document); //Note to self: test this extensively...
        }
    },
    
    /**
     * The method that code should call to hide the popup on the page.
     * Avoid calling this function wherever posible, the user should 
     */        
    hide                    :   function() {
        $('#' + this.options.mainPopupId).dialog("close");
        
	if(typeof displayGV !== 'undefined') {
	    if(typeof $('#gridview-filter select').val() !== 'undefined') {
		displayGV($('#gridview-filter select').val());
	    } else {
		displayGV();
	    }
	}
	
        if(radpy.cache.hasOwnProperty('popup-isOpen')) {
            radpy.cache['popup-isOpen'] = false;
        }
    },
            
    /**
     * Sets the onSaveMethod for the ability for the user to add a custom functio nto be called when the popup is closed.
     * @param {type} func
     */
    setOnSaveMethod         :   function(func) {
        this.__onSaveFunction = func;
    },
            
    /**
     * This method will make sure the popup is prperly displayed on the screen with the correct size
     */
    resizeWindow            :   function() {
        var dWidth = $(window).width() * 0.9,
            dHeight = $(window).height() * 0.9;
        $('#' + this.options.mainPopupId).dialog("option", "width", dWidth);
        $('#' + this.options.mainPopupId).dialog("option", "height", dHeight);
    },
    
    /**
     * Adds a document to the top of the stack
     */        
    addDocumentToStack      :   function(document) {
        this.updateCurrentDocument();
        if(!radpy.cache.hasOwnProperty('popup-documentStack')) {
            radpy.cache['popup-documentStack'] = {};
        }
        this.__documentStack.push(document.Id);
        radpy.cache['popup-documentStack'][document.Id] = document;
    },
    
    updateEntity	    :	function(updatedDocument) {
		//1) Update document on stack
		if(radpy.cache.hasOwnProperty('popup-documentStack')) { //idiot proofing... this should alwayws be true
			for (var i in radpy.cache['popup-documentStack']) {
			if(i === updatedDocument.Id) {
				radpy.cache['popup-documentStack'][i] = updatedDocument;
			} else {
				//not the document we're looking for, but could be the parent
				for (var j in radpy.cache['popup-documentStack'][i].fields) {
				if(radpy.cache['popup-documentStack'][i].fields[j].value.hasOwnProperty('entities')) {
					//Search entities for updated document
					for (var k in radpy.cache['popup-documentStack'][i].fields[j].value.entities) {
					if (radpy.cache['popup-documentStack'][i].fields[j].value.entities[k].Id === updatedDocument.Id) {
						//2) Update entity record in parent document
						radpy.cache['popup-documentStack'][i].fields[j].value.entities[k] = updatedDocument;
						break;
					}
					}
				}
				}
			}
			}
		}
    },
            
    reverseDocumentStack    :   function(documentId) {
        var isDone = false;
        var tempId;
        while (isDone === false && this.__documentStack.length > 0) {
            var tempId = this.__documentStack.pop();
            if (tempId === documentId) {
                isDone = true;
            }
        }
        this.__documentStack.push(tempId);
        this.regeneratePopupData();
    },
            
    regeneratePopupData     :   function() {
        var divsHtml = [], 
            tabsHtml = [];
        $('#' + this.options.mainPopupId).empty();
        this.regeneratePopupHeader();
        if(this.options.newDocMode) {
            //SK: method should be new docDef, not get list
            radpy.ajax.mkcall('GetAllDocumentDefinitions', null, function() {
                this.form = radpy.display.dom.createForm('document', data);
                $("#" + this.options.mainPopupId).empty().append('<div id="creationDiv">'
                + '<div id="CreationDocumentDefinitions">' + this.form + '</div>'
                + '<div id="creationDivButtons">'
                + '<input type="button" value="Save Document" onclick="DP_UpdateDocumentNewDocument();" />'
                + '<input type="button" value="Cancel Document" onclick="DP_CancelDocumentCreation();" />'
                + '</div>');
            }, this);
        } else {
            
            var doc = radpy.searchMethods.findDocumentById(radpy.cache['popup-document'], this.__documentStack[this.__documentStack.length-1]);
            var formData = radpy.display.dom.createForm('document', doc);
    
            if(Object.prototype.toString.call( formData ) === '[object Array]') {
                for(var i = 0; i < formData.length; i++) {
                    if(i === 0) {
                        tabsHtml.push(this.addTab('DocumentCard', doc.documentDefinition.label));
                        divsHtml.push(this.addTabDiv('DocumentCard', formData[i]));
                    } else {
		      console.log(formData[i]);
                        for(var j in formData[i]) {
			    var tabContent = '';
			    if(typeof formData[i][j] === 'object') {
				tabContent += formData[i][j].getHTML(); //add gridview
				
			    }
			    var entityForm = '', 
				entityField = radpy.searchMethods.findFieldByFieldDefinitionLabel(doc, j);
			    tabContent += '<p style="min-height: 3em;">'
				+'<input type="button" value="Add New" style="float:right;" onclick="'
				+'radpy.display.formEvents.documentFormPopup.newEntity.call($(this).parent().parent().find(\'table.gridview\').first(), $(this).parent().parent(), \''+j+'\');'
				
				//+'radpy.documentPopup.show('+'JSON.parse(radpy.ajax.mkcall(\'MakeNewDocumentByDocDefId\', {Id : \''+entityField.fieldDefinition.defaultValue+'\'}).responseText)' +');'
				
				+'" /></p>'
			
			    tabsHtml.push(this.addTab('tab' + i, j));
			    divsHtml.push(this.addTabDiv('tab' + i, tabContent)); //formData[i][j].getHTML()
                        }
                    }
                }
            } else if(formData !== 'undefined') {
                tabsHtml.push(this.addTab('DocumentCard', doc.documentDefinition.label));
                divsHtml.push(this.addTabDiv('DocumentCard', formData));
            }
            if(doc.documentDefinition.Id === '95a8fdb8-162f-4ac8-860c-e2755eae070b') {//this.options.showGraph===true){
				this.options.showGraph = true;
				var content = '<div id="DocumentPopUp_Graph">' +
                '<div id="infovis" style="display: none;"></div>' +
                '<div id="cm-log"></div>' +
                '<div id="GenerateGraphButtonDiv" style="float:left;"><input type="button" value="Generate Graph" id="cm-generate" onclick="radpy.documentPopup.generateGraph(\''+radpy.cache['popup-document'].Id +
				'\');" ></div></div>';
				tabsHtml.push(this.addTab('commingling', 'Commingling Graph'));
                divsHtml.push(this.addTabDiv('commingling', content));
			}
            this.regeneratePopupTabs(tabsHtml);
            this.regeneratePopupDivs(divsHtml);
        }
        
        $('#' + this.options.mainPopupId).tabs();
        $('#' + this.options.mainPopupId).tabs("refresh");
        $('#' + this.options.mainPopupId).tabs("option", "active", 0);
    },
	
	generateGraph : function(documentId){
		if (typeof commGraph != 'undefined') {
			var graphOpts = {
				'logTo': 'cm-log',
				'insertInto': 'infovis'
			};
			$("#GenerateGraphButtonDiv").hide();
			commGraph.generateGraph(documentId, graphOpts, function () {
				console.log(this);
				if (typeof commGraph.fullAssetList !== 'undefined') {
					for (var i = 0; i < commGraph.fullAssetList.length; i++) {
						//$('#filter_asset').append('<p style="clear:both; margin:0;"><label style="display:block; width: 240px; float:left;">' + commGraph.fullAssetList[i].name + ' </label> <input type="checkbox" class="assetChk" name="filter_asset[]" value="' + commGraph.fullAssetList[i].Id + '" /></p>');
					}
				}
				$("#infovis").show();
			});
		}
	},
    
    regeneratePopupHeader   :   function() {
        var tempDoc = null,
            html = '',
            isFirst = true;

        for (var i = 0; i < this.__documentStack.length; i++) {
        	//SK: fix this, it assumes there are fields.
            tempDoc = radpy.searchMethods.findDocumentById(radpy.cache['popup-document'], this.__documentStack[i]);
            html +=  (isFirst? '' : ' > ')+'<b><span class="popupTitleHeaderLink" onClick="radpy.documentPopup.reverseDocumentStack(\'' 
                + this.__documentStack[i] + '\')">' 
                + (typeof tempDoc.fields[0] !== 'undefined'? tempDoc.fields[0].value.value : '') 
                + '</span></b>';

            isFirst = false;
        }

        $("#" + this.options.mainPopupId).parent().find("span.ui-dialog-title").html(html);
    },
            
    regeneratePopupTabs     :   function(tabData) {
        var html = '<ul>';
        
        for(var t in tabData) {
            html += tabData[t];
        }
        html += '</ul>';
        $("#" + this.options.mainPopupId).append(html);
    },
            
    regeneratePopupDivs     :   function(divData) {
        var html = '';
        for(var d in divData) {
            html += divData[d];
        }
        $("#" + this.options.mainPopupId).append(html);
    },       
            
    addTab                  :   function(id, html) {
        return '<li><a href="#' + id + '">' + html + '</a></li>';
    },
          
    addTabDiv               :   function(id, html) {
        return '<div id="' + id + '">' + html + '</div>';
    },
            
    cancelDocumentCreation  :   function() {
        this.options.newDocMode = false;
        this.regeneratePopupData();
    },
        
    //our popup will need to store a temp version of the whole document that we have receved to open the document
    //The temp document will store all the changed the user has made to the document, but not actually save it server side.
    //This gives the ability to "cancel" all the changes a user has made, aswell as make multiple changes at once.
    //radpy.cache['popup-document'] is the temp document i think?
    //this is also where findFieldValueById will come in handy
    //shoudl be called before "regeneratePopupData", but not if its the first time regeneratePopupData is being called
    updateCurrentDocument          :   function() {
        if(!this.options.newDocMode) {
            if(this.__documentStack.length > 0) {
                var tempDoc = radpy.searchMethods.findDocumentById(radpy.cache['popup-document'], this.__documentStack[this.__documentStack.length - 1]);
                if(tempDoc !== null) {
                    return radpy.display.dom.updateDocument(tempDoc);
                }
            }
        }
    }
};