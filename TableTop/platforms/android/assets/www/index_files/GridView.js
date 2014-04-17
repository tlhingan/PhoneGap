radpy.display.gridview = {
    //Default configuration
    data                :   [],
    cols                :   [],
    currPage            :   1,
    options             :   {
        domSelector     :   '',
        isPaginated     :   false,
        pageSize        :   20,
        sortCol         :   '',
        sortDirection   :   'ASC',
        idPrefix        :   'radpy-gridview',
        id              :   '',
        legend          :   '',
        additionalCols  :   {}, //Format: {$index : {label : $label, content : $content}}
        
/*
 * Future enhancement: support options below
 */
        'class'     :   '', //quoted because IE8 is dumb...
        style           :   '',
        columnClass     :   '',
        navClass        :   '',
        codeBefore      :   '',
        codeAfter       :   '',
        columnSub       :   {}, //Format: {$originalName : $substitution}
        blackList       :   []
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
        
    /*
     * Helper functions
     */
    sizeOf                  :   function(obj) {
        var count = 0;
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) count++;
        }
        return count;
    },
    swap                    :   function(arr, a, b) {
	var tmp=arr[a];
	arr[a]=arr[b];
	arr[b]=tmp;
    },   
        
    /**
     * 
     * @param {type} propName
     * @returns {unresolved}
     */
    sortByColumn            : function(propName) {
        var array = this.data;
        //Check to make sure a valid property name has been used
        if(typeof array[0][propName] === 'undefined' || typeof this.options.blackList[propName] !== 'undefined') {
            return;
        }
        
        var parent = this;
        function partition(array, propName, begin, end, pivot) {
            var store = begin,
                pivotVal = array[pivot][propName];
        
            parent.swap(array, pivot, end-1);
            for(var i=begin; i<end-1; i++) {
                if(parent.options.sortDirection.toLowerCase() === 'asc') {
                    if(array[i][propName] <= pivotVal) {
                        parent.swap(array, ++store-1, i);
                    }
                } else {
                    if(array[i][propName] >= pivotVal) {
                        parent.swap(array, ++store-1, i);
                    }
                }
            }
            parent.swap(array, end-1, store);
            return store;
        }
        function qsort(array, propName, begin, end) {
            if(end-1 > begin) {
                var pivot=begin+Math.floor(Math.random()*(end-begin));
                pivot=partition(array, propName, begin, end, pivot);

                qsort(array, propName, begin, pivot);
                qsort(array, propName, pivot+1, end);
            }
        }
        qsort(array, propName, 0, array.length);
        this.data = array;

        //return array;
    },
    
    setDefaults         :   function(){
        this.cols = [];
        this.currPage = 1;
        this.options = {
            id              :   '',
            legend          :   '',
            domSelector     :   '',
            isPaginated     :   false,
            pageSize        :   20,
            sortCol         :   '',
            sortDirection   :   'ASC',
            idPrefix        :   'radpy-gridview',
            additionalCols  :   {},
            blackList       :   [],
            columnSub       :   {}
        };
    },
    
    createGridView      :   function(data, params) {
        //Check data type on data (must be array)
        if(Object.prototype.toString.call( data ) !== '[object Array]') {
            console.error('radpy.display.gridview.createGridview: data parameter must be an array.  '+
                'Given ' + Object.prototype.toString.call( data ));
            return;
        }
        //Check data type of data elements
        if(Object.prototype.toString.call( data[0] ) !== '[object Object]') {
            console.error('radpy.display.gridview.createGridview: data parameter '
                +'must be an array of objects.  Given ' + Object.prototype.toString.call( data[0] ));
            return;
        }
        
        //Store options, data, and columns
        this.setDefaults();
        if(typeof params !== 'undefined') this.__loadOptions(params);
        this.data = data;
        
        //Caching
        if(!radpy.cache.hasOwnProperty('gridviewData')) {
            radpy.cache['gridviewData'] = {};
        }
        
        if(!this.options.id) {
            this.options.id = 'gridview-'+this.sizeOf(radpy.cache.gridviewData);
        }
        
        radpy.cache.gridviewData[this.options.id] = {
            data : data,
            options : this.options
        };
        
        for(var i in data[0]) {
            if(data[0].hasOwnProperty(i)) this.cols.push(i);
        }
        //if sorting condition has been specified, sort the data
        if(this.options.sortCol.length) {
            this.sortByColumn(this.options.sortCol);
        }
        
        return this; //We'll need to return the current object to be able to redo any
    },
            
    addColumn           :   function(position, content, label){
        this.options.additionalCols[position] = {content : content, label : label};
    },
    addColumns          :   function(colList) {
        for(var i in colList){
            this.options.additionalCols[i] = colList[i];
        }
    },
    
    /**
     * FUTURE ENHANCEMENT: Add columns to blacklist and do not include in created html
     * @param {type} name
     * @returns {undefined}
     */
    deleteColumn        :   function(name){},
            
    render              :   function(domSelector, empty) {
        //assume the user only wants to append the gridview, not clear before rendering
        if(typeof empty === 'undefined') empty = false; 
        this.options.domSelector = domSelector;
        var html = this.getHTML();

        //SK 2013-08-23: Here down needs to be rewritten without jquery.
        if(empty)  $(domSelector).empty();
        $(domSelector).append(html);
    },
    
    getHTML             :   function(){
        var cSize = this.sizeOf(this.options.additionalCols);
        var html = '<table class="gridview"'
                + (this.options.id.length > 0 ? ' id="'+this.options.id+'"' : '')+'>',
            colCount = 0, nextPropIndex = 0,
            tmp = [];
        
        if(this.options.legend.length > 0) {
            html += '<legend>'+this.options.legend+'</legend>';
        }
        
        //Column headers
        html += '<tr class="header">';
        for(var i in this.cols) {
            if(this.options.additionalCols.hasOwnProperty(++colCount -1)) {
                do {
                    html += '<th' 
                        + (this.options.additionalCols[colCount-1].hasOwnProperty('style')? 
                            ' style="'+this.options.additionalCols[colCount-1]['style']+'"' : '')
                        + '>' + this.options.additionalCols[colCount-1]['label'] + '</th>';  
                    nextPropIndex++;
                } while(this.options.additionalCols.hasOwnProperty(++colCount-1));
            }
            html += '<th onClick="radpy.display.gridview.doSort.call($(this))">' 
                + this.cols[i] + '</th>';
        }
        
        if(colCount <= cSize + this.sizeOf(this.data[0])) {
            colCount = 0;
            for(var p in this.options.additionalCols) {
                if(p === 'size') break;
                if(p <= cSize) continue;
                if(this.options.additionalCols[p].hasOwnProperty('label')) {
                    html += '<th' 
                        + (this.options.additionalCols[p].hasOwnProperty('style')? 
                            ' style="'+this.options.additionalCols[p]['style']+'"' : '')
                        + '>' + this.options.additionalCols[p]['label'] + '</th>';
                } else continue;
            }
        }
        html += '</tr>' + this.__getTableBody() + '</table>';

        //Pagination
        if(this.options.isPaginated) {
            html += this.__getNav();
        }
        return html;
    },
            
    __getNav          :   function(){
        //build page navigation based on page size and dataset size
        var nav = '<span id="'+this.options.idPrefix+'-previous" class="gridview-prev"'
            + ( this.currPage === 1 ? ' class="disabled"' : '' )
            + ' onclick="radpy.display.gridview.previous.call($(this))"><</span> '
            + '<ul id="'+this.options.idPrefix+'-nav" class="gridview-nav">';
    
        for(var i = 1; i <= Math.ceil(this.data.length/this.options.pageSize); i++) {
            nav += '<li ' 
                + (i === this.currPage ? ' class="selected"' : '')
                + ' onclick="radpy.display.gridview.goTo.call($(this), '+i+')">'+i+'</li>';
        }
        
        return nav + '</ul> <span id="'+this.options.idPrefix+'-next" class="gridview-next"'
            + ( this.currPage === Math.ceil(this.data.length/this.options.pageSize) ? ' class="disabled"' : '' )
            + ' onclick="radpy.display.gridview.next.call($(this))">></span>';
    },
            
    __getTableBody        :   function() {
        var cSize = this.sizeOf(this.options.additionalCols);
        var start = 0, end = this.data.length - 1, 
            html = '',
            colCount = 0, nextPropIndex = 0,
            tmp = [];
    
        if(this.options.isPaginated) {
            start = (this.currPage -1) * this.options.pageSize;
            end = Math.min(this.data.length-1, start + this.options.pageSize-1);
        }
        //for(var rows in this.data) {
        if(start === end && start === 0 && this.data.length < 1) {
            return;
        }
        for(var rows = start; rows <= end; rows++){
            colCount = 0;
            nextPropIndex = 0;
            html += '<tr>';
            //do replace on templated content
            for(var x in this.options.additionalCols) {
                if(!this.options.additionalCols[x].hasOwnProperty('content')) continue;
                tmp[x] = this.options.additionalCols[x]['content'].split('%');
                
                if(this.sizeOf(tmp[x]) > 1) {
                    for(var j = 1; j < this.sizeOf(tmp[x]); j+=2) {
                        if(this.data[rows].hasOwnProperty(tmp[x][j])) {
                            tmp[x][j] = this.data[rows][tmp[x][j]];
                        } else {
                            tmp[x][j] = '';
                        }
                    }
                }
                tmp[x] = tmp[x].join('');
            }
            
            for(var cols in this.data[rows]) {
                if(!this.data[rows].hasOwnProperty(cols)) continue;
                if(this.options.additionalCols.hasOwnProperty(++colCount -1)) {
                    do {
                        html += '<td>' + tmp[colCount-1] + '</td>';  
                        nextPropIndex++;
                    } while(this.options.additionalCols.hasOwnProperty(++colCount-1));
                }
                if(this.data[rows].hasOwnProperty(cols)) {
                    html += '<td>' + this.data[rows][cols] + '</td>';
                }
            }

            if(colCount <= cSize + this.sizeOf(this.data[0])) {
                colCount = 0;
                for(var p in this.options.additionalCols) {
                    //if((nextPropIndex++) <= cSize) continue;
                    if(p <= cSize) continue;
                    if(this.options.additionalCols[p].hasOwnProperty('content')) {
                        html += '<td>' + tmp[p] + '</td>';
                    }
                }
            }
            html += '</tr>';
        }
        return html;
    },
    __updatePage           :   function(){
        var tbody = this.__getTableBody(),
            next = $(this.options.domSelector+' #'+this.options.idPrefix+'-next'),
            prev = $(this.options.domSelector+' #'+this.options.idPrefix+'-previous');
    
        $(this.options.domSelector + ' tr:has(td)').remove();
        $(this.options.domSelector + ' table').append(tbody);
        
        if(this.currPage === Math.ceil(this.data.length/this.options.pageSize)) {
             next.addClass('disabled');
        } else next.removeClass('disabled');
        
        if(this.currPage === 1) {
            prev.addClass('disabled');
        } else prev.removeClass('disabled');
    },
    //Paginator controls
    next                :   function(context){
        var gvData = radpy.cache.gridviewData[this.siblings('table').attr('id')];
        var currGV = radpy.display.gridview.createGridView(gvData['data'], gvData['options']);

        currGV.currPage = this.siblings('ul').find('li.selected').text();
        if($(this).hasClass('disabled') || currGV.currPage == this.siblings('ul').children().length) return;
        
        //Get next page
        currGV.currPage++;
        currGV.__updatePage();
        
        //update current page indicator
        $('#'+currGV.options.idPrefix+'-nav li.selected').removeClass('selected').next().addClass('selected');
    },
    
    previous            :   function(context){
        var gvData = radpy.cache.gridviewData[this.siblings('table').attr('id')];
        var currGV = radpy.display.gridview.createGridView(gvData['data'], gvData['options']);

        currGV.currPage = this.siblings('ul').find('li.selected').text();
        if($(this).hasClass('disabled') || currGV.currPage == 1) return;
        
        //Get next page
        currGV.currPage--;
        currGV.__updatePage();
        
        //update current page indicator
        $('#'+currGV.options.idPrefix+'-nav li.selected').removeClass('selected').prev().addClass('selected');
    },
    
    goTo                :   function(pageNum) {
        var gvData = radpy.cache.gridviewData[this.parent().siblings('table').attr('id')];
        var currGV = radpy.display.gridview.createGridView(gvData['data'], gvData['options']);
        //make sure page is within range
        if(pageNum < 1 || pageNum > Math.ceil(gvData['data'].length/currGV.options.pageSize)) {
            return;
            //should probably throw error
        }
        
        currGV.currPage = pageNum;
        currGV.__updatePage();
        $('#'+currGV.options.idPrefix+'-nav li.selected').removeClass('selected');
        $('#'+currGV.options.idPrefix+'-nav li:nth-child('+pageNum+')').addClass('selected');
    },
            
    doSort              :   function(){
        var gvData = radpy.cache.gridviewData[this.closest('table').attr('id')];
        var currGV = radpy.display.gridview.createGridView(gvData['data'], gvData['options']);
        currGV.currPage = $('#'+currGV.options.idPrefix+'-nav li.selected').text();
        //console.log('sort called');
        
        if(this.hasClass('asc')) {
            this.removeClass('asc').addClass('desc');
            currGV.options.sortDirection = 'DESC';
        } else {
            this.removeClass('desc').addClass('asc');
            currGV.options.sortDirection = 'ASC';
        }
        $('.asc').not(this).removeClass('asc');
        $('.desc').not(this).removeClass('desc');
        currGV.sortByColumn(this.text());

        this.closest('table').find('tr:has(td)').remove();
        this.parent().parent().append(currGV.__getTableBody());
    },
}