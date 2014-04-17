/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


radpy.searchMethods = {
    findDocumentById        :   function(document, documentId) {
        var tempDoc = null;
        if(document.Id === documentId) {
            return document;
        } else {
            for(var x = 0; x < document.fields.length; x++) {
                if (document.fields[x].fieldDefinition.fieldDataType === 11 || document.fields[x].fieldDefinition.fieldDataType === 12) {
                    if (document.fields[x].fieldDefinition.fieldDataType === 12) {
                        for (var z = 0; z < document.fields[x].fieldDefinition.listOfValues.length; z++) {
                            tempDoc = this.findDocumentById(document.fields[x].fieldDefinition.listOfValues[z], documentId)
                            if (tempDoc !== null) {
                                return tempDoc;
                            }
                        }
                    }

                    tempDoc = this.findDocumentById(document.fields[x].value, documentId);
                    if (tempDoc !== null) {
                        return tempDoc;
                    }
                } else if (document.fields[x].fieldDefinition.fieldDataType === 13 || document.fields[x].fieldDefinition.fieldDataType === 14) {
                    for (var y = 0; y < document.fields[x].value.entities.length; y++) {
                        tempDoc = this.findDocumentById(document.fields[x].value.entities[y], documentId);
                        if (tempDoc !== null) {
                            return tempDoc;
                        }
                    }
                }
            }
        }
        return null;
    },          
    findFieldValueById      :   function(document, fvId) {
        var tempDoc = null;
        for (var x = 0; x < document.fields.length; x++) {
            if(document.fields[x].value.Id === fvId) {
                return document.fields[x].value;
            }

            if (document.fields[x].Id === fvId) {
                return document.fields[x];
            }

            if (document.fields[x].fieldDefinition.fieldDataType === 11 || document.fields[x].fieldDefinition.fieldDataType === 12) {
                tempDoc = this.findFieldValueById(document.fields[x].value, fvId);
                if (tempDoc !== null) {
                    return tempDoc;
                }
            } else if (document.fields[x].fieldDefinition.fieldDataType === 13 || document.fields[x].fieldDefinition.fieldDataType === 14) {
                for (var y = 0; y < document.fields[x].value.entities.length; y++) {
                    tempDoc = this.findFieldValueById(document.fields[x].value.entities[y], fvId);
                    if (tempDoc !== null) {
                        return tempDoc;
                    }
                }
            }
        }
    },
    findFieldByFieldDefinitionLabel	:	function(document, search) {
	for (var i in document.fields) {
	    if(document.fields[i].fieldDefinition.label.toLowerCase() === search.toLowerCase()) {
		return document.fields[i];
	    }
	}
	return false;
    }
};