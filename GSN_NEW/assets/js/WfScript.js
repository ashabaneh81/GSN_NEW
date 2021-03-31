WF = {};

WF.DefaultWared = {

    /******************** Wared Grid *******************/
    editForms: false,

    groupBy: [
        { val: 'WaredNo', txt: 'التسلسل العام' },
        { val: 'PayeeName', txt: 'اسم المكلف' },
        { val: 'TypeName', txt: 'النوع' },
        { val: 'SeqByCase', txt: 'رقم العملية' },
        { val: 'WaredDate', txt: 'تاريخ المعاملة' },
        { val: 'NoOfDays', txt: 'ايام المعاملة' },
        { val: 'DateReceived', txt: 'تاريخ الوصول' },
        { val: 'ArName', txt: 'ورد من' },
        { val: 'AllDays', txt: 'ايام المعاملة' },
        { val: 'NoOfDays', txt: 'ايام لدى الموظف' },
        { val: 'IsLate', txt: 'متأخر؟' },
        { val: 'SubcatName', txt: 'التصنيف الفرعي' },
        { val: 'ClassificationName', txt: 'تصنيف المشروع' }
    ],

    grGroupBy: [
        { val: 'GrAmt', txt: 'قيمة الكفالة' },
        { val: 'CurnName', txt: 'العملة' },
        { val: 'GrBeginDate', txt: 'تاريخ بداية الكفالة' },
        { val: 'GrDueDate', txt: 'تاريخ نهاية الكفالة' },
        { val: 'Subject', txt: 'الموضوع' },
        { val: 'PayeeName', txt: 'الجهة المرسلة' },
        { val: 'GrName', txt: 'نوع الكفالة' }
    ],

    disabledInEdit: null,

    gridProperties: function (table, url, editUrl, userCode)
    {
        return {
            caption: 'الارشفة و المعاملات',
            sortname: 'WaredNo',
            sortorder: 'asc',
            url: url,
            editurl: editUrl,
            colNames: [
                'مرفقات',
                'التسلسل العام',
                'النوع',
                'كود النوع',
                'رقم العملية',
                'الجهة المرسلة',
                'تاريخ المعاملة',
                'ايام المعاملة',
                'تاريخ الوصول',
                'ايام لدى الموظف',
                'المطالعات',
                'ورد من',
                'متأخر؟',
                'التصنيف الفرعي',
                'تصنيف المشروع',
                'MatchNo',
                'PkLine',
                'Rank',
                'NewRec',
                'Type',
                'Status1',
                'Status2',
                'Status3',
                'User1',
                'User2',
                'User3',
                'ProjectCost',
                'SectorCode',
                'GrAmt',
                'GrBeginDate',
                'GrCode',
                'GrDueDate',
                'CurnCode',
                'TalabNo',
                'ProjectStatus'
            ],
            colModel: [
                {
                    name: 'HasAttach',
                    index: 'HasAttach',
                    width: 60,
                    fixed: true,
                    search: false,
                    sortable: false,
                    hidedlg: true,
                    viewable: false,
                    formatter: function (cellvalue, options, rowObject)
                    {
                        if (rowObject.HasAttach)
                        {
                            return '<button class="btn btn-xs btn-info" onclick="$(\'' + table + '\').jqGrid(\'setSelection\',' + rowObject.PkLine + '); $(\'#attachmentsBtn\').click();">'
                                + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                                + '</button>';

                            //return '<button class="btn btn-xs btn-info" onclick="$(\'' + table + '\').jqGrid(\'setSelection\','
                            //    + rowObject.PkLine + '); $(\'tr#'
                            //    + rowObject.PkLine + '\').trigger({type: \'mousedown\',which: 3}).trigger({type: \'mouseup\',which: 3});">'
                            //    + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                            //    + '</button>';

                            //return '<button class="btn btn-xs btn-info" onclick="$(\''
                            //    + table + '\').jqGrid(\'setSelection\','
                            //    + rowObject.PkLine + '); $(\'tr#' + rowObject.PkLine + '\').contextMenu();">'
                            //    + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                            //    + '</button>';

                            //return '<span class="ui-icon ace-icon fa fa-paperclip dark"></span>';
                        } else
                        {
                            return '';
                        }
                    }
                },
                {
                    name: 'WaredNo',
                    index: 'WaredNo',
                    sorttype: 'int',
                    width: 150,
                    fixed: true,
                    hidden: true,
                    sortable: true,
                    editable: false,
                    viewable: false,
                    hidedlg: false,
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'TypeName',
                    index: 'TypeName',
                    width: 120,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'Type',
                    index: 'Type',
                    width: 80,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'SeqByCase',
                    index: 'SeqByCase',
                    sorttype: 'int',
                    width: 60,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'PayeeName',
                    index: 'PayeeName',
                    width: 120,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'WaredDate',
                    index: 'WaredDate',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                    searchrules: { date: true }
                },
                {
                    name: 'AllDays',
                    index: 'AllDays',
                    width: 70,
                    fixed: true,
                    sortable: true,
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'DateReceived',
                    index: 'DateReceived',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'NoOfDays',
                    index: 'NoOfDays',
                    width: 70,
                    fixed: true,
                    sortable: true,
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'Matalat',
                    index: 'Matalat',
                    width: 400,
                    fixed: true,
                    sortable: false,
                    search: false,
                },
                {
                    name: 'ArName',
                    index: 'ArName',
                    width: 120,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'IsLate',
                    index: 'IsLate',
                    width: 50,
                    fixed: true,
                    search: false
                },
                {
                    name: 'SubcatName',
                    index: 'SubcatName',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'ClassificationName',
                    index: 'ClassificationName',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                { name: 'MatchNo', index: 'MatchNo', hidden: true },
                { name: 'PkLine', index: 'PkLine', hidden: true, key: true },
                { name: 'Rank', index: 'Rank', hidden: true },
                { name: 'NewRec', index: 'NewRec', hidden: true },
                { name: 'Type', index: 'Type', hidden: true },
                { name: 'Status1', index: 'Status1', hidden: true },
                { name: 'Status2', index: 'Status2', hidden: true },
                { name: 'Status3', index: 'Status3', hidden: true },
                { name: 'User1', index: 'User1', hidden: true },
                { name: 'User2', index: 'User2', hidden: true },
                { name: 'User3', index: 'User3', hidden: true },
                { name: 'ProjectCost', index: 'ProjectCost', hidden: true },
                { name: 'SectorCode', index: 'SectorCode', hidden: true },
                { name: 'GrAmt', index: 'GrAmt', hidden: true },
                { name: 'GrBeginDate', index: 'GrBeginDate', hidden: true },
                { name: 'GrCode', index: 'GrCode', hidden: true },
                { name: 'GrDueDate', index: 'GrDueDate', hidden: true },
                { name: 'CurnCode', index: 'CurnCode', hidden: true },
                { name: 'TalabNo', index: 'TalabNo', hidden: true },
                { name: 'ProjectStatus', index: 'ProjectStatus', hidden: true }
            ],

            ondblClickRow: function (rowId)
            {
                $('#waredDetailsBtn').click();
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId)
            {
                var sRow = $(table).jqGrid('getRowData', rowId);

                if (sRow.Rank == -11 || sRow.Type === 'PP')
                {
                    if (sRow.ProjectStatus === 'S') {
                        $('#endBtn').hide();
                    } else {
                        $('#endBtn').show();
                    }

                    if (sRow.ProjectStatus === 'D')
                    {
                        $('#projAttachmentsBtn').show();
                    } else
                    {
                        $('#projAttachmentsBtn').hide();
                    }
                    
                    $('#sendBtn').show();
                    $('#sendFinalBtn').show();
                    $('#doneBtn').hide();
                } else if (sRow.Rank == -20 || userCode == 9)
                {
                    $('#sendBtn').hide();
                    $('#sendFinalBtn').hide();
                    $('#doneBtn').show();
                } else
                {
                    $('#sendBtn').hide();
                    $('#sendFinalBtn').hide();
                    $('#doneBtn').hide();
                }
            },

            //afterInsertRow: function (rowid, data)
            //{
            //    var trElement = $('#' + rowid, $(table));
            //    trElement.removeClass('ui-widget-content');
            //    trElement.addClass('newRecBold');

            //    //if (data.Type === "0")
            //    //{
            //    //    trElement.addClass('arrivals');
            //    //}
            //    //else
            //    //{
            //    //    if (data.Type === "1")
            //    //    {
            //    //        trElement.addClass('departures');
            //    //    }
            //    //    else
            //    //    {
            //    //        trElement.addClass('other');
            //    //    }
            //    //}
            //},

            rowattr: function (rowData, currentObj, rowId)
            {
                //return { "class": 'newRecBold' };
                if (table === '#waredTable' && rowData.NewRec == 'N')
                {
                    return { "class": 'newRecBold' };
                }
                return '';
            },
        };
    },

    grGridProperties: function (table, url, editUrl)
    {
        return {
            caption: 'الكفالات',
            sortname: 'SeqByCase',
            sortorder: 'asc',
            url: url,
            editurl: editUrl,
            colNames: [
                'مرفقات',
                'رقم الكفالة',
                'قيمة الكفالة',
                'العملة',
                'تاريخ بداية الكفالة',
                'تاريخ نهاية الكفالة',
                'الموضوع',
                'الجهة المرسلة',
                'نوع الكفالة',
                'MatchNo',
                'PkLine'
            ],
            colModel: [
                {
                    name: 'HasAttach',
                    index: 'HasAttach',
                    width: 60,
                    fixed: true,
                    search: false,
                    sortable: false,
                    hidedlg: true,
                    viewable: false,
                    formatter: function (cellvalue, options, rowObject)
                    {
                        if (rowObject.HasAttach)
                        {
                            return '<button class="btn btn-xs btn-info" onclick="$(\'' + table + '\').jqGrid(\'setSelection\',' + rowObject.PkLine + '); $(\'#attachmentsBtn\').click();">'
                                + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                                + '</button>';

                            //return '<button class="btn btn-xs btn-info" onclick="$(\'' + table + '\').jqGrid(\'setSelection\','
                            //    + rowObject.PkLine + '); $(\'tr#'
                            //    + rowObject.PkLine + '\').trigger({type: \'mousedown\',which: 3}).trigger({type: \'mouseup\',which: 3});">'
                            //    + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                            //    + '</button>';

                            //return '<button class="btn btn-xs btn-info" onclick="$(\''
                            //    + table + '\').jqGrid(\'setSelection\','
                            //    + rowObject.PkLine + '); $(\'tr#' + rowObject.PkLine + '\').contextMenu();">'
                            //    + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                            //    + '</button>';

                            //return '<span class="ui-icon ace-icon fa fa-paperclip dark"></span>';
                        } else
                        {
                            return '';
                        }
                    }
                },
                {
                    name: 'SeqByCase',
                    index: 'SeqByCase',
                    sorttype: 'int',
                    width: 50,
                    fixed: true,
                    hidden: false,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    key: true,
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'GrAmt',
                    index: 'GrAmt',
                    width: 90,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'number',
                    //formatter: 'currency',
                    //formatoptions: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 2 },
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'CurnName',
                    index: 'CurnName',
                    width: 50,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'GrBeginDate',
                    index: 'GrBeginDate',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'GrDueDate',
                    index: 'GrDueDate',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'Subject',
                    index: 'Subject',
                    width: 400,
                    fixed: true,
                    sortable: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'PayeeName',
                    index: 'PayeeName',
                    width: 250,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'GrName',
                    index: 'GrName',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                { name: 'MatchNo', index: 'MatchNo', hidden: true },
                { name: 'PkLine', index: 'PkLine', hidden: true }
            ],

            rowattr: function (rowData, currentObj, rowId)
            {
                if (table === '#waredTable' && rowData.NewRec == 'N')
                {
                    return { "class": 'newRecBold' };
                }
                return '';
            },
        };
    },

    jqGrid: function (table, pager, url, editUrl, isGr, userCode)
    {
        BT.Grid.defaultJqGrid({
            table: table,
            pager: pager,
            grpBy: !BT.isNullOrEmpty(isGr) && isGr === true ? WF.DefaultWared.grGroupBy : WF.DefaultWared.groupBy, // null: auto create, false: don't add groupBy
            options: !BT.isNullOrEmpty(isGr) && isGr === true ? WF.DefaultWared.grGridProperties(table, url, editUrl) : WF.DefaultWared.gridProperties(table, url, editUrl, userCode),
            disableEdit: WF.DefaultWared.disabledInEdit,
            editForms: WF.DefaultWared.editForms,
        });

        //BT.Grid.defaultJqGrid(
        //    table,
        //    pager,
        //    !BT.isNullOrEmpty(isGr) && isGr === true ? WF.DefaultWared.grGroupBy : WF.DefaultWared.groupBy, // null: auto create, false: don't add groupBy
        //    WF.DefaultWared.editForms, // null: add buttons, forms default width of 500, false: no buttons
        //    !BT.isNullOrEmpty(isGr) && isGr === true ? WF.DefaultWared.grGridProperties(table, url, editUrl) : WF.DefaultWared.gridProperties(table, url, editUrl),
        //    WF.DefaultWared.disabledInEdit
        //);
    },

    updateNewRec: function (rowId)
    {
        if ($('tr#' + rowId).hasClass('newRecBold'))
        {
            $('#mc_Home > b').html($('#mc_Home > b').html() - 1);
            $('tr#' + rowId).removeClass('newRecBold');
        }
    },

    /******************** Wared Matalat Grid *******************/

    matalatEditForms: {
        search: { doShow: false, width: 600 },
    },

    matalatGroupBy: [
        { val: 'EmployeeName', txt: 'اسم الموظف' },
        { val: 'DateReceived', txt: 'تاريخ الاستلام' },
        { val: 'TimeRcvd', txt: 'الوقت' },
        { val: 'FromWhatEmployeeName', txt: 'ورد من' },
        { val: 'Status', txt: 'الحالة' }
    ],

    matalatDisabledInEdit: null,

    matalatGridProperties: function (table, url, editUrl, waredNo, pkLine, rType, talabNo)
    {
        return {
            caption: 'المطالعات',
            sortname: 'PkLine',
            sortorder: 'asc',
            url: url,
            editurl: editUrl,
            postData: { waredNo: waredNo, pkLine: pkLine, rType: rType, talabNo: talabNo },
            colNames: [
                'PkLine',
                'اسم الموظف',
                'تاريخ الاستلام',
                'الوقت',
                'المطالعات',
                'ورد من',
                'الحالة'
            ],
            colModel: [
                {
                    name: 'PkLine',
                    index: 'PkLine',
                    hidden: true,
                    sorttype: 'int',
                    key: true,
                    viewable: false,
                    fixed: true,
                    hidedlg: true,
                    search: false
                },
                {
                    name: 'EmployeeName',
                    index: 'EmployeeName',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'DateReceived',
                    index: 'DateReceived',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq'] },
                    searchrules: { date: true }
                },
                {
                    name: 'TimeRcvd',
                    index: 'TimeRcvd',
                    width: 70,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'Matalat',
                    index: 'Matalat',
                    width: 300,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'FromWhatEmployeeName',
                    index: 'FromWhatEmployeeName',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'Status',
                    index: 'Status',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] },
                    formatter: function (cellvalue, options, rowObject)
                    {
                        return rowObject.Status == 'A'
                            ? 'موافقة'
                            : rowObject.Status == 'R'
                            ? 'عدم موافقة'
                            : rowObject.Status == 'S'
                            ? 'ايقاف'
                            : rowObject.Status;
                    }
                }
            ],

            ondblClickRow: function (rowId)
            {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId)
            {
            },
        };
    },

    matalatJqGrid: function (table, pager, url, editUrl, waredNo, pkLine, rType, talabNo)
    {
        BT.Grid.defaultJqGrid({
            table: table,
            pager: pager,
            grpBy: WF.DefaultWared.matalatGroupBy, // null: auto create, false: don't add groupBy
            options: WF.DefaultWared.matalatGridProperties(table, url, editUrl, waredNo, pkLine, rType, talabNo),
            disableEdit: WF.DefaultWared.matalatDisabledInEdit,
            editForms: WF.DefaultWared.matalatEditForms
        });

        //BT.Grid.defaultJqGrid(
        //    table,
        //    pager,
        //    WF.DefaultWared.matalatGroupBy, // null: auto create, false: don't add groupBy
        //    WF.DefaultWared.matalatEditForms, // null: add buttons, forms default width of 500, false: no buttons
        //    WF.DefaultWared.matalatGridProperties(table, url, editUrl, waredNo, pkLine),
        //    WF.DefaultWared.matalatDisabledInEdit
        //);
    }
};

