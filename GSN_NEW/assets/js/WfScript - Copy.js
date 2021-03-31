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

    gridProperties: function (table, url, editUrl) {
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
                'CurnCode'
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
                    formatter: function (cellvalue, options, rowObject) {
                        if (rowObject.HasAttach) {
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
                        } else {
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
                    search: false,
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
            ],

            ondblClickRow: function (rowId) {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId) {
                var sRow = $(table).jqGrid('getRowData', rowId);

                if (sRow.Rank == -11) {
                    $('#sendBtn').show();
                    $('#sendFinalBtn').show();
                    $('#doneBtn').hide();
                } else if (sRow.Rank == -20) {
                    $('#sendBtn').hide();
                    $('#sendFinalBtn').hide();
                    $('#doneBtn').show();
                } else {
                    $('#sendBtn').hide();
                    $('#sendFinalBtn').hide();
                    $('#doneBtn').hide();
                }
            },

            rowattr: function (rd) {
                if (table === '#waredTable' && rd.NewRec == 'N') {
                    return { "class": 'newRecBold' };
                }
                return '';
            },
        };
    },

    grGridProperties: function (table, url, editUrl) {
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
                    formatter: function (cellvalue, options, rowObject) {
                        if (rowObject.HasAttach) {
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
                        } else {
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

            rowattr: function (rd) {
                if (table === '#waredTable' && rd.NewRec == 'N') {
                    return { "class": 'newRecBold' };
                }
                return '';
            },
        };
    },

    jqGrid: function (table, pager, url, editUrl, isGr) {
        BT.Grid.defaultJqGrid(
            table,
            pager,
            !BT.isNullOrEmpty(isGr) && isGr === true ? WF.DefaultWared.grGroupBy : WF.DefaultWared.groupBy, // null: auto create, false: don't add groupBy
            WF.DefaultWared.editForms, // null: add buttons, forms default width of 500, false: no buttons
            !BT.isNullOrEmpty(isGr) && isGr === true ? WF.DefaultWared.grGridProperties(table, url, editUrl) : WF.DefaultWared.gridProperties(table, url, editUrl),
            WF.DefaultWared.disabledInEdit
        );
    },

    updateNewRec: function (rowId) {
        if ($('tr#' + rowId).hasClass('newRecBold')) {
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

    matalatGridProperties: function (table, url, editUrl, waredNo, pkLine) {
        return {
            caption: 'المطالعات',
            sortname: 'PkLine',
            sortorder: 'asc',
            url: url,
            editurl: editUrl,
            postData: { waredNo: waredNo, pkLine: pkLine },
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
                    formatter: function (cellvalue, options, rowObject) {
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

            ondblClickRow: function (rowId) {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId) {
            },
        };
    },

    matalatJqGrid: function (table, pager, url, editUrl, waredNo, pkLine) {
        BT.Grid.defaultJqGrid(
            table,
            pager,
            WF.DefaultWared.matalatGroupBy, // null: auto create, false: don't add groupBy
            WF.DefaultWared.matalatEditForms, // null: add buttons, forms default width of 500, false: no buttons
            WF.DefaultWared.matalatGridProperties(table, url, editUrl, waredNo, pkLine),
            WF.DefaultWared.matalatDisabledInEdit
        );
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

    gridProperties: function (table, url, editUrl) {
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
                    formatter: function (cellvalue, options, rowObject) {
                        if (rowObject.HasAttach) {
                            return '<button class="btn btn-xs btn-info" onclick="$(\'' + table + '\').jqGrid(\'setSelection\',' + rowObject.PkLine + '); $(\'#attachmentsBtn\').click();">'
                                + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                                + '</button>';

                            //return '<span class="ui-icon ace-icon fa fa-paperclip dark"></span>';
                        } else {
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

            ondblClickRow: function (rowId) {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId) {
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

            rowattr: function (rd) {
                if (table === '#muthTable' && rd.NewRec == 'N') {
                    return { "class": 'newRecBold' };
                }
            },
        };
    },

    jqGrid: function (table, pager, url, editUrl) {
        BT.Grid.defaultJqGrid(
            table,
            pager,
            WF.Muth.groupBy, // null: auto create, false: don't add groupBy
            WF.Muth.editForms, // null: add buttons, forms default width of 500, false: no buttons
            WF.Muth.gridProperties(table, url, editUrl),
            WF.Muth.disabledInEdit
        );
    },

    updateNewRec: function (rowId) {
        if ($('tr#' + rowId).hasClass('newRecBold')) {
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

    matalatGridProperties: function (table, url, editUrl, muthNo, pkLine) {
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
                    formatter: function (cellvalue, options, rowObject) {
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

            ondblClickRow: function (rowId) {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId) {
            },
        };
    },

    matalatJqGrid: function (table, pager, url, editUrl, muthNo, pkLine) {
        BT.Grid.defaultJqGrid(
            table,
            pager,
            WF.Muth.matalatGroupBy, // null: auto create, false: don't add groupBy
            WF.Muth.matalatEditForms, // null: add buttons, forms default width of 500, false: no buttons
            WF.Muth.matalatGridProperties(table, url, editUrl, muthNo, pkLine),
            null
        );
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

    attachmentsGridProperties: function (table, url, editUrl, matchNo, pkLine, filesUrl) {
        return {
            caption: 'الملفات',
            sortname: 'FileSeq',
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
                    formatter: function (cellvalue, options, rowObject) {
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

            ondblClickRow: function (rowId) {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId) {
            },
        };
    },

    attachmentsJqGrid: function (table, pager, url, editUrl, matchNo, pkLine, filesUrl) {
        BT.Grid.defaultJqGrid(
            table,
            pager,
            WF.Files.attachmentsGroupBy, // null: auto create, false: don't add groupBy
            WF.Files.attachmentsEditForms, // null: add buttons, forms default width of 500, false: no buttons
            WF.Files.attachmentsGridProperties(table, url, editUrl, matchNo, pkLine, filesUrl),
            null
        );
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

    allFilesGridProperties: function (table, url, filesUrl) {
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
                    formatter: function (cellvalue, options, rowObject) {
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

            ondblClickRow: function (rowId) {
                //BT.Grid.showEditDialog(table, rowId, 500, Tours.DefaultCountry.disabledInEdit());
            },

            onSelectRow: function (rowId) {
            },
        };
    },

    allFilesJqGrid: function (table, pager, url, filesUrl) {
        BT.Grid.defaultJqGrid(
            table,
            pager,
            WF.Files.allFilesGroupBy, // null: auto create, false: don't add groupBy
            false, // null: add buttons, forms default width of 500, false: no buttons
            WF.Files.allFilesGridProperties(table, url, filesUrl),
            null
        );
    },
};

WF.Employees = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'ادخل اسم الموظف',
            minimumInputLength: '',
        });
    },
};

WF.DegreeLevelPriority = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر مستوى درجة الاولوية',
            minimumInputLength: '',
        });
    },
};

WF.Classification = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر التصنيف',
            minimumInputLength: '',
        });
    },
};

