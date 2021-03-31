Alaa = {
    KGridDpClick: function (windowGridName,fn)
    {
        $(windowGridName).delegate("tbody>tr", "dblclick", fn);
    }
}

BT = {
    showErrorNotice: function (msg)
    {
        //var errorDiv = $('#errorDiv');
        //var errorMessage = $('#errorMessage');

        //errorMessage.html(msg);//
        //errorDiv.addClass('display');

        $.gritter.add({
            title: 'خطأ',
            text: msg,
            image: 'http://' + window.location.host + '/assets/img/dialog-error-7.png',
            sticky: false,
            time: 5000,
            class_name: 'gritter-error'
        });
    },

    showSuccessNotice: function (msg, sticky)
    {
        $.gritter.add({
            title: 'تمت بنجاح',
            text: msg === undefined || msg === null || msg === '' ? 'تم حفظ التعديلات بنجاح.' : msg,
            image: 'http://' + window.location.host + '/assets/img/dialog-ok-2.png',
            sticky: BT.isNullOrEmpty(sticky) ? false : sticky,
            class_name: 'gritter-success',
            time: 2000
        });
    },

    showInfoNotice: function (msg, title)
    {
        //$.gritter.add({
        //    title: 'Success',
        //    text: msg === undefined || msg === null || msg === '' ? 'Changes saved successfully.' : msg,
        //    image: 'http://' + window.location.host + '/assets/img/dialog-ok-2.png',
        //    sticky: false,
        //    class_name: 'gritter-success',
        //    time: 1000
        //});

        $.gritter.add({
            title: BT.isNullOrEmpty(title) ? 'ملاحظة' : title,
            text: BT.isNullOrEmpty(msg) ? 'Missing Notice' : msg,
            //image: '../assets/img/dialog-ok-2.png',
            sticky: false,
            class_name: 'gritter-info',
            time: 3000
        });
    },

    scrollToEl: function (container, scrollTo)
    {
        $(container).animate({
            scrollTop: $(scrollTo).offset().top - $(container).offset().top + $(container).scrollTop()
        }, 300);
    },

    isNullOrEmpty: function (value)
    {
        return value === undefined || value === null || value === '';
    },

    camelCase: function (s)
    {
        s = $.trim(s);
        return (/\S[A-Z]/.test(s)) ?
            s.replace(/(.)([A-Z])/g, function (t, a, b) { return a + ' ' + b.toUpperCase(); }) :
            s.replace(/( )([a-z])/g, function (t, a, b) { return b.toUpperCase(); });
    },

    getNoHash: function (str)
    {
        var s = str;
        var trys = str.length <= 10 ? str.length : 10;

        for (var i = 0; i < trys; i++)
            if (s.charAt(0) === '#') s = s.substr(1);
            else break;

        return s;
    },

    getHash: function (id)
    {
        if (id.substr(0, 1) === '#')
        {
            return id;
        } else
        {
            return '#' + id;
        }
    },

    kProgress: function (element, isVisible)
    {
        kendo.ui.progress(element, isVisible);
        //kendo.ui.progress($('#elementId'), true);
    }
};