WF.Muth = {

    /******************** Muth Grid *******************/
    editForms: false,

    groupBy: [
        { val: 'MuthNo', txt: 'رقم الطلب' },
        { val: 'Subject', txt: 'نوع الطلب' },
        { val: 'FullName', txt: 'اسم المكلف' },
        { val: 'MuthDate', txt: 'تاريخ المعاملة' },
        { val: 'DateReceived', txt: 'تاريخ الوصول' },
        { val: 'ArName', txt: 'ورد من' },
        { val: 'NoOfDays', txt: 'ايام لدى الموظف' }
    ],

    disabledInEdit: null,

    gridProperties: function (table, url, editUrl)
    {
        return {
            caption: 'المذكرات',
            sortname: 'MuthNo',
            sortorder: 'asc',
            url: url,
            editurl: editUrl,
            colNames: [
                'مرفقات',
                'رقم المذكرة',
                'الجهة المرسلة',
                'نوع الطلب',
                'تاريخ المعاملة',
                'تاريخ الوصول',
                'ايام لدى الموظف',
                'المطالعات',
                'ورد من',
                'متأخر؟',
                'MatchNo',
                'PkLine',
                'Rank',
                'NewRec'
            ],
            colModel: [
                {
                    name: 'HasAttach',
                    index: 'HasAttach',
                    width: 80,
                    fixed: true,
                    search: false,
                    sortable: false,
                    hidedlg: true,
                    viewable: false,
                    formatter: function (cellvalue, options, rowObject)
                    {
                        if (rowObject.HasAttach)
                        {
                            return '<button class="btn btn-xs btn-info" onclick="$(\'' + table + '\').jqGrid(\'setSelection\',' + rowObject.PkLine + '); $(\'#attachmentsBtn\').click();">'
                                + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                                + '</button>';

                            //return '<span class="ui-icon ace-icon fa fa-paperclip dark"></span>';
                        } else
                        {
                            return '';
                        }
                    }
                },
                {
                    name: 'MuthNo',
                    index: 'MuthNo',
                    sorttype: 'int',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'FullName',
                    index: 'FullName',
                    width: 300,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'Subject',
                    index: 'Subject',
                    width: 300,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'MuthDate',
                    index: 'MuthDate',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                    searchrules: { date: true }
                },
                {
                    name: 'DateReceived',
                    index: 'DateReceived',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'NoOfDays',
                    index: 'NoOfDays',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'Matalat',
                    index: 'Matalat',
                    width: 400,
                    fixed: true,
                    sortable: false,
                    search: false,
                },
                {
                    name: 'ArName',
                    index: 'ArName',
                    width: 300,
                    fixed: true,
                    sortable: true,
                    editable: false,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'IsLate',
                    index: 'IsLate',
                    width: 70,
                    fixed: true,
                    search: false,
                },
                { name: 'MatchNo', index: 'MatchNo', hidden: true },
                { name: 'PkLine', index: 'PkLine', hidden: true, key: true },
                { name: 'Rank', index: 'Rank', hidden: true },
                { name: 'NewRec', index: 'NewRec', hidden: true }
            ],

            ondblClickRow: function (rowId)
            {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId)
            {
                //var sRow = $(table).jqGrid('getRowData', rowId);

                //if (sRow.Rank == -11)
                //{
                //    $('#sendBtn').show();
                //    $('#sendFinalBtn').show();
                //    $('#doneBtn').hide();
                //} else if (sRow.Rank == -20)
                //{
                //    $('#sendBtn').hide();
                //    $('#sendFinalBtn').hide();
                //    $('#doneBtn').show();
                //} else
                //{
                //    $('#sendBtn').hide();
                //    $('#sendFinalBtn').hide();
                //    $('#doneBtn').hide();
                //}
            },

            rowattr: function (rowData, currentObj, rowId)
            {
                if (table === '#muthTable' && rowData.NewRec == 'N')
                {
                    return { "class": 'newRecBold' };
                }
            },
        };
    },

    jqGrid: function (table, pager, url, editUrl)
    {
        BT.Grid.defaultJqGrid({
            table: table,
            pager: pager,
            grpBy: WF.Muth.groupBy, // null: auto create, false: don't add groupBy
            options: WF.Muth.gridProperties(table, url, editUrl),
            disableEdit: WF.Muth.disabledInEdit,
            editForms: WF.Muth.editForms
        });

        //BT.Grid.defaultJqGrid(
        //    table,
        //    pager,
        //    WF.Muth.groupBy, // null: auto create, false: don't add groupBy
        //    WF.Muth.editForms, // null: add buttons, forms default width of 500, false: no buttons
        //    WF.Muth.gridProperties(table, url, editUrl),
        //    WF.Muth.disabledInEdit
        //);
    },

    updateNewRec: function (rowId)
    {
        if ($('tr#' + rowId).hasClass('newRecBold'))
        {
            $('#mc_Muth > b').html($('#mc_Muth > b').html() - 1);
            $('tr#' + rowId).removeClass('newRecBold');
        }
    },

    /******************** Muth Matalat Grid *******************/

    matalatEditForms: {
        search: { doShow: false, width: 600 },
    },

    matalatGroupBy: [
        { val: 'EmployeeName', txt: 'اسم الموظف' },
        { val: 'DateReceived', txt: 'تاريخ الاستلام' },
        { val: 'TimeRcvd', txt: 'الوقت' },
        { val: 'FromWhatEmployeeName', txt: 'ورد من' },
        { val: 'Status', txt: 'الحالة' }
    ],

    matalatGridProperties: function (table, url, editUrl, muthNo, pkLine)
    {
        return {
            caption: 'المطالعات',
            sortname: 'PkLine',
            sortorder: 'asc',
            url: url,
            editurl: editUrl,
            postData: { muthNo: muthNo, pkLine: pkLine },
            colNames: [
                'PkLine',
                'اسم الموظف',
                'تاريخ الاستلام',
                'الوقت',
                'المطالعات',
                'ورد من',
                'الحالة'
            ],
            colModel: [
                {
                    name: 'PkLine',
                    index: 'PkLine',
                    hidden: true,
                    sorttype: 'int',
                    key: true,
                    viewable: false,
                    fixed: true,
                    hidedlg: true,
                    search: false
                },
                {
                    name: 'EmployeeName',
                    index: 'EmployeeName',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'DateReceived',
                    index: 'DateReceived',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq'] },
                    searchrules: { date: true }
                },
                {
                    name: 'TimeRcvd',
                    index: 'TimeRcvd',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'Matalat',
                    index: 'Matalat',
                    width: 300,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'FromWhatEmployeeName',
                    index: 'FromWhatEmployeeName',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'Status',
                    index: 'Status',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] },
                    formatter: function (cellvalue, options, rowObject)
                    {
                        return rowObject.Status == 'A'
                            ? 'موافقة'
                            : rowObject.Status == 'R'
                            ? 'عدم موافقة'
                            : rowObject.Status == 'S'
                            ? 'ايقاف'
                            : rowObject.Status;
                    }
                }
            ],

            ondblClickRow: function (rowId)
            {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId)
            {
            },
        };
    },

    matalatJqGrid: function (table, pager, url, editUrl, muthNo, pkLine)
    {
        BT.Grid.defaultJqGrid({
            table: table,
            pager: pager,
            grpBy: WF.Muth.matalatGroupBy, // null: auto create, false: don't add groupBy
            options: WF.Muth.matalatGridProperties(table, url, editUrl, muthNo, pkLine),
            disableEdit: WF.Muth.disabledInEdit,
            editForms: WF.Muth.matalatEditForms
        });

        //BT.Grid.defaultJqGrid(
        //    table,
        //    pager,
        //    WF.Muth.matalatGroupBy, // null: auto create, false: don't add groupBy
        //    WF.Muth.matalatEditForms, // null: add buttons, forms default width of 500, false: no buttons
        //    WF.Muth.matalatGridProperties(table, url, editUrl, muthNo, pkLine),
        //    null
        //);
    },
};

