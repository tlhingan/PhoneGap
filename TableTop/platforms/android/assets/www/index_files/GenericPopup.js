radpy.genericPopup = {
    options         :   {
        id      :   '',
        title   :   '',
        save    :   null
    },
            
    /**
     * Overwrites values of this.options with param options
     * @param Object options
     * @returns void
     */
    __loadOptions           :   function(options) {
        for(var i in this.options) {
            if(options.hasOwnProperty(i)){
                this.options[i] = options[i];
            }
        }
    },
            
    /**
     * 
     * @param Object popupTabContentPairs Format: {tablId : {label : 'someStr', content: 'some Str'}(,{...})}
     * @param Object options Customizations for generic popup.  Permitted properties: (String) id, (String) title, (function) save
     * @returns String
     */
    create          :   function(popupTabContentPairs, options) {
        console.log('hello');
        if(typeof options !== 'undefined') this.__loadOptions(options);
        if(this.options.id.length < 1) this.options.id = 'gPopup_'+Math.floor((Math.random()*10000))+1;
        
        var instance = this,
                html = '<div id="' + this.options.id + '" class="Popup"><ul>',
                content = '';
        
        for(var id in popupTabContentPairs) {
            html += '<li><a href="#' + id + '">' + popupTabContentPairs[id]['label'] + '</a></li>';
            content += '<div>' + popupTabContentPairs[id]['content'] + '</div>';
        }
        html += '</ul>'+content+'</div>';
        
        $('body').append(html);
        $('#' + this.options.id).dialog({
            draggable: true,
            modal: true,
            close: function () {
            	$(this).dialog("close").remove();
            },
            buttons: {
//                "Save": function () {
//                	console.log($(this).attr('id'));
//                    instance.update(instance.options.id);
//                    instance.hide(instance.options.id);
//                },
//                Cancel: function () {
//                    instance.hide(instance.options.id);
//                }
            	"Close": function() {
            		$(this).dialog("close");
            	}
            }
        });
        
        /*
        dlgPrompt.dialog('option', 'buttons', {
            'Ok': function() {
                myFunction();
                $(this).dialog('close');
            }
        });
        
        
         */
        
        
        
        $('#' + this.options.id).tabs();
        
        $('#' + this.options.id).dialog('option', 'title', this.options.title);

        this.resizeWindow();
        $(window).resize(function () { instance.resizeWindow(); });
    },
    
    hide            :   function(popupId) {
        $('#' + popupId).dialog("close");
    },

    
    /**
     * This method will make sure the popup is prperly displayed on the screen with the correct size
     */
    resizeWindow            :   function() {
        var dWidth = $(window).width() * 0.9,
            dHeight = $(window).height() * 0.9;
        $('#' + this.options.id).dialog("option", "width", dWidth);
        $('#' + this.options.id).dialog("option", "height", dHeight);
    }
};