BT.menu = {
    getSearchTearms: function () {
        var list = [];
        $.each($('#sidebar').find('li > a'), function () {
            var href = $(this).attr('href');
            if (href === '#') return true;

            var txt2 = $(this).text().replace(/أ|إ/g, 'ا');
            var txt3 = BT.camelCase(href.replace(/\//g, ''));

            //if ($.inArray(txt1) === -1) list.push(txt1);
            if ($.inArray(txt2) === -1) list.push(txt2);
            if ($.inArray(txt3) === -1) list.push(txt3);

            return true;
        });
        return list.sort();
    },

    searchMenu: function (searchBox) {
        var term = $(searchBox).val().replace(/أ|إ/g, 'ا').replace(/ /g, '');
        var result = BT.menu.searchEqualsCaseSensitive(term);
        if (BT.isNullOrEmpty(result)) result = BT.menu.searchEqualsCaseInSensitive(term);
        if (BT.isNullOrEmpty(result)) result = BT.menu.searchStartsWithCaseSensitive(term);
        if (BT.isNullOrEmpty(result)) result = BT.menu.searchStartsWithCaseInSensitive(term);
        if (BT.isNullOrEmpty(result)) result = BT.menu.searchContainsCaseSensitive(term);
        if (BT.isNullOrEmpty(result)) result = BT.menu.searchContainsCaseInSensitive(term);

        return result;
    },

    /* Case-Sensitive */
    searchEqualsCaseSensitive: function (term) {
        var result;
        $.each($('#sidebar').find('li > a'), function () {
            var href = $(this).attr('href').replace(/\//g, '');
            if (href === '#') return true;

            var mnuItemTxt = $(this).text().replace(/أ|إ/g, 'ا').replace(/ /g, '');

            if (mnuItemTxt === term) {
                result = this;
                return false;
            }

            if (href === term) {
                result = this;
                return false;
            }

            return true;
        });

        return result;
    },

    searchStartsWithCaseSensitive: function (term) {
        var result;
        $.each($('#sidebar').find('li > a'), function () {
            var href = $(this).attr('href').replace(/\//g, '');
            if (href === '#') return true;

            var mnuItemTxt = $(this).text().replace(/أ|إ/g, 'ا').replace(/ /g, '');

            var csstr = new RegExp("^" + term);
            if (csstr.test(mnuItemTxt)) {
                result = this;
                return false;
            }

            if (csstr.test(href)) {
                result = this;
                return false;
            }

            return true;
        });

        return result;
    },

    searchContainsCaseSensitive: function (term) {
        var result;
        $.each($('#sidebar').find('li > a'), function () {
            var href = $(this).attr('href').replace(/\//g, '');
            if (href === '#') return true;

            var mnuItemTxt = $(this).text().replace(/أ|إ/g, 'ا').replace(/ /g, '');

            if (mnuItemTxt.indexOf(term) >= 0) {
                result = this;
                return false;
            }

            if (href.indexOf(term) >= 0) {
                result = this;
                return false;
            }

            return true;
        });

        return result;
    },

    /* Case-InSensitive */
    searchEqualsCaseInSensitive: function (term) {
        var result;
        $.each($('#sidebar').find('li > a'), function () {
            var href = $(this).attr('href').replace(/\//g, '');
            if (href === '#') return true;

            var mnuItemTxt = $(this).text().replace(/أ|إ/g, 'ا').replace(/ /g, '');

            if (mnuItemTxt.toLowerCase() === term.toLowerCase()) {
                result = this;
                return false;
            }

            if (href.toLowerCase() === term.toLowerCase()) {
                result = this;
                return false;
            }

            return true;
        });

        return result;
    },

    searchStartsWithCaseInSensitive: function (term) {
        var result;
        $.each($('#sidebar').find('li > a'), function () {
            var href = $(this).attr('href').replace(/\//g, '');
            if (href === '#') return true;

            var mnuItemTxt = $(this).text().replace(/أ|إ/g, 'ا').replace(/ /g, '');

            var cisstr = new RegExp("^" + term.toLowerCase());
            if (cisstr.test(mnuItemTxt.toLowerCase()))//mnuItemTxt.toLowerCase().match(cisstr))
            {
                result = this;
                return false;
            }

            if (cisstr.test(href.toLowerCase()))//href.toLowerCase().match(cisstr))
            {
                result = this;
                return false;
            }

            return true;
        });

        return result;
    },

    searchContainsCaseInSensitive: function (term) {
        var result;
        $.each($('#sidebar').find('li > a'), function () {
            var href = $(this).attr('href').replace(/\//g, '');
            if (href === '#') return true;

            var mnuItemTxt = $(this).text().replace(/أ|إ/g, 'ا').replace(/ /g, '');

            if (mnuItemTxt.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
                result = this;
                return false;
            }

            if (href.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
                result = this;
                return false;
            }

            return true;
        });

        return result;
    },
};

BT.DateTime = {
    isDateValid: function (value, format)
    {
        if (BT.isNullOrEmpty(value)) return false;
        if (BT.isNullOrEmpty(format)) return moment(value, 'DD/MM/YYYY', true).isValid();
        else return moment(value, format, true).isValid();
    },

    getTime: function (value, format)
    {
        if (BT.isNullOrEmpty(value) && BT.isNullOrEmpty(format)) return moment().format('hh:mm A');
        else if (BT.isNullOrEmpty(format)) return moment(value).format('hh:mm A');
        else return moment(value).format(format);
    },

    getDate: function (value, format)
    {
        if (BT.isNullOrEmpty(value) && BT.isNullOrEmpty(format)) return moment().format('DD/MM/YYYY');
        else if (BT.isNullOrEmpty(format)) return moment(value).format('DD/MM/YYYY');
        else return moment(value).format(format);
    }
};

BT.Grid = {
    defaultJqGrid: function (opts)
    {
        //var width = $(BT.getHash(opts.table)).parent().width() - 10;

        BT.Grid.formatNullNums(opts.options.colModel);
        
        var defaultGrpBy = null;
        if (opts.grpBy !== null)
            $.each(opts.grpBy, function (i, v)
            {
                if (v.onstart === true)
                {
                    defaultGrpBy = {
                        value: v.val,
                        isMulti: v.isMulti
                    };
                    return false;
                } else
                {
                    return true;
                }
            });

        $(BT.getHash(opts.table)).jqGrid('GridUnload');

        $(BT.getHash(opts.table)).jqGrid({
            direction: "rtl",
            gridview: true,
            autowidth: true,
            shrinkToFit: false,
            datatype: "json",
            height: 'auto',
            contentType: 'application/json; charset=utf-8',
            viewrecords: true,
            rowNum: 10,
            rowList: [10, 20, 30, 50, 100],
            mtype: 'GET',
            toppager: true,
            closeAfterAdd: true,
            closeAfterEdit: true,
            altRows: true,
            multiselect: false,
            //multikey: "ctrlKey",
            multiboxonly: true,
            grouping: true,
            groupingView:
                defaultGrpBy === null
                    ? {
                        groupDataSorted: true,
                        plusicon: 'fa fa-chevron-down bigger-110',
                        minusicon: 'fa fa-chevron-up bigger-110'
                    }
                    : {
                        groupDataSorted: true,
                        groupField: defaultGrpBy.isMulti ? defaultGrpBy.value : [defaultGrpBy.value],
                        groupOrder: defaultGrpBy.isMulti ? ['asc', 'asc'] : ['asc'],
                        groupColumnShow: defaultGrpBy.isMulti ? [true, true] : [true],
                        groupText: defaultGrpBy.isMulti ? ['<b>{0}</b> ({1})', '<b>{0}</b> ({1})'] : ['<b>{0}</b> ({1})'],
                        groupSummary: defaultGrpBy.isMulti ? [false, false] : [false],
                        groupCollapse: true,
                        plusicon: 'fa fa-chevron-down bigger-110',
                        minusicon: 'fa fa-chevron-up bigger-110'
                    },
            pager: BT.getHash(opts.pager),
            //width: 1870,//width,//opts.options.width === undefined || opts.options.width === null ? 'auto' : opts.options.width,
            caption: opts.options.caption,
            sortname: opts.options.sortname,
            sortorder: opts.options.sortorder,
            url: opts.options.url,
            editurl: opts.options.editurl,
            colNames: opts.options.colNames,
            colModel: opts.options.colModel,
            postData: opts.options.postData,
            ondblClickRow: function (rowid, iRow, iCol, e)
            {
                if (BT.isNullOrEmpty(opts.options.ondblClickRow))
                {
                    var editBtn = $('#edit_' + this.id);
                    var viewBtn = $('#view_' + this.id);
                    if (!BT.isNullOrEmpty(opts.options.editurl) && editBtn.length > 0)
                    {
                        editBtn.click();
                    } else if (viewBtn.length > 0)
                    {
                        viewBtn.click();
                    }
                } else
                {
                    if ($.isFunction(opts.options.ondblClickRow)) opts.options.ondblClickRow();
                }
            },
            onSelectRow: opts.options.onSelectRow,

            rowattr: opts.options.rowattr,
            //    function (rowData, currentObj, rowId)
            //    {
            //    if (!BT.isNullOrEmpty(opts.options.rowattr) && $.isFunction(opts.options.rowattr))
            //        opts.options.rowattr(rowData);
            //},

            //afterInsertRow: function(rowid, data) {
            //    if (!BT.isNullOrEmpty(opts.options.afterInsertRow) && $.isFunction(opts.options.afterInsertRow))
            //        opts.options.afterInsertRow(rowid, data);
            //},

            loadComplete: function () {
                
                setTimeout(function ()
                {
                    BT.Grid.addJqGridGroupBy(BT.getHash(opts.table), opts.grpBy, defaultGrpBy == null ? null : defaultGrpBy);
                    BT.Grid.updatePagerIcons(BT.getHash(opts.table));
                    BT.Grid.enableTooltips(BT.getHash(opts.table));

                    $(window).trigger('resize.jqGrid');
                }, 0);

                try
                {
                    if (opts.options !== undefined
                        && opts.options !== null
                        && opts.options.loadCompleteFn !== undefined
                        && opts.options.loadCompleteFn !== null
                        && $.isFunction(opts.options.loadCompleteFn)) opts.options.loadCompleteFn();

                    if (opts.options !== undefined
                        && opts.options !== null
                        && opts.options.context !== false)
                    {
                        var ctxtMnuItemIdPrfx = 'ctxtItm_'; //opts.table.substr(1) + '_ctxtItm_';
                        var mnuItems = new Object();
                        $.each($(BT.getHash(opts.pager) + '_left > table > tbody > tr > td.ui-pg-button'), function (i, v) //.ui-corner-all
                        {
                            var id = $(this).attr('id');

                            if ($(this).children().is('span.ui-separator'))
                            {
                                mnuItems['mnusept_' + i] = '-';
                            } else
                            {
                                var ctxtMnuItemId = ctxtMnuItemIdPrfx + id;
                                var title = $(this).attr('title');
                                var iClass = $('#' + id + '> div.ui-pg-div > span')
                                    .attr('class')
                                    .replace('ui-icon', '')
                                    .replace('ace-icon', '')
                                    .trim();

                                if (iClass.indexOf('fa ') != 0) iClass = 'fa ' + iClass;

                                mnuItems[ctxtMnuItemId] = {
                                    name: title,
                                    icon: iClass,
                                    disabled: function (key, opt)
                                    {
                                        return !$('#' + key.substr(key.indexOf('_') + 1)).is(':visible');
                                    }
                                };
                            }
                        });

                        $.contextMenu('destroy', 'table#' + this.id + ' > tbody > tr.jqgrow');

                        $.contextMenu({
                            selector: 'table#' + this.id + ' > tbody > tr.jqgrow',
                            callback: function (key) { $('#' + key.substr(key.indexOf('_') + 1)).click(); },
                            items: mnuItems
                        });
                    };

                    $(BT.getHash(opts.pager)).css('overflow-x', 'auto');
                    $(BT.getHash(opts.pager)).children('div').children('table').css('table-layout', '');

                    $(BT.getHash(opts.table) + '_toppager').css('overflow-x', 'auto');
                    $(BT.getHash(opts.table) + '_toppager').children('div').children('table').css('table-layout', '');
                } catch (er)
                {
                    BT.showErrorNotice(er);
                }
            },

            gridComplete: function ()
            {
                if (!BT.isNullOrEmpty(opts.options)
                    && !BT.isNullOrEmpty(opts.options.gridCompleteFn)
                    && $.isFunction(opts.options.gridCompleteFn)) opts.options.gridCompleteFn();

                //resizeGrid();
           //     $("#" + opts.rowId).click();
                $(".selectedClass").click();
            }
        });

        $(BT.getHash(opts.table)).jqGrid('navGrid', BT.getHash(opts.pager),
            {
                edit: BT.isNullOrEmpty(opts.options.editurl)
                    ? false
                    : BT.isNullOrEmpty(opts.editForms) || BT.isNullOrEmpty(opts.editForms.edit)
                    ? true
                    : BT.isNullOrEmpty(opts.editForms.edit.doShow)
                    ? false
                    : opts.editForms.edit.doShow,
                editicon: 'ace-icon fa fa-pencil blue',
                edittext: '<span class="ui-pg-button-text">تعديل</span>',
                add: BT.isNullOrEmpty(opts.options.editurl)
                    ? false
                    : BT.isNullOrEmpty(opts.editForms) || BT.isNullOrEmpty(opts.editForms.add)
                    ? true
                    : BT.isNullOrEmpty(opts.editForms.add.doShow)
                    ? false
                    : opts.editForms.add.doShow,
                addicon: 'ace-icon fa fa-plus-circle purple',
                addtext: '<span class="ui-pg-button-text">اضافة</span>',
                del: BT.isNullOrEmpty(opts.options.editurl)
                    ? false
                    : BT.isNullOrEmpty(opts.editForms) || BT.isNullOrEmpty(opts.editForms.del)
                    ? true
                    : BT.isNullOrEmpty(opts.editForms.del.doShow)
                    ? false
                    : opts.editForms.del.doShow,
                delicon: 'ace-icon fa fa-trash-o red',
                deltext: '<span class="ui-pg-button-text">حذف</span>',
                search: BT.isNullOrEmpty(opts.editForms) || BT.isNullOrEmpty(opts.editForms.search)
                    ? true
                    : BT.isNullOrEmpty(opts.editForms.search.doShow)
                    ? false
                    : opts.editForms.search.doShow,
                searchicon: 'ace-icon fa fa-search orange',
                searchtext: '<span class="ui-pg-button-text">بحث</span>',
                refresh: BT.isNullOrEmpty(opts.editForms) || BT.isNullOrEmpty(opts.editForms.refresh)
                    ? true
                    : BT.isNullOrEmpty(opts.editForms.refresh.doShow)
                    ? false
                    : opts.editForms.refresh.doShow,
                refreshicon: 'ace-icon fa fa-refresh green',
                refreshtext: '<span class="ui-pg-button-text">تحديث</span>',
                view: BT.isNullOrEmpty(opts.editForms) || BT.isNullOrEmpty(opts.editForms.view)
                    ? true
                    : BT.isNullOrEmpty(opts.editForms.view.doShow)
                    ? false
                    : opts.editForms.view.doShow,
                viewicon: 'ace-icon fa fa-search-plus grey',
                viewtext: '<span class="ui-pg-button-text">إظهار</span>'
            },
            {
                //edit record form
                width: BT.isNullOrEmpty(opts.editForms)
                    || BT.isNullOrEmpty(opts.editForms.edit)
                    || BT.isNullOrEmpty(opts.editForms.edit.width)
                    ? 600
                    : opts.editForms.edit.width,
                dataheight: BT.isNullOrEmpty(opts.editForms)
                    || BT.isNullOrEmpty(opts.editForms.edit)
                    || BT.isNullOrEmpty(opts.editForms.edit.maxHight)
                    || opts.editForms.edit.maxHight === false
                    ? 'auto'
                    : opts.editForms.view.maxHight === true
                    ? $(window).height() * 0.7
                    : opts.editForms.view.maxHight,
                recreateForm: true,
                afterclickPgButtons: function (whichbutton, formid, rowid)
                {
                    //var x = whichbutton;
                    //var y = formid;
                    //var z = rowid;

                    formid.find('.FormElement.select2-offscreen').change();
                },
                beforeShowForm: function (e)
                {
                    var form = $(e[0]);
                    form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />');
                    BT.Grid.styleEditForm(form);

                    form.closest('div.ui-jqdialog').center();

                    if (opts.disableEdit !== undefined && opts.disableEdit !== null && opts.disableEdit !== null)
                        $.each(opts.disableEdit, function (i, v)
                        {
                            form.find('#' + v).prop('disabled', true);
                        });
                },
                afterSubmit: function (response, postdata)
                {
                    try
                    {
                        if ($.isFunction(opts.options.afterSubmitFn)) opts.options.afterSubmitFn();
                    } catch (e)
                    {
                        BT.showErrorNotice(e);
                    }

                    if (response.responseText == "ok")
                    {
                        $(this).jqGrid('setGridParam',
                        { datatype: 'json' }).trigger('reloadGrid'); //Reloads the grid after Add
                        BT.showSuccessNotice();
                        return [true, ''];
                    } else
                    {
                        $(this).jqGrid('setGridParam',
                        { datatype: 'json' }).trigger('reloadGrid'); //Reloads the grid after Add
                        return [false, response.responseText];
                    }
                },
                beforeSubmit: opts.options.beforeSubmit,
                editData: opts.options.editData
            },
            {
                //add record form
                width: BT.isNullOrEmpty(opts.editForms)
                    || BT.isNullOrEmpty(opts.editForms.add)
                    || BT.isNullOrEmpty(opts.editForms.add.width)
                    ? 600
                    : opts.editForms.add.width,
                dataheight: BT.isNullOrEmpty(opts.editForms)
                    || BT.isNullOrEmpty(opts.editForms.add)
                    || BT.isNullOrEmpty(opts.editForms.add.maxHight)
                    || opts.editForms.add.maxHight === false
                    ? 'auto'
                    : opts.editForms.view.maxHight === true
                    ? $(window).height() * 0.7
                    : opts.editForms.view.maxHight,
                closeAfterAdd: true,
                recreateForm: true,
                viewPagerButtons: false,
                beforeShowForm: function (e)
                {
                    var form = $(e[0]);

                    //var tinfo = form.find('tr.tinfo');
                    //var trFormData = form.find('tr.FormData');

                    form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar')
                        .wrapInner('<div class="widget-header" />');
                    BT.Grid.styleEditForm(form);

                    form.closest('div.ui-jqdialog').center();

                    if (opts.disableAdd !== undefined && opts.disableAdd !== null && opts.disableAdd !== null)
                        $.each(opts.disableAdd, function (i, v)
                        {
                            form.find('#' + v).prop('disabled', true);
                        });
                },
                afterSubmit: function (response, postdata)
                {
                    try
                    {
                        if ($.isFunction(opts.options.afterSubmitFn)) opts.options.afterSubmitFn();
                    } catch (e)
                    {
                        BT.showErrorNotice(e);
                    }

                    if (response.responseText == "ok")
                    {
                        $(this).jqGrid('setGridParam',
                        { datatype: 'json' }).trigger('reloadGrid'); //Reloads the grid after Add
                        BT.showSuccessNotice();
                        return [true, ''];
                    } else if (response.responseText.match('^id='))
                    {
                        var lnk = opts.options.afterSubmitUrl;
                        lnk = lnk.replace("__id__", response.responseText.substr(3));
                        window.location.href = lnk;
                    } else
                    {
                        $(this).jqGrid('setGridParam',
                        { datatype: 'json' }).trigger('reloadGrid'); //Reloads the grid after Add
                        return [false, response.responseText];
                    }
                },
                beforeSubmit: opts.options.beforeSubmit,
                editData: opts.options.editData,
                onclickSubmit: opts.options.onclickSubmit
            },
            {
                //delete record form
                width: BT.isNullOrEmpty(opts.editForms)
                    || BT.isNullOrEmpty(opts.editForms.del)
                    || BT.isNullOrEmpty(opts.editForms.del.width)
                    ? 600
                    : opts.editForms.del.width,
                recreateForm: true,
                beforeShowForm: function (e)
                {
                    var form = $(e[0]);
                    form.closest('div.ui-jqdialog').center();
                    if (form.data('styled')) return false;

                    form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />');
                    BT.Grid.styleDeleteForm(form);

                    form.data('styled', true);
                    return true;
                },
                onClick: function (e)
                {
                    alert(1);
                },
                afterSubmit: function (response, postdata)
                {
                    try
                    {
                        if ($.isFunction(opts.options.afterSubmitFn)) opts.options.afterSubmitFn();
                    } catch (e)
                    {
                        BT.showErrorNotice(e);
                    }
                    if (response.responseText == "ok")
                    {
                        $(this).jqGrid('setGridParam',
                        { datatype: 'json' }).trigger('reloadGrid'); //Reloads the grid after Add
                        BT.showSuccessNotice();
                        return [true, ''];
                    } else
                    {
                        $(this).jqGrid('setGridParam',
                        { datatype: 'json' }).trigger('reloadGrid'); //Reloads the grid after Add
                        return [false, response.responseText];
                    }
                },
                editData: opts.options.editData
                
            },
            {
                //search form
                recreateForm: true,
                afterShowSearch: function (e)
                {
                    var form = $(e[0]);
                    form.closest('div.ui-jqdialog').center();
                    form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />');
                    BT.Grid.styleSearchForm(form);
                },
                afterRedraw: function ()
                {
                    BT.Grid.styleSearchFilters($(this));
                },
                multipleSearch: true,
            },
            {
                //view record form
                width: BT.isNullOrEmpty(opts.editForms)
                    || BT.isNullOrEmpty(opts.editForms.view)
                    || BT.isNullOrEmpty(opts.editForms.view.width)
                    ? 600
                    : opts.editForms.view.width,
                dataheight: BT.isNullOrEmpty(opts.editForms)
                    || BT.isNullOrEmpty(opts.editForms.view)
                    || BT.isNullOrEmpty(opts.editForms.view.maxHight)
                    || opts.editForms.view.maxHight === false
                    ? 'auto'
                    : opts.editForms.view.maxHight === true
                    ? $(window).height() * 0.7
                    : opts.editForms.view.maxHight,
                recreateForm: true,
                //viewPagerButtons: true,
                beforeShowForm: function (e)
                {
                    var form = $(e[0]);
                    form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrap('<div class="widget-header" />');
                    //$("tr#trv_CountryCode", form[0]).show();
                    form.closest('div.ui-jqdialog').center();

                    $('.FormGrid .EditTable tr:first-child').show();
                    $('.EditTable tr:first-child').show();

                    if (!BT.isNullOrEmpty(opts.options.addViewFormBtns))
                    {
                        var btns = opts.options.addViewFormBtns;
                        $.each(btns, function (i, v)
                        {
                            form.next('.EditTable')
                                .find('td.EditButton')
                                .prepend('<a id="' + v.id + '" class="fm-button ui-state-default ui-corner-all fm-button-icon-left ' + v.css + '">' +
                                    '<i class="ace-icon fa ' + v.icon + '"></i>' +
                                    v.text +
                                    '</a>');

                            $('#' + v.id).off('click').on('click', function ()
                            {
                                if ($.isFunction(v.onClickFn)) v.onClickFn();
                            });
                        });
                    }
                },
            }
        );

        function resizeGrid()
        {
            if (BT.isNullOrEmpty(opts.isWidget) || opts.isWidget === false)
            {
                var dialog = $(BT.getHash(opts.table)).closest('[class*="ui-dialog-content ui-widget-content"]');
                if (dialog.length > 0)
                {
                    $(BT.getHash(opts.table)).jqGrid('setGridWidth', dialog.width());
                } else
                {
                    $(BT.getHash(opts.table)).jqGrid('setGridWidth', $(BT.getHash(opts.table)).closest('[class*="col-"]').width());
                }
            } else
            {
                //var w = $(BT.getHash(opts.table)).closest('[class="widget-main"]').width();
                $(BT.getHash(opts.table)).jqGrid('setGridWidth', $(BT.getHash(opts.table)).closest('[class="widget-main"]').width());
            }
        }

        //resize to fit page
        $(window).on('resize.jqGrid', function () { resizeGrid(); });

        //resize on sidebar collapse/expand
        $(document).on('settings.ace.jqGrid', function (ev, eventName, collapsed)
        {
            if (eventName === 'sidebar_collapsed' || eventName === 'main_container_fixed')
            {
                resizeGrid();
            }
        });

        if (!BT.isNullOrEmpty(opts.isWidget) && opts.isWidget === true)
        {
            $(BT.getHash(opts.table)).closest('.widget-box').off('fullscreen.ace.widget').on('fullscreen.ace.widget', function (e)
            {
                //var xxx = e;
                setTimeout(function ()
                {
                    resizeGrid();
                }, 0);

            });
        }

        //fullscreen
        //$('.widget-box').off('fullscreen.ace.widget').on('fullscreen.ace.widget', function (e)
        //{
        //    resizeGrid();
        //});


        resizeGrid();

        //$(window).triggerHandler('resize.jqGrid'); //trigger window resize to make the grid get the correct size

        //enable search/filter toolbar
        $(BT.getHash(opts.table)).jqGrid('filterToolbar', { defaultSearch: 'cn', stringResult: true });
        $(BT.getHash(opts.table)).filterToolbar({});
    },

    addJqGridGroupBy: function (gid, opts, defaultGroupBy)
    {
        if (opts === false) return;

        var pagerId = gid + '_toppager_left';
        var selectId = gid + '_groupBySelect';

        if ($(pagerId).find(selectId)[0] == null)
        {

            //var result = "<label for=\"" + selectId.substring(1) + "\">Group By:&nbsp;&nbsp;&nbsp; </label>" +
            //    "<select id=\"" + selectId.substring(1) + "\">" +
            //    "<option value=\"\">No Grouping</option>";

            var result = "<label for=\"" + selectId.substring(1) + "\">تجميع حسب:&nbsp;&nbsp;&nbsp; </label>" +
                "<select style=\"width: 150px\" id=\"" + selectId.substring(1) + "\">" +
                "<option value=\"\">لا شيء</option>";

            if (opts !== undefined && opts !== null && opts.length > 0)
            {
                $.each(opts, function (i, v)
                {
                    if (!v.isMulti)
                        result += "<option value=\"" + v.val + "\">" + BT.camelCase(v.txt) + "</option>";
                });
            } else
            {
                var colModels = $(gid).jqGrid('getGridParam', 'colModel');

                $.each(colModels, function (i, v)
                {
                    if (!v.hidden)
                        result += "<option value=\"" + v.name + "\">" + BT.camelCase(v.name) + "</option>";
                });
            }

            result += "</select>";

            $(pagerId).prepend(result);

            if (opts !== undefined && opts !== null && opts.length > 0 && !BT.isNullOrEmpty(defaultGroupBy) && !defaultGroupBy.isMulti)
            {
                $(selectId).val(defaultGroupBy.value);
            }

            $(selectId).change(function ()
            {
                var groupingName = $(this).val();
                if (groupingName)
                {
                    $(gid).jqGrid('groupingGroupBy', groupingName, {
                        groupOrder: ['asc'],
                        groupColumnShow: [true],
                        groupCollapse: true,
                    });
                } else
                {
                    $(gid).jqGrid('groupingRemove');
                }
            });
        }
    },

    styleEditForm: function (form)
    {
        //enable datepicker on "sdate" field and switches for "stock" field
        form.find('input[name=sdate]').datepicker({ format: 'yyyy-mm-dd', autoclose: true })
            .end().find('input[name=stock]')
            .addClass('ace ace-switch ace-switch-5').after('<span class="lbl"></span>');
        //don't wrap inside a label element, the checkbox value won't be submitted (POST'ed)
        //.addClass('ace ace-switch ace-switch-5').wrap('<label class="inline" />').after('<span class="lbl"></span>');

        //update buttons classes
        var buttons = form.next().find('.EditButton .fm-button');
        buttons.addClass('btn btn-sm').find('[class*="-icon"]').hide(); //ui-icon, s-icon
        buttons.eq(0).addClass('btn-primary').prepend('<i class="ace-icon fa fa-check"></i>');
        buttons.eq(1).prepend('<i class="ace-icon fa fa-times"></i>');

        buttons = form.next().find('.navButton a');
        buttons.find('.ui-icon').hide();
        buttons.eq(0).append('<i class="ace-icon fa fa-chevron-right"></i>');
        buttons.eq(1).append('<i class="ace-icon fa fa-chevron-left"></i>');
    },

    styleDeleteForm: function (form)
    {
        var buttons = form.next().find('.EditButton .fm-button');
        buttons.addClass('btn btn-sm btn-white btn-round').find('[class*="-icon"]').hide(); //ui-icon, s-icon
        buttons.eq(0).addClass('btn-danger').prepend('<i class="ace-icon fa fa-trash-o"></i>');
        buttons.eq(1).addClass('btn-default').prepend('<i class="ace-icon fa fa-times"></i>');
    },

    styleSearchFilters: function (form)
    {
        form.find('.delete-rule').val('X');
        form.find('.add-rule').addClass('btn btn-xs btn-primary');
        form.find('.add-group').addClass('btn btn-xs btn-success');
        form.find('.delete-group').addClass('btn btn-xs btn-danger');
    },

    styleSearchForm: function (form)
    {
        var dialog = form.closest('.ui-jqdialog');
        var buttons = dialog.find('.EditTable');
        buttons.find('.EditButton a[id*="_reset"]').addClass('btn btn-sm btn-info').find('.ui-icon').attr('class', 'ace-icon fa fa-retweet');
        buttons.find('.EditButton a[id*="_query"]').addClass('btn btn-sm btn-inverse').find('.ui-icon').attr('class', 'ace-icon fa fa-comment-o');
        buttons.find('.EditButton a[id*="_search"]').addClass('btn btn-sm btn-purple').find('.ui-icon').attr('class', 'ace-icon fa fa-search');
    },

    updatePagerIcons: function (table)
    {
        var replacement =
        {
            'ui-icon-seek-first': 'ace-icon fa fa-angle-double-left bigger-140',
            'ui-icon-seek-prev': 'ace-icon fa fa-angle-left bigger-140',
            'ui-icon-seek-next': 'ace-icon fa fa-angle-right bigger-140',
            'ui-icon-seek-end': 'ace-icon fa fa-angle-double-right bigger-140'
        };
        $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function ()
        {
            var icon = $(this);
            var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

            if ($class in replacement) icon.attr('class', 'ui-icon ' + replacement[$class]);
        });

        $('#countriesTablePager_left').removeAttr('style');
    },

    enableTooltips: function (table)
    {
        $('.navtable .ui-pg-button').tooltip({ container: 'body' });
        $(table).find('.ui-pg-div').tooltip({ container: 'body' });

        $('#countriesTablePager_left').removeAttr('style');
    },

    showEditDialog: function (table, rowId, width, disableEdit)
    {
        //$(table).jqGrid('editGridRow', rowId);
        $(table).jqGrid('editGridRow', rowId, {
            //edit record form
            width: width,
            recreateForm: true,
            afterclickPgButtons: function (whichbutton, formid, rowid)
            {
                formid.find('.FormElement.select2-offscreen').change();
            },
            beforeShowForm: function (e)
            {
                var form = $(e[0]);
                form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />');
                BT.Grid.styleEditForm(form);
                form.closest('div.ui-jqdialog').center();

                if (disableEdit !== undefined && disableEdit !== null && disableEdit !== null)
                    $.each(disableEdit, function (i, v)
                    {
                        form.find('#' + v).attr('disabled', 'disabled');
                    });
            },
            afterSubmit: function (response, postdata)
            {
                if (response.responseText == "ok")
                {
                    $(this).jqGrid('setGridParam',
                    { datatype: 'json' }).trigger('reloadGrid'); //Reloads the grid after Add
                    BT.showSuccessNotice('تم حفظ التعديلات بنجاح.');
                    return [true, ''];
                } else
                {
                    $(this).jqGrid('setGridParam',
                    { datatype: 'json' }).trigger('reloadGrid'); //Reloads the grid after Add
                    return [false, response.responseText];
                }
            }
        });
    },

    addSeparstor: function (table, pos)
    {
        $(table).jqGrid('navGrid', $(table).jqGrid('getGridParam', 'pager'),
        {
            edit: false,
            add: false,
            del: false,
            search: false,
            refresh: false,
            view: false,
        });
        //alert(table.jqGrid('getGridParam', 'pager'));
        $(table).jqGrid('navSeparatorAdd', $(table).jqGrid('getGridParam', 'pager'), {
            position: BT.isNullOrEmpty(pos) ? 'first' : pos,
        });
    },

    showSelectRowWarning: function (el)
    {
        var idSelector = "#alertmod_" + el.p.id;
        $.jgrid.viewModal(idSelector, {
            gbox: "#gbox_" + $.jgrid.jqID(el.p.id),
            jqm: true
        });
        //$(idSelector).position({
        //    of: "#" + $.jgrid.jqID(el.p.id),
        //    at: "center",
        //    my: "center"
        //});
        $(idSelector).find(".ui-jqdialog-titlebar-close").focus();
    },

    addButton: function (table, opts)
    {
        $(table).jqGrid('navGrid', $(table).jqGrid('getGridParam', 'pager'),
        {
            edit: false,
            add: false,
            del: false,
            search: false,
            refresh: false,
            view: false,
           
        });

        $(table).jqGrid('navButtonAdd', $(table).jqGrid('getGridParam', 'pager'), {
            position: BT.isNullOrEmpty(opts.position) ? 'first' : opts.position,
            caption: '<span class="ui-pg-button-text">' + opts.title + '</span>',
            title: opts.title,
            buttonicon: opts.buttonicon,
            onClickButton: opts.onClickButton,
            id: opts.id
        });
    },

    getSelectedRow: function (table, el, doWarn)
    {
        var rowId = $(table).jqGrid('getGridParam', 'selrow');
        if (BT.isNullOrEmpty(rowId))
        {
            if (doWarn !== false)
                BT.Grid.showSelectRowWarning(el);
            return null;
        } else return $(table).jqGrid('getRowData', rowId);
    },

    setSelectedRow: function (table, rowId)
    {
        $(table).jqGrid('setSelection', rowId);
    },

    nullFormatter: function (cellvalue, options, rowObject)
    {
        if (BT.isNullOrEmpty(cellvalue) || isNull(cellvalue))
        {
            cellvalue = '';
        }

        return cellvalue;
    },

    formatNullNums: function (colModel)
    {
        $.each(colModel, function (i, v)
        {
            if (v.editable !== true) return;
            if (BT.isNullOrEmpty(v.editrules)) return;
            if (v.editrules.number !== true) return;
            if (!BT.isNullOrEmpty(v.editoptions)) return;

            v.editoptions = {
                dataInit: function (el)
                {
                    if ($(el).val().toLowerCase() === 'null')
                        $(el).val('');
                }
            };
        });
    },

    kResize: function (container)
    {
        var $container = $(container),
            grid = $container.find('.k-grid').first(),
            dataArea = grid.find('.k-grid-content').first(),
            otherElements = grid.children().not('.k-grid-content'),
            otherElementsHeight = 0;

        if (container === '#pageContentDiv')
        {
            var gridHeight = 0;
            $container.children().not('.k-grid').each(function ()
            {
                if ($(this).is(':visible') && $(this).children('.k-grid').attr('id') !== grid.attr('id'))
                    gridHeight += $(this).outerHeight(true);
            });

            grid.innerHeight($(window).height() - $('#navbar').outerHeight(true) - $('.page-header').outerHeight(true) - gridHeight - 20);
        } else
        {
            grid.innerHeight($container.height() - 2);
        }

        otherElements.each(function ()
        {
            var v = $(this);

            var isTb = v.hasClass('k-grid-toolbar');
            var isTbVis = isTb && v.is(':visible');

            var isGr = v.hasClass('k-grouping-header');
            var isGrVis = isGr && v.is(':visible');

            var isFt = v.hasClass('k-grid-header');

            var isPg = v.hasClass('k-grid-pager');
            var isPgVis = isPg && v.is(':visible');

            if (isTbVis || isGrVis || isFt || isPgVis)
                otherElementsHeight += v.outerHeight();
        });

        dataArea.height(grid.innerHeight() - otherElementsHeight - 2);
        var x;
    },

    kReload: function (kGrid, data)
    {
        $(kGrid).data('kendoGrid').dataSource.read(data);
        //$(kGrid).data('kendoGrid').refresh();
    },

    kOptions: function (kGrid)
    {
        return $(kGrid).data('kendoGrid').options;
    },

    kGetGrid: function (kGrid)
    {
        return $(kGrid).data('kendoGrid');
    },

    kGetDataSource: function (kGrid)
    {
        return $(kGrid).data('kendoGrid').dataSource;
    },

    kRowData: function (kRow)
    {
        return kRow.closest('.k-grid').data('kendoGrid').dataItem(kRow);
    },

    kOnEvent: function (kGrid, eventName, func, isDoIgnoreExisting)
    {
        var element, existingOnFn;//, isGridEvent;

        switch (eventName)
        {
            // grid datasource events
            case 'error':
            case 'requestStart':
            case 'requestEnd':
                element = BT.Grid.kGetDataSource(kGrid);
                //isGridEvent = false;
                break;
                // grid events
            case 'detailExpand':
            case 'detailInit':
            case 'dataBound':
            case 'change':
                element = BT.Grid.kGetGrid(kGrid);
                //isGridEvent = true;
                break;
            default:
                alert('BT.Grid.kOnEvent: unknown event name');
                return;
        }

        if ((!BT.isNullOrEmpty(isDoIgnoreExisting) && !isDoIgnoreExisting))
        {
            if (!BT.isNullOrEmpty(element._events[eventName])
                && element._events[eventName].length)
                existingOnFn = element._events[eventName][0];
        }

        element.unbind(eventName).bind(eventName, function (e)
        {
            if (!BT.isNullOrEmpty(existingOnFn) && $.isFunction(existingOnFn)) existingOnFn(e);

            if ($.isFunction(func)) func({
                eThis: this,
                event: e,
                kGrid: kGrid
                //grid: isGridEvent ? e.sender : null,
                //data: isGridEvent ? e.sender.dataItem(this.select()) : null
            });
        });
    },

    kGetSelected: function (kGrid)
    {
        return BT.Grid.kGetGrid(kGrid).select();
    },

    kOnSelect: function (kGrid, func, isDoIgnoreExisting)
    {
        BT.Grid.kOnEvent(kGrid, 'change', func, isDoIgnoreExisting);
    },

    kOnError: function (kGrid, func, isDoIgnoreExisting)
    {
        BT.Grid.kOnEvent(kGrid, 'error', func, isDoIgnoreExisting);
    },

    kOnRequestStart: function (kGrid, func, isDoIgnoreExisting)
    {
        BT.Grid.kOnEvent(kGrid, 'requestStart', func, isDoIgnoreExisting);
    },

    kOnRequestEnd: function (kGrid, func, isDoIgnoreExisting)
    {
        BT.Grid.kOnEvent(kGrid, 'requestEnd', func, isDoIgnoreExisting);
    },

    kOnDetailExpand: function (kGrid, func, isDoIgnoreExisting)
    {
        BT.Grid.kOnEvent(kGrid, 'detailExpand', func, isDoIgnoreExisting);
    },

    kOnDetailInit: function (kGrid, func, isDoIgnoreExisting)
    {
        BT.Grid.kOnEvent(kGrid, 'detailInit', func, isDoIgnoreExisting);
    },

    kOnDataBound: function (kGrid, func, isDoIgnoreExisting)
    {
        BT.Grid.kOnEvent(kGrid, 'dataBound', func, isDoIgnoreExisting);
    },

    kEmpty: function (kGrid)
    {
        $(kGrid).find('.k-grid-content').first().find('tbody').empty();
    },

    kAddToolbarButtons: function (kGrid)
    {
        var toolbar;

        if (BT.isNullOrEmpty(kGrid))
        {
            toolbar = $('.k-grid-toolbar');
        } else
        {
            toolbar = $(kGrid).find('.k-grid-toolbar').first();
        }

        var selected = BT.Grid.kGetSelected(kGrid);

        var commands = selected.children('.commandsCol:hidden').children();

        toolbar.find('.kTbBtnCss').remove();

        if (commands.length > 0)
        {
            var isFirst = true;

            $.each(commands, function (i, v)
            {
                var tbBtn = $('<a data-target="' + $(v).uniqueId().attr('id') + '" class="kTbBtnCss k-button k-button-icontext" href="#" ' + (isFirst ? 'style="margin-right: 5px;"' : '') + '>' +
                    $(v).html() +
                    '</a>').uniqueId();

                isFirst = false;

                toolbar.append(tbBtn);
            });

            $('.kTbBtnCss').off('click').on('click', function ()
            {
                $('#' + $(this).data('target')).click();
            });
        }
    },

    kAddMenu: function (kGrid)
    {
        var toolbar;

        if (BT.isNullOrEmpty(kGrid))
        {
            toolbar = $('.k-grid-toolbar');
        } else
        {
            toolbar = $(kGrid).find('.k-grid-toolbar').first();
        }

        if (!toolbar.find('.kGridMnuCss').length)
        {
            var btn = $('<button class="k-button k-button-icontext pull-right kGridMnuCss" type="button">' +
                '<span class="k-icon k-icon k-i-more"></span>' +
                'كافة الأوامر' +
                '</button>').uniqueId();

            var target = '#' + btn.attr('id');

            toolbar.append(btn);

            function getkCtxtMnuItem(v)
            {
                $(v).uniqueId();

                var item = $('<li data-target="' + $(v).attr('id') + '">' + $(v).html() + '</li>').uniqueId();

                return $(item).clone().wrap('<div>').parent().html();
            }

            $('#kGridCommandCtxtMnu').kendoContextMenu({
                open: function (e)
                {
                    var it = [];
                    var items = '';

                    var g = $(e.target).closest('.k-grid');
                    var selected = BT.Grid.kGetSelected(g);

                    if (!selected.length)
                    {
                        e.preventDefault(true);
                        return;
                    }

                    var commands;

                    if (selected.length === 1)
                    {
                        commands = selected.children('.commandsCol').children();

                        if (commands.length > 0)
                        {
                            $.each(commands, function (i, v)
                            {
                                items += getkCtxtMnuItem(v);
                            });
                        }
                    } else
                    {
                        commands = selected.find('.batchCommand');

                        if (commands.length > 0)
                        {
                            $.each(commands, function (i, v)
                            {
                                if (!~$.inArray($(v).html(), it))
                                {
                                    it.push($(v).html());
                                    items += getkCtxtMnuItem(v);
                                }
                            });
                        } else
                        {
                            e.preventDefault(true);
                        }
                    }

                    this.setOptions({
                        dataSource: items
                    });
                },
                select: function (e)
                {
                    $('#' + $('#' + $(e.item).attr('id')).data('target')).click();
                    $('#kGridCommandCtxtMnu').data('kendoContextMenu').close();
                },
                target: target,
                showOn: 'click',
                alignToAnchor: true,
                animation: {
                    open: { effects: 'fadeIn' },
                    duration: 300
                }
            });
        }
    },

    kAddContextMenu: function ()
    {
        function getkCtxtMnuItem(v)
        {
            $(v).uniqueId();

            var item = $('<li data-target="' + $(v).attr('id') + '">' + $(v).html() + '</li>').uniqueId();

            return $(item).clone().wrap('<div>').parent().html();
        }

        var kGridRowCtxtMnu = $('#kGridRowCtxtMnu').data('kendoContextMenu');
        var kGridCtxtMnu = $('#kGridCtxtMnu').data('kendoContextMenu');

        if (!BT.isNullOrEmpty(kGridRowCtxtMnu))
        {
            kGridRowCtxtMnu.setOptions({
                target: '.k-grid',
                filter: 'tbody > tr'
            });
        } else
        {
            $('#kGridRowCtxtMnu').kendoContextMenu({
                open: function (e)
                {
                    var items = '';

                    var row = $(e.target);
                    var grid = this.target.data('kendoGrid');
                    grid.clearSelection();
                    grid.select(row);

                    var toolbarbuttons = $(e.target).closest('.k-grid').children('.k-grid-toolbar').children('.k-button');

                    if (toolbarbuttons.length > 0)
                    {
                        $.each(toolbarbuttons, function (i, v)
                        {
                            if ($(v).hasClass('filterAllUiCss') || $(v).hasClass('kGridMnuCss') || $(v).hasClass('noMenuBtn')) return true; //
                            items += getkCtxtMnuItem(v);
                        });
                    }

                    var commands = row.children('.commandsCol').children();

                    if (commands.length > 0)
                    {
                        $.each(commands, function (i, v)
                        {
                            if ($(v).hasClass('noMenuBtn')) return true;
                            if (items.indexOf($(v).html()) === -1)
                            {
                                if (items.indexOf('<li disabled>-------</li>') === -1)
                                    items += '<li disabled>-------</li>';

                                items += getkCtxtMnuItem(v);
                            }
                        });
                    }

                    this.setOptions({
                        dataSource: items
                    });
                },
                select: function (e)
                {
                    $('#' + $('#' + $(e.item).attr('id')).data('target')).click();
                },
                target: '.k-grid',
                filter: 'tbody > tr',
                animation: {
                    open: { effects: 'fadeIn' },
                    duration: 300
                }
            });
        }

        if (!BT.isNullOrEmpty(kGridCtxtMnu))
        {
            kGridCtxtMnu.setOptions({
                target: '.k-grid',
                filter: '.k-grid-toolbar, .k-grouping-header, .k-grid-header'
            });
        } else
        {
            var tbIdDict = {};

            $('#kGridCtxtMnu').kendoContextMenu({
                open: function (e)
                {
                    var newTbIdDict = {};
                    var items = '';

                    var grid = $(e.target).closest('.k-grid');

                    var toolbar = grid.children('.k-grid-toolbar');
                    var grouping = grid.children('.k-grouping-header');
                    var filter = grid.children('.k-grid-header').find('.k-filter-row');

                    if (toolbar.length)
                    {
                        if (toolbar.is(':visible'))
                            items += '<li id="gridCtxtMnuToolbarItem"><span class="k-icon k-i-minimize"></span>Hide Toolbar</li>';
                        else
                            items += '<li id="gridCtxtMnuToolbarItem"><span class="k-icon k-i-plus"></span>Show Toolbar</li>';

                        newTbIdDict['#gridCtxtMnuToolbarItem'] = toolbar;
                    }

                    if (grouping.length)
                    {
                        if (grouping.is(':visible'))
                            items += '<li id="gridCtxtMnuGroupingItem"><span class="k-icon k-i-minimize"></span>Hide Grouping</li>';
                        else
                            items += '<li id="gridCtxtMnuGroupingItem"><span class="k-icon k-i-plus"></span>Show Grouping</li>';

                        newTbIdDict['#gridCtxtMnuGroupingItem'] = grouping;
                    }


                    if (filter.length)
                    {
                        if (filter.is(':visible'))
                            items += '<li id="gridCtxtMnuFilterItem"><span class="k-icon k-i-minimize"></span>Hide Filter</li>';
                        else
                            items += '<li id="gridCtxtMnuFilterItem"><span class="k-icon k-i-plus"></span>Show Filter</li>';

                        newTbIdDict['#gridCtxtMnuFilterItem'] = filter;
                    }

                    tbIdDict = newTbIdDict;

                    this.setOptions({
                        dataSource: items
                    });
                },
                select: function (e)
                {
                    var tb = tbIdDict['#' + e.item.id];

                    if (tb.is(':visible')) tb.hide();
                    else tb.show();

                    BT.Grid.kResize(tb.closest('.k-grid').parent());
                },
                target: '.k-grid',
                filter: '.k-grid-toolbar, .k-grouping-header, .k-grid-header',
                animation: {
                    open: { effects: 'fadeIn' },
                    duration: 300
                }
            });
        }
    },
    kPublicSerach: function (kGrid)
{
        function searchAll(grid, q) {
        
            var url = grid.options.dataSource.transport.read.url;
            grid.dataSource.transport.options.read.url = url + "?publicSearch=" + q;
            grid.dataSource.read();

        }

        var toolbar;

        if (BT.isNullOrEmpty(kGrid)) {
            toolbar = $('.k-grid-toolbar');
        } else {
            toolbar = $(kGrid).find('.k-grid-toolbar').first();
        }

        if (!toolbar.find('.filterAllUiCss').length) {
            toolbar.append(
                '<button class="k-button k-button-icontext pull-left filterAllUiCss" type="button"><span class="k-icon k-i-search"></span>بحث</button>' +
                '<input type="text" class="pull-left filterAllUiCss" style="width: 200px; vertical-align: middle;" placeholder="بحث في كل الجدول (يحتوي)"/>'
            );
        }

        $('button.filterAllUiCss').off('click').on('click', function (e) {
            var grid = $(this).closest('.k-grid').data('kendoGrid');
            var q = $(this).parent().children('input.filterAllUiCss').val();
            searchAll(grid, q);
        });

        $('input.filterAllUiCss').off('keypress').on('keypress', function (e) {
            if (e.which == 13) {
                var grid = $(this).closest('.k-grid').data('kendoGrid');
                var q = $(this).val();
                searchAll(grid, q);
            }
        });
    },
    kAddFilterAll: function (kGrid)
    {
        function filterAll(grid, q)
        {
            var filters = [];
    
            q = q.trim();
            if (q !== undefined && q !== null && q !== '' && q != "") {
                //filters.push({ field: 'ID', operator: 'contains', value: q + "_all" });
                $.each(grid.columns, function(i, v) {
                    if ((v.template !== undefined && v.template !== null) /* || (v.values !== undefined && v.values !== null)*/)
                        return true;
                    var field = grid.dataSource.options.schema.model.fields[v.field];
                    if (field !== undefined && field !== null && field.type === 'string')
                        filters.push({ field: v.field, operator: 'contains', value: q });

                });
            }
            grid.dataSource.query({
                page: 1,
                pageSize: grid.dataSource.pageSize(),
                filter: {
                    logic: 'or',
                    filters: filters,
                },
            }           
);
 
       
        }

        var toolbar;

        if (BT.isNullOrEmpty(kGrid))
        {
            toolbar = $('.k-grid-toolbar');
        } else
        {
            toolbar = $(kGrid).find('.k-grid-toolbar').first();
        }

        if (!toolbar.find('.filterAllUiCss').length)
        {
            toolbar.append(
                '<button class="k-button k-button-icontext pull-left filterAllUiCss" type="button"><span class="k-icon k-i-search"></span>بحث</button>' +
                '<input type="text" class="pull-left filterAllUiCss" style="width: 200px; vertical-align: middle;" placeholder="بحث في كل الجدول (يحتوي)"/>'
            );
        }

        $('button.filterAllUiCss').off('click').on('click', function (e)
        {
            var grid = $(this).closest('.k-grid').data('kendoGrid');
            var q = $(this).parent().children('input.filterAllUiCss').val();
            filterAll(grid, q);
        });

        $('input.filterAllUiCss').off('keypress').on('keypress', function (e)
        {
            if (e.which == 13)
            {
                var grid = $(this).closest('.k-grid').data('kendoGrid');
                var q = $(this).val();
                filterAll(grid, q);
            }
        });
    },

    kAddExcelImport: function (kGrid, model, url)
    {
        var toolbar,
            dialog = $('#modal-import-excel'),
            file = $('#importExcelUpload'),
            importBtn = $('#importExcelBtn'),
            gridCols = $('#grid-cols'),
            excelCols = $('#excel-cols'),
            importExcelResult = $('#importExcelResult'),
            cw = dialog.data('kendoWindow');

        file.ace_file_input({
            no_file: 'ملف غير مرفق ...',
            btn_choose: 'اختر',
            btn_change: 'تغير',
            droppable: false,
            onchange: null,
            thumbnail: false
        });

        if (BT.isNullOrEmpty(kGrid))
        {
            toolbar = $('.k-grid-toolbar');
        } else
        {
            toolbar = $(kGrid).find('.k-grid-toolbar').first();
        }

        if (!toolbar.find('.importFromExcel').length)
        {
            toolbar.append(
                '<button class="k-button k-button-icontext importFromExcel" type="button"><span class="k-icon k-i-excel"></span>Import from Excel</button>'
            );
        }

        $('button.importFromExcel').off('click').on('click', function (e)
        {
            importExcelResult.empty();
            gridCols.empty();
            excelCols.empty();

            var htmlGrid = $(this).closest('.k-grid');

            var grid = htmlGrid.data('kendoGrid');

            var cols = '';

            $.each(grid.columns, function (i, v)
            {
                //if ((v.template !== undefined && v.template !== null) /* || (v.values !== undefined && v.values !== null)*/)
                //    return true;

                var field = grid.dataSource.options.schema.model.fields[v.field];

                if (!BT.isNullOrEmpty(field))
                    cols += '<li class="dd-item dd2-item" data-field="' + v.field + '" >' +
                        '<div class="dd2-content" style="min-height: auto !important;">' + v.title + '&nbsp;&nbsp; (&nbsp;' + field.type + '&nbsp;)' + '</div>' +
                        '</li>';
            });

            importBtn.off('click').on('click', function (e)
            {
                importExcelResult.empty();

                var fileToUp = file[0].files[0];
                var fields = excelCols.find('li.dd-item').map(function () { return $(this).data('field'); }).get();

                if (BT.isNullOrEmpty(fileToUp) || BT.isNullOrEmpty(fields) || fields.length === 0)
                {
                    importExcelResult.append('<p class="red">Please select fields and a Excel file to upload</p>');
                    return;
                }

                var formdata = new window.FormData();
                formdata.append('file', fileToUp);
                formdata.append('fields', fields);
                formdata.append('model', model /*grid.element.attr('id')*/);

                var ajaxOpts = {
                    url: url,
                    data: formdata,
                    contentType: false,
                    processData: false,
                    cache: false,
                    type: 'POST',
                    error: function (xhr, ajaxOptions, thrownError) { importExcelResult.append('<p class="red">' + thrownError + '</p>'); }
                };

                $.ajax(ajaxOpts).done(function (d)
                {
                    if (d.HasError)
                    {
                        importExcelResult.append('<p class="red">' + d.ErrorMessage.replace(/\n/g, '<br />') + '</p>');
                        return;
                    }

                    var data = jQuery.parseJSON(d.Data);

                    importExcelResult.empty();
                    importExcelResult.append('<p class="green">Successfully inserted: ' + data.Inserted + ' records.</p>');
                });
            });

            gridCols.append(cols);

            cw.open().center();
        });
    },

    kAddExcelImportEdit: function (kGrid, url, saveUrl, doCloseWindowAfterSuccess, successFn)
    {
        var toolbar,
            dialog = $('#modal-import-excel-edit'),
            file = $('#importEditExcelUpload'),
            importBtn = $('#importEditExcelBtn'),
            closeBtn = $('#modal-import-excel-editWindowCloseButton'),
            saveBtn = $('#modal-import-excel-editWindowSaveButton'),
            gridCols = $('#grid-cols-edit'),
            excelCols = $('#excel-cols-edit'),
            editGrid = $('#importExcelEditGridResult'),
            importExcelResult = $('#importExcelEditResult'),
            cw = dialog.data('kendoWindow');

        file.ace_file_input({
            no_file: 'ملف غير مرفق ...',
            btn_choose: 'اختر',
            btn_change: 'تغير',
            droppable: false,
            onchange: null,
            thumbnail: false
        });

        if (BT.isNullOrEmpty(kGrid))
        {
            toolbar = $('.k-grid-toolbar');
        } else
        {
            toolbar = $(kGrid).find('.k-grid-toolbar').first();
        }

        if (!toolbar.find('.importFromExcelEdit').length)
        {
            toolbar.append(
                '<button class="k-button k-button-icontext importFromExcelEdit" type="button"><span class="k-icon k-i-excel"></span>Import from Excel with edit</button>'
            );
        }

        $('button.importFromExcelEdit').off('click').on('click', function (e)
        {
            importExcelResult.empty();
            gridCols.empty();
            excelCols.empty();
            if (editGrid.data('kendoGrid'))
                editGrid.data('kendoGrid').destroy();
            editGrid.empty();

            var htmlGrid = $(this).closest('.k-grid');

            var grid = htmlGrid.data('kendoGrid');

            var cols = '';

            $.each(grid.columns, function (i, v)
            {
                //if ((v.template !== undefined && v.template !== null) /* || (v.values !== undefined && v.values !== null)*/)
                //    return true;

                var field = grid.dataSource.options.schema.model.fields[v.field];

                if (!BT.isNullOrEmpty(field))
                    cols += '<li class="dd-item dd2-item" data-fieldtype="' + field.type + '" data-field="' + v.field + '" >' +
                        '<div class="dd2-content" style="min-height: auto !important;">' + v.title + '&nbsp;&nbsp; (&nbsp;' + field.type + '&nbsp;)' + '</div>' +
                        '</li>';
            });

            closeBtn.off('click').on('click', function (e)
            {
                cw.close();
            });

            saveBtn.off('click').on('click', function (e)
            {
                saveBtn.prop('disabled', true);
                var data = editGrid.data('kendoGrid').dataSource.data();
                var jData = JSON.stringify(data);
                var pData = JSON.parse(jData);

                var ajaxOpts = {
                    url: saveUrl,
                    data: JSON.stringify(pData), //{ data: JSON.stringify(pData) }, //{ data: pData }, //JSON.stringify(data)
                    contentType: 'application/json; charset=utf-8',
                    //processData: false,
                    //cache: false,
                    type: 'POST',
                    error: function(xhr, ajaxOptions, thrownError) {
                        importExcelResult.append('<p class="red">' + thrownError + '</p>'); 
                        importBtn.prop('disabled', false);
                        saveBtn.prop('disabled', false);
                    }
                };

                $.ajax(ajaxOpts).done(function (d)
                {
                    
                    saveBtn.prop('disabled', false);
                    
                    if (d.HasError)
                    {
                        importExcelResult.append('<p class="red">' + d.ErrorMessage.replace(/\n/g, '<br />') + '</p>');
                        importBtn.prop('disabled', false);
                        saveBtn.prop('disabled', false);
                        return;
                    }
                    if (d.Inserted==0)
                    {
                        importExcelResult.append('<p class="red">' + d.msg + '</p>');
                        return;
                    }
                    var dt = jQuery.parseJSON(d.Data);

                    importExcelResult.empty();
                    importExcelResult.append('<p class="green">Successfully inserted: ' + dt.Inserted + ' records.</p>');

                    if (doCloseWindowAfterSuccess) cw.close();

                    if ($.isFunction(successFn)) successFn();
                });
            });

            importBtn.off('click').on('click', function (e)
            {
                importBtn.prop('disabled', true);
                importExcelResult.empty();

                var fileToUp = file[0].files[0];
                var fields = excelCols.find('li.dd-item').map(function () { return $(this).data('field'); }).get();

                if (BT.isNullOrEmpty(fileToUp) || BT.isNullOrEmpty(fields) || fields.length === 0)
                {
                    importExcelResult.append('<p class="red">Please select fields and a Excel file to upload</p>');
                    importBtn.prop('disabled', false);
                    saveBtn.prop('disabled', false);
                    return;
                }

                var formdata = new window.FormData();
                formdata.append('file', fileToUp);
                formdata.append('fields', fields);

                var ajaxOpts = {
                    url: url,
                    data: formdata,
                    contentType: false,
                    processData: false,
                    cache: false,
                    type: 'POST',
                    error: function (xhr, ajaxOptions, thrownError) { importExcelResult.append('<p class="red">' + thrownError + '</p>'); }
                };

                $.ajax(ajaxOpts).done(function (d)
                {
                    importBtn.prop('disabled', false);
                    if (d.HasError)
                    {
                        importExcelResult.append('<p class="red">' + d.ErrorMessage.replace(/\n/g, '<br />') + '</p>');
                        return;
                    }

                    var data = jQuery.parseJSON(d.Data);

                    function dateTimeReviver(key, value)
                    {
                        var a;
                        if (typeof value === 'string')
                        {
                            a = /\/Date\((\d*)\)\//.exec(value);
                            if (a)
                            {
                                return BT.DateTime.getDate(a);
                            }
                        }
                        return value;
                    }

                    var xData = JSON.parse(data.data, dateTimeReviver);

                    var cols = [];
                    $.each(grid.columns, function (i, v)
                    {
                        if (BT.isNullOrEmpty(v.command))
                            cols.push(v);
                    });

                    cols.push({ command: 'destroy' });

                    editGrid.kendoGrid({
                        selectable: 'cell',
                        editable: true,
                        columns: cols, //grid.columns,
                        dataSource: xData //jQuery.parseJSON(data.data)
                    });

                    importExcelResult.empty();
                    //importExcelResult.append('<p class="green">Successfully inserted: ' + data.Inserted + ' records.</p>');
                    importExcelResult.append(data);
                });
            });

            gridCols.append(cols);

            cw.open().center();
        });
    },

    kHideToolbars: function (kGrid)
    {
        var toolbar = kGrid.children('.k-grid-toolbar');
        var grouping = kGrid.children('.k-grouping-header');
        var filter = kGrid.children('.k-grid-header').find('.k-filter-row');

        //if (toolbar.length && toolbar.is(':visible')) toolbar.hide();

        if (grouping.length && grouping.is(':visible')) grouping.hide();

        if (filter.length && filter.is(':visible')) filter.hide();
    },

    kAddKeyboardNav: function (kGrid)
    {
        $(kGrid).keydown(function (e)
        {
            if (e.altKey && e.keyCode == 78)
            {
                var toolbarbuttons = $(kGrid).find('.k-grid-toolbar > .k-button');

                if (toolbarbuttons.length > 0)
                {
                    $.each(toolbarbuttons, function (i, v)
                    {
                        var go = true;
                        if ($(v).hasClass('k-grid-add'))
                        {
                            go = false;
                            $(v).click();
                        }
                        return go;
                    });
                }
            }
        });
    },

    kBundle: function (grids)
    {
        var lastRequestType;

        function onErrorHandler(e)
        {

            var ew = $('#errorWindow'),
                    msg = '',
                    grid = e.eThis;

            //var ev = e.kGrid;

            ew.prev().css('background-color', '#F77878').css('color', '#FDFDFD');

            if (e.event.status === 'customerror')
            {
                if ($.type(e.event.errors) === 'string')
                {
                    msg += '<p>' + e.event.errors + '</p>';
                } else
                {
                    $.each(e.event.errors, function (ix, vx)
                    {
                        if ('errors' in vx)
                        {
                            $.each(vx.errors, function ()
                            {
                                msg += '<p>' + this + '</p>';
                            });
                        }
                    });
                }
            }
            else
            {
                msg += '<p>Internal server error</p>';
            }

            ew.html(msg);


            if (lastRequestType === 'destroy') grid.cancelChanges();
            else if (lastRequestType === 'update')
            {
                var grid2 = $(e.kGrid).data("kendoGrid");
                //var gridName = eThis.options.table.context.id

                grid2.one("dataBinding", function (e)
                {
                    e.preventDefault();  // cancel grid rebind if error occurs

                });

            }
            else if (lastRequestType === 'create')
            {

                var grid2 = $(e.kGrid).data("kendoGrid");
                //var gridName = eThis.options.table.context.id

                grid2.one("dataBinding", function (e)
                {
                    e.preventDefault();  // cancel grid rebind if error occurs

                });

            }
            ew.data('kendoWindow').center().open();
        }

        BT.Grid.kAddContextMenu();

        if (BT.isNullOrEmpty(grids) || !grids.leangth) grids = $('.k-grid');

        grids.each(function (i, v)
        {
            BT.Grid.kAddFilterAll(v);

            BT.Grid.kOnRequestStart(v, function (e)
            {
                lastRequestType = e.event.type;
            });

            BT.Grid.kOnDetailExpand(v, function onDetailExpand(e)
            {
                var parentGrid = e.event.masterRow.closest('.k-grid');

                //var grandParent = parentGrid.parent();

                //if (grandParent.length && grandParent.hasClass('row k-rtl') && grandParent.parent().attr('id') === 'pageContentDiv')
                //{
                //    $(window).off('resize');
                //    if ($('body').hasClass('noScroll'))
                //    {
                //        $('body').removeClass('noScroll');
                //    }
                //   // $('body').css('overflow', 'auto !important');
                //}

                var parentGridContent = parentGrid.find('.k-grid-content').first(),
                    parentGridContentHeight = parentGridContent.height(),
                    masterRowHeight = e.event.masterRow.height(),
                    detailRow = e.event.detailRow,
                    detailCell = detailRow.find('.k-detail-cell'),
                    childGrid = e.event.detailRow.find('.k-grid').first(),
                    detailRowHeight = detailRow.height(),
                    scrollbarHeight = parentGridContent.get(0).offsetHeight - parentGridContent.get(0).clientHeight,
                    detailCellHeight = detailCell.height(),
                    padding = detailRowHeight - detailCellHeight,
                    //dHeight = parentGridContentHeight - masterRowHeight - padding - scrollbarHeight;
                    dHeight = parentGridContentHeight - masterRowHeight - padding - scrollbarHeight;

                BT.Grid.kOnRequestStart(childGrid, function (e)
                {
                    lastRequestType = e.event.type;
                });

                //var x;

                if (!detailRow.hasClass('autoResized'))
                {
                    //grandParent.height(parentGridContent.height() + dHeight);
                    //BT.Grid.kResize(grandParent);

                    detailCell.height(dHeight);

                    BT.Grid.kAddFilterAll(childGrid);

                    BT.Grid.kHideToolbars(childGrid);

                    BT.Grid.kOnError(childGrid, onErrorHandler);

                    //BT.Grid.kAddMenu(childGrid);

                    BT.Grid.kAddKeyboardNav(childGrid);

                    BT.Grid.kOnSelect(childGrid, function (ge)
                    {
                        BT.Grid.kAddToolbarButtons(childGrid);
                    });

                    detailRow.addClass('autoResized');

                    BT.Grid.kOnDataBound(childGrid, function () { BT.Grid.kResize(childGrid.parent()); });
                }

                BT.Grid.kOnDetailExpand(childGrid, onDetailExpand, false);
            }, false);

            BT.Grid.kOnError(v, onErrorHandler);

            //BT.Grid.kAddMenu(v);

            BT.Grid.kOnSelect(v, function (ge)
            {
                BT.Grid.kAddToolbarButtons(v);
            });

            BT.Grid.kAddKeyboardNav(v);
        });
    },

    reload: function (table) {
        $(table).trigger('reloadGrid');
    },

    kPrintGrid: function (kGrid) {
        function printAllGrid(grid,id) {
          
            var printableContent = '',
            win = window.open('', '', 'width=800, height=800');
            var dataSource = grid.dataSource;
            dataSource.pageSize(dataSource.total());

            var htmlStart =
                   '<!DOCTYPE html>' +
                   '<html>' +
                   '<head>' +
                   '<meta charset="utf-8" />' +
                   '<title>  </title>' +
                   '<link href="http://kendo.cdn.telerik.com/' + kendo.version + '/styles/kendo.common.min.css" rel="stylesheet" /> ' +
                   '<style>' +
                   'html { font: 11pt sans-serif; direction :rtl ; float :right ; }' +
                   '.k-grid { border-top-width: 0; }' +
                   '.k-grid, .k-grid-content { height: auto !important; }' +
                   '.k-grid-content { overflow: visible !important; }' +
                   'div.k-grid table { table-layout: auto; width: 100% !important;  border:solid black !important; border-bottom:1px solid black !important ;border-top: 1px solid black !important}' +
                   '.k-grid .k-grid-header th { border-top: 1px solid; direction :rtl ; background-color: gray !important;  }' +
                   '.k-grouping-header, .k-grid-toolbar, .k-grid-pager > .k-link { display: none; }' +
                   '.k-grid-pager { display: none; }' + // optional: hide the whole pager 
                   '.k-grouping-header { display: none; }' +
                   '.k-filter-row { display: none; } ' +
                   '.k-grid tr td { border-bottom: 1px solid black; }' +
                   '</style>' +
                   '</head>' +
                   '<body>';

            var htmlEnd =
                    '</body>' +
                    '</html>';

            var gridHeader = $("#"+id).children('.k-grid-header');
            if (gridHeader[0]) {
                var thead = gridHeader.find('thead').clone().addClass('k-grid-header');
                printableContent = $("#" + id)
                    .clone()
                        .children('.k-grid-header').remove()
                    .end()
                        .children('.k-grid-content')
                            .find('table')
                                .first()
                                    .children('tbody').before(thead)
                                .end()
                            .end()
                        .end()
                    .end()[0].outerHTML;
            }
            else {
                printableContent = $("#" + id).clone()[0].outerHTML;
            }

           var doc = win.document.open();
            doc.write(htmlStart + printableContent + htmlEnd);
            doc.close();
            win.print();

        }

        var toolbar;

        if (BT.isNullOrEmpty(kGrid)) {
            toolbar = $('.k-grid-toolbar');
        } else {
            toolbar = $(kGrid).find('.k-grid-toolbar').first();
        }

        if (!toolbar.find('.printAllUiCss').length) {
            toolbar.append(
                '<button class="k-button k-button-icontext  printAllUiCss" type="button"><span class="ace-icon fa fa-print"></span>Print</button>'
            );
        }

        $('button.printAllUiCss').off('click').on('click', function (e) {
            var grid = $(this).closest('.k-grid').data('kendoGrid');
            var id = $(this).closest('.k-grid').attr("id");
            printAllGrid(grid,id);
        });
    }

};

BT.select2 = {
    minInputLength: 0,
    pageSize: 5,

    defaultAr: function (element, url, pid)
    {
        BT.select2.create(element, url,
        {
            placeholder: 'اختر',
            minimumInputLength: '',
            pid: pid
        });
    },

    defaultEn: function (element, url, pid)
    {
        BT.select2.create(element, url,
        {
            placeholder: 'Select',
            minimumInputLength: '',
            pid: pid
        });
    },

    create: function (element, url, opts)
    {
        $(element).select2('destroy');
        $(element).select2({
            placeholder: BT.isNullOrEmpty(opts.placeholder)
                ? 'Select'
                : opts.placeholder,
            minimumInputLength: BT.isNullOrEmpty(opts.minimumInputLength)
                ? this.minInputLength
                : opts.minimumInputLength,
            allowClear: true,
            initSelection: function (el, cb)
            {
                if ($(element).val() !== undefined || $(element).val() !== null || $(element).val() !== '')
                    return $.ajax({
                        type: "GET",
                        url: url,
                        dataType: 'json',
                        data: { id: ($(element).val()), pid: opts.pid },
                        success: function (data)
                        {
                            cb(data.Results[0]);
                        }
                    });

                return null;
            },
            ajax: {
                quietMillis: 150,
                url: url,
                dataType: 'json',
                data: function (term, page)
                {
                    return {
                        pageSize: BT.select2.pageSize,
                        pageNum: page,
                        searchTerm: term,
                        pid: opts.pid
                    };
                },
                results: function (data, page)
                {
                    var more = (page * BT.select2.pageSize) < data.Total;
                    return { results: data.Results, more: more };
                }
            }
        });
    },

    destroy: function (element)
    {
        $(element).select2('destroy');
    },

    data: function (element)
    {
        return $(element).select2('data').data;
    },

    text: function (element)
    {
        return $(element).select2('data').text;
    },

    id: function (element)
    {
        return $(element).select2('data').id;
    },
};

BT.select22 = {
    minInputLength: 0,
    pageSize: 5,

    defaultAr: function (element, data, pid) {
        BT.select2.create(element, data,
        {
            placeholder: 'اختر',
            minimumInputLength: '',
            pid: pid
        });
    },

    defaultEn: function (element, data, pid) {
        BT.select2.create(element, data,
        {
            placeholder: 'Select',
            minimumInputLength: '',
            pid: pid
        });
    },

    create: function (element, data, opts) {
        $(element).select2('destroy');
        $(element).select2({
            placeholder: BT.isNullOrEmpty(opts.placeholder)
                ? 'Select'
                : opts.placeholder,
            minimumInputLength: BT.isNullOrEmpty(opts.minimumInputLength)
                ? this.minInputLength
                : opts.minimumInputLength,
            allowClear: true,
            initSelection: function (el, cb) {
                if ($(element).val() !== undefined || $(element).val() !== null || $(element).val() !== '')
                    //return $.ajax({
                    //    type: "GET",
                    //    url: url,
                    //    dataType: 'json',
                    //    data: { id: ($(element).val()), pid: opts.pid },
                    //    success: function (data) {
                    //        cb(data.Results[0]);
                    //    }
                    //});
                    return cb(data.Results[0]);
                return null;
            },
            ajax: {
                quietMillis: 150,
                url: url,
                dataType: 'json',
                data: function (term, page) {
                    return {
                        pageSize: BT.select2.pageSize,
                        pageNum: page,
                        searchTerm: term,
                        pid: opts.pid
                    };
                },
                results: function (data, page) {
                    var more = (page * BT.select2.pageSize) < data.Total;
                    return { results: data.Results, more: more };
                }
            }
        });
    },

    destroy: function (element) {
        $(element).select2('destroy');
    },

    data: function (element) {
        return $(element).select2('data').data;
    },

    text: function (element) {
        return $(element).select2('data').text;
    },

    id: function (element) {
        return $(element).select2('data').id;
    },
};

BT.Dialog = {
    Create: function (dialogId, opts)
    {
        //var buttons = [
        //    {
        //        text: 'Close',
        //        'class': 'btn btn-sm btn-danger',
        //        click: function () { $(this).dialog("close"); }
        //    }
        //];

        var buttons = [
            {
                text: 'اغلاق',
                'class': 'btn btn-sm btn-danger',
                click: function () { $(this).dialog("close"); }
            }
        ];


        if (opts !== undefined && opts !== null && opts.onSaveFn !== undefined && opts.onSaveFn !== null)
        {
            //buttons = [
            //    {
            //        id: 'btnSave',
            //        text: opts.saveBtnTxt !== undefined && opts.saveBtnTxt !== null ? opts.saveBtnTxt : 'Save',
            //        'class': 'btn btn-sm btn-success',
            //        click: opts.onSaveFn
            //    },
            //    {
            //        id: 'btnClose',
            //        text: 'Close',
            //        'class': 'btn btn-sm btn-danger',
            //        click: function () { $(this).dialog("close"); }
            //    }
            //];

            buttons = [
                {
                    id: 'btnClose',
                    text: 'اغلاق',
                    'class': 'btn btn-sm btn-danger',
                    click: function () { $(this).dialog("close"); }
                },
                {
                    id: 'btnSave',
                    text: opts.saveBtnTxt !== undefined && opts.saveBtnTxt !== null ? opts.saveBtnTxt : 'حفظ',
                    'class': 'btn btn-sm btn-success',
                    click: opts.onSaveFn
                }
            ];
        } else if (opts !== undefined && opts !== null && opts.buttons !== undefined && opts.buttons !== null)
        {
            buttons = opts.buttons;
        }

        if (opts !== undefined && opts !== null && opts.addButtons !== undefined && opts.addButtons !== null)
        {
            $.each(opts.addButtons, function (i, v)
            {
                buttons.push(v);
            });
        }

        try
        {
            //$(dialogId).dialog('close');
            $(dialogId).dialog('destroy');
        } catch (e)
        {
        }

        var wWidth = $(window).width();
        var dWidth = wWidth * 0.9;
        var wHeight = $(window).height();
        var dHeight = wHeight * 0.9;

        var errorTxtId = dialogId + '_ErrorTxt';
        var errorDivId = dialogId + '_ErrorDiv';
        var spinnerId = dialogId + '_Spinner';

        if (!$(dialogId).find(errorDivId).length)
            //$(dialogId).prepend('<div id=\"' + errorDivId.substr(1) + '" class="alert alert-danger"> '
            //    + '<strong id>'
            //    + '<i class="ace-icon fa fa-times"></i>'
            //    + '&nbsp;&nbsp;&nbsp;Error! '
            //    + '</strong>'
            //    + '<br />'
            //    + '<span id=\"' + errorTxtId.substr(1) + '"></span>'
            //    + '</div>');
            $(dialogId).prepend('<div id=\"' + errorDivId.substr(1) + '" class="alert alert-danger"> '
                + '<strong id>'
                + '<i class="ace-icon fa fa-times"></i>'
                + '&nbsp;&nbsp;&nbsp;خطأ! '
                + '</strong>'
                + '<br />'
                + '<span id=\"' + errorTxtId.substr(1) + '"></span>'
                + '</div>');

        $(errorDivId).hide();

        $(dialogId).dialog(
        {
            buttons: buttons,
            autoResize: true,
            modal: opts !== undefined
                && opts !== null
                && opts.modal !== undefined
                && opts.modal !== null
                ? opts.modal
                : true,
            width: opts !== undefined
                && opts !== null
                && opts.width !== undefined
                && opts.width !== null
                ? opts.width === 'max'
                ? dWidth
                : opts.width
                : $(dialogId).width() < 500
                ? 500
                : 'auto', //'auto', //500,
            height: opts !== undefined
                && opts !== null
                && opts.height !== undefined
                && opts.height !== null
                ? opts.height === 'max'
                ? dHeight
                : opts.height
                : 'auto', //500,
            maxHeight: dHeight,
            maxWidth: dWidth,
            position: { my: 'top', at: 'top+50' },
            title: opts !== undefined
                && opts !== null
                && opts.title !== undefined
                && opts.title !== null
                ? opts.title
                : 'Dialog Title',
            resize: function (event, ui)
            {
                $(this).dialog("widget").css({ height: '', width: '' });

                try
                {
                    if (opts !== undefined
                        && opts !== null
                        && opts.onResizeFn !== undefined
                        && opts.onResizeFn !== null
                        && $.isFunction(opts.onResizeFn)) opts.onResizeFn(ui.size);
                } catch (er)
                {
                    BT.showErrorNotice(er);
                }
            },
            create: function (event, ui)
            {
                if (!$(this).dialog("widget").find('div.ui-dialog-titlebar>div.widget-header').length)
                    $(this).dialog("widget").find('div.ui-dialog-titlebar').wrapInner('<div class="widget-header" />');

                try
                {
                    if (opts !== undefined
                        && opts !== null
                        && opts.onCreateFn !== undefined
                        && opts.onCreateFn !== null
                        && $.isFunction(opts.onCreateFn)) opts.onCreateFn();
                } catch (er)
                {
                    BT.showErrorNotice(er);
                }
            },
            open: function (event, ui)
            {
                try
                {
                    if (opts !== undefined
                        && opts !== null
                        && opts.onOpenFn !== undefined
                        && opts.onOpenFn !== null
                        && $.isFunction(opts.onOpenFn)) opts.onOpenFn(this);
                } catch (er)
                {
                    BT.showErrorNotice(er);
                }
            }
        });
    },

    hide: function (dialogId)
    {
        $(dialogId).dialog('close');
    },

    showError: function (dialogId, error)
    {
        $(dialogId + '_ErrorTxt').html(error);
        $(dialogId + '_ErrorDiv').show();
        BT.scrollToEl(dialogId, dialogId + '_ErrorDiv');
    },

    hideError: function (dialogId)
    {
        $(dialogId + '_ErrorDiv').hide();
    },

    ajaxGet: function (dialogId, url, data, doShowSuccessNotice, successFn, btns)
    {
        $(dialogId + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');

        if (BT.isNullOrEmpty(btns))
            $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);
        else
        {
            //var xxx = btns;
            $.each(btns, function (i, v)
            {
                $(dialogId + '~.ui-dialog-buttonpane #' + v).prop('disabled', true);
            });
        }

        $.ajax({
            url: url,
            type: "GET",
            data: data,
            contentType: 'application/json; charset=utf-8',
            traditional: true,
            success: function (r)
            {
                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();

                if (BT.isNullOrEmpty(btns))
                    $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);
                else
                {
                    //var xxx = btns;
                    $.each(btns, function (i, v)
                    {
                        $(dialogId + '~.ui-dialog-buttonpane #' + v).prop('disabled', false);
                    });
                }

                if (r.HasError)
                {
                    if ($(dialogId).dialog('isOpen') === true) BT.Dialog.showError(dialogId, r.ErrorMessage);
                    else BT.showErrorNotice(r.ErrorMessage);
                } else
                {
                    BT.Dialog.hideError(dialogId);
                    if (doShowSuccessNotice) BT.showSuccessNotice();
                    try
                    {
                        if ($.isFunction(successFn)) successFn(JSON.parse(r.Data));
                    } catch (e)
                    {
                        BT.showErrorNotice(e);
                    }
                }
            },
            error: function (r)
            {
                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();

                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();

                if (BT.isNullOrEmpty(btns))
                    $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);
                else
                {
                    //var xxx = btns;
                    $.each(btns, function (i, v)
                    {
                        $(dialogId + '~.ui-dialog-buttonpane #' + v).prop('disabled', false);
                    });
                }

                //$(dialogId + '~.ui-dialog-buttonpane #btnSave:first').removeAttr('disabled');

                if ($(dialogId).dialog('isOpen') === true) BT.Dialog.showError(dialogId, r.statusText);
                else BT.showErrorNotice(r.statusText);
            }
        });
    },

    ajaxPOST: function (dialogId, url, data, doShowSuccessNotice, successFn, btns)
    {
        $(dialogId + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');

        if (BT.isNullOrEmpty(btns))
            $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);
        else
        {
            $.each(btns, function (i, v)
            {
                $(dialogId + '~.ui-dialog-buttonpane #' + v).prop('disabled', true);
            });
        }

        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            success: function (r)
            {
                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();

                if (BT.isNullOrEmpty(btns))
                    $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);
                else
                {
                    $.each(btns, function (i, v)
                    {
                        $(dialogId + '~.ui-dialog-buttonpane #' + v).prop('disabled', false);
                    });
                }

                if (r.HasError)
                {
                    if ($(dialogId).dialog('isOpen') === true) BT.Dialog.showError(dialogId, r.ErrorMessage);
                    else BT.showErrorNotice(r.ErrorMessage);
                } else
                {
                    BT.Dialog.hideError(dialogId);
                    if (doShowSuccessNotice) BT.showSuccessNotice();
                    try
                    {
                        if ($.isFunction(successFn)) successFn(JSON.parse(r.Data));
                    } catch (e)
                    {
                        BT.showErrorNotice(e);
                    }
                }
            },
            error: function (r)
            {
                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();

                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();

                if (BT.isNullOrEmpty(btns))
                    $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);
                else
                {
                    $.each(btns, function (i, v)
                    {
                        $(dialogId + '~.ui-dialog-buttonpane #' + v).prop('disabled', false);
                    });
                }

                if ($(dialogId).dialog('isOpen') === true) BT.Dialog.showError(dialogId, r.statusText);
                else BT.showErrorNotice(r.statusText);
            }
        });
    },

    ajaxUpload: function (dialogId, url, data, doShowSuccessNotice, successFn)
    {
        $(dialogId + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
        $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').attr('disabled', 'disabled');

        var options = {
            url: url,
            data: data,
            contentType: false,
            processData: false,
            cache: false,
            type: 'POST',
            error: function (xhr, ajaxOptions, thrownError)
            {
                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();
                $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').removeAttr('disabled');

                if ($(dialogId).dialog('isOpen') === true) BT.Dialog.showError(dialogId, thrownError);
                else BT.showErrorNotice(thrownError);
            }
        };

        $.ajax(options).done(function (d)
        {
            if (d.HasError)
            {
                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();
                $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').removeAttr('disabled');

                if ($(dialogId).dialog('isOpen') === true) BT.Dialog.showError(dialogId, d.ErrorMessage);
                else BT.showErrorNotice(d.ErrorMessage);

            } else
            {
                $(dialogId + '~.ui-dialog-buttonpane .fa-spinner:first').remove();
                $(dialogId + '~.ui-dialog-buttonpane #btnSave:first').removeAttr('disabled');

                try
                {
                    if ($.isFunction(successFn)) successFn(JSON.parse(d.Data));
                } catch (e)
                {
                    BT.showErrorNotice(e);
                }
            }
        });
    },

    showNotification: function (msg)
    {
        var dialog = '<div id="dialog-confirm" class="displayNone">'
            + '<div class="alert alert-info bigger-110">'
            + msg
            + '</div></div>';

        var dlg = $('#dialog-confirm');

        if (dlg.length > 0)
        {
            dlg.dialog('destroy');
            dlg.dialog({
                width: 500,
                modal: true,
                title: 'Notice!',
                buttons: [
                    {
                        text: "OK",
                        "class": "btn btn-primary btn-xs",
                        click: function ()
                        {
                            $(this).dialog("close");
                        }
                    }
                ]
            });
        } else
        {
            $(dialog).appendTo('body').dialog({
                width: 500,
                modal: true,
                title: 'Notice!',
                buttons: [
                    {
                        text: "OK",
                        "class": "btn btn-primary btn-xs",
                        click: function ()
                        {
                            $(this).dialog("close");
                        }
                    }
                ]
            });
        }
    },

    report: function (opts)
    {
        $('#modalReport').remove();
        $('.page-content > div.row > div.col-xs-12').append('<div id="modalReport" class="displayNone"></div>');

        BT.Dialog.Create('#modalReport', {
            width: 'max',
            title: BT.isNullOrEmpty(opts.title) ? /*'Report'*/'تقرير' : opts.title,
            onOpenFn: function (el)
            {
                var link = opts.url + '?' + $.param(opts.params);

                $('#modalReport' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');

                $(el).load(link, function ()
                {
                    $('#modalReport' + '~.ui-dialog-buttonpane .fa-spinner:first').remove();
                });
            }
        });
    },

    dynamicCheckBoxes: function (opts)
    {
        /*
        Params: 
        - title
        - getData {url, params}
        - saveData {url, params}
        */

        $('#modalChksDlg').remove();
        $('.page-content > div.row > div.col-xs-12').append('<div id="modalChksDlg" class="displayNone">' +
            '<div class="row">' +
            '<div class="nav-search" id="dlg-nav-search" style="position: relative; left: 0px; right: 0px;">' +
            '<form class="form-search">' +
            '<span class="input-icon">' +
            '<input type="text" placeholder="بحث ..." class="nav-search-input" style="width: 300px;" id="modalChksDlgSearchBox" autocomplete="off">' +
            '<i class="ace-icon fa fa-search nav-search-icon"></i>' +
            '</span>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-12" id="modalChksDlgCntntDiv">' +
            '</div></div></div>');

        BT.Dialog.Create('#modalChksDlg',
        {
            width: 800,
            height: 'max',
            title: BT.isNullOrEmpty(opts.title) ? /*'Report'*/'اختر' : opts.title,
            onOpenFn: function ()
            {
                if (BT.isNullOrEmpty(opts.getData) || BT.isNullOrEmpty(opts.getData.url))
                    BT.Dialog.showError('getDataUrl is missing');

                //$('#modalChksDlg').parent().children('.ui-dialog-titlebar').after('<div class="row ui-dialog-titlebar">' +
                //    '<div class="nav-search" id="dlg-nav-search" style=" left: 0px; right: 0px;">' +
                //    '<form class="form-search">' +
                //    '<span class="input-icon">' +
                //    '<input type="text" placeholder="بحث ..." class="nav-search-input" style="width: 300px;" id="modalChksDlgSearchBox" autocomplete="off">' +
                //    '<i class="ace-icon fa fa-search nav-search-icon"></i>' +
                //    '</span>' +
                //    '</form>' +
                //    '</div>' +
                //    '</div>');


                BT.Dialog.ajaxGet(
                    '#modalChksDlg',
                    opts.getData.url,
                    opts.getData.params,
                    false,
                    function (jdata)
                    {
                        var searchLst = [];

                        $.each(jdata, function ()
                        {
                            $('#modalChksDlgCntntDiv').append('<div class=\"checkbox\">'
                                + '<label>'
                                + '<input id=\"'
                                + this.ChkRecordId + ',' + this.MasterRecordId + '\" type=\"checkbox\" class=\"ace\"' + (this.IsChecked ? 'checked=\"true\"' : '') + ' />'
                                + '<span class=\"lbl\">'
                                + this.ChkRecordTxt
                                + '</span>'
                                + '</label>'
                                + '</div>');

                            searchLst.push(this.ChkRecordTxt);
                        });

                        var searchBox = '#modalChksDlgSearchBox';

                        $(searchBox).bs_typeahead({
                            source: searchLst.sort(),
                            updater: function (item)
                            {
                                $(searchBox).focus();
                                return item;
                            }
                        });

                        $(searchBox).keypress(function (e)
                        {
                            if (e.which == 13)
                            {
                                var term = $(searchBox).val().replace(/أ|إ/g, 'ا').replace(/ /g, '');
                                var result;
                                $.each($('#modalChksDlgCntntDiv > div.checkbox').find('span.lbl'), function ()
                                {
                                    var chkbx = $(this).text().replace(/أ|إ/g, 'ا').replace(/ /g, '');

                                    if (chkbx === term)
                                    {
                                        result = $(this).prev();
                                        return false;
                                    }

                                    return true;
                                });

                                if (!BT.isNullOrEmpty(result))
                                {
                                    BT.scrollToEl('#modalChksDlg', result);
                                    BT.CheckBox.setIschecked(result, true);
                                    return false;
                                }

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                );
            },
            onSaveFn: BT.isNullOrEmpty(opts.saveData) || BT.isNullOrEmpty(opts.saveData.url) ? null : function ()
            {
                var chks = $('#modalChksDlgCntntDiv > div.checkbox > label > input:checkbox:checked').map(function ()
                {
                    return $(this).attr('id');
                }).get();

                var saveParams = new Object();

                if (!BT.isNullOrEmpty(opts.saveData.params))
                {
                    $.each(opts.saveData.params, function (i, v)
                    {
                        saveParams[v.key] = v.val;
                    });
                }

                saveParams["chks"] = chks;

                BT.Dialog.ajaxPOST(
                    '#modalChksDlg',
                    opts.saveData.url,
                    saveParams,
                    true,
                    function ()
                    {
                        BT.Dialog.hide('#modalChksDlg');
                    }
                );
            }
        });
    },

    dynamicCheckBoxesWithDate: function (opts)
    {
        /*
        Params: 
        - title
        - getData {url, params}
        - saveData {url, params}
        */

        $('#modalChksDlg').remove();
        $('.page-content > div.row > div.col-xs-12').append('<div id="modalChksDlg" class="displayNone">' +
            '<div class="row">' +
            '<div class="nav-search" id="dlg-nav-search" style="position: relative; left: 0px; right: 0px;">' +
            '<form class="form-search">' +
            '<span class="input-icon">' +
            '<input type="text" placeholder="بحث ..." class="nav-search-input" style="width: 300px;" id="modalChksDlgSearchBox" autocomplete="off">' +
            '<i class="ace-icon fa fa-search nav-search-icon"></i>' +
            '</span>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-12" id="modalChksDlgCntntDiv">' +
            '</div></div></div>');

        BT.Dialog.Create('#modalChksDlg',
        {
            width: 800,
            height: 'max',
            title: BT.isNullOrEmpty(opts.title) ? /*'Report'*/'اختر' : opts.title,
            onOpenFn: function ()
            {
                if (BT.isNullOrEmpty(opts.getData) || BT.isNullOrEmpty(opts.getData.url))
                    BT.Dialog.showError('getDataUrl is missing');

                BT.Dialog.ajaxGet(
                    '#modalChksDlg',
                    opts.getData.url,
                    opts.getData.params,
                    false,
                    function (jdata)
                    {
                        var searchLst = [];

                        $.each(jdata, function ()
                        {
                            //$('#modalChksDlgCntntDiv').append('<div class=\"checkbox\">'
                            //    + '<label>'
                            //    + '<input id=\"'
                            //    + this.ChkRecordId + ',' + this.MasterRecordId + '\" type=\"checkbox\" class=\"ace\"' + (this.IsChecked ? 'checked=\"true\"' : '') + ' />'
                            //    + '<span class=\"lbl\">'
                            //    + this.ChkRecordTxt
                            //    + '</span>'
                            //    + '</label>'
                            //    + '</div>');

                            $('#modalChksDlgCntntDiv').append('<div class=\"form-group col-sm-12 no-margin-bottom\">'
                                + '<div class=\"col-sm-4 control-label no-padding-right checkbox\">'
                                + '<label>'
                                + '<input id=\"chkid_' + this.ChkRecordId + '_' + this.MasterRecordId + '\" type=\"checkbox\" class=\"ace\" ' + (this.IsChecked ? 'checked=\"true\"' : '') + ' />'
                                + '<span class=\"lbl\">'
                                + this.ChkRecordTxt
                                + '</span>'
                                + '</label>'
                                + '</div>'
                                + '<div class="\col-sm-8\">'
                                + '<input type=\"text\" ' + (!this.IsChecked ? 'style="display: none;"' : '') + ' id=\"dateid_' + this.ChkRecordId + '_' + this.MasterRecordId + '\"' + (BT.isNullOrEmpty(this.ChkOtherData) ? "" : ('value=\"' + this.ChkOtherData + '\"')) + '>'
                                + '</div>'
                                + '</div>');

                            searchLst.push(this.ChkRecordTxt);
                        });

                        $.each($('#modalChksDlgCntntDiv > div.form-group div.checkbox > label > input:checkbox:checked'), function (i, v)
                        {
                            $('#dateid' + this.id.substr(this.id.indexOf('_'))).datepicker({
                                autoclose: true,
                                dateFormat: 'dd/mm/yy',
                                isRTL: true,
                                appendText: 'تاريخ التسجيل '
                            }).show();
                        });

                        $('input[id^="chkid_"]').off('change').on('change', function ()
                        {
                            if (this.checked)
                            {
                                $('#dateid' + this.id.substr(this.id.indexOf('_'))).datepicker({
                                    autoclose: true,
                                    dateFormat: 'dd/mm/yy',
                                    isRTL: true,
                                    appendText: 'تاريخ التسجيل '
                                }).show();
                            } else
                            {
                                $('#dateid' + this.id.substr(this.id.indexOf('_'))).datepicker("destroy").hide();
                            }
                        });

                        var searchBox = '#modalChksDlgSearchBox';

                        $(searchBox).bs_typeahead({
                            source: searchLst.sort(),
                            updater: function (item)
                            {
                                $(searchBox).focus();
                                return item;
                            }
                        });

                        $(searchBox).keypress(function (e)
                        {
                            if (e.which == 13)
                            {
                                var term = $(searchBox).val().replace(/أ|إ/g, 'ا').replace(/ /g, '');
                                var result;
                                $.each($('#modalChksDlgCntntDiv > div.checkbox').find('span.lbl'), function ()
                                {
                                    var chkbx = $(this).text().replace(/أ|إ/g, 'ا').replace(/ /g, '');

                                    if (chkbx === term)
                                    {
                                        result = $(this).prev();
                                        return false;
                                    }

                                    return true;
                                });

                                if (!BT.isNullOrEmpty(result))
                                {
                                    BT.scrollToEl('#modalChksDlg', result);
                                    BT.CheckBox.setIschecked(result, true);
                                    return false;
                                }

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                );
            },
            onSaveFn: BT.isNullOrEmpty(opts.saveData) || BT.isNullOrEmpty(opts.saveData.url) ? null : function ()
            {
                BT.Dialog.hideError('#modalChksDlg');

                var chks = [];
                var hasError = false;

                $.each($('#modalChksDlgCntntDiv > div.form-group div.checkbox > label > input:checkbox:checked'), function (i, v)
                {
                    var selId = '#chkid' + this.id.substr(this.id.indexOf('_'));
                    if (BT.isNullOrEmpty($(selId).val()))
                    {
                        hasError = true;
                        BT.Dialog.showError('#modalChksDlgCntntDiv', 'الرجاء إدخال تاريخ التسجيل');
                        BT.scrollToEl('#modalChksDlgCntntDiv', selId);
                        return false;
                    }

                    chks.push({
                        CooperationEntity: this.id.split('_')[1],
                        TheSeq: this.id.split('_')[2],
                        CooperationType: $(selId).val()
                    });
                    return true;
                });

                if (hasError) return;

                var saveParams = new Object();

                if (!BT.isNullOrEmpty(opts.saveData.params))
                {
                    $.each(opts.saveData.params, function (i, v)
                    {
                        saveParams[v.key] = v.val;
                    });
                }

                saveParams["chks"] = chks;

                BT.Dialog.ajaxPOST(
                    '#modalChksDlg',
                    opts.saveData.url,
                    saveParams,
                    true,
                    function ()
                    {
                        BT.Dialog.hide('#modalChksDlg');
                    }
                );
            }
        });
    },

    confirm: function (opts)
    {
        if (BT.isNullOrEmpty(opts))
        {
            alert('BT.Dialog.confirm opts are missing');
            return;
        }

        if (BT.isNullOrEmpty(opts.id))
        {
            alert('BT.Dialog.confirm opts.id is missing');
            return;
        }

        if (BT.isNullOrEmpty(opts.message))
        {
            alert('BT.Dialog.confirm opts.message is missing');
            return;
        }

        var cnfrmDlgId = '#modalConfirmDlg_' + opts.id;
        var dlgYesBtnId = '#modalConfirmDlg_' + opts.id + '_YesBtn';
        var dlgNoBtnId = '#modalConfirmDlg_' + opts.id + '_NoBtn';

        $(cnfrmDlgId).remove();
        $('.page-content > div.row > div.col-xs-12').append('<div id="' + cnfrmDlgId.substr(1) + '" class="displayNone">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<h1 class="red">' + opts.message + '</h1>' +
            '</div></div></div>');

        BT.Dialog.Create(cnfrmDlgId,
        {
            title: 'هل انت متأكد؟',
            modal: true,
            buttons: [
                {
                    id: dlgNoBtnId.substr(1),
                    text: 'لا',
                    'class': 'btn btn-sm',
                    click: function () { BT.Dialog.hide(cnfrmDlgId); }
                },
                {
                    id: dlgYesBtnId.substr(1),
                    text: 'نعم',
                    'class': 'btn btn-sm btn-success',
                    click: function ()
                    {
                        if ($.isFunction(opts.onConfirmFn))
                            opts.onConfirmFn({
                                cnfrmDlgId: cnfrmDlgId,
                                dlgYesBtnId: dlgYesBtnId,
                                dlgNoBtnId: dlgNoBtnId,
                            });

                        if (!BT.isNullOrEmpty(opts.post) && !BT.isNullOrEmpty(opts.post.url))
                        {
                            BT.Dialog.ajaxPOST(
                                cnfrmDlgId,
                                opts.post.url,
                                !BT.isNullOrEmpty(opts.post.data) ? opts.post.data : null,
                                !BT.isNullOrEmpty(opts.post.doShowSuccess) ? opts.post.doShowSuccess : true,
                                function ()
                                {
                                    BT.Dialog.hide(cnfrmDlgId);

                                    if ($.isFunction(opts.post.onSuccessFn))
                                        opts.post.onSuccessFn({
                                            cnfrmDlgId: cnfrmDlgId,
                                            dlgYesBtnId: dlgYesBtnId,
                                            dlgNoBtnId: dlgNoBtnId,
                                        });
                                },
                                [BT.getNoHash(dlgYesBtnId)]
                            );
                        }
                    }
                }
            ]
        });
    },

    kOpen: function (kWindow)
    {
        $(kWindow).data('kendoWindow').open().center();
    },

    kClose: function (kWindow)
    {
        $(kWindow).data('kendoWindow').close();
    },
};

BT.Ajax = {
    FileUpload: function (url, data, successFn/*, btns*/)
    {
        //$.each(btns, function (i, v)
        //{
        //    $(v).prop('disabled', true);
        //});

        var options = {
            url: url,
            data: data,
            contentType: false,
            processData: false,
            cache: false,
            type: 'POST',
            error: function (xhr, ajaxOptions, thrownError)
            {
                //$.each(btns, function (i, v)
                //{
                //    $(v).prop('disabled', false);
                //});

                BT.showErrorNotice(thrownError);
            }
        };

        $.ajax(options).done(function (d)
        {
            //$.each(btns, function (i, v)
            //{
            //    $(v).prop('disabled', false);
            //});

            if (d.HasError)
            {
                BT.showErrorNotice(d.ErrorMessage);

            } else
            {
                try
                {
                    if ($.isFunction(successFn))
                    {
                        if (!BT.isNullOrEmpty(d.Data)) successFn(JSON.parse(d.Data));
                        else successFn();
                    }
                } catch (e)
                {
                    BT.showErrorNotice(e);
                }
            }
        });
    },

    GET: function (url, data, successFn, doShowSuccessNotice, errorFn)
    {
        $.ajax({
            url: url,
            type: 'GET',
            data: data,
            contentType: 'application/json; charset=utf-8',
            traditional: true,
            success: function (r) {
               
                if (r.HasError)
                {
                    BT.showErrorNotice(r.ErrorMessage);
                } else {
                     if (doShowSuccessNotice) BT.showSuccessNotice();

                    if ($.isFunction(successFn))
                    {
                        if (!BT.isNullOrEmpty(r.Data)) {

                            successFn(JSON.parse(r.Data));
                        }
                        else successFn();
                    }
                }
            },
            error: function (r)
            {
                BT.showErrorNotice(r.statusText);
                if ($.isFunction(errorFn)) errorFn();
            }
        });
    },

    kGET: function (url, data, successFn)
    {
        $.ajax({
            url: url,
            type: 'GET',
            data: data,
            contentType: 'application/json; charset=utf-8',
            traditional: true,
            success: function (r)
            {
                if (r.HasError)
                {
                    //alert(r.statusText);
                    BT.showErrorNotice(r.ErrorMessage);
                } else
                {
                    if ($.isFunction(successFn))
                    {
                        if (!BT.isNullOrEmpty(r.Data)) successFn(JSON.parse(r.Data));
                        else successFn();
                    }
                }
            },
            error: function (r)
            {
                //alert(r.statusText);
                BT.showErrorNotice(r.statusText);
            }
        });
    },

    POST: function (url, data, successFn, doShowSuccessNotice)
    {
        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            success: function (r)
            {
                if (r.HasError)
                {
                    BT.showErrorNotice(r.ErrorMessage);
                } else
                {
                    if (doShowSuccessNotice) BT.showSuccessNotice();
                    if ($.isFunction(successFn))
                    {
                        if (!BT.isNullOrEmpty(r.Data)) successFn(JSON.parse(r.Data));
                        else successFn();
                    }
                }
            },
            error: function (r)
            {
                BT.showErrorNotice(r.statusText);
            }
        });
    },

    kPOST: function (url, data, successFn, doShowSuccessNotice)
    {
        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            success: function (r)
            {
                if (r.HasError)
                {
                    BT.showErrorNotice(r.ErrorMessage);
                } else
                {
                    if (doShowSuccessNotice) BT.showSuccessNotice();
                    if ($.isFunction(successFn))
                    {
                        if (!BT.isNullOrEmpty(r.Data)) successFn(JSON.parse(r.Data));
                        else successFn();
                    }
                }
            },
            error: function (r)
            {
                BT.showErrorNotice(r.statusText);
            }
        });
    },
};

BT.Tree = {
    selectedKeys: null,

    Create: function (treeId, url, opts, onSelectFn)
    {
        $(treeId).dynatree({
            checkbox: true,
            initAjax: {
                type: 'POST',
                url: url,
                data: { parentCode: '', isStruct: true, hideChildless: true }
            },
            onPostInit: function ()
            {
                this.$tree.find("ul.dynatree-container").attr("DIR", "RTL").addClass("dynatree-rtl");
                $('#expandCollapseTreeChk').click();
            },
            onSelect: function (select, node)
            {
                BT.Tree.selectedKeys = $.map(node.tree.getSelectedNodes(), function (node)
                {
                    return node.data.key;
                });

                //try
                //{
                //    if ($.isFunction(onSelectFn)) onSelectFn(selectedKeys);
                //} catch (e)
                //{
                //    BT.showErrorNotice(e);
                //}
            },
            onDblClick: function (node, event)
            {
                node.toggleSelect();
            },
            onKeydown: function (node, event)
            {
                return false;
            }
        });
    }
};

BT.Spinner = {
    Create: function (element, value, min, max, step)
    {
        $(element).ace_spinner({
            value: BT.isNullOrEmpty(value) ? 0 : value,
            min: BT.isNullOrEmpty(min) ? -100 : min,
            max: BT.isNullOrEmpty(max) ? 100 : max,
            step: BT.isNullOrEmpty(step) ? 10 : step,
            on_sides: false,
            icon_up: 'ace-icon fa fa-plus smaller-75',
            icon_down: 'ace-icon fa fa-minus smaller-75',
            btn_up_class: 'btn-success',
            btn_down_class: 'btn-danger'
        });
    }
};

BT.Fn = {
    autoSize: function ()
    {
        $('textarea[class*=autosize]').autosize({ append: "\n" });
    },

    inputLimiter: function ()
    {
        $('textarea.limited').inputlimiter({
            remText: '%n حرف باقي...',
            limitText: 'من : %n.'
        });
    },
};

BT.Chat = {
    show: function (type, id, getMsgsUrl, sendMsgsUrl)
    {
        var selected = $('#sendToStaffMsSelected'),
            required = [],
            dialog = $('#modal-task-chat'),
            message = $('#taskChatMsg'),
            dlg = dialog.find('.dialogs').eq(0),
            sendBtn = $('#taskChatSendBtn'),
            sendToStaffMs = $('#sendToStaffMs').data('kendoMultiSelect');

        $('#modal-task-chat').data('typename', type);
        $('#modal-task-chat').data('typeid', id);

        var cw = dialog.data('kendoWindow');

        sendToStaffMs.dataSource.read();

        sendToStaffMs.unbind('change').bind('change', function (e)
        {
            var val = this.value();
            var res = [];

            $.merge(res, required);

            $.each(val, function (i, v) { if ($.inArray(v, res) === -1) res.push(v); });

            this.value(res);
        });

        // clear chat
        dlg.empty();
        selected.val('');

        // get chat
        BT.Ajax.GET(getMsgsUrl,
            {
                type: type,
                id: id
            },
            function (d)
            {
                if (!BT.isNullOrEmpty(d.Messages) && d.Messages.length)
                {
                    var res = '';

                    $.each(d.Messages, function (i, v)
                    {
                        res += '<div class="itemdiv dialogdiv">' +
                            '<div class="body" style="margin-left: 1px;margin-right: 1px">' +
                            '<div class="time">' +
                            '<i class="ace-icon fa fa-clock-o" style="margin-left: 3px;margin-right: 3px"></i>' +
                            '<span class="green">' + BT.DateTime.getDate(v.DateCreated, 'DD/MM/YYYY hh:mm:ss A') + '</span>' +
                            '</div>' +
                            '<div class="name">' +
                            '<a href="#" style="cursor: default">' + v.StaffName + '</a>' +
                            '</div>' +
                            '<div class="text">' + v.Msg.replace(/\n/g, '<br />') + '</div>' +
                            '</div>' +
                            '</div>';
                    });

                    dlg.append(res);

                    BT.scrollToEl(dialog.find('.modal-body').eq(0), dlg.find('.itemdiv:last'));
                }

                required = d.SentTo;
                sendToStaffMs.value(d.SentTo);
            },
            false);

        // send msg
        sendBtn.off('click').on('click', function ()
        {
            if (BT.isNullOrEmpty(message.val())) return;

            BT.Ajax.POST(sendMsgsUrl,
                {
                    type: type,
                    id: id,
                    msg: message.val(),
                    to: sendToStaffMs.value()
                },
                function (d)
                {
                    message.val('');
                },
                false);
        });

        cw.open().center();
        //dialog.modal('show');
    },

    error: function (msg)
    {
        var ew = $('#errorWindow');

        ew.prev().css('background-color', '#F77878').css('color', '#FDFDFD');

        ew.html('<p>' + msg + '</p>');
        ew.data('kendoWindow').center().open();
    }
}

jQuery.fn.center = function ()
{
    this.css("position", "absolute");
    this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
    return this;
};