WF.Files = {
    /******************** Attachments Grid *******************/
    attachmentsEditForms: {
        search: { doShow: false, width: 600 },
    },

    attachmentsGroupBy: [
        { val: 'ArName', txt: 'أضيف بواسطة' },
        { val: 'UploadDate', txt: 'تاريخ الإضافة' }
    ],

    attachmentsDisabledInEdit: null,

    attachmentsGridProperties: function (table, url, editUrl, matchNo, pkLine, filesUrl)
    {
        return {
            caption: 'الملفات',
            sortname: 'FileSEQ',
            sortorder: 'asc',
            url: url,
            editurl: editUrl,
            postData: { pkLine: pkLine, matchNo: matchNo },
            colNames: [
                'FileSEQ',
                'العنوان',
                'الموضوع',
                'أضيف بواسطة',
                'تاريخ الإضافة',
                'اسم الملف',
                'MatchNo',
                ''
            ],
            colModel: [
                {
                    name: 'FileSEQ',
                    index: 'FileSEQ',
                    hidden: true,
                    sorttype: 'int',
                    key: true,
                    viewable: false,
                    hidedlg: true,
                    search: false
                },
                {
                    name: 'Title',
                    index: 'Title',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'Subject',
                    index: 'Subject',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'ArName',
                    index: 'ArName',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq'] }
                },
                {
                    name: 'UploadDate',
                    index: 'UploadDate',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    sorttype: 'date',
                    formatter: 'date',
                    formatoptions: { newformat: 'd/m/Y' },
                    datefmt: 'd-M-Y',
                    searchoptions: { sopt: ['eq'] },
                    searchrules: { date: true }
                },
                {
                    name: 'FileName',
                    index: 'FileName',
                    hidden: true,
                    search: false
                },
                {
                    name: 'MatchNo',
                    index: 'MatchNo',
                    hidden: true,
                    search: false
                },
                {
                    name: 'talabAttachmentsActions',
                    index: '',
                    sortable: false,
                    search: false,
                    formatter: function (cellvalue, options, rowObject)
                    {
                        var link = filesUrl;
                        link = link.replace('fs', rowObject.FileSEQ);
                        link = link.replace('ft', rowObject.FileName);

                        //ace-icon fa fa-pencil-square-o bigger-230
                        return '<a class="btn btn-sm btn-success" href=\''
                            + link
                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                    }
                }
            ],

            ondblClickRow: function (rowId)
            {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId)
            {
            },
        };
    },

    attachmentsJqGrid: function (table, pager, url, editUrl, matchNo, pkLine, filesUrl, deleteUrl)
    {
        BT.Grid.defaultJqGrid({
            table: table,
            pager: pager,
            grpBy: WF.Files.attachmentsGroupBy, // null: auto create, false: don't add groupBy
            options: WF.Files.attachmentsGridProperties(table, url, editUrl, matchNo, pkLine, filesUrl),
            //disableEdit: WF.Muth.disabledInEdit,
            editForms: WF.Files.attachmentsEditForms
        });

        if (!BT.isNullOrEmpty(deleteUrl))
        {
            BT.Grid.addSeparstor(table, 'last');

            BT.Grid.addButton(table, {
                title: 'حذف المرفق',
                buttonicon: 'fa-trash-o red',
                position: 'last',
                id: 'delAttachmentBtn',
                onClickButton: function ()
                {
                    var sRow = BT.Grid.getSelectedRow(table, this);

                    if (BT.isNullOrEmpty(sRow)) return;

                    BT.Dialog.confirm({
                        id: 'delAttachmentBtn',
                        message: 'سيتم حذف المرفق المختار',
                        post: {
                            url: deleteUrl,
                            data: { fileSeq: sRow.FileSEQ },
                            onSuccessFn: function (dlg)
                            {
                                $(table).trigger('reloadGrid');
                            }
                        }
                    });
                    // showEditProjectDialog(sRow);
                }
            });
        }

        //BT.Grid.defaultJqGrid(
        //    table,
        //    pager,
        //    WF.Files.attachmentsGroupBy, // null: auto create, false: don't add groupBy
        //    WF.Files.attachmentsEditForms, // null: add buttons, forms default width of 500, false: no buttons
        //    WF.Files.attachmentsGridProperties(table, url, editUrl, matchNo, pkLine, filesUrl),
        //    null
        //);
    },

    /******************** All Files Grid *******************/

    allFilesGroupBy: [
        { val: 'Num', txt: 'رقم العملية' },
        { val: 'Type', txt: 'النوع' },
        { val: 'TypeName', txt: 'نوع العملية' },
        { val: 'NonpayeeName', txt: 'الجهة المتعامل معها' },
        { val: 'FilePlace', txt: 'مكان الملف' },
        { val: 'FileTitle', txt: 'عنوان الملف' },
        { val: 'Title', txt: 'عنوان الورقة' },
        { val: 'Subject', txt: 'موضوع الورقة' }
    ],

    allFilesGridProperties: function (table, url, filesUrl)
    {
        return {
            caption: 'الوثائق',
            sortname: 'Num',
            sortorder: 'asc',
            url: url,
            editurl: null,
            colNames: [
                'رقم العملية',
                'كود نوع العملية',
                'نوع العملية',
                'الجهة المتعامل معها',
                'مكان الملف',
                'عنوان الملف',
                'عنوان الورقة',
                'موضوع الورقة',
                '',
                'FileSEQ',
                'MatchNo',
                'FileName',
                'WaredNo'
            ],
            colModel: [
                {
                    name: 'Num',
                    index: 'Num',
                    hidden: false,
                    width: 70,
                    sorttype: 'int',
                    viewable: true,
                    hidedlg: true,
                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                },
                {
                    name: 'Type',
                    index: 'Type',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'TypeName',
                    index: 'TypeName',
                    width: 100,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'NonpayeeName',
                    index: 'NonpayeeName',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'FilePlace',
                    index: 'FilePlace',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'FileTitle',
                    index: 'FileTitle',
                    width: 150,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'Title',
                    index: 'Title',
                    width: 250,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'Subject',
                    index: 'Subject',
                    width: 200,
                    fixed: true,
                    sortable: true,
                    viewable: true,
                    hidedlg: false,
                    searchoptions: { sopt: ['cn', 'eq', 'nq'] }
                },
                {
                    name: 'downloadFile',
                    index: '',
                    sortable: false,
                    search: false,
                    formatter: function (cellvalue, options, rowObject)
                    {
                        var link = filesUrl;
                        link = link.replace('fs', rowObject.FileSEQ);
                        link = link.replace('ft', rowObject.FileName);

                        return '<a class="btn btn-sm btn-success" href=\''
                            + link
                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                    }
                },
                { name: 'FileSEQ', index: 'FileSEQ', hidden: true },
                { name: 'MatchNo', index: 'MatchNo', hidden: true },
                { name: 'FileName', index: 'FileName', hidden: true },
                { name: 'WaredNo', index: 'WaredNo', hidden: true }
            ],

            ondblClickRow: function (rowId)
            {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId)
            {
            },
        };
    },

    allFilesJqGrid: function (table, pager, url, filesUrl)
    {
        BT.Grid.defaultJqGrid({
            table: table,
            pager: pager,
            grpBy: WF.Files.allFilesGroupBy, // null: auto create, false: don't add groupBy
            options: WF.Files.allFilesGridProperties(table, url, filesUrl),
            //disableEdit: WF.Muth.disabledInEdit,
            editForms: false
        });

        //BT.Grid.defaultJqGrid(
        //    table,
        //    pager,
        //    WF.Files.allFilesGroupBy, // null: auto create, false: don't add groupBy
        //    false, // null: add buttons, forms default width of 500, false: no buttons
        //    WF.Files.allFilesGridProperties(table, url, filesUrl),
        //    null
        //);
    },
};

WF.Employees = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'ادخل اسم الموظف',
            minimumInputLength: '',
        });
    },
};

WF.DegreeLevelPriority = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر مستوى درجة الاولوية',
            minimumInputLength: '',
        });
    },
};

WF.Classification = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر التصنيف',
            minimumInputLength: '',
        });
    },
};

WF.TypesOfSectors = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر قطاع المشروع',
            minimumInputLength: '',
        });
    },
};

WF.Nonpayee = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: '',
        });
    },

    getSelect22: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: '',
        });
    },
};

WF.Actions = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر الاجراء',
            minimumInputLength: '',
        });
    },
};

WF.FilesTitle = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: '',
        });
    },
};

WF.FilesPlaces = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: '',
        });
    },
};

WF.Governor = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر المحافظة',
            minimumInputLength: '',
        });
    },
};

WF.ProjectArea = {
    getSelect2: function (select, url, opts)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر موقع المشروع',
            minimumInputLength: '',
            pid: opts.pid
        });
    },
};

WF.IncomingTypesName = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: ''
        });
    },
};

WF.IncomingTypesCode = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: ''
        });
    },
};

WF.Subcategory = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر التصنيف الفرعي',
            minimumInputLength: ''
        });
    },
};

WF.ClassificationProject = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر تصنيف المشروع',
            minimumInputLength: ''
        });
    },
};

WF.GuaranteeTypes = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر نوع الكفالة',
            minimumInputLength: ''
        });
    },
};

WF.Curn = {
    getSelect2: function (select, url)
    {
        BT.select2.create(select, url, {
            placeholder: 'اختر العملة',
            minimumInputLength: ''
        });
    },
};

