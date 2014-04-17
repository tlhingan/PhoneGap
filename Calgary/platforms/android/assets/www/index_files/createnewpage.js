function createNewPage_openModalDialog() {
    var webUrl = SP.ClientContext.get_current().get_url();

    if (webUrl == '/') {
        webUrl = '';
    }

    var options = SP.UI.$create_DialogOptions();
    options.url = webUrl + "/_layouts/cocis/CreatePage.aspx?isModal=true";
    options.dialogReturnValueCallback = Function.createDelegate(
                        null, createNewPage_modalDialogClosedCallback);
    SP.UI.ModalDialog.showModalDialog(options);
}

function createNewPage_modalDialogClosedCallback(result, value) {
    if (value != null && value != '') {
        window.location = value;
    }
}

function CloseDialog(value) {
    SP.UI.ModalDialog.commonModalDialogClose('OK', value, true);
}