WF.TypesOfSectors = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر قطاع المشروع',
            minimumInputLength: '',
        });
    },
};

WF.Nonpayee = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: '',
        });
    },

    getSelect22: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: '',
        });
    },
};

WF.Actions = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر الاجراء',
            minimumInputLength: '',
        });
    },
};

WF.FilesTitle = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: '',
        });
    },
};

WF.FilesPlaces = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: '',
        });
    },
};

WF.Governor = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر المحافظة',
            minimumInputLength: '',
        });
    },
};

WF.ProjectArea = {
    getSelect2: function (select, url, opts) {
        BT.select2.create(select, url, {
            placeholder: 'اختر موقع المشروع',
            minimumInputLength: '',
            pid: opts.pid
        });
    },
};

WF.IncomingTypesName = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: ''
        });
    },
};

WF.IncomingTypesCode = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر',
            minimumInputLength: ''
        });
    },
};

WF.Subcategory = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر التصنيف الفرعي',
            minimumInputLength: ''
        });
    },
};

WF.ClassificationProject = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر تصنيف المشروع',
            minimumInputLength: ''
        });
    },
};

WF.GuaranteeTypes = {
    getSelect2: function (select, url) {
        BT.select2.create(select, url, {
            placeholder: 'اختر نوع الكفالة',
            minimumInputLength: ''
        });
    },
};