WF.Fn = {
    getWaredDetails: function (table,
                              hasEditAccess,
                              getWaredDetailsUrl,
                              subcategoriesUrl,
                              classificationProjectUrl,
                              classificationUrl,
                              nonpayeeUrl,
                              actionUrl,
                              filesTitlesUrl,
                              filesPlacesUrl,
                              governorsUrl,
                              typesOfSectorsUrl,
                              guaranteeTypesUrl,
                              curnUrl,
                              projectAreasUrl,
                              saveDetailsUrl,
                              programsUrl,
                              nonpayeeProUrl,
                              donorUrl,
                              addDonorUrl,
                              saveProjectUrl,
                              attachmentsUrl,
                              downloadUrl,
                              downloadAllUrl,
                              deleteFileUrl
                     )
    {
        var sRow = BT.Grid.getSelectedRow(table, this);

        if (sRow === undefined || sRow === null) return;

        var type = sRow.Type;

        if (type === 'PP') {
            var modalAddProject = '#modalAddProject',
                modalAddDonor = '#modalAddDonor',
                proSender = $('#proSender'),
                proGov = $('#proGov'),
                proSec = $('#proSec'),
                proArea = $('#proArea'),
                proProgram = $('#proProgram'),
                proAmt = $('#proAmt'),
                proCurn = $('#proCurn'),
                proDesc = $('#proDesc'),
                proBen = $('#proBen'),
                proNumber = $('#proNumber'),
                proName = $('#proName'),
                proDonor = $('#proDonor'),
                proMethod = $('#proMethod'),
                proDate = $('#proDate'),
                proChk = $('#proChk'),
                statusSelect = $('#statusSelect'),
                proCode = $('#proCode'),
                proAddDonorBtn = $('#proAddDonorBtn'),
                proNameDiv = $('#proNameDiv'),
                proNumDiv = $('#proNumDiv'),
                proDonorDiv = $('#proDonorDiv'),
                proMethodDiv = $('#proMethodDiv'),

                donorArName = $('#donorArName'),
                donorEnName = $('#donorEnName'),
                donorTel = $('#donorTel'),
                donorFax = $('#donorFax'),
                donorMobile = $('#donorMobile'),
                donorEmail = $('#donorEmail');

            $('.edt').val('');//.prop('disabled', true);
            proMethod.val('N');//.prop('disabled', true);

            BT.Dialog.Create(modalAddProject, {
                title: 'بيانات المشروع',
                width: 1000,
                onCreateFn: function ()
                {
                    BT.Dialog.ajaxGet(modalAddProject,
                        getWaredDetailsUrl,
                        {
                            waredNo: sRow.WaredNo,
                            pkLine: sRow.PkLine,
                            rType: type,
                            talabNo: sRow.TalabNo
                        },
                        false,
                        function (d)
                        {
                            proChk.prop('checked', false);

                            proSender.val(d.Sender);
                            proGov.val(d.Governor);
                            proSec.val(d.Sector);
                            proArea.val(d.Area);
                            proProgram.val(d.Program);
                            proAmt.val(d.Amt);
                            proCurn.val(d.Curn);
                            proDesc.val(d.Description);
                            proBen.val(d.Beneficiaries);
                            proNumber.val(d.ProjectNo);
                            proName.val(d.ProjectName);
                            proDonor.val(d.DonorCode);
                            proMethod.val(d.Method);
                            proDate.val(BT.DateTime.getDate(d.ApplicationDate));
                            proChk.prop('checked', d.IsComplaint === 'Y');
                            statusSelect.val(d.Status);
                            proCode.val(d.Code);

                            statusSelect.off('change').on('change', function ()
                            {
                                if (statusSelect.val() === 'D') {
                                    proNumDiv.show();
                                    proDonorDiv.show();
                                    proMethodDiv.show();
                                } else {
                                    proNumDiv.hide();
                                    proDonorDiv.hide();
                                    proMethodDiv.hide();
                                }
                            }).trigger('change');

                            proChk.off('change').on('change', function ()
                            {
                                if (proChk.is(':checked'))
                                {
                                    proNameDiv.hide();
                                    BT.select2.defaultAr(proSec.val(''), typesOfSectorsUrl);
                                    BT.select2.defaultAr(proProgram.val(''), programsUrl);
                                    BT.select2.defaultAr(proCurn.val(''), curnUrl);
                                    BT.select2.defaultAr(proDonor.val(''), donorUrl);
                                    proNumber.val('');
                                    proAmt.val('');
                                    proDesc.val('');
                                    proBen.val('');
                                    statusSelect.val('A');
                                } else
                                {
                                    proNameDiv.show();
                                }
                            }).trigger('change');

                            BT.select2.defaultAr(proSec, typesOfSectorsUrl);
                            BT.select2.defaultAr(proCurn, curnUrl);
                            BT.select2.defaultAr(proGov, governorsUrl);
                            BT.select2.defaultAr(proArea, projectAreasUrl);
                            BT.select2.defaultAr(proProgram, programsUrl, proSec.val());
                            BT.select2.defaultAr(proSender, nonpayeeProUrl);
                            BT.select2.defaultAr(proDonor, donorUrl);

                            proSec.off('change').on('change', function ()
                            {
                                BT.select2.defaultAr(proProgram, programsUrl, proSec.val());
                            });

                            proAddDonorBtn.off('click').on('click', function ()
                            {
                                $('.donorEdt').val('');

                                BT.Dialog.Create(modalAddDonor, {
                                    title: 'إضافة مانح',
                                    onSaveFn: function ()
                                    {
                                        BT.Dialog.hideError(modalAddProject);

                                        if (BT.isNullOrEmpty(donorArName.val()))
                                        {
                                            BT.Dialog.showError(modalAddProject, 'الاسم عربي: خانة إجبارية');
                                            return;
                                        }

                                        BT.Dialog.ajaxPOST(modalAddDonor, addDonorUrl, {
                                            ArName: donorArName.val(),
                                            EnName: donorEnName.val(),
                                            Tel: donorTel.val(),
                                            Fax: donorFax.val(),
                                            Mobile: donorMobile.val(),
                                            Email: donorEmail.val()
                                        },
                                            true,
                                            function (jData)
                                            {
                                                BT.Dialog.hide(modalAddDonor);
                                            });
                                    }
                                });
                            });
                        });
                },
                onSaveFn: function ()
                {
                    BT.Dialog.hideError(modalAddProject);

                    if (statusSelect.val() === 'D' && BT.isNullOrEmpty(proNumber.val()))
                    {
                        BT.Dialog.showError(modalAddProject, 'رقم المشروع: خانة إجبارية في حالة التنفيذ');
                        return;
                    }

                    BT.Dialog.ajaxPOST(modalAddProject, saveProjectUrl, {
                            Sender: proSender.val(),
                            Governor: proGov.val(),
                            Area: proArea.val(),
                            Sector: proSec.val(),
                            Program: proProgram.val(),
                            Amt: proAmt.val(),
                            Curn: proCurn.val(),
                            Description: proDesc.val(),
                            Beneficiaries: proBen.val(),
                            ProjectNo: proNumber.val(),
                            ProjectName: proName.val(),
                            ApplicationDate: proDate.val(),
                            IsComplaint: proChk.is(':checked') ? 'Y' : 'N',
                            Status: statusSelect.val(),
                            DonorCode: proDonor.val(),
                            Method: proMethod.val(),
                            Code: proCode.val(),
                            op: 'edit'
                        },
                        true,
                        function(jData) {
                            $(table).trigger('reloadGrid');
                            //BT.Dialog.hide(modalAddProject);
                        });
                },
                addButtons: [
                        {
                            text: 'المرفقات',
                            position: 'last',
                            'class': 'btn btn-sm btn-primary',
                            id: 'dialogAttachmentsBtn',
                            //icon: 'fa-paperclip dark',
                            click: function ()
                            {
                                //$('#attachmentsBtn').click();
                                WF.Fn.getAttachments(table,
                                    attachmentsUrl,
                                    downloadUrl,
                                    downloadAllUrl,
                                    null,
                                    proName.val(),
                                    deleteFileUrl);
                            }
                        }
                ]
            });
        } else
        {
            $('#senderLabel').html(type === 'P' ? 'صاحب المشروع' : 'الجهة المرسلة');
            $('#classificationLabel').html(type === 'P' ? 'الجهة المستفيدة' : 'التصنيف');

            if (type === 'G')
            {
                $('#grTabLi').show();
            } else
            {
                $('#grTabLi').hide();
            }

            if (type === 'P')
            {
                $('#projectsTabLi').show();
            } else
            {
                $('#projectsTabLi').hide();
            }

            $('#modalWaredDetails' + ' input, textarea').each(function (i, v) { $(this).val(''); });

            BT.Dialog.Create('#modalWaredDetails', {
                title: 'بيانات العملية',
                onSaveFn: !hasEditAccess ? null : function ()
                {
                    BT.Dialog.ajaxPOST('#modalWaredDetails',
                        saveDetailsUrl,
                        {
                            "waredNo": sRow.WaredNo,
                            //"pkLine": sRow.PkLine,
                            "subject": $('#subject').val(),
                            "nonpayeeCode": $('#senderCode').val(),
                            "classificationCode": $('#classification').val(),
                            "actionCode": $('#response').val(),
                            "fileTitleCode": $('#fileCode').val(),
                            "filePlaceCode": $('#fileLocationCode').val(),
                            "govCode": $('#govCode').val(),
                            "projectAreaCode": $('#projectLocationCode').val(),
                            "projectName": $('#projectName').val(),
                            "subcategory": $('#subcategory').val(),
                            "classificationProject": $('#classificationProject').val(),
                            "typeOfSector": $('#typeOfSector').val(),
                            //"grAmt": $('#grAmt').val(),
                            //"grBeginDate": $('#grBeginDate').val(),
                            //"grDueDate": $('#grDueDate').val(),
                            //"grType": $('#grType').val(),
                        },
                        true
                    );
                },
                onCreateFn: function ()
                {
                    $('#waredTabBtn').tab('show');

                    BT.Dialog.ajaxGet(
                        '#modalWaredDetails',
                        getWaredDetailsUrl,
                        {
                            waredNo: sRow.WaredNo,
                            pkLine: sRow.PkLine,
                            rType: type
                        },
                        false,
                        function (jdata)
                        {
                            $('#recieverCode').val(jdata.RecievedByCode);
                            $('#recieverName').val(jdata.RecievedByName);
                            $('#waredType').val
                            (
                                (jdata.WaredType !== undefined && jdata.WaredType != null && jdata.WaredType != '')
                                ? jdata.WaredType == 'N'
                                ? 'اداري'
                                : jdata.WaredType == 'P'
                                ? 'مشروع'
                                : jdata.WaredType == 'F'
                                ? 'مالي'
                                : 'غير معرف'
                                : ''
                            );
                            $('#waredCode').val(jdata.WaredNo);
                            $('#recieveDate').val(jdata.RecievedDateS);
                            $('#mailDate').val(jdata.WaredDateS);
                            $('#subject').val(jdata.Subject);
                            $('#senderCode').val(jdata.NonPayeeCode);
                            $('#howToSend').val(jdata.WayName);
                            $('#response').val(jdata.ActionCode);
                            $('#fileCode').val(jdata.FileTitleCode);
                            $('#fileLocationCode').val(jdata.FilePlaceCode);
                            $('#detailesBody').val(jdata.WaredBody);
                            $('#govCode').val(jdata.GovCode);
                            $('#projectLocationCode').val(jdata.ProjectAreaCode);
                            $('#projectName').val(jdata.ProjectName);
                            $('#projectCost').val(jdata.ProjectCost);
                            $('#status1').val(jdata.Status1);
                            $('#status2').val(jdata.Status2);
                            $('#status3').val(jdata.Status3);
                            $('#typeOfSector').val(jdata.TypeOfSector);
                            $('#classification').val(jdata.ClassificationCode);
                            $('#subcategory').val(jdata.SubcategoryCode);
                            $('#classificationProject').val(jdata.ClassificationProjectCode);
                            $('#grAmt').val(jdata.GrAmt);
                            $('#grCurn').val(jdata.CurnCode); //CurnArName
                            $('#grCurnEdit').val(jdata.CurnCode);
                            $('#grBeginDate').val(BT.DateTime.getDate(jdata.GrBeginDate, 'DD-MMM-YYYY'));
                            $('#grDueDate').val(BT.DateTime.getDate(jdata.GrDueDate, 'DD-MMM-YYYY'));
                            $('#grType').val(jdata.GrCode);

                            if (jdata.WaredType !== undefined && jdata.WaredType != null && jdata.WaredType != '' && jdata.WaredType == 'P')
                            {
                                $('#subcategoryDiv').show();
                            } else
                            {
                                $('#subcategoryDiv').hide();
                            }

                            if ($('#grBeginDate').val() == 'Invalid date')
                                $('#grBeginDate').val('');

                            if ($('#grDueDate').val() == 'Invalid date')
                                $('#grDueDate').val('');

                            $('#grAmt').prop('disabled', true);
                            $('#grCurn').prop('disabled', true);
                            $('#grBeginDate').prop('disabled', true);
                            $('#grDueDate').prop('disabled', true);
                            $('#grType').prop('disabled', true);

                            if (!hasEditAccess)
                            {
                                $('#subject').prop('disabled', true);
                                $('#classification').prop('disabled', true);
                                $('#senderCode').prop('disabled', true);
                                $('#response').prop('disabled', true);
                                $('#fileCode').prop('disabled', true);
                                $('#fileLocationCode').prop('disabled', true);
                                $('#govCode').prop('disabled', true);
                                $('#projectLocationCode').prop('disabled', true);
                                $('#projectName').prop('disabled', true);
                                $('#subcategory').prop('disabled', true);
                                $('#classificationProject').prop('disabled', true);
                                $('#typeOfSector').prop('disabled', true);
                            } else
                            {
                                $('#subject').prop('disabled', false);
                                $('#classification').prop('disabled', false);
                                $('#senderCode').prop('disabled', false);
                                $('#response').prop('disabled', false);
                                $('#fileCode').prop('disabled', false);
                                $('#fileLocationCode').prop('disabled', false);
                                $('#govCode').prop('disabled', false);
                                $('#projectLocationCode').prop('disabled', false);
                                $('#projectName').prop('disabled', false);
                                $('#subcategory').prop('disabled', false);
                                $('#classificationProject').prop('disabled', false);
                                $('#typeOfSector').prop('disabled', false);
                            }

                            WF.Subcategory.getSelect2('#subcategory', subcategoriesUrl);
                            WF.ClassificationProject.getSelect2('#classificationProject', classificationProjectUrl);
                            WF.Classification.getSelect2('#classification', classificationUrl);
                            WF.Nonpayee.getSelect2('#senderCode', nonpayeeUrl);
                            WF.Actions.getSelect2('#response', actionUrl);
                            WF.FilesTitle.getSelect2('#fileCode', filesTitlesUrl);
                            WF.FilesPlaces.getSelect2('#fileLocationCode', filesPlacesUrl);
                            WF.Governor.getSelect2('#govCode', governorsUrl);
                            WF.TypesOfSectors.getSelect2('#typeOfSector', typesOfSectorsUrl);
                            WF.GuaranteeTypes.getSelect2('#grType', guaranteeTypesUrl);
                            WF.Curn.getSelect2('#grCurn', curnUrl);

                            $('#govCode').off('change').on('change', function ()
                            {
                                WF.ProjectArea.getSelect2(
                                    '#projectLocationCode',
                                    projectAreasUrl,
                                    { pid: $('#govCode').val() }
                                );
                            }).change();

                            WF.DefaultWared.updateNewRec(sRow.PkLine);
                        }
                    );
                }
            });
        }
    },

    getMatalat: function (table, waredMatalatUrl)
    {
        var sRow = BT.Grid.getSelectedRow(table, this);

        if (sRow === undefined || sRow === null) return;

        $('#waredNoLbl').html(sRow.Type === 'PP' ? 'رقم المعاملة' : 'رقم الوارد');
        $('#waredNo').val(sRow.Type === 'PP' ? sRow.TalabNo : sRow.WaredNo);
        $('#payeeFullName').val(sRow.PayeeName);

        BT.Dialog.Create('#modalMatalat', {
            title: 'المطالعات',
            width: 'max',
            onOpenFn: function ()
            {
                WF.DefaultWared.matalatJqGrid(
                    '#matalatTable',
                    '#matalatTablePager',
                    waredMatalatUrl,
                    '',
                    sRow.WaredNo,
                    sRow.PkLine,
                    sRow.Type,
                    sRow.TalabNo
                );

                WF.DefaultWared.updateNewRec(sRow.PkLine);
            },
            onResizeFn: function (size)
            {
                $('#matalatTable').jqGrid('setGridWidth', size.width - 50, true);
            }
        });
    },

    getAttachments: function (table, attachmentsUrl, downloadFileUrl, downloadAllUrl, matchNo, subjectTxt, deleteUrl)
    {
        var matchno,
            pkline;

        if (!BT.isNullOrEmpty(matchNo))
        {
            matchno = matchNo;
            pkline = -1;
        } else
        {
            var sRow = BT.Grid.getSelectedRow(table, this);
            if (sRow === undefined || sRow === null) return;

            matchno = sRow.MatchNo;
            pkline = BT.isNullOrEmpty(sRow.PkLine) ? -1 : sRow.PkLine;
        }

        $('#matchNoTxt').val(matchno);
        $('#subjectTxt').val(subjectTxt);

        BT.Dialog.Create('#modalAttachments', {
            title: 'المرفقات',
            width: 'max',
            onOpenFn: function ()
            {
                WF.Files.attachmentsJqGrid( //(table, pager, url, editUrl, matchNo, pkLine, filesUrl, deleteUrl)
                    '#attachmentsTable',
                    '#attachmentsTablePager',
                    attachmentsUrl,
                    '',
                    matchno,
                    pkline,
                    downloadFileUrl,
                    deleteUrl
                );
            },
            //onResizeFn: function (size)
            //{
            //    $('#attachmentsTable').jqGrid('setGridWidth', size.width - 50, true);
            //},
            buttons: [
                {
                    id: 'btnClose',
                    text: 'إغلاق',
                    'class': 'btn btn-sm btn-danger',
                    click: function () { $(this).dialog('close'); }
                },
                {
                    id: 'btnDownloadAll',
                    text: 'تنزيل جميع الملفات',
                    'class': 'btn btn-sm btn-success',
                    click: function ()
                    {
                        var dAllLink = downloadAllUrl;
                        dAllLink = dAllLink.replace('fmno', matchno);

                        window.open(dAllLink, '_blank');
                    }
                }
            ]
        });
    }
};

