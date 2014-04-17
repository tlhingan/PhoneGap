///<reference name="MicrosoftAjax.js" /> 
///<reference path="file://C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions/14/TEMPLATE/LAYOUTS/SP.core.debug.js" /> 
///<reference path="file://C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions/14/TEMPLATE/LAYOUTS/SP.debug.js" />
///<reference path="file://C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions/14/TEMPLATE/LAYOUTS/SP.Ribbon.debug.js" />

var clientContextAA = null;
var webAA = null;
var listAA = null;
var itemIDs = '';
var pagesCollection;

// Auto-approve ribbon button click eventhandler
// Iterate through selected items and send query string parameters of item IDs, list id and webAA id to AutoApprovalDialog.aspx
function AutoApproveRibbonButtonHandler() {

    SP.UI.Notify.addNotification('Auto approving selected pages');

    clientContextAA = SP.ClientContext.get_current();

    webAA = clientContextAA.get_web();
    var items = SP.ListOperation.Selection.getSelectedItems(clientContextAA);
    var i;

    for (i in items) {
        if (itemIDs == '')
            itemIDs = items[i].id;
        else
            itemIDs += '|' + items[i].id;
    }

    clientContextAA.load(webAA);
    clientContextAA.executeQueryAsync(
		Function.createDelegate(this, this.onQuerySucceeded),
		Function.createDelegate(this, this.onQueryFailed));
}

// Auto-approve ribbon button click eventhandler
// Iterate through selected items and send query string parameters of item IDs, list id and web id to AutoApprovalDialog.aspx
function AutoApproveRibbonEditPageButtonHandler() {

    SP.UI.Notify.addNotification('Auto approving selected pages');

    JSRequest.EnsureSetup();


    var pathName = JSRequest.PathName;
    context = SP.ClientContext.get_current();
    try {
        var context = new SP.ClientContext.get_current();
        
        webAA = context.get_web();
        listAA = webAA.get_lists().getByTitle('Pages');
        var query = '<View Scope=\'RecursiveAll\'>' +
                        '<Query>' +
                            '<Where>' +
                            '<Eq>' +
                                '<FieldRef Name=\'FileRef\'/>' +
                                '<Value Type=\'Text\'>' + unescapeProperly(pathName) + '</Value>' +
                            '</Eq>' +
                            '</Where>' +
                        '</Query>' +
                             '</View>';
        var camlQuery = new SP.CamlQuery();
        camlQuery.set_viewXml(query);

        this.pagesCollection = listAA.getItems(camlQuery);
        context.load(webAA);
        context.load(listAA);
        context.load(this.pagesCollection);
        context.executeQueryAsync(Function.createDelegate(this, this.pagesReceived), Function.createDelegate(this, this.onQueryFailed));
    }
    catch (e) {
        alert(e);
    }
}

// Callback on successful asynchronous call
// Open modal dialog page with query string parameters
function onQuerySucceeded() {
    var options = {
        url: '/_layouts/cocis/AutoApprovalDialog.aspx?items=' + itemIDs + '&listID=' + SP.ListOperation.Selection.getSelectedList() + '&webID=' + webAA.get_id(),
        width: 400,
        height: 200,
        dialogReturnValueCallback: autoApproveCallback
    };

    SP.UI.ModalDialog.showModalDialog(options);
}


// Callback on successful asynchronous call
function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

// Calback function when the modal dialog closes.
// Refresh the page.

function autoApproveCallback(dialogResult, returnValue) {
    SP.UI.ModalDialog.RefreshPage(SP.UI.DialogResult.OK);
    SP.UI.Notify.addNotification('Auto approving selected pages complete');
}

function autoApproveEditPageCallback(dialogResult, returnValue) {
    JSRequest.EnsureSetup();
    var gotoURL = JSRequest.PathName;
    window.location.href = gotoURL;
    SP.UI.Notify.addNotification('Auto approving selected pages complete');
}

// Check whether has selected page items. 
// This impacts the enable state of the Auto-approve button in the ribbon
function EnableAutoApproveRibbonButton() {

    var isEnabled = false;
    clientContextAA = SP.ClientContext.get_current();
    var items = SP.ListOperation.Selection.getSelectedItems(clientContextAA);
    isEnabled = items.length > 0;

    return isEnabled;
}

// If page is in page editing mode, then disable 'Auto Approve' ribbon button
function EnableAutoApproveRibbonEditPage() {
    var isEnabled = false;

    isEnabled = $('.cocis-maincontent .s4-notdlg input').length <= 0;

    return isEnabled;
}


function pagesReceived() {
    var listEnumerator = this.pagesCollection.getEnumerator();
    while (listEnumerator.moveNext()) {
        itemIDs = listEnumerator.get_current().get_id();
    }
    var options = {
        url: '/_layouts/cocis/AutoApprovalDialog.aspx?items=' + itemIDs + '&listID=' + listAA.get_id() + '&webID=' + webAA.get_id(),
        width: 400,
        height: 200,
        dialogReturnValueCallback: autoApproveEditPageCallback
    };

    SP.UI.ModalDialog.showModalDialog(options);

}