WF.Curn = {
    getSelect2: function (select, url) {
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
        saveDetailsUrl
    ) {
        var sRow = BT.Grid.getSelectedRow(table, this);

        if (sRow === undefined || sRow === null) return;

        var type = sRow.Type;

        $('#senderLabel').html(type === 'P' ? 'صاحب المشروع' : 'الجهة المرسلة');
        $('#classificationLabel').html(type === 'P' ? 'الجهة المستفيدة' : 'التصنيف');

        if (type === 'G') {
            $('#grTabLi').show();
        } else {
            $('#grTabLi').hide();
        }

        if (type === 'P') {
            $('#projectsTabLi').show();
        } else {
            $('#projectsTabLi').hide();
        }

        $('#modalWaredDetails' + ' input, textarea').each(function (i, v) { $(this).val(''); });

        BT.Dialog.Create('#modalWaredDetails', {
            title: 'بيانات العملية',
            onSaveFn: !hasEditAccess ? null : function () {
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
                    true,
                    null,
                    null
                );
            },
            onCreateFn: function () {
                $('#waredTabBtn').tab('show');
                BT.Dialog.ajaxGet(
                    '#modalWaredDetails',
                    getWaredDetailsUrl,
                    {
                        waredNo: sRow.WaredNo,
                        pkLine: sRow.PkLine
                    },
                    false,
                    null,
                    function (jdata) {
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
                        $('#grCurn').val(jdata.CurnCode);//CurnArName
                        $('#grCurnEdit').val(jdata.CurnCode);
                        $('#grBeginDate').val(BT.DateTime.getDate(jdata.GrBeginDate, 'DD-MMM-YYYY'));
                        $('#grDueDate').val(BT.DateTime.getDate(jdata.GrDueDate, 'DD-MMM-YYYY'));
                        $('#grType').val(jdata.GrCode);

                        if (jdata.WaredType !== undefined && jdata.WaredType != null && jdata.WaredType != '' && jdata.WaredType == 'P') {
                            $('#subcategoryDiv').show();
                        } else {
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

                        if (!hasEditAccess) {
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
                        } else {
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

                        $('#govCode').off('change').on('change', function () {
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
    },

    getMatalat: function (table, waredMatalatUrl) {
        var sRow = BT.Grid.getSelectedRow(table, this);

        if (sRow === undefined || sRow === null) return;

        $('#waredNo').val(sRow.WaredNo);
        $('#payeeFullName').val(sRow.PayeeName);

        BT.Dialog.Create('#modalMatalat', {
            title: 'المطالعات',
            width: 'max',
            onOpenFn: function () {
                WF.DefaultWared.matalatJqGrid(
                    '#matalatTable',
                    '#matalatTablePager',
                    waredMatalatUrl,
                    '',
                    sRow.WaredNo,
                    sRow.PkLine
                );

                WF.DefaultWared.updateNewRec(sRow.PkLine);
            },
            onResizeFn: function (size) {
                $('#matalatTable').jqGrid('setGridWidth', size.width - 50, true);
            }
        });
    },

    getAttachments: function (table, attachmentsUrl, downloadFileUrl, downloadAllUrl) {
        var sRow = BT.Grid.getSelectedRow(table, this);

        if (sRow === undefined || sRow === null) return;

        $('#matchNoTxt').val(sRow.MatchNo);

        BT.Dialog.Create('#modalAttachments', {
            title: 'المرفقات',
            width: 'max',
            onOpenFn: function () {
                WF.Files.attachmentsJqGrid(
                    '#attachmentsTable',
                    '#attachmentsTablePager',
                    attachmentsUrl,
                    '',
                    sRow.MatchNo,
                    sRow.PkLine,
                    downloadFileUrl
                );
            },
            onResizeFn: function (size) {
                $('#attachmentsTable').jqGrid('setGridWidth', size.width - 50, true);
            },
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
                    click: function () {
                        var dAllLink = downloadAllUrl;
                        dAllLink = dAllLink.replace('fmno', sRow.MatchNo);

                        window.open(dAllLink, '_blank');
                    }
                }
            ]
        });
    },
    getAttachments1: function (table, attachmentsUrl, downloadFileUrl, downloadAllUrl,MatchNo) {

        if (MatchNo == null) {
            return;}
    $('#matchNoTxt').val(MatchNo);

    BT.Dialog.Create('#modalAttachments', {
        title: 'المرفقات',
        width: 'max',
        onOpenFn: function () {
            WF.Files.attachmentsJqGrid(
                '#attachmentsTable',
                '#attachmentsTablePager',
                attachmentsUrl,
                '',
               MatchNo,
               null,
                downloadFileUrl
            );
        },
        onResizeFn: function (size) {
            $('#attachmentsTable').jqGrid('setGridWidth', size.width - 50, true);
        },
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
                click: function () {
                    var dAllLink = downloadAllUrl;
                    dAllLink = dAllLink.replace('fmno', MatchNo);

                    window.open(dAllLink, '_blank');
                }
            }
        ]
    });
}
};

pr = {
    project: (function () {
        var getProjectsUrl = null,
            ProSecUrl = null,
            ProProgram = '#ProProgram',
            ProProgramUrl = null,
            ProCurnUrl = null,
            ProArea = '#ProArea',
            ProAreaUrl = null,
            table = '#projectTable',
            pager = '#projectTablePager',
            modalAddProject = '#modalAddProject',
            projectDate = '#ProDate',
            ProSec = '#ProSec',
            ProCurn = '#ProCurn',
            ProGov = '#ProGov',
            SaveDataUrl = null,
            TreeEmpUrl = null,
            ProGovUrl = null,
            ProSender = '#ProSender',
            ProSenderUrl = null,
            GetProjectUrl = null,
            modalEmpTree = '#modalEmpTree',
            proTemp = null,
            treeEmps = function() {

                if ($('#status1Select').val() === 'D' || $('#status1Select').val() === 'S') {
                    BT.Dialog.Create(modalEmpTree, {
                        title: 'شجرة الموظفين',
                        onOpenFn: function() {
                            BT.Tree.selectedKeys = null;
                            $('#expandCollapseTreeChk').attr('checked', false);
                            $("#treeSearchText").select2("val", "");
                            $('#empTree').dynatree('getTree').reload();
                            $('#empTree').dynatree("option", "selectMode", 2);
                        },
                        onSaveFn: function() {
                            if (BT.Tree.selectedKeys === null || BT.Tree.selectedKeys.length === 0) {
                                {
                                    BT.Dialog.showError(modalEmpTree, 'الرجاء اختيار الموظفين قبل الارسال.');
                                }
                                return;
                            }
                            var srow = BT.Grid.getSelectedRow1(table);
                            BT.Dialog.ajaxPOST(
                                modalEmpTree,
                                TreeEmpUrl,
                                {
                                    "Code": srow.Code,
                                    "empList": BT.Tree.selectedKeys
                                },
                                true,
                                null,
                                function() {
                                    //  $(waredTable).jqGrid('delRowData', sRow.PkLine);
                                    //  $('#empTree').dynatree('getTree').reload();
                                    BT.Dialog.hide(modalEmpTree);
                                }
                            );
                        }

                    });
                }
            },
            attachmentUrl = null,
            downloadUrl = null,
            downloadAllUrl = null,
            gridOpts = function () {
                return {
                    groupBy: [
                        { val: 'IsComplaint', txt: 'غير متوافق' },
                        { val: 'status', txt: 'الحالة' },
                        { val: 'ApplicationDate', txt: 'التاريخ' },
                        { val: 'GovernerName', txt: 'المحافظة' },
                        { val: 'AreaName', txt: 'المنطقة' },
                        { val: 'SectorName', txt: 'القطاع' },
                        { val: 'ProgramName', txt: 'البرنامج' },
                        { val: 'Amt', txt: 'المبلغ' },
                        { val: 'CurnName', txt: 'العملة' }
                    ],

                    //EditForms: {
                    //    search: { doShow: true },
                    //    view: { doShow: true },

                    //},

                    properties: {
                        caption: 'المشاريع',
                        sortname: 'Code',
                        sortorder: 'asc',
                        url: getProjectsUrl,
                        editurl: null,
                        colNames: [
                            'مرفقات',
                            'تسلسل المشروع',
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
                            'اسم المشروع',
                            'رقم المشروع',
                             'مرسل'
                        ],
                        colModel: [
                        {
                            name: 'MatchNo',
                            index: 'MatchNo',
                            width: 80,
                            fixed: true,
                            search: false,
                            sortable: false,
                            hidedlg: true,
                            viewable: false,
                            hidden: true
                //formatter: function (cellvalue, options, rowObject) {
                //    if (rowObject.HasAttach) {
                //        return '<button class="btn btn-xs btn-info" onclick="$(\'' + table + '\').jqGrid(\'setSelection\',' + rowObject.PkLine + '); $(\'#attachmentsBtn\').click();">'
                //            + '<i class="ace-icon fa fa-paperclip bigger-110"></i>'
                //            + '</button>';

                //        //return '<span class="ui-icon ace-icon fa fa-paperclip dark"></span>';
                //    } else {
                //        return '';
                //    }
                //}
            },
                        {
                            name: 'Code',
                            index: 'Code',
                            hidden: false,
                            width: 70,
                            sorttype: 'int',
                            viewable: true,
                            editable: false,
                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                            formoptions: { rowpos: 1 }
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
                            formoptions: { rowpos: 2 }
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
                            formoptions: { rowpos: 3 }
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
                                formoptions: { rowpos: 4 }
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
                                formoptions: { rowpos: 5 }
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
                                formoptions: { rowpos: 6 }
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
                                formoptions: { rowpos: 7 }
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
                                formoptions: { rowpos: 8 }
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
                                formoptions: { rowpos: 9 }
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
                                formoptions: { rowpos: 10 }
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
                                formoptions: { rowpos: 11 }
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
                                formoptions: { rowpos: 12 }
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
                                formoptions: { rowpos: 12 }
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
                            }
                            ,
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
                                formoptions: { rowpos: 13 }
                            }
                        ]
                    }
                }

            },

            initGrid = function () {
                BT.Grid.defaultJqGrid(
                    table,
                    pager,
                    gridOpts().groupBy, // null: auto create, false: don't add groupBy
                    false, // null: add buttons, forms default width of 500, false: no buttons
                    gridOpts().properties
                );
                BT.Grid.addSeparstor(table, 'last');


                BT.Grid.addButton(table, {
                    title: "تقديم طلب مشروع",
                    buttonicon: 'fa-plus blue',
                    position: 'last',
                    id: 'addprojecButton',
                    onClickButton: function () {
                        BT.Dialog.Create(modalAddProject, {
                            title: 'تقديم طلب مشروع',
                            width: 1000,


                            onSaveFn: function () {
                                var opt1 = 'edit';
                                var code = 0;

                                if (BT.isNullOrEmpty($('#Code').val())) {

                                    opt1 = 'add';
                                    //    alert('add');
                                } else {
                                    code = $('#Code').val();
                                }
                                BT.Dialog.ajaxPOST(modalAddProject, SaveDataUrl, {
                                    Sender: $("#ProSender").val(),
                                    Governor: $('#ProGov').val(),
                                    Area: $('#ProArea').val(),
                                    Sector: $('#ProSec').val(),
                                    Program: $('#ProProgram').val(),
                                    Amt: $('#ProAmt').val(),
                                    Curn: $('#ProCurn').val(),
                                    Description: $('#ProDesc').val(),
                                    Beneficiaries: $('#ProBen').val(),
                                    //    Status :
                                    ProjectNo: $('#ProNumber').val(),
                                    ProjectName: $('#ProName').val(),
                                    ApplicationDate: $('#ProDate').val(),
                                    IsComplaint: $('#ProChk').is(':checked') ? 'Y' : 'N',
                                    Status: $('#status1Select').val(),
                                    Code: code,
                                    opt: opt1
                                }, true, function(p1) {

                                    proTemp = p1;
                                    //document.getElementById("Code");
                                    if (BT.isNullOrEmpty($('#Code').val())) {

                                        $('#Code').val(proTemp);

                                    } // alert(proTemp);
                                    $(table).trigger('reloadGrid');


                                    //  BT.Dialog.hide(modalAddProject);
                                });
                                $(table).trigger('reloadGrid');
                            },
                            attach: "Y",
                        //   newBtm:"y",
                            newClick:
                                function() {
                                    $('#Code').val('');
                                    $("#ProSender").val('');
                                    $("#ProSender").text('');
                                    $('#ProGov').attr('val', '');
                                    $('#ProArea').attr('val', '');
                                   
                                 

                                    $('#ProDivName').show();
                                    $('#ProProgram').attr('val', '');
                                    $('#ProNumber').val('');
                                    $('#ProAmt').val('');
                                    $('#ProCurn').attr('val', '');
                                    $('#ProDesc').val('');
                                    $('#ProBen').val('');
                                    $('#ProName').val('');
                                    $('#ProDate').attr('val', '');

                                    $('#ProChk').prop('checked', false);
                                    proTemp = null;
                                },

                            onAttachFn: function () {
                                BT.Dialog.ajaxGet(modalAddProject, GetProjectUrl,
                                   { id: $('#Code').val() }, false, function (d) {
                                       proTemp = d.MatchNo;
                                       //   alert(proTemp);
                                       WF.Fn.getAttachments1(projectTable,
attachmentUrl,
downloadUrl,
downloadAllUrl, $('#Code').val());
                                   }
                               );


                            },

                            onCreateFn: function () {
                                $(projectDate).datepicker({
                                    autoclose: true,
                                    dateFormat: 'dd/mm/yy'
                                });

                                
                                $('.edt').val('');

                                $('#ProDivNum').hide();

                                $('#ProGov').off('change').on('change', function () {


                                    BT.select2.create(ProArea, ProAreaUrl, {
                                        placeholder: 'اختار',
                                        minimumInputLength: '',
                                        pid: $('#ProGov').val()
                                    });


                                });


                                $('#status1Select').off('change').on('change', function () {

                                    if ($('#status1Select').val() === "D") {

                                        $('#ProDivNum').show();
                                    } else {

                                        $('#ProDivNum').hide();
                                    }


                                });
                                $('#ProSec').off('change').on('change', function () {


                                    BT.select2.create(ProProgram, ProProgramUrl, {
                                        placeholder: 'اختار',
                                        minimumInputLength: '',
                                        pid: $('#ProSec').val()
                                    });


                                });

                                $('#ProChk').off('change').on('change', function () {
                                    if ($('#ProChk').is(':checked')) {
                                        $('#ProDivName').hide();
                                        $('#ProProgram').val('');
                                        $('#ProNumber').val('');
                                        $('#ProAmt').val('');
                                        $('#ProCurn').val('');
                                        $('#ProDesc').val('');
                                        $('#ProBen').val('');
                                        $('#status1Select').val('A');

                                      
                                    } else {

                                        $('#ProDivName').show();

                                    }

                                });

                                BT.select2.create(ProSec, ProSecUrl, {
                                    placeholder: 'اختار',
                                    minimumInputLength: '',
                                });
                                BT.select2.create(ProCurn, ProCurnUrl, {
                                    placeholder: 'اختار',
                                    minimumInputLength: '',
                                });
                                BT.select2.create(ProGov, ProGovUrl, {
                                    placeholder: 'اختار',
                                    minimumInputLength: '',
                                });
                                BT.select2.create(ProArea, ProAreaUrl, {
                                    placeholder: 'اختار',
                                    minimumInputLength: '',
                                });

                                BT.select2.create(ProProgram, ProProgramUrl, {
                                    placeholder: 'اختار',
                                    minimumInputLength: '',
                                });
                                BT.select2.create(ProSender, ProSenderUrl, {
                                    placeholder: 'اختار',
                                    minimumInputLength: '',
                                });



                            }
                        });

                    }
                });
                BT.Grid.addSeparstor(table, 'last');

                BT.Grid.addButton(table, {
                    title: "تعديل مشروع",
                    buttonicon: 'fa-edit blue',
                    position: 'last',
                    id: 'EditprojecButton',
                    
                    onClickButton: function () {
                        var srow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(srow))
                            return;
                       
                        BT.Dialog.Create(modalAddProject, {
                                title: 'تعديل طلب مشروع',
                                width: 1000,
                      
                                onSaveFn: function () {
                                    
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    BT.Dialog.ajaxPOST(modalAddProject, SaveDataUrl, {
                                        Sender: $("#ProSender").val(),
                                        Governor: $('#ProGov').val(),
                                        Area: $('#ProArea').val(),
                                        Sector: $('#ProSec').val(),
                                        Program: $('#ProProgram').val(),
                                        Amt: $('#ProAmt').val(),
                                        Curn: $('#ProCurn').val(),
                                        Description: $('#ProDesc').val(),
                                        Beneficiaries: $('#ProBen').val(),
                                        //    Status :
                                        ProjectNo: $('#ProNumber').val(),
                                        ProjectName: $('#ProName').val(),
                                        ApplicationDate: $('#ProDate').val(),
                                        IsComplaint: $('#ProChk').is(':checked') ? 'Y' : 'N',
                                        Status: $('#status1Select').val(),
                                        Code: srow.Code,
                                        opt: 'edit'
                                    }, true, function() {
                                        $(table).trigger('reloadGrid');
                                        BT.Dialog.hide(modalAddProject);
                                       // treeEmps();
                                    });
                                
                                
                                   
                        
                                
                                

                            
                                },       attach: "Y",
                                onAttachFn: function () {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    BT.Dialog.ajaxGet(modalAddProject, GetProjectUrl,
                                       { id: sRow.Code }, false, function (d) {
                                           proTemp = d.MatchNo;
                                           alert(proTemp);
                                           WF.Fn.getAttachments1(projectTable,
    attachmentUrl,
    downloadUrl,
    downloadAllUrl, proTemp);
                                       }
                                   );
            
                            
                                },
                                onCreateFn: function () {
                                    BT.Dialog.ajaxGet(modalAddProject, GetProjectUrl,
                                        { id: srow.Code }, false, function(d) {
                                            $("#ProSender").val(d.Sender);
                                            $('#ProGov').val(d.Governor);
                                            $('#ProSec').val(d.Sector);
                                            $('#ProArea').val(d.Area);
                                            $('#ProProgram').val(d.Program);
                                            $('#ProAmt').val(d.Amt);
                                            $('#ProCurn').val(d.Curn);
                                            $('#ProDesc').val(d.Description);
                                            $('#ProBen').val(d.Beneficiaries);
                                            $('#ProNumber').val(d.ProjectNo);
                                            $('#ProName').val(d.ProjectName);
                                            $('#ProDate').val(BT.DateTime.getDate(d.ApplicationDate));
                                            $('#ProChk').prop('checked',d.IsComplaint === "Y" );
                                            $('#status1Select').val(d.Status);
                                            $('#MatchNo').val(d.MatchNo);
                                            $('#Code').val(d.Code);

                                            BT.select2.create(ProSec, ProSecUrl, {
                                                placeholder: 'اختار',
                                                minimumInputLength: '',
                                            });
                                            BT.select2.create(ProCurn, ProCurnUrl, {
                                                placeholder: 'اختار',
                                                minimumInputLength: '',
                                            });
                                            BT.select2.create(ProGov, ProGovUrl, {
                                                placeholder: 'اختار',
                                                minimumInputLength: '',
                                            });
                                            BT.select2.create(ProArea, ProAreaUrl, {
                                                placeholder: 'اختار',
                                                minimumInputLength: '',
                                            });

                                            BT.select2.create(ProProgram, ProProgramUrl, {
                                                placeholder: 'اختار',
                                                minimumInputLength: '',
                                            });
                                            BT.select2.create(ProSender, ProSenderUrl, {
                                                placeholder: 'اختار',
                                                minimumInputLength: '',
                                            });

                                            $('#ProChk').trigger('change');
                                        }
                                    );
                                    $(projectDate).datepicker({
                                        autoclose: true,
                                        dateFormat: 'dd/mm/yy'
                                    });

                                    $('#ProDivName').hide();
                                    $('.edt').val('');

                                    $('#ProGov').off('change').on('change', function () {

                                      
                                        BT.select2.create($(ProArea).val(''), ProAreaUrl, {
                                            placeholder: 'اختار',
                                            minimumInputLength: '',
                                            pid: $('#ProGov').val()
                                        });


                                    });
                                    $('#status1Select').off('change').on('change', function () {

                                        if ($('#status1Select').val() === "D") {

                                            $('#ProDivNum').show();
                                        } else {

                                            $('#ProDivNum').hide();
                                        }


                                    });
                                    $('#ProSec').off('change').on('change', function () {


                                        BT.select2.create($(ProProgram).val(''), ProProgramUrl, {
                                            placeholder: 'اختار',
                                            minimumInputLength: '',
                                            pid: $('#ProSec').val()
                                        });


                                    });

                                    $('#ProChk').off('change').on('change', function () {
                                        if ($('#ProChk').is(':checked')) {
                                            $('#ProDivName').hide();
                                            $('#ProProgram').val('');
                                            $('#ProNumber').val('');
                                            $('#ProAmt').val('');
                                            $('#ProCurn').val('');
                                            $('#ProDesc').val('');
                                            $('#ProBen').val('');
                                       
                                        } else {
                                         
                                            $('#ProDivName').show();
                                         
                                        }

                                    });
                                  
                                    BT.select2.create(ProSec, ProSecUrl, {
                                        placeholder: 'اختار',
                                        minimumInputLength: '',
                                    });
                                    BT.select2.create(ProCurn, ProCurnUrl, {
                                        placeholder: 'اختار',
                                        minimumInputLength: '',
                                    });
                                    BT.select2.create(ProGov, ProGovUrl, {
                                        placeholder: 'اختار',
                                        minimumInputLength: '',
                                    });
                                    BT.select2.create(ProArea, ProAreaUrl, {
                                        placeholder: 'اختار',
                                        minimumInputLength: '',
                                    });

                                    BT.select2.create(ProProgram, ProProgramUrl, {
                                        placeholder: 'اختار',
                                        minimumInputLength: '',
                                    });
                                    BT.select2.create(ProSender, ProSenderUrl, {
                                        placeholder: 'اختار',
                                        minimumInputLength: '',
                                    });

                                    

                                    //if ($('#status1select').val() === 'D') {
                                    //    $('#ProDivName').show();
                                    //}
                                }
                            }
                        );
                    }
                });
              
       
                BT.Grid.addSeparstor(table, 'last');

                BT.Grid.addButton(table,
                {
                    title: 'ارسال',
                    buttonicon: 'fa-envelope red',
                    position: 'last',
                    id: 'sendBtn',
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);

                        if (sRow === undefined || sRow === null) return;
                        if (sRow.Forwarded === 'Y') {
                            BT.showErrorNotice( 'المشروع مرسل');
                            return;
                        }
                        if (sRow.Status === 'D' || sRow.Status === 'S') {
                            BT.Dialog.Create(modalEmpTree, {
                                title: 'شجرة الموظفين',
                                onOpenFn: function () {
                                    BT.Tree.selectedKeys = null;
                                    $('#expandCollapseTreeChk').attr('checked', false);
                                    $("#treeSearchText").select2("val", "");
                                    $('#empTree').dynatree('getTree').reload();
                                    $('#empTree').dynatree("option", "selectMode", 2);
                                },
                                onSaveFn: function () {
                                    if (BT.Tree.selectedKeys === null || BT.Tree.selectedKeys.length === 0) {
                                        {
                                            BT.Dialog.showError(table, 'الرجاء اختيار الموظفين قبل الارسال.');
                                        }
                                       
                                       
                                        return;
                                    }
                                    var srow = BT.Grid.getSelectedRow1(table);
                                    BT.Dialog.ajaxPOST(
                                        modalEmpTree,
                                        TreeEmpUrl,
                                        {
                                            "Code": srow.Code,
                                            "empList": BT.Tree.selectedKeys,
                                            "status": srow.Status
                                        },
                                        true,
                                        null,
                                        function () {
                                            //  $(waredTable).jqGrid('delRowData', sRow.PkLine);
                                            //  $('#empTree').dynatree('getTree').reload();
                                            BT.Dialog.hide(modalEmpTree);
                                        }
                                    );
                                    BT.Dialog.hide(modalEmpTree);

                                    $(table).trigger('reloadGrid');
                                }

                            });
                        }
                    }
                });
                BT.Grid.addSeparstor(table, 'last');

            },

                    init = function (pGetProjectsUrl, pProSecUrl, pProCurnUrl, pProGovUrl, pProAreaUrl, pProProgramUrl, pSaveDataUrl, pProSenderUrl,pGetProjectUrl,pTreeEmpUrl,pattachemntUrl,pdownloadUrl,pDownloadAllUrl) {
                if (BT.isNullOrEmpty(pGetProjectsUrl)
                    || BT.isNullOrEmpty(pProSecUrl) || BT.isNullOrEmpty(pProCurnUrl) || BT.isNullOrEmpty(pProCurnUrl), BT.isNullOrEmpty(pProAreaUrl), BT.isNullOrEmpty(pProProgramUrl), BT.isNullOrEmpty(pProSenderUrl),BT.isNullOrEmpty(pGetProjectUrl)) {
                    BT.showErrorNotice('wf.project.init: missing params');
                    return;
                }
                TreeEmpUrl = pTreeEmpUrl;
                getProjectsUrl = pGetProjectsUrl;
                ProGovUrl = pProGovUrl;
                ProSecUrl = pProSecUrl;
                ProCurnUrl = pProCurnUrl;
                ProAreaUrl = pProAreaUrl;
                ProProgramUrl = pProProgramUrl;
                SaveDataUrl = pSaveDataUrl;
                ProSenderUrl = pProSenderUrl;
                GetProjectUrl = pGetProjectUrl;
                attachmentUrl = pattachemntUrl;
                downloadUrl = pdownloadUrl;
                        downloadAllUrl = pDownloadAllUrl;
                initGrid();
            };

        return {
            init: init
        }
    })()
};