var pal = {
    wared: (function() {
        var editPpMatalat = (function() {
            var dom = function() {
                    return {
                        modalEditPpMatalat: '#modalEditPpMatalat',
                        ppOptionsDiv: $('#ppOptionsDiv'),
                        isExecutionOptionsDiv: $('#isExecutionOptionsDiv'),
                        aRadio: $('#aRadio'),
                        bRadio: $('#bRadio'),
                        cRadio: $('#cRadio'),
                        matalatEditPpTxt: $('#matalatEditPpTxt'),
                        matalatProDonor: $('#matalatProDonor'),
                        matalatProNumber: $('#matalatProNumber'),
                        matalatStatusSelectDiv: $('#matalatStatusSelectDiv'),
                        matalatStatusSelect: $('#matalatStatusSelect'),
                        matalatProMethod: $('#matalatProMethod'),
                        table: '#waredTable'
                    }
                },

                urls = {
                    donorsUrl: null,
                    getWaredDetailsUrl: null,
                    savePpMatalatUrl: null
                },

                vars = {
                    pendingOp: null,
                    sRow: null
                },

                initDomEvents = function() {
                    dom().matalatStatusSelect.off('change').on('change', function () {
                        if ($(this).val() !== 'D')
                        {
                            dom().isExecutionOptionsDiv.hide();
                        } else
                        {
                            dom().isExecutionOptionsDiv.show();
                        }
                    });
                },

                showPpOptionsDiv = function(d) {
                    dom().ppOptionsDiv.show();

                    dom().matalatStatusSelect.val(d.Status).trigger('change');
                    dom().matalatProMethod.val(d.Method);
                    dom().matalatProDonor.val(d.DonorCode);
                    dom().matalatProNumber.val(d.ProjectNo);

                    BT.select2.defaultAr(dom().matalatProDonor, urls.donorsUrl);
                },

                showPpMatalatDlg = function() {
                    BT.Dialog.Create(dom().modalEditPpMatalat, {
                        title: 'تعبئة المطالعة',
                        onCreateFn: function () {
                            dom().matalatStatusSelect.val('');

                            BT.Ajax.GET(urls.getWaredDetailsUrl, {
                                    waredNo: vars.sRow.WaredNo,
                                    pkLine: vars.sRow.PkLine,
                                    rType: vars.sRow.Type,
                                    talabNo: vars.sRow.TalabNo
                                },
                                function (d) {
                                    switch (vars.pendingOp) {
                                        case '#sendBtn':
                                            initDomEvents();
                                            dom().matalatStatusSelectDiv.show();
                                            showPpOptionsDiv(d);
                                            break;
                                        case '#endBtn':
                                            dom().matalatStatusSelectDiv.hide();
                                            if (d.Status !== 'D') {
                                                dom().ppOptionsDiv.hide();
                                            } else {
                                                showPpOptionsDiv(d);
                                            }
                                            break;
                                        default:
                                            dom().ppOptionsDiv.hide();
                                            break;
                                    }
                                    dom().matalatEditPpTxt.val(vars.sRow.Matalat).trigger('autosize.resize');
                            });
                        },
                        onSaveFn: function () {
                            BT.Dialog.hideError(dom().modalEditPpMatalat);

                            if (dom().matalatStatusSelectDiv.is(':visible')) {
                                if (BT.isNullOrEmpty(dom().matalatStatusSelect.val()))
                                {
                                    BT.Dialog.showError(dom().modalEditPpMatalat, 'الحالة: خانة إجبارية');
                                    return;
                                }
                            }

                            if (dom().ppOptionsDiv.is(':visible')) {
                                if (BT.isNullOrEmpty(dom().matalatProMethod.val()) || dom().matalatProMethod.val() === 'N') {
                                    BT.Dialog.showError(dom().modalEditPpMatalat, 'طريقة التنفيذ: خانة إجبارية');
                                    return;
                                }

                                if (BT.isNullOrEmpty(dom().matalatProDonor.val()))
                                {
                                    BT.Dialog.showError(dom().modalEditPpMatalat, 'المانح: خانة إجبارية');
                                    return;
                                }

                                if (BT.isNullOrEmpty(dom().matalatProNumber.val()))
                                {
                                    BT.Dialog.showError(dom().modalEditPpMatalat, 'رقم المشروع: خانة إجبارية');
                                    return;
                                }
                            }

                            BT.Dialog.ajaxPOST(dom().modalEditPpMatalat,
                                urls.savePpMatalatUrl,
                                {
                                    matalat: dom().matalatEditPpTxt.val(),
                                    pkLine: vars.sRow.PkLine,
                                    projectCode: vars.sRow.TalabNo,
                                    method: dom().matalatProMethod.val(),
                                    donorCode: dom().matalatProDonor.val(),
                                    projectNumber: dom().matalatProNumber.val(),
                                    status: dom().matalatStatusSelect.val()
                                },
                                true,
                                function() {
                                    vars.sRow.Matalat = dom().matalatEditPpTxt.val();

                                    $(dom().table).jqGrid('setRowData', vars.sRow.PkLine, vars.sRow);

                                    BT.Dialog.hide(dom().modalEditPpMatalat);

                                    if (!BT.isNullOrEmpty(vars.pendingOp)) $(vars.pendingOp).click();
                                });
                        }
                    });
                },

                init = function(
                           pDonorsUrl,
                           pGetWaredDetailsUrl,
                           pSavePpMatalatUrl,
                           pSRow,
                           pPendingOp
                       ) {

                    if (BT.isNullOrEmpty(pDonorsUrl)
                            || BT.isNullOrEmpty(pGetWaredDetailsUrl)
                            || BT.isNullOrEmpty(pSavePpMatalatUrl)
                            || BT.isNullOrEmpty(pSRow)
                    ) {
                        BT.showErrorNotice('pal.wared.editPpMatalat.init: missing params');
                        return;
                    }

                    urls.donorsUrl = pDonorsUrl;
                    urls.getWaredDetailsUrl = pGetWaredDetailsUrl;
                    urls.savePpMatalatUrl = pSavePpMatalatUrl;

                    vars.sRow = pSRow;
                    vars.pendingOp = pPendingOp;

                    showPpMatalatDlg();
                }

            return {
                init: init
            }
        })();

        return {
            editPpMatalat: editPpMatalat
        }
    })(),

    docMethods: (function() {
        var dom = function() {
                return {
                    dialog: '#modalDocMethods',
                    dynamicDocMehtods: $('#dynamicDocMehtods'),
                    table: '#docMethodsTable',
                    pager: '#docMethodsTablePager'
                }
            },

            urls = {
                getDocMethodsUrl: null,
                getAddedUrl: null,
                downloadFileUrl: null,
                downloadAllUrl: null,
                deleteFileUrl: null,
                uploadFileUrl: null
            },

            vars = {
                matchNo: null,
                methodCode: null,
                fileDivPrfx: 'docMethDiv_',
                fileLabelPrfx: 'docMethLbl_',
                filePrfx: 'docMethFile_',
                filesToUp: []
            },

            addDynamicFileUpload = function (v) {
                dom().dynamicDocMehtods.append('<div class="form-group" id="' + vars.fileDivPrfx + v.DocId + '">' +
                    '<label id="' + vars.fileLabelPrfx + v.DocId + '" class="col-sm-5 control-label no-padding-left" for="' + vars.filePrfx + v.DocId + '">' + v.DocName + '</label>' +
                    '<div class="col-sm-7">' +
                    '<span id="fileUpSpan" class="col-xs-12">' +
                    '<input type="file" id="' + vars.filePrfx + v.DocId + '" />' +
                    '</span>' +
                    '</div>' +
                    '</div>');
            },

            populateDynamic = function () {
                dom().dynamicDocMehtods.empty();
                BT.Dialog.ajaxGet(dom().dialog,
                    urls.getDocMethodsUrl,
                    { matchNo: vars.matchNo, methodCode: vars.methodCode },
                    false,
                    function(d) {
                        $.each(d, function(i, v) {
                            addDynamicFileUpload(v);
                        });

                        $('[id^=' + vars.filePrfx + ']').ace_file_input({
                            no_file: 'ملف غير مرفق ...',
                            btn_choose: 'اختر',
                            btn_change: 'تغير',
                            droppable: false,
                            onchange: null,
                            thumbnail: false
                        });
                    },
                    ['btnDocDownloadAll']);
            },

            gridOpts = function() {
                return {
                    groupBy: [
                        { val: 'ArName', txt: 'أضيف بواسطة' },
                        { val: 'UploadDate', txt: 'تاريخ الإضافة' }
                    ],

                    editForms: {
                        search: { doShow: false, width: 600 },
                    },

                    properties: {
                        caption: 'المرفقات المضافة',
                        sortname: 'FileSEQ',
                        sortorder: 'asc',
                        url: urls.getAddedUrl,
                        //editurl: editUrl,
                        postData: { matchNo: vars.matchNo, methodCode: vars.methodCode },
                        colNames: [
                            'FileSEQ',
                            'العنوان',
                            'الموضوع',
                            'أضيف بواسطة',
                            'تاريخ الإضافة',
                            'اسم الملف',
                            'MatchNo',
                            ''
                        ],
                        colModel: [
                            {
                                name: 'FileSEQ',
                                index: 'FileSEQ',
                                hidden: true,
                                sorttype: 'int',
                                key: true,
                                viewable: false,
                                hidedlg: true,
                                search: false
                            },
                            {
                                name: 'Title',
                                index: 'Title',
                                width: 150,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'Subject',
                                index: 'Subject',
                                width: 200,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'ArName',
                                index: 'ArName',
                                width: 150,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'UploadDate',
                                index: 'UploadDate',
                                width: 100,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                sorttype: 'date',
                                formatter: 'date',
                                formatoptions: { newformat: 'd/m/Y' },
                                datefmt: 'd-M-Y',
                                searchoptions: { sopt: ['eq'] },
                                searchrules: { date: true }
                            },
                            {
                                name: 'FileName',
                                index: 'FileName',
                                hidden: true,
                                search: false
                            },
                            {
                                name: 'MatchNo',
                                index: 'MatchNo',
                                hidden: true,
                                search: false
                            },
                            {
                                name: 'talabAttachmentsActions',
                                index: '',
                                sortable: false,
                                search: false,
                                formatter: function(cellvalue, options, rowObject) {
                                    var link = urls.downloadFileUrl;
                                    link = link.replace('fs', rowObject.FileSEQ);
                                    link = link.replace('ft', rowObject.FileName);

                                    //ace-icon fa fa-pencil-square-o bigger-230
                                    return '<a class="btn btn-sm btn-success" href=\''
                                        + link
                                        + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                }
                            }
                        ]
                    }
                }
            },

            initGrid = function() {
                BT.Grid.defaultJqGrid({
                    table: dom().table,
                    pager: dom().pager,
                    grpBy: gridOpts().groupBy, // null: auto create, false: don't add groupBy
                    options: gridOpts().properties,
                    //disableEdit: this.DisabledInEdit(),
                    editForms: gridOpts().editForms
                });

                BT.Grid.addSeparstor(dom().table, 'last');

                BT.Grid.addButton(dom().table, {
                    title: 'حذف المرفق',
                    buttonicon: 'fa-trash-o red',
                    position: 'last',
                    id: 'delDocAttachmentBtn',
                    onClickButton: function ()
                    {
                        var sRow = BT.Grid.getSelectedRow(dom().table, this);

                        if (BT.isNullOrEmpty(sRow)) return;

                        BT.Dialog.confirm({
                            id: 'delDocAttachmentBtn',
                            message: 'سيتم حذف المرفق المختار',
                            post: {
                                url: urls.deleteFileUrl,
                                data: { fileSeq: sRow.FileSEQ },
                                onSuccessFn: function (dlg)
                                {
                                    $(dom().table).trigger('reloadGrid');
                                    populateDynamic();
                                }
                            }
                        });
                    }
                });
            },

            uploadFiles = function ()
            {
                if (vars.filesToUp.length) {
                    var f = vars.filesToUp.pop();

                    BT.Dialog.ajaxUpload(dom().dialog,
                        urls.uploadFileUrl,
                        f.formData,
                        false,
                        function () {
                            $('#' + vars.fileDivPrfx + f.DocId).remove();
                            uploadFiles();
                        });
                } else
                {
                    $(dom().table).trigger('reloadGrid');
                }
            },

            saveDocs = function () {
                $('[id^=' + vars.filePrfx + ']').each(function (i, v)
                {
                    var fileToUp = $(v)[0].files[0];

                    if (BT.isNullOrEmpty(fileToUp))
                        return;

                    var docId = $(v).attr('id').substr(vars.filePrfx.length);
                    var fupsub = $('#' + vars.fileLabelPrfx + docId).html();

                    var formdata = new window.FormData();
                    formdata.append('file', fileToUp);
                    formdata.append('finfo', JSON.stringify({
                        FileName: fileToUp.name,
                        Size: fileToUp.size,
                        Type: fileToUp.type,
                        Subject: fupsub,
                        MatchNo: vars.matchNo,
                        DocId: docId
                    }));

                    vars.filesToUp.push({ formData: formdata, DocId: docId });
                });

                if (vars.filesToUp.length) uploadFiles();
            },

            showDialog = function() {
                BT.Dialog.Create(dom().dialog, {
                    title: 'مرفقات المشروع',
                    width: 800,
                    onOpenFn: function() {
                        populateDynamic();
                        initGrid();
                    },
                    onSaveFn: saveDocs,
                    addButtons: [
                        {
                            id: 'btnDocDownloadAll',
                            text: 'تنزيل جميع الملفات',
                            'class': 'btn btn-sm btn-success',
                            click: function ()
                            {
                                if ($(dom().table).getGridParam('reccount') <= 0) {
                                    BT.showErrorNotice('Nothing to download');
                                    return;
                                }

                                var dAllLink = urls.downloadAllUrl;
                                dAllLink = dAllLink.replace('fmno', vars.matchNo);
                                dAllLink = dAllLink.replace('mcode', vars.methodCode);
                                dAllLink = dAllLink.replace('&amp;', '&');

                                window.open(dAllLink, '_blank');
                            }
                        }
                    ]
                });
            },

            init = function (pGetDocMethodsUrl,
                pGetAddedUrl,
                pDownloadFileUrl,
                pDownloadAllUrl,
                pDeleteFileUrl,
                pUploadFileUrl,
                pMatchNo,
                pMethodCode)
            {
                if (BT.isNullOrEmpty(pGetDocMethodsUrl)
                    || BT.isNullOrEmpty(pGetAddedUrl)
                    || BT.isNullOrEmpty(pDownloadFileUrl)
                    || BT.isNullOrEmpty(pDownloadAllUrl)
                    || BT.isNullOrEmpty(pDeleteFileUrl)
                    || BT.isNullOrEmpty(pUploadFileUrl)
                    || BT.isNullOrEmpty(pMatchNo)
                    || BT.isNullOrEmpty(pMethodCode)
                ) {
                    BT.showErrorNotice('pal.docMethods.init: missing params');
                    return;
                }

                urls.getDocMethodsUrl = pGetDocMethodsUrl;
                urls.getAddedUrl = pGetAddedUrl;
                urls.downloadFileUrl = pDownloadFileUrl;
                urls.downloadAllUrl = pDownloadAllUrl;
                urls.deleteFileUrl = pDeleteFileUrl;
                urls.uploadFileUrl = pUploadFileUrl;

                vars.matchNo = pMatchNo;
                vars.methodCode = pMethodCode;

                showDialog();
            };

        return {
            init: init
        }
    })(),

    project: (function() {
        var getProjectsUrl,
            typesOfSectorsUrl,
            governorsUrl,
            curnsUrl,
            projectAreasUrl,
            programsUrl,
            saveDataUrl,
            nonpayeeProUrl,
            getProjectUrl,
            getToWhomSentUrl,
            sendEmpsUrl,
            attachmentsUrl,
            downloadUrl,
            downloadAllUrl,
            deleteFileUrl,
            donorUrl,
            addDonorUrl,

            modalAddProject = '#modalAddProject',
            modalEmpTree = '#modalEmpTree',
            modalAddDonor = '#modalAddDonor',
            modalDynamicContent = '#modalDynamicContent',

            table = '#projectTable',
            pager = '#projectTablePager',

            proCode,
            proDate,
            proName,
            proSender,
            proGov,
            proArea,
            proChk,
            statusSelect,
            proSec,
            proProgram,
            proAmt,
            proCurn,
            proNumber,
            proDesc,
            proBen,
            proDonor,
            proMethod,
            proAddDonorBtn,

            donorArName,
            donorEnName,
            donorTel,
            donorFax,
            donorMobile,
            donorEmail,

            matchNoTxt,

            dialogAttachmentsBtn,

            proNumDiv,
            proNameDiv,
            proDonorDiv,
            proMethodDiv,

            status,

            showEmpTree = function() {
                var sRow = BT.Grid.getSelectedRow(table, this);
                if (sRow === undefined || sRow === null) return;

                if (sRow.Forwarded === 'Y') {
                    BT.showErrorNotice('المشروع مرسل');
                    return;
                }

                if (sRow.Status === 'A') return;

                BT.Dialog.Create(modalEmpTree, {
                    title: 'شجرة الموظفين',
                    onOpenFn: function() {
                        BT.Tree.selectedKeys = null;
                        $('#expandCollapseTreeChk').attr('checked', false);
                        $('#treeSearchText').select2('val', '');
                        $('#empTree').dynatree('getTree').reload();
                        $('#empTree').dynatree('option', 'selectMode', 2);
                    },
                    onSaveFn: function() {
                        if (BT.Tree.selectedKeys === null || BT.Tree.selectedKeys.length === 0) {
                            BT.Dialog.showError(table, 'الرجاء اختيار الموظفين قبل الارسال.');
                            return;
                        }

                        BT.Dialog.ajaxPOST(
                            modalEmpTree,
                            sendEmpsUrl,
                            {
                                "Code": sRow.Code,
                                "empList": BT.Tree.selectedKeys,
                                "status": sRow.Status
                            },
                            true,
                            function() {
                                $(table).jqGrid('delRowData', sRow.Code);
                                $('#empTree').dynatree('getTree').reload();
                                BT.Dialog.hide(modalEmpTree);
                            }
                        );

                        BT.Dialog.hide(modalEmpTree);

                        $(table).trigger('reloadGrid');
                    }
                });
            },

            toWhomSent = function() {
                var sRow = BT.Grid.getSelectedRow(table, this);
                if (sRow === undefined || sRow === null) return;

                if (sRow.Forwarded !== 'Y') {
                    BT.showErrorNotice('المشروع غير مرسل');
                    return;
                }

                BT.Dialog.Create(modalDynamicContent, {
                    title: 'لمن ارسلت المعاملة',
                    onCreateFn: function() {
                        $(modalDynamicContent).empty();

                        BT.Dialog.ajaxGet(modalDynamicContent,
                            getToWhomSentUrl,
                            { id: sRow.Code },
                            false,
                            function(d) {
                                $.each(d, function(i, v) {
                                    $(modalDynamicContent).append('<div class="dd-handle">' +
                                        '<label style="margin-bottom: 0px;">' +
                                        '<span class="lbl">' + v + '</span>' +
                                        '</label>' +
                                        '</div>');
                                });
                            });
                    }
                });
            },

            saveDonor = function() {
                BT.Dialog.hideError(modalAddProject);

                if (BT.isNullOrEmpty(donorArName.val())) {
                    BT.Dialog.showError(modalAddProject, 'الاسم عربي: خانة إجبارية');
                    return;
                }

                BT.Dialog.ajaxPOST(modalAddDonor, addDonorUrl, {
                        ArName: donorArName.val(),
                        EnName: donorEnName.val(),
                        Tel: donorTel.val(),
                        Fax: donorFax.val(),
                        Mobile: donorMobile.val(),
                        Email: donorEmail.val()
                    },
                    true,
                    function(jData) {
                        BT.Dialog.hide(modalAddDonor);
                    });
            },

            showAddDonorDialog = function() {
                $('.donorEdt').val('');

                BT.Dialog.Create(modalAddDonor, {
                    title: 'إضافة مانح',
                    onSaveFn: function() { saveDonor(); }
                });
            },

            initSelects = function() {
                BT.select2.defaultAr(proSec, typesOfSectorsUrl);
                BT.select2.defaultAr(proCurn, curnsUrl);
                BT.select2.defaultAr(proGov, governorsUrl);
                BT.select2.defaultAr(proArea, projectAreasUrl);
                BT.select2.defaultAr(proProgram, programsUrl, proSec.val());
                BT.select2.defaultAr(proSender, nonpayeeProUrl);
                BT.select2.defaultAr(proDonor, donorUrl);
            },

            clearEditForm = function() {
                $('.edt').val('');
                proMethod.val('N');
                proChk.prop('checked', false);
                proChk.trigger('change');
            },

            initEditForm = function(sRow) {
                dialogAttachmentsBtn = $('#dialogAttachmentsBtn');

                clearEditForm();

                proDate.datepicker({
                    autoclose: true,
                    dateFormat: 'dd/mm/yy',
                    isRTL: true
                });

                if (!BT.isNullOrEmpty(sRow)) {
                    BT.Dialog.ajaxGet(modalAddProject, getProjectUrl,
                        { id: sRow.Code },
                        false,
                        function(d) {
                            proSender.val(d.Sender);
                            proGov.val(d.Governor);
                            proSec.val(d.Sector);
                            proArea.val(d.Area);
                            proProgram.val(d.Program);
                            proAmt.val(d.Amt);
                            proCurn.val(d.Curn);
                            proDesc.val(d.Description);
                            proBen.val(d.Beneficiaries);
                            proNumber.val(d.ProjectNo);
                            proName.val(d.ProjectName);
                            proDonor.val(d.DonorCode);
                            proMethod.val(d.Method);
                            proDate.val(BT.DateTime.getDate(d.ApplicationDate));
                            proChk.prop('checked', d.IsComplaint === "Y");
                            statusSelect.val(d.Status).trigger('change');

                            proCode.val(d.Code);

                            initSelects();

                            proChk.trigger('change');
                        }
                    );
                }

                if (BT.isNullOrEmpty(sRow)) dialogAttachmentsBtn.prop('disabled', true);
                else dialogAttachmentsBtn.prop('disabled', false);

                if (BT.isNullOrEmpty(sRow)) proNumDiv.hide();
                else proNameDiv.hide();

                proGov.off('change').on('change', function() {
                    BT.select2.defaultAr(proArea, projectAreasUrl, proGov.val());
                });

                statusSelect.off('change').on('change', function() {
                    if (statusSelect.val() === 'D')
                    {
                        proNumDiv.show();
                        proDonorDiv.show();
                        proMethodDiv.show();
                    } else
                    {
                        proNumDiv.hide();
                        proDonorDiv.hide();
                        proMethodDiv.hide();
                    }
                });

                proSec.off('change').on('change', function() {
                    BT.select2.defaultAr(proProgram, programsUrl, proSec.val());
                });

                proChk.off('change').on('change', function() {
                    if (proChk.is(':checked')) {
                        proNameDiv.hide();
                        BT.select2.defaultAr(proSec.val(''), typesOfSectorsUrl);
                        BT.select2.defaultAr(proProgram.val(''), programsUrl);
                        BT.select2.defaultAr(proCurn.val(''), curnsUrl);
                        BT.select2.defaultAr(proDonor.val(''), donorUrl);
                        proNumber.val('');
                        proAmt.val('');
                        proDesc.val('');
                        proBen.val('');
                        statusSelect.val('A');
                    } else {
                        proNameDiv.show();
                    }
                });

                proAddDonorBtn.off('click').on('click', function() {
                    showAddDonorDialog();
                });

                initSelects();

                BT.Fn.autoSize();
                BT.Fn.inputLimiter();
            },

            saveEditForm = function(sRow) {
                BT.Dialog.hideError(modalAddProject);

                if (statusSelect.val() === 'D' && BT.isNullOrEmpty(proNumber.val())) {
                    BT.Dialog.showError(modalAddProject, 'رقم المشروع: خانة إجبارية في حالة التنفيذ');
                    return;
                }

                BT.Dialog.ajaxPOST(modalAddProject, saveDataUrl, {
                        Sender: proSender.val(),
                        Governor: proGov.val(),
                        Area: proArea.val(),
                        Sector: proSec.val(),
                        Program: proProgram.val(),
                        Amt: proAmt.val(),
                        Curn: proCurn.val(),
                        Description: proDesc.val(),
                        Beneficiaries: proBen.val(),
                        ProjectNo: proNumber.val(),
                        ProjectName: proName.val(),
                        ApplicationDate: proDate.val(),
                        IsComplaint: proChk.is(':checked') ? 'Y' : 'N',
                        Status: statusSelect.val(),
                        DonorCode: proDonor.val(),
                        Method: proMethod.val(),
                        Code: BT.isNullOrEmpty(sRow) && BT.isNullOrEmpty(proCode.val()) ? null : !BT.isNullOrEmpty(sRow) ? sRow.Code : proCode.val(),
                        op: BT.isNullOrEmpty(sRow) && BT.isNullOrEmpty(proCode.val()) ? 'add' : 'edit'
                    },
                    true,
                    function(jData) {
                        $(table).trigger('reloadGrid');

                        if (BT.isNullOrEmpty(sRow)) matchNoTxt.val(jData.MatchNo);

                        dialogAttachmentsBtn.prop('disabled', false);

                        if (BT.isNullOrEmpty(sRow)) proCode.val(jData.Code);
                        else BT.Dialog.hide(modalAddProject);
                    });
            },

            showEditProjectDialog = function(sRow) {
                BT.Dialog.Create(modalAddProject, {
                    title: (BT.isNullOrEmpty(sRow)) ? 'تقديم طلب مشروع' : 'تعديل طلب مشروع',
                    width: 1000, //'max',
                    onCreateFn: function() { initEditForm(sRow); },
                    onSaveFn: function() { saveEditForm(sRow); },
                    addButtons: [
                        {
                            text: 'المرفقات',
                            position: 'last',
                            'class': 'btn btn-sm btn-primary',
                            id: 'dialogAttachmentsBtn',
                            //icon: 'fa-paperclip dark',
                            click: function() {
                                WF.Fn.getAttachments(table,
                                    attachmentsUrl,
                                    downloadUrl,
                                    downloadAllUrl,
                                    BT.isNullOrEmpty(sRow) ? matchNoTxt.val() : sRow.MatchNo,
                                    proName.val(),
                                    deleteFileUrl);
                            }
                        },
                        {
                            text: 'تقديم طلب مشروع جديد',
                            position: 'last',
                            'class': 'btn btn-sm',
                            id: 'dialogAddPrBtn',
                            //icon: 'fa-paperclip dark',
                            click: function() {
                                BT.Dialog.hide(modalAddProject);
                                showEditProjectDialog(null);
                            }
                        }
                    ]
                });
            },

            gridOpts = function() {
                return {
                    groupBy: [
                        { val: 'IsComplaint', txt: 'غير متوافق' },
                        { val: 'Status', txt: 'الحالة' },
                        { val: 'ApplicationDate', txt: 'التاريخ' },
                        { val: 'GovernerName', txt: 'المحافظة' },
                        { val: 'AreaName', txt: 'المنطقة' },
                        { val: 'SectorName', txt: 'القطاع' },
                        { val: 'ProgramName', txt: 'البرنامج' },
                        { val: 'Amt', txt: 'المبلغ' },
                        { val: 'CurnName', txt: 'العملة' },
                        { val: 'Method', txt: 'طريقة التنفيذ' },
                        //{ val: 'DonorName', txt: 'المانح' }
                    ],

                    //EditForms: {
                    //    search: { doShow: true },
                    //    view: { doShow: true },

                    //},

                    properties: {
                        caption: status === 'A' ? 'المشاريع للأرشفة'
                            : status === 'D' ? 'المشاريع للتنفيذ'
                            : status === 'E' ? 'المشاريع منفذة'
                            : status === 'F' ? 'المشاريع للتمويل'
                            : status === 'S' ? 'المشاريع للدراسة'
                            : 'جميع المشاريع',
                        sortname: 'Code',
                        sortorder: 'asc',
                        url: getProjectsUrl,
                        editurl: null,
                        postData: { status: status },
                        colNames: [
                            //'مرفقات',
                            'رقم طلب المشروع',
                            'اسم طلب المشروع',
                            'غير متوافق',
                            'الحالة',
                            'التاريخ',
                            'المحافظة',
                            'المنطقة',
                            'القطاع',
                            'البرنامج',
                            'المبلغ',
                            'العملة',
                            'الوصف',
                            'المستفيدون',
                            'رقم المشروع',
                            'طريقة التنفيذ',
                            'مرسل',
                            'MatchNo'
                        ],
                        colModel: [
                            {
                                name: 'Code',
                                index: 'Code',
                                hidden: false,
                                width: 70,
                                sorttype: 'int',
                                viewable: true,
                                key: true,
                                editable: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                //formoptions: { rowpos: 1 }
                            },
                            {
                                name: 'ProjectName',
                                index: 'ProjectName',
                                width: 200,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                //formoptions: { rowpos: 12 }
                            },
                            {
                                name: 'IsComplaint',
                                index: 'IsComplaint',
                                width: 70,
                                sortable: true,
                                editable: false,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                search: false,
                                fixed: true,
                                formatter: 'checkbox',
                                edittype: 'checkbox',
                                editoptions: { value: 'Y:N' },
                                //formoptions: { rowpos: 2 }
                            },
                            {
                                name: 'Status',
                                index: 'Status',
                                hidden: false,
                                width: 70,
                                formatter: 'select',
                                edittype: 'select',
                                editoptions: { value: { 'A': 'للارشفة', 'S': 'للدراسة', 'F': 'للتمويل', 'D': 'للتنفيذ' } },
                                viewable: true,
                                hidedlg: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                //formoptions: { rowpos: 3 }
                            },
                            {
                                name: 'ApplicationDate',
                                index: 'ApplicationDate',
                                width: 100,
                                fixed: true,
                                sortable: true,
                                editable: false,
                                viewable: true,
                                hidedlg: false,
                                sorttype: 'date',
                                formatter: 'date',
                                formatoptions: { newformat: 'd/m/Y' },
                                datefmt: 'd-M-Y',
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                searchrules: { date: true },
                                //formoptions: { rowpos: 4 }
                            },
                            {
                                name: 'GovernerName',
                                index: 'GovernerName',
                                width: 100,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                //formoptions: { rowpos: 5 }
                            },
                            {
                                name: 'AreaName',
                                index: 'AreaName',
                                width: 100,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                //formoptions: { rowpos: 6 }
                            },
                            {
                                name: 'SectorName',
                                index: 'SectorName',
                                width: 100,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                //formoptions: { rowpos: 7 }
                            },
                            {
                                name: 'ProgramName',
                                index: 'ProgramName',
                                width: 150,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                //formoptions: { rowpos: 8 }
                            },
                            {
                                name: 'Amt',
                                index: 'Amt',
                                width: 150,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                sorttype: 'number',
                                formatter: 'currency',
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                formatoptions: { decimalSeparator: '.', thousandsSeparator: ',', decimalPlaces: 2 },
                                //formoptions: { rowpos: 9 }
                            },
                            {
                                name: 'CurnName',
                                index: 'CurnName',
                                width: 100,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                //formoptions: { rowpos: 10 }
                            },
                            {
                                name: 'Description',
                                index: 'Description',
                                width: 200,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                //formoptions: { rowpos: 11 }
                            },
                            {
                                name: 'Beneficiaries',
                                index: 'Beneficiaries',
                                width: 200,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                //formoptions: { rowpos: 12 }
                            },
                            {
                                name: 'ProjectNo',
                                index: 'ProjectNo',
                                width: 200,
                                fixed: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq'] },
                                formoptions: { rowpos: 12 }
                            },
                            {
                                name: 'Method',
                                index: 'Method',
                                hidden: false,
                                width: 70,
                                formatter: 'select',
                                edittype: 'select',
                                editoptions: { value: { 'T': 'العطائات', 'DP': 'الشراء المباشر', 'TP': 'إستدراج عروض الأسعار', 'DI': 'تنفيذ مباشر' } },
                                viewable: true,
                                hidedlg: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                //formoptions: { rowpos: 3 }
                            },
                            {
                                name: 'Forwarded',
                                index: 'Forwarded',
                                width: 70,
                                sortable: true,
                                editable: false,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                search: false,
                                fixed: true,
                                formatter: 'checkbox',
                                edittype: 'checkbox',
                                editoptions: { value: 'Y:N' },
                                //formoptions: { rowpos: 13 }
                            },
                            { name: 'MatchNo', index: 'MatchNo', hidden: true },
                        ],

                        onSelectRow: function(rowId) {
                            var sRow = $(table).jqGrid('getRowData', rowId);

                            if (sRow.Status === 'A' || sRow.Forwarded === 'Y') {
                                $('#sendBtn').hide();
                                $('#sendBtn').next().hide();
                            } else {
                                $('#sendBtn').show();
                                $('#sendBtn').next().show();
                            }

                            if (sRow.Status === 'A' || sRow.Forwarded !== 'Y') {
                                $('#toWhomSentBtn').hide();
                                $('#toWhomSentBtn').next().hide();
                            } else {
                                $('#toWhomSentBtn').show();
                                $('#toWhomSentBtn').next().show();
                            }
                        },

                        ondblClickRow: function() {
                            var sRow = BT.Grid.getSelectedRow(table, null);
                            showEditProjectDialog(sRow);
                        }
                    }
                }

            },

            initGrid = function() {
                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().groupBy, // null: auto create, false: don't add groupBy
                    options: gridOpts().properties,
                    //disableEdit: WF.Muth.disabledInEdit,
                    editForms: false
                });

                //BT.Grid.defaultJqGrid(
                //    table,
                //    pager,
                //    gridOpts().groupBy, // null: auto create, false: don't add groupBy
                //    false, // null: add buttons, forms default width of 500, false: no buttons
                //    gridOpts().properties
                //);

                BT.Grid.addSeparstor(table, 'last');

                BT.Grid.addButton(table, {
                    title: 'تقديم طلب مشروع',
                    buttonicon: 'fa-plus blue',
                    position: 'last',
                    id: 'addProjecBtn',
                    onClickButton: function() { showEditProjectDialog(null); }
                });

                BT.Grid.addSeparstor(table, 'last');

                BT.Grid.addButton(table, {
                    title: 'تعديل مشروع',
                    buttonicon: 'fa-edit blue',
                    position: 'last',
                    id: 'editProjecBtn',
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);

                        if (BT.isNullOrEmpty(sRow)) return;

                        showEditProjectDialog(sRow);
                    }
                });

                BT.Grid.addSeparstor(table, 'last');

                BT.Grid.addButton(table,
                {
                    title: 'ارسال',
                    buttonicon: 'fa-envelope red',
                    position: 'last',
                    id: 'sendBtn',
                    onClickButton: showEmpTree
                });

                BT.Grid.addSeparstor(table, 'last');

                BT.Grid.addButton(table,
                {
                    title: 'لمن ارسلت المعاملة',
                    buttonicon: 'fa-envelope blue',
                    position: 'last',
                    id: 'toWhomSentBtn',
                    onClickButton: toWhomSent
                });

                BT.Grid.addSeparstor(table, 'last');

                BT.Grid.addButton(table,
                {
                    title: 'المرفقات',
                    buttonicon: 'fa-paperclip dark',
                    position: 'last',
                    id: 'attachmentsBtn',
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow === undefined || sRow === null) return;

                        WF.Fn.getAttachments(table,
                            attachmentsUrl,
                            downloadUrl,
                            downloadAllUrl,
                            BT.isNullOrEmpty(sRow) ? matchNoTxt.val() : sRow.MatchNo,
                            sRow.ProjectName,
                            deleteFileUrl);
                    }
                });
            },

            init = function(
                       pGetProjectsUrl,
                       pTypesOfSectorsUrl,
                       pCurnsUrl,
                       pGovernorsUrl,
                       pProjectAreasUrl,
                       pProgramsUrl,
                       pSaveDataUrl,
                       pNonpayeeProUrl,
                       pGetProjectUrl,
                       pGetToWhomSentUrl,
                       pSendEmpsUrl,
                       pAttachemntsUrl,
                       pDownloadUrl,
                       pDownloadAllUrl,
                       pDeleteFileUrl,
                       pDonorUrl,
                       pAddDonorUrl,
                       pStatus) {
                if (BT.isNullOrEmpty(pGetProjectsUrl)
                        || BT.isNullOrEmpty(pTypesOfSectorsUrl)
                        || BT.isNullOrEmpty(pCurnsUrl)
                        || BT.isNullOrEmpty(pGovernorsUrl)
                        || BT.isNullOrEmpty(pProjectAreasUrl)
                        || BT.isNullOrEmpty(pProgramsUrl)
                        || BT.isNullOrEmpty(pSaveDataUrl)
                        || BT.isNullOrEmpty(pNonpayeeProUrl)
                        || BT.isNullOrEmpty(pGetProjectUrl)
                        || BT.isNullOrEmpty(pGetToWhomSentUrl)
                        || BT.isNullOrEmpty(pSendEmpsUrl)
                        || BT.isNullOrEmpty(pAttachemntsUrl)
                        || BT.isNullOrEmpty(pDownloadUrl)
                        || BT.isNullOrEmpty(pDownloadAllUrl)
                        || BT.isNullOrEmpty(pDeleteFileUrl)
                        || BT.isNullOrEmpty(pDonorUrl)
                        || BT.isNullOrEmpty(pAddDonorUrl)
                    //|| BT.isNullOrEmpty(pStatus)
                ) {
                    BT.showErrorNotice('pal.project.init: missing params');
                    return;
                }

                getProjectsUrl = pGetProjectsUrl;
                typesOfSectorsUrl = pTypesOfSectorsUrl;
                curnsUrl = pCurnsUrl;
                governorsUrl = pGovernorsUrl;
                projectAreasUrl = pProjectAreasUrl;
                programsUrl = pProgramsUrl;
                saveDataUrl = pSaveDataUrl;
                nonpayeeProUrl = pNonpayeeProUrl;
                getProjectUrl = pGetProjectUrl;
                getToWhomSentUrl = pGetToWhomSentUrl;
                sendEmpsUrl = pSendEmpsUrl;
                attachmentsUrl = pAttachemntsUrl;
                downloadUrl = pDownloadUrl;
                downloadAllUrl = pDownloadAllUrl;
                deleteFileUrl = pDeleteFileUrl;
                donorUrl = pDonorUrl;
                addDonorUrl = pAddDonorUrl;
                status = pStatus;

                proCode = $('#proCode');
                proDate = $('#proDate');
                proName = $('#proName');
                proSender = $('#proSender');
                proGov = $('#proGov');
                proArea = $('#proArea');
                proChk = $('#proChk');
                statusSelect = $('#statusSelect');
                proSec = $('#proSec');
                proProgram = $('#proProgram');
                proAmt = $('#proAmt');
                proCurn = $('#proCurn');
                proNumber = $('#proNumber');
                proDesc = $('#proDesc');
                proBen = $('#proBen');
                proNumDiv = $('#proNumDiv');
                proNameDiv = $('#proNameDiv');
                proDonorDiv = $('#proDonorDiv');
                proMethodDiv = $('#proMethodDiv');
                matchNoTxt = $('#matchNoTxt');
                proDonor = $('#proDonor');
                proMethod = $('#proMethod');
                proAddDonorBtn = $('#proAddDonorBtn');

                donorArName = $('#donorArName');
                donorEnName = $('#donorEnName');
                donorTel = $('#donorTel');
                donorFax = $('#donorFax');
                donorMobile = $('#donorMobile');
                donorEmail = $('#donorEmail');

                initGrid();
            };

        return {
            init: init
        }
    })(),

    donor: (function() {
        var table = '#donorTable',
            pager = '#donorTablePager',

            getDonorsUrl,
            saveDonorUrl,

            gridOpts = function() {
                return {
                    groupBy: false,

                    properties: {
                        caption: 'المانحين',
                        sortname: 'Code',
                        sortorder: 'asc',
                        url: getDonorsUrl,
                        editurl: saveDonorUrl,
                        colNames: [
                            'تسلسل المانح',
                            'الاسم عربي',
                            'الاسم انجليزي',
                            'التلفون',
                            'الفاكس',
                            'الموبايل',
                            'البريد الالكتروني'
                        ],
                        colModel: [
                            {
                                name: 'Code',
                                index: 'Code',
                                hidden: false,
                                width: 70,
                                sorttype: 'int',
                                viewable: true,
                                key: true,
                                editable: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                formoptions: { rowpos: 1 }
                            },
                            {
                                name: 'ArName',
                                index: 'ArName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { size: '50', maxlength: '256' },
                                editrules: {
                                    required: true
                                },
                                formoptions: {
                                    rowpos: 2
                                }
                            },
                            {
                                name: 'EnName',
                                index: 'EnName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { size: '50', maxlength: '256' },
                                editrules: {
                                    required: false
                                },
                                formoptions: {
                                    rowpos: 3
                                }
                            },
                            {
                                name: 'Tel',
                                index: 'Tel',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { size: '35', maxlength: '20' },
                                formoptions: {
                                    rowpos: 4
                                }
                            },
                            {
                                name: 'Fax',
                                index: 'Fax',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { size: '35', maxlength: '20' },
                                formoptions: {
                                    rowpos: 5
                                }
                            },
                            {
                                name: 'Mobile',
                                index: 'Mobile',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { size: '35', maxlength: '20' },
                                formoptions: {
                                    rowpos: 6
                                }
                            },
                            {
                                name: 'Email',
                                index: 'Email',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { size: '35', maxlength: '100' },
                                //editrules: {
                                //    email: true
                                //},
                                formoptions: {
                                    rowpos: 7
                                }
                            }
                        ]
                    }
                }
            },

            initGrid = function() {
                //BT.Grid.defaultJqGrid(
                //    table,
                //    pager,
                //    gridOpts().groupBy, // null: auto create, false: don't add groupBy
                //    null, // null: add buttons, forms default width of 500, false: no buttons
                //    gridOpts().properties
                //);

                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().groupBy, // null: auto create, false: don't add groupBy
                    options: gridOpts().properties,
                    //disableEdit: this.DisabledInEdit(),
                    editForms: null
                });
            },

            init = function(
                       pGetDonorsUrl,
                       pSaveDonorUrl
                   ) {

                if (BT.isNullOrEmpty(pGetDonorsUrl)
                        || BT.isNullOrEmpty(pSaveDonorUrl)
                ) {
                    BT.showErrorNotice('pal.donor.init: missing params');
                    return;
                }

                getDonorsUrl = pGetDonorsUrl;
                saveDonorUrl = pSaveDonorUrl;

                initGrid();
            };

        return {
            init: init
        }
    })(),

    typesOfSectors: (function() {
        var vars = function() {
                return {
                    table: '#typesOfSectorsTable',
                    pager: '#typesOfSectorsTablePager'
                }
            },

            urls = {
                tableGetUrl: null,
                tableSetUrl: null,
                programsUrl: null
            },

            gridOpts = function() {
                return {
                    groupBy: false,

                    properties: {
                        caption: 'القطاعات',
                        sortname: 'Code',
                        sortorder: 'asc',
                        url: urls.tableGetUrl,
                        editurl: urls.tableSetUrl,
                        colNames: [
                            'تسلسل القطاع',
                            'الاسم عربي',
                            'الاسم انجليزي',
                            'فعال؟'
                        ],
                        colModel: [
                            {
                                name: 'Code',
                                index: 'Code',
                                hidden: false,
                                width: 70,
                                sorttype: 'int',
                                viewable: true,
                                key: true,
                                editable: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                formoptions: { rowpos: 1 }
                            },
                            {
                                name: 'ArName',
                                index: 'ArName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { /*size: '50',*/ maxlength: '100' },
                                editrules: {
                                    required: true
                                },
                                formoptions: {
                                    rowpos: 2
                                }
                            },
                            {
                                name: 'EnName',
                                index: 'EnName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { /*size: '50',*/ maxlength: '100' },
                                editrules: {
                                    required: false
                                },
                                formoptions: {
                                    rowpos: 3
                                }
                            },
                            {
                                name: 'IsValid',
                                index: 'IsValid',
                                width: 150,
                                sortable: true,
                                editable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                search: false,
                                fixed: true,
                                formatter: 'checkbox',
                                edittype: 'checkbox',
                                editoptions: { value: 'Y:N' },
                                formoptions: {
                                    rowpos: 4
                                }
                            }
                        ]
                    }
                }
            },

            initGrid = function() {
                BT.Grid.defaultJqGrid({
                    table: vars().table,
                    pager: vars().pager,
                    grpBy: gridOpts().groupBy, // null: auto create, false: don't add groupBy
                    options: gridOpts().properties,
                    //disableEdit: this.DisabledInEdit(),
                    editForms: null
                });

                BT.Grid.addSeparstor(vars().table, 'last');

                BT.Grid.addButton(vars().table, {
                    title: 'برامج القطاع',
                    buttonicon: 'fa-table blue',
                    position: 'last',
                    id: 'goToProgramsBtn',
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(vars().table, this);

                        if (BT.isNullOrEmpty(sRow)) return;

                        var lnk = urls.programsUrl;

                        lnk = lnk.replace('__id__', sRow.Code);

                        window.location.href = lnk;
                    }
                });
            },

            init = function(
                       pTableGetUrl,
                       pTableSetUrl,
                       pProgramsUrl
                   ) {

                if (BT.isNullOrEmpty(pTableGetUrl)
                        || BT.isNullOrEmpty(pTableSetUrl)
                        || BT.isNullOrEmpty(pProgramsUrl)
                ) {
                    BT.showErrorNotice('pal.typesOfSectors.init: missing params');
                    return;
                }

                urls.tableGetUrl = pTableGetUrl;
                urls.tableSetUrl = pTableSetUrl;
                urls.programsUrl = pProgramsUrl;

                initGrid();
            };

        return {
            init: init
        }
    })(),

    program: (function() {
        var vars = function() {
                return {
                    table: '#programTable',
                    pager: '#programTablePager',
                    typesOfSectsSelect: $('#typesOfSectsSelect')
                }
            },

            urls = {
                tableGetUrl: null,
                tableSetUrl: null,
                typesOfSectorsUrl: null
            },

            typesOfSectorsId,

            gridOpts = function() {
                return {
                    groupBy: [
                        { val: 'SectorName', txt: 'القطاع' }
                    ],

                    properties: {
                        caption: 'البرامج',
                        sortname: 'Code',
                        sortorder: 'asc',
                        url: urls.tableGetUrl,
                        editurl: urls.tableSetUrl,
                        postData: { sectorCode: vars().typesOfSectsSelect.val() },
                        colNames: [
                            'تسلسل البرنامج',
                            'القطاع',
                            'القطاع',
                            'الاسم عربي',
                            'الاسم انجليزي',
                            'فعال؟'
                        ],
                        colModel: [
                            {
                                name: 'Code',
                                index: 'Code',
                                hidden: false,
                                width: 70,
                                sorttype: 'int',
                                viewable: true,
                                key: true,
                                editable: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                formoptions: { rowpos: 1 }
                            },
                            {
                                name: 'SectorName',
                                index: 'SectorName',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                formoptions: {
                                    rowpos: 2
                                }
                            },
                            {
                                name: 'SectorCode',
                                index: 'SectorCode',
                                width: 150,
                                sortable: true,
                                editable: true,
                                viewable: false,
                                hidedlg: false,
                                hidden: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: {
                                    dataInit: function(el) {
                                        BT.select2.defaultAr(
                                            BT.isNullOrEmpty(vars().typesOfSectsSelect.val())
                                            ? $(el).width(200)
                                            : $(el).val(vars().typesOfSectsSelect.val()).prop('disabled', true).width(200),
                                            urls.typesOfSectorsUrl
                                        );
                                    }
                                },
                                editrules: {
                                    edithidden: true,
                                    required: true
                                },
                                formoptions: {
                                    rowpos: 3
                                }
                            },
                            {
                                name: 'ArName',
                                index: 'ArName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { size: '50', maxlength: '256' },
                                editrules: {
                                    required: true
                                },
                                formoptions: {
                                    rowpos: 4
                                }
                            },
                            {
                                name: 'EnName',
                                index: 'EnName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editoptions: { size: '50', maxlength: '256' },
                                editrules: {
                                    required: false
                                },
                                formoptions: {
                                    rowpos: 5
                                }
                            },
                            {
                                name: 'IsValid',
                                index: 'IsValid',
                                width: 150,
                                sortable: true,
                                editable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                search: false,
                                fixed: true,
                                formatter: 'checkbox',
                                edittype: 'checkbox',
                                editoptions: { value: 'Y:N' },
                                formoptions: {
                                    rowpos: 6
                                }
                            }
                        ]
                    }
                }
            },

            initGrid = function() {
                vars().typesOfSectsSelect.off('change').on('change', function() {
                    BT.Grid.defaultJqGrid({
                        table: vars().table,
                        pager: vars().pager,
                        grpBy: gridOpts().groupBy, // null: auto create, false: don't add groupBy
                        options: gridOpts().properties,
                        //disableEdit: this.DisabledInEdit(),
                        editForms: null
                    });
                }).trigger('change');
            },

            init = function(
                       pTableGetUrl,
                       pTableSetUrl,
                       pTypesOfSectorsUrl,
                       pId
                   ) {

                if (BT.isNullOrEmpty(pTableGetUrl)
                        || BT.isNullOrEmpty(pTableSetUrl)
                        || BT.isNullOrEmpty(pTypesOfSectorsUrl)
                ) {
                    BT.showErrorNotice('pal.program.init: missing params');
                    return;
                }

                urls.tableGetUrl = pTableGetUrl;
                urls.tableSetUrl = pTableSetUrl;
                urls.typesOfSectorsUrl = pTypesOfSectorsUrl;

                typesOfSectorsId = pId;

                BT.select2.defaultAr(vars().typesOfSectsSelect.val(typesOfSectorsId), urls.typesOfSectorsUrl);

                initGrid();
            };

        return {
            init: init
        }
    })()
};