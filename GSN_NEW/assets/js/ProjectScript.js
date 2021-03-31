
var FileNoURLGe;
var CheckAraURL;
var Em = {
    InputFields: (function () {
        var getInputFieldsUrl,
            saveInputFieldsUrl,
            getTablesNameUrl,
            getTablesNameIfmisUrl,
            getCascadeNameUrl,
            primaryFieldUrl,
            primaryFieldIfmisUrl,
            foreignFieldUrl,
            foreignFieldIfmisUrl,
            createUrl,
            editUrl,
            deleteUrl,
            getDataUrl,
            checkSqlUrl,
            table = '#InputsFieldsXTable',
            pager = '#InputsFieldsXTablePager',
            gridOpts = function () {
                return {
                    GroupBy: [
                        { val: 'FieldSeq', txt: 'الكود' },
                        { val: 'FieldType', txt: 'نوع الحقل' },
                        { val: 'FieldLength', txt: 'طول الحقل' },
                        { val: 'FieldName', txt: 'اسم الحقل' },
                        { val: 'FieldArabicName', txt: ' اسم الحقل بالعربي ' },
                        { val: 'Islookup', txt: 'Is lookup' },
                        { val: 'SystemTable', txt: 'SystemTable' }
                    ],

                    //EditForms: {
                    //    search: { doShow: false },
                    //    view: { doShow: false }
                    //},

                    Properties: {
                        caption: "حقول الادخال",
                        sortname: 'FIELD_SEQ',
                        sortorder: "asc",
                        url: getInputFieldsUrl,
                       // editurl: saveInputFieldsUrl,
                        //postData: { idService: id },
                        colNames: [
                            'الكود', 'نوع الحقل', 'طول الحقل', 'اسم الحقل', 'اسم الحقل بالعربي', 'StaticLookupAr', 'StaticLookupEn', 'Is lookup', 'SystemTable',
                            'CascadeTable','الكود','اسم الحقل','الحقل المشترك'
                        ],
                        colModel: [
                            {
                                name: 'FIELD_SEQ',
                                index: 'FIELD_SEQ',
                                key: true,
                                editable: false,
                                viewable: false,
                                hidedlg: true,
                                hidden: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                            {
                                name: 'FIELD_TYPE',
                                index: 'FIELD_TYPE',
                                width: 150,
                                sortable: true,
                                editable: true,
                                viewable: false,
                                hidedlg: false,
                                hidden: false,
                                edittype: 'select',
                                formatter: 'select',
                                editoptions: {
                                    value: '-1:choose;0:Text;1:Number;2:HtmlText;3:File;4:date;5:CheckBox;6:StaticLookUp',

                                },
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editrules: {
                                    edithidden: false,
                                    // required: true
                                },
                                formoptions: {
                                    rowpos: 1,
                                    elmprefix: "&nbsp;&nbsp;<span class='mystar' style='color:red'>*</span>&nbsp;",
                                    width: 39,

                                }
                            },
                            {
                                name: 'FIELD_LENGTH',
                                index: 'FIELD_LENGTH',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    //size: 10,
                                    maxlength: 100
                                },
                                editrules: {
                                    // required: true

                                },
                                formoptions: {
                                    rowpos: 2,
                                    elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",

                                },
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                            {
                                name: 'FIELD_NAME',
                                index: 'FIELD_NAME',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    //size: 10,
                                    maxlength: 100
                                },
                                editrules: {
                                    required: true
                                },
                                formoptions: {
                                    rowpos: 3,
                                    elmprefix: "&nbsp;&nbsp;<span class='mystar' style='color:red'>*</span>&nbsp;",
                                },
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'FIELD_ARABIC_NAME',
                                index: 'FIELD_ARABIC_NAME',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    //size: 10,
                                    maxlength: 100
                                },
                                editrules: {
                                    required: true
                                },
                                formoptions: {
                                    rowpos: 4,
                                    elmprefix: "&nbsp;&nbsp;<span class='mystar' style='color:red'>*</span>&nbsp;",
                                },
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                   {
                                       name: 'STATIC_LOOKUP_AR',
                                       index: 'STATIC_LOOKUP_AR',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       editoptions: {
                                           //size: 10,
                                           maxlength: 300
                                       },

                                       formoptions: {
                                           rowpos: 5,
                                           elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",
                                           elmsuffix: "مساعدة<span class='mystar'  style='color:red'>a,b,c</span>&nbsp;",
                                       },
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },

                                     {
                                         name: 'STATIC_LOOKUP_EN',
                                         index: 'STATIC_LOOKUP_EN',
                                         width: 150,
                                         editable: true,
                                         sortable: true,
                                         viewable: true,
                                         hidedlg: false,
                                         hidden: false,
                                         fixed: true,
                                         editoptions: {
                                             //size: 10,
                                             maxlength: 300
                                         },

                                         formoptions: {
                                             rowpos: 6,
                                             elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",
                                             elmsuffix: "مساعدة<span class='mystar'  style='color:red'>a,b,c</span>&nbsp;",
                                         },
                                         searchoptions: { sopt: ['cn', 'eq'] }
                                     },

                            {
                                name: 'ISLOOKUP',
                                index: 'ISLOOKUP',
                                width: 150,
                                editable: true,
                                formatter: "checkbox",
                                edittype: "checkbox",
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    value: "Y:N",
                                    maxlength: 1
                                },
                                //editrules: {
                                //    required: true
                                //},
                                formoptions: {
                                    rowpos: 7,
                                    elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",

                                }
                            },
                               //{
                               //    name: 'IS_LOOKUP_IFMIS',
                               //    index: 'IS_LOOKUP_IFMIS',
                               //    width: 150,
                               //    editable: true,
                               //    formatter: "checkbox",
                               //    edittype: "checkbox",
                               //    sortable: true,
                               //    viewable: true,
                               //    hidedlg: false,
                               //    hidden: false,
                               //    fixed: true,
                               //    editoptions: {
                               //        value: "Y:N",
                               //        maxlength: 1,
                               //        dataInit: function(el) {
                               //            $(el).check(function () {
                               //                getTablesNameUrl = getTablesNameIfmisUrl;
                               //                primaryFieldUrl = primaryFieldIfmisUrl;
                               //                foreignFieldUrl = foreignFieldIfmisUrl;
                               //            })
                               //        }
                               //    },
                               //    //editrules: {
                               //    //    required: true
                               //    //},
                               //    formoptions: {
                               //        rowpos: 8,
                               //        elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",

                               //    }
                               //},
                            {
                                name: 'SYSTEM_TABLE',
                                index: 'SYSTEM_TABLE',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    //size: 10,
                                    maxlength: 100,
                                    //dataInit: function (el) {

                                    //    BT.select2.defaultAr(
                                    //        $(el).width(160), getTablesNameUrl);
                                    //    $(el).change(function() {
                                    //        $.ajax({
                                    //            url: primaryFieldUrl,
                                    //            data: { tableName: $(el).val()}
                                    //        }).done(function (data) {
                                    //            $("#VALUE_MEMBER").val(data.id);
                                    //            BT.select2.defaultAr($("#DISPLAY_MEMBER"), foreignFieldUrl, $(el).val());
                                    //            BT.select2.defaultAr($("#MATCHING_FK"), foreignFieldUrl, $(el).val());
                                             

                                    //        });
                                    //    });

                                    //}
                                },

                                formoptions: {
                                    rowpos: 9,
                                    elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",

                                }
                            },
                             {
                                 name: 'CASCADE_FIELD',
                                 index: 'CASCADE_FIELD',
                                 width: 150,
                                 editable: true,
                                 sortable: true,
                                 viewable: true,
                                 hidedlg: false,
                                 hidden: false,
                                 fixed: true,
                                 editoptions: {
                                     //size: 10,
                                     maxlength: 100,
                                     dataInit: function (el) {

                                         BT.select2.defaultAr(
                                             $(el).width(160), getCascadeNameUrl);
                                       
                                     }
                                 },

                                 formoptions: {
                                     rowpos: 10,
                                     elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",

                                 }
                             },
                                 {
                                     name: 'VALUE_MEMBER',
                                     index: 'VALUE_MEMBER',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: false,
                                     hidedlg: true,
                                     hidden: false,
                                     fixed: true,
                                     editoptions: {
                                         //size: 10,
                                         maxlength: 300
                                     },

                                     formoptions: {
                                         rowpos: 11,
                                         elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",
                                         //elmsuffix: "مساعدة<span class='mystar'  style='color:red'>a,b,c</span>&nbsp;",
                                     },
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },

                                   {
                                       name: 'DISPLAY_MEMBER',
                                       index: 'DISPLAY_MEMBER',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: false,
                                       hidedlg: true,
                                       hidden: false,
                                       fixed: true,
                                       editoptions: {
                                           //size: 10,
                                           maxlength: 300
                                       },

                                       formoptions: {
                                           rowpos: 12,
                                           elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",
                                           //elmsuffix: "مساعدة<span class='mystar'  style='color:red'>a,b,c</span>&nbsp;",
                                       },
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                       {
                                           name: 'MATCHING_FK',
                                           index: 'MATCHING_FK',
                                           width: 150,
                                           editable: true,
                                           sortable: true,
                                           viewable: false,
                                           hidedlg: true,
                                           hidden: false,
                                           fixed: true,
                                           editoptions: {
                                               //size: 10,
                                               maxlength: 300
                                           },

                                           formoptions: {
                                               rowpos: 13,
                                               elmprefix: "&nbsp;&nbsp;<span class='mystar' '>&nbsp; </span>&nbsp;",
                                               //elmsuffix: "مساعدة<span class='mystar'  style='color:red'>a,b,c</span>&nbsp;",
                                           },
                                           searchoptions: { sopt: ['cn', 'eq'] }
                                       },
                        ],
                        //editData: {
                        //    idService: id
                        //},
                        onSelectRow: function (rowId) {
                        }
                    }
                };
            },

            initInputFieldsGrid = function () {
                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().GroupBy,
                    options: gridOpts().Properties,
                });
                BT.Grid.addButton(table, {
                    title: 'إضافة',
                    buttonicon: 'fa fa-plus',
                    id: 'add' + BT.getNoHash(table),
                    onClickButton: function () {
                        $.ajax({
                            type:"get",
                            url: createUrl,
                        }).done(function (data) {
                            BT.Dialog.Create('#modalCreate1', {
                                title: 'إضافة',
                                width: 'max',
                                onOpenFn: function() {
                                    $('#modalCreate1 .form-horizontal').html(data)
                                },
                                addButtons: [
                                {
                                    id: 'save',
                                    text: 'حفظ',
                                    'class': 'btn btn-sm btn-success',
                                    click: function() {
                                        $.ajax({
                                            url: checkSqlUrl,
                                            data: {
                                                tbl: $("#SYSTEM_TABLE").val(),
                                                sql: $("#WHERE_CONDITION").val(),
                                                ifmis: $("input[name='lookup']:checked").val()==0?false:true
                                            }
                                        }).done(function (data) {
                                            if (data.done == false) {
                                                BT.showErrorNotice(data.msg);
                                            } else {
                                        $.ajax({
                                            type: "POST",
                                            url: createUrl,
                                            data: {
                                                FIELD_TYPE: $("#FIELD_TYPE").val(),
                                                FIELD_LENGTH: $("#FIELD_LENGTH").val(),
                                                FIELD_NAME: $("#FIELD_NAME").val(),
                                                FIELD_ARABIC_NAME: $("#FIELD_ARABIC_NAME").val(),
                                                STATIC_LOOKUP_AR: $("#STATIC_LOOKUP_AR").val(),
                                                STATIC_LOOKUP_EN: $("#STATIC_LOOKUP_EN").val(),
                                                ISLOOKUP: $("input[name='lookup']:checked").val(),
                                                SYSTEM_TABLE: $("#SYSTEM_TABLE").val(),
                                                WHERE_CONDITION: $("#WHERE_CONDITION").val(),
                                                CASCADE_FIELD: $("#CASCADE_FIELD").val(),
                                                VALUE_MEMBER: $("#VALUE_MEMBER").val(),
                                                DISPLAY_MEMBER: $("#DISPLAY_MEMBER").val(),
                                                MATCHING_FK: $("#MATCHING_FK").val(),
                                                DEPEND_ON_CITIZEN: $('#DEPEND_ON_CITIZEN').is(':checked'),
                                                CITIZEN_FK: $("#CITIZEN_FK").val(),
                                            }
                                        }).done(function(data) {
                                            if (data.done == false) {
                                                BT.showErrorNotice(data.msg);
                                            } else {
                                                BT.showSuccessNotice();
                                                BT.Grid.reload(table);
                                                BT.Dialog.hide('#modalCreate1');
                                            }
                                        });
                                    }
                                });
                        },
                   }],
                            });
                        });
                
                    }
                });

                BT.Grid.addButton(table, {
                    title: 'تعديل',
                    buttonicon: 'fa fa-pencil blue',
                    id: 'edit' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;
                        $.ajax({
                            type: "get",
                            url: createUrl,
                            data: { id: sRow.FIELD_SEQ}
                       
                        }).done(function (data) {
                            BT.Dialog.Create('#modalCreate1', {
                                title: 'تعديل',
                                width: 'max',
                                onOpenFn: function () {
                                    $.ajax({
                                        type: "GET",
                                        url: getDataUrl,
                                        data: { id: sRow.FIELD_SEQ }

                                    }).done(function(data1) {
                                        $('#modalCreate1 .form-horizontal').html(data);
                                        $("#FIELD_TYPE").val(data1.obj.FIELD_TYPE);
                                        
                                        if (data1.obj.IS_LOOKUP_IFMIS == "Y") {
                                            $("#ifmisCondition").removeClass("hidden");
                                            $("#lookupDiv").removeClass("hidden");
                                            $('#whereCondition').html("");

                                            BT.select2.defaultAr($("#SYSTEM_TABLE").val(data1.obj.SYSTEM_TABLE), getTablesNameIfmisUrl);
                                            $("#VALUE_MEMBER").val(data1.obj.VALUE_MEMBER);
                                            BT.select2.defaultAr($("#DISPLAY_MEMBER").val(data1.obj.DISPLAY_MEMBER), foreignFieldIfmisUrl, data1.obj.SYSTEM_TABLE);
                                            BT.select2.defaultAr($("#MATCHING_FK").val(data1.obj.MATCHING_FK), foreignFieldIfmisUrl, data1.obj.SYSTEM_TABLE);
                                            BT.select2.defaultAr($("#CITIZEN_FK").val(data1.obj.CITIZEN_FK), foreignFieldIfmisUrl, data1.obj.SYSTEM_TABLE);
                                            
                                        } else if (data1.obj.ISLOOKUP == "Y") {
                                            document.getElementById('DEPEND_ON_CITIZEN').checked = false;
                                            $('#whereCondition').html("");
                                            $('#CITIZEN_FK').val("");
                                            $("#lookupDiv").removeClass("hidden");
                                            BT.select2.defaultAr($("#SYSTEM_TABLE").val(data1.obj.SYSTEM_TABLE), getTablesNameUrl);
                                            $("#VALUE_MEMBER").val(data1.obj.VALUE_MEMBER);
                                            BT.select2.defaultAr($("#DISPLAY_MEMBER").val(data1.obj.DISPLAY_MEMBER), foreignFieldUrl, data1.obj.SYSTEM_TABLE);
                                            BT.select2.defaultAr($("#MATCHING_FK").val(data1.obj.MATCHING_FK), foreignFieldUrl, data1.obj.SYSTEM_TABLE);
                                            BT.select2.defaultAr($("#CITIZEN_FK").val(data1.obj.CITIZEN_FK), foreignFieldUrl, data1.obj.SYSTEM_TABLE);
                                            
                                        }
                                        if (data1.CASCADE_FIELD != "") {
                                            BT.select2.defaultAr($("#CASCADE_FIELD").val(data1.CASCADE_FIELD), getCascadeNameUrl);
                                        } else {
                                            BT.select2.defaultAr($("#CASCADE_FIELD"), getCascadeNameUrl);

                                        }

                                    });
                                },
                                addButtons: [
                   {
                       id: 'save',
                       text: 'حفظ',
                       'class': 'btn btn-sm btn-success',
                       click: function() {
                           $.ajax({
                               url: checkSqlUrl,
                               data: {
                                   tbl: $("#SYSTEM_TABLE").val(),
                                   sql: $("#WHERE_CONDITION").val(),
                                  ifmis: $("input[name='lookup']:checked").val()==0?false:true

                               }
                           }).done(function(data) {
                               if (data.done == false) {
                                   BT.showErrorNotice(data.msg);
                               } else {
                                   $.ajax({
                                       type: "POST",
                                       url: editUrl,
                                       data: {
                                           FIELD_SEQ: sRow.FIELD_SEQ,
                                           FIELD_TYPE: $("#FIELD_TYPE").val(),
                                           FIELD_LENGTH: $("#FIELD_LENGTH").val(),
                                           FIELD_NAME: $("#FIELD_NAME").val(),
                                           FIELD_ARABIC_NAME: $("#FIELD_ARABIC_NAME").val(),
                                           STATIC_LOOKUP_AR: $("#STATIC_LOOKUP_AR").val(),
                                           STATIC_LOOKUP_EN: $("#STATIC_LOOKUP_EN").val(),
                                           ISLOOKUP: $("input[name='lookup']:checked").val(),
                                           SYSTEM_TABLE: $("#SYSTEM_TABLE").val(),
                                           WHERE_CONDITION: $("#WHERE_CONDITION").val(),
                                           CASCADE_FIELD: $("#CASCADE_FIELD").val(),
                                           VALUE_MEMBER: $("#VALUE_MEMBER").val(),
                                           DISPLAY_MEMBER: $("#DISPLAY_MEMBER").val(),
                                           MATCHING_FK: $("#MATCHING_FK").val(),
                                           DEPEND_ON_CITIZEN: $('#DEPEND_ON_CITIZEN').is(':checked'),
                                           CITIZEN_FK: $("#CITIZEN_FK").val(),
                                       }
                                   }).done(function(data) {
                                       if (data.done == false) {
                                           BT.showErrorNotice(data.msg);
                                       } else {
                                           BT.showSuccessNotice();
                                           BT.Grid.reload(table);
                                           BT.Dialog.hide('#modalCreate1');
                                       }
                                   });
                               }
                           });
                       },
                   }],
                            });
                        });
                    }
                });

                BT.Grid.addButton(table, {
                    title: 'حذف',
                    buttonicon: 'fa fa-trash-o red',
                    id: 'delContentItem' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;

                        BT.Dialog.confirm({
                            id: 'confirmDel',
                            message: 'سيتم حذف التسجيل المختار',
                            post: {
                                url: deleteUrl,
                                data: { id:  sRow.FIELD_SEQ },
                                onSuccessFn: function (dlg) {
                                    $(table).trigger('reloadGrid');
                                }
                            }
                        });
                    }
                });
        },

            init = function (pGetInputFieldsUrl, pSaveInputFieldsUrl, pGetTablesNameUrl, pGetTablesNameIfmisUrl,
                pGetCascadeNameUrl
                , pPrimaryFieldUrl
                , pPrimaryFieldIfmisUrl,
                pForeignFieldUrl,
                pForeignFieldIfmisUrl
                , pCreateUrl
                , pEditUrl
                , pDeleteUrl
                , pGetDataUrl
                ,pCheckSqlUrl
                ) {
                if (
                    BT.isNullOrEmpty(pGetInputFieldsUrl)
                        || BT.isNullOrEmpty(pSaveInputFieldsUrl)
                        || BT.isNullOrEmpty(pGetTablesNameUrl)
                        || BT.isNullOrEmpty(pGetTablesNameIfmisUrl)
                        || BT.isNullOrEmpty(pGetCascadeNameUrl)
                        || BT.isNullOrEmpty(pPrimaryFieldUrl)
                        || BT.isNullOrEmpty(pPrimaryFieldIfmisUrl)
                        || BT.isNullOrEmpty(pForeignFieldUrl)
                        || BT.isNullOrEmpty(pForeignFieldIfmisUrl)
                      || BT.isNullOrEmpty(pCreateUrl)
                      || BT.isNullOrEmpty(pEditUrl)
                      || BT.isNullOrEmpty(pDeleteUrl)
                      || BT.isNullOrEmpty(pCheckSqlUrl)
                ) {
                    BT.showErrorNotice('Em.inputFields.init: missing params');
                    return;
                }

                getInputFieldsUrl = pGetInputFieldsUrl;
                saveInputFieldsUrl = pSaveInputFieldsUrl;
                getTablesNameUrl = pGetTablesNameUrl;
                getTablesNameIfmisUrl= pGetTablesNameIfmisUrl;
                getCascadeNameUrl = pGetCascadeNameUrl;
                primaryFieldUrl = pPrimaryFieldUrl;
                primaryFieldIfmisUrl = pPrimaryFieldIfmisUrl;
                foreignFieldUrl = pForeignFieldUrl;
                foreignFieldIfmisUrl = pForeignFieldIfmisUrl;
                createUrl = pCreateUrl;
                editUrl = pEditUrl;
               deleteUrl = pDeleteUrl;
               getDataUrl = pGetDataUrl;
               checkSqlUrl = pCheckSqlUrl;
                //$("#SYSTEM_TABLE").off('change').on('change', function () {
                //    BT.select2.defaultAr($("#DISPLAY_MEMBER").val(), foreignFieldUrl, $("#SYSTEM_TABLE").val());
                //    BT.select2.defaultAr($("#MATCHING_FK").val(), foreignFieldUrl, $("#SYSTEM_TABLE").val());
                //}).trigger('change');

                initInputFieldsGrid();
            };

        return {
            init: init

        };
    })(),
    ServicesCategories: (function () {
        var getServicesCategoriesUrl,
            saveServicesCategoriesUrl,
            getServicesCategoriesDetailsUrl,
            delServicesCategoriesUrl,
            editServicesCategoriesUrl,
            getServiceUrl,

            table = '#ServicesCategoryTable',
            pager = '#ServicesCategoryTablePager',


            gridOpts = function () {
                return {
                    GroupBy: [
                        { val: 'CAT_ID', txt: 'الكود' },
                        { val: 'E_CAT_NAME', txt: 'الاسم بالانجليزي' },
                        { val: 'A_CAT_NAME', txt: 'الاسم بالعربي' },
                        { val: 'ISACTIVE', txt: 'فعال' }
                    ],

                    Properties: {
                        caption: 'تصنيف الخدمات',
                        sortname: 'A_CAT_NAME',
                        sortorder: 'asc',
                        url: getServicesCategoriesUrl,
                        //postData: { : depSelect.val() },
                        //postData: { ContentTypeRef: mContentTypeSelect.val() },//BT.isNullOrEmpty(mContentTypeSelect.val()) ? null : { ContentTypeRef: mContentTypeSelect.val() },

                        colNames: [
                            'الكود', 'الاسم بالانجليزي', 'الاسم بالعربي', 'فعال'
                        ],
                        colModel: [
                            {
                                name: 'CAT_ID',
                                index: 'CAT_ID',
                                key: true,
                                editable: false,
                                viewable: true,
                                hidedlg: true,
                                hidden: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                            {
                                name: 'E_CAT_NAME',
                                index: 'E_CAT_NAME',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    //size: 50,
                                    maxlength: 100
                                },
                                searchoptions: { sopt: ['cn', 'eq'] }
                             
                            },
                            {
                                name: 'A_CAT_NAME',
                                index: 'A_CAT_NAME',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    //size: 50,
                                    maxlength: 100
                                },
                                searchoptions: { sopt: ['cn', 'eq'] }
                             
                            },
                            {
                                name: 'ISACTIVE',
                                index: 'ISACTIVE',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    //size: 50,
                                    maxlength: 100
                                }
                             
                            },
                            //{
                            //    name: 'STRINGICON',
                            //    index: 'STRINGICON',
                            //    width: 150,
                            //    editable: true,
                            //    sortable: true,
                            //    viewable: true,
                            //    hidedlg: false,
                            //    hidden: false,
                            //    fixed: true,
                            //    formatter: function (cellvalue, options, rowObject) {
                            //        return '<img alt="icon" src="data:image/png;base64,' + rowObject.StringIcon + '" />'
                            //        //return "<img src='http://myserver/path/i.jpg' alt='my image' />";
                            //    },
                             
                            //    formoptions: {
                            //        rowpos: 10
                            //    }
                            //}
                        ],

                        //editData: BT.isNullOrEmpty(mContentTypeSelect.val()) ? null : { ContentTypeRef: mContentTypeSelect.val() },

                        onSelectRow: function (rowId) {
                       
                        }
                    }
                };
            },
            initServicesCategoryGrid = function () {

                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().GroupBy,
                    options: gridOpts().Properties,
                });

                BT.Grid.addButton(table, {
                    title: 'الخدمات',
                    buttonicon: 'fa fa-align-justify',
                    id: 'editServiceItem' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;

                        // showEditForm({ isNew: false, id: sRow.ItemSeq });
                        var lnk = getServiceUrl;
                        lnk = lnk.replace("__id__", sRow.CAT_ID);
                        window.location.href = lnk;

                    }
                });

                BT.Grid.addButton(table, {
                    title: 'حذف',
                    buttonicon: 'fa fa-trash-o red',
                    id: 'delContentItem' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;

                        BT.Dialog.confirm({
                            id: 'confirmDel',
                            message: 'سيتم حذف التسجيل المختار',
                            post: {
                                url: delServicesCategoriesUrl,
                                data: { id: sRow.CAT_ID },
                                onSuccessFn: function (dlg) {
                                    $(table).trigger('reloadGrid');
                                }
                            }
                        });
                    }
                });

                BT.Grid.addButton(table, {
                    title: 'تعديل',
                    buttonicon: 'fa fa-pencil blue',
                    id: 'editContentItem' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;

                        // showEditForm({ isNew: false, id: sRow.ItemSeq });
                        var lnk = editServicesCategoriesUrl;
                        lnk = lnk.replace("__id__", sRow.CAT_ID);
                        window.location.href = lnk;

                    }
                });

                BT.Grid.addButton(table, {
                    title: 'اضافة',
                    buttonicon: 'fa fa-plus-circle purple',
                    id: 'addContentItem' + BT.getNoHash(table),
                    onClickButton: function () {
                        //showEditForm({ isNew: true });
                        //var sRow = BT.Grid.getSelectedRow(table, this);
                        //if (sRow == null) return;

                        var lnk = saveServicesCategoriesUrl;
                        //lnk = lnk.replace("__id__", mContentTypeSelect.val());
                        //if ($('#isNewTab').is(':checked')) {
                        //    window.open(lnk, '_blank');
                        //} else {
                        window.location.href = lnk;

                    }
                });
            },
            init = function (pGetServicesCategoriesUrl,
                pSaveServicesCategoriesUrl,
                pGetServicesCategoriesDetailsUrl,
                pDelServicesCategoriesUrl,
                pEditServicesCategoriesUrl,
                pGetServiceUrl
            ) {
                if (
                    BT.isNullOrEmpty(pGetServicesCategoriesUrl)
                        || BT.isNullOrEmpty(pSaveServicesCategoriesUrl)
                        || BT.isNullOrEmpty(pGetServicesCategoriesDetailsUrl)
                        || BT.isNullOrEmpty(pDelServicesCategoriesUrl)
                        || BT.isNullOrEmpty(pEditServicesCategoriesUrl)
                        || BT.isNullOrEmpty(pGetServiceUrl)
                ) {
                    BT.showErrorNotice('Em.services.init: missing params');
                    return;
                }

                getServicesCategoriesUrl = pGetServicesCategoriesUrl;
                saveServicesCategoriesUrl = pSaveServicesCategoriesUrl;
                getServicesCategoriesDetailsUrl = pGetServicesCategoriesDetailsUrl;
                delServicesCategoriesUrl = pDelServicesCategoriesUrl;
                editServicesCategoriesUrl = pEditServicesCategoriesUrl;
                getServiceUrl = pGetServiceUrl;

                //initEditForm();
                //BT.select2.defaultAr(mContentTypeSelect.val(pTypeId), contentTypeUrl);

                initServicesCategoryGrid();

            };

        return {
            init: init
        };
    })(),
    Service: (function () {
        var getServiceUrl,
            saveServiceUrl,
            editServiceUrl,
            delServiceUrl,
            getIternet,
            catSelect,
            serviceCatUrl,
            serviceRouteUrl,
            addFieldsUrl,
            saveServiceFormUrl,
            insertTempUrl,
            insertTempProfUrl,
            insertTempRejectUrl,
            //getTempUrl,
            idCat,
            table = '#ServiceTable',
            pager = '#ServiceTablePager',

            gridOpts = function () {
                return {
                    GroupBy: [
                        //{ val: 'ServiceSeq', txt: 'الكود' },
                        { val: 'NAME_CAT', txt: 'التصنيف' },
                        { val: 'E_SERVICE_NAME', txt: 'الاسم بالانجليزي' },
                        { val: 'A_SERVICE_NAME', txt: 'الاسم بالعربي' },
                        { val: 'ISACTIVE', txt: 'فعال؟' },
                        { val: 'RESPONSE_DAYS', txt: 'عدد ايام الاستجابة' },
                        { val: 'FEE', txt: 'الرسوم' },
                        { val: 'NAMECURN', txt: 'العملة' },

                    ],

                    //EditForms: {
                    //    search: { doShow: false },
                    //    view: { doShow: false }
                    //},

                    Properties: {
                        caption: "الخدمات",
                        sortname: 'A_SERVICE_NAME',
                        sortorder: "asc",
                        url: getServiceUrl,
                        //editurl: saveServiceUrl,
                        postData: {
                            catId: catSelect.val()

                        },
                        //BT.isNullOrEmpty(depSelect.val()) ? null : 
                        colNames: [
                            'الكود', 'التصنيف', 'التصنيف', 'الاسم بالانجليزي', 'الاسم بالعربي', 'فعال؟', 'عدد ايام الاستجابة', 'الرسوم',
                            'العملة', 'اسم العملة', 'الوصف بالانجليزي', 'الوصف بالعربي', 'OSS', 'الايقونة', 'الايقونة','متطلبات الخدمة'
                        ],
                        colModel: [
                            {
                                name: 'SERVICE_SEQ',
                                index: 'SERVICE_SEQ',
                                key: true,
                                editable: false,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                            {
                                name: 'CAT_ID',
                                index: 'CAT_ID',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                editoptions: {
                                    //size: 50,
                                    dataInit: function (el) {
                                        if (BT.isNullOrEmpty(catSelect.val()))
                                            BT.select2.defaultAr($(el).width(160), serviceCatUrl);
                                        else {
                                            BT.select2.defaultAr(
                                                $(el).width(160).val(catSelect.val()), serviceCatUrl);
                                        }
                                    }
                                    //maxlength: 100
                                }
                            },
                            {
                                name: 'NAME_CAT',
                                index: 'NAME_CAT',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'E_SERVICE_NAME',
                                index: 'E_SERVICE_NAME',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'A_SERVICE_NAME',
                                index: 'A_SERVICE_NAME',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'ISACTIVE',
                                index: 'ISACTIVE',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true
                            },
                            {
                                name: 'RESPONSE_DAYS',
                                index: 'RESPONSE_DAYS',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                            {
                                name: 'FEE',
                                index: 'FEE',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                            {
                                name: 'FEE_CURN',
                                index: 'FEE_CURN',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                    {
                                        name: 'NAMECURN',
                                        index: 'NAMECURN',
                                        width: 150,
                                        editable: false,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                            {
                                name: 'E_SERVICE_DESCRIPTION',
                                index: 'E_SERVICE_DESCRIPTION',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },

                            {
                                name: 'A_SERVICE_DESCRIPTION',
                                index: 'A_SERVICE_DESCRIPTION',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'ISOSSAVAILABLE',
                                index: 'ISOSSAVAILABLE',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true
                            },
                            {
                                name: 'Icon',
                                index: 'Icon',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true
                            },
                            {
                                name: 'STRINGICON',
                                index: 'STRINGICON',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                formatter: function (cellvalue, options, rowObject) {
                                    return '<img alt="icon" src="data:image/png;base64,' + rowObject.STRINGICON + '" style="width:70px;height:70px"/>';
                                    //return "<img src='http://myserver/path/i.jpg' alt='my image' />";
                                },
                                editoptions: {
                                    //size: 50,
                                    maxlength: 100
                                },
                                editrules: {
                                    required: true
                                },
                                //formoptions: {
                                //    rowpos: 10
                                //}
                            },
                              {
                                  name: 'REQUIRED_SERVICE',
                                  index: 'REQUIRED_SERVICE',
                                  width: 150,
                                  editable: false,
                                  sortable: true,
                                  viewable: true,
                                  hidedlg: false,
                                  hidden: true,
                                  fixed: true,
                                  searchoptions: { sopt: ['cn', 'eq'] }
                              }
                            
                        ],

                        editData: BT.isNullOrEmpty(catSelect.val()) ? null : { catId: catSelect.val() },

                        onSelectRow: function (rowId) {
                            //$("#arabicServiceFormBtn").hide();
                            //$("#englishServiceFormBtn").hide();
                            //var sRow = BT.Grid.getSelectedRow(table, this);
                            //if (sRow == null) return;
                            //var lnk = getTempUrl;
                            //lnk = lnk.replace("__id__", sRow.ServiceSeq);
                            //$.ajax({
                            //    type: "GET",
                            //    contentType: "application/json; charset=utf-8",
                            //    url: lnk,
                            //    success: function(data) {
                            //        if (data.arabic != null) {
                            //            BT.Grid.addButton(table, {
                            //                title: 'إصدار كتاب عربي',
                            //                buttonicon: 'fa fa-plus-circle purple',
                            //                id: 'arabicServiceFormBtn',
                            //                onClickButton: function () {

                            //                }
                            //            });
                            //            $("#arabicServiceFormBtn").show();

                            //        }
                            //        if (data.english != null) {
                            //            BT.Grid.addButton(table, {
                            //                title: 'إصدار كتاب انجليزي',
                            //                buttonicon: 'fa fa-plus-circle purple',
                            //                id: 'englishServiceFormBtn',
                            //                onClickButton: function () {

                            //                }
                            //            });
                            //            $("#englishServiceFormBtn").show();
                            //        }
                            //    }
                            //});
                        }
                    }
                };
            },

            initSrviceGrid = function () {
                catSelect.off('change').on('change', function () {
                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);
                    BT.Grid.addButton(table, {
                        title: 'تقديم طلب',
                        buttonicon: 'fa fa-align-justify',
                        id: 'goToServiceFormBtn' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = saveServiceFormUrl;
                            lnk = lnk.replace("__id__", sRow.SERVICE_SEQ);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("_type_", sRow.A_SERVICE_NAME);
                            if ($('#isNewTab').is(':checked')) {
                                window.open(lnk, '_blank');
                            } else {
                                window.location.href = lnk;
                            }
                        }
                    });
                    BT.Grid.addButton(table, {
                        title: 'الحقول',
                        buttonicon: 'fa fa-align-justify',
                        id: 'goToFieldsInputsRouteBtn' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = addFieldsUrl;
                            lnk = lnk.replace("__id__", sRow.SERVICE_SEQ);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("_type_", sRow.A_SERVICE_NAME);
                            if ($('#isNewTab').is(':checked')) {
                                window.open(lnk, '_blank');
                            } else {
                                window.location.href = lnk;
                            }
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'مسار الخدمة',
                        buttonicon: 'fa fa-align-justify',
                        id: 'goToServiceRouteBtn' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = serviceRouteUrl;
                            lnk = lnk.replace("__id__", sRow.SERVICE_SEQ);
                            lnk = lnk.replace("&amp;", "&");
                            lnk = lnk.replace("_type_", sRow.A_SERVICE_NAME);
                            if ($('#isNewTab').is(':checked')) {
                                window.open(lnk, '_blank');
                            } else {
                                window.location.href = lnk;
                            }
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'مسار الانترنت',
                        buttonicon: 'fa fa-align-justify',
                        id: 'goToInternetBtn' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = getIternet;
                            lnk = lnk.replace("__id__", sRow.SERVICE_SEQ);
                            if ($('#isNewTab').is(':checked')) {
                                window.open(lnk, '_blank');
                            } else {
                                window.location.href = lnk;
                            }
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'حذف',
                        buttonicon: 'fa fa-trash-o red',
                        id: 'delContentItem' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (BT.isNullOrEmpty(sRow)) return;

                            BT.Dialog.confirm({
                                id: 'confirmDel',
                                message: 'سيتم حذف التسجيل المختار',
                                post: {
                                    url: delServiceUrl,
                                    data: { id: sRow.SERVICE_SEQ },
                                    onSuccessFn: function (dlg) {
                                        $(table).trigger('reloadGrid');
                                    }
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'تعديل',
                        buttonicon: 'fa fa-pencil blue',
                        id: 'editContentItem' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (BT.isNullOrEmpty(sRow)) return;

                            // showEditForm({ isNew: false, id: sRow.ItemSeq });
                            var lnk = editServiceUrl;
                            lnk = lnk.replace("__id__", sRow.SERVICE_SEQ);
                            window.location.href = lnk;

                        }
                    });
                    BT.Grid.addButton(table, {
                        title: 'اضافة',
                        buttonicon: 'fa fa-plus-circle purple',
                        id: 'addService' + BT.getNoHash(table),
                        onClickButton: function () {
                            //showEditForm({ isNew: true });
                            //var sRow = BT.Grid.getSelectedRow(table, this);
                            //if (sRow == null) return;

                            var lnk = saveServiceUrl;
                            lnk = lnk.replace("__id__", catSelect.val());
                            var select = catSelect.val();
                            if (select == '') {
                                BT.showErrorNotice("الرجاء اختيار التصنيف ");
                            } else {
                                window.location.href = lnk;

                            }
                            //if ($('#isNewTab').is(':checked')) {
                            //    window.open(lnk, '_blank');
                            //} else {

                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'نص كتاب للمواطن',
                        buttonicon: 'fa fa-align-justify',
                        id: 'addServiceTemp' + BT.getNoHash(table),
                        onClickButton: function () {
                            //showEditForm({ isNew: true });
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = insertTempUrl;
                            lnk = lnk.replace("__id__", sRow.SERVICE_SEQ);
                            window.location.href = lnk;

                        }
                    });

                    
                    BT.Grid.addButton(table, {
                        title: 'نص كتاب الرفض للمواطن',
                        buttonicon: 'fa fa-align-justify',
                        id: 'addServiceTempReject' ,
                        onClickButton: function () {
                            //showEditForm({ isNew: true });
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = insertTempRejectUrl;
                            lnk = lnk.replace("__id__", sRow.SERVICE_SEQ);
                            window.location.href = lnk;

                        }
                    });

                    //BT.Grid.addButton(table, {
                    //    title: 'نص كتاب للمهنة',
                    //    buttonicon: 'fa fa-align-justify',
                    //    id: 'addServiceTempProf' + BT.getNoHash(table),
                    //    onClickButton: function () {
                    //        //showEditForm({ isNew: true });
                    //        var sRow = BT.Grid.getSelectedRow(table, this);
                    //        if (sRow == null) return;

                    //        var lnk = insertTempProfUrl;
                    //        lnk = lnk.replace("__id__", sRow.SERVICE_SEQ);
                    //        lnk = lnk.replace("&amp;", "&");
                    //        lnk = lnk.replace("_type_", sRow.A_SERVICE_NAME);
                    //        ////if ($('#isNewTab').is(':checked')) {
                    //        ////    window.open(lnk, '_blank');
                    //        ////} else {
                    //        window.location.href = lnk;

                    //    }
                    //});
                }).trigger('change');
            },

            init = function (pGetServiceUrl,
                pSaveServiceUrl,
                pEditServiceUrl,
                pDelServiceUrl,
                pGetIternet,
                pServiceCatUrl,
                pServiceRouteUrl,
                pAddFieldsUrl,
                pSaveServiceFormUrl,
                pId,
                pInsertTempUrl,
                pInsertTempProfUrl,
                pInsertTempRejectUrl
               ) {
                if (
                    BT.isNullOrEmpty(pGetServiceUrl)
                        || BT.isNullOrEmpty(pSaveServiceUrl)
                        || BT.isNullOrEmpty(pEditServiceUrl)
                        || BT.isNullOrEmpty(pDelServiceUrl)
                        || BT.isNullOrEmpty(pGetIternet)
                        || BT.isNullOrEmpty(pServiceCatUrl)
                        || BT.isNullOrEmpty(pServiceRouteUrl)
                        || BT.isNullOrEmpty(pAddFieldsUrl)
                        || BT.isNullOrEmpty(pSaveServiceFormUrl)
                        || BT.isNullOrEmpty(pInsertTempUrl)
                        || BT.isNullOrEmpty(pInsertTempProfUrl)
                        || BT.isNullOrEmpty(pInsertTempRejectUrl)
                ) {
                    BT.showErrorNotice('Em.service.init: missing params');
                    return;
                }

                getServiceUrl = pGetServiceUrl;
                saveServiceUrl = pSaveServiceUrl;
                editServiceUrl = pEditServiceUrl;
                delServiceUrl = pDelServiceUrl;
                getIternet = pGetIternet;
                serviceCatUrl = pServiceCatUrl;
                serviceRouteUrl = pServiceRouteUrl;
                addFieldsUrl = pAddFieldsUrl;
                saveServiceFormUrl = pSaveServiceFormUrl;
                catSelect = $("#catSelect");
                idCat = pId;
                insertTempUrl = pInsertTempUrl;
                insertTempProfUrl = pInsertTempProfUrl;
                insertTempRejectUrl = pInsertTempRejectUrl;
                BT.select2.defaultAr(catSelect.val(idCat), serviceCatUrl);

                initSrviceGrid();
            };

        return {
            init: init
        };
    })(),
    ServiceFields: (function () {
        var getServiceFieldsUrl,
            saveServiceFieldsUrl,
            getInputFields,
            id,
            isRamallah,
            table = '#ServiceTable',
            pager = '#ServiceFieldTablePager',
            gridOpts = function () {
                return {
                    GroupBy: [
                        { val: 'SF_SEQ', txt: 'الكود' },
                        //{ val: 'FieldRef', txt: ' كود الحقل' },
                        { val: 'FieldName', txt: 'اسم الحقل' },
                        { val: 'FieldArabicField', txt: ' اسم الحقل بالعربي ' },
                        { val: 'REQUIRED', txt: ' حقل ضروري' },
                        //{ val: 'Isoffical', txt: 'لموظف البلدية' }
                    ],

                    //EditForms: {
                    //    search: { doShow: false },
                    //    view: { doShow: false }
                    //},

                    Properties: {
                        caption: "حقول الادخال",
                        sortname: 'FieldArabicField',
                        sortorder: "asc",
                        url: getServiceFieldsUrl,
                        editurl: saveServiceFieldsUrl,

                        postData: { idService: id },
                        colNames: [
                            'الكود', 'اسم الحقل', 'اسم الحقل', 'اسم الحقل بالعربي', 'حقل ضروري؟', 'ترتيب'
                        ],
                        colModel: [
                            {
                                name: 'SF_SEQ',
                                index: 'SF_SEQ',
                                key: true,
                                editable: false,
                                viewable: false,
                                hidedlg: true,
                                hidden: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                            {
                                name: 'FIELD_REF',
                                index: 'FIELD_REF',
                                width: 150,
                                sortable: true,
                                editable: true,
                                viewable: false,
                                hidedlg: false,
                                hidden: false,
                                //edittype: 'select',
                                //formatter: 'select',
                                editoptions: {
                                    dataInit: function (el) {

                                        BT.select2.defaultAr(
                                            $(el).width(160), getInputFields, id);

                                    }
                                },
                                searchoptions: { sopt: ['cn', 'eq'] },
                                editrules: {
                                    edithidden: false,
                                    required: true
                                },
                                formoptions: {
                                    rowpos: 1
                                }
                            },
                            {
                                name: 'FieldName',
                                index: 'FieldName',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'FieldArabicField',
                                index: 'FieldArabicField',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'REQUIRED',
                                index: 'REQUIRED',
                                width: 150,
                                editable: true,
                                formatter: "checkbox",
                                edittype: "checkbox",
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    value: "Y:N",
                                    maxlength: 1
                                },
                                //editrules: {
                                //    required: true
                                //},
                                formoptions: {
                                    rowpos: 2
                                }
                            },
                         
                                  {
                                      name: 'FIELD_ORDER',
                                      index: 'FIELD_ORDER',
                                      width: 150,
                                      editable: true,
                                      //formatter: "number",
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      editrules: {
                                          required: true
                                      },
                                      formoptions: {
                                          rowpos: 3
                                      }
                                  },
                        ],
                        editData: {
                            idService: id
                        },
                        onSelectRow: function (rowId) {
                        }
                    }
                };
            },
                        gridOptsNotRamallah = function () {
                            return {
                                GroupBy: [
                                    { val: 'SF_SEQ', txt: 'الكود' },
                                    //{ val: 'FieldRef', txt: ' كود الحقل' },
                                    { val: 'FieldName', txt: 'اسم الحقل' },
                                    { val: 'FieldArabicField', txt: ' اسم الحقل بالعربي ' },
                                    { val: 'REQUIRED', txt: ' حقل ضروري' },
                                    //{ val: 'Isoffical', txt: 'لموظف البلدية' }
                                ],

                                //EditForms: {
                                //    search: { doShow: false },
                                //    view: { doShow: false }
                                //},

                                Properties: {
                                    caption: "حقول الادخال",
                                    sortname: 'FieldArabicField',
                                    sortorder: "asc",
                                    url: getServiceFieldsUrl,
                                    editurl: saveServiceFieldsUrl,

                                    postData: { idService: id },
                                    colNames: [
                                        'الكود', 'اسم الحقل', 'اسم الحقل', 'اسم الحقل بالعربي', 'حقل ضروري؟', 'ترتيب', 'حقل بلدية'
                                    ],
                                    colModel: [
                                        {
                                            name: 'SF_SEQ',
                                            index: 'SF_SEQ',
                                            key: true,
                                            editable: false,
                                            viewable: false,
                                            hidedlg: true,
                                            hidden: false,
                                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                        },
                                        {
                                            name: 'FIELD_REF',
                                            index: 'FIELD_REF',
                                            width: 150,
                                            sortable: true,
                                            editable: true,
                                            viewable: false,
                                            hidedlg: false,
                                            hidden: false,
                                            //edittype: 'select',
                                            //formatter: 'select',
                                            editoptions: {
                                                dataInit: function (el) {

                                                    BT.select2.defaultAr(
                                                        $(el).width(160), getInputFields, id);

                                                }
                                            },
                                            searchoptions: { sopt: ['cn', 'eq'] },
                                            editrules: {
                                                edithidden: false,
                                                required: true
                                            },
                                            formoptions: {
                                                rowpos: 1
                                            }
                                        },
                                        {
                                            name: 'FieldName',
                                            index: 'FieldName',
                                            width: 150,
                                            editable: false,
                                            sortable: true,
                                            viewable: true,
                                            hidedlg: false,
                                            hidden: false,
                                            fixed: true,
                                            searchoptions: { sopt: ['cn', 'eq'] }
                                        },
                                        {
                                            name: 'FieldArabicField',
                                            index: 'FieldArabicField',
                                            width: 150,
                                            editable: false,
                                            sortable: true,
                                            viewable: true,
                                            hidedlg: false,
                                            hidden: false,
                                            fixed: true,
                                            searchoptions: { sopt: ['cn', 'eq'] }
                                        },
                                        {
                                            name: 'REQUIRED',
                                            index: 'REQUIRED',
                                            width: 150,
                                            editable: true,
                                            formatter: "checkbox",
                                            edittype: "checkbox",
                                            sortable: true,
                                            viewable: true,
                                            hidedlg: false,
                                            hidden: false,
                                            fixed: true,
                                            editoptions: {
                                                value: "Y:N",
                                                maxlength: 1
                                            },
                                            //editrules: {
                                            //    required: true
                                            //},
                                            formoptions: {
                                                rowpos: 2
                                            }
                                        },
                                      
                                              {
                                                  name: 'FIELD_ORDER',
                                                  index: 'FIELD_ORDER',
                                                  width: 150,
                                                  editable: true,
                                                  //formatter: "number",
                                                  sortable: true,
                                                  viewable: true,
                                                  hidedlg: false,
                                                  hidden: false,
                                                  fixed: true,
                                                  editrules: {
                                                      required: true
                                                  },
                                                  formoptions: {
                                                      rowpos: 3
                                                  }
                                              },
                                                {
                                                    name: 'ISOFFICIAL',
                                                    index: 'ISOFFICIAL',
                                                    width: 150,
                                                    editable: true,
                                                    formatter: "checkbox",
                                                    edittype: "checkbox",
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    editoptions: {
                                                        value: "Y:N",
                                                        maxlength: 1
                                                    },
                                                    //editrules: {
                                                    //    required: true
                                                    //},
                                                    formoptions: {
                                                        rowpos: 4
                                                    }
                                                },
                                    ],
                                    editData: {
                                        idService: id
                                    },
                                    onSelectRow: function (rowId) {
                                    }
                                }
                            };
                        },

            initInputFieldsGrid = function () {
                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: isRamallah == "Y" ? gridOpts().GroupBy : gridOptsNotRamallah().GroupBy,
                    options: isRamallah == "Y" ? gridOpts().Properties : gridOptsNotRamallah().Properties,
                });

            },

            init = function (pGetServiceFieldsUrl, pSaveServiceFieldsUrl, pGetInputFields, pId, pIsRamallah) {
                if (
                    BT.isNullOrEmpty(pGetServiceFieldsUrl)
                        || BT.isNullOrEmpty(pSaveServiceFieldsUrl)
                        || BT.isNullOrEmpty(pGetInputFields)
                ) {
                    BT.showErrorNotice('Em.inputFields.init: missing params');
                    return;
                }

                getServiceFieldsUrl = pGetServiceFieldsUrl;
                saveServiceFieldsUrl = pSaveServiceFieldsUrl;
                getInputFields = pGetInputFields;
                id = pId;
                isRamallah = pIsRamallah
                initInputFieldsGrid();
            };

        return {
            init: init
        };
    })(),
    ServiceRoute: (function () {

        var getServiceRouteUrl,
            saveServiceRouteUrl,
            editServiceRouteUrl,
            deleteServiceRouteUrl,
            staffRoutUrl,
            sectionUrl,
            staffUrl,
            nameSection,
            nameStaff,
            routeAction,
            id,
            idAction,
            type,
            groupStaffUrl,
            multiGroupStaffUrl,
            addMultiGroupStaffUrl,
            editMultiGroupStaffUrl,
            staffGroupUrl,
            deleteGroupUrl,
            deactiveRouteUrl,
            deactiveNodeForwardToNextUrl,
            hasAcceptPermissionUrl,
            activeNodeUrl,
            table = '#ServiceRouteTable',
            pager = '#ServiceRouteTablePager',
            fieldsRoute,
            gridOpts = function () {
                return {
                    GroupBy: [
                        { val: 'ID', txt: 'الكود' },
                        { val: 'NameStaff', txt: 'الموظف الاول' },
   
                    ],

                    Properties: {
                        caption: "مسار الخدمة",
                        sortname: 'ROUTE_ORDER',
                        sortorder: "asc",
                        url: getServiceRouteUrl,
                        //editurl: saveServiceRouteUrl,
                        postData: { idService: id }, //BT.isNullOrEmpty(depSelect.val()) ? null : 
                        colNames: ['الترتيب', 'الكود', 'الخدمات',  'الموظف الاول', 'الموظف الاول', 'الوقت اللازم:      الايام',
                            'الساعات', 'الدقائق','nodeType','غير فعال'],
                        colModel: [
                                     {
                                         name: 'ROUTE_ORDER',
                                         index: 'ROUTE_ORDER',
                                         width: 150,
                                         editable: true,
                                         sortable: true,
                                         viewable: true,
                                         hidedlg: false,
                                         hidden: false,
                                         fixed: true,
                                         editoptions: {
                                             //size: 50,
                                             maxlength: 100
                                         },
                                         editrules: {
                                             required: true

                                         },
                                         formoptions: {
                                             rowpos: 7
                                         },
                                         searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                     },
                            {
                                name: 'ID',
                                index: 'ID',
                                key: true,
                                editable: false,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },

                            {
                                name: 'SERVICE_REF',
                                index: 'SERVICE_REF',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                            },
                                  //{
                                  //                name: 'IsValid',
                                  //                index: 'IsValid',
                                  //                width: 150,
                                  //                editable: true,
                                  //                formatter: "checkbox",
                                  //                edittype: "checkbox",
                                  //                sortable: true,
                                  //                viewable: true,
                                  //                hidedlg: false,
                                  //                hidden: false,
                                  //                fixed: true,
                                  //                editoptions: {
                                  //                    value: "Y:N",
                                  //                    maxlength: 1
                                  //                },
                                  //                //editrules: {
                                  //                //    required: true
                                  //                //},
                                  //                formoptions: {
                                  //                    rowpos: 7
                                  //                }
                                  //            },
                            
                            {
                                name: 'STAFF_REF',
                                index: 'STAFF_REF',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                editoptions: {
                                    dataInit: function (el) {

                                        BT.select2.defaultAr($(el).width(160), staffUrl);

                                    }
                                },
                                editrules: {
                                    required: true,
                                    edithidden: true
                                },
                                formoptions: {
                                    rowpos: 3
                                }
                            },
                            {
                                name: 'NameStaff',
                                index: 'NameStaff',
                                //width: 150,
                                //editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                         
                            {
                                name: 'DAYS',
                                index: 'DAYS',
                                //width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {

                                },
                                editrules: {
                                    // required: true

                                },
                                formoptions: {
                                    rowpos: 4,
                                    colpos: 1
                                },
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                            {
                                name: 'HOURS',
                                index: 'HOURS',
                                //width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {

                                },
                                editrules: {
                                    // required: true

                                },
                                formoptions: {
                                    rowpos: 5,
                                    colpos: 1

                                },
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                            {
                                name: 'MINUTES',
                                index: 'MINUTES',
                                //width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {

                                },
                                editrules: {
                                    // required: true

                                },
                                formoptions: {
                                    rowpos: 6,
                                    colpos: 1

                                },
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                       
                            {
                                name: 'NODE_TYPE',
                                index: 'NODE_TYPE',
                             
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                      
                              {
                                  name: 'DeactiveRoute',
                                  index: 'DeactiveRoute',

                                  sortable: true,
                                  viewable: true,
                                  hidedlg: false,
                                  hidden: false,
                                  fixed: true,
                                  searchoptions: { sopt: ['cn', 'eq'] }
                              },
                       

                        ],

                        editData: { idService: id },

                        onSelectRow: function (rowId) {
                            $("#getNotesWorkFlowServiceServiceRouteTable").hide();
                            $("#deactiveItemServiceRouteTable").hide();
                            $("#activeItemServiceRouteTable").hide();
                           
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            if (sRow.NODE_TYPE == "G" ) {
                                $("#getNotesWorkFlowServiceServiceRouteTable").show();

                                BT.Grid.addButton(table, {
                                    title: 'مجموعة الموظفين',
                                    buttonicon: 'fa fa-align-justify',
                                    id: 'getNotesWorkFlowService' + BT.getNoHash(table),
                                    onClickButton: function() {
                                        var sRow = BT.Grid.getSelectedRow(table, this);
                                        if (sRow == null) return;
                                        BT.Dialog.Create('#modalGroupStaff', {
                                            title: 'مجموعة الموظفين',
                                            width: 'max',
                                            onOpenFn: function() {
                                                Em.GroupStaff.init(
                                                    groupStaffUrl, sRow.ID
                                                );
                                            }
                                        });
                                    }
                                });
                            } else if (sRow.NODE_TYPE == "M") {
                                $("#getMultiGroupServiceRouteTable").show();

                                BT.Grid.addButton(table, {
                                    title: 'عدة مجموعات',
                                    buttonicon: 'fa fa-align-justify',
                                    id: 'getMultiGroup' + BT.getNoHash(table),
                                    onClickButton: function () {
                                        var sRow = BT.Grid.getSelectedRow(table, this);
                                        if (sRow == null) return;
                                        BT.Dialog.Create('#modalMultiGroupStaff', {
                                            title: 'عدة مجموعات',
                                            width: 'max',
                                            onOpenFn: function () {
                                                Em.MultiGroupStaff.init(
                                                    multiGroupStaffUrl, addMultiGroupStaffUrl, editMultiGroupStaffUrl, staffGroupUrl,deleteGroupUrl, sRow.ID
                                                );
                                            }
                                        });
                                    }
                                });
                            } else {
                                $("#getNotesWorkFlowServiceServiceRouteTable").hide();
                            }
                            if (sRow.DeactiveRoute == "نعم") {
                                $("#deactiveItemServiceRouteTable").hide();
                                $("#activeItemServiceRouteTable").show();
                            } else {
                                $("#deactiveItemServiceRouteTable").show();
                                $("#activeItemServiceRouteTable").hide();
                            }
                        }
                    }
                };
            },

            initServiceRouteGrid = function () {
                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().GroupBy,
                    options: gridOpts().Properties,
                });

                BT.Grid.addButton(table, {
                    title: 'إضافة ',
                    buttonicon: 'fa fa-plus-circle blue',
                    id: 'getAttachServiceD' + BT.getNoHash(table),
                    onClickButton: function () {
                        //var sRow = BT.Grid.getSelectedRow(table, this);
                        //if (sRow == null) return;
                        var lnk1 = saveServiceRouteUrl;
                        BT.Dialog.Create('#modalCreateRoute', {
                            title: 'إضافة ',
                            onOpenFn: function () {
                                $("#ServiceId").val(id);
                            },
                            addButtons: [
                                {
                                    //id: 'btnUnEndProGrp',
                                    id: 'btnSaveC',
                                    text: 'حفظ',
                                    'class': 'btn btn-sm btn-success',
                                    click: function () {
                                        
                                        $('#modalCreateRoute' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                        $('#modalCreateRoute' + '~.ui-dialog-buttonpane #btnSaveC:first').prop('disabled', true);
                                        $.ajax({
                                            type: "POST",
                                            url: lnk1,
                                            data: {
                                                SERVICE_REF: $("#ServiceId").val(),
                                                NODE_TYPE: $("#Node").val(),
                                                STAFF_REF: $("#Staff").val(),
                                                DAYS: $("#Day").val(),
                                                HOURS: $("#Hour").val(),
                                                MINUTES: $("#Minutes").val(),
                                                ROUTE_ORDER: $("#Order").val(),
                                                RESPONSE_TYPE: $("#RESPONSE_TYPE").val(),
                                                group: $("#group").val(),
                                                SingleGroupName: $("#SingleGroupName").val()

                                              //  fields: $("#fields").val(),
                                            },
                                            success: function(data) {
                                                if (data.done) {
                                                    BT.showSuccessNotice();
                                                    BT.Grid.reload(table);
                                                    BT.Dialog.hide('#modalCreateRoute');
                                                } else {
                                                    BT.showErrorNotice(data.msg);
                                                    $('#modalCreateRoute' + '~.ui-dialog-buttonpane #btnSaveC:first').prop('disabled', false);
                                                    $(".fa-spinner").css("display", "none");
                                                }
                                            }
                                        });

                                    }
                                }
                            ]
                        });
                    }
                });


                BT.Grid.addButton(table, {
                    title: 'تعديل ',
                    buttonicon: 'fa fa-pencil blue',
                    id: 'edit' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var lnk2 = editServiceRouteUrl;
                        lnk2 = lnk2.replace("__id__", sRow.ID);

                        BT.Dialog.Create('#modalEditRoute', {
                            title: 'تعديل ',
                            width:"max",
                            onOpenFn: function () {

                                $("#ServiceId").val(id);
                                $("#Id").val(sRow.ID);


                                $.ajax({
                                    type: "GET",
                                    url: lnk2,
                                    success: function(data) {
                                        $("#modalEditRoute").html(data);

                                        BT.Ajax.GET(staffRoutUrl,
                      { id: sRow.ID },
                      function (d) {
                          var mTo = [];

                          $.each(d.data, function (i, v) {
                              mTo.push(v.StaffId);
                          });

                          $('#groupE').data('kendoMultiSelect').value(mTo);
                      },
                      false,
                      function () {
                      });

                                        BT.Ajax.GET(fieldsRoute,
 { id: sRow.ID },
 function (d) {
     var mTo = [];

     $.each(d.data, function (i, v) {
         mTo.push(v.Id);
     });

     $('#fieldsE').data('kendoMultiSelect').value(mTo);
 },
 false,
 function () {
 });
                                    }
                                });


                            },
                            addButtons: [
                                {
                                    //id: 'btnUnEndProGrp',
                                    id: 'btnSave',
                                    text: 'حفظ',
                                    'class': 'btn btn-sm btn-success',
                                    click: function () {

                                        $('#modalEditRoute' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                        $('#modalEditRoute' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);
                                        $.ajax({
                                            type: "POST",
                                            url: lnk2,
                                            data: {
                                                SERVICE_REF: $("#ServiceIdE").val(),
                                                NODE_TYPE: $("#NodeE").val(),
                                                STAFF_REF: $("#StaffE").val(),
                                                DAYS: $("#DayE").val(),
                                                HOURS: $("#HourE").val(),
                                                MINUTES: $("#MinutesE").val(),
                                                ROUTE_ORDER: $("#OrderE").val(),
                                                RESPONSE_TYPE: $("#RESPONSE_TYPEE").val(),
                                                group: $("#groupE").val(),
                                                ID: $("#IdE").val(),
                                                fields: $("#fieldsE").val(),
                                                SingleGroupName: $("#SingleGroupNameE").val()
                                            },
                                            success: function (data) {
                                                if (data.done) {
                                                    BT.showSuccessNotice();
                                                    BT.Grid.reload(table);
                                                    BT.Dialog.hide('#modalEditRoute');
                                                } else {
                                                    BT.showErrorNotice(data.msg);
                                                    $('#modalEditRoute' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);
                                                    $(".fa-spinner").css("display", "none");
                                                }
                                            }
                                        });

                                    }
                                }
                            ]
                        });
                    }
                });

                BT.Grid.addButton(table, {
                    title: 'حذف',
                    buttonicon: 'fa fa-trash-o red',
                    id: 'delContentItem' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;

                        BT.Dialog.confirm({
                            id: 'confirmDel',
                            message: 'سيتم حذف التسجيل المختار',
                            post: {
                                url: deleteServiceRouteUrl,
                                data: { id: sRow.ID },
                                onSuccessFn: function (data) {
                                    //if (data.done) {
                                        //BT.Grid.reload(table);
                                        //$(".fa-refresh").click();
                                        $(table).trigger('reloadGrid');
                                   // }
                                }
                            }
                        });
                    }
                });
                BT.Grid.addButton(table, {
                    title: 'تعطيل',
                    buttonicon: 'fa fa-align-justify red',
                    id: 'deactiveItem' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;
                        $.ajax({
                            //type: "POST",
                            url: hasAcceptPermissionUrl,
                            data: {
                                id: sRow.ID
                            },
                            success: function(data) {
                                if (data == "True") {
                                    BT.Dialog.Create('#modalDeactive', {
                                        title: 'تعطيل',
                                        width: "max",
                                        onOpenFn: function() {
                                            $("#modalDeactive").html("");
                                            $.ajax({
                                                type: "GET",
                                                url: deactiveRouteUrl,
                                                data: { id: sRow.ID },
                                                success: function(data) {
                                                    $("#modalDeactive").html(data);
                                                }
                                            });

                                        },
                                        addButtons: [
                                            {
                                                //id: 'btnUnEndProGrp',
                                                id: 'btnSave',
                                                text: 'تأكيد',
                                                'class': 'btn btn-sm btn-success',
                                                click: function() {
                                                    $('#modalDeactive' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                    $('#modalDeactive' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);


                                                    $.ajax({
                                                        type: "POST",
                                                        url: deactiveNodeForwardToNextUrl,
                                                        data: {
                                                            id: sRow.ID
                                                        },
                                                        success: function(data) {
                                                            if (data.done) {
                                                                BT.showSuccessNotice();
                                                                BT.Grid.reload(table);
                                                                BT.Dialog.hide('#modalDeactive');
                                                            } else {
                                                                BT.showErrorNotice(data.msg);
                                                                $('#modalDeactive' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);
                                                                $(".fa-spinner").css("display", "none");
                                                            }
                                                        }
                                                    });
                                                }

                                            }
                                        ]
                                    });
                                } else {
                                    BT.showErrorNotice("لا يوجد مرحلة بعد هذه المرحلة لها صلاحية القبول!!!");

                                }
                            }


                        });
                    }
                });
                BT.Grid.addButton(table, {
                    title: 'تفعيل',
                    buttonicon: 'fa fa-align-justify green',
                    id: 'activeItem' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;

                        BT.Dialog.confirm({
                            id: 'confirmDel',
                            message: 'سيتم تفعيل هذه المرحلة',
                            post: {
                                url: activeNodeUrl,
                                data: { id: sRow.ID },
                                onSuccessFn: function (data) {
                              
                                    $(table).trigger('reloadGrid');
                                }
                            }
                        });
                    }
                });
                BT.Grid.addButton(table, {
                    title: 'الصلاحيات',
                    buttonicon: 'fa fa-plus-circle purple',
                    id: 'goToRouteAction' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);

                        if (sRow == null) return;
                        var lnk = routeAction;
                        lnk = lnk.replace("__id__", sRow.ID);
                        lnk = lnk.replace("&amp;", "&");
                        lnk = lnk.replace("__idSR__", sRow.SERVICE_REF);
                        lnk = lnk.replace("&amp;", "&");
                        lnk = lnk.replace("_type_", type);
                        if ($('#isNewTab').is(':checked')) {
                            window.open(lnk, '_blank');
                        } else {
                            window.location.href = lnk;
                        }
                    }
                });
                //}).trigger('change');
            },

            init = function (pGetServiceRouteUrl, pSaveServiceRouteUrl, pEditServiceRouteUrl, pDeleteServiceRouteUrl,
                pStaffRoutUrl, pStaffUrl, pRouteAction, pGroupStaffUrl, pFieldsRouteUrl, pMultiGroupStaffUrl,
            pAddMultiGroupStaffUrl, pEditMultiGroupStaffUrl, pStaffGroupUrl, pDeleteGroupUrl, pDeactiveRouteUrl,
            pDeactiveNodeForwardToNextUrl, pHasAcceptPermissionUrl, pActiveNodeUrl, pId, pType) {
                if (
                    BT.isNullOrEmpty(pGetServiceRouteUrl)
                        || BT.isNullOrEmpty(pSaveServiceRouteUrl)
                        || BT.isNullOrEmpty(pEditServiceRouteUrl)
                        || BT.isNullOrEmpty(pDeleteServiceRouteUrl)
                        || BT.isNullOrEmpty(pStaffRoutUrl)
                        || BT.isNullOrEmpty(pRouteAction)
                        || BT.isNullOrEmpty(pGroupStaffUrl)
                        || BT.isNullOrEmpty(pFieldsRouteUrl)
                        || BT.isNullOrEmpty(pMultiGroupStaffUrl)
                        || BT.isNullOrEmpty(pAddMultiGroupStaffUrl)
                        || BT.isNullOrEmpty(pEditMultiGroupStaffUrl)
                        || BT.isNullOrEmpty(pStaffGroupUrl)
                        || BT.isNullOrEmpty(pDeleteGroupUrl)
                        || BT.isNullOrEmpty(pDeactiveRouteUrl)
                        || BT.isNullOrEmpty(pDeactiveNodeForwardToNextUrl)
                        || BT.isNullOrEmpty(pHasAcceptPermissionUrl)
                        || BT.isNullOrEmpty(pActiveNodeUrl)
                ) {
                    BT.showErrorNotice('Em.serviceRoute.init: missing params');
                    return;
                }

                getServiceRouteUrl = pGetServiceRouteUrl;
                saveServiceRouteUrl = pSaveServiceRouteUrl;
                editServiceRouteUrl = pEditServiceRouteUrl;
                deleteServiceRouteUrl = pDeleteServiceRouteUrl;
                staffRoutUrl = pStaffRoutUrl;
                staffUrl = pStaffUrl;
                routeAction = pRouteAction;
                groupStaffUrl = pGroupStaffUrl;
                multiGroupStaffUrl = pMultiGroupStaffUrl;
                addMultiGroupStaffUrl = pAddMultiGroupStaffUrl;
                editMultiGroupStaffUrl = pEditMultiGroupStaffUrl;
                staffGroupUrl = pStaffGroupUrl;
                deleteGroupUrl = pDeleteGroupUrl;
                deactiveRouteUrl = pDeactiveRouteUrl;
                deactiveNodeForwardToNextUrl = pDeactiveNodeForwardToNextUrl;
                hasAcceptPermissionUrl = pHasAcceptPermissionUrl;
                activeNodeUrl = pActiveNodeUrl;

                id = pId;
                type = pType;
                nameStaff = $("#StaffRef");
                fieldsRoute = pFieldsRouteUrl;

                //BT.select2.defaultAr(nameSection, sectionUrl);
                //BT.select2.defaultAr(nameStaff, staffUrl);

                initServiceRouteGrid();
            };

        return {
            init: init
        };
    })(),
    Internet: (function () {
        var getIternetUrl,
            saveIternetUrl,
            depUrl,
            sectionUrl,
            id,

            table = '#IternetServicePathTable',
            pager = '#IternetServicePathTablePager',

            gridOpts = function () {
                return {
                    GroupBy: [
                        { val: 'ID', txt: 'الكود' },
                        { val: 'SERVICE_REF', txt: 'الخدمات' },
                        { val: 'DepName', txt: 'الدوائر' },
                        { val: 'SectionName', txt: 'الاقسام' },
                        { val: 'ITEM_ORDER', txt: 'الترتيب' }
                    ],

                    //EditForms: {
                    //    search: { doShow: false },
                    //    view: { doShow: false }
                    //},

                    Properties: {
                        caption: "مسار الانترنت",
                        sortname: 'ITEM_ORDER',
                        sortorder: "asc",
                        url: getIternetUrl,
                        editurl: saveIternetUrl,
                        postData: { idService: id }, //BT.isNullOrEmpty(depSelect.val()) ? null : 
                        colNames: ['الكود', 'الخدمات', 'الدوائر', 'الدوائر', 'الاقسام', 'الاقسام', 'الترتيب'],
                        colModel: [
                            {
                                name: 'ID',
                                index: 'ID',
                                key: true,
                                editable: false,
                                viewable: true,
                                hidedlg: true,
                                hidden: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                            {
                                name: 'SERVICE_REF',
                                index: 'SERVICE_REF',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                editoptions: {
                                    //size: 50,
                                    maxlength: 100
                                },
                                editrules: {
                                    // required: true

                                },
                                formoptions: {
                                    rowpos: 1
                                }
                            },
                              {
                                  name: 'DEPT_REF',
                                  index: 'DEPT_REF',
                                  width: 120,
                                  editable: true,
                                  sortable: true,
                                  viewable: false,
                                  hidedlg: false,
                                  hidden: true,
                                  fixed: true,
                                  editoptions: {
                                      //size: 50,
                                      dataInit: function (el) {
                                          BT.select2.defaultAr($(el).width(160), depUrl, $('#DEPT_REF').val());

                                          //BT.select2.defaultAr(
                                          //    $(el).width(160).val(depSelect.val()),
                                          //    departmentUrl);

                                          $(el).off('change').on('change', function () {
                                              BT.select2.defaultAr($('#SECTION_REF').width(160),
                                                  sectionUrl, $(el).val());
                                          });
                                          //$(el).width(160).val(depSelect.val()).prop('disabled', true), departmentUrl);
                                      }
                                      //maxlength: 100
                                  },
                                  editrules: {
                                      required: true,
                                      edithidden: true
                                  },
                                  formoptions: {
                                      rowpos: 2,
                                      elmprefix: "&nbsp;&nbsp;<span class='mystar' style='color:red'>*</span>&nbsp;",
                                  }
                              },
                        
                            {
                                name: 'DepName',
                                index: 'DepName',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                formoptions: {
                                    rowpos: 8
                                },
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                {
                                    name: 'SECTION_REF',
                                    index: 'SECTION_REF',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: false,
                                    hidedlg: false,
                                    hidden: true,
                                    fixed: true,
                                    editoptions: {
                                        //size: 50,
                                        dataInit: function (el) {
                                            BT.select2.defaultAr($(el).width(160), sectionUrl, $('#DEPT_REF').val());
                                            //$(el).width(160).val(depSelect.val()).prop('disabled', true), departmentUrl);
                                        }
                                        //maxlength: 100
                                    },
                                    editrules: {
                                        //required: true,
                                        edithidden: true
                                    },
                                    formoptions: {
                                        rowpos: 3,
                                        elmprefix: "&nbsp;&nbsp;<span class='mystar' style='color:red'>&nbsp;&nbsp;</span>&nbsp;",

                                    }
                                },
                            {
                                name: 'SectionName',
                                index: 'SectionName',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                formoptions: {
                                    rowpos: 9
                                },
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'ITEM_ORDER',
                                index: 'ITEM_ORDER',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                editoptions: {
                                    //size: 50,
                                    maxlength: 100
                                },
                                editrules: {
                                    required: true

                                },
                                formoptions: {
                                    rowpos: 4,
                                    elmprefix: "&nbsp;&nbsp;<span class='mystar' style='color:red'>*</span>&nbsp;",

                                },
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            }
                        ],

                        editData: { idService: id },

                        onSelectRow: function (rowId) {
                        }
                    }
                };
            },

            initSectionGrid = function () {
                // depSelect.off('change').on('change', function () {
                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().GroupBy,
                    options: gridOpts().Properties,
                });
                //}).trigger('change');
            },

            init = function (pGetIternetUrl, pSaveIternetUrl, pDepUrl,pSectionUrl, pId) {
                if (
                    BT.isNullOrEmpty(pGetIternetUrl)
                        || BT.isNullOrEmpty(pSaveIternetUrl)
                        || BT.isNullOrEmpty(pDepUrl)
                        || BT.isNullOrEmpty(pSectionUrl)
                ) {
                    BT.showErrorNotice('Em.Internet.init: missing params');
                    return;
                }

                getIternetUrl = pGetIternetUrl;
                saveIternetUrl = pSaveIternetUrl;
                depUrl = pDepUrl;
                sectionUrl = pSectionUrl;

                id = pId;
                //table = $('#DepartmentsTable');
                //pager = $('#DepartmentsTablePager');
                //depSelect = $('#depSelect');

                //BT.select2.defaultAr(sectionUrl);

                initSectionGrid();
            };

        return {
            init: init
        };
    })(),
    AllServicetUnderFlow: (function () {
      
        var getServicetUnderFlowUrl;
        var getServiceForm;
        var getPermission;
        var getPermissionUser;
        var forwardServiceUrl;
        var sendMessageUrl;
        var dismissUrl;
        var replayServiceUrl;
        var opinionServiceUrl;
        var pageUrl;
        var notesWorkFlowUrl;
        var msgUrl;
        var opinionForServiceUrl;
        var textMesgUrl;
        var id;
        var idService;
        var nameStaff;
        var getTempUrl;
        var attachFormUrl;
        var reportUrl;
        var endServiceUrl;
        var addFianlAttachUrl;
        var filesUrl;
        var attachurl;
        var changeStatusUrl;
        var printOpinion;
        var serviceRef = "#ServiceRef";
        var notes = "#notesStaff";
        var message = "#Message1";
        var textSub = "#textSub";
        var msgDismiss = "#msgDismiss";
        var msgReplay = "#msgReplay";
        var opinion = "#opinion11";
        var staff = "#emp";
        var msgEnd = "#MessageEnd";
        var staffRef = "#StaffRef";
        var attachForm = "#attachForm";
        var status = "#status";
        var table = '#AllServiceUnderFlowTable';
        var pager = '#AllServiceUnderFlowTablePager';
        var attachCitizenUrl;
        var downloadCitizenUrl;
        var addCitizenAttachUrl;
        var idForm;
        var engineeringTaxUrl;
        var getEngTaxUrl;
        var addEngTaxUrl;
        var editEngTaxUrl;
        var taxUrl;
        var rejectReportUrl;
        var creatSaderRejectUrl;
        var creatSaderAcceptUrl;
        var receivedDocUrl;
        var infoCitizenUrl;
        var stickerUrl;
        var opinionDownload;
        var staffGroup1Url;
        var typeTalab;
        var serchNF2;
        var isActionDoneJsonUrl;
        var opinionAttachUrl;
        var downloadAttachOpinionUrl;
        var UpdateFileNoLandUrl;
        var suspendServiceUrl;
        var previewLicenseUrl;
        var taxesUrl;
        var craftsAcceptUrl;
        var addRejectCraftsNoteUrl;
        var craftsRejectUrl;
        var createBusinessUrl;
        var hod;
        var hay;
        var land;
        var ramallah;
        var craftsServiceP;
        var craftsServiceC;
        var canInsertRejectNote;
        var gridOpts = function() {
            return {
                GroupBy: [
                    { val: 'Status', txt: 'الحالة' },
                    { val: 'FullNameCitizen', txt: ' اسم المواطن' },
                    { val: 'NameService', txt: ' اسم الخدمة' },
                    { val: 'NameStaff', txt: ' اسم الموظف' },
                ],


                Properties: {
                    caption: "الخدمات",
                    sortname: 'DATE_RECEIVED',
                    sortorder: "desc",
                    url: getServicetUnderFlowUrl,
                    postData: {
                        idStaff: id,
                        isOpinion: typeTalab.val(),
                        //hod1: $("#s2id_hod2").text().trim(), hay1: $("#s2id_hay2").text().trim(), land1: $("#s2id_land2").text().trim()
                        hod1: hod, hay1: hay, land1: land
                    },
                    colNames: [
                      'مقدمة من الانترنت', ' اسم المواطن', 'اسم مقدم الطلب', 'رقم هوية مقدم الطلب', 'اسم الخدمة', 'تاريخ التقديم', 'القطعة', 'الحي', 'الحوض', ' من الموظف', 'الحالة', 'الكود', 'رقم الطلب', 'تم الرد', 'حالة الطلب', 'تاريخ الاستلام', 'تاريخ القراءة',
                       ' اسم المواطن',  'كود الخدمة', ' كود الموظف',
                         "كود الحالة", "مرفقات إضافية ", 'route', '', '', '', '', 'رصيد المعاملة', 'رصيد المواطن الكلي', 'رصيد قطعة الارض'
                    ],
                    colModel: [
                        {
                            name: 'IS_INTERNET',
                            index: 'IS_INTERNET',
                            width: 80,
                            editable: true,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                            searchoptions: { sopt: ['cn', 'eq'] }
                        },
                          {
                              name: 'FullNameCitizen',
                              index: 'FullNameCitizen',
                              width: 150,
                              editable: false,
                              sortable: true,
                              viewable: true,
                              hidedlg: false,
                              hidden: false,
                              fixed: true,
                              // searchoptions: { sopt: ['cn', 'eq'] }
                          },
                       
                              {
                                  name: 'NameOfApplicant',
                                  index: 'NameOfApplicant',
                                  width: 150,
                                  editable: false,
                                  sortable: true,
                                  viewable: true,
                                  hidedlg: false,
                                  hidden:ramallah=="N"? false:true,
                                  fixed: true,
                                  // searchoptions: { sopt: ['cn', 'eq'] }
                              },
                                {
                                    name: 'IdnoOfApplicant',
                                    index: 'IdnoOfApplicant',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: ramallah == "N" ? false : true,
                                    fixed: true,
                                    // searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                   
                                      {
                                          name: 'NameService',
                                          index: 'NameService',
                                          width: 100,
                                          editable: false,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }
                                      },
                                {
                                    name: 'DATE_SUBMITED',
                                    index: 'DATE_SUBMITED',
                                    width: 100,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }

                                },
                               
                              
                                    {
                                        name: 'LandName',
                                        index: 'LandName',
                                        width: 100,
                                        editable: false,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                                      {
                                          name: 'HayName',
                                          index: 'HayName',
                                          width: 100,
                                          editable: false,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }
                                      },
                                        {
                                            name: 'HodName',
                                            index: 'HodName',
                                            width: 100,
                                            editable: false,
                                            sortable: true,
                                            viewable: true,
                                            hidedlg: false,
                                            hidden: false,
                                            fixed: true,
                                            searchoptions: { sopt: ['cn', 'eq'] }
                                        },
                            {
                                name: 'NameStaff',
                                index: 'NameStaff',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                // searchoptions: { sopt: ['cn', 'eq']}
                            },
                               
                        {
                            name: 'Status',
                            index: 'Status',
                            width: 100,
                            editable: false,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                            searchoptions: { sopt: ['cn', 'eq'] }
                        },
                        {
                            name: 'ID',
                            index: 'ID',
                            key: true,
                            editable: false,
                            viewable: false,
                            hidedlg: true,
                            hidden: true,
                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                        },
                        {
                            name: 'SERVICE_FORM_SEQ',
                            index: 'SERVICE_FORM_SEQ',
                            width: 80,
                            editable: false,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                        },
                            {
                                name: 'AllOpinion',
                                index: 'AllOpinion',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: false,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                            },
                               
                                    {
                                        name: 'StatusForm',
                                        index: 'StatusForm',
                                        width: 100,
                                        editable: false,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                     
                        {
                            name: 'DATE_RECEIVED',
                            index: 'DATE_RECEIVED',
                            width: 100,
                            editable: true,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                            sorttype: 'date',
                            formatter: 'date',
                            formatoptions: { newformat: 'd/m/Y' },
                            datefmt: 'd-M-Y',
                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                            searchrules: { date: true }

                        },
                        {
                            name: 'DATE_READ',
                            index: 'DATE_READ',
                            width: 100,
                            editable: true,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                            sorttype: 'date',
                            formatter: 'date',
                            formatoptions: { newformat: 'd/m/Y' },
                            datefmt: 'd-M-Y',
                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                            searchrules: { date: true }

                        },
                           
                        {
                            name: 'NameCitizen',
                            index: 'NameCitizen',
                            width: 150,
                            editable: false,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: true,
                            fixed: true,
                            searchoptions: { sopt: ['cn', 'eq'] }
                        },
                      
                        {
                            name: 'ServiceRef',
                            index: 'ServiceRef',
                            width: 100,
                            editable: false,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: true,
                            fixed: true,
                            searchoptions: { sopt: ['cn', 'eq'] }
                        },
                    
                        {
                            name: 'STAFF_REF',
                            index: 'STAFF_REF',
                            width: 150,
                            editable: false,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: true,
                            fixed: true,
                            searchoptions: { sopt: ['cn', 'eq'] }
                        },
                    
                    
                        {
                            name: 'StatusId',
                            index: 'StatusId',
                            width: 150,
                            editable: false,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: true,
                            fixed: true,
                            searchoptions: { sopt: ['cn', 'eq'] }
                        },
                        {
                            name: 'NumberAttachCitizen',
                            index: 'NumberAttachCitizen',
                            width: 150,
                            editable: false,
                            viewable: false,
                            hidedlg: true,
                            hidden: false,
                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                        },
                        {
                            name: 'ROUTE_ID',
                            index: 'ROUTE_ID',
                            width: 150,
                            editable: true,
                            sortable: true,
                            viewable: false,
                            hidedlg: false,
                            hidden: true,
                            fixed: true,
                        },
                             {
                                 name: 'EmailCitizen',
                                 index: 'EmailCitizen',
                                 width: 150,
                                 editable: true,
                                 sortable: true,
                                 viewable: false,
                                 hidedlg: false,
                                 hidden: true,
                                 fixed: true,
                             },
                                  {
                                      name: 'Phone',
                                      index: 'Phone',
                                      width: 150,
                                      editable: true,
                                      sortable: true,
                                      viewable: false,
                                      hidedlg: false,
                                      hidden: true,
                                      fixed: true,
                                  },
                                           {
                                               name: 'SUSPEND',
                                               index: 'SUSPEND',
                                               width: 150,
                                               editable: true,
                                               sortable: true,
                                               viewable: false,
                                               hidedlg: false,
                                               hidden: true,
                                               fixed: true,
                                           }, 
                    {
                        name: 'StakeHolderCode',
                        index: 'StakeHolderCode',
                    width: 150,
                    editable: true,
                    sortable: true,
                    viewable: false,
                    hidedlg: false,
                    hidden: true,
                    fixed: true,
                }, 
                        {
                            name: 'FeeLicenseStakeHolder',
                            index: 'FeeLicenseStakeHolder',
                            width: 100,
                            editable: false,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: ramallah == "Y" ? false : true,
                            fixed: true,
                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                        },
                                   {
                                       name: 'FeeStakeHolder',
                                       index: 'FeeStakeHolder',
                                       width: 100,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: ramallah == "Y" ? false : true,
                                       fixed: true,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                   },
                                       {
                                           name: 'FeeLand',
                                           index: 'FeeLand',
                                           width: 100,
                                           editable: false,
                                           sortable: true,
                                           viewable: true,
                                           hidedlg: false,
                                           hidden: ramallah == "Y" ? false : true,
                                           fixed: true,
                                           searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                }, 
                    ],
                    editData: {
                        idStaff: id,
                        isOpinion: typeTalab.val(),
                        //hod1: $("#s2id_hod2").text().trim(), hay1: $("#s2id_hay2").text().trim(), land1: $("#s2id_land2").text().trim()
                        hod1: hod, hay1: hay, land1: land

                    },

                    onSelectRow: function(rowId) {
                        $("#getAttachCitizenAllServiceUnderFlowTable").hide();

                        var sRow = BT.Grid.getSelectedRow(table, this);
                        $(this).attr("aria-selected","true");
                        //var sRow = $(table).jqGrid('getRowData', rowId);
                       
                        $("#opinion1AllServiceUnderFlowTable").hide();
                        $("#AgreeServiseAllServiceUnderFlowTable").hide();
                        $("#OpenBuildingFileAllServiceUnderFlowTable").hide();
                        $("#LicenseTaxes").hide();
                        $("#forwardAllServiceUnderFlowTable").hide();
                        $("#rejectAllServiceUnderFlowTable").hide();
                        $("#messageAllServiceUnderFlowTable").hide();
                        $("#acceptAllServiceUnderFlowTable").hide();
                        $("#endServiceFormBtnAllServiceUnderFlowTable").hide();
                        $("#edkhalAllServiceUnderFlowTable").hide();
                        $("#forwardFainancialAllServiceUnderFlowTable").hide();
                        $("#isdarAllServiceUnderFlowTable").hide();
                        $("#isdarPreviewAllServiceUnderFlowTable").hide();
                        $("#arabicServiceFormBtnAllServiceUnderFlowTable").hide();
                        $("#englishServiceFormBtnAllServiceUnderFlowTable").hide();
                        $("#arabicRejectServiceFormBtnAllServiceUnderFlowTable").hide();
                        $("#englishRejectServiceFormBtnAllServiceUnderFlowTable").hide();
                        $("#getAttachServiceAllServiceUnderFlowTable").hide();
                        $("#endServiceFormBtnAllServiceUnderFlowTable").hide();
                        $("#suspendAllServiceUnderFlowTable").hide();
                        $("#createBusinessBtn").hide();
                        //("#unSuspendAllServiceUnderFlowTable").hide();

                        var lnk = getPermission;
                        if (sRow.SUSPEND == "Y") {
                            //$("#unSuspendAllServiceUnderFlowTable").show();
                            $("#opinion1AllServiceUnderFlowTable").show();
                            $("#messageAllServiceUnderFlowTable").show();
                            $("#forwardAllServiceUnderFlowTable").hide();
                            $("#rejectAllServiceUnderFlowTable").hide();
                            $("#acceptAllServiceUnderFlowTable").hide();
                            $("#edkhalAllServiceUnderFlowTable").hide();
                            $("#forwardFainancialAllServiceUnderFlowTable").hide();
                            $("#isdarAllServiceUnderFlowTable").hide();
                            $("#arabicServiceFormBtnAllServiceUnderFlowTable").hide();
                            $("#englishServiceFormBtnAllServiceUnderFlowTable").hide();
                            $("#arabicRejectServiceFormBtnAllServiceUnderFlowTable").hide();
                            $("#englishRejectServiceFormBtnAllServiceUnderFlowTable").hide();
                            $("#getAttachServiceAllServiceUnderFlowTable").hide();
                            $("#endServiceFormBtnAllServiceUnderFlowTable").hide();

                        } else {
                            $.ajax({
                                type: "GET",
                                contentType: "application/json; charset=utf-8",
                                url: lnk,
                                data: {
                                    srId: sRow.ROUTE_ID,
                                    id: sRow.SERVICE_FORM_SEQ
                                },
                                dataType: "json",
                                beforeSend: function () {
                                    $("#LoadingImage").show();
                                },
                                success: function (data) {
                                    $("#LoadingImage").hide();
                                    if (data != null) {
                                        $.each(data, function (i, item) {
                                            title: item.ActionName == "إدخال" ? "احتساب الرسوم هندسية" :
                                                item.ActionName == "تأكيد" ? "تحويل الى المالية" : item.ActionName == "إصدار" ? "إصدار رخصة" : item.ActionName;
                                     
                                            var name = item.ActionName;
                                            var ACTION = item.ACTION;


                                            if (item.ID == -1) {
                                                $("#LicenseTaxes").show();

                                            }
                                            if (item.ACTION == 4) {
                                                $("#suspendAllServiceUnderFlowTable").show();

                                            }
                                            if (name == "تحويل") {
                                                $("#forwardAllServiceUnderFlowTable").show();
                                                    
                                            }
                                            if (parseFloat(ACTION) == 11)
                                            {
                                                $("#AgreeServiseAllServiceUnderFlowTable").show();

                                            }

                                            if (parseFloat(ACTION) == 12) {
                                                $("#OpenBuildingFileAllServiceUnderFlowTable").show();

                                            }


                                              
                                            if (name == "رفض") {
                                                $("#rejectAllServiceUnderFlowTable").show();
                                                $("#forwardAllServiceUnderFlowTable").hide();

                                            }

                                            if (name == "رسالة") {
                                                $("#messageAllServiceUnderFlowTable").show();

                                            }

                                            if (name == "قبول") {
                                                $("#acceptAllServiceUnderFlowTable").show();
                                                $("#forwardAllServiceUnderFlowTable").hide();


                                            }
                                            if (name == "أخذرأي") {
                                                $("#opinion1AllServiceUnderFlowTable").show();
                                            }

                                            if (name == "إدخال") {
                                                $("#edkhalAllServiceUnderFlowTable").show();

                                            }

                                            if (name == "تأكيد") {
                                                $("#forwardFainancialAllServiceUnderFlowTable").show();

                                            }
                                            //if (name == "إصدار") {
                                            //    $("#isdarAllServiceUnderFlowTable").show();

                                            //}
                                        
                                            if (sRow.StatusForm === "بانتظار مرفقات من المواطن"
    || sRow.StatusForm === "تم التعليق") {
                                                $("#forwardAllServiceUnderFlowTable").hide();
                                                $("#rejectAllServiceUnderFlowTable").hide();
                                                $("#acceptAllServiceUnderFlowTable").hide();
                                                $("#opinion1AllServiceUnderFlowTable").show();
                                            
                                                $("#messageAllServiceUnderFlowTable").show();
                                                $("#edkhalAllServiceUnderFlowTable").hide();
                                                $("#forwardFainancialAllServiceUnderFlowTable").hide();
                                                $("#isdarAllServiceUnderFlowTable").hide();
                                                $("#arabicServiceFormBtnAllServiceUnderFlowTable").hide();
                                                $("#englishServiceFormBtnAllServiceUnderFlowTable").hide();
                                                $("#arabicRejectServiceFormBtnAllServiceUnderFlowTable").hide();
                                                $("#englishRejectServiceFormBtnAllServiceUnderFlowTable").hide();
                                                $("#getAttachServiceAllServiceUnderFlowTable").hide();
                                                $("#endServiceFormBtnAllServiceUnderFlowTable").hide();

                                            }

                                        });
                                    
                                    }
                                }});

                            var lnk0 = getTempUrl;

                            var serviceId = sRow.ServiceRef;

                            $.ajax({
                                type: "GET",
                                contentType: "application/json; charset=utf-8",
                                url: lnk0,
                                data: {
                                    seq: sRow.ServiceRef,
                                    sform: sRow.SERVICE_FORM_SEQ,
                                    myOrder: sRow.ROUTE_ID
                                },
                                success: function (data) {
                                    if (data.eng == true) {
                                        if (data.data1 === "English_reject" || data.data1 === "English_accept"
                                        || data.data1 === "both_reject" || data.data1 === "both_accept"
                                        || data.data1 === "arabic_reject" || data.data1 === "arabic_accept"
                                        || data.data1 === "last_accept" || data.data1 === "last_reject") {
                                            $("#endServiceFormBtnAllServiceUnderFlowTable").show();
                                            $("#isdarAllServiceUnderFlowTable").show();
                                            $("#forwardAllServiceUnderFlowTable").hide();
                                            $("#isdarPreviewAllServiceUnderFlowTable").show();
                                            $("#forwardAllServiceUnderFlowTable").hide();
                                        }

                                    } else {
                                        if (data.data1 === "arabic_accept" || data.data1 === "both_accept") {

                                            $("#arabicServiceFormBtnAllServiceUnderFlowTable").show();
                                            $("#forwardAllServiceUnderFlowTable").hide();


                                        }
                                        if (data.data1 === "English_accept" || data.data1 === "both_accept") {
                                            $("#englishServiceFormBtnAllServiceUnderFlowTable").show();
                                            $("#forwardAllServiceUnderFlowTable").hide();

                                        }


                                        if (data.data1 === "arabic_reject" || data.data1 === "both_reject") {
                                            //here//
                                            $("#arabicRejectServiceFormBtnAllServiceUnderFlowTable").show();
                                            $("#forwardAllServiceUnderFlowTable").hide();

                                        }
                                        if (data.data1 === "English_reject" || data.data1 === "both_reject") {
                                            $("#englishRejectServiceFormBtnAllServiceUnderFlowTable").show();
                                            $("#forwardAllServiceUnderFlowTable").hide();


                                        }




                                        if (data.data1 === "English_reject" || data.data1 === "English_accept"
                                            || data.data1 === "both_reject" || data.data1 === "both_accept"
                                            || data.data1 === "arabic_reject" || data.data1 === "arabic_accept"
                                            || data.data1 === "last_accept" || data.data1 === "last_reject") {
                                            $("#endServiceFormBtnAllServiceUnderFlowTable").show();
                                            $("#getAttachServiceAllServiceUnderFlowTable").show();
                                            $("#forwardAllServiceUnderFlowTable").hide();

                                        }
                                        if (( craftsServiceP.includes(serviceId) || craftsServiceC.includes(serviceId))  && 
                                            (data.data1 === "English_accept" || data.data1 === "arabic_accept"
                                            || data.data1 === "both_accept")) {
                                            $("#createBusinessBtn").show();
                                        }
                                    }
                                }
                            });
                        }
                        if (sRow.NameStaff == "مجموعة") {
                            $("#groupStaff1").show();
                        }
                    },
                    rowattr: function (rowData, currentObj, rowId) {
                        var aa = rowData.SERVICE_FORM_SEQ;

                        if (aa == idForm) {
                       
                            $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                            $("#" + rowId).click();

                            return {
                                "aria-selected": 'true',
                                "class": "ui-state-highlight selectedClass"
                            };
                            
                        }
                        if (rowData.Status === 'جديد') {
                            return { "class": 'newRecBold' };
                        }
                        return '';
                    },
                    ondblClickRow: function(rowId) {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var lnk = getServiceForm;
                        openWindowWithPost(lnk, { seq: sRow.ID, idForm: sRow.SERVICE_FORM_SEQ, type: "newS", routeId: sRow.ROUTE_ID });
                        //lnk = lnk.replace("__seq__", sRow.ID);
                        //lnk = lnk.replace("&amp;", "&");
                        //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                        //lnk = lnk.replace("&amp;", "&");
                        //lnk = lnk.replace("newS", "newS");
                        //lnk = lnk.replace("&amp;", "&");
                        //lnk = lnk.replace("_rr_", sRow.ROUTE_ID);
                        //window.open(lnk, '_blank');
                    },
                }
            };
        };

        var initServiceGrid = function() {
            serchNF2.off('click').on('click', function () {
                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().GroupBy,
                    options: gridOpts().Properties,
                    rowId: idForm
                });
            
                BT.Grid.addButton(table, {
                    title: 'مشاهدة',
                    buttonicon: 'fa fa-align-justify',
                    id: 'getServiceForm' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var lnk = getServiceForm;
                        openWindowWithPost(lnk, { seq: sRow.ID, idForm: sRow.SERVICE_FORM_SEQ, type: "newS", routeId: sRow.ROUTE_ID });
                    }
                });

                BT.Grid.addButton(table, {
                    title: 'سير العمل',
                    buttonicon: 'fa fa-exchange blue',
                    id: 'getNotesWorkFlowService' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        BT.Dialog.Create('#modalNoteWorkFlowService', {
                            title: 'سير العمل',
                            width: 'max',
                            onOpenFn: function() {
                                Em.NotesWorkFlowService.init(
                                    notesWorkFlowUrl, sRow.SERVICE_FORM_SEQ, attachurl
                                );
                            }
                        });
                    }
                });

                BT.Grid.addSeparstor(table);

                BT.Grid.addButton(table, {
                    title: 'الرسائل',
                    buttonicon: 'fa fa-envelope blue',
                    id: 'getMsgService' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        BT.Dialog.Create('#modalMsgService', {
                            title: 'الرسائل',
                            width: 'max',
                            onOpenFn: function() {
                                Em.MsgService.init(
                                    msgUrl, sRow.ID, textMesgUrl, false, "#modalTextFullMsg", "#fullMsg"
                                );
                            }
                        });
                    }
                });

                BT.Grid.addButton(table, {
                    title: 'الآراء',
                    buttonicon: 'fa fa-comments-o blue',
                    id: 'getOpinionService' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        BT.Dialog.Create('#modalAllOpinionForService', {
                            title: 'الآراء',
                            width: 'max',
                            onOpenFn: function() {
                                Em.AllOpinionForService.init(
                                    opinionForServiceUrl, sRow.ID, false, printOpinion, opinionDownload, opinionAttachUrl, downloadAttachOpinionUrl
                                );
                            }
                        });
                    }
                });

                if (ramallah == "Y") {
   BT.Grid.addButton(table, {
                    title: 'تغيير حالة الطلب',
                    buttonicon: 'fa fa-align-justify',
                    id: 'changeStatusService' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        $.ajax({
                            url: isActionDoneJsonUrl,
                            data: { id: sRow.ID }
                        }).done(function (data) {
                            if (data.msg == true) {
                                BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                            } else {
                                BT.Dialog.Create('#modalChangeStatus', {
                                    title: 'تغيير حالة الطلب',
                                    onOpenFn: function() {
                                    },
                                    addButtons: [
                                        {
                                            id: 'btnUnEndProGrp',
                                            text: 'حفظ',
                                            'class': 'btn btn-sm btn-success',
                                            click: function() {
                                                //var status = changeStatusUrl.html();
                                                var lnk1 = changeStatusUrl;
                                                if (status.val() == "") {
                                                    BT.showErrorNotice("الرجاء اختيار الحالة");
                                                } else {
                                                    BT.Dialog.ajaxPOST('#modalChangeStatus',
                                                                                        lnk1,
                                                                                        {
                                                                                            idForm: sRow.SERVICE_FORM_SEQ,
                                                                                            idStatus: status.val(),
                                                                                            id: sRow.ID,
                                                                                            text: $("#msgChange").val(),
                                                                                        },
                                                                                        false,
                                                                                        function (data) {
                                                                                            if (data.done == "OK") {
                                                                                                BT.showSuccessNotice();
                                                                                                BT.Grid.reload(table);
                                                                                                BT.Dialog.hide('#modalChangeStatus');
                                                                                                window.location.href = pageUrl;
                                                                                            } else {
                                                                                                BT.showErrorNotice("الرجاء اختيار الحالة");
                                                                                            }


                                                                                        });
                                                }
                                

                                            }
                                        }
                                    ]
                                });
                            }

                        });
              
                    }
                });
                }

                if (ramallah != "Y") {
                    BT.Grid.addButton(table, {
                        title: 'الرسوم',
                        buttonicon: 'fa fa-dollar green',
                        id: 'fee' + BT.getNoHash(table),
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                url:taxesUrl,
                                data: { id: sRow.StakeHolderCode }
                        }).done(function(data) {
                            BT.Dialog.Create('#modalTaxes', {
                                title: 'الرسوم',
                                onOpenFn: function () {
                                    $("#taxContent").html(data);
                                },
                            });

                        });
                          
                        }

                    });

                        }
               

                BT.Grid.addButton(table, {
                    title: 'مرفقات إضافية ',
                    buttonicon: 'fa fa-align-justify',
                    id: 'getAttachCitizen' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        BT.Dialog.Create('#modalAnotherAttachCitizen', {
                            title: 'مرفقات إضافية للطلب ',
                            width: 'max',

                            onOpenFn: function() {
                                Em.AnotherAttachCitizen.init(
                                    attachCitizenUrl, downloadCitizenUrl, addCitizenAttachUrl, sRow.SERVICE_FORM_SEQ, sRow.StatusForm
                                );
                            }
                        });
                    }
                });
                BT.Grid.addSeparstor(table, 'last');

                BT.Grid.addButton(table, {
                    title: 'إنهاء وتبليغ',
                    buttonicon: 'fa fa-mail-forward green',
                    id: 'endServiceFormBtn' + BT.getNoHash(table),
                    position: 'first',
          
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
        
                        $.ajax({
                            url: isActionDoneJsonUrl,
                            data: { id: sRow.ID }
                        }).done(function (data) {
                            if (data.msg == true) {
                                BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                            } else {
                                BT.Dialog.Create('#modalEndMessage', {
                                    title: 'إنهاء وتبليغ',
                                    onOpenFn: function () {

                                        //$.ajax({
                                        //    type: "GET",
                                        //    contentType: "application/json; charset=utf-8",
                                        //    url: getTempUrl,
                                        //    data: {
                                        //        seq: sRow.ServiceRef,
                                        //        sform: sRow.SERVICE_FORM_SEQ,
                                        //        myOrder: sRow.ROUTE_ID
                                        //    },
                                        //    success: function (data) {
                                        //        $('#checkboxEmail').prop('disabled', false);
                                        //        $('#checkboxSms').prop('disabled', false);
                                        //        $('#checkboxEmail').prop('checked', false);
                                        //        $('#checkboxSms').prop('checked', false);
                                        //        $(".contentFormEmail").addClass("hidden");
                                        //        $(".contentSms").addClass("hidden");
                                        //        $.ajax({
                                        //            type: "GET",
                                        //            contentType: "application/json; charset=utf-8",
                                        //            url: infoCitizenUrl,
                                        //            data: { id: sRow.NameCitizen },
                                        //            dataType: "json",
                                        //            success: function (obj) {
                                        //                $("#toCitizen").val(obj.email1);
                                        //                $("#numberMobile").val(obj.mobile);
                                        //            }
                                        //        });


                                        //        $("#emailStaff").val("");
                                        //        if (sRow.EmailCitizen == "") {
                                        //            $('#checkboxEmail').prop('disabled', true);

                                        //        }
                                        //        if (sRow.Phone == "") {
                                        //            $('#checkboxSms').prop('disabled', true);

                                        //        }
                                            
                                        //        if (data.data1 === "English_reject" || data.data1 === "arabic_reject" || data.data1 === "both_reject"
                                        //                                                       || data.data1 === "last_reject") {
                                        //            $("#subEmail").val("تم رفض طلب رقم :" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService);
                                        //            $("#textEmail").html("نأسف لقد تم رفض طلب رقم:" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService + " " + "  الرجاء مراجعة البلدية لمعرفة الاسباب.");
                                        //            $("#msgSMS").html("نأسف لقد تم رفض طلب رقم:" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService + " " + "  الرجاء مراجعة البلدية لمعرفة الاسباب.");
                                        //        } else {
                                        //            $("#subEmail").val("تم قبول طلب رقم :" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService);
                                        //            $("#textEmail").html(" تم قبول طلب رقم:" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService + " " + "الرجاء مراجعة البلدية");
                                        //            $("#msgSMS").html(" تم قبول طلب رقم:" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService + " " + "الرجاء مراجعة البلدية");

                                        //        }
                                        //    }
                                        //});
                                    },
                                    addButtons: [
                                        {
                                            id: 'btnUnEndProGrp',
                                            text: 'إرسال',
                                            'class': 'btn btn-sm btn-success',
                                            click: function () {
                                                var msg = msgEnd.html();
                                                var txtEmail = $("#textEmail").html();
                                                var lnk1 = endServiceUrl;

                                                $('#modalEndMessage' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                $('#modalEndMessage' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);
                                                $("#endService1").ajaxForm({
                                                    type: "POST",
                                                    url: lnk1,
                                                    data: {
                                                        id: sRow.ID,
                                                        idService: sRow.ServiceRef,
                                                        idForm: sRow.SERVICE_FORM_SEQ,
                                                        text: msg,
                                                        //doc: $("#emailStaff").val(),
                                                        //textEmail: txtEmail,
                                                        //toCitizen: $("#toCitizen").val(),
                                                        //checkboxEmail: $("#checkboxEmail").is(":checked"),
                                                        //subEmail: $("#subEmail").val(),
                                                        //checkboxSms: $("#checkboxSms").is(":checked"),
                                                        //numberMobile: $("#numberMobile").val(),
                                                        //msgSMS: $("#msgSMS").val(),
                                                    },
                                                    //mimeType: "multipart/form-data",
                                                    success: (function (data3) {
                                                        if (data3.done) {
                                                            //var msg1 = " تم انهاء الطلب بنجاح " + "</br>" + data3.msg;

                                                            BT.showSuccessNotice(" تم انهاء الطلب بنجاح " + "</br>" + data3.msg + "");

                                                            //BT.Grid.reload(table);
                                                            BT.Dialog.hide('#modalEndMessage');
                                                            //window.location.href = pageUrl;
                                                            $("#refresh_AllServiceUnderFlowTable").click();
                                                            $("#refresh_AllServiceDoneTable").click();
                                                        } else {
                                                            $('#modalEndMessage' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);
                                                            BT.showErrorNotice(data3.msg);
                                                        }


                                                    })
                                                }).submit();
                                            }
                                        }
                                    ]
                                });
                            }

                        });
                
                    }
                });
                BT.Grid.addButton(table, {
                    title: 'مرفقات نهائية' ,
                    buttonicon: 'fa fa-align-justify',
                    id: 'getAttachService' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var lnk = addFianlAttachUrl;
                        //lnk = lnk.replace("_Id_", sRow.ServiceFormRef);
                        BT.Dialog.Create('#modalAttachFinalService', {
                            title: 'مرفقات نهائية',
                            width: 'max',
                            onOpenFn: function () {
                                Em.ServiceFormAttachment.init(
                                    attachFormUrl, sRow.SERVICE_FORM_SEQ, lnk, attachForm, filesUrl
                                );
                            }
                        });
                    }
                });
                BT.Grid.addButton(table, {
                    title: 'إصدار كتاب عربي' ,
                    buttonicon: 'fa fa-book green',
                    id: 'arabicServiceFormBtn' + BT.getNoHash(table),
                    position: 'first',
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var serviceId = sRow.ServiceRef;
                        $.ajax({
                            url: isActionDoneJsonUrl,
                            data: { id: sRow.ID }
                        }).done(function (data) {
                            if (data.msg == true) {
                                BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                            } else {
                                //BT.Dialog.Create('#modalAddStickers', {
                                //    title: 'رقم الطابع',
                                //    onOpenFn: function () {
                                //    },
                                //    addButtons: [
                                //        {
                                //            id: 'btnAddStickers',
                                //            text: 'حفظ',
                                //            'class': 'btn btn-sm btn-success',
                                //            click: function () {
                                //                //var status = changeStatusUrl.html();
                                //                var lnk1 = stickerUrl;
                                //                if ($("#stickersNo").val() == "") {
                                //                    BT.showErrorNotice("الرجاء ادخال رقم الطابع");
                                //                } else {
                                //                    $.ajax({
                                //                        type: "POST",
                                //                        url: lnk1,
                                //                        data: {
                                //                            idForm: sRow.SERVICE_FORM_SEQ,
                                //                            stickersNo: $("#stickersNo").val()
                                //                        },
                                //                        success: function (data) {
                                //                            if (data.done) {
                                //                                BT.Dialog.hide('#modalAddStickers');
                                //                                BT.showSuccessNotice();

                                var lnkA = creatSaderAcceptUrl;
                                $.ajax({
                                    type: "POST",
                                    url: lnkA,
                                    data: {
                                        formId: sRow.SERVICE_FORM_SEQ,
                                        lan: "ar"
                                    },
                                    success: function (data) {
                                        if (data.done) {
                                           // if (serviceId == craftsServiceP || serviceId == craftsServiceC) {
                                            if (craftsServiceP.includes(serviceId) || craftsServiceC.includes(serviceId)) {
                                                console.log("carfts");
                                                console.log(craftsServiceP);
                                                var lnk = craftsAcceptUrl;
                                                openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ});
                                                
                                            } else {
                                                var lnk = reportUrl;
                                                openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, serviceId: sRow.ServiceRef, user: sRow.NameCitizen, lan: "ar" });

                                            }
                                           
                                            //lnk = lnk.replace("_sfId_", sRow.SERVICE_FORM_SEQ);
                                            //lnk = lnk.replace("&amp;", "&");
                                            //lnk = lnk.replace("_id__", sRow.ServiceRef);
                                            //lnk = lnk.replace("&amp;", "&");
                                            //lnk = lnk.replace("_user_", sRow.NameCitizen);
                                            //lnk = lnk.replace("&amp;", "&");
                                            //lnk = lnk.replace("_lan_", "ar");
                                            //window.open(lnk, '_blank');
                                        } else {
                                            BT.showSuccessNotice(data.msg);
                                        }
                                    }
                                });
                                //} else {
                                //    BT.showSuccessNotice(data.msg);
                                //}
                            }
                        });
                    }

                });
                BT.Grid.addButton(table, {
                    title: 'إصدار كتاب رفض عربي',
                    buttonicon: 'fa fa-book green',
                    id: 'arabicRejectServiceFormBtn' + BT.getNoHash(table),
                    position: 'first',
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var serviceId = sRow.ServiceRef;
                        $.ajax({
                            url: isActionDoneJsonUrl,
                            data: { id: sRow.ID }
                        }).done(function (data) {
                            if (data.msg == true) {
                                BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                            } else {
                                //BT.Dialog.Create('#modalAddStickers', {
                                //    title: 'رقم الطابع',
                                //    onOpenFn: function () {
                                //    },
                                //    addButtons: [
                                //        {
                                //            id: 'btnAddStickers',
                                //            text: 'حفظ',
                                //            'class': 'btn btn-sm btn-success',
                                //            click: function () {
                                //                //var status = changeStatusUrl.html();
                                //                var lnk1 = stickerUrl;
                                //                if ($("#stickersNo").val() == "") {
                                //                    BT.showErrorNotice("الرجاء ادخال رقم الطابع");
                                //                } else {
                                //                    $.ajax({
                                //                        type: "POST",
                                //                        url: lnk1,
                                //                        data: {
                                //                            idForm: sRow.SERVICE_FORM_SEQ,
                                //                            stickersNo: $("#stickersNo").val()
                                //                        },
                                //                        success: function (data) {
                                //                            if (data.done) {
                                //                                BT.Dialog.hide('#modalAddStickers');
                                //                                BT.showSuccessNotice();
                                //if ((serviceId == craftsServiceP || serviceId == craftsServiceC) && canInsertRejectNote=="True") {
                                    if ((craftsServiceP.includes(serviceId) || craftsServiceC.includes(serviceId))&& canInsertRejectNote=="True") {

                                    BT.Dialog.Create('#modalAddRejectCraftsSer', {
                                        title: 'سبب الرفض',
                                        onOpenFn: function() {
                                        },
                                        addButtons: [
                                            {
                                                id: 'btnAddStickers',
                                                text: 'حفظ',
                                                'class': 'btn btn-sm btn-success',
                                                click: function() {
                                                    //var status = changeStatusUrl.html();
                                                    var lnk1 = addRejectCraftsNoteUrl;
                                                    if ($("#rejectCraftsNote").val() == "") {
                                                        BT.showErrorNotice("الرجاء ادخال سبب الرفض");
                                                    } else {
                                                        $.ajax({
                                                            type: "POST",
                                                            url: lnk1,
                                                            data: {
                                                                idForm: sRow.SERVICE_FORM_SEQ,
                                                                note: $("#rejectCraftsNote").val()
                                                            },
                                                            success: function(data) {
                                                                if (data.done) {
                                                                    BT.Dialog.hide('#modalAddRejectCraftsSer');
                                                                    BT.showSuccessNotice();
                                                                    var lnkA = creatSaderRejectUrl;
                                                                    $.ajax({
                                                                        type: "POST",
                                                                        url: lnkA,
                                                                        data: {
                                                                            formId: sRow.SERVICE_FORM_SEQ,
                                                                            lan: "ar"
                                                                        },
                                                                        success: function(data) {
                                                                            if (data.done) {
                                                                                var lnk = craftsRejectUrl;
                                                                                openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ });

                                                                                //lnk = lnk.replace("_sfId_", sRow.SERVICE_FORM_SEQ);
                                                                                //lnk = lnk.replace("&amp;", "&");
                                                                                //lnk = lnk.replace("_id__", sRow.ServiceRef);
                                                                                //lnk = lnk.replace("&amp;", "&");
                                                                                //lnk = lnk.replace("_user_", sRow.NameCitizen);
                                                                                //lnk = lnk.replace("&amp;", "&");
                                                                                //lnk = lnk.replace("_lan_", "ar");
                                                                                //window.open(lnk, '_blank');
                                                                            } else {
                                                                                BT.showSuccessNotice(data.msg);
                                                                            }
                                                                        }
                                                                    });
                                                                    //                                     } else {
                                                                    //                                         BT.showSuccessNotice(data.msg);
                                                                    //                                     }
                                                                }
                                                                //});
                                                            }


                                                        });
                                                    }
                                                }
                                            }
                                        ]
                                    });
                                } else {
                                    var lnkA = creatSaderRejectUrl;
                                    $.ajax({
                                        type: "POST",
                                        url: lnkA,
                                        data: {
                                            formId: sRow.SERVICE_FORM_SEQ,
                                            lan: "ar"
                                        },
                                        success: function (data) {
                                            if (data.done) {
                                                var lnk = rejectReportUrl;
                                                openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, serviceId: sRow.ServiceRef, user: sRow.NameCitizen, lan: "ar" });

                                            } else {
                                                BT.showSuccessNotice(data.msg);
                                            }
                                        }
                                    });
                                }

                            }

                        });

                    }
                });

                BT.Grid.addButton(table, {
                    title: 'إصدار كتاب انجليزي',
                    buttonicon: 'fa fa-book green',
                    id: 'englishServiceFormBtn' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var serviceId = sRow.ServiceRef;
                        $.ajax({
                            url: isActionDoneJsonUrl,
                            data: { id: sRow.ID }
                        }).done(function (data) {
                            if (data.msg == true) {
                                BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                            } else {
                                //BT.Dialog.Create('#modalAddStickers', {
                                //    title: 'رقم الطابع',
                                //    onOpenFn: function () {
                                //    },
                                //    addButtons: [
                                //        {
                                //            id: 'btnAddStickers',
                                //            text: 'حفظ',
                                //            'class': 'btn btn-sm btn-success',
                                //            click: function () {
                                //                //var status = changeStatusUrl.html();
                                //                var lnk1 = stickerUrl;
                                //                if ($("#stickersNo").val() == "") {
                                //                    BT.showErrorNotice("الرجاء ادخال رقم الطابع");
                                //                } else {
                                //                    $.ajax({
                                //                        type: "POST",
                                //                        url: lnk1,
                                //                        data: {
                                //                            idForm: sRow.SERVICE_FORM_SEQ,
                                //                            stickersNo: $("#stickersNo").val()
                                //                        },
                                //                        success: function (data) {
                                //                            if (data.done) {
                                //                                BT.Dialog.hide('#modalAddStickers');
                                //                                BT.showSuccessNotice();
                                var lnkA = creatSaderAcceptUrl;
                                $.ajax({
                                    type: "POST",
                                    url: lnkA,
                                    data: {
                                        formId: sRow.SERVICE_FORM_SEQ,
                                        lan: "en"
                                    },
                                    success: function (data) {
                                        if (data.done) {
                                            var lnk = reportUrl;
                                            openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, serviceId: sRow.ServiceRef, user: sRow.NameCitizen, lan: "en" });

                                        } else {
                                            BT.showSuccessNotice(data.msg);
                                        }
                                    }
                                });
                          
                            }
                        });
                       
                    }

                    //    });

                    //}
                });

                BT.Grid.addButton(table, {
                    title: 'إصدار كتاب رفض انجليزي',
                    buttonicon: 'fa fa-book green',
                    id: 'englishRejectServiceFormBtn' + BT.getNoHash(table),
                    onClickButton: function() {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var serviceId = sRow.ServiceRef;
                        $.ajax({
                            url: isActionDoneJsonUrl,
                            data: { id: sRow.ID }
                        }).done(function(data) {
                            if (data.msg == true) {
                                BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                            } else {
                                //BT.Dialog.Create('#modalAddStickers', {
                                //    title: 'رقم الطابع',
                                //    onOpenFn: function () {
                                //    },
                                //    addButtons: [
                                //        {
                                //            id: 'btnAddStickers',
                                //            text: 'حفظ',
                                //            'class': 'btn btn-sm btn-success',
                                //            click: function () {
                                //                //var status = changeStatusUrl.html();
                                //                var lnk1 = stickerUrl;
                                //                if ($("#stickersNo").val() == "") {
                                //                    BT.showErrorNotice("الرجاء ادخال رقم الطابع");
                                //                } else {
                                //                    $.ajax({
                                //                        type: "POST",
                                //                        url: lnk1,
                                //                        data: {
                                //                            idForm: sRow.SERVICE_FORM_SEQ,
                                //                            stickersNo: $("#stickersNo").val()
                                //                        },
                                //                        success: function (data) {
                                //                            if (data.done) {
                                //                                BT.Dialog.hide('#modalAddStickers');
                                //                                BT.showSuccessNotice();
                                if ((serviceId == craftsServiceP || serviceId == craftsServiceC) && canInsertRejectNote == "True") {
                                    BT.Dialog.Create('#modalAddRejectCraftsSer', {
                                        title: 'سبب الرفض',
                                        onOpenFn: function() {
                                        },
                                        addButtons: [
                                            {
                                                id: 'btnAddStickers',
                                                text: 'حفظ',
                                                'class': 'btn btn-sm btn-success',
                                                click: function() {
                                                    //var status = changeStatusUrl.html();
                                                    var lnk1 = addRejectCraftsNoteUrl;
                                                    if ($("#rejectCraftsNote").val() == "") {
                                                        BT.showErrorNotice("الرجاء ادخال سبب الرفض");
                                                    } else {
                                                        $.ajax({
                                                            type: "POST",
                                                            url: lnk1,
                                                            data: {
                                                                idForm: sRow.SERVICE_FORM_SEQ,
                                                                note: $("#rejectCraftsNote").val()
                                                            },
                                                            success: function(data) {
                                                                if (data.done) {
                                                                    BT.Dialog.hide('#modalAddRejectCraftsSer');
                                                                    BT.showSuccessNotice();
                                                                    var lnkA = creatSaderRejectUrl;
                                                                    $.ajax({
                                                                        type: "POST",
                                                                        url: lnkA,
                                                                        data: {
                                                                            formId: sRow.SERVICE_FORM_SEQ,
                                                                            lan: "en"
                                                                        },
                                                                        success: function(data) {
                                                                            if (data.done) {
                                                                                var lnk = craftsRejectUrl;
                                                                                openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ});

                                                                                //lnk = lnk.replace("_sfId_", sRow.SERVICE_FORM_SEQ);
                                                                                //lnk = lnk.replace("&amp;", "&");
                                                                                //lnk = lnk.replace("_id__", sRow.ServiceRef);
                                                                                //lnk = lnk.replace("&amp;", "&");
                                                                                //lnk = lnk.replace("_user_", sRow.NameCitizen);
                                                                                //lnk = lnk.replace("&amp;", "&");
                                                                                //lnk = lnk.replace("_lan_", "en");
                                                                                //window.open(lnk, '_blank');
                                                                            } else {
                                                                                BT.showSuccessNotice(data.msg);
                                                                            }
                                                                        }
                                                                    });

                                                                }

                                                            }


                                                        });
                                                    }
                                                }
                                            }
                                        ]
                                    });
                                } else {
                                    var lnkA = creatSaderRejectUrl;
                                    $.ajax({
                                        type: "POST",
                                        url: lnkA,
                                        data: {
                                            formId: sRow.SERVICE_FORM_SEQ,
                                            lan: "en"
                                        },
                                        success: function (data) {
                                            if (data.done) {
                                                var lnk = rejectReportUrl;
                                                openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, serviceId: sRow.ServiceRef, user: sRow.NameCitizen, lan: "en" });

                                            } else {
                                                BT.showSuccessNotice(data.msg);
                                            }
                                        }
                                    });
                                }
                            }

                            });
                        }
                });

        
                BT.Grid.addButton(table,
               {
                   title: 'تحويل',
                   buttonicon: 'fa fa-mail-forward blue',
                   id: 'forward' + BT.getNoHash(table),
                   onClickButton: function () {
                       var sRow = BT.Grid.getSelectedRow(table, this);
                       if (sRow == null) return;
                       $.ajax({
                           url: isActionDoneJsonUrl,
                           data: { id: sRow.ID }
                       }).done(function (data) {
                           if (data.msg == true) {
                               BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                           } else {
                               var lnk = forwardServiceUrl;
                               BT.Dialog.Create('#modalForwardService', {
                                   title: 'تحويل',
                                   onOpenFn: function () {

                                       lnk = lnk.replace("__id__", sRow.ID);
                                       lnk = lnk.replace("__seq__", sRow.ServiceRef);
                                       lnk = lnk.replace("&amp;", "&");
                                       lnk = lnk.replace("_f_", sRow.SERVICE_FORM_SEQ);

                                   },
                                   addButtons: [
                                       {
                                           id: 'btnSaveF',
                                           text: 'تحويل',
                                           'class': 'btn btn-sm btn-success',
                                           click: function () {
                                               //   $("#forward").submit(function (e) {
                                               $('#modalForwardService' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                               $('#modalForwardService' + '~.ui-dialog-buttonpane #btnSaveF').prop('disabled', true);
                                               $("#forwardService").ajaxForm({
                                                   type: "POST",
                                                   url: lnk,
                                                   data: $("#forwardService").serialize(),

                                                   success: (function (data1) {

                                                       if (data1.done) {
                                                           BT.showSuccessNotice("تم تحويل الطلب للموظف: " + data1.msg);
                                                           //BT.Grid.reload(table);
                                                           BT.Dialog.hide('#modalForwardService');
                                                           $("#notesStaff").val("");
                                                           // window.location.href = pageUrl;
                                                           $("#refresh_AllServiceUnderFlowTable").click();
                                                           $("#refresh_AllServiceDoneTable").click();
                                                       } else {

                                                           BT.showErrorNotice(data1.msg);
                                                           $('#modalForwardService' + '~.ui-dialog-buttonpane #btnSaveF').prop('disabled', false);

                                                       }


                                                   })
                                               }).submit();

                                           }
                                       }
                                   ]
                               });
                           }

                       });
                   
                   }
               });

                BT.Grid.addSeparstor(table);
                BT.Grid.addButton(table, {
                    title: 'تعليق',
                    buttonicon: 'fa fa-exclamation-circle red',
                    id: 'suspend' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        $.ajax({
                            url: isActionDoneJsonUrl,
                            data: { id: sRow.ID }
                        }).done(function (data) {
                            if (data.msg == true) {
                                BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                            } else {
                                var lnk2 = suspendServiceUrl;
                                BT.Dialog.Create('#modalSuspendService', {
                                    title: 'تعليق',
                                    onOpenFn: function () {
                                        lnk2 = lnk2.replace("__id__", sRow.ID);
                                    },
                                    addButtons: [
                                        {
                                            id: 'btnUnEndProGrp',
                                            text: 'تعليق',
                                            'class': 'btn btn-sm btn-success',
                                            click: function () {
                                                $('#modalSuspendService' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                $('#modalSuspendService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                                $("#_suspendF").ajaxForm({
                                                    type: "POST",
                                                    url: lnk2,
                                                    data: $("#_suspendF").serialize(),
                                                    //mimeType: "multipart/form-data",
                                                    success: (function(data44) {
                                                        if (data44.done) {
                                                            BT.showSuccessNotice();
                                                            BT.Dialog.hide('#modalSuspendService');
                                                            $("#textSuspend").val("");
                                                            //window.location.href = pageUrl;
                                                            $("#refresh_AllServiceUnderFlowTable").click();
                                                            $("#refresh_AllServiceSuspendTable").click();

                                                        } else {
                                                            BT.showErrorNotice(data44.msg);
                                                            $('#modalSuspendService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);


                                                        }


                                                    })
                                                }).submit();
                                            }
                                        }
                                    ]
                                });
                            }

                        });
                    }
                });

                    BT.Grid.addButton(table,
                            {
                                title: 'رفض',
                                buttonicon: 'fa fa-times red',
                                id: 'reject' + BT.getNoHash(table),
                                onClickButton: function() {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (sRow == null) return;
                                    $.ajax({
                                        url: isActionDoneJsonUrl,
                                        data: { id: sRow.ID }
                                    }).done(function (data) {
                                        if (data.msg == true) {
                                            BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                        } else {
                                            var lnk2 = dismissUrl;

                                            BT.Dialog.Create('#modalDismissService', {
                                                title: 'رفض',
                                                onOpenFn: function () {
                                                    lnk2 = lnk2.replace("__id__", sRow.ID);
                                                    lnk2 = lnk2.replace("__seq__", sRow.ServiceRef);
                                                    lnk2 = lnk2.replace("&amp;", "&");
                                                    lnk2 = lnk2.replace("_f_", sRow.SERVICE_FORM_SEQ);
                                                },
                                                addButtons: [
                                                    {
                                                        id: 'btnUnEndProGrp',
                                                        text: 'رفض',
                                                        'class': 'btn btn-sm btn-success',
                                                        click: function () {
                                                            $('#modalDismissService' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                            $('#modalDismissService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);
                                                            $("#dismissSe").ajaxForm({
                                                                type: "POST",
                                                                url: lnk2,
                                                                data: $("#dismissSe").serialize(),
                                                                //mimeType: "multipart/form-data",
                                                                //contentType: false,
                                                                //cache: false,
                                                                // processData: false,
                                                                success: (function (data2) {

                                                                    if (data2.done) {
                                                                        BT.showSuccessNotice();
                                                                        //BT.Grid.reload(table);
                                                                        BT.Dialog.hide('#modalDismissService');
                                                                        //window.location.href = pageUrl;
                                                                        $("#msgDismiss").val("");
                                                                        $("#refresh_AllServiceUnderFlowTable").click();
                                                                        $("#refresh_AllServiceDoneTable").click();
                                                                    } else {
                                                                        BT.showErrorNotice(data2.msg);
                                                                        $('#modalDismissService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);

                                                                    }


                                                                })
                                                            }).submit();

                                                            true,
                                                                function () {
                                                                    BT.Grid.reload(table);
                                                                    BT.Dialog.hide('#modalDismissService');
                                                                    window.location.href = pageUrl;

                                                                }

                                                        }
                                                    }
                                                ]
                                            });
                                        }

                                    });
                    
                                }
                            });

                        BT.Grid.addButton(table,
                         {
                             title: 'رسالة',
                             buttonicon: 'fa fa-envelope orange',
                             id: 'message' + BT.getNoHash(table),
                             onClickButton: function() {
                                 var lnk1 = sendMessageUrl;
                                 var sRow = BT.Grid.getSelectedRow(table, this);
                                 if (sRow == null) return;
                                 $.ajax({
                                     url: isActionDoneJsonUrl,
                                     data: { id: sRow.ID }
                                 }).done(function (data) {
                                     if (data.msg == true) {
                                         BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                     } else {
                                         BT.Dialog.Create('#modalSendMessage', {
                                             title: 'رسالة',
                                             onOpenFn: function () {

                                                 $("#idMsg").val(sRow.ID),
                                                     $("#idServiceMsg").val(sRow.ServiceRef),
                                                     $("#idFormRMsg").val(sRow.SERVICE_FORM_SEQ),
                                                     $.ajax({
                                                         type: "GET",
                                                         contentType: "application/json; charset=utf-8",
                                                         url: infoCitizenUrl,
                                                         data: { id: sRow.NameCitizen },
                                                         dataType: "json",
                                                         success: function (obj) {
                                                             $("#toCitizenM").val(obj.email1);
                                                         }
                                                     });
                                             },
                                             addButtons: [
                                                 {
                                                     id: 'btnUnEndProGrp',
                                                     text: 'إرسال',
                                                     'class': 'btn btn-sm btn-success',
                                                     click: function () {
                                                         var msg00 = message.html();
                                                         $('#modalSendMessage' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                         $('#modalSendMessage' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);
                                                         $("#sendMsg").ajaxForm({
                                                             type: "POST",
                                                             url: lnk1,
                                                             data: {
                                                                 //$("#sendMsg").serialize()
                                                                 id: sRow.SwSeq,
                                                                 idService: sRow.ServiceRef,
                                                                 idForm: sRow.ServiceFormRef,
                                                                 text: msg00,
                                                                 textSub: textSub.val(),
                                                                 toCitizenM: $("#toCitizenM").val(),
                                                                 doc: $("#emailStaffM1").val(),
                                                             },
                                                             //mimeType: "multipart/form-data",
                                                             success: (function (data3) {
                                                                 if (data3.done) {
                                                                     BT.showSuccessNotice();
                                                                     BT.Grid.reload(table);
                                                                     BT.Dialog.hide('#modalSendMessage');
                                                                     window.location.href = pageUrl;
                                                                 } else {
                                                                     $('#modalSendMessage' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);
                                                                     BT.showErrorNotice(data3.msg);

                                                                 }


                                                             })
                                                         }).submit(),
                                                             true,
                                                             function () {
                                                                 BT.Grid.reload(table);
                                                                 BT.Dialog.hide('#modalSendMessage');
                                                                 window.location.href = pageUrl;

                                                             }

                                                     }
                                                 }
                                             ]
                                         });
                                     }

                                 });
                   
                             }
                         });

                        BT.Grid.addButton(table,
                      {
                          title: 'قبول',
                          buttonicon: 'fa fa-check green',
                          id: 'accept' + BT.getNoHash(table),
                          onClickButton: function () {
                              var sRow = BT.Grid.getSelectedRow(table, this);
                              if (sRow == null) return;
                              $.ajax({
                                  url: isActionDoneJsonUrl,
                                  data: { id: sRow.ID }
                              }).done(function (data) {
                                  if (data.msg == true) {
                                      BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                  } else {
                                      var lnk3 = replayServiceUrl;
                                      BT.Dialog.Create('#modalReplayService', {
                                          title: 'قبول',
                                          onOpenFn: function() {

                                              $("#idF").val(sRow.ID),
                                                  $("#idService").val(sRow.ServiceRef),
                                                  $("#idFormR").val(sRow.SERVICE_FORM_SEQ) 
                                          },
                                          addButtons: [
                                              {
                                                  id: 'btnUnEndProGrp',
                                                  text: 'قبول',
                                                  'class': 'btn btn-sm btn-success',
                                                  click: function () {
                                                      $('#modalReplayService' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                      $('#modalReplayService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                                      $("#replaySe").ajaxForm({
                                                          type: "POST",
                                                          url: lnk3,
                                                          data: $("#replaySe").serialize(),
                                                          //mimeType: "multipart/form-data",
                                                          success: (function(data44) {
                                                              if (data44.done) {
                                                                  BT.showSuccessNotice();
                                                                  //BT.Grid.reload(table);
                                                                  BT.Dialog.hide('#modalReplayService');
                                                                  $("#msgReplay").val("");
                                                                  //window.location.href = pageUrl;
                                                                  $("#refresh_AllServiceUnderFlowTable").click();
                                                                  $("#refresh_AllServiceDoneTable").click();
                                                              } else {
                                                                  BT.showErrorNotice(data44.msg);
                                                                  $('#modalReplayService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);


                                                              }


                                                          })
                                                      }).submit(),
                                                          true,
                                                          function() {
                                                              BT.Grid.reload(table);
                                                              BT.Dialog.hide('#modalReplayService');
                                                              window.location.href = pageUrl;

                                                          }

                                                  }
                                              }
                                          ]
                                      });
                                  }

                              });
                 
                          }
                      });
                        BT.Grid.addButton(table,
               {
                   title: 'أخذرأي',
                   buttonicon: 'fa fa-comment-o orange2',
                   id: 'opinion1' + BT.getNoHash(table),
                   onClickButton: function() {
                       var sRow = BT.Grid.getSelectedRow(table, this);
                       if (sRow == null) return;
                       $.ajax({
                           url: isActionDoneJsonUrl,
                           data: { id: sRow.ID }
                       }).done(function (data) {
                           if (data.msg == true) {
                               BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                           } else {
                               var lnk4 = opinionServiceUrl;
                               BT.Dialog.Create('#modalOpinionService', {
                                   title: 'أخذرأي',
                                   onOpenFn: function() {
                                   },
                                   addButtons: [
                                       {
                                           id: 'btnUnEndProGrp',
                                           text: 'إرسال',
                                           'class': 'btn btn-sm btn-success',
                                           click: function () {
                                               $('#modalOpinionService' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                               $('#modalOpinionService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                          
                                               //BT.Dialog.ajaxPOST('#modalOpinionService',
                                               //    lnk4,
                                               //    {
                                               //        id: sRow.ID,
                                               //        idService: sRow.ServiceRef,
                                               //        text: opinion.val(),
                                               //        emp: staff.val()
                                               //    },
                                               //    false,
                                               //    function(data5) {
                                               //        if (data5.done) {

                                               //            BT.showSuccessNotice();
                                               //            BT.Grid.reload(table);
                                               //            BT.Dialog.hide('#modalOpinionService');
                                               //            window.location.href = pageUrl;
                                               //        } else {
                                               //            BT.showErrorNotice(data5.msg);
                                               //        }

                                               //    }
                                               //);
                                               $("#opinionService1").ajaxForm({
                                                   type: "POST",
                                                   url: lnk4,
                                                   data: {
                                                       id: sRow.ID,
                                                       idService: sRow.ServiceRef,
                                                       text: opinion.val(),
                                                       emp: staff.val()
                                                   },
                                                   //mimeType: "multipart/form-data",
                                                   success: (function(data44) {
                                                       if (data44.done) {

                                                           BT.showSuccessNotice();
                                                           BT.Grid.reload(table);
                                                           BT.Dialog.hide('#modalOpinionService');
                                                           window.location.href = pageUrl;
                                                       } else {
                                                           BT.showErrorNotice(data44.msg);
                                                           $('#modalOpinionService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);

                                                       }


                                                   })
                                               }).submit();
                                           }
                                       }
                                   ]
                               });
                           }

                       });
         
                   }
               });
                        BT.Grid.addSeparstor(table);
                        BT.Grid.addButton(table, {
                            title: 'إصدار رخصة',
                            buttonicon: 'fa fa-money green',
                            id: 'isdar' + BT.getNoHash(table),
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                $.ajax({
                                    url: isActionDoneJsonUrl,
                                    data: { id: sRow.ID }
                                }).done(function (data) {
                                    if (data.msg == true) {
                                        BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                    } else {
                                        var lnktax2 = taxUrl;
                                        lnktax2 = lnktax2.replace("_formId_", sRow.SERVICE_FORM_SEQ);
                                        lnktax2 = lnktax2.replace("&amp;", "&");
                                        lnktax2 = lnktax2.replace("_t_", "C");
                                        lnktax2 = lnktax2.replace("&amp;", "&");
                                        lnktax2 = lnktax2.replace("_idWf_", sRow.ID);
                                        window.open(lnktax2, '_blank');
                                    }

                                });
                            }
                        });
                        //BT.Grid.addButton(table, {
                        //    title: 'عرض رخصة',
                        //    buttonicon: 'fa fa-money green',
                        //    id: 'isdarPreview' + BT.getNoHash(table),
                        //    onClickButton: function () {
                        //        var sRow = BT.Grid.getSelectedRow(table, this);
                        //        if (sRow == null) return;
                               
                        //                var lnktax2 = previewLicenseUrl;
                        //                lnktax2 = lnktax2.replace("_ff_", sRow.SERVICE_FORM_SEQ);
                        //                window.open(lnktax2, '_blank');
                                  
                        //    }
                        //});

                        BT.Grid.addButton(table, {
                            title: 'تحويل الى المالية',
                            buttonicon: 'fa fa-money green',
                            id: 'forwardFainancial' + BT.getNoHash(table),
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                $.ajax({
                                    url: isActionDoneJsonUrl,
                                    data: { id: sRow.ID }
                                }).done(function (data) {
                                    if (data.msg == true) {
                                        BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                    } else {
                                        var lnktax1 = taxUrl;
                                        lnktax1 = lnktax1.replace("_formId_", sRow.SERVICE_FORM_SEQ);
                                        lnktax1 = lnktax1.replace("&amp;", "&");
                                        lnktax1 = lnktax1.replace("_t_", "F");
                                        lnktax1 = lnktax1.replace("&amp;", "&");
                                        lnktax1 = lnktax1.replace("_idWf_", sRow.ID);
                                        window.open(lnktax1, '_blank');
                                    }

                                });
               


                            }
                        });

                        BT.Grid.addButton(table, {
                            title: 'احتساب الرسوم هندسية',
                            buttonicon: 'fa fa-certificate green',
                            id: 'edkhal' + BT.getNoHash(table),
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                $.ajax({
                                    url: isActionDoneJsonUrl,
                                    data: { id: sRow.ID }
                                }).done(function (data) {
                                    if (data.msg == true) {
                                        BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                    } else {
                                        var lnktax = taxUrl;
                                        lnktax = lnktax.replace("_formId_", sRow.SERVICE_FORM_SEQ);
                                        lnktax = lnktax.replace("&amp;", "&");
                                        lnktax = lnktax.replace("_t_", "L");
                                        lnktax = lnktax.replace("&amp;", "&");
                                        lnktax = lnktax.replace("_idWf_", sRow.ID);
                                        window.open(lnktax, '_blank');
                                    }

                                });
          

                            }
                        });

                        BT.Grid.addButton(table, {
                            title: 'رسوم الرخصة',
                            buttonicon: 'fa fa-dollar yello',
                            id: 'LicenseTaxes',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnktax1 = "./Licence/LicenseTaxReport?id=" + sRow.SERVICE_FORM_SEQ + "";
                                //lnktax1 = lnktax1.replace("_t_", "F");
                                //window.open(lnktax1, '_blank');
                                window.open(lnktax1);


                            }
                        });


                        BT.Grid.addButton(table, {
                            title: 'الموافقة على دراسة الطلب',
                            buttonicon: 'fa fa-certificate green',
                            id: 'AgreeServise' + BT.getNoHash(table),
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk = forwardServiceUrl;
                   
                                lnk = lnk.replace("ForwardService", "AddTaxForOpeningBuildFileAndForwared");

                                lnk = lnk.replace("__id__", sRow.ID);
                                lnk = lnk.replace("__seq__", sRow.ServiceRef);
                                lnk = lnk.replace("amp;","");

                                lnk = lnk.replace("_f_", sRow.SERVICE_FORM_SEQ);
                   


                                $.ajax({
                                    url: CheckAraURL,
                                    data:{idForm:sRow.SERVICE_FORM_SEQ},
                                    beforeSend: function () {
                                        $("#LoadingImage").show();
                                    }

                                }).done(function (data) {
                                    $("#LoadingImage").hide();
                                    if(data.IsDone==true)
                                    {
                              
                                        BT.Dialog.Create("#AgreeDialog", {
                                            title: 'الموافقة على دراسة الطلب',
                                            onOpenFn: function () {
                                            },

                                        });

                                        $("#AmtForAreaAgree").data("kendoNumericTextBox").value(data.amt);
                                    }
                                    else
                                    {
                                        BT.showErrorNotice(data.Message);
                                    }
                                });




                                $('#AgreeOnlyButton').off('click').on('click', function () {
                                    var obj = $(this);

                                    obj.attr("disabled", "disabled");

                                    $.ajax({
                                        url: lnk,
                                        beforeSend: function () {
                                            $("#LoadingImage").show();
                                        }

                                    }).done(function (data0) {
                                        $("#LoadingImage").hide();
                                        BT.Dialog.hide('#AgreeDialog');
                                        if (data0.done) {

                                            BT.showSuccessNotice("تم تحويل الطلب للموظف: " + data0.msg);
                                            BT.Grid.reload(table);
                                            window.location.href = pageUrl;
                                        } else {
                                            obj.attr("disabled",false)

                                            BT.showErrorNotice(data0.msg);

                                        }
                                    });



                                });



                                $('#AgreeWithTaxButton').off('click').on('click', function () {
                                    var obj = $(this);

                                    obj.attr("disabled", "disabled")
                                    lnk += "&AddTax=true"
                                    lnk += "&amtAgree=" + $("#AmtForAreaAgree").data("kendoNumericTextBox").value()+""

                                    $.ajax({
                                        url: lnk,
                                        beforeSend: function () {
                                            $("#LoadingImage").show();
                                        }

                                    }).done(function (data0) {
                                        $("#LoadingImage").hide();
                                        BT.Dialog.hide('#AgreeDialog');
                                        if (data0.done) {

                                            BT.showSuccessNotice("تم تحويل الطلب للموظف: " + data0.msg);
                                            BT.Grid.reload(table);
                                            window.location.href = pageUrl;
                                        } else {
                                            obj.attr("disabled", false)

                                            BT.showErrorNotice(data0.msg);

                                        }
                                    });



                                });

                                //$('#confirmWindowYesButton').off('click').on('click', function () {
                                //    $(this).attr("disabled", "disabled")




                                //    $.ajax({
                                //        url: lnk,
                                //        beforeSend: function () {
                                //            $("#LoadingImage").show();
                                //        }

                                //    }).done(function (data0) {
                                //        $("#LoadingImage").hide();
                                //        if (data0.done) {

                                //            BT.showSuccessNotice("تم تحويل الطلب للموظف: " + data0.msg);
                                //            BT.Grid.reload(table);
                                //            window.location.href = pageUrl;
                                //        } else {

                                //            BT.showErrorNotice(data0.msg);

                                //        }
                                //    });


                                //    cw2.close();
                                //});






                                //var cw2 = $('#confirmWindow').data('kendoWindow');

                                //if (cw2.element.is(':visible')) return;

                                //var wr = kendo.template($('#confirmWindowTemplate').html());

                                //cw2.content(wr/*(data)*/); //send the row data object to the template and render it
                                //cw2.open().center();
                                //$(".redMessage").html("سيتم اضافة رسوم على المكلف ويتم  تحويل الطلب تلقائيا")
                                //$('#confirmWindowYesButton').off('click').on('click', function () {
                                //    $(this).attr("disabled", "disabled")
                     
                     


                                //    $.ajax({
                                //        url: lnk,
                                //        beforeSend: function () {
                                //            $("#LoadingImage").show();
                                //        }
                        
                                //    }).done(function (data0) {
                                //        $("#LoadingImage").hide();
                                //        if (data0.done) {

                                //            BT.showSuccessNotice("تم تحويل الطلب للموظف: " + data0.msg);
                                //            BT.Grid.reload(table);
                                //            window.location.href = pageUrl;
                                //        } else {

                                //            BT.showErrorNotice(data0.msg);

                                //        }
                                //    });
               

                                //    cw2.close();
                                //});
                                //$('#confirmWindowNoButton').off('click').on('click', function () {
                                //    cw2.close();
                                //});



                    


                            }
                        });


                        BT.Grid.addButton(table, {
                            title: 'فتح ملف بناء',
                            buttonicon: 'fa fa-certificate green',
                            id: 'OpenBuildingFile' + BT.getNoHash(table),
                            onClickButton: function () {
                   
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = UpdateFileNoLandUrl;

                                $.ajax({
                                    url: FileNoURLGe,
                                    data: { id: sRow.SERVICE_FORM_SEQ }

                                }).done(function (data0) {
                                    if (data0.IsDone) {


                                        BT.Dialog.Create('#modalFileNo', {
                                            title: 'فتح ملف',
                             
                                            onOpenFn: function () {
                                                if (!BT.isNullOrEmpty(data0.Message)) {
                                                    $("#FileNo").val(data0.Message);
                                                    document.getElementById("FileNo").disabled = true;
                                                    $("#btnsaveFileNo").hide();
                                                    $("#errorNo").removeClass("hidden");
                                      
                                      
                                                } else {
                                                    $("#FileNo").val(" ");
                                                    document.getElementById("FileNo").disabled = false;
                                                    $("#errorNo").addClass("hidden");

                                                }
                                                // $("#FileNo").val("");
                                                //Em.ContentItemWorkFlow.init(lnk);
                                            },
                                            addButtons: [
                                        {
                                            id: 'btnsaveFileNo',
                                            title: 'حفظ ',
                                            text:'حفظ ',
                                            'class': 'btn btn-sm btn-success',
                                            click: function () {
                                                if(!BT.isNullOrEmpty($("#FileNo").val()))
                                                {

                                                    $.ajax({
                                                        url: lnk,
                                                        data: {
                                                            idForm: sRow.SERVICE_FORM_SEQ ,
                                                            fileNo: $("#FileNo").val()
                                                        },
                                                        beforeSend: function () {
                                                            $("#LoadingImage").show();
                                                        },

                                                    }).done(function (data0) {
                                                        $("#LoadingImage").hide();
                                                        if (data0.IsDone) {

                                                            BT.showSuccessNotice(data0.msg);
                                                            BT.Dialog.hide('#modalFileNo');
                                                            BT.Grid.reload(table);

                                                            // window.location.href = pageUrl;
                                                        } else {

                                                            BT.showErrorNotice(data0.msg);

                                                        }
                                                    });

                                                }
                                                else

                                                {
                                                    BT.showErrorNotice("خطأ....يجب ادخال رقم الملف");
                                                }
                                  
                                            }
                                        }
                                            ]
                                        });
                            

                                    }




                                    else {

                                        BT.showErrorNotice(data0.Message);

                                    }
                        

                       
                                });
                            }
                        });

                        BT.Grid.addButton(table, {
                            title: ' اضافة منشأة',
                            buttonicon: 'fa fa-building',
                            id: 'createBusinessBtn' ,
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                $.ajax({
                                    url: isActionDoneJsonUrl,
                                    data: { id: sRow.ID }
                                }).done(function (data) {
                                    if (data.msg == true) {
                                        BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                    } else {
                                        BT.Dialog.confirm({
                                            id: 'confirmDel',
                                            message: 'سيتم اضافة منشاة هل انت متاكد؟',
                                            post: {
                                                url: createBusinessUrl,
                                                data: {
                                                    idForm: sRow.SERVICE_FORM_SEQ,
                                                },
                                                onSuccessFn: function (data) {
                                                    //console.log(data.Data);
                                                    //if (data.Data.done) {
                                                    //    $(table).trigger('reloadGrid');
                                                    //}
                                                    //else {
                                                    //    BT.showErrorNotice(data.Data.msg);
                                                    //}
                                                }
                                            }
                                        });
                                        //var lnkA = createBusinessUrl;
                                        //$.ajax({
                                        //    type: "POST",
                                        //    url: lnkA,
                                        //    data: {
                                        //        idForm: sRow.SERVICE_FORM_SEQ,
                                        //    },
                                        //    success: function (data) {
                                        //        if (data.done) {
                                        //            BT.showSuccessNotice();
                                        //            $("#refresh_AllServiceUnderFlowTable").click();
                                        //            $("#refresh_AllServiceDoneTable").click();
                                        //     } else {
                                        //            BT.showErrorNotice(data.msg);
                                        //        }
                                        //    }
                                        //});
                                  
                                    }
                                });
                            
                            }

                           
                        });
                    
                    }).trigger('click');

            };

            var init = function (pUpdateFileNoLandUrl, pFileNoURL, pAreURL,
                pGetServicetUnderFlowUrl, pGetServiceForm, pGetPermission, pGetPermissionUser, pForwardServiceUrl,
                pSendMessageUrl, pDismissUrl, pReplayServiceUrl, pOpinionServiceUrl, pPageUrl, pNotesWorkFlowUrl,
                pMsgUrl, pOpinionForServiceUrl, pTextMesgUrl, pGetTempUrl, pAttachFormUrl, pReportUrl, pEndServiceUrl,
                pAddFianlAttachUrl, pFilesUrl, pChangeStatusUrl, pAttachurl, pAttachCitizenUrl, pDownloadCitizenUrl, pAddCitizenAttachUrl,
                pPrintOpinion, pEngineeringTaxUrl,pGetEngTaxUrl,
                pAddEngTaxUrl, pEditEngTaxUrl, pTaxUrl, pRejectReportUrl, pCreatSaderRejectUrl, pCreatSaderAcceptUrl, pReceivedDocUrl, pInfoCitizenUrl,
                pStickersUrl, pOpinionDownload, pStaffGroupUrl1, pIsActionDoneJsonUrl, pOpinionAttachUrl, pDownloadAttachOpinionUrl, pSuspendServiceUrl, pTaxesUrl, pPreviewLicenseUrl
                , pCraftsAcceptUrl, pAddRejectCraftsNoteUrl, pCraftsRejectUrl, pCreateBusinessUrl, pRamallah, pId, pIdForm
                , pHod, pHay, pLand, pCraftsServiceP, pCraftsServiceC, pCanInsertRejectNote
                // , pIdService, pStaffName,pHod,pHay,pLand
                ) {
                if (
                    BT.isNullOrEmpty(pUpdateFileNoLandUrl)
                        || BT.isNullOrEmpty(pFileNoURL)
                        || BT.isNullOrEmpty(pAreURL)
                        || BT.isNullOrEmpty(pGetServicetUnderFlowUrl)
                        || BT.isNullOrEmpty(pGetServiceForm)
                        || BT.isNullOrEmpty(pGetPermission)
                        || BT.isNullOrEmpty(pGetPermissionUser)
                        || BT.isNullOrEmpty(pForwardServiceUrl)
                        || BT.isNullOrEmpty(pSendMessageUrl)
                        || BT.isNullOrEmpty(pDismissUrl)
                        || BT.isNullOrEmpty(pReplayServiceUrl)
                        || BT.isNullOrEmpty(pOpinionServiceUrl)
                        || BT.isNullOrEmpty(pPageUrl)
                        || BT.isNullOrEmpty(pNotesWorkFlowUrl)
                        || BT.isNullOrEmpty(pMsgUrl)
                        || BT.isNullOrEmpty(pOpinionForServiceUrl)
                        || BT.isNullOrEmpty(pTextMesgUrl)
                        || BT.isNullOrEmpty(pGetTempUrl)
                        || BT.isNullOrEmpty(pAttachFormUrl)
                        || BT.isNullOrEmpty(pReportUrl)
                        || BT.isNullOrEmpty(pEndServiceUrl)
                        || BT.isNullOrEmpty(pAddFianlAttachUrl)
                        || BT.isNullOrEmpty(pFilesUrl)
                        || BT.isNullOrEmpty(pChangeStatusUrl)
                        || BT.isNullOrEmpty(pAttachurl)
                        || BT.isNullOrEmpty(pAttachCitizenUrl)
                        || BT.isNullOrEmpty(pDownloadCitizenUrl)
                        || BT.isNullOrEmpty(pAddCitizenAttachUrl)
                        || BT.isNullOrEmpty(pAddCitizenAttachUrl)
                        || BT.isNullOrEmpty(pPrintOpinion)
                        || BT.isNullOrEmpty(pEngineeringTaxUrl)
                        || BT.isNullOrEmpty(pGetEngTaxUrl)
                        || BT.isNullOrEmpty(pAddEngTaxUrl)
                        || BT.isNullOrEmpty(pEditEngTaxUrl)
                        || BT.isNullOrEmpty(pTaxUrl)
                        || BT.isNullOrEmpty(pRejectReportUrl)
                        || BT.isNullOrEmpty(pCreatSaderRejectUrl)
                        || BT.isNullOrEmpty(pCreatSaderAcceptUrl)
                        || BT.isNullOrEmpty(pReceivedDocUrl)
                        || BT.isNullOrEmpty(pInfoCitizenUrl)
                        || BT.isNullOrEmpty(pStickersUrl)
                        || BT.isNullOrEmpty(pOpinionDownload)
                    || BT.isNullOrEmpty(pStaffGroupUrl1)
                    || BT.isNullOrEmpty(pIsActionDoneJsonUrl)
                    || BT.isNullOrEmpty(pOpinionAttachUrl)
                    || BT.isNullOrEmpty(pDownloadAttachOpinionUrl)
                    || BT.isNullOrEmpty(pSuspendServiceUrl)
                    || BT.isNullOrEmpty(pTaxesUrl)
                    || BT.isNullOrEmpty(pPreviewLicenseUrl)
                    || BT.isNullOrEmpty(pCraftsAcceptUrl)
                    || BT.isNullOrEmpty(pAddRejectCraftsNoteUrl)
                    || BT.isNullOrEmpty(pCraftsRejectUrl)
                    || BT.isNullOrEmpty(pCreateBusinessUrl)
                ) {
                    BT.showErrorNotice('Em.ServicetUnderFlow.init: missing params');
                    return;
                }
           
                getServicetUnderFlowUrl = pGetServicetUnderFlowUrl;
                getServiceForm = pGetServiceForm;
                serviceRef = $(serviceRef);
                notes = $(notes);
                message = $(message);
                textSub = $(textSub);
                msgDismiss = $(msgDismiss);
                msgReplay = $(msgReplay);
                opinion = $(opinion);
                staff = $(staff);
                msgEnd = $(msgEnd);
                status = $(status);
                //attachForm = $(attachForm);
                getPermission = pGetPermission;
                forwardServiceUrl = pForwardServiceUrl;
                sendMessageUrl = pSendMessageUrl;
                dismissUrl = pDismissUrl;
                replayServiceUrl = pReplayServiceUrl;
                opinionServiceUrl = pOpinionServiceUrl;
                pageUrl = pPageUrl;
                notesWorkFlowUrl = pNotesWorkFlowUrl;
                msgUrl = pMsgUrl;
                opinionForServiceUrl = pOpinionForServiceUrl;
                textMesgUrl = pTextMesgUrl;
                //idService = pIdService;
                //nameStaff = pStaffName;
                getTempUrl = pGetTempUrl;
                attachFormUrl = pAttachFormUrl;
                reportUrl = pReportUrl;
                endServiceUrl = pEndServiceUrl;
                addFianlAttachUrl = pAddFianlAttachUrl;
                filesUrl = pFilesUrl;
                changeStatusUrl = pChangeStatusUrl;
                attachurl = pAttachurl;
                attachCitizenUrl = pAttachCitizenUrl;
                downloadCitizenUrl = pDownloadCitizenUrl;
                addCitizenAttachUrl = pAddCitizenAttachUrl;
                printOpinion = pPrintOpinion;
                engineeringTaxUrl = pEngineeringTaxUrl;
                getEngTaxUrl = pGetEngTaxUrl;
                addEngTaxUrl = pAddEngTaxUrl;
                editEngTaxUrl = pEditEngTaxUrl;
                taxUrl = pTaxUrl;
                rejectReportUrl = pRejectReportUrl;
                creatSaderRejectUrl = pCreatSaderRejectUrl;
                creatSaderAcceptUrl = pCreatSaderAcceptUrl;
                receivedDocUrl = pReceivedDocUrl;
                infoCitizenUrl = pInfoCitizenUrl;
                stickerUrl = pStickersUrl;
                opinionDownload = pOpinionDownload;
                opinionAttachUrl = pOpinionAttachUrl;
                downloadAttachOpinionUrl = pDownloadAttachOpinionUrl;
                suspendServiceUrl = pSuspendServiceUrl;
                taxesUrl = pTaxesUrl;
                previewLicenseUrl = pPreviewLicenseUrl;
                //getPermission = pGetPermission.replace("__id__",serviceRef.val());
                getPermissionUser = pGetPermissionUser;
                craftsAcceptUrl = pCraftsAcceptUrl;
                addRejectCraftsNoteUrl = pAddRejectCraftsNoteUrl;
                craftsRejectUrl = pCraftsRejectUrl;
                createBusinessUrl = pCreateBusinessUrl;
                ramallah = pRamallah;
                id = pId;
                idForm = pIdForm;
                hod = pHod;
                hay = pHay;
                land = pLand;
                craftsServiceP = pCraftsServiceP;
                craftsServiceC = pCraftsServiceC;
                canInsertRejectNote = pCanInsertRejectNote;
                staffGroup1Url = pStaffGroupUrl1;
                isActionDoneJsonUrl = pIsActionDoneJsonUrl;

                FileNoURLGe = pFileNoURL;
                CheckAraURL = pAreURL;
                UpdateFileNoLandUrl = pUpdateFileNoLandUrl; 
          
                typeTalab = $("#typeTalab");
                serchNF2 = $("#serchNF2");
                if (!BT.isNullOrEmpty(land)) {
                    serchNF2.off('click').on('click', function () { }).trigger('click');

                }
                initServiceGrid();

            };

            return {
                init: init

            };
        })(),

        ServiceFormAttachment: (function () {
            var getServiceFormAttachmentUrl,
               serviceFormId,
               addAttachUrl,
               attachForm,
               filesUrl,
                table = '#AttachFinalServiceTable',
                pager = '#AttachFinalServiceTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'TITLE', txt: 'عنوان المرفق' },
                            { val: 'ATTACHMENT_DATE', txt: 'التاريخ' },
                        ],

                        Properties: {
                            caption: 'المرفقات',
                            sortname: 'ID',
                            sortorder: 'asc',
                            url: getServiceFormAttachmentUrl,
                            postData: { formService: serviceFormId },

                            colNames: [
                                'الكود', 'كود الفورم', 'عنوان المرفق', 'التاريخ', 'تحميل'
                            ],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                {
                                    name: 'TITLE',
                                    index: 'TITLE',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },


                                {
                                    name: 'ATTACHMENT_DATE',
                                    index: 'ATTACHMENT_DATE',
                                    width: 120,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true },
                                },
                               //{
                               //    name: 'StringImage',
                               //    index: 'StringImage',
                               //     width: 150,
                               //     editable: true,
                               //     sortable: true,
                               //     viewable: true,
                               //     hidedlg: false,
                               //     hidden: false,
                               //     fixed: true,
                               //     formatter: function (cellvalue, options, rowObject) {
                               //         return '<img alt="icon" src="data:image/png;base64,' + rowObject.StringImage + '" />';
                               //         //return "<img src='http://myserver/path/i.jpg' alt='my image' />";
                               //     },
                               //                         },
                                {
                                    name: 'talabAttachmentsActions',
                                    index: '',
                                    sortable: false,
                                    search: false,
                                    formatter: function (cellvalue, options, rowObject) {
                                        var link = filesUrl;
                                        link = link.replace("fs", rowObject.ID);
                                        link = link.replace("ft", rowObject.TITLE);
                                        //ace-icon fa fa-pencil-square-o bigger-230
                                        return '<a class="btn btn-sm btn-success" href=\''
                                            + link
                                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                    }
                                }
                            ],

                            editData: { formService: serviceFormId },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initContentItemGrid = function () {

                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);

                    BT.Grid.addButton(table, {
                        title: 'إضافة مرفق',
                        buttonicon: 'fa fa-plus-circle purple',
                        id: 'addFinalAttach' + BT.getNoHash(table),
                        onClickButton: function () {
                            var lnk = addAttachUrl;
                            lnk = lnk.replace("_Id_", serviceFormId);
                            BT.Dialog.Create('#modalFinalAttach', {
                                title: 'إضافة مرفق من البلدية',
                                width: 'max',
                                onOpenFn: function () {
                                    $("#finalattachH").val("");
                                    $("#titleAttach").val("");
                                    $("#img_finalattach").attr('src', "");

                                },
                                addButtons: [
                            {
                                id: 'btnUnEndProGrp',
                                text: 'إضافة',
                                'class': 'btn btn-sm btn-success',
                                click: function () {
                                    $('#modalFinalAttach' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                    $('#modalFinalAttach' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                    var formData = new FormData();
                                    formData = formData.append('file', $('input[type=file]')[0].files[0]);
                                    $("#attachForm").ajaxForm({
                                        type: "POST",
                                        url: lnk,
                                        data: formData,
                                        contentType: false,
                                        cache: false,
                                        processData: false,
                                        success: (function (data) {
                                            if (data == "Ok") {

                                                BT.showSuccessNotice("تمت الاضافة بنجاح");

                                                $("#finalattachH").val("");
                                                $("#titleAttach").val("");
                                                $("#img_finalattach").attr('src', "");

                                                BT.Dialog.hide('#modalFinalAttach');
                                                BT.Grid.reload(table);
                                            } else {
                                                BT.showErrorNotice(data);
                                                $('#modalFinalAttach' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);

                                            }

                                            // Optionally alert the user of success here...
                                        })
                                    }).submit();
                                }
                            }
                                ]
                            });
                        }
                    });
                },

                init = function (pGetServiceFormAttachmentUrl,
                    pServiceFormId, pAddAttachUrl, pAttachForm, pFilesUrl
                ) {
                    if (
                        BT.isNullOrEmpty(pGetServiceFormAttachmentUrl)
                        || BT.isNullOrEmpty(pAddAttachUrl)
                        || BT.isNullOrEmpty(pFilesUrl)

                            ) {
                        BT.showErrorNotice('Em.section.init: missing params');
                        return;
                    }

                    getServiceFormAttachmentUrl = pGetServiceFormAttachmentUrl;
                    serviceFormId = pServiceFormId;
                    addAttachUrl = pAddAttachUrl;
                    attachForm = pAttachForm;
                    filesUrl = pFilesUrl;
                    initContentItemGrid();

                };

            return {
                init: init
            };
        })(),
        ServiceFormAttachmentD: (function () {
            var getServiceFormAttachmentUrl,
               serviceFormId,
               addAttachUrl,
               attachForm,
               filesUrl,
                table = '#AttachFinalServiceTable',
                pager = '#AttachFinalServiceTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'TITLE', txt: 'عنوان المرفق' },
                            { val: 'ATTACHMENT_DATE', txt: 'التاريخ' },
                        ],

                        Properties: {
                            caption: 'المرفقات',
                            sortname: 'ID',
                            sortorder: 'asc',
                            url: getServiceFormAttachmentUrl,
                            postData: { formService: serviceFormId },

                            colNames: [
                                'الكود', 'كود الفورم', 'عنوان المرفق', 'التاريخ', 'تحميل'
                            ],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                {
                                    name: 'TITLE',
                                    index: 'TITLE',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },


                                {
                                    name: 'ATTACHMENT_DATE',
                                    index: 'ATTACHMENT_DATE',
                                    width: 120,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true },
                                },
                               //{
                               //    name: 'StringImage',
                               //    index: 'StringImage',
                               //     width: 150,
                               //     editable: true,
                               //     sortable: true,
                               //     viewable: true,
                               //     hidedlg: false,
                               //     hidden: false,
                               //     fixed: true,
                               //     formatter: function (cellvalue, options, rowObject) {
                               //         return '<img alt="icon" src="data:image/png;base64,' + rowObject.StringImage + '" />';
                               //         //return "<img src='http://myserver/path/i.jpg' alt='my image' />";
                               //     },
                               //                         },
                                {
                                    name: 'talabAttachmentsActions',
                                    index: '',
                                    sortable: false,
                                    search: false,
                                    formatter: function (cellvalue, options, rowObject) {
                                        var link = filesUrl;
                                        link = link.replace("fs", rowObject.ID);
                                        link = link.replace("ft", rowObject.TITLE);
                                        //ace-icon fa fa-pencil-square-o bigger-230
                                        return '<a class="btn btn-sm btn-success" href=\''
                                            + link
                                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                    }
                                }
                            ],

                            editData: { formService: serviceFormId },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initContentItemGrid = function () {

                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);

                    BT.Grid.addButton(table, {
                        title: 'إضافة مرفق',
                        buttonicon: 'fa fa-plus-circle purple',
                        id: 'addFinalAttach' + BT.getNoHash(table),
                        onClickButton: function () {
                            var lnk = addAttachUrl;
                            lnk = lnk.replace("_Id_", serviceFormId);
                            BT.Dialog.Create('#modalFinalAttachD', {
                                title: 'إضافة مرفق من البلدية',
                                width: 'max',
                                onOpenFn: function () {
                                    //Em.ContentItemWorkFlow.init(lnk);
                                },
                                addButtons: [
                            {
                                id: 'btnUnEndProGrp',
                                text: 'إضافة',
                                'class': 'btn btn-sm btn-success',
                                click: function () {
                                    //var msg = msgReplay.html();
                                    $('#modalFinalAttach' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                    $('#modalFinalAttach' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                    var formData = new FormData();
                                    formData = formData.append('file', $('input[type=file]')[0].files[0]);
                                    $("#attachFormD").ajaxForm({
                                        type: "POST",
                                        url: lnk,
                                        data: formData,
                                        // mimeType: "multipart/form-data",
                                        contentType: false,
                                        cache: false,
                                        processData: false,
                                        success: (function (data) {
                                            if (data == "Ok") {

                                                BT.showSuccessNotice("تمت الاضافة بنجاح");

                                                //var xx = $('#modalFinalAttach').next();
                                                //$('#modalFinalAttach').parent().find('button.btn-danger').first().click();


                                                BT.Dialog.hide('#modalFinalAttachD');
                                                BT.Grid.reload(table);
                                            }

                                            // Optionally alert the user of success here...
                                        })
                                    }).submit();
                                }
                            }
                                ]
                            });
                        }
                    });
                },

                init = function (pGetServiceFormAttachmentUrl,
                    pServiceFormId, pAddAttachUrl, pAttachForm, pFilesUrl
                ) {
                    if (
                        BT.isNullOrEmpty(pGetServiceFormAttachmentUrl)
                        || BT.isNullOrEmpty(pAddAttachUrl)
                        || BT.isNullOrEmpty(pFilesUrl)

                            ) {
                        BT.showErrorNotice('Em.section.init: missing params');
                        return;
                    }

                    getServiceFormAttachmentUrl = pGetServiceFormAttachmentUrl;
                    serviceFormId = pServiceFormId;
                    addAttachUrl = pAddAttachUrl;
                    attachForm = pAttachForm;
                    filesUrl = pFilesUrl;
                    initContentItemGrid();

                };

            return {
                init: init
            };
        })(),

        NotesWorkFlowService: (function () {
            var getNotesUrl,
                reqId,
                attachUrl,
                table = '#AllNotesUnderFlowServiceTable',
                pager = '#AllNotesUnderFlowServiceTablePager',
                table1 = '#AllNotesUnderFlowServiceTable1',
                pager1 = '#AllNotesUnderFlowServiceTablePager1',


                is2 = false,

                gridOpts = function () {
                    return {
                        GroupBy: [
                            //{ val: 'SwSeq', txt: 'كود العملية' },
                            //{ val: 'ServiceFormRef', txt: 'كود الطلب' },
                            { val: 'ACTION_DATE', txt: 'تاريخ' },
                            { val: 'NameStaff', txt: 'اسم الموظف' },
                            { val: 'STAFF_NOTES', txt: 'ملاحظات' }
                        ],

                        Properties: {
                            caption: 'سير العملية',
                            sortname: 'ACTION_DATE',
                            sortorder: 'asc',
                            url: getNotesUrl,
                            postData: {
                                idPr: reqId
                            },

                            colNames: ['كود ', 'كود الطلب', 'تاريخ', 'الحالة', 'اسم الموظف', 'ملاحظات', 'المرفق', 'تنزيل'],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true
                                },
                                {
                                    name: 'ACTION_DATE',
                                    index: 'ACTION_DATE',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                     {
                                         name: 'Status',
                                         index: 'Status',
                                         width: 150,
                                         editable: true,
                                         sortable: true,
                                         viewable: true,
                                         hidedlg: false,
                                         hidden: false,
                                         fixed: true,
                                         searchoptions: { sopt: ['cn', 'eq'] }

                                     },
                                    {
                                        name: 'NameStaff',
                                        index: 'NameStaff',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }

                                    },

                                {
                                    name: 'STAFF_NOTES',
                                    index: 'STAFF_NOTES',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                      {
                                          name: 'TITLE',
                                          index: 'TITLE',
                                          width: 150,
                                          editable: true,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }

                                      },
                                      {
                                          name: 'talabAttachmentsActions',
                                          index: '',
                                          sortable: false,
                                          search: false,
                                          formatter: function (cellvalue, options, rowObject) {
                                              var link = attachUrl;
                                              link = link.replace("fs", rowObject.ID);
                                              link = link.replace("ft", rowObject.TITLE);
                                              if (rowObject.TITLE != null) {
                                                  //ace-icon fa fa-pencil-square-o bigger-230
                                                  return '<a class="btn btn-sm btn-success" href=\''
                                                      + link
                                                      + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                              } else {
                                                  return 'لا يوجد مرفق';
                                              }
                                          }
                                      }
                            ],

                            editData: {
                                idPr: reqId
                            },

                            onSelectRow: function (rowId) {
                          
                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table: !is2 ? table : table1,
                        pager: !is2 ? pager : pager1,
                        //table:  table ,
                        //pager: pager ,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    //BT.Grid.addSeparstor(table);


                },

                init = function (pGetNotesUrl, pReqId, pAttachUrl, pIs2) {
                    if (
                        BT.isNullOrEmpty(pGetNotesUrl)
                        || BT.isNullOrEmpty(pAttachUrl)
                    ) {
                        BT.showErrorNotice('Em.Note.init: missing params');
                        return;
                    }

                    getNotesUrl = pGetNotesUrl;
                    attachUrl = pAttachUrl;
                    reqId = pReqId;

                    if (!BT.isNullOrEmpty(pIs2))
                        is2 = pIs2;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),

        NotesWorkFlowServiceDone: (function () {
            var getNotesUrl,
                attachUrl,
                reqId,
                table = '#AllNotesUnderFlowServiceTableD',
                pager = '#AllNotesUnderFlowServiceTablePagerD',


                //is2 = false,

                gridOpts = function () {
                    return {
                        GroupBy: [
                            //{ val: 'SwSeq', txt: 'كود العملية' },
                            //{ val: 'ServiceFormRef', txt: 'كود الطلب' },
                            { val: 'ActionDate', txt: 'تاريخ' },
                            { val: 'NameStaff', txt: 'اسم الموظف' },
                            { val: 'StaffNotes', txt: 'ملاحظات' }
                        ],

                        Properties: {
                            caption: 'سير العملية',
                            sortname: 'ACTION_DATE',
                            sortorder: 'asc',
                            url: getNotesUrl,
                            postData: {
                                idPr: reqId
                            },

                            colNames: ['كود ', 'كود الطلب', 'تاريخ', 'الحالة', 'اسم الموظف', 'ملاحظات', 'المرفق', 'تنزيل'],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true
                                },
                                {
                                    name: 'ACTION_DATE',
                                    index: 'ACTION_DATE',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                     {
                                         name: 'Status',
                                         index: 'Status',
                                         width: 150,
                                         editable: true,
                                         sortable: true,
                                         viewable: true,
                                         hidedlg: false,
                                         hidden: false,
                                         fixed: true,
                                         searchoptions: { sopt: ['cn', 'eq'] }

                                     },
                                {
                                    name: 'NameStaff',
                                    index: 'NameStaff',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                {
                                    name: 'STAFF_NOTES',
                                    index: 'STAFF_NOTES',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                   {
                                       name: 'TITLE',
                                       index: 'TITLE',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }

                                   },
                                      {
                                          name: 'talabAttachmentsActions',
                                          index: '',
                                          sortable: false,
                                          search: false,
                                          formatter: function (cellvalue, options, rowObject) {
                                              if (rowObject.TITLE != null) {
                                                  var link = attachUrl;
                                                  link = link.replace("fs", rowObject.ID);
                                                  link = link.replace("ft", rowObject.TITLE);
                                                  //ace-icon fa fa-pencil-square-o bigger-230
                                                  return '<a class="btn btn-sm btn-success" href=\''
                                                      + link
                                                      + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                              } else {
                                                  return 'لا يوجد مرفق';
                                              }
                                          }
                                      }
                            ],

                            editData: {
                                idPr: reqId
                            },

                            onSelectRow: function (rowId) {
                                //var sRow = $(table).jqGrid('getRowData', rowId);

                                //var ds = sRow.VisitDate.split('/');

                                //var ts = new Date();
                                //ts.setDate(ds[0]);
                                //ts.setMonth(parseInt(ds[1]) - 1);
                                //ts.setFullYear(ds[2]);

                                //var d = new Date();
                                //var dif = (d - ts) / (1000 * 60 * 60 * 24);

                                //if (dif < 0 || dif > 3) {
                                //    $('#delDoctorVisit, #editDoctorVisit').hide();
                                //} else {
                                //    $('#delDoctorVisit, #editDoctorVisit').show();
                                //}
                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        //table: !is2 ? table : table1,
                        //pager: !is2 ? pager : pager1,
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    //BT.Grid.addSeparstor(table);


                },

                init = function (pGetNotesUrl, pReqId, pAttachUrl, pIs2) {
                    if (
                        BT.isNullOrEmpty(pGetNotesUrl)
                        || BT.isNullOrEmpty(pAttachUrl)
                    ) {
                        BT.showErrorNotice('Em.Note.init: missing params');
                        return;
                    }

                    getNotesUrl = pGetNotesUrl;
                    attachUrl = pAttachUrl;
                    reqId = pReqId;

                    //if (!BT.isNullOrEmpty(pIs2))
                    //    is2 = pIs2;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),

        NotesWorkFlowServiceSus: (function () {
            var getNotesUrl,
                reqId,
                attachUrl,
                table = '#AllNotesUnderFlowServiceSusTable',
                pager = '#AllNotesUnderFlowServiceSusTablePager',

                is2 = false,



                gridOpts = function () {
                    return {
                        GroupBy: [
                            //{ val: 'SwSeq', txt: 'كود العملية' },
                            //{ val: 'ServiceFormRef', txt: 'كود الطلب' },
                            { val: 'ACTION_DATE', txt: 'تاريخ' },
                            { val: 'NameStaff', txt: 'اسم الموظف' },
                            { val: 'STAFF_NOTES', txt: 'ملاحظات' }
                        ],

                        Properties: {
                            caption: 'سير العملية',
                            sortname: 'ACTION_DATE',
                            sortorder: 'asc',
                            url: getNotesUrl,
                            postData: {
                                idPr: reqId
                            },

                            colNames: ['كود ', 'كود الطلب', 'تاريخ', 'الحالة', 'اسم الموظف', 'ملاحظات', 'المرفق', 'تنزيل'],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true
                                },
                                {
                                    name: 'ACTION_DATE',
                                    index: 'ACTION_DATE',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                     {
                                         name: 'Status',
                                         index: 'Status',
                                         width: 150,
                                         editable: true,
                                         sortable: true,
                                         viewable: true,
                                         hidedlg: false,
                                         hidden: false,
                                         fixed: true,
                                         searchoptions: { sopt: ['cn', 'eq'] }

                                     },
                                    {
                                        name: 'NameStaff',
                                        index: 'NameStaff',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }

                                    },

                                {
                                    name: 'STAFF_NOTES',
                                    index: 'STAFF_NOTES',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                      {
                                          name: 'TITLE',
                                          index: 'TITLE',
                                          width: 150,
                                          editable: true,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }

                                      },
                                      {
                                          name: 'talabAttachmentsActions',
                                          index: '',
                                          sortable: false,
                                          search: false,
                                          formatter: function (cellvalue, options, rowObject) {
                                              var link = attachUrl;
                                              link = link.replace("fs", rowObject.ID);
                                              link = link.replace("ft", rowObject.TITLE);
                                              if (rowObject.TITLE != null) {
                                                  //ace-icon fa fa-pencil-square-o bigger-230
                                                  return '<a class="btn btn-sm btn-success" href=\''
                                                      + link
                                                      + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                              } else {
                                                  return 'لا يوجد مرفق';
                                              }
                                          }
                                      }
                            ],

                            editData: {
                                idPr: reqId
                            },

                            onSelectRow: function (rowId) {

                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table:  table ,
                        pager:  pager ,
                 
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    //BT.Grid.addSeparstor(table);


                },

                init = function (pGetNotesUrl, pReqId, pAttachUrl, pIs2) {
                    if (
                        BT.isNullOrEmpty(pGetNotesUrl)
                        || BT.isNullOrEmpty(pAttachUrl)
                    ) {
                        BT.showErrorNotice('Em.Note.init: missing params');
                        return;
                    }

                    getNotesUrl = pGetNotesUrl;
                    attachUrl = pAttachUrl;
                    reqId = pReqId;

                    if (!BT.isNullOrEmpty(pIs2))
                        is2 = pIs2;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),
        ServiceFormAttachmentSus: (function () {
            var getServiceFormAttachmentUrl,
               serviceFormId,
               addAttachUrl,
               attachForm,
               filesUrl,
                table = '#AttachFinalServiceSusTable',
                pager = '#AttachFinalServiceSusTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'TITLE', txt: 'عنوان المرفق' },
                            { val: 'ATTACHMENT_DATE', txt: 'التاريخ' },
                        ],

                        Properties: {
                            caption: 'المرفقات',
                            sortname: 'ID',
                            sortorder: 'asc',
                            url: getServiceFormAttachmentUrl,
                            postData: { formService: serviceFormId },

                            colNames: [
                                'الكود', 'كود الفورم', 'عنوان المرفق', 'التاريخ', 'تحميل'
                            ],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                {
                                    name: 'TITLE',
                                    index: 'TITLE',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },


                                {
                                    name: 'ATTACHMENT_DATE',
                                    index: 'ATTACHMENT_DATE',
                                    width: 120,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true },
                                },
                               //{
                               //    name: 'StringImage',
                               //    index: 'StringImage',
                               //     width: 150,
                               //     editable: true,
                               //     sortable: true,
                               //     viewable: true,
                               //     hidedlg: false,
                               //     hidden: false,
                               //     fixed: true,
                               //     formatter: function (cellvalue, options, rowObject) {
                               //         return '<img alt="icon" src="data:image/png;base64,' + rowObject.StringImage + '" />';
                               //         //return "<img src='http://myserver/path/i.jpg' alt='my image' />";
                               //     },
                               //                         },
                                {
                                    name: 'talabAttachmentsActions',
                                    index: '',
                                    sortable: false,
                                    search: false,
                                    formatter: function (cellvalue, options, rowObject) {
                                        var link = filesUrl;
                                        link = link.replace("fs", rowObject.ID);
                                        link = link.replace("ft", rowObject.TITLE);
                                        //ace-icon fa fa-pencil-square-o bigger-230
                                        return '<a class="btn btn-sm btn-success" href=\''
                                            + link
                                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                    }
                                }
                            ],

                            editData: { formService: serviceFormId },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initContentItemGrid = function () {

                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);

                    BT.Grid.addButton(table, {
                        title: 'إضافة مرفق',
                        buttonicon: 'fa fa-plus-circle purple',
                        id: 'addFinalAttach' + BT.getNoHash(table),
                        onClickButton: function () {
                            var lnk = addAttachUrl;
                            lnk = lnk.replace("_Id_", serviceFormId);
                            BT.Dialog.Create('#modalFinalAttach', {
                                title: 'إضافة مرفق من البلدية',
                                width: 'max',
                                onOpenFn: function () {
                                    //Em.ContentItemWorkFlow.init(lnk);
                                },
                                addButtons: [
                            {
                                id: 'btnUnEndProGrp',
                                text: 'إضافة',
                                'class': 'btn btn-sm btn-success',
                                click: function () {
                                    //var msg = msgReplay.html();
                                    $('#modalFinalAttach' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                    $('#modalFinalAttach' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                    var formData = new FormData();
                                    formData = formData.append('file', $('input[type=file]')[0].files[0]);
                                    $("#attachForm").ajaxForm({
                                        type: "POST",
                                        url: lnk,
                                        data: formData,
                                        // mimeType: "multipart/form-data",
                                        contentType: false,
                                        cache: false,
                                        processData: false,
                                        success: (function (data) {
                                            if (data == "Ok") {

                                                BT.showSuccessNotice("تمت الاضافة بنجاح");

                                                //var xx = $('#modalFinalAttach').next();
                                                //$('#modalFinalAttach').parent().find('button.btn-danger').first().click();


                                                BT.Dialog.hide('#modalFinalAttach');
                                                BT.Grid.reload(table);
                                            }

                                            // Optionally alert the user of success here...
                                        })
                                    }).submit();
                                }
                            }
                                ]
                            });
                        }
                    });
                },

                init = function (pGetServiceFormAttachmentUrl,
                    pServiceFormId, pAddAttachUrl, pAttachForm, pFilesUrl
                ) {
                    if (
                        BT.isNullOrEmpty(pGetServiceFormAttachmentUrl)
                        || BT.isNullOrEmpty(pAddAttachUrl)
                        || BT.isNullOrEmpty(pFilesUrl)

                            ) {
                        BT.showErrorNotice('Em.section.init: missing params');
                        return;
                    }

                    getServiceFormAttachmentUrl = pGetServiceFormAttachmentUrl;
                    serviceFormId = pServiceFormId;
                    addAttachUrl = pAddAttachUrl;
                    attachForm = pAttachForm;
                    filesUrl = pFilesUrl;
                    initContentItemGrid();

                };

            return {
                init: init
            };
        })(),

        MsgService: (function () {
            var getMsgUrl,
                reqId,
                textMesgUrl,
                model,
                textMsg,
                is2,
                table = '#MsgServiceTable',
                pager = '#MsgServiceTablePager',
                table2 = '#MsgServiceTable1',
                pager2 = '#MsgServiceTablePager1',

                gridOpts = function () {
                    return {
                        GroupBy: [
                       { val: 'MESSAGE_SUBNJECT', txt: 'موضوع الرسالة' },
                            { val: 'MESSAGE_DATE', txt: 'تاريخ الرسالة' },
                            { val: 'STAKEHOLDER_REF', txt: 'المواطن' },
                            { val: 'READ_DATE', txt: 'تاريخ القراءة' }
                        ],

                        Properties: {
                            caption: 'الرسائل',
                            sortname: 'MESSAGE_DATE',
                            sortorder: 'desec',
                            url: getMsgUrl,
                            postData: {
                                seq: reqId
                            },

                            colNames: ['الكود ', 'كود العملية', 'موضوع الرسالة', 'نص الراسلة', 'تاريخ الرسالة'
                            , 'المواطن', 'تاريخ القراءة'],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                   {
                                       name: 'SW_REF',
                                       index: 'SW_REF',
                                       key: true,
                                       editable: false,
                                       viewable: true,
                                       hidedlg: true,
                                       hidden: true,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                   },
                                {
                                    name: 'MESSAGE_SUBNJECT',
                                    index: 'MESSAGE_SUBNJECT',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                 {
                                     name: 'MessageText',
                                     index: 'MessageText',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }

                                 },
                                {
                                    name: 'MESSAGE_DATE',
                                    index: 'MESSAGE_DATE',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                {
                                    name: 'STAKEHOLDER_NAME',
                                    index: 'STAKEHOLDER_NAME',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                   {
                                       name: 'READ_DATE',
                                       index: 'READ_DATE',
                                       width: 120,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       sorttype: 'date',
                                       formatter: 'date',
                                       formatoptions: { newformat: 'd/m/Y' },
                                       datefmt: 'd-M-Y',
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                       searchrules: { date: true }
                                   },
                            ],

                            editData: {
                                seq: reqId
                            },

                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(is2 ? table2 : table, this);
                                if (sRow == null) return;
                                var lnk = textMesgUrl;
                                //lnk = lnk.replace("__id__", sRow.ID);
                                $.ajax({
                                    type: "GET",
                                    contentType: "application/json; charset=utf-8",
                                    url: lnk,
                                    data: { id: sRow.ID },
                                    dataType: "json",
                                    success: function (obj) {
                                        var html = $.parseHTML(obj);
                                        BT.Dialog.Create(model, {
                                            title: 'نص الرسالة',
                                            onOpenFn: function () {
                                                $(textMsg).html(html);
                                            },

                                        });
                                    }
                                });
                       
                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        //table: !is2 ? table : table2,
                        //pager: !is2 ? pager : pager2,
                        table: is2 ? table2 : table,
                        pager: is2 ? pager2 : pager,
                        //fullMsg:!is2 ? fullMsg: fullMsg2,
                        //model: !is2 ? model : model2,
                        //table: table,
                        //pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(is2 ? table2 : table);


                },

                init = function (pGetMsgUrl, pReqId, pTextMesgUrl, pIs2, pModel, pDiv) {
                    if (
                        BT.isNullOrEmpty(pGetMsgUrl)
                        || BT.isNullOrEmpty(pTextMesgUrl)

                    ) {
                        BT.showErrorNotice('Em.Msg.init: missing params');
                        return;
                    }

                    getMsgUrl = pGetMsgUrl;
                    reqId = pReqId;
                    textMesgUrl = pTextMesgUrl;
                    model = pModel;
                    textMsg = pDiv;
                    is2 = pIs2;
                    //fullMsg = $(fullMsg) ;
                    //fullMsg2 = $(fullMsg2);

                    //if (!BT.isNullOrEmpty(pIs2))
                    //    is2 = pIs2;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),

        MsgServiceSus: (function () {
            var getMsgUrl,
                reqId,
                textMesgUrl,
                model,
                textMsg,
                is2,
                table = '#MsgServiceSusTable',
                pager = '#MsgServiceSusTablePager',
          

                gridOpts = function () {
                    return {
                        GroupBy: [
                       { val: 'MESSAGE_SUBNJECT', txt: 'موضوع الرسالة' },
                            { val: 'MESSAGE_DATE', txt: 'تاريخ الرسالة' },
                            { val: 'STAKEHOLDER_REF', txt: 'المواطن' },
                            { val: 'READ_DATE', txt: 'تاريخ القراءة' }
                        ],

                        Properties: {
                            caption: 'الرسائل',
                            sortname: 'MESSAGE_DATE',
                            sortorder: 'desec',
                            url: getMsgUrl,
                            postData: {
                                seq: reqId
                            },

                            colNames: ['الكود ', 'كود العملية', 'موضوع الرسالة', 'نص الراسلة', 'تاريخ الرسالة'
                            , 'المواطن', 'تاريخ القراءة'],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                   {
                                       name: 'SW_REF',
                                       index: 'SW_REF',
                                       key: true,
                                       editable: false,
                                       viewable: true,
                                       hidedlg: true,
                                       hidden: true,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                   },
                                {
                                    name: 'MESSAGE_SUBNJECT',
                                    index: 'MESSAGE_SUBNJECT',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                 {
                                     name: 'MessageText',
                                     index: 'MessageText',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }

                                 },
                                {
                                    name: 'MESSAGE_DATE',
                                    index: 'MESSAGE_DATE',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                {
                                    name: 'STAKEHOLDER_NAME',
                                    index: 'STAKEHOLDER_NAME',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                   {
                                       name: 'READ_DATE',
                                       index: 'READ_DATE',
                                       width: 120,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       sorttype: 'date',
                                       formatter: 'date',
                                       formatoptions: { newformat: 'd/m/Y' },
                                       datefmt: 'd-M-Y',
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                       searchrules: { date: true }
                                   },
                            ],

                            editData: {
                                seq: reqId
                            },

                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(is2 ? table2 : table, this);
                                if (sRow == null) return;
                                var lnk = textMesgUrl;
                                //lnk = lnk.replace("__id__", sRow.ID);
                                $.ajax({
                                    type: "GET",
                                    contentType: "application/json; charset=utf-8",
                                    url: lnk,
                                    data: { id: sRow.ID },
                                    dataType: "json",
                                    success: function (obj) {
                                        var html = $.parseHTML(obj);
                                        BT.Dialog.Create(model, {
                                            title: 'نص الرسالة',
                                            onOpenFn: function () {
                                                $(textMsg).html(html);
                                            },

                                        });
                                    }
                                });

                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                  
                        table:table,
                        pager: pager,
                        
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);


                },

                init = function (pGetMsgUrl, pReqId, pTextMesgUrl, pIs2, pModel, pDiv) {
                    if (
                        BT.isNullOrEmpty(pGetMsgUrl)
                        || BT.isNullOrEmpty(pTextMesgUrl)

                    ) {
                        BT.showErrorNotice('Em.Msg.init: missing params');
                        return;
                    }

                    getMsgUrl = pGetMsgUrl;
                    reqId = pReqId;
                    textMesgUrl = pTextMesgUrl;
                    model = pModel;
                    textMsg = pDiv;
                    is2 = pIs2;
                  

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),

       

        AllOpinionForService: (function () {
            var getOpinionUrl,
                swSeq,
                printOpinion,
               opinionDownload,
               opinionAttachUrl,
               downloadAttachOpinionUrl,
                table = '#AllOpinionForServiceTable',
                pager = '#AllOpinionForServiceTablePager',
                table1 = '#AllOpinionForServiceTableD',
                pager1 = '#AllOpinionForServiceTablePagerD',
                is2 = false,

                gridOpts = function () {
                    return {
                        GroupBy: [
                        { val: 'DATE_RECEIVED', txt: 'التاريخ' },
                            { val: 'StaffName', txt: 'من' },
                            { val: 'OPINION', txt: 'الآراء' },
                            { val: 'NOTES_RECEIVED', txt: 'الملاحظات' }

                        ],

                        Properties: {
                            caption: 'أخذ الرأي',
                            sortname: 'ID',
                            sortorder: 'asc',
                            url: getOpinionUrl,
                            postData: {
                                swSeq: swSeq
                            },

                            colNames: ['الكود ', 'كود العملية', 'التاريخ', 'من الموظف', 'الملاحظة المرسلة ','الى الموظف','الرأي', 'المرفق',''],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                   {
                                       name: 'SW_REF',
                                       index: 'SW_REF',
                                       key: true,
                                       editable: false,
                                       viewable: true,
                                       hidedlg: true,
                                       hidden: true,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                   },

                                {
                                    name: 'DATE_RECEIVED',
                                    index: 'DATE_RECEIVED',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                {
                                    name: 'StaffName',
                                    index: 'StaffName',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                        {
                                            name: 'NOTES_RECEIVED',
                                            index: 'NOTES_RECEIVED',
                                            width: 300,
                                            editable: true,
                                            sortable: true,
                                            viewable: true,
                                            hidedlg: false,
                                            hidden: false,
                                            fixed: true,
                                            searchoptions: { sopt: ['cn', 'eq'] }

                                        },
                            {
                                name: 'StaffNameTo',
                                index: 'StaffNameTo',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }

                            },
                                         {
                                             name: 'OPINION',
                                             index: 'OPINION',
                                             width: 300,
                                             editable: true,
                                             sortable: true,
                                             viewable: true,
                                             hidedlg: false,
                                             hidden: false,
                                             fixed: true,
                                             searchoptions: { sopt: ['cn', 'eq'] }

                                         },
                     {
                         name: 'TITLE',
                         index: 'TITLE',
                         key: true,
                         editable: false,
                         viewable: true,
                         hidedlg: true,
                         hidden: false,
                         searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                     },
                         {
                             name: 'talabAttachmentsActions',
                             index: '',
                             sortable: false,
                             search: false,
                             formatter: function (cellvalue, options, rowObject) {
                                 var link = opinionDownload;
                                 link = link.replace("fs", rowObject.ID);
                                 link = link.replace("ft", rowObject.TITLE);
                                 if (rowObject.TITLE != null) {
                                     //ace-icon fa fa-pencil-square-o bigger-230
                                     return '<a class="btn btn-sm btn-success" href=\''
                                         + link
                                         + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                 } else {
                                     return 'لا يوجد مرفق';
                                 }
                             }
                         }
                            ],

                            editData: {
                                swSeq: swSeq
                            },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table: !is2 ? table : table1,
                        pager: !is2 ? pager : pager1,
                   
                        //table: table,
                        //pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addButton(!is2 ? table : table1, {
                        title: 'طباعة',
                        buttonicon: 'fa fa-print',
                        id: 'print' + BT.getNoHash(!is2 ? table : table1),
                        onClickButton: function () {
                            window.location.href = printOpinion + "/" + swSeq;

                        }
                    });

                    BT.Grid.addButton(!is2 ? table : table1,{
                        title: 'مرفقات إبداء الراي ',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getAttachCitizenO1',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(!is2 ? table : table1, this);
                            if (sRow == null) return;
                            BT.Dialog.Create(!is2 ? '#modalAttachOpinion' : '#modalAttachOpinionD', {
                                title: 'مرفقات إبداء الراي',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.OpinionAttach.init(
                                        opinionAttachUrl, downloadAttachOpinionUrl, sRow.ID, is2
                                    );
                                }
                            });
                        }
                    });

                    //BT.Grid.addSeparstor(table);


                },

                init = function (pGetOpinionUrl, pSwSeq, pIs2, pPrintOpinion, pOpinionDownload, pOpinionAttachUrl, pDownloadAttachOpinionUrl) {
                    if (
                        BT.isNullOrEmpty(pGetOpinionUrl)
                        || BT.isNullOrEmpty(pPrintOpinion)
                        || BT.isNullOrEmpty(pOpinionDownload)
                        || BT.isNullOrEmpty(pOpinionAttachUrl)
                        || BT.isNullOrEmpty(pDownloadAttachOpinionUrl)



                    ) {
                        BT.showErrorNotice('Em.Opinion.init: missing params');
                        return;
                    }

                    getOpinionUrl = pGetOpinionUrl;
                    swSeq = pSwSeq;
                    printOpinion = pPrintOpinion;
                    opinionDownload = pOpinionDownload;
                    opinionAttachUrl = pOpinionAttachUrl;
                    downloadAttachOpinionUrl = pDownloadAttachOpinionUrl;
                    if (!BT.isNullOrEmpty(pIs2))
                        is2 = pIs2;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),

        AllOpinionForServiceSus: (function () {
            var getOpinionUrl,
                swSeq,
                printOpinion,
               opinionDownload,
               opinionAttachUrl,
               downloadAttachOpinionUrl,
                table = '#AllOpinionForServiceSusTable',
                pager = '#AllOpinionForServiceSusTablePager',

                is2 = false,

                gridOpts = function () {
                    return {
                        GroupBy: [
                        { val: 'DATE_RECEIVED', txt: 'التاريخ' },
                            { val: 'StaffName', txt: 'من' },
                            { val: 'OPINION', txt: 'الآراء' },
                            { val: 'NOTES_RECEIVED', txt: 'الملاحظات' }

                        ],

                        Properties: {
                            caption: 'أخذ الرأي',
                            sortname: 'ID',
                            sortorder: 'asc',
                            url: getOpinionUrl,
                            postData: {
                                swSeq: swSeq
                            },

                            colNames: ['الكود ', 'كود العملية', 'التاريخ', 'من الموظف', 'الملاحظة المرسلة ', 'الى الموظف', 'الرأي', 'المرفق', ''],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                   {
                                       name: 'SW_REF',
                                       index: 'SW_REF',
                                       key: true,
                                       editable: false,
                                       viewable: true,
                                       hidedlg: true,
                                       hidden: true,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                   },

                                {
                                    name: 'DATE_RECEIVED',
                                    index: 'DATE_RECEIVED',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                {
                                    name: 'StaffName',
                                    index: 'StaffName',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                        {
                                            name: 'NOTES_RECEIVED',
                                            index: 'NOTES_RECEIVED',
                                            width: 300,
                                            editable: true,
                                            sortable: true,
                                            viewable: true,
                                            hidedlg: false,
                                            hidden: false,
                                            fixed: true,
                                            searchoptions: { sopt: ['cn', 'eq'] }

                                        },
                            {
                                name: 'StaffNameTo',
                                index: 'StaffNameTo',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }

                            },
                                         {
                                             name: 'OPINION',
                                             index: 'OPINION',
                                             width: 300,
                                             editable: true,
                                             sortable: true,
                                             viewable: true,
                                             hidedlg: false,
                                             hidden: false,
                                             fixed: true,
                                             searchoptions: { sopt: ['cn', 'eq'] }

                                         },
                     {
                         name: 'TITLE',
                         index: 'TITLE',
                         key: true,
                         editable: false,
                         viewable: true,
                         hidedlg: true,
                         hidden: false,
                         searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                     },
                         {
                             name: 'talabAttachmentsActions',
                             index: '',
                             sortable: false,
                             search: false,
                             formatter: function (cellvalue, options, rowObject) {
                                 var link = opinionDownload;
                                 link = link.replace("fs", rowObject.ID);
                                 link = link.replace("ft", rowObject.TITLE);
                                 if (rowObject.TITLE != null) {
                                     //ace-icon fa fa-pencil-square-o bigger-230
                                     return '<a class="btn btn-sm btn-success" href=\''
                                         + link
                                         + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                 } else {
                                     return 'لا يوجد مرفق';
                                 }
                             }
                         }
                            ],

                            editData: {
                                swSeq: swSeq
                            },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table:  table,
                        pager: pager ,

                        //table: table,
                        //pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addButton( table, {
                        title: 'طباعة',
                        buttonicon: 'fa fa-print',
                        id: 'print' + BT.getNoHash( table),
                        onClickButton: function () {
                            window.location.href = printOpinion + "/" + swSeq;

                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'مرفقات إبداء الراي ',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getAttachCitizenO1',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create( '#modalAttachOpinionSus' , {
                                title: 'مرفقات إبداء الراي',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.OpinionAttachSus.init(
                                        opinionAttachUrl, downloadAttachOpinionUrl, sRow.ID, is2
                                    );
                                }
                            });
                        }
                    });


                },

                init = function (pGetOpinionUrl, pSwSeq, pIs2, pPrintOpinion, pOpinionDownload, pOpinionAttachUrl, pDownloadAttachOpinionUrl) {
                    if (
                        BT.isNullOrEmpty(pGetOpinionUrl)
                        || BT.isNullOrEmpty(pPrintOpinion)
                        || BT.isNullOrEmpty(pOpinionDownload)
                        || BT.isNullOrEmpty(pOpinionAttachUrl)
                        || BT.isNullOrEmpty(pDownloadAttachOpinionUrl)



                    ) {
                        BT.showErrorNotice('Em.Opinion.init: missing params');
                        return;
                    }

                    getOpinionUrl = pGetOpinionUrl;
                    swSeq = pSwSeq;
                    printOpinion = pPrintOpinion;
                    opinionDownload = pOpinionDownload;
                    opinionAttachUrl = pOpinionAttachUrl;
                    downloadAttachOpinionUrl = pDownloadAttachOpinionUrl;
                    if (!BT.isNullOrEmpty(pIs2))
                        is2 = pIs2;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),


        AnotherAttachCitizen: (function () {
            var getAttachUrl,
                formId,
                status,
                table = '#AnotherAttachCitizenTable',
                pager = '#AnotherAttachCitizenTablePager',
                filesUrl,
               addCitizenAttachUrl,
                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'ID', txt: 'الكود' },
                            { val: 'ATTACH_NAME', txt: 'العنوان' }
                        ],

                        Properties: {
                            caption: 'المرفقات',
                            sortname: 'ATTACH_NAME',
                            sortorder: 'asc',
                            url: getAttachUrl,
                            postData: {
                                idForm: formId
                            },

                            colNames: [
                                'الكود', 'العنوان', 'التاريخ', ''],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                {
                                    name: 'ATTACH_NAME',
                                    index: 'ATTACH_NAME',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                   {
                                       name: 'DATE_ATTACH',
                                       index: 'DATE_ATTACH',
                                       width: 150,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       sorttype: 'date',
                                       formatter: 'date',
                                       formatoptions: { newformat: 'd/m/Y' },
                                       datefmt: 'd-M-Y',
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                       searchrules: { date: true },
                                   },
                           
                                {
                                    name: 'talabAttachmentsActions',
                                    index: '',
                                    sortable: false,
                                    search: false,
                                    formatter: function (cellvalue, options, rowObject) {
                                        var link = filesUrl;
                                        link = link.replace("fs", rowObject.ID);
                                        link = link.replace("ft", rowObject.ATTACH_NAME);
                                        //ace-icon fa fa-pencil-square-o bigger-230
                                        return '<a class="btn btn-sm btn-success" href=\''
                                            + link
                                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                    }
                                }
                            ],

                            editData: {
                                idForm: formId
                            },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initPublicRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);
           
                    if (status == "بانتظار مرفقات من المواطن") {
                        BT.Grid.addButton(table, {
                            title: 'إضافة',
                            buttonicon: 'fa fa-align-justify',
                            id: 'goToSectionsBtn' + BT.getNoHash(table),
                            onClickButton: function () {
                                BT.Dialog.Create('#modalAttachCitizen', {
                                    title: 'إضافة مرفق',
                                    onOpenFn: function () {
                                        // $("#idForm").val(formId);
                                    },
                                    addButtons: [
                                        {
                                            id: 'btnSaveF',
                                            text: 'حفظ',
                                            'class': 'btn btn-sm btn-success',
                                            click: function () {
                                                //var formData = $(this).serialize();
                                                //formData.append('file', $('input[type=file]')[0].files[0]);                                                            //   $("#forward").submit(function (e) {
                                                $('#modalAttachCitizen' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                $('#modalAttachCitizen' + '~.ui-dialog-buttonpane #modalAttachCitizen:first').prop('disabled', true);
                                                var lnk = addCitizenAttachUrl;
                                                //$("idFormC").val(formId);
                                                $("#addAttach").ajaxForm({
                                                    type: "POST",
                                                    url: lnk,
                                                    data: {
                                                        idForm: formId,
                                                    },
                                                    //data: $("#addAttach").serialize(),
                                                    mimeType: "multipart/form-data",
                                                    //contentType: false,
                                                    //cache: false,
                                                    // processData: false,
                                                    success: (function () {

                                                        BT.Grid.reload(table);
                                                        BT.Dialog.hide('#modalAttachCitizen');
                                                        //window.location.href = pageUrl;


                                                        // Optionally alert the user of success here...
                                                    })
                                                }).submit();
                                            }
                                        }
                                    ]
                                });
                            }
                        });
                    }

                },

                init = function (pGetAttachUrl, pFilesUrl, pAddCitizenAttachUrl, pReqId, pStatus) {
                    if (
                        BT.isNullOrEmpty(pGetAttachUrl)
                            || BT.isNullOrEmpty(pFilesUrl)
                            || BT.isNullOrEmpty(pAddCitizenAttachUrl)
                    ) {
                        BT.showErrorNotice('Em.GetAttach.init: missing params');
                        return;
                    }

                    getAttachUrl = pGetAttachUrl;
                    filesUrl = pFilesUrl;
                    addCitizenAttachUrl = pAddCitizenAttachUrl;
                    formId = pReqId;
                    status = pStatus;
                    //$("#idForm").val(pReqId);

                    initPublicRequest();
                };

            return {
                init: init
            };
        })(),
        AllOpinionService: (function () {
            var getMsgUrl,
                saveOpinionUrl,
                pageUrl,
                workFlowUrl,
                atachUrl,
                attachOpinionUrl,
                staffId,
                getServiceForm,
                opinionServiceMUrl,
                isOpinionUrl,
                 isManager,
                 id,
                table = '#AllOpinionServiceTable',
                pager = '#AllOpinionServiceTablePager',
                opinion1 = '#opinion1',
                gridOpts = function () {
                    return {
                        GroupBy: [
                         { val: 'StaffName', txt: 'من الموظف' },
                            { val: 'NOTES_RECEIVED', txt: 'الملاحظات' }

                        ],

                        Properties: {
                            caption: 'إبداء الرأي ',
                            sortname: 'DATE_RECEIVED',
                            sortorder: 'desc',
                            url: getMsgUrl,
                            postData: {
                                staffId: staffId
                            },

                            colNames: ['الكود ', 'كود العملية', 'رقم الطلب', 'التاريخ', 'من الموظف', 'الملاحظة المستلمة', 'الرأي', 'مقدم الطلب', 'المرفق', ''],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                   {
                                       name: 'SW_REF',
                                       index: 'SW_REF',
                                       //key: true,
                                       editable: false,
                                       viewable: true,
                                       hidedlg: true,
                                       hidden: true,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                   },
                                           {
                                               name: 'ServiceForm',
                                               index: 'ServiceForm',
                                               //key: true,
                                               editable: false,
                                               viewable: true,
                                               hidedlg: true,
                                               hidden: false,
                                               searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                           },

                                {
                                    name: 'DATE_RECEIVED',
                                    index: 'DATE_RECEIVED',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                {
                                    name: 'StaffName',
                                    index: 'StaffName',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                        {
                            name: 'NOTES_RECEIVED',
                            index: 'NOTES_RECEIVED',
                            width: 300,
                            editable: true,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                            searchoptions: { sopt: ['cn', 'eq'] }

                        },
                            {
                                name: 'OPINION',
                                index: 'OPINION',
                                width: 300,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }

                            },
                               {
                                   name: 'SatakeHolder',
                                   index: 'SatakeHolder',
                                   width: 300,
                                   editable: true,
                                   sortable: true,
                                   viewable: true,
                                   hidedlg: false,
                                   hidden: false,
                                   fixed: true,
                                   searchoptions: { sopt: ['cn', 'eq'] }

                               },
                              {
                                  name: 'TITLE',
                                  index: 'TITLE',
                                  width: 150,
                                  editable: true,
                                  sortable: true,
                                  viewable: true,
                                  hidedlg: false,
                                  hidden: false,
                                  fixed: true,
                                  searchoptions: { sopt: ['cn', 'eq'] }

                              },
                                      {
                                          name: 'talabAttachmentsActions',
                                          index: '',
                                          sortable: false,
                                          search: false,
                                          formatter: function (cellvalue, options, rowObject) {
                                              var link = attachOpinionUrl;
                                              link = link.replace("fs", rowObject.ID);
                                              link = link.replace("ft", rowObject.TITLE);
                                              if (rowObject.TITLE != null) {
                                                  //ace-icon fa fa-pencil-square-o bigger-230
                                                  return '<a class="btn btn-sm btn-success" href=\''
                                                      + link
                                                      + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                              } else {
                                                  return 'لا يوجد مرفق';
                                              }
                                          }
                                      }

                            ],

                            editData: {
                                staffId: staffId
                            },

                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                $(this).attr("aria-selected", "true");
                            },
                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.ID;

                         
                                if (aa == id) {

                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };
                               
                                }
                           
                                return '';
                            },
                            ondblClickRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk = getServiceForm;
                                openWindowWithPost(lnk, { seq: sRow.SW_REF, idForm: sRow.ServiceForm, type: "opinion", routeId: null, opinionId: sRow.ID });
                                //lnk = lnk.replace("__seq__", sRow.SW_REF);
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("__id__", sRow.ServiceForm);
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("_r_", null);
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("_o_", sRow.ID);
                                //window.open(lnk, '_blank');
                            },
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        //table: !is2 ? table : table2,
                        //pager: !is2 ? pager : pager2,
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addButton(table, {
                        title: 'إبداء رأي',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getOpinionService' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                url: isOpinionUrl,
                                data: {
                                    id: sRow.ID,

                                },
                                success: (function(data44) {
                                    if (!data44.done) {
                                        BT.Dialog.Create('#modalOpinionService1', {
                                            title: 'إبداء رأي',
                                            onOpenFn: function() {
                                            },
                                            addButtons: [
                                                {
                                                    id: 'btnUnEndProGrp',
                                                    text: 'إضافة',
                                                    'class': 'btn btn-sm btn-success',
                                                    click: function() {
                                                        //var msg = msgReplay.html();
                                                        $('#modalOpinionService1' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                        $('#modalOpinionService1' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                                   

                                                        //BT.Dialog.Create('#modalOpinionService1', {
                                                        //    title: 'إبداء رأي',
                                                        //    onOpenFn: function() {
                                                        //    },
                                                        //    addButtons: [
                                                        //        {
                                                        //            id: 'btnOpinionMProGrp',
                                                        //            text: 'إرسال',
                                                        //            'class': 'btn btn-sm btn-success',
                                                        //            click: function() {
                                                        $("#opinionService2").ajaxForm({
                                                            type: "POST",
                                                            url: saveOpinionUrl,
                                                            data: {
                                                                id: sRow.ID,
                                                                text: opinion1.val(),
                                                                idSw: sRow.SW_REF,
                                                                staffId: staffId
                                                            },
                                                            success: (function(data44) {
                                                                if (data44.done == "OK") {

                                                                    BT.showSuccessNotice();
                                                                    BT.Dialog.hide('#modalOpinionService1');
                                                                    BT.Grid.reload(table);
                                                                } else {
                                                                    BT.showErrorNotice(data44.msg);
                                                                    $('#modalOpinionService1' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);

                                                                }


                                                            })
                                                        }).submit();
                                                        //            }
                                                        //        }
                                                        //    ]
                                                        //});
                                                    }
                                                }
                                            ]
                                        });
                                    } else {
                                        BT.showErrorNotice("تم ابداء الراي مسبقا");
                                    }
                                })
                            });
                     
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'سير العمل',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getNotesWorkFlowService' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalNoteWorkFlowService', {
                                title: 'سير العمل',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.NotesWorkFlowService.init(
                                        workFlowUrl, sRow.ServiceForm, atachUrl
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'مشاهدة',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getServiceForm' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = getServiceForm;
                            openWindowWithPost(lnk, { seq: sRow.SW_REF, idForm: sRow.ServiceForm, type: "opinion", routeId: null, opinionId: sRow.ID });

                            //lnk = lnk.replace("__seq__", sRow.SW_REF);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("__id__", sRow.ServiceForm);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("_r_", null);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("_o_", sRow.ID);

                            //window.open(lnk, '_blank');
                        }
                    });

                    if (isManager==="True") {

                        BT.Grid.addButton(table, {
                            title: 'أخذرأي',
                            buttonicon: 'fa fa-align-justify',
                            id: 'getNotesWorkFlowServiceM' + BT.getNoHash(table),
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk4 = opinionServiceMUrl;
                                BT.Dialog.Create('#modalOpinionServiceM', {
                                    title: 'أخذرأي',
                                    onOpenFn: function () {
                                    },
                                    addButtons: [
                                        {
                                            id: 'btnOpinionMProGrp',
                                            text: 'إرسال',
                                            'class': 'btn btn-sm btn-success',
                                            click: function () {
                                                $("#opinionServiceM").ajaxForm({
                                                    type: "POST",
                                                    url: lnk4,
                                                    data: {
                                                        id: sRow.SW_REF,
                                                        idService: 0,
                                                        text: $("#opinionM").val(),
                                                        emp: $("#empM").val()
                                                    },
                                                    success: (function (data44) {
                                                        if (data44.done) {

                                                            BT.showSuccessNotice();
                                                            BT.Dialog.hide('#modalOpinionServiceM');
                                                        } else {
                                                            BT.showErrorNotice(data44.msg);
                                                            $('#modalOpinionServiceM' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);

                                                        }


                                                    })
                                                }).submit();
                                                //BT.Dialog.ajaxPOST('#modalOpinionServiceM',
                                                //    lnk4,
                                                //    {
                                                //        id: sRow.SW_REF,
                                                //        idService: 0,
                                                //        text: $("#opinionM").val(),
                                                //        emp: $("#empM").val()
                                                //    },
                                                //    false,
                                                //    function (data5) {
                                                //        if (data5.done) {

                                                //            BT.showSuccessNotice();
                                                //            BT.Grid.reload(table);
                                                //            BT.Dialog.hide('#modalOpinionServiceM');
                                                //            window.location.href = pageUrl;
                                                //        } else {
                                                //            BT.showErrorNotice(data5.msg);
                                                //        }

                                                //    }
                                                //);

                                            }
                                        }
                                    ]
                                });
                      
                            }
                        });
                    }
               

                },

                init = function (pGetMsgUrl, pSaveOpinionUrl, pPageUrl, pWorkFlowUrl, pGetServiceForm, pAtachUrl, pOpinionServiceMUrl, pAttachOpinionUrl, pIsOpinionUrl, pStaffId, pIsManager, pId) {
                    if (
                        BT.isNullOrEmpty(pGetMsgUrl)
                       || BT.isNullOrEmpty(pSaveOpinionUrl)
                       || BT.isNullOrEmpty(pPageUrl)
                       || BT.isNullOrEmpty(pWorkFlowUrl)
                       || BT.isNullOrEmpty(pGetServiceForm)
                       || BT.isNullOrEmpty(pAtachUrl)
                       || BT.isNullOrEmpty(pOpinionServiceMUrl)
                       || BT.isNullOrEmpty(pAttachOpinionUrl)
                       || BT.isNullOrEmpty(pIsOpinionUrl)

                    ) {
                        BT.showErrorNotice('Em.Opinion.init: missing params');
                        return;
                    }

                    getMsgUrl = pGetMsgUrl;
                    saveOpinionUrl = pSaveOpinionUrl;
                    pageUrl = pPageUrl;
                    workFlowUrl = pWorkFlowUrl;
                    getServiceForm = pGetServiceForm;
                    staffId = pStaffId;
                    atachUrl = pAtachUrl;
                    opinionServiceMUrl = pOpinionServiceMUrl;
                    attachOpinionUrl = pAttachOpinionUrl;
                    isOpinionUrl = pIsOpinionUrl;
                    isManager = pIsManager;
                    opinion1 = $(opinion1);
                    id = pId;
                    //if (!BT.isNullOrEmpty(pIs2))
                    //    is2 = pIs2;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),

        AllOpinionServiceP: (function () {
            var getMsgUrl,
                saveOpinionUrl,
                pageUrl,
                workFlowUrl,
                atachUrl,
                staffId,
                getServiceForm,
                opinionServiceMUrl,
                 isManager,
                 idForm,
                 downloadAttachOpinionUrl,
                table = '#AllOpinionServicePTable',
                pager = '#AllOpinionServicePTablePager',
                opinion1 = '#opinion1',
                gridOpts = function () {
                    return {
                        GroupBy: [
                         { val: 'StaffName', txt: 'من الموظف' },
                            { val: 'NOTES_RECEIVED', txt: 'الملاحظات' }

                        ],

                        Properties: {
                            caption: 'الاراء السابقة ',
                            sortname: 'DATE_RECEIVED',
                            sortorder: 'desc',
                            url: getMsgUrl,
                            postData: {
                                staffId: staffId
                            },

                            colNames: ['الكود ', 'كود العملية', 'رقم الطلب', 'التاريخ', 'من الموظف', 'الملاحظة المستلمة', 'الرأي', 'مقدم الطلب', 'المرفق', ''],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                   {
                                       name: 'SW_REF',
                                       index: 'SW_REF',
                                       //key: true,
                                       editable: false,
                                       viewable: true,
                                       hidedlg: true,
                                       hidden: true,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                   },
                                           {
                                               name: 'ServiceForm',
                                               index: 'ServiceForm',
                                               //key: true,
                                               editable: false,
                                               viewable: true,
                                               hidedlg: true,
                                               hidden: false,
                                               searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                           },

                                {
                                    name: 'DATE_RECEIVED',
                                    index: 'DATE_RECEIVED',
                                    width: 120,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }
                                },
                                {
                                    name: 'StaffName',
                                    index: 'StaffName',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                        {
                            name: 'NOTES_RECEIVED',
                            index: 'NOTES_RECEIVED',
                            width: 300,
                            editable: true,
                            sortable: true,
                            viewable: true,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                            searchoptions: { sopt: ['cn', 'eq'] }

                        },
                            {
                                name: 'OPINION',
                                index: 'OPINION',
                                width: 300,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }

                            },
                              {
                                  name: 'SatakeHolder',
                                  index: 'SatakeHolder',
                                  width: 300,
                                  editable: true,
                                  sortable: true,
                                  viewable: true,
                                  hidedlg: false,
                                  hidden: false,
                                  fixed: true,
                                  searchoptions: { sopt: ['cn', 'eq'] }

                              },
                              {
                                  name: 'TITLE',
                                  index: 'TITLE',
                                  width: 150,
                                  editable: true,
                                  sortable: true,
                                  viewable: true,
                                  hidedlg: false,
                                  hidden: false,
                                  fixed: true,
                                  searchoptions: { sopt: ['cn', 'eq'] }

                              },
                                      {
                                          name: 'talabAttachmentsActions',
                                          index: '',
                                          sortable: false,
                                          search: false,
                                          formatter: function (cellvalue, options, rowObject) {
                                              var link = downloadAttachOpinionUrl;
                                              link = link.replace("fs", rowObject.ID);
                                              link = link.replace("ft", rowObject.TITLE);
                                              if (rowObject.TITLE != null) {
                                                  //ace-icon fa fa-pencil-square-o bigger-230
                                                  return '<a class="btn btn-sm btn-success" href=\''
                                                      + link
                                                      + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                              } else {
                                                  return 'لا يوجد مرفق';
                                              }
                                          }
                                      }

                            ],

                            editData: {
                                staffId: staffId
                            },

                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                $(this).attr("aria-selected", "true");
                            },
                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.ServiceForm;


                                if (aa == idForm) {


                                    $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                    $("#" + rowId).click();

                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };

                                }
                          
                                return '';
                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        //table: !is2 ? table : table2,
                        //pager: !is2 ? pager : pager2,
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    //BT.Grid.addButton(table, {
                    //    title: 'إبداء رأي',
                    //    buttonicon: 'fa fa-align-justify',
                    //    id: 'getOpinionService' + BT.getNoHash(table),
                    //    onClickButton: function () {
                    //        var sRow = BT.Grid.getSelectedRow(table, this);
                    //        if (sRow == null) return;
                    //        BT.Dialog.Create('#modalOpinionService1', {
                    //            title: 'إبداء رأي',
                    //            onOpenFn: function () {
                    //            },
                    //            addButtons: [
                    //         {
                    //             id: 'btnUnEndProGrp',
                    //             text: 'إضافة',
                    //             'class': 'btn btn-sm btn-success',
                    //             click: function () {
                    //                 //var msg = msgReplay.html();
                    //                 BT.Dialog.ajaxPOST('#modalOpinionService1',
                    //                     saveOpinionUrl,
                    //                     {
                    //                         id: sRow.ID,
                    //                         text: opinion1.val(),
                    //                         idSw: sRow.SW_REF,
                    //                         staffId: staffId
                    //                     },
                    //               false,
                    //               function (data) {
                    //                   if (data.done == "OK") {
                    //                       BT.showSuccessNotice();
                    //                       BT.Grid.reload(table);
                    //                       BT.Dialog.hide('#modalOpinionService1');
                    //                       window.location.href = pageUrl;
                    //                   } else {
                    //                       BT.showErrorNotice(data.done);
                    //                   }


                    //               }
                    //           );
                    //             }
                    //         }
                    //            ]
                    //        });
                    //    }
                    //});

                    //BT.Grid.addButton(table, {
                    //    title: 'سير العمل',
                    //    buttonicon: 'fa fa-align-justify',
                    //    id: 'getNotesWorkFlowService' + BT.getNoHash(table),
                    //    onClickButton: function () {
                    //        var sRow = BT.Grid.getSelectedRow(table, this);
                    //        if (sRow == null) return;
                    //        BT.Dialog.Create('#modalNoteWorkFlowService', {
                    //            title: 'سير العمل',
                    //            width: 'max',
                    //            onOpenFn: function () {
                    //                Em.NotesWorkFlowService.init(
                    //                    workFlowUrl, sRow.ServiceForm, atachUrl
                    //                );
                    //            }
                    //        });
                    //    }
                    //});

                    BT.Grid.addButton(table, {
                        title: 'مشاهدة',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getServiceForm' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = getServiceForm;
                            openWindowWithPost(lnk, { seq: sRow.SW_REF, idForm: sRow.ServiceForm,type : "opinionP" });
                            //lnk = lnk.replace("__seq__", sRow.SW_REF);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("__id__", sRow.ServiceForm);
                            //window.open(lnk, '_blank');
                        }
                    });
                },

                init = function (pGetMsgUrl, pSaveOpinionUrl, pPageUrl, pWorkFlowUrl, pGetServiceForm, pAtachUrl, pOpinionServiceMUrl, pDownloadAttachOpinionUrl, pStaffId, pIsManager, pIdForm) {
                    if (
                        BT.isNullOrEmpty(pGetMsgUrl)
                       || BT.isNullOrEmpty(pSaveOpinionUrl)
                       || BT.isNullOrEmpty(pPageUrl)
                       || BT.isNullOrEmpty(pWorkFlowUrl)
                       || BT.isNullOrEmpty(pGetServiceForm)
                       || BT.isNullOrEmpty(pAtachUrl)
                       || BT.isNullOrEmpty(pOpinionServiceMUrl)
                       || BT.isNullOrEmpty(pDownloadAttachOpinionUrl)

                    ) {
                        BT.showErrorNotice('Em.Opinion.init: missing params');
                        return;
                    }

                    getMsgUrl = pGetMsgUrl;
                    saveOpinionUrl = pSaveOpinionUrl;
                    pageUrl = pPageUrl;
                    workFlowUrl = pWorkFlowUrl;
                    getServiceForm = pGetServiceForm;
                    staffId = pStaffId;
                    atachUrl = pAtachUrl;
                    opinionServiceMUrl = pOpinionServiceMUrl;
                    downloadAttachOpinionUrl = pDownloadAttachOpinionUrl;
                    isManager = pIsManager;
                    idForm = pIdForm;
                    opinion1 = $(opinion1);

                    //if (!BT.isNullOrEmpty(pIs2))
                    //    is2 = pIs2;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),


        AllServiceDone: (function () {
            var getServicetDoneUrl,
                getServiceForm,
                getPermission,
                getPermissionUser,
                forwardServiceUrl,
                sendMessageUrl,
                dismissUrl,
                replayServiceUrl,
                opinionServiceUrl,
                pageUrl,
                notesWorkFlowUrl,
                msgUrl,
                opinionForServiceUrl,
                textMesgUrl,
                id,
                attachUrl,
                idService,
                nameStaff,
                getTempUrl,
                attachFormUrl,
                reportUrl,
                endServiceUrl,
                addFianlAttachUrl,
                filesUrl,
                addAttachUrl,
                attachCitizenUrl,
                attachDownloadUrl,
                opinionUrl,
                receivedDocUrl,
                idForm,
                opinionDownLoadUrl,
                serchNF1,
                opinionAttachUrl,
                opinionAttachDownloadUrl,
                cardUrl,
                serviceRef = "#ServiceRef",
                 notes = "#notesStaff",
                 message = "#Message",
                 textSub = "#textSub",
                 msgDismiss = "#msgDismiss",
                 msgReplay = "#msgReplay",
                 opinion = "#opinion",
                 staff = "#emp",
                 msgEnd = "#MessageEnd",
            //staffRef = "#StaffRef",
            // attachForm = "#attachForm",
            table = '#AllServiceDoneTable',
            pager = '#AllServiceDoneTablePager',
            gridOpts = function () {
                return {
                    GroupBy: [
                        //{ val: 'Status', txt: 'الحالة' },
                        //{ val: 'SwSeq', txt: 'الكود' },
                        //{ val: 'ServiceFormRef', txt: ' كود الفورم' },
                        //{ val: 'DateRead', txt: 'التاريخ' },
                        //{ val: 'NameCitizen', txt: ' اسم المواطن' },
                        //{ val: 'ServiceRef', txt: ' كود الخدمة' },
                        //{ val: 'NameService', txt: ' اسم الخدمة' },
                        //{ val: 'StaffRef', txt: ' كود الموظف' },
                        //{ val: 'NameStaff', txt: ' اسم الموظف' },
                        //{ val: 'Messages', txt: ' الرسائل' },
                        //{ val: 'Opinions', txt: ' الآراء' }
                          { val: 'FullNameCitizen', txt: ' اسم المواطن' },
                        { val: 'NameService', txt: ' اسم الخدمة' },
                        { val: 'NameStaff', txt: ' اسم الموظف' },

                    ],

                    //EditForms: {
                    //    search: { doShow: false },
                    //    view: { doShow: false }
                    //},

                    Properties: {
                        caption: "الخدمات السابقة",
                        sortname: 'DATE_RECEIVED',
                        sortorder: "desc",
                        url: getServicetDoneUrl,
                        // editurl: saveServiceFieldsUrl,
                        postData: {
                            idStaff: id,
                            hod1: $("#s2id_hod1").text().trim(), hay1: $("#s2id_hay1").text().trim(), land1: $("#s2id_land1").text().trim()
                        },
                        colNames: [
                            'مقدمة من الانترنت', ' اسم المواطن', 'اسم الخدمة', 'تاريخ الاستلام', 'القطعة', 'الحي', 'الحوض', 'الحالة', 'الكود', 'رقم الطلب', 'تاريخ القراءة', 'كود الخدمة', ' كود الموظف'
                            , ' اسم الموظف', 'حالة الطلب', 'الحالة', 'مرفقات إضافية ','','تم الاستلام','اسم المستلم','رقم الطابع'
                        ],
                        colModel: [
                             {
                                 name: 'IS_INTERNET',
                                 index: 'IS_INTERNET',
                                 width: 80,
                                 editable: true,
                                 sortable: true,
                                 viewable: true,
                                 hidedlg: false,
                                 hidden: false,
                                 fixed: true,
                                 searchoptions: { sopt: ['cn', 'eq'] }
                             },
                                {
                                    name: 'FullNameCitizen',
                                    index: 'FullNameCitizen',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                {
                                    name: 'NameService',
                                    index: 'NameService',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                     {
                                         name: 'DATE_RECEIVED',
                                         index: 'DATE_RECEIVED',
                                         width: 120,
                                         editable: true,
                                         sortable: true,
                                         viewable: true,
                                         hidedlg: false,
                                         hidden: false,
                                         fixed: true,
                                         sorttype: 'date',
                                         formatter: 'date',
                                         formatoptions: { newformat: 'd/m/Y' },
                                         datefmt: 'd-M-Y',
                                         searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                         searchrules: { date: true }

                                     },
                        
                                  {
                                      name: 'LandName',
                                      index: 'LandName',
                                      width: 150,
                                      editable: false,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                      {
                                          name: 'HayName',
                                          index: 'HayName',
                                          width: 150,
                                          editable: false,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }
                                      },
                                           {
                                               name: 'HodName',
                                               index: 'HodName',
                                               width: 150,
                                               editable: false,
                                               sortable: true,
                                               viewable: true,
                                               hidedlg: false,
                                               hidden: false,
                                               fixed: true,
                                               searchoptions: { sopt: ['cn', 'eq'] }
                                           },
                            {
                                name: 'Status',
                                index: 'Status',
                                width: 100,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'ID',
                                index: 'ID',
                                key: true,
                                editable: false,
                                viewable: false,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                            {
                                name: 'SERVICE_FORM_SEQ',
                                index: 'SERVICE_FORM_SEQ',
                                width: 80,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                            },
                           
                            {
                                name: 'DATE_READ',
                                index: 'DATE_READ',
                                width: 120,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                sorttype: 'date',
                                formatter: 'date',
                                formatoptions: { newformat: 'd/m/Y' },
                                datefmt: 'd-M-Y',
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                searchrules: { date: true }

                            },
                    
                            {
                                name: 'ServiceRef',
                                index: 'ServiceRef',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                        
                            {
                                name: 'STAFF_REF',
                                index: 'STAFF_REF',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'NameStaff',
                                index: 'NameStaff',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                {
                                    name: 'StatusForm',
                                    index: 'StatusForm',
                                    width: 100,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                            {
                                name: 'ACTION_TAKEN',
                                index: 'ACTION_TAKEN',
                                width: 60,
                                editable: true,
                                sortable: true,
                                viewable: false,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                            },
                                  {
                                      name: 'NumberAttachCitizen',
                                      index: 'NumberAttachCitizen',
                                      width: 80,
                                      editable: false,
                                      viewable: false,
                                      hidedlg: true,
                                      hidden: false,
                                      searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                  },
                                  {
                                      name: 'ActionTakenName',
                                      index: 'ActionTakenName',
                                      width: 100,
                                      editable: true,
                                      sortable: true,
                                      viewable: false,
                                      hidedlg: false,
                                      hidden: true,
                                      fixed: true,
                                  },
                        {
                            name: 'RECEIVED',
                            index: 'RECEIVED',
                            width: 80,
                            editable: true,
                            sortable: true,
                            viewable: false,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                        },
                    {
                        name: 'WhoRECEIVED',
                        index: 'WhoRECEIVED',
                        width: 100,
                        editable: true,
                        sortable: true,
                        viewable: false,
                        hidedlg: false,
                        hidden: false,
                        fixed: true,
                    },
                
                        {
                            name: 'StickerNo',
                            index: 'StickerNo',
                            width: 100,
                            editable: true,
                            sortable: true,
                            viewable: false,
                            hidedlg: false,
                            hidden: false,
                            fixed: true,
                        }      
                        ],
                        editData: {
                            idStaff: id,
                            hod1: $("#s2id_hod1").text().trim(), hay1: $("#s2id_hay1").text().trim(), land1: $("#s2id_land1").text().trim()

                        },

                        onSelectRow: function (rowId) {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $(this).attr("aria-selected", "true");
                            $("#getAttachCitizenD").hide();
                            $("#receivedItem1").hide();
                            if (sRow.NumberAttachCitizen != 0) {
                                $("#getAttachCitizenD").show();
                            }
                            $("#getAttachServiceDAllServiceDoneTable").hide();
                      
                            if (sRow.ACTION_TAKEN == "7") {
                     
                                $("#getAttachServiceDAllServiceDoneTable").show();

                            }

                            $("#receivedItem1").hide();
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            if (sRow.ActionTakenName == "منتهي") {
                        
                                $("#receivedItem1").show();

                            }

                        },
                        rowattr: function (rowData, currentObj, rowId) {
                            var aa = rowData.SERVICE_FORM_SEQ;


                            if (aa == idForm) {


                                $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                $("#" + rowId).click();

                                return {
                                    "aria-selected": 'true',
                                    "class": "ui-state-highlight selectedClass"
                                };

                            }

                            if (rowData.Status === 'جديد') {
                                return { "class": 'newRecBold' };
                            }
                            return '';
                        },
                        ondblClickRow: function (rowId) {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = getServiceForm;
                            openWindowWithPost(lnk, { seq: sRow.ID, idForm: sRow.SERVICE_FORM_SEQ,type : "oldS" });
                            //lnk = lnk.replace("__seq__", sRow.ID);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                            //lnk = lnk.replace("&amp;", "&");
                            //window.open(lnk, '_blank');
                        },
                    }
                };
            },

            initServiceDoneGrid = function () {
                // var sRow = BT.Grid.getSelectedRow(table, this);
                serchNF1.off('click').on('click', function () {
                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });


       

                    BT.Grid.addButton(table, {
                        title: 'مشاهدة',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getServiceFormD' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = getServiceForm;
                            openWindowWithPost(lnk, { seq: sRow.ID, idForm: sRow.SERVICE_FORM_SEQ, type: "oldS" });

                            //lnk = lnk.replace("__seq__", sRow.ID);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                            //lnk = lnk.replace("&amp;", "&");
                            //window.open(lnk, '_blank');
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'سير العمل',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getNotesWorkFlowServiceD' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalNoteWorkFlowServiceD', {
                                title: 'سير العمل',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.NotesWorkFlowServiceDone.init(
                                        notesWorkFlowUrl, sRow.SERVICE_FORM_SEQ, attachUrl
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'طباعة بطاقة المراجعة',
                        buttonicon: 'fa fa-print blue',
                        id: 'printCard',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = cardUrl;
                            openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, User: id });

                    

                        }
                    });
                    BT.Grid.addSeparstor(table);

                    BT.Grid.addButton(table, {
                        title: 'الرسائل',
                        buttonicon: 'fa fa-envelope blue',
                        id: 'getMsgServiceD' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            //var lnk = textMesgUrl;
                            //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                            //lnk = lnk.replace("__id__", sRow.ID);
                            BT.Dialog.Create('#modalMsgServiceD', {
                                title: 'الرسائل',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.MsgService.init(
                                        msgUrl, sRow.ID, textMesgUrl, true, "#modalTextFullMsgD", "#fullMsgD"
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'الآراء',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getOpinionServiceD' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalAllOpinionForServiceD', {
                                title: 'الآراء',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.AllOpinionForService.init(
                                        opinionForServiceUrl, sRow.ID, true, opinionUrl,opinionDownLoadUrl,opinionAttachUrl,
                    opinionAttachDownloadUrl
                                    );
                                }
                            });
                        }
                    });
                    BT.Grid.addButton(table, {
                        title: 'مرفقات إضافية ',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getAttachCitizenD',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalAnotherAttachCitizenD', {
                                title: 'مرفقات إضافية للطلب من المواطن',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.AnotherAttachCitizenD.init(
                                        attachCitizenUrl, attachDownloadUrl, sRow.SERVICE_FORM_SEQ
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'تم الاستلام',
                        buttonicon: 'fa fa-align-justify',
                        id: 'receivedItem1',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (BT.isNullOrEmpty(sRow)) return;
                            BT.Dialog.Create('#modalReciveDoc', {
                                title: 'تم الاستلام',
                                onOpenFn: function () {
                                },
                                addButtons: [
                                    {
                                        //id: 'btnUnEndProGrp',
                                        id: 'btnSave',
                                        text: 'حفظ',
                                        'class': 'btn btn-sm btn-success',
                                        click: function () {
                                  
                                            $('#modalReciveDoc' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                            $('#modalReciveDoc' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);

                                            $.ajax({
                                                type: "POST",
                                                url: receivedDocUrl,
                                                data: {
                                                    idForm: sRow.SERVICE_FORM_SEQ,
                                                    NameReceiver: $("#reciverName").val(),
                                                    stickersNo1: $("#stickersNo1").val(),
                                                },
                                                //mimeType: "multipart/form-data",
                                                //contentType: false,
                                                //cache: false,
                                                //processData: false,
                                                success: (function (data) {
                                                    if (data.done) {
                                                        BT.showSuccessNotice();

                                                        BT.Dialog.hide('#modalReciveDoc');
                                                        BT.Grid.reload(table);
                                                    } else {
                                                        BT.showErrorNotice(data.msg);
                                                        $('#modalReciveDoc' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);

                                                    }

                                                })
                                            });

                                        }
                                    }
                                ]
                            });
                            //BT.Dialog.confirm({
                            //    id: 'confirmReceived',
                            //    message: 'تم تسليم الملف للمواطن',
                            //    post: {
                            //        url: receivedDocUrl,
                            //        data: {
                            //            idForm: sRow.ID,
                            //        },
                            //        onSuccessFn: function () {
                            //            location.reload();
                            //            $(table).trigger('reloadGrid');
                            //        }
                            //    }
                            //});
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'إضافة مرفق',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getAttachServiceD' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            
                            var lnk1 = addAttachUrl;
                            lnk1 = lnk1.replace("_id_", sRow.ID);
                            lnk1 = lnk1.replace("_f_", sRow.SERVICE_FORM_SEQ);
                            BT.Dialog.Create('#modalFinalAttachOldService', {
                                title: 'إضافة مرفق',
                                onOpenFn: function () {
                                    $("#titleAttach").val("");
                                    $("#finalattachHD").val("");
                                    $("#img_finalattachD").attr('src','');
                                },
                                addButtons: [
                                    {
                                        //id: 'btnUnEndProGrp',
                                        id: 'btnSave',
                                        text: 'حفظ',
                                        'class': 'btn btn-sm btn-success',
                                        click: function () {
                                            var formData = new FormData();
                                            formData = formData.append('file', $('input[type=file]')[0].files[0]);
                                            $('#modalFinalAttachOldService' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                            $('#modalFinalAttachOldService' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);

                                            $("#attachFormOld").ajaxForm({
                                                type: "POST",
                                                url: lnk1,
                                                data: formData,
                                                mimeType: "multipart/form-data",
                                                contentType: false,
                                                cache: false,
                                                processData: false,
                                                success: (function (data) {
                                                    if (data === '"Ok"') {
                                                        $("input[type='file']").val("");
                                                        BT.showSuccessNotice("تمت الاضافة بنجاح");
                                                        $('#attachFormOld').parent().find('.remove').first().click();


                                                        BT.Dialog.hide('#modalFinalAttachOldService');
                                                        BT.Grid.reload(table);
                                                    } else {
                                                        $('#modalFinalAttachOldService' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);

                                                    }

                                                    // Optionally alert the user of success here...
                                                })
                                            }).submit();

                                        }
                                    }
                                ]
                            });
                        }
                    });
                }).trigger('click');
            },

            init = function (pGetServicetDoneUrl, pGetServiceForm, pMsgUrl, pTextMesgUrl, pNotesWorkFlowUrl, pOpinionForServiceUrl
                , pAddAttachUrl, pAttachUrl, pAttachCitizenUrl,
                pAttachDownloadUrl, pOpinionUrl, pReceivedDocUrl, pOpinionDownLoadUrl, pOpinionAttachUrl,
                pOpinionAttachDownloadUrl,pCardUrl ,pId, pIdForm) {
                if (
                    BT.isNullOrEmpty(pGetServicetDoneUrl)
                  || BT.isNullOrEmpty(pGetServiceForm)
                  || BT.isNullOrEmpty(pTextMesgUrl)
                  || BT.isNullOrEmpty(pMsgUrl)
                  || BT.isNullOrEmpty(pNotesWorkFlowUrl)
                  || BT.isNullOrEmpty(pOpinionForServiceUrl)
                  || BT.isNullOrEmpty(pAddAttachUrl)
                  || BT.isNullOrEmpty(pAttachUrl)
                  || BT.isNullOrEmpty(pAttachCitizenUrl)
                  || BT.isNullOrEmpty(pAttachDownloadUrl)
                  || BT.isNullOrEmpty(pOpinionUrl)
                  || BT.isNullOrEmpty(pReceivedDocUrl)
                  || BT.isNullOrEmpty(pOpinionDownLoadUrl)
                  || BT.isNullOrEmpty(pOpinionAttachUrl)
                  || BT.isNullOrEmpty(pOpinionAttachDownloadUrl)
                  || BT.isNullOrEmpty(pCardUrl)


                ) {
                    BT.showErrorNotice('Em.ServicetDone.init: missing params');
                    return;
                }

                getServicetDoneUrl = pGetServicetDoneUrl;
                getServiceForm = pGetServiceForm;
                notesWorkFlowUrl = pNotesWorkFlowUrl;
                msgUrl = pMsgUrl;
                opinionForServiceUrl = pOpinionForServiceUrl;
                textMesgUrl = pTextMesgUrl;
                addAttachUrl = pAddAttachUrl;
                attachUrl = pAttachUrl;
                attachCitizenUrl = pAttachCitizenUrl;
                attachDownloadUrl = pAttachDownloadUrl;
                opinionUrl = pOpinionUrl;
                receivedDocUrl = pReceivedDocUrl;
                opinionDownLoadUrl = pOpinionDownLoadUrl;
                opinionAttachUrl = pOpinionAttachUrl;
                opinionAttachDownloadUrl = pOpinionAttachDownloadUrl;
                id = pId;
                cardUrl = pCardUrl;
                idForm = pIdForm;
                serchNF1 = $("#serchNF1");
                initServiceDoneGrid();
            };

            return {
                init: init
            };
        })(),

        AllServiceDelegate: (function () {
            var getServicetUnderFlowUrl,
                getServiceForm,
                getPermission,
                getPermissionUser,
                forwardServiceUrl,
                sendMessageUrl,
                dismissUrl,
                replayServiceUrl,
                opinionServiceUrl,
                pageUrl,
                notesWorkFlowUrl,
                msgUrl,
                opinionForServiceUrl,
                textMesgUrl,
                id,
                idDelegate,
                idService,
                nameStaff,
                getTempUrl,
                attachFormUrl,
                reportUrl,
                endServiceUrl,
                addFianlAttachUrl,
                filesUrl,
                changeStatusUrl,
                attachWfUrl,
                delegateUrl,
                staffSelect,
                attachCitizenUrl,
                downloadUrl,
                opinionUrl,
                taxUrl,
                    rejectReportUrl,
             creatSaderRejectUrl,
             creatSaderAcceptUrl,
             receivedDocUrl,
                infoCitizenUrl,
                serviceRef = "#ServiceRef",
                 notes = "#notesStaff",
                 message = "#Message1",
                 textSub = "#textSub",
                 msgDismiss = "#msgDismiss",
                 msgReplay = "#msgReplay",
                 opinion = "#opinion",
                 staff = "#emp",
                 msgEnd = "#MessageEnd1",
               staffRef = "#StaffRef",
             attachForm = "#attachForm",
             status = "#status",
            table = '#AllServiceUnderFlowDelegateTable',
            pager = '#AllServiceUnderFlowDelegateTablePager',
            gridOpts = function () {
                return {
                    GroupBy: [
                        { val: 'Status', txt: 'الحالة' },
                        { val: 'FullNameCitizen', txt: ' اسم المواطن' },
                        { val: 'NameService', txt: ' اسم الخدمة' },
                        { val: 'NameStaff', txt: ' اسم الموظف' },
                

                    ],


                    Properties: {
                        caption: "الخدمات",
                        sortname: 'DATE_RECEIVED',
                        sortorder: "desec",
                        url: getServicetUnderFlowUrl,
                        postData: {
                            idStaff: staffSelect.val(),
                            idDelegate: idDelegate
                        },
                        colNames: [
                            'الحالة', 'الكود', 'رقم الطلب', 'حالة الطلب', 'تاريخ القراءة', ' اسم المواطن', ' اسم المواطن', 'كود الخدمة', 'اسم الخدمة', ' كود الموظف'
                            , "كود الحالة", "مرفقات إضافية ",'routeId'
                        ],
                        colModel: [
                            {
                                name: 'Status',
                                index: 'Status',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'ID',
                                index: 'ID',
                                key: true,
                                editable: false,
                                viewable: false,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                            {
                                name: 'SERVICE_FORM_SEQ',
                                index: 'SERVICE_FORM_SEQ',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                            },
                              {
                                  name: 'StatusForm',
                                  index: 'StatusForm',
                                  width: 150,
                                  editable: false,
                                  sortable: true,
                                  viewable: true,
                                  hidedlg: false,
                                  hidden: false,
                                  fixed: true,
                                  searchoptions: { sopt: ['cn', 'eq'] }
                              },
                            {
                                name: 'DATE_READ',
                                index: 'DATE_READ',
                                width: 120,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                sorttype: 'date',
                                formatter: 'date',
                                formatoptions: { newformat: 'd/m/Y' },
                                datefmt: 'd-M-Y',
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                searchrules: { date: true }

                            },
                            {
                                name: 'NameCitizen',
                                index: 'NameCitizen',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                 {
                                     name: 'FullNameCitizen',
                                     index: 'FullNameCitizen',
                                     width: 150,
                                     editable: false,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                            {
                                name: 'ServiceRef',
                                index: 'ServiceRef',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'NameService',
                                index: 'NameService',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'StaffRef',
                                index: 'StaffRef',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            //{
                            //    name: 'NameStaff',
                            //    index: 'NameStaff',
                            //    width: 150,
                            //    editable: false,
                            //    sortable: true,
                            //    viewable: true,
                            //    hidedlg: false,
                            //    hidden: false,
                            //    fixed: true,
                            //    searchoptions: { sopt: ['cn', 'eq'] }
                            //},
                               
                                           {
                                               name: 'StatusId',
                                               index: 'StatusId',
                                               width: 150,
                                               editable: false,
                                               sortable: true,
                                               viewable: true,
                                               hidedlg: false,
                                               hidden: true,
                                               fixed: true,
                                               searchoptions: { sopt: ['cn', 'eq'] }
                                           },
                                              {
                                                  name: 'NumberAttachCitizen',
                                                  index: 'NumberAttachCitizen',
                                                  width: 150,
                                                  editable: false,
                                                  viewable: false,
                                                  hidedlg: true,
                                                  hidden: false,
                                                  searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                              },
                                                  {
                                                      name: 'ROUTE_ID',
                                                      index: 'ROUTE_ID',
                                                      width: 150,
                                                      editable: false,
                                                      sortable: true,
                                                      viewable: true,
                                                      hidedlg: false,
                                                      hidden: true,
                                                      fixed: true,
                                                      searchoptions: { sopt: ['cn', 'eq'] }
                                                  },
                
                        ],
                        editData: {
                            idStaff: staffSelect.val(),
                            idDelegate: idDelegate
                        },

                        onSelectRow: function (rowId) {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            $("#getAttachCitizenDele").hide();

                            if (sRow.NumberAttachCitizen != 0) {
                                $("#getAttachCitizenDele").show();
                            }
                            $("#opinion").hide();
                            $("#forward").hide();
                            $("#reject").hide();
                            $("#message").hide();
                            $("#accept").hide();
                            $("#endServiceFormBtn").hide();
                            $("#edkhal").hide();
                            $("#forwardFainancial").hide();
                            $("#isdar").hide();
                            $("#arabicServiceFormBtn").hide();
                            $("#englishServiceFormBtn").hide();
                            $("#arabicRejectServiceFormBtn").hide();
                            $("#englishRejectServiceFormBtn").hide();
                            $("#getAttachService").hide();
                            $("#endServiceFormBtn").hide();


                            var lnk = getPermission;
                        

                            $.ajax({
                                type: "GET",
                                contentType: "application/json; charset=utf-8",
                                url: lnk,
                                data: {
                                    srId: sRow.ROUTE_ID,
                                },
                                dataType: "json",
                                success: function (data) {
                                    if (data != null) {
                                        $.each(data, function (i, item) {
                                            //BT.Grid.addButton(table, {
                                            title: item.ActionName == "إدخال" ? "احتساب الرسوم هندسية" :
                                               item.ActionName == "تأكيد" ? "تحويل الى المالية" : item.ActionName == "إصدار" ? "إصدار رخصة" : item.ActionName;
                                            //id: item.ActionName,
                                            //onClickButton: function () {
                                            //var formData = new FormData();
                                            //formData = formData.append('file', $('input[type=file]')[0].files[0]);
                                            var name = item.ActionName;
                                     

                                            if (name == "تحويل") {
                                                $("#forward").show();
                                            }
                                              
                                               
                                            if (name == "رفض") {
                                                $("#reject").show();
                                            }

                                            if (name == "رسالة") {
                                                $("#message").show();
                                            }

                                            if (name == "قبول") {
                                                $("#accept").show();
                                            }
                                            if (name == "أخذرأي") {
                                                $("#opinion").show();
                                            }
                                            if (name == "إدخال") {
                                                $("#edkhal").show();
                                            }

                                            if (name == "تأكيد") {
                                                $("#forwardFainancial").show();
                                            }
                                            if (name == "إصدار") {
                                                $("#isdar").show();
                                            }
                                            //    }

                                            //});
                                            if (sRow.StatusForm === "بانتظار مرفقات من المواطن"
    || sRow.StatusForm === "تم التعليق") {
                                                $("#forward").hide();
                                                $("#reject").hide();
                                                $("#accept").hide();
                                                $("#opinion").show();
                                                $("#message").show();
                                                $("#edkhal").hide();
                                                $("#forwardFainancial").hide();
                                                $("#isdar").hide();
                                                $("#arabicServiceFormBtn").hide();
                                                $("#englishServiceFormBtn").hide();
                                                $("#arabicRejectServiceFormBtn").hide();
                                                $("#englishRejectServiceFormBtn").hide();
                                                $("#getAttachService").hide();
                                                $("#endServiceFormBtn").hide();


                                            } else {
                                                //$("#" + item.ActionName).show();
                                                if (item.ActionName == "تحويل") {
                                                    $("#forward").show();

                                                }
                                                if (item.ActionName == "رفض") {
                                                    $("#reject").show();
                                                }

                                                if (item.ActionName == "رسالة") {
                                                    $("#message").show();

                                                }

                                                if (item.ActionName == "قبول") {
                                                    $("#accept").show();

                                                }
                                                if (item.ActionName == "أخذرأي") {
                                                    $("#opinion").show();
                                                }

                                                if (item.ActionName == "إدخال") {
                                                    $("#edkhal").show();

                                                }

                                                if (item.ActionName == "تأكيد") {
                                                    $("#forwardFainancial").show();

                                                }
                                                if (item.ActionName == "إصدار") {
                                                    $("#isdar").show();

                                                }
                                                $("#arabicServiceFormBtn").hide();
                                                $("#englishServiceFormBtn").hide();
                                                $("#arabicRejectServiceFormBtn").hide();
                                                $("#englishRejectServiceFormBtn").hide();
                                                $("#getAttachService").hide();
                                                $("#endServiceFormBtn").hide();
                                            }
                                        })
                                    }
                                }

                            });
                            //$("#تحويل").hide();
                            //$("#رفض").hide();
                            //$("#قبول").hide();
                            //$("#أخذرأي").show();
                            //$("#رسالة").show();
                            //$("#إدخال").hide();
                            //$("#تأكيد").hide();
                            //$("#إصدار").hide();
                            //$("#arabicServiceFormBtn").hide();
                            //$("#englishServiceFormBtn").hide();
                            //$("#endServiceFormBtn").hide();
                            //$("#arabicRejectServiceFormBtn").hide();
                            //$("#englishRejectServiceFormBtn").hide();

                            var lnk0 = getTempUrl;
                       
                            $.ajax({
                                type: "GET",
                                contentType: "application/json; charset=utf-8",
                                url: lnk0,
                                data: {
                                    seq: sRow.ServiceRef,
                                    idStaff: staffSelect.val(),
                                    sform: sRow.SERVICE_FORM_SEQ,
                                    myOrder: sRow.ROUTE_ID
                                },
                                success: function (data) {
                                    if (data === "arabic_accept" || data === "both_accept") {
                                   
                                        $("#arabicServiceFormBtn").show();
                                        $("#opinion").hide();
                                        $("#forward").hide();
                                        $("#reject").hide();
                                        $("#message").hide();
                                        $("#edkhal").hide();
                                        $("#forwardFainancial").hide();
                                        $("#isdar").hide();
                                        $("#arabicRejectServiceFormBtn").hide();
                                        $("#englishRejectServiceFormBtn").hide();
                                    }
                                    if (data === "English_accept" || data === "both_accept") {
                                    
                                        $("#englishServiceFormBtn").show();
                                        $("#opinion").hide();
                                        $("#forward").hide();
                                        $("#reject").hide();
                                        $("#message").hide();
                                        $("#edkhal").hide();
                                        $("#forwardFainancial").hide();
                                        $("#isdar").hide();
                                        $("#arabicRejectServiceFormBtn").hide();
                                        $("#englishRejectServiceFormBtn").hide();
                                    }
                                    if (data === "arabic_reject" || data === "both_reject") {
                                    
                                        $("#arabicRejectServiceFormBtn").show();
                                        $("#opinion").hide();
                                        $("#forward").hide();
                                        $("#reject").hide();
                                        $("#message").hide();
                                        $("#edkhal").hide();
                                        $("#forwardFainancial").hide();
                                        $("#isdar").hide();
                                        $("#englishServiceFormBtn").hide();
                                        $("#arabicServiceFormBtn").hide();
                                    }
                                    if (data === "English_reject" || data === "both_reject") {
                                        $("#englishRejectServiceFormBtn").show();
                                        $("#opinion").hide();
                                        $("#forward").hide();
                                        $("#reject").hide();
                                        $("#message").hide();
                                        $("#edkhal").hide();
                                        $("#forwardFainancial").hide();
                                        $("#isdar").hide();
                                        $("#englishServiceFormBtn").hide();
                                        $("#arabicServiceFormBtn").hide();
                                        $("#endServiceFormBtn").hide();

                                    }
                                    if (data === "English_reject" || data === "English_accept" || data === "both_reject"
                                      || data === "both_accept" || data === "arabic_reject" || data === "arabic_accept"
                                        || data === "last") {

                                        $("#endServiceFormBtn").show();
                                        $("#getAttachService").show();

                                        $("#opinion").hide();
                                        $("#forward").hide();
                                        $("#reject").hide();
                                        $("#message").hide();
                                        $("#edkhal").hide();
                                        $("#forwardFainancial").hide();
                                        $("#isdar").hide();
                                  
                                        //if (sRow.StatusForm == "بانتظار مرفقات من المواطن") {
                                        //    //$("#getAttachCitizen").show();
                                        //    $("#تحويل").hide();
                                        //    $("#رفض").hide();
                                        //    $("#قبول").hide();
                                        //    $("#إدخال").hide();
                                        //    $("#تأكيد").hide();
                                        //    $("#endServiceFormBtn").hide();
                                        //    $("#arabicServiceFormBtn").hide();
                                        //    $("#englishServiceFormBtn").hide();
                                        //    $("#arabicRejectServiceFormBtn").hide();
                                        //    $("#englishRejectServiceFormBtn").hide();
                                        //    $("#receivedItem").hide();
                                        //}
                                    }
                                }
                            });
                        },
                        rowattr: function (rowData, currentObj, rowId) {
                            if (rowData.Status === 'جديد') {
                                return { "class": 'newRecBold' };
                            }
                            return '';
                        }
                    }
                };
            },

            initServiceGrid = function() {
                // var sRow = BT.Grid.getSelectedRow(table, this);
                staffSelect.off('change').on('change', function() {
                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });


                    //BT.Grid.addButton(table, {
                    //    title: 'مشاهدة',
                    //    buttonicon: 'fa fa-align-justify',
                    //    id: 'getServiceForm' + BT.getNoHash(table),
                    //    onClickButton: function() {
                    //        var sRow = BT.Grid.getSelectedRow(table, this);
                    //        if (sRow == null) return;
                    //        var lnk = getServiceForm;
                    //        lnk = lnk.replace("__seq__", sRow.ID);
                    //        lnk = lnk.replace("&amp;", "&");
                    //        lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                    //        window.location.replace(lnk);
                    //    }
                    //});
                    BT.Grid.addButton(table, {
                        title: 'مشاهدة',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getServiceForm' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = getServiceForm;
                            //openWindowWithPost(lnk, { seq: sRow.ID, idForm: sRow.SERVICE_FORM_SEQ, type: "newS", routeId: sRow.ROUTE_ID });
                            openWindowWithPost(lnk, { seq: sRow.ID, idForm: sRow.SERVICE_FORM_SEQ});
                        }
                    });
                    BT.Grid.addButton(table, {
                        title: 'سير العمل',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getNotesWorkFlowService' + BT.getNoHash(table),
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalNoteWorkFlowService', {
                                title: 'سير العمل',
                                width: 'max',
                                onOpenFn: function() {
                                    Em.NotesWorkFlowService.init(
                                        notesWorkFlowUrl, sRow.SERVICE_FORM_SEQ, attachWfUrl
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addSeparstor(table);

                    BT.Grid.addButton(table, {
                        title: 'الرسائل',
                        buttonicon: 'fa fa-envelope blue',
                        id: 'getMsgService' + BT.getNoHash(table),
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalMsgService', {
                                title: 'الرسائل',
                                width: 'max',
                                onOpenFn: function() {
                                    Em.MsgService.init(
                                        msgUrl, sRow.ID, textMesgUrl, false, "#modalTextFullMsg", "#fullMsg"
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'الآراء',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getOpinionService' + BT.getNoHash(table),
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalAllOpinionForService', {
                                title: 'الآراء',
                                width: 'max',
                                onOpenFn: function() {
                                    Em.AllOpinionForService.init(
                                        opinionForServiceUrl, sRow.ID, false, opinionUrl
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'مرفقات إضافية من المواطن',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getAttachCitizenDele',
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalAnotherAttachCitizenDelegete', {
                                title: 'مرفقات إضافية للطلب من المواطن',
                                width: 'max',
                                onOpenFn: function() {
                                    Em.AnotherAttachCitizenDelegete.init(
                                        attachCitizenUrl, downloadUrl, sRow.SERVICE_FORM_SEQ
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'تغيير حالة الطلب',
                        buttonicon: 'fa fa-align-justify',
                        id: 'changeStatusService' + BT.getNoHash(table),
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalChangeStatus', {
                                title: 'تغيير حالة الطلب',
                                onOpenFn: function() {
                                },
                                addButtons: [
                                    {
                                        id: 'btnUnEndProGrp',
                                        text: 'حفظ',
                                        'class': 'btn btn-sm btn-success',
                                        click: function() {
                                            //var status = changeStatusUrl.html();
                                            var lnk1 = changeStatusUrl;

                                            BT.Dialog.ajaxPOST('#modalChangeStatus',
                                                lnk1,
                                                {
                                                    idForm: sRow.SERVICE_FORM_SEQ,
                                                    idStatus: status.val(),
                                                    id: sRow.ID,
                                                    text: $("#msgChange").val(),
                                                },
                                                true,
                                                function() {
                                                    BT.Grid.reload(table);
                                                    BT.Dialog.hide('#modalChangeStatus');
                                                    window.location.href = pageUrl;

                                                });

                                        }
                                    }
                                ]
                            });
                        }
                    });

       



                    BT.Grid.addSeparstor(table);
                    BT.Grid.addButton(table, {
                        title: 'إنهاء وتبليغ',
                        buttonicon: 'fa fa-align-justify',
                        id: 'endServiceFormBtn',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalEndMessage', {
                                title: 'إنهاء وتبليغ',
                                onOpenFn: function () {
                                    //BT.Dialog.reload('#modalEndMessage');
                                    $('#checkboxEmail').prop('disabled', false);
                                    $('#checkboxSms').prop('disabled', false);
                                    $('#checkboxEmail').prop('checked', false);
                                    $('#checkboxSms').prop('checked', false);
                                    $(".contentFormEmail").addClass("hidden");
                                    $(".contentSms").addClass("hidden");
                                    $.ajax({
                                        type: "GET",
                                        contentType: "application/json; charset=utf-8",
                                        url: infoCitizenUrl,
                                        data: { id: sRow.NameCitizen },
                                        dataType: "json",
                                        success: function (obj) {
                                            $("#toCitizen").val(obj.email1);
                                            $("#numberMobile").val(obj.mobile);
                                        }
                                    });


                                    $("#emailStaff").val("");
                                    if (sRow.EmailCitizen == "") {
                                        $('#checkboxEmail').prop('disabled', true);

                                    }// else {
                                    //    $("#toCitizen").val(sRow.EmailCitizen);
                                    //}
                                    if (sRow.Phone == "") {
                                        $('#checkboxSms').prop('disabled', true);

                                    }
                                    //else {
                                    //    $("#numberMobile").val(sRow.Phone);
                                    //    }
                                    if (data === "English_reject" || data === "arabic_reject" || data === "both_reject") {
                                        $("#subEmail").val("تم رفض طلب رقم :" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService);
                                        $("#textEmail").html("نأسف لقد تم رفض طلب رقم:" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService + " " + "  الرجاء مراجعة البلدية لمعرفة الاسباب.");
                                    } else {
                                        $("#subEmail").val("تم قبول طلب رقم :" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService);
                                        $("#textEmail").html(" تم قبول طلب رقم:" + sRow.SERVICE_FORM_SEQ + " " + sRow.NameService + " " + "الرجاء مراجعة البلدية");

                                    }
                                },
                                addButtons: [
                                    {
                                        id: 'btnUnEndProGrp',
                                        text: 'إرسال',
                                        'class': 'btn btn-sm btn-success',
                                        click: function () {
                                            var msg = msgEnd.html();
                                            var txtEmail = $("#textEmail").html();
                                            var lnk1 = endServiceUrl;

                                            $('#modalEndMessage' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                            $('#modalEndMessage' + '~.ui-dialog-buttonpane #endServiceFormBtn:first').prop('disabled', true);
                                            $("#endService1").ajaxForm({
                                                type: "POST",
                                                url: lnk1,
                                                data: {
                                                    id: sRow.ID,
                                                    idService: sRow.ServiceRef,
                                                    idForm: sRow.SERVICE_FORM_SEQ,
                                                    text: msg,
                                                    idStaff: staffSelect.val(),
                                                    doc: $("#emailStaff").val(),
                                                    textEmail: txtEmail,
                                                    toCitizen: $("#toCitizen").val(),
                                                    checkboxEmail: $("#checkboxEmail").is(":checked"),
                                                    subEmail: $("#subEmail").val(),
                                                    checkboxSms: $("#checkboxSms").is(":checked"),
                                                    numberMobile: $("#numberMobile").val(),
                                                    msgSMS: $("#msgSMS").val(),
                                                },
                                                //mimeType: "multipart/form-data",
                                                success: (function (data3) {
                                                    if (data3.done) {
                                                        BT.showSuccessNotice();
                                                        BT.Grid.reload(table);
                                                        BT.Dialog.hide('#modalEndMessage');
                                                        window.location.href = pageUrl;
                                                    } else {
                                                        $('#modalEndMessage' + '~.ui-dialog-buttonpane #endServiceFormBtn:first').prop('disabled', false);
                                                        BT.showErrorNotice(data3.msg);
                                                    }


                                                })
                                            }).submit();
                                        }
                                    }
                                ]
                            });

                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'مرفقات نهائية',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getAttachService',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = addFianlAttachUrl;
                            //lnk = lnk.replace("_Id_", sRow.ServiceFormRef);
                            BT.Dialog.Create('#modalAttachFinalServiceD', {
                                title: 'مرفقات نهائية',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.ServiceFormAttachmentD.init(
                                        attachFormUrl, sRow.SERVICE_FORM_SEQ, lnk, attachForm, filesUrl
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'إصدار كتاب رفض انجليزي',
                        buttonicon: 'fa fa-align-justify',
                        id: 'englishRejectServiceFormBtn',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnkA = creatSaderRejectUrl;
                            $.ajax({
                                type: "POST",
                                url: lnkA,
                                data: {
                                    formId: sRow.SERVICE_FORM_SEQ,
                                    lan: "en"
                                },
                                success: function (data) {
                                    if (data.done) {
                                        var lnk = rejectReportUrl;
                                        lnk = lnk.replace("_sfId_", sRow.SERVICE_FORM_SEQ);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_id__", sRow.ServiceRef);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_user_", sRow.NameCitizen);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_lan_", "en");
                                        window.open(lnk, '_blank');
                                    } else {
                                        BT.showSuccessNotice(data.msg);
                                    }
                                }
                            });

                        }
                    });


                    BT.Grid.addButton(table, {
                        title: 'إصدار كتاب رفض عربي',
                        buttonicon: 'fa fa-align-justify',
                        id: 'arabicRejectServiceFormBtn',
                        onClickButton: function () {

                            var lnkA = creatSaderRejectUrl;
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                type: "POST",
                                url: lnkA,
                                data: {
                                    formId: sRow.SERVICE_FORM_SEQ,
                                    lan: "ar"
                                },
                                success: function (data) {
                                    if (data.done) {
                                        var lnk = rejectReportUrl;
                                        lnk = lnk.replace("_sfId_", sRow.SERVICE_FORM_SEQ);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_id__", sRow.ServiceRef);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_user_", sRow.NameCitizen);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_lan_", "ar");
                                        window.open(lnk, '_blank');
                                    } else {
                                        BT.showSuccessNotice(data.msg);
                                    }
                                }
                            });

                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'إصدار كتاب انجليزي',
                        buttonicon: 'fa fa-align-justify',
                        id: 'englishServiceFormBtn',
                        onClickButton: function () {
                            var lnkA = creatSaderAcceptUrl;
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                type: "POST",
                                url: lnkA,
                                data: {
                                    formId: sRow.SERVICE_FORM_SEQ,
                                    lan: "en"
                                },
                                success: function (data) {
                                    if (data.done) {
                                        var lnk = reportUrl;
                                        lnk = lnk.replace("_sfId_", sRow.SERVICE_FORM_SEQ);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_id__", sRow.ServiceRef);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_user_", sRow.NameCitizen);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_lan_", "en");
                                        window.open(lnk, '_blank');
                                    } else {
                                        BT.showSuccessNotice(data.msg);
                                    }
                                }
                            });


                        }
                    });
                    BT.Grid.addButton(table, {
                        title: 'إصدار كتاب عربي',
                        buttonicon: 'fa fa-align-justify',
                        id: 'arabicServiceFormBtn',
                        onClickButton: function() {
                            var lnkA = creatSaderAcceptUrl;
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                type: "POST",
                                url: lnkA,
                                data: {
                                    formId: sRow.SERVICE_FORM_SEQ,
                                    lan: "ar"
                                },
                                success: function(data) {
                                    if (data.done) {
                                        var lnk = reportUrl;
                                        lnk = lnk.replace("_sfId_", sRow.SERVICE_FORM_SEQ);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_id__", sRow.ServiceRef);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_user_", sRow.NameCitizen);
                                        lnk = lnk.replace("&amp;", "&");
                                        lnk = lnk.replace("_lan_", "ar");
                                        window.open(lnk, '_blank');
                                    } else {
                                        BT.showSuccessNotice(data.msg);
                                    }

                                }
                            });

                        }
                    });
        

                    BT.Grid.addButton(table,
                            {
                                title: 'تحويل',
                                buttonicon: 'fa fa-align-justify',
                                id: 'forward',
                                onClickButton: function() {
                                    var lnk = forwardServiceUrl;
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (sRow == null) return;
                                    lnk = lnk.replace("__id__", sRow.ID);
                                    lnk = lnk.replace("__seq__", sRow.ServiceRef);
                                    lnk = lnk.replace("&amp;", "&");
                                    lnk = lnk.replace("_staff_", sRow.SERVICE_FORM_SEQ);
                                    lnk = lnk.replace("&amp;", "&");
                                    lnk = lnk.replace("_ff_", staffSelect.val());
                                    BT.Dialog.Create('#modalForwardServiceDel', {
                                        title: 'تحويل',
                                        onOpenFn: function() {
                                        },
                                        addButtons: [
                                            {
                                                id: 'btnUnEndProGrp',
                                                text: 'تحويل',
                                                'class': 'btn btn-sm btn-success',
                                                click: function() {
                                                    $('#modalForwardServiceDel' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                    $('#modalForwardServiceDel' + '~.ui-dialog-buttonpane #modalForwardServiceDel:first').prop('disabled', true);

                                                    $("#forwardD").ajaxForm({
                                                        type: "POST",
                                                        url: lnk,
                                                        data: $("#forwardD").serialize(),
                                                        //mimeType: "multipart/form-data",

                                                        success: (function(data0) {

                                                            if (data0.done) {
                                                                BT.showSuccessNotice("تم تحويل الطلب للموظف: " + data0.msg);
                                                                BT.Grid.reload(table);
                                                                BT.Dialog.hide('#modalForwardServiceDel');
                                                                window.location.href = pageUrl;
                                                            } else {
                                                                BT.showErrorNotice(data0.msg);
                                                                $('#modalForwardServiceDel' + '~.ui-dialog-buttonpane #modalForwardServiceDel:first').prop('disabled', false);

                                                            }


                                                        })
                                                    }).submit();


                                                }
                                            }
                                        ]
                                    });
                                }
                            });

                    BT.Grid.addButton(table,
                    {
                        title: 'رفض',
                        buttonicon: 'fa fa-align-justify',
                        id: 'reject',
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk2 = dismissUrl;
                            BT.Dialog.Create('#modalDismissService', {
                                title: 'رفض',
                                onOpenFn: function() {
                                },
                                addButtons: [
                                    {
                                        id: 'btnUnEndProGrp',
                                        text: 'رفض',
                                        'class': 'btn btn-sm btn-success',
                                        click: function() {
                                            $('#modalDismissService' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                            $('#modalDismissService' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                            //var msg = msgDismiss.html();
                                            BT.Dialog.ajaxPOST('#modalDismissService',
                                                lnk2,
                                                {
                                                    id: sRow.ID,
                                                    idService: sRow.ServiceRef,
                                                    idForm: sRow.SERVICE_FORM_SEQ,
                                                    text: msgDismiss.val(),
                                                    idStaff: staffSelect.val()
                                                },
                                                false,
                                                function(data1) {
                                                    if (data1.done) {
                                                        BT.showSuccessNotice();
                                                        BT.Grid.reload(table);
                                                        BT.Dialog.hide('#modalDismissService');
                                                        window.location.href = pageUrl;
                                                    } else {
                                                        BT.showErrorNotice(data1.msg);
                                                        $('#modalForwardServiceDel' + '~.ui-dialog-buttonpane #modalForwardServiceDel:first').prop('disabled', false);

                                                    }


                                                }
                                            );
                                        }
                                    }
                                ]
                            });
                        }
                    });

                    BT.Grid.addButton(table,
                    {
                        title: 'رسالة',
                        buttonicon: 'fa fa-align-justify',
                        id: 'message',
                        onClickButton: function() {
                            var lnk1 = sendMessageUrl;
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalSendMessage', {
                                title: 'رسالة',
                                onOpenFn: function() {
                                    $("#idMsg").val(sRow.ID),
                                        $("#idServiceMsg").val(sRow.ServiceRef),
                                        $("#idFormRMsg").val(sRow.SERVICE_FORM_SEQ),
                                        $.ajax({
                                            type: "GET",
                                            contentType: "application/json; charset=utf-8",
                                            url: infoCitizenUrl,
                                            data: { id: sRow.NameCitizen },
                                            dataType: "json",
                                            success: function(obj) {
                                                $("#toCitizenM").val(obj.email1);
                                            }
                                        });
                                },
                                addButtons: [
                                    {
                                        id: 'btnUnEndProGrp',
                                        text: 'إرسال',
                                        'class': 'btn btn-sm btn-success',
                                        click: function() {
                                            $('#modalSendMessage' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                            $('#modalSendMessage' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                            var msg = message.html();

                                            $("#sendMsg").ajaxForm({
                                                type: "POST",
                                                url: lnk1,
                                                data: {
                                                    //$("#sendMsg").serialize()
                                                    id: sRow.ID,
                                                    idService: sRow.ServiceRef,
                                                    idForm: sRow.SERVICE_FORM_SEQ,
                                                    text: msg,
                                                    textSub: textSub.val(),
                                                    toCitizenM: $("#toCitizenM").val(),
                                                    doc: $("#emailStaffM1").val(),
                                                },
                                                //mimeType: "multipart/form-data",
                                                success: (function(data3) {
                                                    if (data3.done) {
                                                        BT.showSuccessNotice();
                                                        BT.Grid.reload(table);
                                                        BT.Dialog.hide('#modalSendMessage');
                                                        window.location.href = pageUrl;
                                                    } else {
                                                        $('#modalSendMessage' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);
                                                        BT.showErrorNotice(data3.msg);

                                                    }


                                                })
                                            }).submit(),
                                                false,
                                                function(data2) {
                                                    if (data2.done) {
                                                        BT.Grid.reload(table);
                                                        BT.Dialog.hide('#modalSendMessage');
                                                        window.location.href = pageUrl;
                                                    } else {
                                                        BT.showErrorNotice(data2.msg);
                                                        $('#modalSendMessage' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);

                                                    }


                                                }
                                            //);
                                        }
                                    }
                                ]
                            });
                        }
                    });

                    BT.Grid.addButton(table,
                    {
                        title: 'قبول',
                        buttonicon: 'fa fa-align-justify',
                        id: 'accept',
                        onClickButton: function() {
                            var lnk3 = replayServiceUrl;
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalReplayService', {
                                title: 'قبول',
                                onOpenFn: function() {
                                },
                                addButtons: [
                                    {
                                        id: 'btnUnEndProGrp',
                                        text: 'قبول',
                                        'class': 'btn btn-sm btn-success',
                                        click: function() {
                                            //var msg = msgReplay.html();
                                            BT.Dialog.ajaxPOST('#modalReplayService',
                                                lnk3,
                                                {
                                                    id: sRow.ID,
                                                    idService: sRow.ServiceRef,
                                                    idForm: sRow.SERVICE_FORM_SEQ,
                                                    text: msgReplay.val(),
                                                    idStaff: staffSelect.val()
                                                },
                                                false,
                                                function(data3) {
                                                    if (data3.done) {
                                                        BT.showSuccessNotice();
                                                        BT.Grid.reload(table);
                                                        BT.Dialog.hide('#modalReplayService');
                                                        window.location.href = pageUrl;
                                                    } else {
                                                        BT.showErrorNotice(data3.msg);
                                                    }


                                                }
                                            );
                                        }
                                    }
                                ]
                            });
                        }
                    });

                    BT.Grid.addButton(table,
    {
        title: 'أخذرأي',
        buttonicon: 'fa fa-align-justify',
        id: 'opinion',
        onClickButton: function () {
            var lnk4 = opinionServiceUrl;
            var sRow = BT.Grid.getSelectedRow(table, this);
            if (sRow == null) return;

            BT.Dialog.Create('#modalOpinionService', {
                title: 'أخذرأي',
                onOpenFn: function() {
                },
                addButtons: [
                    {
                        id: 'btnUnEndProGrp',
                        text: 'إرسال',
                        'class': 'btn btn-sm btn-success',
                        click: function() {
                            //var msg = msgReplay.html();
                            BT.Dialog.ajaxPOST('#modalOpinionService',
                                lnk4,
                                {
                                    id: sRow.ID,
                                    idService: sRow.ServiceRef,
                                    text: opinion.val(),
                                    emp: staff.val()
                                },
                                false,
                                function(data4) {
                                    if (data4.done) {
                                        BT.showSuccessNotice();
                                        BT.Grid.reload(table);
                                        BT.Dialog.hide('#modalOpinionService');
                                        window.location.href = pageUrl;
                                    } else {
                                        BT.showErrorNotice(data.error);
                                    }


                                }
                            );
                        }
                    }
                ]
            });
        }
    });

                    BT.Grid.addSeparstor(table);

                    BT.Grid.addButton(table, {
                        title: 'احتساب الرسوم هندسية',
                        buttonicon: 'fa fa-align-justify',
                        id: 'edkhal',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnktax = taxUrl;
                            lnktax = lnktax.replace("_formId_", sRow.SERVICE_FORM_SEQ);
                            lnktax = lnktax.replace("&amp;", "&");
                            lnktax = lnktax.replace("_t_", "L");
                            window.open(lnktax, '_blank');

                        }
                    });


              

                    BT.Grid.addButton(table, {
                        title: 'تحويل الى المالية',
                        buttonicon: 'fa fa-align-justify',
                        id: 'forwardFainancial',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnktax1 = taxUrl;
                            lnktax1 = lnktax1.replace("_formId_", sRow.SERVICE_FORM_SEQ);
                            lnktax1 = lnktax1.replace("&amp;", "&");
                            lnktax1 = lnktax1.replace("_t_", "F");
                            window.open(lnktax1, '_blank');


                        }
                    });

               


                    BT.Grid.addButton(table, {
                        title: 'إصدار رخصة',
                        buttonicon: 'fa fa-align-justify',
                        id: 'isdar',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnktax2 = taxUrl;
                            lnktax2 = lnktax2.replace("_formId_", sRow.SERVICE_FORM_SEQ);
                            lnktax2 = lnktax2.replace("&amp;", "&");
                            lnktax2 = lnktax2.replace("_t_", "C");
                            window.open(lnktax2, '_blank');

                        }
                    });

                }).trigger('change');
            },

            init = function (pGetServicetUnderFlowUrl, pGetServiceForm, pGetPermission, pGetPermissionUser, pForwardServiceUrl,
                pSendMessageUrl, pDismissUrl, pReplayServiceUrl, pOpinionServiceUrl, pPageUrl, pNotesWorkFlowUrl,
                pMsgUrl, pOpinionForServiceUrl, pTextMesgUrl, pGetTempUrl, pAttachFormUrl, pReportUrl, pEndServiceUrl
                , pAddFianlAttachUrl, pFilesUrl, pChangeStatusUrl,pAttachWfUrl, pDelegateUrl, pAttachCitizenUrl, pDownloadUrl, pOpinionUrl, pTaxUrl, pRejectReportUrl,
                pCreatSaderRejectUrl,pCreatSaderAcceptUrl,pReceivedDocUrl,pInfoCitizenUrl,
                pId, pIdService, pStaffName) {
                if (
                    BT.isNullOrEmpty(pGetServicetUnderFlowUrl)
                        || BT.isNullOrEmpty(pGetServiceForm)
                        || BT.isNullOrEmpty(pGetPermission)
                        || BT.isNullOrEmpty(pGetPermissionUser)
                        || BT.isNullOrEmpty(pForwardServiceUrl)
                        || BT.isNullOrEmpty(pSendMessageUrl)
                        || BT.isNullOrEmpty(pDismissUrl)
                        || BT.isNullOrEmpty(pReplayServiceUrl)
                        || BT.isNullOrEmpty(pOpinionServiceUrl)
                        || BT.isNullOrEmpty(pPageUrl)
                        || BT.isNullOrEmpty(pNotesWorkFlowUrl)
                        || BT.isNullOrEmpty(pMsgUrl)
                        || BT.isNullOrEmpty(pOpinionForServiceUrl)
                        || BT.isNullOrEmpty(pTextMesgUrl)
                        || BT.isNullOrEmpty(pGetTempUrl)
                        || BT.isNullOrEmpty(pAttachFormUrl)
                        || BT.isNullOrEmpty(pReportUrl)
                        || BT.isNullOrEmpty(pEndServiceUrl)
                        || BT.isNullOrEmpty(pAddFianlAttachUrl)
                        || BT.isNullOrEmpty(pFilesUrl)
                        || BT.isNullOrEmpty(pChangeStatusUrl)
                        || BT.isNullOrEmpty(pAttachWfUrl)
                        || BT.isNullOrEmpty(pDelegateUrl)
                        || BT.isNullOrEmpty(pAttachCitizenUrl)
                        || BT.isNullOrEmpty(pDownloadUrl)
                        || BT.isNullOrEmpty(pOpinionUrl)
                        || BT.isNullOrEmpty(pTaxUrl)
                        || BT.isNullOrEmpty(pRejectReportUrl)
                        || BT.isNullOrEmpty(pCreatSaderRejectUrl)
                        || BT.isNullOrEmpty(pCreatSaderAcceptUrl)
                        || BT.isNullOrEmpty(pReceivedDocUrl)
                        || BT.isNullOrEmpty(pInfoCitizenUrl)


                ) {
                    BT.showErrorNotice('Em.ServicetUnderFlow.init: missing params');
                    return;
                }

                getServicetUnderFlowUrl = pGetServicetUnderFlowUrl;
                getServiceForm = pGetServiceForm;
                serviceRef = $(serviceRef);
                notes = $(notes);
                message = $(message);
                textSub = $(textSub);
                msgDismiss = $(msgDismiss);
                msgReplay = $(msgReplay);
                opinion = $(opinion);
                staff = $(staff);
                msgEnd = $(msgEnd);
                status = $(status);
                //attachForm = $(attachForm);
                getPermission = pGetPermission;
                forwardServiceUrl = pForwardServiceUrl;
                sendMessageUrl = pSendMessageUrl;
                dismissUrl = pDismissUrl;
                replayServiceUrl = pReplayServiceUrl;
                opinionServiceUrl = pOpinionServiceUrl;
                pageUrl = pPageUrl;
                notesWorkFlowUrl = pNotesWorkFlowUrl;
                msgUrl = pMsgUrl;
                opinionForServiceUrl = pOpinionForServiceUrl;
                textMesgUrl = pTextMesgUrl;
                idService = pIdService;
                nameStaff = pStaffName;
                getTempUrl = pGetTempUrl;
                attachFormUrl = pAttachFormUrl;
                reportUrl = pReportUrl;
                endServiceUrl = pEndServiceUrl;
                addFianlAttachUrl = pAddFianlAttachUrl;
                filesUrl = pFilesUrl;
                changeStatusUrl = pChangeStatusUrl;
                attachWfUrl = pAttachWfUrl;
                delegateUrl = pDelegateUrl;
                attachCitizenUrl = pAttachCitizenUrl;
                downloadUrl = pDownloadUrl;
                //getPermission = pGetPermission.replace("__id__",serviceRef.val());
                getPermissionUser = pGetPermissionUser;
                opinionUrl = pOpinionUrl;
                taxUrl = pTaxUrl;
                rejectReportUrl=pRejectReportUrl;
                creatSaderRejectUrl = pCreatSaderRejectUrl;
                creatSaderAcceptUrl = pCreatSaderAcceptUrl;
                receivedDocUrl = pReceivedDocUrl;
                infoCitizenUrl = pInfoCitizenUrl;
                idDelegate = pId;
                staffSelect = $('#empSelect');
                BT.select2.defaultAr(staffSelect, delegateUrl, idDelegate);
                initServiceGrid();
            };

            return {
                init: init
            };
        })(),


        AllServicetPending: (function () {
            var getServicetPendingUrl,
                addAttachUrl,
                getServiceForm,
                returnPathUrl,
                id,
                forRamallah,
               idForm;
            var table = '#AllServicePendingTable';
            var pager = '#AllServicePendingTablePager';
    
            var gridOpts = function () {
                return {
                    GroupBy: [
                        //{ val: 'Status', txt: 'الحالة' },
                        { val: 'FullNameCitizen', txt: ' اسم المواطن' },
                        { val: 'NameService', txt: ' اسم الخدمة' },
                        { val: 'NameStaff', txt: ' اسم الموظف' },
                    ],


                    Properties: {
                        caption: "الخدمات العالقة",
                        sortname: 'SERVICE_FORM_SEQ',
                        sortorder: "desc",
                        url: getServicetPendingUrl,
                        //postData: {
                        //    idStaff: id,
                        //},
                        colNames: [
                            'مقدمة من الانترنت', ' اسم المواطن', 'اسم مقدم الطلب', 'رقم هوية مقدم الطلب', 'رقم جوال مقدم الطلب', 'اسم الخدمة', 'تاريخ التقديم', 'الحالة', 'الكود', 'الباركود', 'رقم الطلب', 'تاريخ القراءة',
                            ' اسم المواطن',  'كود الخدمة',  ' كود الموظف',
                            ' اسم الموظف', 'حالة الطلب', "كود الحالة", "مرفقات إضافية ", 'route'
                        ],
                        colModel: [
                             {
                                 name: 'IS_INTERNET',
                                 index: 'IS_INTERNET',
                                 width: 80,
                                 editable: true,
                                 sortable: true,
                                 viewable: true,
                                 hidedlg: false,
                                 hidden: false,
                                 fixed: true,
                                 searchoptions: { sopt: ['cn', 'eq'] }
                             },
                              {
                                  name: 'FullNameCitizen',
                                  index: 'FullNameCitizen',
                                  width: 150,
                                  editable: false,
                                  sortable: true,
                                  viewable: true,
                                  hidedlg: false,
                                  hidden: false,
                                  fixed: true,
                                  searchoptions: { sopt: ['cn', 'eq'] }
                              },
                               {
                                   name: 'NameOfApplicant',
                                   index: 'NameOfApplicant',
                                   width: 150,
                                   editable: false,
                                   sortable: true,
                                   viewable: true,
                                   hidedlg: false,
                                   hidden: forRamallah == "N" ? false : true,
                                   fixed: true,
                                   // searchoptions: { sopt: ['cn', 'eq'] }
                               },
                                 {
                                     name: 'IdnoOfApplicant',
                                     index: 'IdnoOfApplicant',
                                     width: 150,
                                     editable: false,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: forRamallah == "N" ? false : true,
                                     fixed: true,
                                     // searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                   {
                                       name: 'MobileOfApplicant',
                                       index: 'MobileOfApplicant',
                                       width: 150,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: forRamallah == "N" ? false : true,
                                       fixed: true,
                                       // searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                 {
                                     name: 'NameService',
                                     index: 'NameService',
                                     width: 100,
                                     editable: false,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                  {
                                      name: 'DATE_RECEIVED',
                                      index: 'DATE_RECEIVED',
                                      width: 100,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      sorttype: 'date',
                                      formatter: 'date',
                                      formatoptions: { newformat: 'd/m/Y' },
                                      datefmt: 'd-M-Y',
                                      searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                      searchrules: { date: true }

                                  },
                            {
                                //name: 'StatusR',
                                //index: 'StatusR',
                                name: 'Status',
                                index: 'Status',
                                width: 100,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'ID',
                                index: 'ID',
                                key: true,
                                editable: false,
                                viewable: false,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                            {
                                name: 'BarCode',
                                index: 'BarCode',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'SERVICE_FORM_SEQ',
                                index: 'SERVICE_FORM_SEQ',
                                width: 80,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                            },
                       
                            {
                                name: 'DATE_READ',
                                index: 'DATE_READ',
                                width: 100,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                sorttype: 'date',
                                formatter: 'date',
                                formatoptions: { newformat: 'd/m/Y' },
                                datefmt: 'd-M-Y',
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                searchrules: { date: true }

                            },
                            {
                                name: 'NameCitizen',
                                index: 'NameCitizen',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                      
                            {
                                name: 'ServiceRef',
                                index: 'ServiceRef',
                                width: 100,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                     
                            {
                                name: 'STAFF_REF',
                                index: 'STAFF_REF',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'NameStaff',
                                index: 'NameStaff',
                                width: 80,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'StatusForm',
                                index: 'StatusForm',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'StatusId',
                                index: 'StatusId',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'NumberAttachCitizen',
                                index: 'NumberAttachCitizen',
                                width: 150,
                                editable: false,
                                viewable: false,
                                hidedlg: true,
                                hidden: false,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                            {
                                name: 'ROUTE_ID',
                                index: 'ROUTE_ID',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: false,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                            },
                            //      {
                            //          name: 'Opinions',
                            //          index: 'Opinions',
                            //          width: 150,
                            //          editable: true,
                            //          sortable: true,
                            //          viewable: false,
                            //          hidedlg: false,
                            //          hidden: false,
                            //          fixed: true,
                            //      }
                        ],
                        //editData: {
                        //    idStaff: id,

                        //},

                        onSelectRow: function (rowId) {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            $(this).attr("aria-selected", "true");
                        },
                        rowattr: function (rowData, currentObj, rowId) {
                            var aa = rowData.SERVICE_FORM_SEQ;


                            if (aa == idForm) {


                                $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                $("#" + rowId).click();

                                return {
                                    "aria-selected": 'true',
                                    "class": "ui-state-highlight selectedClass"
                                };

                            }
                       
                            return '';
                        },
                        ondblClickRow: function (rowId) {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = getServiceForm;
                            openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ,type: "pending", no: "2" });
                            //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("pending", "pending");
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("2", "2");
                            //window.open(lnk, '_blank');
                        },
                    }
                };
            };

            var initServiceGrid = function () {
                // var sRow = BT.Grid.getSelectedRow(table, this);

                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().GroupBy,
                    options: gridOpts().Properties,
                });

                BT.Grid.addButton(table, {
                    title: 'مشاهدة',
                    buttonicon: 'fa fa-align-justify',
                    id: 'getServiceForm' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var lnk = getServiceForm;
                        openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ, type: "pending", no: "2" });

                        //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                        //lnk = lnk.replace("&amp;", "&");
                        //lnk = lnk.replace("pending", "pending");
                        //lnk = lnk.replace("&amp;", "&");
                        //lnk = lnk.replace("2", "2");
                        //window.open(lnk, '_blank');
                    }
                });

                //BT.Grid.addButton(table, {
                //    title: 'سير العمل',
                //    buttonicon: 'fa fa-align-justify',
                //    id: 'getNotesWorkFlowService' + BT.getNoHash(table),
                //    onClickButton: function () {
                //        var sRow = BT.Grid.getSelectedRow(table, this);
                //        if (sRow == null) return;
                //        BT.Dialog.Create('#modalNoteWorkFlowService', {
                //            title: 'سير العمل',
                //            width: 'max',
                //            onOpenFn: function () {
                //                Em.NotesWorkFlowService.init(
                //                    notesWorkFlowUrl, sRow.SERVICE_FORM_SEQ, attachurl
                //                );
                //            }
                //        });
                //    }
                //});

                //BT.Grid.addSeparstor(table);

                //BT.Grid.addButton(table, {
                //    title: 'الرسائل',
                //    buttonicon: 'fa fa-envelope blue',
                //    id: 'getMsgService' + BT.getNoHash(table),
                //    onClickButton: function () {
                //        var sRow = BT.Grid.getSelectedRow(table, this);
                //        if (sRow == null) return;
                //        BT.Dialog.Create('#modalMsgService', {
                //            title: 'الرسائل',
                //            width: 'max',
                //            onOpenFn: function () {
                //                Em.MsgService.init(
                //                    msgUrl, sRow.ID, textMesgUrl, false, "#modalTextFullMsg", "#fullMsg"
                //                );
                //            }
                //        });
                //    }
                //});

                //BT.Grid.addButton(table, {
                //    title: 'الآراء',
                //    buttonicon: 'fa fa-align-justify',
                //    id: 'getOpinionService' + BT.getNoHash(table),
                //    onClickButton: function () {
                //        var sRow = BT.Grid.getSelectedRow(table, this);
                //        if (sRow == null) return;
                //        BT.Dialog.Create('#modalAllOpinionForService', {
                //            title: 'الآراء',
                //            width: 'max',
                //            onOpenFn: function () {
                //                Em.AllOpinionForService.init(
                //                    opinionForServiceUrl, sRow.ID, false, printOpinion
                //                );
                //            }
                //        });
                //    }
                //});


                BT.Grid.addButton(table, {
                    title: 'إضافة مرفقات',
                    buttonicon: 'fa fa-align-justify',
                    id: 'changeStatusService' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        BT.Dialog.Create('#modalPendingAttach', {
                            title: 'إضافة مرفقات',
                            onOpenFn: function () {
                            },
                            addButtons: [
                                {
                                    id: 'btnUnEndProGrp',
                                    text: 'حفظ',
                                    'class': 'btn btn-sm btn-success',
                                    click: function () {

                                        $("#attachFormPending").ajaxForm({
                                            type: "POST",
                                            url: addAttachUrl,
                                            data: {
                                                id: sRow.ID,
                                                idForm: sRow.SERVICE_FORM_SEQ
                                            },
                                            //mimeType: "multipart/form-data",
                                            success: (function (data44) {
                                         
                                                if (data44 == "Ok") {
                                                    BT.showSuccessNotice();
                                                    BT.Grid.reload(table);
                                                    BT.Dialog.hide('#modalPendingAttach');
                                                } else {
                                                    BT.showErrorNotice(data44.msg);

                                                }


                                            })
                                        }).submit();


                                    }
                                }
                            ]
                        });
                    }
                });

                BT.Grid.addButton(table, {
                    title: 'الغاء التعليق',
                    buttonicon: 'fa fa-align-justify',
                    id: 'delContentItem' + BT.getNoHash(table),
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (BT.isNullOrEmpty(sRow)) return;
                       
                        BT.Dialog.confirm({
                            id: 'confirmDel',
                            message: 'سيتم تغيير حالة الطلب ورجوعه للمسار',
                            post: {
                                url: returnPathUrl,
                                data: {
                                    idform: sRow.SERVICE_FORM_SEQ,
                                    myorder: sRow.ROUTE_ID
                                },
                                onSuccessFn: function () {
                                    // location.reload();
                                    $(table).trigger('reloadGrid');
                                }
                            }
                        });
                    }
                });
                //BT.Grid.addButton(table, {
                //    title: 'مرفقات إضافية من المواطن',
                //    buttonicon: 'fa fa-align-justify',
                //    id: 'getAttachCitizen',
                //    onClickButton: function () {
                //        var sRow = BT.Grid.getSelectedRow(table, this);
                //        if (sRow == null) return;
                //        BT.Dialog.Create('#modalAnotherAttachCitizen', {
                //            title: 'مرفقات إضافية للطلب من المواطن',
                //            width: 'max',

                //            onOpenFn: function () {
                //                Em.AnotherAttachCitizen.init(
                //                    attachCitizenUrl, downloadCitizenUrl, addCitizenAttachUrl, sRow.SERVICE_FORM_SEQ, sRow.StatusForm
                //                );
                //            }
                //        });
                //    }
                //});

            };

            var init = function (pGetServicetPendingUrl, pAddAttachUrl, pGetServiceForm, pReturnPathUrl, pId,pIdForm,pForRamallah) {
                if (
                    BT.isNullOrEmpty(pGetServicetPendingUrl)
                   || BT.isNullOrEmpty(pAddAttachUrl)
                   || BT.isNullOrEmpty(pGetServiceForm)
                   || BT.isNullOrEmpty(pReturnPathUrl)
                    
                ) {
                    BT.showErrorNotice('Em.ServicetUnderFlow.init: missing params');
                    return;
                }

                getServicetPendingUrl = pGetServicetPendingUrl;
                addAttachUrl = pAddAttachUrl;
                getServiceForm = pGetServiceForm;
                returnPathUrl = pReturnPathUrl;
                id = pId;
                forRamallah = pForRamallah;
                idForm = pIdForm;
                initServiceGrid();
            };

            return {
                init: init
            };
        })(),

        GroupStaff: (function () {
            var getServicetPendingUrl,
            
                id;

            var table = '#GroupStaffTable';
            var pager = '#GroupStaffTablePager';

            var gridOpts = function () {
                return {
                    GroupBy: [
              
                        { val: 'NameStaff', txt: ' اسم الموظف' },
                    ],


                    Properties: {
                        caption: "مجموعة الموظفين",
                        sortname: 'NameStaff',
                        sortorder: "desc",
                        url: getServicetPendingUrl,
                        postData: {
                            nodeId: id,
                        },
                        colNames: [
                            'الكود','codeStaff', ' اسم الموظف','كود المسار'
                        ],
                        colModel: [
                  
                            {
                                name: 'ID',
                                index: 'ID',
                                key: true,
                                editable: false,
                                viewable: false,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },
                      
                            {
                                name: 'STAFF_ID',
                                index: 'STAFF_ID',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: true,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'NameStaff',
                                index: 'NameStaff',
                                width: 80,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                {
                                    name: 'NODE_ID',
                                    index: 'NODE_ID',
                                    key: true,
                                    editable: false,
                                    viewable: false,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                    
                    
                        ],
                        editData: {
                            nodeId: id,

                        },

                        onSelectRow: function (rowId) {

                        },

                    }
                };
            };

            var initServiceGrid = function () {
                // var sRow = BT.Grid.getSelectedRow(table, this);

                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().GroupBy,
                    options: gridOpts().Properties,
                });

   
       

            };

            var init = function (pGetServicetPendingUrl,pId) {
                if (
                    BT.isNullOrEmpty(pGetServicetPendingUrl)
        

                ) {
                    BT.showErrorNotice('Em.ServicetUnderFlow.init: missing params');
                    return;
                }

                getServicetPendingUrl = pGetServicetPendingUrl;
                id = pId;
                initServiceGrid();
            };

            return {
                init: init
            };
        })(),

        ServiceOss: (function () {
            var getTypeCraftUrl,
                detailsUrl,
                user,
                printCardReviewUrl,
                cancelUrl,
                receivedDocUrl,
                isOssManagerl,
                printFormUrl,
                updateFormUrl,
                idForm,
                staffGroupUrl,
                staffUrl,
                empId,
                empSelect,
                searchNT1,
                printSanadUrl,
                ramallah,
                table = '#ServiceOssTable',
                pager = '#ServiceOssTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'NameServiceFormA', txt: 'اسم الخدمة' },
                        ],
                   
               
                        Properties: {
                            caption: "الخدمات المقدمة من المركز",
                            //sortname: 'DATE_SUBMITTED',
                            sortname: 'ID',
                            sortorder: "desc",
                            url: getTypeCraftUrl,

                            postData: {
                                idstaff: empSelect.val(), hod1: $("#s2id_hod1").text().trim(),
                                hay1: $("#s2id_hay1").text().trim(), land1: $("#s2id_land1").text().trim()
                            },
                            colNames: [
                             'مقدمة من الانترنت', 'اسم المواطن', 'اسم مقدم الطلب', 'رقم هوية مقدم الطلب', 'رقم جوال مقدم الطلب', 'اسم الخدمة', 'تاريخ التقديم', 'الشقة', 'الطابق', 'البناية', 'القطعة', 'الحي', 'الحوض', 'عند الموظف', 'مقدم الطلب', 'حالة الطلب', 'الاكشن', 'رقم الطلب', 'رقم الهوية', 'البار كود',
                                'ServiceSeq', 'تم الاستلام', 'اسم المستلم', 'رقم الطابع', 'رقم الصادر', ''],
                            colModel: [
                                  {
                                      name: 'IS_INTERNET',
                                      index: 'IS_INTERNET',
                                      width: 80,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                   {
                                       name: 'FullName',
                                       index: 'FullName',
                                       width: 150,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] },
                                       //searchrules: { date: true },

                                   },
                                   {
                                       name: 'NameOfApplicant',
                                       index: 'NameOfApplicant',
                                       width: 150,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: ramallah == "N" ? false : true,
                                       fixed: true,
                                       // searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                {
                                    name: 'IdnoOfApplicant',
                                    index: 'IdnoOfApplicant',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: ramallah == "N" ? false : true,
                                    fixed: true,
                                    // searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                 {
                                     name: 'MobileOfApplicant',
                                     index: 'MobileOfApplicant',
                                     width: 150,
                                     editable: false,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: ramallah == "N" ? false : true,
                                     fixed: true,
                                     // searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                    {
                                        name: 'NameServiceFormA',
                                        index: 'NameServiceFormA',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                             {
                                 name: 'DATE_SUBMITTED',
                                 index: 'DATE_SUBMITTED',
                                 width: 120,
                                 editable: true,
                                 sortable: true,
                                 viewable: true,
                                 hidedlg: false,
                                 // hidden: false,
                                 fixed: true,

                                 sorttype: 'date',
                                 formatter: 'date',
                                 formatoptions: { newformat: 'd/m/Y' },
                                 datefmt: 'd-M-Y',
                                 searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                 //searchoptions: { sopt: ['eq'] },
                                 searchrules: { date: true },

                             },
                             {
                                 name: 'ApartmentName',
                                 index: 'ApartmentName',
                                 width: 50,
                                 editable: true,
                                 sortable: true,
                                 viewable: true,
                                 hidedlg: false,
                                 hidden: false,
                                 fixed: true,
                                 searchoptions: { sopt: ['cn', 'eq'] }
                             },

                                                      {
                                                          name: 'FloorName',
                                                          index: 'FloorName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

                                                      {
                                                          name: 'BuildingName',
                                                          index: 'BuildingName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },
                                                    {
                                                        name: 'LandName',
                                                        index: 'LandName',
                                                        width: 80,
                                                        editable: true,
                                                        sortable: true,
                                                        viewable: true,
                                                        hidedlg: false,
                                                        hidden: false,
                                                        fixed: true,
                                                        searchoptions: { sopt: ['cn', 'eq'] }
                                                    },
                                                      {
                                                          name: 'HayName',
                                                          index: 'HayName',
                                                          width: 80,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },
                                                          {
                                                              name: 'HodName',
                                                              index: 'HodName',
                                                              width: 80,
                                                              editable: true,
                                                              sortable: true,
                                                              viewable: true,
                                                              hidedlg: false,
                                                              hidden: false,
                                                              fixed: true,
                                                              // searchoptions: { sopt: ['cn', 'eq'] }
                                                          },
                                  {
                                      name: 'StaffName',
                                      index: 'StaffName',
                                      width: 150,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                            {
                                name: 'FromStaffName',
                                index: 'FromStaffName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                    {
                                        name: 'AStatus',
                                        index: 'AStatus',
                                        width: 100,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                                       {
                                           name: 'Action',
                                           index: 'Action',
                                           width: 50,
                                           editable: true,
                                           sortable: true,
                                           viewable: true,
                                           hidedlg: false,
                                           hidden: false,
                                           fixed: true,
                                           searchoptions: { sopt: ['cn', 'eq'] }
                                       },
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    width:50,
                                    editable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                               
                                                {
                                                    name: 'IdCard',
                                                    index: 'IdCard',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                   {
                                       name: 'BAR_CODE',
                                       index: 'BAR_CODE',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                               
                       
                            {
                                name: 'SERVICE_REF',
                                index: 'SERVICE_REF',
                                editable: true,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                                
                               {
                                   name: 'IS_RECEIVED',
                                   index: 'IS_RECEIVED',
                                   width: 80,
                                   editable: true,
                                   sortable: true,
                                   viewable: true,
                                   hidedlg: false,
                                   hidden: false,
                                   fixed: true,
                                   searchoptions: { sopt: ['cn', 'eq'] }
                               },
                                   {
                                       name: 'WHO_RECEIVED',
                                       index: 'WHO_RECEIVED',
                                       width: 100,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   }, 
                            {
                                name: 'STICKERS_NO',
                                index: 'STICKERS_NO',
                                width: 100,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                              {
                                  name: 'OUTDOCUMENTS_ID',
                                  index: 'OUTDOCUMENTS_ID',
                                  editable: true,
                                  viewable: true,
                                  hidedlg: true,
                                  hidden: false,
                                  searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                              },

                                    {
                                        name: 'RoutId',
                                        index: 'RoutId',
                                        width: 100,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: true,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                            ],
                            editData: {
                                idstaff: empSelect.val(), hod1: $("#s2id_hod1").text().trim(),
                                hay1: $("#s2id_hay1").text().trim(), land1: $("#s2id_land1").text().trim()
                            },
                            onSelectRow: function (rowId) {
                                $("#receivedItem1").hide();
                                $("#groupStaff").hide();
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                $(this).attr("aria-selected", "true");

                                if (sRow == null) return;
                                if (sRow.AStatus == "منتهي") {
                          
                                    $("#receivedItem1").show();

                                }

                                if (sRow.StaffName == "مجموعة") {

                                    $("#groupStaff").show();

                                }

                            },
                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.ID;


                                if (aa == idForm) {


                                    $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                    $("#" + rowId).click();

                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };

                                }
                          
                                return '';
                            },
                            ondblClickRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID, type: "all",no:"2" });
                                //lnk = lnk.replace("__id__", sRow.ID);
                                //   lnk = lnk.replace("&amp;", "&");
                                //   lnk = lnk.replace("all", "all");
                                //   lnk = lnk.replace("&amp;", "&");
                                //   lnk = lnk.replace("2", "2");
                                //   window.open(lnk, '_blank');
                            },
                        }
                    };
                },

                initDepartmentsGrid = function () {
                    searchNT1.off('click').on('click', function () {
                        BT.Grid.defaultJqGrid({
                            table: table,
                            pager: pager,
                            grpBy: gridOpts().GroupBy,
                            options: gridOpts().Properties,
                            editForms: gridOpts().EditForms
                        });
                        BT.Grid.addButton(table, {
                            title: 'التفاصيل',
                            buttonicon: 'fa fa-align-justify',
                            id: 'goToSectionsBtn' + BT.getNoHash(table),
                            onClickButton: function() {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID, type: "all", no: "2" });

                                //                      lnk = lnk.replace("__id__", sRow.ID);
                                //                      lnk = lnk.replace("&amp;", "&");
                                //                      lnk = lnk.replace("all", "all");
                                //                      lnk = lnk.replace("&amp;", "&");
                                //                      lnk = lnk.replace("2", "2");
                                //window.open(lnk, '_blank');
                            }
                        });


                        BT.Grid.addButton(table, {
                            title: 'طباعة بطاقة المراجعة',
                            buttonicon: 'fa fa-print blue',
                            id: 'printCard',
                            onClickButton: function() {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk = printCardReviewUrl;
                                openWindowWithPost(lnk, { serviceFId: sRow.ID, User: user });

                                //lnk = lnk.replace("_d_", sRow.ID);
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("_u_", user);
                                //window.open(lnk, '_blank');

                            }
                        });

                        BT.Grid.addButton(table, {
                            title: 'طباعة الطلب',
                            buttonicon: 'fa fa-print blue',
                            id: 'printForm',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk = printFormUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID});

                                //lnk = lnk.replace("_d_", sRow.ID);
                                //window.open(lnk, '_blank');

                            }
                        });

                        BT.Grid.addButton(table, {
                            title: 'تعديل',
                            buttonicon: 'fa fa-pencil-square-o blue',
                            id: 'editSF',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (BT.isNullOrEmpty(sRow)) return;
                                var lnk = updateFormUrl;
                                openWindowWithPost(lnk, { seq: sRow.ID });

                                //lnk = lnk.replace("_id_", sRow.ID);
                                //window.open(lnk, '_blank');
                            }
                        });


                        BT.Grid.addButton(table, {
                            title: 'مجموعة',
                            buttonicon: 'fa fa-align-justify',
                            id: 'groupStaff' ,
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                BT.Dialog.Create('#modalStaffgroup', {
                                    title: 'مجموعة الموظفين',
                                    width: 'max',
                                    onOpenFn: function () {
                                        Em.StaffGroup.init(
                                            staffGroupUrl, sRow.RoutId
                                        );
                                    }
                                });
                            }
                        });

                        if(isOssManagerl==="True") {
                            BT.Grid.addButton(table, {
                                title: 'إلغاء',
                                buttonicon: 'fa fa-times-circle-o red',
                                id: 'cancelSF',
                                onClickButton: function() {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (BT.isNullOrEmpty(sRow)) return;

                                    BT.Dialog.Create('#modalCancelModel', {
                                        title: 'إلغاء الطلب',
                                        onOpenFn: function () {
                                        },
                                        addButtons: [
                                            {
                                                //id: 'btnUnEndProGrp',
                                                id: 'btnSave',
                                                text: 'حفظ',
                                                'class': 'btn btn-sm btn-success',
                                                click: function () {

                                                    $('#modalCancelModel' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                    $('#modalCancelModel' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);

                                                    $.ajax({
                                                        type: "POST",
                                                        url: cancelUrl,
                                                        data: {
                                                            idForm: sRow.ID,
                                                            txt: $("#cancelText").val()
                                                        },

                                                        success: (function (data) {
                                                            if (data.done) {
                                                                BT.showSuccessNotice();

                                                                BT.Dialog.hide('#modalCancelModel');
                                                                BT.Grid.reload(table);
                                                            } else {
                                                                BT.showErrorNotice(data.msg);
                                                                $('#modalCancelModel' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);

                                                            }

                                                        })
                                                    });

                                                }
                                            }
                                        ]
                                    });
                                    //BT.Dialog.confirm({
                                    //    id: 'confirmDel',
                                    //    message: 'سيتم إلغاء الطلب المختار',
                                    //    post: {
                                    //                    url: cancelUrl,
                                    //        data: { idForm: sRow.ID },
                                    //        onSuccessFn: function(dlg) {
                                    //            $(table).trigger('reloadGrid');
                                    //                        }
                                    //            }
                                    //});
                                }
                            });
                        }

                        BT.Grid.addButton(table, {
                            title: 'تم الاستلام',
                            buttonicon: 'fa fa-align-justify',
                            id: 'receivedItem1',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (BT.isNullOrEmpty(sRow)) return;
                                BT.Dialog.Create('#modalReciveDoc1', {
                                    title: 'تم الاستلام',
                                    onOpenFn: function () {
                                    },
                                    addButtons: [
                                        {
                                            //id: 'btnUnEndProGrp',
                                            id: 'btnSave',
                                            text: 'حفظ',
                                            'class': 'btn btn-sm btn-success',
                                            click: function () {

                                                $('#modalReciveDoc1' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                $('#modalReciveDoc1' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);

                                                $.ajax({
                                                    type: "POST",
                                                    url: receivedDocUrl,
                                                    data: {
                                                        idForm: sRow.ID,
                                                        NameReceiver: $("#reciverName1").val()
                                                    },
                                                    //mimeType: "multipart/form-data",
                                                    //contentType: false,
                                                    //cache: false,
                                                    //processData: false,
                                                    success: (function (data) {
                                                        if (data.done) {
                                                            BT.showSuccessNotice();

                                                            BT.Dialog.hide('#modalReciveDoc1');
                                                            BT.Grid.reload(table);
                                                        } else {
                                                            BT.showErrorNotice(data.msg);
                                                            $('#modalReciveDoc1' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);

                                                        }

                                                    })
                                                });

                                            }
                                        }
                                    ]
                                });
                            }
                        });
                        if (ramallah != "Y") {
                            BT.Grid.addButton(table, {
                                title: 'سندقبض',
                                buttonicon: 'fa fa-file blue',
                                id: 'sand' + BT.getNoHash(table),
                                onClickButton: function() {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (sRow == null) return;
                                    var lnk = printSanadUrl;
                                    lnk = lnk.replace("_ff_", sRow.ID);
                                    lnk = lnk.replace("&amp;", "&");
                                    lnk = lnk.replace("_tt_", "نسخة");
                                    window.open(lnk, '_blank');

                            }


                        });
                        }
                    }).trigger('click');
                },

                init = function (pGetTypeCraftUrl, pDetailsUrl, pPrintCardReviewUrl, pCancelUrl, pReceivedDocUrl, pPrintFormUrl, pUpdateFormUrl,  pUser, pIsOssManagerl
                    , pIdForm, pStaffGroupUrl, pStaffUrl, pSanadPrintUrl,pRamallah) {
                    if (
                        BT.isNullOrEmpty(pGetTypeCraftUrl)
                        || BT.isNullOrEmpty(pDetailsUrl)
                        || BT.isNullOrEmpty(pPrintCardReviewUrl)
                        || BT.isNullOrEmpty(pCancelUrl)
                        || BT.isNullOrEmpty(pReceivedDocUrl)
                        || BT.isNullOrEmpty(pPrintFormUrl)
                        || BT.isNullOrEmpty(pUpdateFormUrl)
                        || BT.isNullOrEmpty(pStaffGroupUrl)
                        || BT.isNullOrEmpty(pStaffUrl)
                        || BT.isNullOrEmpty(pSanadPrintUrl)
                    ) {
                        // BT.showErrorNotice('Em.UseSubWater.init: missing params');
                        return;
                    }

                    getTypeCraftUrl = pGetTypeCraftUrl;
                    detailsUrl = pDetailsUrl;
                    printCardReviewUrl = pPrintCardReviewUrl;
                    cancelUrl = pCancelUrl;
                    receivedDocUrl = pReceivedDocUrl;
                    user = pUser;
                    isOssManagerl = pIsOssManagerl;
                    printFormUrl = pPrintFormUrl;
                    updateFormUrl = pUpdateFormUrl;
                    idForm = pIdForm;
                    staffGroupUrl = pStaffGroupUrl;
                    staffUrl = pStaffUrl;
                    empSelect = $('#emp');
                    searchNT1 = $("#serchNF1");
                    printSanadUrl = pSanadPrintUrl;
                    ramallah = pRamallah;
                    BT.select2.defaultAr(empSelect, pStaffUrl);
                    initDepartmentsGrid();
                };

            return {
                init: init
            };
        })(),

        ServiceEndOss: (function () {
            var getTypeCraftUrl,
                detailsUrl,
                user,
                printCardReviewUrl,
                receivedDocUrl,
                isOssManagerl,
                printFormUrl,
                idForm,
               refreshFormUrl,
               pathGridUrl,
                serchNF2,
                forRamallah,
                table = '#ServiceEndOssTable',
                pager = '#ServiceOssEndTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'NameServiceFormA', txt: 'اسم الخدمة' },
                        ],


                        Properties: {
                            caption: "الخدمات  المنتهية",
                            sortname: 'ID',
                            sortorder: "desc",
                            url: getTypeCraftUrl,
                            postData: { hod1: $("#s2id_hod2").text().trim(), hay1: $("#s2id_hay2").text().trim(), land1: $("#s2id_land2").text().trim() },
                            colNames: [
                               'مقدمة من الانترنت', 'اسم المواطن', 'اسم مقدم الطلب', 'رقم هوية مقدم الطلب', 'رقم جوال مقدم الطلب', 'اسم الخدمة', 'تاريخ التقديم', 'شقة', 'طابق', 'بناية', 'القطعة', 'الحي', 'الحوض', 'مقدم الطلب', 'حالة الطلب', 'الاكشن', 'رقم الطلب', 'رقم الهوية', 'البار كود',
                                'ServiceSeq', 'تم الاستلام', 'اسم المستلم', 'رقم الطابع','رقم الصادر' ,''],
                            colModel: [
                                 {
                                     name: 'IS_INTERNET',
                                     index: 'IS_INTERNET',
                                     width: 80,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                {
                                    name: 'FullName',
                                    index: 'FullName',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] },
                                    //searchrules: { date: true },

                                },
                                 {
                                     name: 'NameOfApplicant',
                                     index: 'NameOfApplicant',
                                     width: 150,
                                     editable: false,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: forRamallah == "N" ? false : true,
                                     fixed: true,
                                     // searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                  {
                                      name: 'IdnoOfApplicant',
                                      index: 'IdnoOfApplicant',
                                      width: 150,
                                      editable: false,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: forRamallah == "N" ? false : true,
                                      fixed: true,
                                      // searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                   {
                                       name: 'MobileOfApplicant',
                                       index: 'MobileOfApplicant',
                                       width: 150,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: forRamallah == "N" ? false : true,
                                       fixed: true,
                                       // searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                 {
                                     name: 'NameServiceFormA',
                                     index: 'NameServiceFormA',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                     {
                                         name: 'DATE_SUBMITTED',
                                         index: 'DATE_SUBMITTED',
                                         width: 120,
                                         editable: true,
                                         sortable: true,
                                         viewable: true,
                                         hidedlg: false,
                                         // hidden: false,
                                         fixed: true,

                                         sorttype: 'date',
                                         formatter: 'date',
                                         formatoptions: { newformat: 'd/m/Y' },
                                         datefmt: 'd-M-Y',
                                         searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                         //searchoptions: { sopt: ['eq'] },
                                         searchrules: { date: true },

                                     },
                                     {
                                         name: 'ApartmentName',
                                         index: 'ApartmentName',
                                         width: 50,
                                         editable: true,
                                         sortable: true,
                                         viewable: true,
                                         hidedlg: false,
                                         hidden: false,
                                         fixed: true,
                                         searchoptions: { sopt: ['cn', 'eq'] }
                                     },

                                                      {
                                                          name: 'FloorName',
                                                          index: 'FloorName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

                                                      {
                                                          name: 'BuildingName',
                                                          index: 'BuildingName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },


                                                    {
                                                        name: 'LandName',
                                                        index: 'LandName',
                                                        width: 80,
                                                        editable: true,
                                                        sortable: true,
                                                        viewable: true,
                                                        hidedlg: false,
                                                        hidden: false,
                                                        fixed: true,
                                                        searchoptions: { sopt: ['cn', 'eq'] }
                                                    },
                                                      {
                                                          name: 'HayName',
                                                          index: 'HayName',
                                                          width: 80,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },
                                                       {
                                                           name: 'HodName',
                                                           index: 'HodName',
                                                           width: 80,
                                                           editable: true,
                                                           sortable: true,
                                                           viewable: true,
                                                           hidedlg: false,
                                                           hidden: false,
                                                           fixed: true,
                                                           // searchoptions: { sopt: ['cn', 'eq'] }
                                                       },
                            {
                                name: 'FromStaffName',
                                index: 'FromStaffName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                    {
                                        name: 'AStatus',
                                        index: 'AStatus',
                                        width: 100,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                                       {
                                           name: 'Action',
                                           index: 'Action',
                                           width: 50,
                                           editable: true,
                                           sortable: true,
                                           viewable: true,
                                           hidedlg: false,
                                           hidden: false,
                                           fixed: true,
                                           searchoptions: { sopt: ['cn', 'eq'] }
                                       },
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    width: 50,
                                    editable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                 
                                                {
                                                    name: 'IdCard',
                                                    index: 'IdCard',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                   {
                                       name: 'BAR_CODE',
                                       index: 'BAR_CODE',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                               
                     

                            {
                                name: 'SERVICE_REF',
                                index: 'SERVICE_REF',
                                editable: true,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                               
                               {
                                   name: 'IS_RECEIVED',
                                   index: 'IS_RECEIVED',
                                   width: 80,
                                   editable: true,
                                   sortable: true,
                                   viewable: true,
                                   hidedlg: false,
                                   hidden: false,
                                   fixed: true,
                                   searchoptions: { sopt: ['cn', 'eq'] }
                               },
                                   {
                                       name: 'WHO_RECEIVED',
                                       index: 'WHO_RECEIVED',
                                       width: 100,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                            {
                                name: 'STICKERS_NO',
                                index: 'STICKERS_NO',
                                width: 100,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'OUTDOCUMENTS_ID',
                                index: 'OUTDOCUMENTS_ID',
                                editable: true,
                                viewable: true,
                                hidedlg: true,
                                hidden: false,
                                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                                    {
                                        name: 'RoutId',
                                        index: 'RoutId',
                                        width: 100,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: true,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                            ],
                            editData: { hod1: $("#s2id_hod2").text().trim(), hay1: $("#s2id_hay2").text().trim(), land1: $("#s2id_land2").text().trim() },

                            onSelectRow: function (rowId) {
                                $("#receivedItem11").hide();
                                //$("#groupStaff").hide();
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                $(this).attr("aria-selected", "true");

                                if (sRow == null) return;
                                if (sRow.AStatus == "منتهي") {

                                    $("#receivedItem11").show();

                                }

                         

                            },
                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.ID;


                                if (aa == idForm) {


                                    $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                    $("#" + rowId).click();

                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };

                                }

                                return '';
                            },
                            ondblClickRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID, type : "all", no : "2" });
                                //lnk = lnk.replace("__id__", sRow.ID);
                                // lnk = lnk.replace("&amp;", "&");
                                // lnk = lnk.replace("all", "all");
                                // lnk = lnk.replace("&amp;", "&");
                                // lnk = lnk.replace("2", "2");
                                // window.open(lnk, '_blank');
                            },
                        }
                    };
                },

                initDepartmentsGrid = function () {
                    serchNF2.off('click').on('click', function () {
                        BT.Grid.defaultJqGrid({
                            table: table,
                            pager: pager,
                            grpBy: gridOpts().GroupBy,
                            options: gridOpts().Properties,
                            editForms: gridOpts().EditForms
                        });
                        BT.Grid.addButton(table, {
                            title: 'التفاصيل',
                            buttonicon: 'fa fa-align-justify',
                            id: 'goToSectionsBtn' + BT.getNoHash(table),
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID, type: "all", no: "2" });

                            }
                        });

                        BT.Grid.addButton(table, {
                            title: 'طباعة بطاقة المراجعة',
                            buttonicon: 'fa fa-print blue',
                            id: 'printCard',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk = printCardReviewUrl;
                                openWindowWithPost(lnk, { serviceFId: sRow.ID, User: user });

                            }
                        });
                        BT.Grid.addButton(table, {
                            title: 'طباعة الطلب',
                            buttonicon: 'fa fa-print blue',
                            id: 'printForm',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk = printFormUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID});

                                //lnk = lnk.replace("_d_", sRow.ID);
                                //window.open(lnk, '_blank');

                            }
                        });

             

                        BT.Grid.addButton(table, {
                            title: 'تم الاستلام',
                            buttonicon: 'fa fa-align-justify',
                            id: 'receivedItem11',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (BT.isNullOrEmpty(sRow)) return;
                                BT.Dialog.Create('#modalReciveDoc11', {
                                    title: 'تم الاستلام',
                                    onOpenFn: function () {
                                    },
                                    addButtons: [
                                        {
                                            //id: 'btnUnEndProGrp',
                                            id: 'btnSave',
                                            text: 'حفظ',
                                            'class': 'btn btn-sm btn-success',
                                            click: function () {

                                                $('#modalReciveDoc11' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                $('#modalReciveDoc11' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);

                                                $.ajax({
                                                    type: "POST",
                                                    url: receivedDocUrl,
                                                    data: {
                                                        idForm: sRow.ID,
                                                        NameReceiver: $("#reciverName11").val(),
                                                        stickersNo1: $("#stickersNo11").val()
                                                    },
                                          
                                                    success: (function (data) {
                                                        if (data.done) {
                                                            BT.showSuccessNotice();

                                                            BT.Dialog.hide('#modalReciveDoc11');
                                                            BT.Grid.reload(table);
                                                        } else {
                                                            BT.showErrorNotice(data.msg);
                                                            $('#modalReciveDoc11' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);

                                                        }

                                                    })
                                                });

                                            }
                                        }
                                    ]
                                });
                            }
                        });


                        if (isOssManagerl === "True") {
                            BT.Grid.addButton(table, {
                                title: 'مسار الخدمة',
                                buttonicon: 'fa fa-undo red',
                                id: 'refreshSFeND',
                                onClickButton: function () {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (BT.isNullOrEmpty(sRow)) return;

                                    BT.Dialog.Create('#modalNewPathE', {
                                        title: 'مسار الخدمة',
                                        width: 'max',
                                        onOpenFn: function () {
                                            Em.NewPath.init(
                                                pathGridUrl, refreshFormUrl, sRow.ID, '#NewPathETable', '#NewPathETablePager', '#modalReturnPathE',
                                                '#idFormE', '#routeIdE', '#idSwE', '#notesStaffE', "#refreshServiceEnd", true, '#ServiceEndOssTable'
                                            );
                                        }
                                    });
                                }
                            });
                        }
                    }).trigger('click');
                },

                init = function (pGetTypeCraftUrl, pDetailsUrl, pPrintCardReviewUrl, pReceivedDocUrl, pPrintFormUrl,
                   pRefreshFormUrl, pPathGridUrl, pUser, pIsOssManagerl
                    , pIdForm, pForRamallah) {
                    if (
                        BT.isNullOrEmpty(pGetTypeCraftUrl)
                        || BT.isNullOrEmpty(pDetailsUrl)
                        || BT.isNullOrEmpty(pPrintCardReviewUrl)
                        || BT.isNullOrEmpty(pReceivedDocUrl)
                        || BT.isNullOrEmpty(pPrintFormUrl)
                        || BT.isNullOrEmpty(pRefreshFormUrl)
                        || BT.isNullOrEmpty(pPathGridUrl)
               
                    ) {
                        // BT.showErrorNotice('Em.UseSubWater.init: missing params');
                        return;
                    }

                    getTypeCraftUrl = pGetTypeCraftUrl;
                    detailsUrl = pDetailsUrl;
                    printCardReviewUrl = pPrintCardReviewUrl;
                    receivedDocUrl = pReceivedDocUrl;
                    user = pUser;
                    isOssManagerl = pIsOssManagerl;
                    printFormUrl = pPrintFormUrl;
                    refreshFormUrl = pRefreshFormUrl;
                    pathGridUrl = pPathGridUrl;
                    idForm = pIdForm;
                    forRamallah = pForRamallah;
                    serchNF2 = $("#serchNF2");
                    initDepartmentsGrid();
                };

            return {
                init: init
            };
        })(),

        AllService: (function () {
            var getTypeCraftUrl,
                detailsUrl,
                user,
                printCardReviewUrl,
                cancelUrl,
                receivedDocUrl,
                isOssManagerl,
                printFormUrl,
                updateFormUrl,
                idForm,
                staffGroupUrl,
                staffUrl,
                empId,
                empSelect,
                serch,
                land,
                hay,
                hod,
                pSearch1,
                advanceSearch1,
                ramallah,
                table = '#AllServiceTable',
                pager = '#AllServiceTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'NameServiceFormA', txt: 'اسم الخدمة' },
                        ],


                        Properties: {
                            caption: "كافة الطلبات  ",
                            sortname: 'ID',
                            sortorder: "desc",
                            url: getTypeCraftUrl,
                            postData: {
                                hod1: $("#s2id_hod").text().trim(), hay1: $("#s2id_hay").text().trim(), land1: $("#s2id_land").text().trim(), pSearch: pSearch1
, advanceSearch: advanceSearch1
                            },
                            colNames: [
                                'مقدمة من الانترنت', 'اسم المواطن', 'اسم مقدم الطلب', 'رقم هوية مقدم الطلب', 'اسم الخدمة', 'تاريخ التقديم', 'شقة', 'طابق', 'بناية', 'القطعة', 'الحي', 'الحوض', 'مقدم الطلب', 'حالة الطلب', 'الاكشن', 'رقم الطلب', 'رقم الهوية', 'البار كود',
                                'ServiceSeq', 'تم الاستلام', 'اسم المستلم', 'رقم الطابع', 'رقم الصادر',
    ''],
                            colModel: [
                                 {
                                     name: 'IS_INTERNET',
                                     index: 'IS_INTERNET',
                                     width: 80,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                {
                                    name: 'FullName',
                                    index: 'FullName',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] },
                                    //searchrules: { date: true },

                                },
                                {
                                    name: 'NameOfApplicant',
                                    index: 'NameOfApplicant',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: ramallah == "N" ? false : true,
                                    fixed: true,
                                    // searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                {
                                    name: 'IdnoOfApplicant',
                                    index: 'IdnoOfApplicant',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: ramallah == "N" ? false : true,
                                    fixed: true,
                                    // searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                 {
                                     name: 'NameServiceFormA',
                                     index: 'NameServiceFormA',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                    {
                                        name: 'DATE_SUBMITTED',
                                        index: 'DATE_SUBMITTED',
                                        width: 120,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        // hidden: false,
                                        fixed: true,

                                        sorttype: 'date',
                                        formatter: 'date',
                                        formatoptions: { newformat: 'd/m/Y' },
                                        datefmt: 'd-M-Y',
                                        searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                        //searchoptions: { sopt: ['eq'] },
                                        searchrules: { date: true },

                                    },
                                    {
                                        name: 'ApartmentName',
                                        index: 'ApartmentName',
                                        width: 50,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },

                                                      {
                                                          name: 'FloorName',
                                                          index: 'FloorName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

                                                      {
                                                          name: 'BuildingName',
                                                          index: 'BuildingName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

                                   {
                                       name: 'LandName',
                                       index: 'LandName',
                                       width: 80,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                                     {
                                                         name: 'HayName',
                                                         index: 'HayName',
                                                         width: 80,
                                                         editable: true,
                                                         sortable: true,
                                                         viewable: true,
                                                         hidedlg: false,
                                                         hidden: false,
                                                         fixed: true,
                                                         searchoptions: { sopt: ['cn', 'eq'] }
                                                     },
                                                       {
                                                           name: 'HodName',
                                                           index: 'HodName',
                                                           width: 80,
                                                           editable: true,
                                                           sortable: true,
                                                           viewable: true,
                                                           hidedlg: false,
                                                           hidden: false,
                                                           fixed: true,
                                                           // searchoptions: { sopt: ['cn', 'eq'] }
                                                       },
                            {
                                name: 'FromStaffName',
                                index: 'FromStaffName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                    {
                                        name: 'AStatus',
                                        index: 'AStatus',
                                        width: 100,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                                       {
                                           name: 'Action',
                                           index: 'Action',
                                           width: 50,
                                           editable: true,
                                           sortable: true,
                                           viewable: true,
                                           hidedlg: false,
                                           hidden: true,
                                           fixed: true,
                                           searchoptions: { sopt: ['cn', 'eq'] }
                                       },
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    width: 50,
                                    editable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                              
                                  
                                                {
                                                    name: 'IdCard',
                                                    index: 'IdCard',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                   {
                                       name: 'BAR_CODE',
                                       index: 'BAR_CODE',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                             
                      

                            {
                                name: 'SERVICE_REF',
                                index: 'SERVICE_REF',
                                editable: true,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                               
                               {
                                   name: 'IS_RECEIVED',
                                   index: 'IS_RECEIVED',
                                   width: 80,
                                   editable: true,
                                   sortable: true,
                                   viewable: true,
                                   hidedlg: false,
                                   hidden: false,
                                   fixed: true,
                                   searchoptions: { sopt: ['cn', 'eq'] }
                               },
                                   {
                                       name: 'WHO_RECEIVED',
                                       index: 'WHO_RECEIVED',
                                       width: 100,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                            {
                                name: 'STICKERS_NO',
                                index: 'STICKERS_NO',
                                width: 100,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                             {
                                 name: 'OUTDOCUMENTS_ID',
                                 index: 'OUTDOCUMENTS_ID',
                                 editable: true,
                                 viewable: true,
                                 hidedlg: true,
                                 hidden: false,
                                 searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                             },
                                    {
                                        name: 'RoutId',
                                        index: 'RoutId',
                                        width: 100,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: true,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                            ],
                            editData: {
                                hod1: $("#s2id_hod").text().trim(), hay1: $("#s2id_hay").text().trim(), land1: $("#s2id_land").text().trim(), pSearch: pSearch1
, advanceSearch: advanceSearch1
                            },
                            onSelectRow: function (rowId) {
                        

                            },
                        }
                    };
                },

                initDepartmentsGrid = function () {
           
                    serch.off('click').on('click', function () {
                 
                        BT.Grid.defaultJqGrid({
                            table: table,
                            pager: pager,
                            grpBy: gridOpts().GroupBy,
                            options: gridOpts().Properties,
                            editForms: gridOpts().EditForms
                        });
                        BT.Grid.addButton(table, {
                            title: 'التفاصيل',
                            buttonicon: 'fa fa-align-justify',
                            id: 'goToSectionsBtn' + BT.getNoHash(table),
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID });
                                //lnk = lnk.replace("__id__", sRow.ID);
                      
                                //window.open(lnk, '_blank');
                            }
                        });
                    }).trigger('click');
             
                },

                init = function (pGetTypeCraftUrl, pDetailsUrl, pAdvanceSearch, pPSearch,pRamallah) {
                    if (
                        BT.isNullOrEmpty(pGetTypeCraftUrl)
                        || BT.isNullOrEmpty(pDetailsUrl)
                 

                    ) {
                        // BT.showErrorNotice('Em.UseSubWater.init: missing params');
                        return;
                    }

                    getTypeCraftUrl = pGetTypeCraftUrl;
                    detailsUrl = pDetailsUrl;
                    serch = $("#serch");
                    land = $("#land").val();
                    hay = $("#hay").val();
                    hod = $("#hod").val();
                    pSearch1 = pPSearch;
                    advanceSearch1 = pAdvanceSearch;
                    ramallah = pRamallah;
                    //if (pPSearch != null) {
                    //    var model11 = new Array;

                    //for (i = 0; i < 1; i++) {
                    //    var list = {
                    //        //FieldId:parseInt($("#fi_" + num).val()),
                    //        //Value: $("#Value_" + num).val(),
                    //        //Condition: $("#op_" + num).val(),
                    //        //Operation: $(".opsel").val(),
                    //        FieldId: "10",
                    //        Value: "AAA",
                    //        Condition: "OR",
                    //        Operation: $(".opsel").val(),
                    //    };
                    //    model11.push(list);
                    //}
                    //pSearch1 = model11;
                    //}
                    initDepartmentsGrid();
                

                };

            return {
                init: init
            };
        })(),


        ServiceNotForward: (function () {
            var getTypeCraftUrl,
                detailsUrl,
                forwardUrl,
            printCardReviewUrl,
            printFormUrl,
            ossIndexUrl,
            user,
            delUrl,
            editUrl,
            searchNF,
            postVoutcherServisesUrl,
            paidServiceForm,
            getPdf,
            taxVoutcher,
            getInfoTax,
            hay,
            hod,
            land,
            id,
            ossId,
            forRamallah,
            detailsServiceUrl,
            createSanadUrl,
            getPdfUrl,
            getCurUrl,
            selectPaidAmountUrl,
            taxesUrl,
            printSanadUrl,
            addServiceTaxAtGltax,
                table = '#ServiceNotForwardTable',
                pager = '#ServiceNotForwardTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'NameServiceFormA', txt: 'اسم الخدمة' },
                        ],

                        Properties: {
                            caption: "الخدمات الغير محولة",
                            sortname: 'ID',
                            sortorder: "desc",
                            url: getTypeCraftUrl,
                            postData: { hod1: $("#s2id_hod").text().trim(), hay1: $("#s2id_hay").text().trim(), land1: $("#s2id_land").text().trim() },
                            colNames: [
                               'مقدمة من الانترنت', 'اسم المواطن', 'اسم مقدم الطلب', 'رقم هوية مقدم الطلب', 'رقم جوال مقدم الطلب'
, '', 'نوع الخدمة', 'اسم الخدمة بالعربي', 'تاريخ التقديم', 'شقة', 'طابق', 'بناية', 'القطعة', 'الحي', 'الحوض', 'الموظف', 'رقم الطلب', 'رقم الهوية', 'البار كود', 'اسم الخدمة بالانجليزي', 'حالة الطلب',
                               'رقم الصادر', 'رقم السند','ServiceSeq', '',''],
                            colModel: [
                                 {
                                     name: 'IS_INTERNET',
                                     index: 'IS_INTERNET',
                                     width: 80,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                  {
                                      name: 'FullName',
                                      index: 'FullName',
                                      width: 150,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                  {
                                      name: 'NameOfApplicant',
                                      index: 'NameOfApplicant',
                                      width: 150,
                                      editable: false,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: forRamallah == "N" ? false : true,
                                      fixed: true,
                                      // searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                {
                                    name: 'IdnoOfApplicant',
                                    index: 'IdnoOfApplicant',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: forRamallah == "N" ? false : true,
                                    fixed: true,
                                    // searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                                                {
                                                                    name: 'MobileOfApplicant',
                                                                    index: 'MobileOfApplicant',
                                                                    width: 150,
                                                                    editable: false,
                                                                    sortable: true,
                                                                    viewable: true,
                                                                    hidedlg: false,
                                                                    hidden: forRamallah == "N" ? false : true,
                                                                    fixed: true,
                                                                    // searchoptions: { sopt: ['cn', 'eq'] }
                                                                },
                                    {
                                        name: 'STAKEHOLDER_ID',
                                        index: 'STAKEHOLDER_ID',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: true,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },

                                      {
                                          name: 'NameServiceFormA',
                                          index: 'NameServiceFormA',
                                          width: 150,
                                          editable: true,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }
                                      },
                                         {
                                             name: 'NameService',
                                             index: 'NameService',
                                             width: 150,
                                             editable: true,
                                             sortable: true,
                                             viewable: true,
                                             hidedlg: false,
                                             hidden: true,
                                             fixed: true,
                                             searchoptions: { sopt: ['cn', 'eq'] }
                                         },
                                           {
                                               name: 'DATE_SUBMITTED',
                                               index: 'DATE_SUBMITTED',
                                               width: 120,
                                               editable: true,
                                               sortable: true,
                                               viewable: true,
                                               hidedlg: false,
                                               hidden: false,
                                               fixed: true,
                                               sorttype: 'date',
                                               formatter: 'date',
                                               formatoptions: { newformat: 'd/m/Y' },
                                               datefmt: 'd-M-Y',
                                               searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                               searchrules: { date: true },
                                           },



                                                      {
                                                          name: 'ApartmentName',
                                                          index: 'ApartmentName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

                                                      {
                                                          name: 'FloorName',
                                                          index: 'FloorName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

                                                      {
                                                          name: 'BuildingName',
                                                          index: 'BuildingName',
                                                          width: 50,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },
                                                      {
                                                          name: 'LandName',
                                                          index: 'LandName',
                                                          width: 100,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: false,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },
                                                        {
                                                            name: 'HayName',
                                                            index: 'HayName',
                                                            width: 150,
                                                            editable: true,
                                                            sortable: true,
                                                            viewable: true,
                                                            hidedlg: false,
                                                            hidden: false,
                                                            fixed: true,
                                                            searchoptions: { sopt: ['cn', 'eq'] }
                                                        },
                                                         {
                                                             name: 'HodName',
                                                             index: 'HodName',
                                                             width: 150,
                                                             editable: true,
                                                             sortable: true,
                                                             viewable: true,
                                                             hidedlg: false,
                                                             hidden: false,
                                                             fixed: true,
                                                             searchoptions: { sopt: ['cn', 'eq'] }
                                                         },
                            {
                                name: 'StaffName',
                                index: 'StaffName',
                                width: 150,
                                editable: true,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },

                                                {
                                                    name: 'IdCard',
                                                    index: 'IdCard',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                   {
                                       name: 'BAR_CODE',
                                       index: 'BAR_CODE',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },

                                      {
                                          name: 'NameServiceForm',
                                          index: 'NameServiceForm',
                                          width: 150,
                                          editable: true,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: true,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }
                                      },


                             {
                                 name: 'AStatus',
                                 index: 'AStatus',
                                 width: 150,
                                 editable: true,
                                 sortable: true,
                                 viewable: true,
                                 hidedlg: false,
                                 hidden: false,
                                 fixed: true,
                                 searchoptions: { sopt: ['cn', 'eq'] }
                             },

      {
          name: 'OUTDOCUMENTS_ID',
          index: 'OUTDOCUMENTS_ID',
          editable: true,
          viewable: true,
          hidedlg: true,
          hidden: false,
          searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
      },
            {
                name: 'RECEIPT_NO_IFMIS',
                index: 'RECEIPT_NO_IFMIS',
                editable: true,
                viewable: true,
                hidedlg: true,
                hidden: forRamallah != "Y"?false:true,
                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
            },
      

                            {
                                name: 'SERVICE_REF',
                                index: 'SERVICE_REF',
                                editable: true,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                             {
                                 name: 'StakeHolderCode',
                                 index: 'StakeHolderCode',
                                 editable: true,
                                 viewable: true,
                                 hidedlg: true,
                                 hidden: true,
                             },
                               {
                                   name: 'FEE',
                                   index: 'FEE',
                                   editable: true,
                                   viewable: true,
                                   hidedlg: true,
                                   hidden: true,
                               },
                            ],
                            editData: { hod1: $("#s2id_hod").text().trim(), hay1: $("#s2id_hay").text().trim(), land1: $("#s2id_land").text().trim() },
                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                $(this).attr("aria-selected", "true");
                                $("#fee").hide();
                                if (sRow.FEE > 0 && ossId === "True" && forRamallah == "Y") {

                                    $("#fee").show();
                                }
                            },
                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.ID;
                                if (aa == id) {


                                    $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                    $("#" + rowId).click();

                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };

                                }

                                return '';
                            },
                            ondblClickRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID, type: "notF", no: "2" });

                            },
                        }
                    };
                },

                initDepartmentsGrid = function () {
                    searchNF.off('click').on('click', function () {
                        BT.Grid.defaultJqGrid({
                            table: table,
                            pager: pager,
                            grpBy: gridOpts().GroupBy,
                            options: gridOpts().Properties,
                        });

                        BT.Grid.addButton(table, {
                            title: 'التفاصيل',
                            buttonicon: 'fa fa-align-justify',
                            id: 'goToSectionsBtn' + BT.getNoHash(table),
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID, type: "notF", no: "2" });

                            }
                        });


                        BT.Grid.addButton(table, {
                            title: 'طباعة الطلب',
                            buttonicon: 'fa fa-print blue',
                            id: 'printForm',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk = printFormUrl;
                                openWindowWithPost(lnk, { idForm: sRow.ID });


                            }
                        });


                        BT.Grid.addButton(table, {
                            title: 'طباعة بطاقة المراجعة',
                            buttonicon: 'fa fa-print blue',
                            id: 'printCard',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                                var lnk = printCardReviewUrl;
                                openWindowWithPost(lnk, { serviceFId: sRow.ID, User: user });


                            }
                        });
                        if (ossId === "True") {
                            if (forRamallah == "Y") {
                                BT.Grid.addButton(table, {
                                    title: 'تسجيل رسم',
                                    buttonicon: 'fa fa-dollar green',
                                    id: 'fee' ,
                                    onClickButton: function () {
                                        var sRow = BT.Grid.getSelectedRow(table, this);
                                        if (sRow == null) return;
                                        BT.Dialog.confirm({
                                            id: 'confirmDel',
                                            message: 'هل انت متاكد؟',
                                            post: {
                                                url: addServiceTaxAtGltax,
                                                data: { formId: sRow.ID },
                                                onSuccessFn: function (dlg) {
                                                    $(table).trigger('reloadGrid');
                                                }
                                            }
                                        });
                                       }

                                });
                        }
                        }
                        BT.Grid.addButton(table, {
                            title: 'تحويل',
                            buttonicon: 'fa fa-share orange',
                            id: 'forward',
                            onClickButton: function () {
                                var tmr;
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;
                             
                                var canvas = document.getElementById("sig-canvas");
                                var ctx = canvas.getContext("2d");
                                ctx.strokeStyle = "#222222";
                                ctx.lineWith = 2;

                                var drawing = false;
                                var mousePos = { x: 0, y: 0 };
                                var lastPos = mousePos;
                                canvas.addEventListener("mousedown", function (e) {
                                    drawing = true;
                                    lastPos = getMousePos(canvas, e);
                                }, false);
                                canvas.addEventListener("mouseup", function (e) {
                                    drawing = false;
                                }, false);
                                canvas.addEventListener("mousemove", function (e) {
                                    mousePos = getMousePos(canvas, e);
                                }, false);

                                // Get the position of the mouse relative to the canvas
                                function getMousePos(canvasDom, mouseEvent) {
                                    var rect = canvasDom.getBoundingClientRect();
                                    return {
                                        x: mouseEvent.clientX - rect.left,
                                        y: mouseEvent.clientY - rect.top
                                    };
                                }
                                window.requestAnimFrame = (function (callback) {
                                    return window.requestAnimationFrame ||
                                       window.webkitRequestAnimationFrame ||
                                       window.mozRequestAnimationFrame ||
                                       window.oRequestAnimationFrame ||
                                       window.msRequestAnimaitonFrame ||
                                       function (callback) {
                                           window.setTimeout(callback, 1000 / 60);
                                       };
                                })();

                                function renderCanvas() {
                                    if (drawing) {
                                        ctx.moveTo(lastPos.x, lastPos.y);
                                        ctx.lineTo(mousePos.x, mousePos.y);
                                        ctx.stroke();
                                        lastPos = mousePos;
                                    }
                                }

                                // Allow for animation
                                (function drawLoop() {
                                    requestAnimFrame(drawLoop);
                                    renderCanvas();
                                })();

                                canvas.addEventListener("touchstart", function (e) {
                                    mousePos = getTouchPos(canvas, e);
                                    var touch = e.touches[0];
                                    var mouseEvent = new MouseEvent("mousedown", {
                                        clientX: touch.clientX,
                                        clientY: touch.clientY
                                    });
                                    canvas.dispatchEvent(mouseEvent);
                                }, false);
                                canvas.addEventListener("touchend", function (e) {
                                    var mouseEvent = new MouseEvent("mouseup", {});
                                    canvas.dispatchEvent(mouseEvent);
                                }, false);
                                canvas.addEventListener("touchmove", function (e) {
                                    var touch = e.touches[0];
                                    var mouseEvent = new MouseEvent("mousemove", {
                                        clientX: touch.clientX,
                                        clientY: touch.clientY
                                    });
                                    canvas.dispatchEvent(mouseEvent);
                                }, false);

                                // Get the position of a touch relative to the canvas
                                function getTouchPos(canvasDom, touchEvent) {
                                    var rect = canvasDom.getBoundingClientRect();
                                    return {
                                        x: touchEvent.touches[0].clientX - rect.left,
                                        y: touchEvent.touches[0].clientY - rect.top
                                    };
                                }
                                // Prevent scrolling when touching the canvas
                                document.body.addEventListener("touchstart", function (e) {
                                    if (e.target == canvas) {
                                        e.preventDefault();
                                    }
                                }, false);
                                document.body.addEventListener("touchend", function (e) {
                                    if (e.target == canvas) {
                                        e.preventDefault();
                                    }
                                }, false);
                                document.body.addEventListener("touchmove", function (e) {
                                    if (e.target == canvas) {
                                        e.preventDefault();
                                    }
                                }, false);
                                function clearCanvas() {
                                    canvas.width = canvas.width;
                                }

                                BT.Dialog.Create('#modalFirstForwardService', {
                                    title: 'تحويل',
                                    onOpenFn: function () {
                                        $("#idForm").val(sRow.ID);
                                        try {
                                            //var ctx = document.getElementById('cnv').getContext('2d');
                                            //SetDisplayXSize(500);
                                            //SetDisplayYSize(100);
                                            //var aa = SetTabletState(0, tmr);
                                            ////SetTabletState(0, tmr);
                                            //SetJustifyMode(0);
                                            //ClearTablet();
                                            //if (tmr == null) {
                                            //    tmr = SetTabletState(1, ctx, 50);
                                            //}
                                            //else {
                                            //    SetTabletState(0, tmr);
                                            //    tmr = null;
                                            //    tmr = SetTabletState(1, ctx, 50);
                                            //}
                                        } catch (err) {

                                        }

                                    },
                                    addButtons: [
                                        {
                                            id: 'btnClear',
                                            text: 'مرة اخرى',
                                            'class': 'btn btn-sm btn-warning',
                                            click: function () {
                                                //ClearTablet();
                                                clearCanvas();

                                            }
                                        }, {
                                            id: 'btnSaveF',
                                            text: 'تحويل',
                                            'class': 'btn btn-sm btn-success',
                                            click: function () {
                                                //var formData = $(this).serialize();
                                                //formData.append('file', $('input[type=file]')[0].files[0]);                                                            //   $("#forward").submit(function (e) {
                                                $('#modalFirstForwardService' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                $('#modalFirstForwardService' + '~.ui-dialog-buttonpane #btnSaveF').prop('disabled', true);
                                                try {

                                                    if ($("#file2H").val() == "") {
                                                        $("#sign").val(canvas.toDataURL());
                                                    }
                                                } catch (err) {
                                                    $("#sign").val(null);
                                                }


                                                //setTimeout(function () {
                                                //$("#forward1").ajaxForm({
                                                //    type: "POST",
                                                //    url: forwardUrl,
                                                //    data: $("#forward1").serialize(),
                                                //    //  mimeType: "multipart/form-data",

                                                //    success: (function (data1) {

                                                //        if (data1.done) {
                                                //            BT.showSuccessNotice("تم ادخال الطلب في المسار");
                                                //            BT.Dialog.hide('#modalFirstForwardService');

                                                //            window.location.href = ossIndexUrl;
                                                //        } else {

                                                //            BT.showErrorNotice(data1.msg);
                                                //        }


                                                //        // Optionally alert the user of success here...
                                                //    })
                                                //}).submit();


                                                $("#forward1").submit(function () {
                                                    var formObj = $(this);
                                                    var formURL = formObj.attr("action");
                                                    var formData = new FormData(this);

                                                    $.ajax({
                                                        url: formURL,
                                                        type: 'POST',
                                                        data: formData,
                                                        //mimeType: "multipart/form-data",
                                                        contentType: false,
                                                        cache: false,
                                                        processData: false,
                                                        success: function (data) {

                                                            if (data.done) {
                                                                BT.showSuccessNotice("تم ادخال الطلب في المسار");
                                                                BT.Dialog.hide('#modalFirstForwardService');
                                                                $(table).trigger('reloadGrid');
                                                                // window.location.href = ossIndexUrl;

                                                            } else {

                                                                BT.showErrorNotice(data.msg);
                                                                $('#modalFirstForwardService' + '~.ui-dialog-buttonpane #btnSaveF').prop('disabled', true);

                                                            }
                                                        },
                                                        error: function (jqXHR, textStatus, errorThrown)
                                                        { }
                                                    });
                                                    e.preventDefault();
                                                    //Prevent Default action.
                                                    e.unbind();
                                                    $('#forward1').unbind('submit');
                                                    $('#forward1').unbind();
                                                    $("#forward1").submit(function () { return false; });
                                                });
                                                $("#forward1").submit();
                                                //}, 1000);
                                            }
                                        }
                                    ]
                                });

                            }
                        });



                        if (forRamallah != "Y") {
                            BT.Grid.addButton(table, {
                                title: 'الرسوم',
                                buttonicon: 'fa fa-dollar green',
                                id: 'fee' + BT.getNoHash(table),
                                onClickButton: function () {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (sRow == null) return;
                                    $.ajax({
                                        url: taxesUrl,
                                        data: { id: sRow.StakeHolderCode }
                                    }).done(function (data) {
                                        BT.Dialog.Create('#modalTaxes', {
                                            title: 'الرسوم',
                                            onOpenFn: function () {
                                                $("#taxContent").html(data);
                                            },
                                        });

                                    });

                                }

                            });
                            BT.Grid.addButton(table, {
                                title: 'سندقبض',
                                buttonicon: 'fa fa-file blue',
                                id: 'sand' + BT.getNoHash(table),
                                onClickButton: function () {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (sRow == null) return;
                                    var lnk = printSanadUrl;
                                    lnk = lnk.replace("_ff_", sRow.ID);
                                    lnk = lnk.replace("&amp;", "&");
                                    lnk = lnk.replace("_tt_", "نسخة");
                                    window.open(lnk, '_blank');

                                }



                            })
                        }

                        if (forRamallah == "Y") {
                            BT.Grid.addButton(table, {
                                title: 'تسجيل الرسوم',
                                buttonicon: 'fa fa-money green',
                                id: 'tax',
                                onClickButton: function () {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (sRow == null) return;
                                    BT.Dialog.Create('#modalTaxPaid', {
                                        title: 'تسجيل رسوم',
                                        onOpenFn: function () {
                                            $("#idFf").val(sRow.ID);
                                            $("#stakeHolder").val(sRow.STAKEHOLDER_ID);
                                            try {

                                            } catch (err) {
                                            }

                                        },
                                        addButtons: [
                                        ]
                                    });
                                    $("#currentCue").off('click').on('click', function () {
                                        $("#currentCue").prop('disabled', true);
                                        $.ajax({
                                            url: postVoutcherServisesUrl,
                                            //type: 'POST',
                                            data: {
                                                idForm: $("#idFf").val(),

                                            },
                                            success: function (data22) {

                                                if (data22.IsDone) {
                                                    var idTax = data22.ID;
                                                    $.ajax({
                                                        url: paidServiceForm,
                                                        data: {
                                                            id: $("#idFf").val(),

                                                        },
                                                    }).done(function (e) {
                                                        if (e.isDone) {
                                                            BT.showSuccessNotice(data22.Message);
                                                            $("#currentCue").prop('disabled', false);
                                                            BT.Dialog.hide('#modalTaxPaid');
                                                            var lnk = getPdf;
                                                            lnk = lnk.replace("_id_", idTax);
                                                            //window.open("@Url.Action("GetPdf", "Gltax")?ID=" + idTax, '_blank');
                                                            window.open(lnk, '_blank');
                                                        } else {
                                                            BT.showErrorNotice(e.msg);
                                                        }
                                                    });


                                                } else {

                                                    BT.showErrorNotice(data22.Message);
                                                    $("#currentCue").prop('disabled', false);


                                                }
                                            },
                                            error: function (jqXHR, textStatus, errorThrown) {
                                            }
                                        });
                                    });

                                    $("#localCur").off('click').on('click', function () {
                                        $("#localCur").prop('disabled', true);
                                        $.ajax({
                                            url: postVoutcherServisesUrl,
                                            //type: 'POST',
                                            data: {
                                                idForm: $("#idFf").val(),
                                                WithLocalCurn: true
                                            },
                                            success: function (data22) {

                                                if (data22.IsDone) {
                                                    var idTax = data22.ID;
                                                    $.ajax({
                                                        url: paidServiceForm,
                                                        data: {
                                                            id: $("#idFf").val(),

                                                        },
                                                    }).done(function (e) {
                                                        if (e.isDone) {
                                                            BT.showSuccessNotice(data22.Message);
                                                            $("#localCur").prop('disabled', false);
                                                            BT.Dialog.hide('#modalTaxPaid');
                                                            var lnk = getPdf;
                                                            lnk = lnk.replace("_id_", idTax);
                                                            //window.open("@Url.Action("GetPdf", "Gltax")?ID=" + idTax, '_blank');
                                                            window.open(lnk, '_blank');

                                                        } else {
                                                            BT.showErrorNotice(e.msg);
                                                        }
                                                    });
                                                } else {

                                                    BT.showErrorNotice(data22.Message);
                                                    $("#localCur").prop('disabled', false);


                                                }
                                            },
                                            error: function (jqXHR, textStatus, errorThrown) {
                                            }
                                        })
                                    });


                                    $("#otherPaid").off('click').on('click', function () {
                                        $("#otherPaid").prop('disabled', true);
                                        var idF = $("#idFf").val();
                                        $.ajax({
                                            url: getInfoTax,
                                            data: {
                                                id: idF,

                                            },
                                        }).done(function (e1) {

                                            if (e1.isDone) {

                                                $.ajax({
                                                    url: taxVoutcher,
                                                    //type: 'POST',
                                                    data: {
                                                        STAKEHOLDER_ID: e1.stakeholder,
                                                        tFund_code: e1.tFunde,
                                                        ForPayArray: 1,
                                                        idForm: idF
                                                    },
                                                    success: function (data02) {
                                                        $("#TaxBodyOther").html(data02);
                                                        BT.Dialog.hide('#modalTaxPaid');
                                                        BT.Dialog.Create('#modalTaxPaidOther', {
                                                            title: 'تسجيل رسوم',
                                                            width: 'max',
                                                            onOpenFn: function () {

                                                            },
                                                            addButtons: [
                                                            ]
                                                        });

                                                    },
                                                    error: function (jqXHR, textStatus, errorThrown) {
                                                    }
                                                });

                                            } else {

                                                BT.showErrorNotice(e1.Message);
                                                $("#otherPaid").prop('disabled', false);


                                            }
                                        });
                                    });


                                }
                            });
                        } else {
                            BT.Grid.addButton(table, {
                                title: 'تسجيل الرسوم',
                                buttonicon: 'fa fa-money green',
                                id: 'taxIfmis',
                                onClickButton: function () {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (sRow == null) return;
                                    BT.Dialog.Create('#modalPay', {
                                        title: 'تسجيل رسوم',
                                        onOpenFn: function () {
                                            $('#modalPay' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');

                                            var id = sRow.ID;
                                            var FEE_CURN;
                                            var FEE;
                                            $("#idForm1").val(id);
                                            try {
                                                $.ajax({
                                                    url: detailsServiceUrl,
                                                    data: {
                                                        seq: sRow.SERVICE_REF,
                                                    },
                                                }).done(function (e) {
                                                    FEE_CURN = e.FEE_CURN != null ? e.FEE_CURN == "JD" ? "JOD" : e.FEE_CURN : "NIS";
                                                    BT.select2.defaultAr($("#curPay").val(FEE_CURN), getCurUrl);
                                                    $("#totalPay").val(e.FEE);
                                                    $("#totalPay").html(e.FEE);
                                                    FEE = e.FEE;
                                                    $(".fa-spinner").hide();
                                                });

                                                $("#curPay").change(function () {
                                                    $.ajax({
                                                        type: "GET",
                                                        contentType: "application/json; charset=utf-8",
                                                        url: selectPaidAmountUrl,
                                                        data: {
                                                            cur: $("#curPay").val(),
                                                            amount: FEE,
                                                            curTalab: FEE_CURN
                                                        }
                                                    }).done(function (data1) {
                                                        $("#CurP").val($("#curPay").val());
                                                        $("#TotalP").val(data1.total);
                                                        $("#totalPay").html(data1.total);
                                                        $("#totalPay").val(data1.total);
                                                    });
                                                });
                                            } catch (err) {
                                            }

                                        },
                                        addButtons: [
                                                    {
                                                        id: 'btnSaveM',
                                                        text: 'حفظ',
                                                        'class': 'btn btn-sm btn-success',
                                                        click: function () {
                                                            //var formData = $(this).serialize();
                                                            //formData.append('file', $('input[type=file]')[0].files[0]);                                                            //   $("#forward").submit(function (e) {
                                                            $('#modalPay' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                            $('#modalPay' + '~.ui-dialog-buttonpane #modalPay:first').prop('disabled', true);
                                                            $.ajax({
                                                                type: "GET",
                                                                contentType: "application/json; charset=utf-8",
                                                                url: createSanadUrl,
                                                                data: {
                                                                    curP: $("#curPay").val(),
                                                                    formId: $("#idForm1").val(),
                                                                    totalP: $("#totalPay").val()
                                                                }
                                                            }).done(function (data1) {
                                                                if (data1.done) {
                                                                    BT.showSuccessNotice();
                                                                    window.open(getPdfUrl + "?serviceFormId=" + $("#idForm1").val(), '_blank');
                                                                    BT.Dialog.hide('#modalPay');
                                                                    $(table).trigger('reloadGrid');
                                                                } else {
                                                                    BT.showErrorNotice(data1.msg);


                                                                }
                                                            });
                                                        }
                                                    },
                                        ]
                                    });



                                }
                            });
                        }


                        BT.Grid.addButton(table, {
                            title: 'حذف',
                            buttonicon: 'fa fa-trash-o red',
                            id: 'delSF',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (BT.isNullOrEmpty(sRow)) return;

                                BT.Dialog.confirm({
                                    id: 'confirmDel',
                                    message: 'سيتم حذف التسجيل المختار',
                                    post: {
                                        url: delUrl,
                                        data: { idForm: sRow.ID },
                                        onSuccessFn: function (dlg) {
                                            $(table).trigger('reloadGrid');
                                        }
                                    }
                                });
                            }
                        });

                        BT.Grid.addButton(table, {
                            title: 'تعديل',
                            buttonicon: 'fa fa-pencil-square-o blue',
                            id: 'editSF',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (BT.isNullOrEmpty(sRow)) return;
                                var lnk = editUrl;
                                openWindowWithPost(lnk, { seq: sRow.ID });

                                //lnk = lnk.replace("_id_", sRow.ID);
                                //window.open(lnk, '_blank');
                            }
                        });
                    }).trigger('click');
                },

                  init = function (pGetTypeCraftUrl, pDetailsUrl, pForwardUrl, pPrintCardReviewUrl, pPrintFormUrl, pOssIndex, pDelUrl, pEditUrl,
                      pPostVoutcherServisesUrl, pPaidServiceForm, pGetPdf, pTaxVoutcher, pGetInfoTax, pDetailsServiceUrl,
                      pCreateSanadUrl, pGetPdfUrl, pGetCurUrl, pSelectPaidAmountUrl, pTaxesUrl, pSanadPrintUrl, pAddServiceTaxAtGltax, pUser, pId, pForRamallah, pOssId) {
                      if (
                          BT.isNullOrEmpty(pGetTypeCraftUrl)
                          || BT.isNullOrEmpty(pDetailsUrl)
                          || BT.isNullOrEmpty(pForwardUrl)
                          || BT.isNullOrEmpty(pPrintCardReviewUrl)
                          || BT.isNullOrEmpty(pPrintFormUrl)
                          || BT.isNullOrEmpty(pOssIndex)
                          || BT.isNullOrEmpty(pDelUrl)
                          || BT.isNullOrEmpty(pEditUrl)
                          || BT.isNullOrEmpty(pPostVoutcherServisesUrl)
                          || BT.isNullOrEmpty(pPaidServiceForm)
                          || BT.isNullOrEmpty(pGetPdf)
                          || BT.isNullOrEmpty(pTaxVoutcher)
                          || BT.isNullOrEmpty(pGetInfoTax)
                          || BT.isNullOrEmpty(pDetailsServiceUrl)
                          || BT.isNullOrEmpty(pCreateSanadUrl)
                          || BT.isNullOrEmpty(pGetPdfUrl)
                          || BT.isNullOrEmpty(pGetCurUrl)
                          || BT.isNullOrEmpty(pSelectPaidAmountUrl)
                          || BT.isNullOrEmpty(pTaxesUrl)
                          || BT.isNullOrEmpty(pSanadPrintUrl)
                          || BT.isNullOrEmpty(pAddServiceTaxAtGltax)
                          ) {
                          BT.showErrorNotice('Em.UseSubWater.init: missing params');
                          return;
                      }

                      getTypeCraftUrl = pGetTypeCraftUrl;
                      detailsUrl = pDetailsUrl;
                      forwardUrl = pForwardUrl;
                      printCardReviewUrl = pPrintCardReviewUrl;
                      printFormUrl = pPrintFormUrl;
                      ossIndexUrl = pOssIndex;
                      delUrl = pDelUrl;
                      editUrl = pEditUrl;
                      user = pUser;
                      id = pId;
                      ossId = pOssId;
                      forRamallah = pForRamallah;
                      searchNF = $("#serchNF");
                      postVoutcherServisesUrl = pPostVoutcherServisesUrl;
                      paidServiceForm = pPaidServiceForm;
                      getPdf = pGetPdf;
                      taxVoutcher = pTaxVoutcher;
                      getInfoTax = pGetInfoTax;
                      detailsServiceUrl = pDetailsServiceUrl;
                      createSanadUrl = pCreateSanadUrl;
                      getPdfUrl = pGetPdfUrl;
                      getCurUrl = pGetCurUrl;
                      taxesUrl = pTaxesUrl;
                      selectPaidAmountUrl = pSelectPaidAmountUrl;
                      printSanadUrl = pSanadPrintUrl;
                      addServiceTaxAtGltax = pAddServiceTaxAtGltax;
                      initDepartmentsGrid();
                  };

            return {
                init: init
            };
        })(),


        Com: (function () {
            var getUrl,
                editUrl,
                selectTypeUrl,
                user,
     
                table = '#ComTable',
                pager = '#ComTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'TYPE_name', txt: ' وسيلة الاتصال' },
                        ],

                        Properties: {
                            caption: "معلومات  وسائل الاتصال",
                            sortname: 'TYPE_name',
                            sortorder: "desc",
                            url: getUrl,
                            editurl: editUrl,
                            postData: { idC: user },
                            colNames: [
                                'ID', ' وسيلة الاتصال', ' وسيلة الاتصال', 'القيمة', ''],
                            colModel: [

                            {
                                name: 'ID',
                                index: 'ID',
                                key: true,
                                editable: false,
                                viewable: true,
                                hidedlg: true,
                                hidden: false,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                {
                                    name: 'TYPE_ID',
                                    index: 'TYPE_ID',
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: true,
                                    fixed: true,
                                    editoptions: {
                                        //size: 50,
                                        dataInit: function(el) {
                                            BT.select2.defaultAr($(el).width(160), selectTypeUrl);
                                        }

                                    },
                                    editrules: {
                                        required: true,
                                        edithidden: true
                                    },
                                    formoptions: {
                                        rowpos: 1,
                                        //elmprefix: "&nbsp;&nbsp;<span class='mystar' style='color:red'>*</span>&nbsp;",
                                    },
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                 {
                                     name: 'TYPE_name',
                                     index: 'TYPE_name',
                                     width: 150,
                                     editable: false,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                                {
                                                    name: 'VAL',
                                                    index: 'VAL',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    editoptions: {
                                                        //size: 50,
                                                        maxlength: 100
                                                    },
                                                    editrules: {
                                                        required: true
                                                    },
                                                    formoptions: {
                                                        rowpos: 2,
                                                        //elmprefix: "&nbsp;&nbsp;<span class='mystar' style='color:red'>*</span>&nbsp;",
                                                    },
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                   {
                                       name: 'STAKEHOLDER_ID',
                                       index: 'STAKEHOLDER_ID',
                                       width: 150,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: true,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                
                            ],
                            editData: {
                                idC: user
                            },
                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initDepartmentsGrid = function () {
                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });
       
                },

                init = function (pGetTypeCraftUrl, pEditUrl,pSelectTypeUrl, pUser) {
                    if (
                        BT.isNullOrEmpty(pGetTypeCraftUrl)
                        || BT.isNullOrEmpty(pEditUrl)
                        || BT.isNullOrEmpty(pSelectTypeUrl)
           
                    ) {
                        BT.showErrorNotice('Em.UseSubWater.init: missing params');
                        return;
                    }

                    getUrl = pGetTypeCraftUrl;
                    editUrl = pEditUrl;
                    selectTypeUrl = pSelectTypeUrl;
                    user = pUser;
                    initDepartmentsGrid();
                };

            return {
                init: init
            };
        })(),

        ServiceCancel: (function () {
            var getTypeCraftUrl,
                detailsUrl,
                user,
               idForm,
               ramallah,
             table = '#ServiceCancelTable',
                pager = '#ServiceCancelTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'NameServiceFormA', txt: 'اسم الخدمة' },
                        ],

                  

                        Properties: {
                            caption: "الطلبات الملغاة",
                            sortname: 'SERVICE_FORM_SEQ',
                            sortorder: "desc",
                            url: getTypeCraftUrl,
                            postData: { idStaff: user },
                            colNames: [
                                'مقدمة من الانترنت', 'اسم المواطن', 'اسم مقدم الطلب', 'رقم هوية مقدم الطلب', 'نوع الخدمة', 'تاريخ التقديم', 'من الموظف', 'حالة الطلب', 'رقم الطلب', 'رقم الهوية', 'البار كود', 'ServiceSeq'],
                            colModel: [
                                 {
                                     name: 'IS_INTERNET',
                                     index: 'IS_INTERNET',
                                     width: 80,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                 {
                                     name: 'FullNameCitizen',
                                     index: 'FullNameCitizen',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                 {
                                     name: 'NameOfApplicant',
                                     index: 'NameOfApplicant',
                                     width: 150,
                                     editable: false,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: ramallah == "N" ? false : true,
                                     fixed: true,
                                     // searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                {
                                    name: 'IdnoOfApplicant',
                                    index: 'IdnoOfApplicant',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: ramallah == "N" ? false : true,
                                    fixed: true,
                                    // searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                 {
                                     name: 'NameService',
                                     index: 'NameService',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                    {
                                        name: 'DATE_SUBMITED',
                                        index: 'DATE_SUBMITED',
                                        width: 120,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        sorttype: 'date',
                                        formatter: 'date',
                                        formatoptions: { newformat: 'd/m/Y' },
                                        datefmt: 'd-M-Y',
                                        searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                        searchrules: { date: true },
                                    },
                                  {
                                      name: 'NameStaff',
                                      index: 'NameStaff',
                                      width: 150,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                    {
                                        name: 'StatusForm',
                                        index: 'StatusForm',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    key: true,
                                    editable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                 
                                                {
                                                    name: 'IdCard',
                                                    index: 'IdCard',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                   {
                                       name: 'BarCode',
                                       index: 'BarCode',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                
                           
                      

                            {
                                name: 'SERVICE_REF',
                                index: 'SERVICE_REF',
                                editable: true,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                            ],
                            editData: {
                                idStaff: user
                            },
                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                $(this).attr("aria-selected", "true");
                            },

                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.SERVICE_FORM_SEQ;


                                if (aa == idForm) {


                                    $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                    $("#" + rowId).click();

                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };

                                }
                        
                                return '';
                            },
                            ondblClickRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ,type : "cancelS", no :"1"  });
                                //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                                //window.open(lnk, '_blank');
                            },
                        }
                    };
                },

                initDepartmentsGrid = function () {
                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });
                    BT.Grid.addButton(table, {
                        title: 'التفاصيل',
                        buttonicon: 'fa fa-align-justify',
                        id: 'goToSectionsBtn' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = detailsUrl;
                            openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ, type: "cancelS", no: "1" });
               
                            //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                            //window.open(lnk, '_blank');
                        }
                    });


                },

                init = function (pGetTypeCraftUrl, pDetailsUrl, pUser, pIdForm,pRamallah) {
                    if (
                        BT.isNullOrEmpty(pGetTypeCraftUrl)
                        || BT.isNullOrEmpty(pDetailsUrl)
       
                    ) {
                        BT.showErrorNotice('Em.UseSubWater.init: missing params');
                        return;
                    }

                    getTypeCraftUrl = pGetTypeCraftUrl;
                    detailsUrl = pDetailsUrl;
                    user = pUser;
                    idForm = pIdForm;
                    ramallah = pRamallah;
                    initDepartmentsGrid();
                };

            return {
                init: init
            };
        })(),

        AllServiceCancel: (function () {
            var getTypeCraftUrl,
                detailsUrl,
                undoCancelUrl,
                user,
                isOssManagerl,
                idForm,
                ramallah,
             table = '#AllServiceCancelTable',
                pager = '#AllServiceCancelTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'NameServiceFormA', txt: 'اسم الخدمة' },
                        ],



                        Properties: {
                            caption: "الطلبات الملغاة",
                            sortname: 'DATE_SUBMITED',
                            sortorder: "desc",
                            url: getTypeCraftUrl,
                            //postData: { idStaff: user },
                            colNames: [
                               'مقدمة من الانترنت', 'اسم المواطن', 'اسم مقدم الطلب', 'رقم هوية مقدم الطلب', 'رقم جوال مقدم الطلب', 'نوع الخدمة', 'تاريخ التقديم', 'شقة', 'طابق', 'بناية', 'القطعة', 'الحي', 'الحوض', 'عند الموظف', 'حالة الطلب', 'رقم الطلب', 'رقم الهوية', 'البار كود', 'رقم الصادر', 'ServiceSeq'],
                            colModel: [
                                 {
                                     name: 'IS_INTERNET',
                                     index: 'IS_INTERNET',
                                     width: 80,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                 {
                                     name: 'FullNameCitizen',
                                     index: 'FullNameCitizen',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                 {
                                     name: 'NameOfApplicant',
                                     index: 'NameOfApplicant',
                                     width: 150,
                                     editable: false,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: ramallah == "N" ? false : true,
                                     fixed: true,
                                     // searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                {
                                    name: 'IdnoOfApplicant',
                                    index: 'IdnoOfApplicant',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: ramallah == "N" ? false : true,
                                    fixed: true,
                                    // searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                   {
                                       name: 'MobileOfApplicant',
                                       index: 'MobileOfApplicant',
                                       width: 150,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: ramallah == "N" ? false : true,
                                       fixed: true,
                                       // searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                 {
                                     name: 'NameService',
                                     index: 'NameService',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                  {
                                      name: 'DATE_SUBMITED',
                                      index: 'DATE_SUBMITED',
                                      width: 120,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      sorttype: 'date',
                                      formatter: 'date',
                                      formatoptions: { newformat: 'd/m/Y' },
                                      datefmt: 'd-M-Y',
                                      searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                      searchrules: { date: true },
                                  },
                                  {
                                      name: 'ApartmentName',
                                      index: 'ApartmentName',
                                      width: 150,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: true,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },

                                                      {
                                                          name: 'FloorName',
                                                          index: 'FloorName',
                                                          width: 150,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: true,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

                                                      {
                                                          name: 'BuildingName',
                                                          index: 'BuildingName',
                                                          width: 150,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: true,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

    {
        name: 'LandName',
        index: 'LandName',
        width: 150,
        editable: true,
        sortable: true,
        viewable: true,
        hidedlg: false,
        hidden: true,
        fixed: true,
        searchoptions: { sopt: ['cn', 'eq'] }
    },

                                                      {
                                                          name: 'HayName',
                                                          index: 'HayName',
                                                          width: 150,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: true,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },

                                                      {
                                                          name: 'HodName',
                                                          index: 'HodName',
                                                          width: 150,
                                                          editable: true,
                                                          sortable: true,
                                                          viewable: true,
                                                          hidedlg: false,
                                                          hidden: true,
                                                          fixed: true,
                                                          searchoptions: { sopt: ['cn', 'eq'] }
                                                      },


                                  {
                                      name: 'NameStaff',
                                      index: 'NameStaff',
                                      width: 150,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                    {
                                        name: 'StatusForm',
                                        index: 'StatusForm',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    key: true,
                                    editable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                 
                                                {
                                                    name: 'IdCard',
                                                    index: 'IdCard',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                   {
                                       name: 'BarCode',
                                       index: 'BarCode',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                            
                                {
                                    name: 'OUTDOCUMENTS_ID',
                                    index: 'OUTDOCUMENTS_ID',
                                    editable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },

                            {
                                name: 'SERVICE_REF',
                                index: 'SERVICE_REF',
                                editable: true,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                            ],
                            //editData: {
                            //    idStaff: user
                            //},
                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                $(this).attr("aria-selected", "true");
                            },
                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.SERVICE_FORM_SEQ;


                                if (aa == idForm) {


                                    $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                    $("#" + rowId).click();

                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };

                                }
                        
                                return '';
                            },
                            ondblClickRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ,type : "cancel", no:"2" });
                                //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("cancel", "cancel");
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("2", "2");
                                //window.open(lnk, '_blank');
                            },
                        }
                    };
                },

                initDepartmentsGrid = function() {
                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });
                    BT.Grid.addButton(table, {
                        title: 'التفاصيل',
                        buttonicon: 'fa fa-align-justify',
                        id: 'goToSectionsBtn' + BT.getNoHash(table),
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = detailsUrl;
                            openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ, type: "cancel", no: "2" });

                            //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("cancel", "cancel");
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("2", "2");
                            //window.open(lnk, '_blank');
                        }
                    });
                    if (isOssManagerl === "True") {
                        BT.Grid.addButton(table, {
                            title: 'تراجع',
                            buttonicon: 'fa fa-undo red',
                            id: 'removecancelSF' + BT.getNoHash(table),
                            onClickButton: function() {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (BT.isNullOrEmpty(sRow)) return;

                                BT.Dialog.confirm({
                                    id: 'confirmDel',
                                    message: ' سيتم رجوع الطلب المختار الى مساره',
                                    post: {
                                        url: undoCancelUrl,
                                        data: { idForm: sRow.SERVICE_FORM_SEQ },
                                        onSuccessFn: function(dlg) {
                                            $(table).trigger('reloadGrid');
                                        }
                                    }
                                });
                            }
                        });
                    }
                },

                init = function (pGetTypeCraftUrl, pDetailsUrl, pUndoCancelUrl, pUser, pIsOssManagerl,pIdForm,pRamallah) {
                    if (
                        BT.isNullOrEmpty(pGetTypeCraftUrl)
                        || BT.isNullOrEmpty(pDetailsUrl)
                        || BT.isNullOrEmpty(pUndoCancelUrl)

                    ) {
                        BT.showErrorNotice('Em.UseSubWater.init: missing params');
                        return;
                    }

                    getTypeCraftUrl = pGetTypeCraftUrl;
                    detailsUrl = pDetailsUrl;
                    undoCancelUrl = pUndoCancelUrl;
                    user = pUser;
                    isOssManagerl = pIsOssManagerl;
                    idForm = pIdForm;
                    ramallah = pRamallah;
                    initDepartmentsGrid();
                };

            return {
                init: init
            };
        })(),

        AllServiceReject: (function () {
            var getTypeCraftUrl,
                detailsUrl,
                undoCancelUrl,
                user,
                isOssManagerl,
                idForm,
                pathUrl,
             table = '#AllServiceRejectTable',
                pager = '#AllServiceRejectTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'NameService', txt: 'اسم الخدمة' },
                            { val: 'FullNameCitizen', txt: 'اسم المواطن' },

                        ],



                        Properties: {
                            caption: "الطلبات المرفوضة",
                            sortname: 'DATE_SUBMITED',
                            sortorder: "desc",
                            url: getTypeCraftUrl,
                            //postData: { idStaff: user },
                            colNames: [
                                'مقدمة من الانترنت', 'اسم المواطن', 'نوع الخدمة', 'تاريخ التقديم', 'مقدم الطلب', 'عند الموظف', 'حالة الطلب', 'رقم الطلب', 'رقم الهوية', 'البار كود', 'ServiceSeq', 'ID'],
                            colModel: [
                                 {
                                     name: 'IS_INTERNET',
                                     index: 'IS_INTERNET',
                                     width: 80,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }
                                 },
                                  {
                                      name: 'FullNameCitizen',
                                      index: 'FullNameCitizen',
                                      width: 150,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                      {
                                          name: 'NameService',
                                          index: 'NameService',
                                          width: 150,
                                          editable: true,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }
                                      },
                                         {
                                             name: 'DATE_SUBMITED',
                                             index: 'DATE_SUBMITED',
                                             width: 120,
                                             editable: true,
                                             sortable: true,
                                             viewable: true,
                                             hidedlg: false,
                                             hidden: false,
                                             fixed: true,
                                             sorttype: 'date',
                                             formatter: 'date',
                                             formatoptions: { newformat: 'd/m/Y' },
                                             datefmt: 'd-M-Y',
                                             searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                             searchrules: { date: true },
                                         },
                                          {
                                              name: 'FromStaff',
                                              index: 'FromStaff',
                                              width: 150,
                                              editable: true,
                                              sortable: true,
                                              viewable: true,
                                              hidedlg: false,
                                              hidden: false,
                                              fixed: true,
                                              searchoptions: { sopt: ['cn', 'eq'] }
                                          },
                                  {
                                      name: 'NameStaff',
                                      index: 'NameStaff',
                                      width: 150,
                                      editable: true,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                    {
                                        name: 'StatusForm',
                                        index: 'StatusForm',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    //key: true,
                                    editable: true,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                                
                                                {
                                                    name: 'IdCard',
                                                    index: 'IdCard',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                   {
                                       name: 'BarCode',
                                       index: 'BarCode',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                            
                           
                      

                            {
                                name: 'ServiceRef',
                                index: 'ServiceRef',
                                editable: true,
                                viewable: true,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                            },
                                 {
                                     name: 'ID',
                                     index: 'ID',
                                     key: true,
                                     editable: true,
                                     viewable: true,
                                     hidedlg: true,
                                     hidden: true,
                                     searchoptions: { sopt: ['cn', 'eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                 },
                            ],
                            //editData: {
                            //    idStaff: user
                            //},
                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                $(this).attr("aria-selected", "true");
                            },
                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.SERVICE_FORM_SEQ;


                                if (aa == idForm) {


                                    $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                    $("#" + rowId).click();

                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };

                                }
                            
                                return '';
                            },
                            ondblClickRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ, type :"reject", no : "2"  });
                                //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("reject", "reject");
                                //lnk = lnk.replace("&amp;", "&");
                                //lnk = lnk.replace("2", "2");
                                //window.open(lnk, '_blank');
                            },

                        }
                    };
                },

                initDepartmentsGrid = function() {
                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });
                    BT.Grid.addButton(table, {
                        title: 'التفاصيل',
                        buttonicon: 'fa fa-align-justify',
                        id: 'goToSectionsBtn' + BT.getNoHash(table),
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = detailsUrl;
                            openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ, type: "reject", no: "2" });

                            //lnk = lnk.replace("__id__", sRow.SERVICE_FORM_SEQ);
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("reject", "reject");
                            //lnk = lnk.replace("&amp;", "&");
                            //lnk = lnk.replace("2", "2");
                            //window.open(lnk, '_blank');
                        }
                    });
                    //    if (isOssManagerl === "True") {
                    //    BT.Grid.addButton(table, {
                    //        title: 'إعادة إحياء',
                    //        buttonicon: 'fa fa-undo red',
                    //        id: 'refreshSF',
                    //        onClickButton: function() {
                    //            var sRow = BT.Grid.getSelectedRow(table, this);
                    //            if (BT.isNullOrEmpty(sRow)) return;

                    //            BT.Dialog.confirm({
                    //                id: 'confirmDel',
                    //                message: ' سيتم رجوع الطلب المختار الى الموظف الذي تم رفضه',
                    //                post: {
                    //                    url: undoCancelUrl,
                    //                    data: {
                    //                        idForm: sRow.SERVICE_FORM_SEQ,
                    //                        idSw: sRow.ID
                    //                    },
                    //                    onSuccessFn: function(data) {
                    //                        $(table).trigger('reloadGrid');


                    //                    }
                    //                }
                    //            });
                    //        }
                    //    });
                    //}

                    if (isOssManagerl === "True") {
                        BT.Grid.addButton(table, {
                            title: 'مسار الخدمة',
                            buttonicon: 'fa fa-undo red',
                            id: 'refreshSF',
                            onClickButton: function () {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (BT.isNullOrEmpty(sRow)) return;

                                BT.Dialog.Create('#modalNewPath', {
                                    title: 'مسار الخدمة',
                                    width: 'max',
                                    onOpenFn: function () {
                                        Em.NewPath.init(
                                            pathUrl, undoCancelUrl, sRow.SERVICE_FORM_SEQ
                                        );
                                    }
                                });
                            }
                        });
                    }
                },

                init = function (pGetTypeCraftUrl, pDetailsUrl, pUndoCancelUrl, pPathUrl, pUser, pIsOssManagerl, pIdForm) {
                    if (
                        BT.isNullOrEmpty(pGetTypeCraftUrl)
                        || BT.isNullOrEmpty(pDetailsUrl)
                        || BT.isNullOrEmpty(pUndoCancelUrl)
                        || BT.isNullOrEmpty(pPathUrl)

                    ) {
                        BT.showErrorNotice('Em.UseSubWater.init: missing params');
                        return;
                    }

                    getTypeCraftUrl = pGetTypeCraftUrl;
                    detailsUrl = pDetailsUrl;
                    undoCancelUrl = pUndoCancelUrl;
                    user = pUser;
                    isOssManagerl = pIsOssManagerl;
                    idForm = pIdForm;
                    pathUrl = pPathUrl;
                    initDepartmentsGrid();
                };

            return {
                init: init
            };
        })(),
        EmailSms: (function () {
            var getMsgUrl,
                attachUrl,
                downloadUrl,
                table = '#EmailSmsTable',
                pager = '#EmailSmsTablePager',
       

                gridOpts = function () {
                    return {
                        GroupBy: [
                       { val: 'SUBJECT', txt: 'موضوع الرسالة' },
                            { val: 'DATE_SEND', txt: 'تاريخ الرسالة' },
                            { val: 'Service', txt: 'الخدمة' },
                            { val: 'StakeHolderName', txt: 'اسم المكلف' },
                        ],

                        Properties: {
                            caption: 'شاشة متابعةالتواصل مع المكلفين',
                            sortname: 'DATE_SEND',
                            sortorder: 'desec',
                            url: getMsgUrl,
                            //postData: {
                            //    seq: reqId
                            //},

                            colNames: [' النظام', 'طريقة الارسال', 'رقم المكلف', 'اسم المكلف', 'رقم الهوية', 'الكود ', 'الى', 'نسخة الى', 'التاريخ ', 'الموضوع', 'النص', 'رقم الطلب', 'اسم الخدمة'],
                            colModel: [
                                   {
                                       name: 'Source',
                                       index: 'Source',
                                       width: 100,
                                       editable: false,
                                       viewable: true,
                                       hidedlg: true,
                                       hidden: false,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                   },
                                     {
                                         name: 'Type',
                                         index: 'Type',
                                         width: 100,
                                         editable: false,
                                         viewable: true,
                                         hidedlg: true,
                                         hidden: false,
                                         searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                     }, {
                                         name: 'StakeHolderNumber',
                                         index: 'StakeHolderNumber',
                                         width: 200,
                                         editable: false,
                                         viewable: true,
                                         hidedlg: true,
                                         hidden: false,
                                         searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                     },
                                        {
                                            name: 'StakeHolderName',
                                            index: 'StakeHolderName',
                                            width: 200,
                                            editable: false,
                                            viewable: true,
                                            hidedlg: true,
                                            hidden: false,
                                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                        },
                                            {
                                                name: 'StakeHolderId',
                                                index: 'StakeHolderId',
                                                width: 200,
                                                editable: false,
                                                viewable: true,
                                                hidedlg: true,
                                                hidden: false,
                                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                            },
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                   {
                                       name: 'SENDER',
                                       index: 'SENDER',
                                       width: 200,
                                       editable: false,
                                       viewable: true,
                                       hidedlg: true,
                                       hidden: false,
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                   },
                                {
                                    name: 'RECEIVER',
                                    index: 'RECEIVER',
                                    width: 250,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                                      {
                                          name: 'DATE_SEND',
                                          index: 'DATE_SEND',
                                          width: 120,
                                          editable: true,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          sorttype: 'date',
                                          formatter: 'date',
                                          formatoptions: { newformat: 'd/m/Y' },
                                          datefmt: 'd-M-Y',
                                          searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                          searchrules: { date: true }
                                      },
                                 {
                                     name: 'SUBJECT',
                                     index: 'SUBJECT',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true,
                                     searchoptions: { sopt: ['cn', 'eq'] }

                                 },

                                      {
                                          name: 'BODY',
                                          index: 'BODY',
                                          width: 150,
                                          editable: true,
                                          sortable: true,
                                          viewable: true,
                                          hidedlg: false,
                                          hidden: false,
                                          fixed: true,
                                          searchoptions: { sopt: ['cn', 'eq'] }

                                      },
                                          {
                                              name: 'FORM_ID',
                                              index: 'FORM_ID',
                                              width: 80,
                                              editable: true,
                                              sortable: true,
                                              viewable: true,
                                              hidedlg: false,
                                              hidden: false,
                                              fixed: true,
                                              searchoptions: { sopt: ['cn', 'eq'] }

                                          },
                      
                                {
                                    name: 'Service',
                                    index: 'Service',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }

                                },
                               
                            ],

                            //editData: {
                            //    seq: reqId
                            //},

                            onSelectRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                     

                            }
                        }
                    };
                },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        //table: !is2 ? table : table2,
                        //pager: !is2 ? pager : pager2,
                        table:  table,
                        pager: pager,
                        //fullMsg:!is2 ? fullMsg: fullMsg2,
                        //model: !is2 ? model : model2,
                        //table: table,
                        //pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor( table);

                    BT.Grid.addButton(table, {
                        title: 'المرفقات',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getAttachEmail',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                     
                            BT.Dialog.Create('#modalEmailSmsAttach', {
                                title: 'المرفقات',
                                //width: 'max',
                                onOpenFn: function () {
                                    Em.EmailSmsAttach.init(
                                        attachUrl, downloadUrl, sRow.ID
                                    );
                                }
                            });
                        }
                    });
                },

                init = function (pGetMsgUrl,pAttachUrl,pDownloadUrl) {
                    if (
                        BT.isNullOrEmpty(pGetMsgUrl)
                        || BT.isNullOrEmpty(pAttachUrl)
                        || BT.isNullOrEmpty(pDownloadUrl)
                    ) {
                        BT.showErrorNotice('Em.Msg.init: missing params');
                        return;
                    }

                    getMsgUrl = pGetMsgUrl;
                    attachUrl = pAttachUrl;
                    downloadUrl = pDownloadUrl;
                

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),


        EmailSmsAttach : (function () {
            var getServiceFormAttachmentUrl,
               serviceFormId,
                idemail,
               filesUrl,
                table = '#EmailSmsAttachTable',
                pager = '#EmailSmsAttachTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'TITLE', txt: 'عنوان المرفق' },
                        ],

                        Properties: {
                            caption: 'المرفقات',
                            sortname: 'ID',
                            sortorder: 'asc',
                            url: getServiceFormAttachmentUrl,
                            postData: { id: idemail },

                            colNames: [
                                'الكود',  'عنوان المرفق',  'تحميل'
                            ],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                        
                                {
                                    name: 'TITLE',
                                    index: 'TITLE',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                            
                         
                                {
                                    name: 'talabAttachmentsActions',
                                    index: '',
                                    sortable: false,
                                    search: false,
                                    formatter: function (cellvalue, options, rowObject) {
                                        var link = filesUrl;
                                        link = link.replace("fs", rowObject.ID);
                                        link = link.replace("ft", rowObject.TITLE);
                                        //ace-icon fa fa-pencil-square-o bigger-230
                                        return '<a class="btn btn-sm btn-success" href=\''
                                            + link
                                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                    }
                                }
                            ],

                            editData: { id: idemail },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initContentItemGrid = function () {

                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);

                },

                init = function (pGetServiceFormAttachmentUrl,pFilesUrl,pIdEmail
                ) {
                    if (
                        BT.isNullOrEmpty(pGetServiceFormAttachmentUrl)
                        || BT.isNullOrEmpty(pFilesUrl)

                            ) {
                        BT.showErrorNotice('Em.section.init: missing params');
                        return;
                    }

                    getServiceFormAttachmentUrl = pGetServiceFormAttachmentUrl;
              
                    filesUrl = pFilesUrl;
                    idemail = pIdEmail;
                    initContentItemGrid();

                };

            return {
                init: init
            };
        })(),

        StaffGroup: (function () {
            var id,
                url,
         
                table = '#StaffgroupTable',
                pager = '#StaffgroupTablePager',
           gridOpts = function () {
               return {
                   GroupBy: [
                       //{ val: 'SwSeq', txt: 'كود العملية' },
                       //{ val: 'ServiceFormRef', txt: 'كود الطلب' },
                       { val: 'NAME_AR', txt: 'اسم الموظف' },
                   ],

                   Properties: {
                       caption:'الموطفين',
                       sortname: 'ID',
                       sortorder: 'asc',
                       url: url,
                       postData: {
                           id: id
                       },

                       colNames: ['كود ', 'اسم الموظف'],
                       colModel: [
                           {
                               name: 'ID',
                               index: 'ID',
                               key: true,
                               editable: false,
                               viewable: true,
                               hidedlg: true,
                               hidden: true,
                               searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                           },
                           {
                               name: 'NAME_AR',
                               index: 'NAME_AR',
                               width: 150,
                               editable: true,
                               sortable: true,
                               viewable: true,
                               hidedlg: false,
                               hidden: false,
                               fixed: true
                           },
                         
                       ],

                       editData: {
                           id: id
                       },

                       onSelectRow: function (rowId) {

                       }
                   }
               };
           },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table: table ,
                        pager:  pager,
                        //table:  table ,
                        //pager: pager ,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    //BT.Grid.addSeparstor(table);


                },

                init = function (pUrl, pId) {
                    if (
                        BT.isNullOrEmpty(pUrl)
                    ) {
                        BT.showErrorNotice('Em.Note.init: missing params');
                        return;
                    }

                    url = pUrl;
                    id = pId;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),

        StaffGroup1: (function () {
            var id,
                url,

                table = '#StaffgroupTable1',
                pager = '#StaffgroupTablePager1',
           gridOpts = function () {
               return {
                   GroupBy: [
                       //{ val: 'SwSeq', txt: 'كود العملية' },
                       //{ val: 'ServiceFormRef', txt: 'كود الطلب' },
                       { val: 'NAME_AR', txt: 'اسم الموظف' },
                   ],

                   Properties: {
                       caption: 'الموطفين',
                       sortname: 'ID',
                       sortorder: 'asc',
                       url: url,
                       postData: {
                           id: id
                       },

                       colNames: ['كود ', 'اسم الموظف'],
                       colModel: [
                           {
                               name: 'ID',
                               index: 'ID',
                               key: true,
                               editable: false,
                               viewable: true,
                               hidedlg: true,
                               hidden: true,
                               searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                           },
                           {
                               name: 'NAME_AR',
                               index: 'NAME_AR',
                               width: 150,
                               editable: true,
                               sortable: true,
                               viewable: true,
                               hidedlg: false,
                               hidden: false,
                               fixed: true
                           },

                       ],

                       editData: {
                           id: id
                       },

                       onSelectRow: function (rowId) {

                       }
                   }
               };
           },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        //table:  table ,
                        //pager: pager ,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    //BT.Grid.addSeparstor(table);


                },

                init = function (pUrl, pId) {
                    if (
                        BT.isNullOrEmpty(pUrl)
                    ) {
                        BT.showErrorNotice('Em.Note.init: missing params');
                        return;
                    }

                    url = pUrl;
                    id = pId;

                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),

        OpinionAttach : (function () {
            var getOpinionAttachmentUrl,
               opinionId,
            filesUrl,
                table = '#AttachOpinionTable',
                pager = '#AttachOpinionTablePager',
                 table1 = '#AttachOpinionDTable',
                 pager1 = '#AttachOpinionDTablePager',
                 is2 = false,

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'TITLE', txt: 'عنوان المرفق' },
                        ],

                        Properties: {
                            caption: 'المرفقات',
                            sortname: 'ID',
                            sortorder: 'asc',
                            url: getOpinionAttachmentUrl,
                            postData: { opinionId: opinionId },

                            colNames: [
                                'الكود',  'عنوان المرفق',  'تحميل'
                            ],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },
                        
                                {
                                    name: 'TITLE',
                                    index: 'TITLE',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                            
                         
                                {
                                    name: 'talabAttachmentsActions',
                                    index: '',
                                    sortable: false,
                                    search: false,
                                    formatter: function (cellvalue, options, rowObject) {
                                        var link = filesUrl;
                                        link = link.replace("fs", rowObject.ID);
                                        link = link.replace("ft", rowObject.TITLE);
                                  
                                        return '<a class="btn btn-sm btn-success" href=\''
                                            + link
                                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                    }
                                }
                            ],

                            editData: { opinionId: opinionId },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initContentItemGrid = function () {

                    BT.Grid.defaultJqGrid({
                        //table: !is2 ? table : table1,
                        //pager: !is2 ? pager : pager1,
                        table:is2 ? table1 : table,
                        pager: is2 ? pager1 : pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);

                },

                init = function (pGetOpinionAttachmentUrl, pDownloadAttachOpinionUrl, pId, pIs2
                ) {
                    if (
                        BT.isNullOrEmpty(pGetOpinionAttachmentUrl)
                       || BT.isNullOrEmpty(pDownloadAttachOpinionUrl)

                            ) {
                        BT.showErrorNotice('Em.section.init: missing params');
                        return;
                    }

                    getOpinionAttachmentUrl = pGetOpinionAttachmentUrl;
                    filesUrl = pDownloadAttachOpinionUrl;
                    opinionId = pId;
                    if (!BT.isNullOrEmpty(pIs2))
                        is2 = pIs2;

                    initContentItemGrid();

                };

            return {
                init: init
            };
        })(),
        NewPath: (function () {
            var id,
                url,
                undoCancelUrl,
                table = '#NewPathTable',
                pager = '#NewPathTablePager',
                table2,
                pager2,
                modelEdit,
                idFormTxt,
                routeIdTxt,
                idSwTxt,
                note,
                formIdSub,
                mainTable,
                mainModel,
                is2=false,
           gridOpts = function () {
               return {
                   GroupBy: [
         
                       { val: 'NameStaff', txt: 'اسم الموظف' },
                       { val: 'Route_Order', txt: 'ترتيب المسار' },
                   ],

                   Properties: {
                       caption: 'مسار الخدمة',
                       sortname: 'ID',
                       sortorder: 'asc',
                       url: url,
                       postData: {
                           idForm: id
                       },

                       colNames: ['كود ', ' ترتيب المسار ', 'اسم الموظف','الحركة','التفاصيل','',''],
                       colModel: [
                           {
                               name: 'ID',
                               index: 'ID',
                               key: true,
                               editable: false,
                               viewable: true,
                               hidedlg: true,
                               hidden: true,
                               searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                           },
                           {
                               name: 'Route_Order',
                               index: 'Route_Order',
                               width: 150,
                               editable: true,
                               sortable: true,
                               viewable: true,
                               hidedlg: false,
                               hidden: false,
                               fixed: true
                           },
                                 {
                                     name: 'NameStaff',
                                     index: 'NameStaff',
                                     width: 150,
                                     editable: true,
                                     sortable: true,
                                     viewable: true,
                                     hidedlg: false,
                                     hidden: false,
                                     fixed: true
                                 },
                                   {
                                       name: 'ActionTakenName',
                                       index: 'ActionTakenName',
                                       width: 150,
                                       editable: true,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true
                                   },
                                        {
                                            name: 'STAFF_NOTES',
                                            index: 'STAFF_NOTES',
                                            width: 150,
                                            editable: true,
                                            sortable: true,
                                            viewable: true,
                                            hidedlg: false,
                                            hidden: false,
                                            fixed: true
                                        },
                                            {
                                                name: 'ROUTE_ID',
                                                index: 'ROUTE_ID',
                                                width: 150,
                                                editable: true,
                                                sortable: true,
                                                viewable: true,
                                                hidedlg: false,
                                                hidden: true,
                                                fixed: true
                                            },
                                                {
                                                    name: 'SERVICE_FORM_SEQ',
                                                    index: 'SERVICE_FORM_SEQ',
                                                    width: 150,
                                                    editable: true,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: true,
                                                    fixed: true
                                                },
                       ],

                       editData: {
                           idForm: id
                       },

                       onSelectRow: function (rowId) {

                       }
                   }
               };
           },

                initServiceRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table:is2==false? table:table2,
                        pager: is2 == false ? pager : pager2,
                        //table:  table ,
                        //pager: pager ,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    //BT.Grid.addSeparstor(table);
                    BT.Grid.addButton(is2 == false ? table : table2, {
                        title: 'إعادة إحياء',
                        buttonicon: 'fa fa-undo red',
                       // id: 'refreshSF' + (is2 == false ? table : table2),
                        id: 'refreshSF' ,
                        onClickButton: function() {
                            var sRow = BT.Grid.getSelectedRow(is2 == false ? table : table2, this);
                            if (BT.isNullOrEmpty(sRow)) return;
                           

                            BT.Dialog.Create( modelEdit, {
                                title: 'إعادة احياء',
                                width: 'max',
                                onOpenFn: function () {
                             
                                        $(idFormTxt).val(sRow.SERVICE_FORM_SEQ);
                                        $(routeIdTxt).val(sRow.ROUTE_ID);
                                        $(idSwTxt).val(sRow.ID);
                                    
                                },
                                addButtons: [
           {
               id: 'btnUnEndProGrp',
               text: 'حفظ',
               'class': 'btn btn-sm btn-success',
               click: function () {
                   //var msg = msgReplay.html();
                   $(modelEdit + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                   $(modelEdit + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);
         
                   $(formIdSub).ajaxForm({
                       type: "POST",
                       url: undoCancelUrl,
                       data: $(formIdSub).serialize(),
                       success: (function (data44) {
                           if (data44.done == true) {

                               BT.showSuccessNotice();
                               $(note).val(" ");
                               $(".aceInput").val("");
                               $(".aceInput").html("");
                              // $("#fileH").val(" ");
                               BT.Dialog.hide(modelEdit);
                               BT.Dialog.hide(mainModel);
                               BT.Grid.reload(mainTable);

                               $(".writeOpinion").css("display", "none");
                           } else {
                               BT.showErrorNotice(data44.msg);
                               $(modelEdit + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);
                               $(".fa-spinner").hide();
                           }


                       })
                   }).submit();
               }
           }
                                ]
                            });
                            //BT.Dialog.confirm({
                            //    id: 'confirmDel',
                            //    message: ' سيتم رجوع الطلب المختار الى المسار الذي تم اختياره',
                            //    post: {
                            //        url: undoCancelUrl,
                            //        data:$("#refreshServiceRej").serialize(),

                            //        //    {
                            //        //    idForm: sRow.SERVICE_FORM_SEQ,
                            //        //    idSw: sRow.ID,
                            //        //    routeId: sRow.ROUTE_ID
                            //        //},
                            //        onSuccessFn: function (data) {
                            //            BT.Dialog.hide('#modalNewPath');
                            //            $("#AllServiceRejectTable").trigger('reloadGrid');


                            //        }
                            //    }
                            //});
                        }
                    });

                },

                init = function (pUrl, pUndoCancelUrl, pId, pTable2,
                pPager2,
                pModelEdit,
                pIdFormTxt,
                pRouteIdTxt,
                pIdSwTxt,
                pNote,
                pFormIdSub,
                pIs2, pManTable) {
                    if (
                        BT.isNullOrEmpty(pUrl)
                    ) {
                        BT.showErrorNotice('Em.Note.init: missing params');
                        return;
                    }

                    url = pUrl;
                    undoCancelUrl = pUndoCancelUrl;
                    id = pId;
                    is2 = pIs2 == true ? pIs2 : false;

                   table2= pTable2;
                    pager2 = pPager2;
         
                    modelEdit =is2==false?'#modalReturnPath': pModelEdit;
                    idFormTxt = is2 == false ? "#idFormR" : pIdFormTxt;
                    routeIdTxt = is2 == false ? "#routeIdR" : pRouteIdTxt;
                    idSwTxt = is2 == false ? "#idSwR" : pIdSwTxt;
                    note = is2 == false ? "#notesStaffR" : pNote;
                    formIdSub = is2 == false ? "#refreshServiceRej" : pFormIdSub;
                    mainTable = is2 == false ? "#AllServiceRejectTable" : pManTable;
                    mainModel = is2 == false ? "#modalNewPath" : "#modalNewPathE";
                    initServiceRequest();
                };

            return {
                init: init
            };
        })(),
        AllServiceSuspend: (function () {
            var getTypeCraftUrl,
                detailsUrl,
                undoCancelUrl,
                getPermission,
                getTempUrl,
                notesWorkFlowUrl,
                attachurl,
                msgUrl,
                textMesgUrl,
                opinionForServiceUrl,
                printOpinion,
                opinionDownload,
                opinionAttachUrl,
                downloadAttachOpinionUrl,
                isActionDoneJsonUrl,
                endServiceUrl,
                addFianlAttachUrl,
                attachFormUrl,
                attachForm,
                filesUrl,
                creatSaderAcceptUrl,
                reportUrl,
                creatSaderRejectUrl,
                rejectReportUrl,
                forwardServiceUrl,
                dismissUrl,
                replayServiceUrl,
                opinionServiceUrl,
                pageUrl,
                user,
                isOssManagerl,
                idForm;
            var serviceRef = "#ServiceRefSus";
            var notes = "#notesStaffSus";
            var message = "#Message1Sus";
            var textSub = "#textSubSus";
            var msgDismiss = "#msgDismissSus";
            var msgReplay = "#msgReplaySus";
            var opinion = "#opinion11Sus";
            var staff = "#empSus";
            var msgEnd = "#MessageEndSus";
            var staffRef = "#StaffRefSus";
            var attachForm1 = "#attachFormSus";
            var status = "#statusSus";
            var table = '#AllServiceSuspendTable',
                pager = '#AllServiceSuspendTablePager',

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'NameServiceFormA', txt: 'اسم الخدمة' },
                        ],
                        Properties: {
                            caption: "الطلبات العالقة",
                            sortname: 'DATE_SUBMITED',
                            sortorder: "desc",
                            url: getTypeCraftUrl,
                            postData: { idStaff: user },
                            colNames: [
                 'مقدمة من الانترنت', ' اسم المواطن', 'اسم الخدمة', 'تاريخ التقديم', 'القطعة', 'الحي', 'الحوض', ' من الموظف', 'الحالة', 'الكود', 'رقم الطلب', 'تم الرد', 'حالة الطلب', 'تاريخ الاستلام', 'تاريخ القراءة',
                  ' اسم المواطن', 'كود الخدمة', ' كود الموظف',
                    "كود الحالة", "مرفقات إضافية ", 'route', '', '', ''
                            ],
                            colModel: [
                                {
                                    name: 'IS_INTERNET',
                                    index: 'IS_INTERNET',
                                    width: 80,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                  {
                                      name: 'FullNameCitizen',
                                      index: 'FullNameCitizen',
                                      width: 150,
                                      editable: false,
                                      sortable: true,
                                      viewable: true,
                                      hidedlg: false,
                                      hidden: false,
                                      fixed: true,
                                      // searchoptions: { sopt: ['cn', 'eq'] }
                                  },
                                   {
                                       name: 'NameService',
                                       index: 'NameService',
                                       width: 100,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       searchoptions: { sopt: ['cn', 'eq'] }
                                   },
                                        {
                                            name: 'DATE_SUBMITED',
                                            index: 'DATE_SUBMITED',
                                            width: 100,
                                            editable: true,
                                            sortable: true,
                                            viewable: true,
                                            hidedlg: false,
                                            hidden: false,
                                            fixed: true,
                                            sorttype: 'date',
                                            formatter: 'date',
                                            formatoptions: { newformat: 'd/m/Y' },
                                            datefmt: 'd-M-Y',
                                            searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                            searchrules: { date: true }

                                        },


                                            {
                                                name: 'LandName',
                                                index: 'LandName',
                                                width: 100,
                                                editable: false,
                                                sortable: true,
                                                viewable: true,
                                                hidedlg: false,
                                                hidden: false,
                                                fixed: true,
                                                searchoptions: { sopt: ['cn', 'eq'] }
                                            },
                                              {
                                                  name: 'HayName',
                                                  index: 'HayName',
                                                  width: 100,
                                                  editable: false,
                                                  sortable: true,
                                                  viewable: true,
                                                  hidedlg: false,
                                                  hidden: false,
                                                  fixed: true,
                                                  searchoptions: { sopt: ['cn', 'eq'] }
                                              },
                                                {
                                                    name: 'HodName',
                                                    index: 'HodName',
                                                    width: 100,
                                                    editable: false,
                                                    sortable: true,
                                                    viewable: true,
                                                    hidedlg: false,
                                                    hidden: false,
                                                    fixed: true,
                                                    searchoptions: { sopt: ['cn', 'eq'] }
                                                },
                                    {
                                        name: 'NameStaff',
                                        index: 'NameStaff',
                                        width: 150,
                                        editable: false,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        // searchoptions: { sopt: ['cn', 'eq']}
                                    },
                                {
                                    name: 'Status',
                                    index: 'Status',
                                    width: 100,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: false,
                                    hidedlg: true,
                                    hidden: true,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                {
                                    name: 'SERVICE_FORM_SEQ',
                                    index: 'SERVICE_FORM_SEQ',
                                    width: 80,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                },
                                    {
                                        name: 'AllOpinion',
                                        index: 'AllOpinion',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: false,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                    },

                                            {
                                                name: 'StatusForm',
                                                index: 'StatusForm',
                                                width: 100,
                                                editable: false,
                                                sortable: true,
                                                viewable: true,
                                                hidedlg: false,
                                                hidden: false,
                                                fixed: true,
                                                searchoptions: { sopt: ['cn', 'eq'] }
                                            },

                                {
                                    name: 'DATE_RECEIVED',
                                    index: 'DATE_RECEIVED',
                                    width: 100,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }

                                },
                                {
                                    name: 'DATE_READ',
                                    index: 'DATE_READ',
                                    width: 100,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    sorttype: 'date',
                                    formatter: 'date',
                                    formatoptions: { newformat: 'd/m/Y' },
                                    datefmt: 'd-M-Y',
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                    searchrules: { date: true }

                                },

                                {
                                    name: 'NameCitizen',
                                    index: 'NameCitizen',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: true,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },

                                {
                                    name: 'ServiceRef',
                                    index: 'ServiceRef',
                                    width: 100,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: true,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },

                                {
                                    name: 'STAFF_REF',
                                    index: 'STAFF_REF',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: true,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },


                                {
                                    name: 'StatusId',
                                    index: 'StatusId',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: true,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                {
                                    name: 'NumberAttachCitizen',
                                    index: 'NumberAttachCitizen',
                                    width: 150,
                                    editable: false,
                                    viewable: false,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                {
                                    name: 'ROUTE_ID',
                                    index: 'ROUTE_ID',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: false,
                                    hidedlg: false,
                                    hidden: true,
                                    fixed: true,
                                },
                                     {
                                         name: 'EmailCitizen',
                                         index: 'EmailCitizen',
                                         width: 150,
                                         editable: true,
                                         sortable: true,
                                         viewable: false,
                                         hidedlg: false,
                                         hidden: true,
                                         fixed: true,
                                     },
                                          {
                                              name: 'Phone',
                                              index: 'Phone',
                                              width: 150,
                                              editable: true,
                                              sortable: true,
                                              viewable: false,
                                              hidedlg: false,
                                              hidden: true,
                                              fixed: true,
                                          },
                                                   {
                                                       name: 'SUSPEND',
                                                       index: 'SUSPEND',
                                                       width: 150,
                                                       editable: true,
                                                       sortable: true,
                                                       viewable: false,
                                                       hidedlg: false,
                                                       hidden: true,
                                                       fixed: true,
                                                   },

                            ],
                            editData: { idStaff: user },
                            onSelectRow: function (rowId) {
                           

                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    $(this).attr("aria-selected","true");
                       
                                    $("#opinion1SusAllServiceSuspendTable").hide();
                                    //$("#AgreeServiseSusAllServiceUnderFlowTable").hide();
                                    //$("#OpenBuildingFileSusAllServiceUnderFlowTable").hide();
                                    //$("#LicenseTaxes").hide();
                                    $("#forwardSusAllServiceSuspendTable").hide();
                                    $("#rejectSusAllServiceSuspendTable").hide();
                                    $("#messageSusAllServiceSuspendTable").hide();
                                    $("#acceptSusAllServiceSuspendTable").hide();
                                    $("#endServiceFormBtnSusAllServiceSuspendTable").hide();
                                    $("#arabicServiceFormBtnSusAllServiceSuspendTable").hide();
                                    $("#englishServiceFormBtnSusAllServiceSuspendTable").hide();
                                    $("#arabicRejectServiceFormBtnSusAllServiceSuspendTable").hide();
                                    $("#englishRejectServiceFormBtnSusAllServiceSuspendTable").hide();
                                    $("#getAttachServiceSusAllServiceSuspendTable").hide();
                                    $("#endServiceFormBtnSusAllServiceSuspendTable").hide();

                                    var lnk = getPermission;
                                 
                                        $.ajax({
                                            type: "GET",
                                            contentType: "application/json; charset=utf-8",
                                            url: lnk,
                                            data: {
                                                srId: sRow.ROUTE_ID,
                                                id: sRow.SERVICE_FORM_SEQ
                                            },
                                            dataType: "json",
                                            beforeSend: function () {
                                                $("#LoadingImage").show();
                                            },
                                            success: function (data) {
                                                $("#LoadingImage").hide();
                                                if (data != null) {
                                                    $.each(data, function (i, item) {
                                                        title: item.ActionName == "إدخال" ? "احتساب الرسوم هندسية" :
                                                            item.ActionName == "تأكيد" ? "تحويل الى المالية" : item.ActionName == "إصدار" ? "إصدار رخصة" : item.ActionName;
                                     
                                                        var name = item.ActionName;
                                                        var ACTION = item.ACTION;

                                                     
                                                        if (ACTION == 1) {//تحويل
                                                            $("#forwardSusAllServiceSuspendTable").show();
                                                    
                                                        }
                                                        if (parseFloat(ACTION) == 11)
                                                        {
                                                            $("#AgreeServiseAllServiceSuspendTable").show();

                                                        }

                                                        if (parseFloat(ACTION) == 12) {
                                                            $("#OpenBuildingFileAllServiceSuspendTable").show();

                                                        }
                                                        if (ACTION == 2) {//رفض
                                                            $("#rejectSusAllServiceSuspendTable").show();
                                                        }

                                                        if (ACTION == 5) {//رسالة
                                                            $("#messageSusAllServiceSuspendTable").show();

                                                        }

                                                        if (ACTION == 3) {//قبول
                                                            $("#acceptSusAllServiceSuspendTable").show();

                                                        }
                                                        if (ACTION == 6) {//أخذرأي
                                                            $("#opinion1SusAllServiceSuspendTable").show();
                                                        }

                                                        if (ACTION == 8) {//إدخال
                                                            $("#edkhalSusAllServiceSuspendTable").show();

                                                        }

                                                        if (ACTION == 9) {//تأكيد
                                                            $("#forwardFainancialAllServiceSuspendTable").show();

                                                        }
                                                
                                        
                                                        if (sRow.StatusForm === "بانتظار مرفقات من المواطن"
                || sRow.StatusForm === "تم التعليق") {
                                                            $("#forwardSusAllServiceSuspendTable").hide();
                                                            $("#rejectSusAllServiceSuspendTable").hide();
                                                            $("#acceptSusAllServiceSuspendTable").hide();
                                                            $("#opinion1SusAllServiceSuspendTable").show();
                                            
                                                            $("#messageSusAllServiceSuspendTable").show();
                                                            //$("#edkhalAllServiceUnderFlowTable").hide();
                                                            //$("#forwardFainancialAllServiceUnderFlowTable").hide();
                                                            //$("#isdarAllServiceUnderFlowTable").hide();
                                                            $("#arabicServiceFormBtnSusAllServiceSuspendTable").hide();
                                                            $("#englishServiceFormBtnSusAllServiceSuspendTable").hide();
                                                            $("#arabicRejectServiceFormBtnSusAllServiceSuspendTable").hide();
                                                            $("#englishRejectServiceFormBtnSusAllServiceSuspendTable").hide();
                                                            $("#getAttachServiceSusAllServiceSuspendTable").hide();
                                                            $("#endServiceFormBtnSusAllServiceSuspendTable").hide();

                                                        }

                                                    });
                                    
                                                }
                                            }});

                                        var lnk0 = getTempUrl;


                                        $.ajax({
                                            type: "GET",
                                            contentType: "application/json; charset=utf-8",
                                            url: lnk0,
                                            data: {
                                                seq: sRow.ServiceRef,
                                                sform: sRow.SERVICE_FORM_SEQ,
                                                myOrder: sRow.ROUTE_ID
                                            },
                                            success: function (data) {
                                                if (data.eng == true) {
                                                    if (data.data1 === "English_reject" || data.data1 === "English_accept"
                                                    || data.data1 === "both_reject" || data.data1 === "both_accept"
                                                    || data.data1 === "arabic_reject" || data.data1 === "arabic_accept"
                                                    || data.data1 === "last_accept" || data.data1 === "last_reject") {
                                                        $("#endServiceFormBtnSusAllServiceSuspendTable").show();
                                                        //$("#isdarAllServiceUnderFlowTable").show();
                                                        $("#forwardSusAllServiceSuspendTable").hide();
                                                    }

                                                } else {
                                                    if (data.data1 === "arabic_accept" || data.data1 === "both_accept") {

                                                        $("#arabicServiceFormBtnSusAllServiceSuspendTable").show();

                                                    }
                                                    if (data.data1 === "English_accept" || data.data1 === "both_accept") {
                                                        $("#englishServiceFormBtnSusAllServiceSuspendTable").show();
                                                    }


                                                    if (data.data1 === "arabic_reject" || data.data1 === "both_reject") {
                                                        //here//
                                                        $("#arabicRejectServiceFormBtnSusAllServiceSuspendTable").show();
                                                    }
                                                    if (data.data1 === "English_reject" || data.data1 === "both_reject") {
                                                        $("#englishRejectServiceFormBtnSusAllServiceSuspendTable").show();

                                                    }
                                                    if (data.data1 === "English_reject" || data.data1 === "English_accept"
                                                        || data.data1 === "both_reject" || data.data1 === "both_accept"
                                                        || data.data1 === "arabic_reject" || data.data1 === "arabic_accept"
                                                        || data.data1 === "last_accept" || data.data1 === "last_reject") {
                                                        $("#endServiceFormBtnSusAllServiceSuspendTable").show();
                                                        $("#getAttachServiceSusAllServiceSuspendTable").show();
                                                    }
                                                }
                                            }
                                        });
                                    
                                    if (sRow.NameStaff == "مجموعة") {
                                        $("#groupStaff1").show();
                                    }
                                },
                            
                            rowattr: function (rowData, currentObj, rowId) {
                                var aa = rowData.SERVICE_FORM_SEQ;
                                if (aa == idForm) {
                                    $(this).triggerHandler("selectRow.jqGrid", [rowId]);
                                    $("#" + rowId).click();
                                    return {
                                        "aria-selected": 'true',
                                        "class": "ui-state-highlight selectedClass"
                                    };

                                }

                                return '';
                            },
                            ondblClickRow: function (rowId) {
                                var sRow = BT.Grid.getSelectedRow(table, this);
                                if (sRow == null) return;

                                var lnk = detailsUrl;
                                //openWindowWithPost(lnk, { idForm: sRow.SERVICE_FORM_SEQ, type: "cancel", no: "2" });
                                openWindowWithPost(lnk, { seq: sRow.ID, idForm: sRow.SERVICE_FORM_SEQ, type: "suspend", routeId: sRow.ROUTE_ID });

                            },
                        }
                    };
                },

                initDepartmentsGrid = function () {
                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });
                    BT.Grid.addButton(table, {
                        title: 'التفاصيل',
                        buttonicon: 'fa fa-align-justify',
                        id: 'goToSectionsBtn' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;

                            var lnk = detailsUrl;
                            openWindowWithPost(lnk, { seq: sRow.ID, idForm: sRow.SERVICE_FORM_SEQ, type: "suspend", routeId: sRow.ROUTE_ID });

                        }
                    });
             
                    BT.Grid.addButton(table, {
                        title: 'سير العمل',
                        buttonicon: 'fa fa-exchange blue',
                        id: 'getNotesWorkFlowServiceSus' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalNoteWorkFlowServiceSus', {
                                title: 'سير العمل',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.NotesWorkFlowServiceSus.init(
                                        notesWorkFlowUrl, sRow.SERVICE_FORM_SEQ, attachurl
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addSeparstor(table);

                    BT.Grid.addButton(table, {
                        title: 'الرسائل',
                        buttonicon: 'fa fa-envelope blue',
                        id: 'getMsgServiceSus' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalMsgServiceSus', {
                                title: 'الرسائل',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.MsgService.init(
                                        msgUrl, sRow.ID, textMesgUrl, false, "#modalTextFullMsgSus", "#fullMsgSus"
                                    );
                                }
                            });
                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'الآراء',
                        buttonicon: 'fa fa-comments-o blue',
                        id: 'getOpinionServiceSus' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            BT.Dialog.Create('#modalAllOpinionForServiceSus', {
                                title: 'الآراء',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.AllOpinionForServiceSus.init(
                                        opinionForServiceUrl, sRow.ID, false, printOpinion, opinionDownload, opinionAttachUrl, downloadAttachOpinionUrl
                                    );
                                }
                            });
                        }
                    });


                    BT.Grid.addSeparstor(table, 'last');

                    BT.Grid.addButton(table, {
                        title: 'إنهاء وتبليغ',
                        buttonicon: 'fa fa-mail-forward green',
                        id: 'endServiceFormBtnSus' + BT.getNoHash(table),
                        position: 'first',

                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                url: isActionDoneJsonUrl,
                                data: { id: sRow.ID }
                            }).done(function (data) {
                                if (data.msg == true) {
                                    BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                } else {
                                    BT.Dialog.Create('#modalEndMessageSus', {
                                        title: 'إنهاء وتبليغ',
                                        onOpenFn: function () {

                                        },
                                        addButtons: [
                                            {
                                                id: 'btnUnEndProGrp',
                                                text: 'إرسال',
                                                'class': 'btn btn-sm btn-success',
                                                click: function () {
                                                    var msg = msgEnd.html();
                                                    var txtEmail = $("#textEmailSus").html();
                                                    var lnk1 = endServiceUrl;

                                                    $('#modalEndMessageSus' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                    $('#modalEndMessageSus' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);
                                                    $("#endService1Sus").ajaxForm({
                                                        type: "POST",
                                                        url: lnk1,
                                                        data: {
                                                            id: sRow.ID,
                                                            idService: sRow.ServiceRef,
                                                            idForm: sRow.SERVICE_FORM_SEQ,
                                                            text: msg,
                                                  
                                                        },
                                                        success: (function (data3) {
                                                            if (data3.done) {
                                                                //var msg1 = " تم انهاء الطلب بنجاح " + "</br>" + data3.msg;

                                                                BT.showSuccessNotice(" تم انهاء الطلب بنجاح " + "</br>" + data3.msg + "");

                                                                //BT.Grid.reload(table);
                                                                BT.Dialog.hide('#modalEndMessageSus');
                                                                //window.location.href = pageUrl;
                                                                $("#refresh_AllServiceSuspendTable").click();
                                                                $("#refresh_AllServiceDoneTable").click();
                                                            } else {
                                                                $('#modalEndMessageSus' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);
                                                                BT.showErrorNotice(data3.msg);
                                                            }


                                                        })
                                                    }).submit();
                                                }
                                            }
                                        ]
                                    });
                                }

                            });

                        }
                    });
                    BT.Grid.addButton(table, {
                        title: 'مرفقات نهائية',
                        buttonicon: 'fa fa-align-justify',
                        id: 'getAttachServiceSus' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            var lnk = addFianlAttachUrl;
                            //lnk = lnk.replace("_Id_", sRow.ServiceFormRef);
                            BT.Dialog.Create('#modalAttachFinalServiceSus', {
                                title: 'مرفقات نهائية',
                                width: 'max',
                                onOpenFn: function () {
                                    Em.ServiceFormAttachmentSus.init(
                                        attachFormUrl, sRow.SERVICE_FORM_SEQ, lnk, attachForm, filesUrl
                                    );
                                }
                            });
                        }
                    });
                    BT.Grid.addButton(table, {
                        title: 'إصدار كتاب عربي',
                        buttonicon: 'fa fa-book green',
                        id: 'arabicServiceFormBtnSus' + BT.getNoHash(table),
                        position: 'first',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                url: isActionDoneJsonUrl,
                                data: { id: sRow.ID }
                            }).done(function (data) {
                                if (data.msg == true) {
                                    BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                } else {
                           

                                    var lnkA = creatSaderAcceptUrl;
                                    $.ajax({
                                        type: "POST",
                                        url: lnkA,
                                        data: {
                                            formId: sRow.SERVICE_FORM_SEQ,
                                            lan: "ar"
                                        },
                                        success: function (data) {
                                            if (data.done) {
                                                var lnk = reportUrl;
                                                openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, serviceId: sRow.ServiceRef, user: sRow.NameCitizen, lan: "ar" });

                                            } else {
                                                BT.showSuccessNotice(data.msg);
                                            }
                                        }
                                    });
                             
                                }
                            });
                        }

                    });
                    BT.Grid.addButton(table, {
                        title: 'إصدار كتاب رفض عربي',
                        buttonicon: 'fa fa-book green',
                        id: 'arabicRejectServiceFormBtnSus' + BT.getNoHash(table),
                        position: 'first',
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                url: isActionDoneJsonUrl,
                                data: { id: sRow.ID }
                            }).done(function (data) {
                                if (data.msg == true) {
                                    BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                } else {
                                 
                                    var lnkA = creatSaderRejectUrl;
                                    $.ajax({
                                        type: "POST",
                                        url: lnkA,
                                        data: {
                                            formId: sRow.SERVICE_FORM_SEQ,
                                            lan: "ar"
                                        },
                                        success: function (data) {
                                            if (data.done) {
                                                var lnk = rejectReportUrl;
                                                openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, serviceId: sRow.ServiceRef, user: sRow.NameCitizen, lan: "ar" });

                                            } else {
                                                BT.showSuccessNotice(data.msg);
                                            }
                                        }
                                    });
                               
                                }
                            });
                       

                        }
                    });

                    BT.Grid.addButton(table, {
                        title: 'إصدار كتاب انجليزي',
                        buttonicon: 'fa fa-book green',
                        id: 'englishServiceFormBtnSus' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                url: isActionDoneJsonUrl,
                                data: { id: sRow.ID }
                            }).done(function (data) {
                                if (data.msg == true) {
                                    BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                } else {
                                 
                                    var lnkA = creatSaderAcceptUrl;
                                    $.ajax({
                                        type: "POST",
                                        url: lnkA,
                                        data: {
                                            formId: sRow.SERVICE_FORM_SEQ,
                                            lan: "en"
                                        },
                                        success: function (data) {
                                            if (data.done) {
                                                var lnk = reportUrl;
                                                openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, serviceId: sRow.ServiceRef, user: sRow.NameCitizen, lan: "en" });

                                            } else {
                                                BT.showSuccessNotice(data.msg);
                                            }
                                        }
                                    });
                           
                                }
                            });
                         
                        }

                      
                    });

                    BT.Grid.addButton(table, {
                        title: 'إصدار كتاب رفض انجليزي',
                        buttonicon: 'fa fa-book green',
                        id: 'englishRejectServiceFormBtnSus' + BT.getNoHash(table),
                        onClickButton: function () {
                            var sRow = BT.Grid.getSelectedRow(table, this);
                            if (sRow == null) return;
                            $.ajax({
                                url: isActionDoneJsonUrl,
                                data: { id: sRow.ID }
                            }).done(function (data) {
                                if (data.msg == true) {
                                    BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                } else {
                                  
                                    var lnkA = creatSaderRejectUrl;
                                    $.ajax({
                                        type: "POST",
                                        url: lnkA,
                                        data: {
                                            formId: sRow.SERVICE_FORM_SEQ,
                                            lan: "en"
                                        },
                                        success: function (data) {
                                            if (data.done) {
                                                var lnk = rejectReportUrl;
                                                openWindowWithPost(lnk, { serviceFId: sRow.SERVICE_FORM_SEQ, serviceId: sRow.ServiceRef, user: sRow.NameCitizen, lan: "en" });

                                            } else {
                                                BT.showSuccessNotice(data.msg);
                                            }
                                        }
                                    });
                                   
                                }
                            });
                           
                        }
                    });


                    BT.Grid.addButton(table,
                   {
                       title: 'تحويل',
                       buttonicon: 'fa fa-mail-forward blue',
                       id: 'forwardSus' + BT.getNoHash(table),
                       onClickButton: function () {
                           var sRow = BT.Grid.getSelectedRow(table, this);
                           if (sRow == null) return;
                           $.ajax({
                               url: isActionDoneJsonUrl,
                               data: { id: sRow.ID }
                           }).done(function (data) {
                               if (data.msg == true) {
                                   BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                               } else {
                                   var lnk = forwardServiceUrl;
                                   BT.Dialog.Create('#modalForwardServiceSus', {
                                       title: 'تحويل',
                                       onOpenFn: function () {

                                           lnk = lnk.replace("__id__", sRow.ID);
                                           lnk = lnk.replace("__seq__", sRow.ServiceRef);
                                           lnk = lnk.replace("&amp;", "&");
                                           lnk = lnk.replace("_f_", sRow.SERVICE_FORM_SEQ);

                                       },
                                       addButtons: [
                                           {
                                               id: 'btnSaveFSus',
                                               text: 'تحويل',
                                               'class': 'btn btn-sm btn-success',
                                               click: function () {
                                                   //   $("#forward").submit(function (e) {
                                                   $('#modalForwardServiceSus' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                   $('#modalForwardServiceSus' + '~.ui-dialog-buttonpane #btnSaveFSus').prop('disabled', true);
                                                   $("#forwardServiceSus").ajaxForm({
                                                       type: "POST",
                                                       url: lnk,
                                                       data: $("#forwardServiceSus").serialize(),

                                                       success: (function (data1) {

                                                           if (data1.done) {
                                                               BT.showSuccessNotice("تم تحويل الطلب للموظف: " + data1.msg);
                                                               //BT.Grid.reload(table);
                                                               BT.Dialog.hide('#modalForwardServiceSus');
                                                               $("#notesStaffSus").val("");
                                                               // window.location.href = pageUrl;
                                                               $("#refresh_AllServiceSuspendTable").click();
                                                               $("#refresh_AllServiceDoneTable").click();
                                                           } else {

                                                               BT.showErrorNotice(data1.msg);
                                                               $('#modalForwardServiceSus' + '~.ui-dialog-buttonpane #btnSaveFSus').prop('disabled', false);

                                                           }


                                                       })
                                                   }).submit();

                                               }
                                           }
                                       ]
                                   });
                               }

                           });

                       }
                   });

                    BT.Grid.addSeparstor(table);
                    BT.Grid.addButton(table,
                            {
                                title: 'رفض',
                                buttonicon: 'fa fa-times red',
                                id: 'rejectSus' + BT.getNoHash(table),
                                onClickButton: function () {
                                    var sRow = BT.Grid.getSelectedRow(table, this);
                                    if (sRow == null) return;
                                    $.ajax({
                                        url: isActionDoneJsonUrl,
                                        data: { id: sRow.ID }
                                    }).done(function (data) {
                                        if (data.msg == true) {
                                            BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                                        } else {
                                            var lnk2 = dismissUrl;

                                            BT.Dialog.Create('#modalDismissServiceSus', {
                                                title: 'رفض',
                                                onOpenFn: function () {
                                                    lnk2 = lnk2.replace("__id__", sRow.ID);
                                                    lnk2 = lnk2.replace("__seq__", sRow.ServiceRef);
                                                    lnk2 = lnk2.replace("&amp;", "&");
                                                    lnk2 = lnk2.replace("_f_", sRow.SERVICE_FORM_SEQ);
                                                },
                                                addButtons: [
                                                    {
                                                        id: 'btnUnEndProGrp',
                                                        text: 'رفض',
                                                        'class': 'btn btn-sm btn-success',
                                                        click: function () {
                                                            $('#modalDismissServiceSus' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                            $('#modalDismissServiceSus' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);
                                                            $("#dismissSeSus").ajaxForm({
                                                                type: "POST",
                                                                url: lnk2,
                                                                data: $("#dismissSeSus").serialize(),
                                                                
                                                                success: (function (data2) {

                                                                    if (data2.done) {
                                                                        BT.showSuccessNotice();
                                                                        //BT.Grid.reload(table);
                                                                        BT.Dialog.hide('#modalDismissServiceSus');
                                                                        //window.location.href = pageUrl;
                                                                        $("#msgDismissSus").val("");
                                                                        $("#refresh_AllServiceSuspendTable").click();
                                                                        $("#refresh_AllServiceDoneTable").click();
                                                                    } else {
                                                                        BT.showErrorNotice(data2.msg);
                                                                        $('#modalDismissServiceSus' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);

                                                                    }


                                                                })
                                                            }).submit();

                                                            true,
                                                                function () {
                                                                    BT.Grid.reload(table);
                                                                    BT.Dialog.hide('#modalDismissServiceSus');
                                                                    window.location.href = pageUrl;

                                                                }

                                                        }
                                                    }
                                                ]
                                            });
                                        }

                                    });

                                }
                            });

                  

                    BT.Grid.addButton(table,
                  {
                      title: 'قبول',
                      buttonicon: 'fa fa-check green',
                      id: 'acceptSus' + BT.getNoHash(table),
                      onClickButton: function () {
                          var sRow = BT.Grid.getSelectedRow(table, this);
                          if (sRow == null) return;
                          $.ajax({
                              url: isActionDoneJsonUrl,
                              data: { id: sRow.ID }
                          }).done(function (data) {
                              if (data.msg == true) {
                                  BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                              } else {
                                  var lnk3 = replayServiceUrl;
                                  BT.Dialog.Create('#modalReplayServiceSus', {
                                      title: 'قبول',
                                      onOpenFn: function () {

                                          $("#idFSus").val(sRow.ID),
                                              $("#idServiceSus").val(sRow.ServiceRef),
                                              $("#idFormRSus").val(sRow.SERVICE_FORM_SEQ)
                                      },
                                      addButtons: [
                                          {
                                              id: 'btnUnEndProGrp',
                                              text: 'قبول',
                                              'class': 'btn btn-sm btn-success',
                                              click: function () {
                                                  $('#modalReplayServiceSus' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                                  $('#modalReplayServiceSus' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);

                                                  $("#replaySeSus").ajaxForm({
                                                      type: "POST",
                                                      url: lnk3,
                                                      data: $("#replaySeSus").serialize(),
                                                      success: (function (data44) {
                                                          if (data44.done) {
                                                              BT.showSuccessNotice();
                                                              BT.Dialog.hide('#modalReplayServiceSus');
                                                              $("#msgReplaySus").val("");
                                                              $("#refresh_AllServiceSuspendTable").click();
                                                              $("#refresh_AllServiceDoneTable").click();
                                                          } else {
                                                              BT.showErrorNotice(data44.msg);
                                                              $('#modalReplayServiceSus' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);


                                                          }


                                                      })
                                                  }).submit(),
                                                      true,
                                                      function () {
                                                          BT.Grid.reload(table);
                                                          BT.Dialog.hide('#modalReplayServiceSus');
                                                          window.location.href = pageUrl;

                                                      }

                                              }
                                          }
                                      ]
                                  });
                              }

                          });

                      }
                  });
                    BT.Grid.addButton(table,
           {
               title: 'أخذرأي',
               buttonicon: 'fa fa-comment-o orange2',
               id: 'opinion1Sus' + BT.getNoHash(table),
               onClickButton: function () {
                   var sRow = BT.Grid.getSelectedRow(table, this);
                   if (sRow == null) return;
                   $.ajax({
                       url: isActionDoneJsonUrl,
                       data: { id: sRow.ID }
                   }).done(function (data) {
                       if (data.msg == true) {
                           BT.showErrorNotice("لا تستطيع اتمام هذه العملية:تمت الاجراءات على هذا الطلب");
                       } else {
                           var lnk4 = opinionServiceUrl;
                           BT.Dialog.Create('#modalOpinionServiceSus', {
                               title: 'أخذرأي',
                               onOpenFn: function () {
                               },
                               addButtons: [
                                   {
                                       id: 'btnUnEndProGrp',
                                       text: 'إرسال',
                                       'class': 'btn btn-sm btn-success',
                                       click: function () {
                                           $('#modalOpinionServiceSus' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                           $('#modalOpinionServiceSus' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', true);


                                           
                                           $("#opinionService1Sus").ajaxForm({
                                               type: "POST",
                                               url: lnk4,
                                               data: {
                                                   id: sRow.ID,
                                                   idService: sRow.ServiceRef,
                                                   text: opinion.val(),
                                                   emp: staff.val()
                                               },
                                               success: (function (data44) {
                                                   if (data44.done) {

                                                       BT.showSuccessNotice();
                                                       BT.Grid.reload(table);
                                                       BT.Dialog.hide('#modalOpinionServiceSus');
                                                       window.location.href = pageUrl;
                                                   } else {
                                                       BT.showErrorNotice(data44.msg);
                                                       $('#modalOpinionServiceSus' + '~.ui-dialog-buttonpane #btnUnEndProGrp:first').prop('disabled', false);

                                                   }


                                               })
                                           }).submit();
                                       }
                                   }
                               ]
                           });
                       }

                   });

               }
           });
                  

                },

                init = function (pGetTypeCraftUrl, pDetailsUrl, pUndoCancelUrl, pGetPermissionp, pGetTempUrl, pNotesWorkFlowUrl,
                    pAttachurl, pMsgUrl, pTextMesgUrl, pOpinionForServiceUrl, pPrintOpinion, pOpinionDownload, pOpinionAttachUrl,
                    pDownloadAttachOpinionUrl, pIsActionDoneJsonUrl, pEndServiceUrl, pAddFianlAttachUrl, pAttachFormUrl, pAttachForm,
                    pFilesUrl, pCreatSaderAcceptUrl, pReportUrl, pCreatSaderRejectUrl, pRejectReportUrl, pForwardServiceUrl, pDismissUrl,
                    pReplayServiceUrl,pPageUrl,pOpinionServiceUrl,
                   pUser, pIsOssManagerl, pIdForm) {
                    if (
                        BT.isNullOrEmpty(pGetTypeCraftUrl)
                        || BT.isNullOrEmpty(pDetailsUrl)
                        || BT.isNullOrEmpty(pUndoCancelUrl)
                        || BT.isNullOrEmpty(pGetPermissionp)
                        || BT.isNullOrEmpty(pGetTempUrl)
                        || BT.isNullOrEmpty(pNotesWorkFlowUrl)
                        || BT.isNullOrEmpty(pAttachurl)
                        || BT.isNullOrEmpty(pMsgUrl)
                        || BT.isNullOrEmpty(pTextMesgUrl)
                        || BT.isNullOrEmpty(pOpinionForServiceUrl)
                        || BT.isNullOrEmpty(pPrintOpinion)
                        || BT.isNullOrEmpty(pOpinionDownload)
                        || BT.isNullOrEmpty(pOpinionAttachUrl)
                        || BT.isNullOrEmpty(pDownloadAttachOpinionUrl)
                        || BT.isNullOrEmpty(pIsActionDoneJsonUrl)
                        || BT.isNullOrEmpty(pEndServiceUrl)
                        || BT.isNullOrEmpty(pAddFianlAttachUrl)
                        || BT.isNullOrEmpty(pAttachFormUrl)
                        || BT.isNullOrEmpty(pAttachForm)
                        || BT.isNullOrEmpty(pFilesUrl)
                        || BT.isNullOrEmpty(pCreatSaderAcceptUrl)
                        || BT.isNullOrEmpty(pReportUrl)
                        || BT.isNullOrEmpty(pCreatSaderRejectUrl)
                        || BT.isNullOrEmpty(pRejectReportUrl)
                        || BT.isNullOrEmpty(pForwardServiceUrl)
                        || BT.isNullOrEmpty(pDismissUrl)
                        || BT.isNullOrEmpty(pReplayServiceUrl)
                        || BT.isNullOrEmpty(pPageUrl)
                        || BT.isNullOrEmpty(pOpinionServiceUrl)

                    ) {
                        BT.showErrorNotice('Em.UseSubWater.init: missing params');
                        return;
                    }

                    getTypeCraftUrl = pGetTypeCraftUrl;
                    detailsUrl = pDetailsUrl;
                    undoCancelUrl = pUndoCancelUrl;
                    getPermission = pGetPermissionp;
                    getTempUrl = pGetTempUrl;
                    notesWorkFlowUrl = pNotesWorkFlowUrl;
                    attachurl = pAttachurl;
                    msgUrl = pMsgUrl;
                    textMesgUrl = pTextMesgUrl;
                    opinionForServiceUrl = pOpinionForServiceUrl;
                    printOpinion = pPrintOpinion;
                    opinionDownload = pOpinionDownload;
                    opinionAttachUrl = pOpinionAttachUrl;
                    downloadAttachOpinionUrl = pDownloadAttachOpinionUrl;
                    isActionDoneJsonUrl = pIsActionDoneJsonUrl;
                    endServiceUrl = pEndServiceUrl;
                    addFianlAttachUrl = pAddFianlAttachUrl;
                    attachFormUrl = pAttachFormUrl;
                    attachForm = pAttachForm;
                    filesUrl = pFilesUrl;
                    creatSaderAcceptUrl = pCreatSaderAcceptUrl;
                    reportUrl = pReportUrl;
                    creatSaderRejectUrl = pCreatSaderRejectUrl;
                    rejectReportUrl = pRejectReportUrl;
                    forwardServiceUrl = pForwardServiceUrl;
                    dismissUrl = pDismissUrl;
                    replayServiceUrl = pReplayServiceUrl;
                    pageUrl = pPageUrl;
                    opinionServiceUrl = pOpinionServiceUrl;
                    user = pUser;
                    isOssManagerl = pIsOssManagerl;
                    idForm = pIdForm;
                    initDepartmentsGrid();
                };

            return {
                init: init
            };
        })(),
        OpinionAttachSus: (function () {
            var getOpinionAttachmentUrl,
               opinionId,
            filesUrl,
                table = '#AttachOpinionSusTable',
                pager = '#AttachOpinionSusTablePager',
                
                 is2 = false,

                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'TITLE', txt: 'عنوان المرفق' },
                        ],

                        Properties: {
                            caption: 'المرفقات',
                            sortname: 'ID',
                            sortorder: 'asc',
                            url: getOpinionAttachmentUrl,
                            postData: { opinionId: opinionId },

                            colNames: [
                                'الكود', 'عنوان المرفق', 'تحميل'
                            ],
                            colModel: [
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }
                                },

                                {
                                    name: 'TITLE',
                                    index: 'TITLE',
                                    width: 150,
                                    editable: false,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },


                                {
                                    name: 'talabAttachmentsActions',
                                    index: '',
                                    sortable: false,
                                    search: false,
                                    formatter: function (cellvalue, options, rowObject) {
                                        var link = filesUrl;
                                        link = link.replace("fs", rowObject.ID);
                                        link = link.replace("ft", rowObject.TITLE);

                                        return '<a class="btn btn-sm btn-success" href=\''
                                            + link
                                            + '\' target="_blank"><i class="ace-icon fa fa-download bigger-125"></i>تنزيل الملف</a>';
                                    }
                                }
                            ],

                            editData: { opinionId: opinionId },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initContentItemGrid = function () {

                    BT.Grid.defaultJqGrid({
                      
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);

                },

                init = function (pGetOpinionAttachmentUrl, pDownloadAttachOpinionUrl, pId, pIs2
                ) {
                    if (
                        BT.isNullOrEmpty(pGetOpinionAttachmentUrl)
                       || BT.isNullOrEmpty(pDownloadAttachOpinionUrl)

                            ) {
                        BT.showErrorNotice('Em.section.init: missing params');
                        return;
                    }

                    getOpinionAttachmentUrl = pGetOpinionAttachmentUrl;
                    filesUrl = pDownloadAttachOpinionUrl;
                    opinionId = pId;
                    if (!BT.isNullOrEmpty(pIs2))
                        is2 = pIs2;

                    initContentItemGrid();

                };

            return {
                init: init
            };
        })(),
        AllAttachCitizen: (function () {
            var getAttachUrl,
                formId,
                stakeId,
                table = '#AttachCitizenTable',
                pager = '#AttachCitizenTablePager',
                filesUrl,
               addCitizenAttachUrl,
                gridOpts = function () {
                    return {
                        GroupBy: [
                            { val: 'ID', txt: 'الكود' },
                            { val: 'TITLE', txt: 'العنوان' }
                        ],

                        Properties: {
                            caption: 'المرفقات',
                            sortname: 'TITLE',
                            sortorder: 'asc',
                            url: getAttachUrl,
                            postData: {
                                idStake: stakeId
                            },

                            colNames: [
                               '', 'الكود', 'العنوان', 'المرفق', 'التاريخ', 'مدخل المرفق'],
                            colModel: [
                                {
                                    name: '',
                                    index: '',
                                    edittype: "radio",
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    formatter: function (cellvalue, options, rowObject) {
                                        return "<input type='radio' id=" + rowObject.ID + '-' + rowObject.TABLE_NAME + " value='" + rowObject.TITLE + "' name='copyRadio' />";
                                    }
                                },
                                {
                                    name: 'ID',
                                    index: 'ID',
                                    key: true,
                                    editable: false,
                                    viewable: true,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },
                                {
                                    name: 'TITLE',
                                    index: 'TITLE',
                                    width: 150,
                                    editable: true,
                                    sortable: true,
                                    viewable: true,
                                    hidedlg: false,
                                    hidden: false,
                                    fixed: true,
                                    searchoptions: { sopt: ['cn', 'eq'] }
                                },
                                    {
                                        name: 'FILE_NAME',
                                        index: 'FILE_NAME',
                                        width: 150,
                                        editable: true,
                                        sortable: true,
                                        viewable: true,
                                        hidedlg: false,
                                        hidden: false,
                                        fixed: true,
                                        searchoptions: { sopt: ['cn', 'eq'] }
                                    },
                                   {
                                       name: 'DateEntered',
                                       index: 'DateEntered',
                                       width: 150,
                                       editable: false,
                                       sortable: true,
                                       viewable: true,
                                       hidedlg: false,
                                       hidden: false,
                                       fixed: true,
                                       sorttype: 'date',
                                       formatter: 'date',
                                       formatoptions: { newformat: 'd/m/Y' },
                                       datefmt: 'd-M-Y',
                                       searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] },
                                       searchrules: { date: true },
                                   },

                                {
                                    name: 'talabAttachmentsActions',
                                    index: '',
                                    sortable: false,
                                    search: false,
                                    formatter: function (cellvalue, options, rowObject) {
                                        var link = filesUrl;
                                        link = link.replace("fs", rowObject.ID);
                                        link = link.replace("ft", rowObject.FILE_NAME);
                                        link = link.replace("tn", rowObject.TABLE_NAME);
                                        //ace-icon fa fa-pencil-square-o bigger-230
                                        return '<a class="btn btn-sm btn-success" href=\''
                                            + link
                                            + '\' target="_blank"><i class="ace-icon fa fa-file-image-o bigger-125"></i>عرض الملف</a>';
                                    }
                                }
                            ],

                            editData: {
                                idStake: stakeId
                            },

                            onSelectRow: function (rowId) {
                            }
                        }
                    };
                },

                initPublicRequest = function () {

                    BT.Grid.defaultJqGrid({
                        table: table,
                        pager: pager,
                        grpBy: gridOpts().GroupBy,
                        options: gridOpts().Properties,
                    });

                    BT.Grid.addSeparstor(table);

                    //BT.Grid.addButton(table, {
                    //    title: 'إضافة',
                    //    buttonicon: 'fa fa-align-justify',
                    //    id: 'goToSectionsBtn' + BT.getNoHash(table),
                    //    onClickButton: function () {
                    //        BT.Dialog.Create('#modalAttachCitizen', {
                    //            title: 'إضافة مرفق',
                    //            onOpenFn: function () {
                    //                // $("#idForm").val(formId);
                    //            },
                    //            addButtons: [
                    //                {
                    //                    id: 'btnSaveF',
                    //                    text: 'حفظ',
                    //                    'class': 'btn btn-sm btn-success',
                    //                    click: function () {
                    //                        //var formData = $(this).serialize();
                    //                        //formData.append('file', $('input[type=file]')[0].files[0]);                                                            //   $("#forward").submit(function (e) {
                    //                        $('#modalAttachCitizen' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                    //                        $('#modalAttachCitizen' + '~.ui-dialog-buttonpane #modalAttachCitizen:first').prop('disabled', true);
                    //                        var lnk = addCitizenAttachUrl;
                    //                        //$("idFormC").val(formId);
                    //                        $("#addAttach").ajaxForm({
                    //                            type: "POST",
                    //                            url: lnk,
                    //                            data: {
                    //                                idForm: formId,
                    //                            },
                    //                            //data: $("#addAttach").serialize(),
                    //                            mimeType: "multipart/form-data",
                    //                            //contentType: false,
                    //                            //cache: false,
                    //                            // processData: false,
                    //                            success: (function () {

                    //                                BT.Grid.reload(table);
                    //                                BT.Dialog.hide('#modalAttachCitizen');
                    //                                //window.location.href = pageUrl;


                    //                                // Optionally alert the user of success here...
                    //                            })
                    //                        }).submit();
                    //                    }
                    //                }
                    //            ]
                    //        });
                    //    }
                    //});

                },

                init = function (pGetAttachUrl, pFilesUrl, pStakeId) {
                    if (
                        BT.isNullOrEmpty(pGetAttachUrl)
                            || BT.isNullOrEmpty(pFilesUrl)
                    ) {
                        BT.showErrorNotice('Em.GetAttach.init: missing params');
                        return;
                    }

                    getAttachUrl = pGetAttachUrl;
                    filesUrl = pFilesUrl;
                    stakeId = pStakeId;
                    //$("#idForm").val(pReqId);

                    initPublicRequest();
                };

            return {
                init: init
            };
        })(),
        MultiGroupStaff: (function () {
            var getServicetPendingUrl,
                addMultiGroupStaffUrl,
                editMultiGroupStaffUrl,
                staffGroupUrl,
                deleteGroupUrl,
                nodeId;

            var table = '#MultiGroupStaffTable';
            var pager = '#MultiGroupStaffTablePager';

            var gridOpts = function () {
                return {
                    GroupBy: [

                        { val: 'GROUP_NAME', txt: ' اسم المجموعة' },
                    ],


                    Properties: {
                        caption: "المجموعات وموظفيها",
                        sortname: 'NameStaff',
                        sortorder: "desc",
                        url: getServicetPendingUrl,
                        postData: {
                            id: nodeId,
                        },
                        colNames: [
                            'الكود',  ' اسم المجموعة', 'نوع المهمة','موظفي المجموعة'
                        ],
                        colModel: [

                            {
                                name: 'ID',
                                index: 'ID',
                                key: true,
                                editable: false,
                                viewable: false,
                                hidedlg: true,
                                hidden: true,
                                searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                            },

                            {
                                name: 'GROUP_NAME',
                                index: 'GROUP_NAME',
                                width: 150,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                            {
                                name: 'RESPONSE_TYPE',
                                index: 'RESPONSE_TYPE',
                                width: 80,
                                editable: false,
                                sortable: true,
                                viewable: true,
                                hidedlg: false,
                                hidden: false,
                                fixed: true,
                                searchoptions: { sopt: ['cn', 'eq'] }
                            },
                                {
                                    name: 'NameStaff',
                                    index: 'NameStaff',
                                    editable: false,
                                    viewable: false,
                                    hidedlg: true,
                                    hidden: false,
                                    searchoptions: { sopt: ['eq', 'nq', 'lt', 'le', 'gt', 'ge'] }

                                },


                        ],
                        editData: {
                            id: nodeId,

                        },

                        onSelectRow: function (rowId) {

                        },

                    }
                };
            };

            var initServiceGrid = function () {
                // var sRow = BT.Grid.getSelectedRow(table, this);

                BT.Grid.defaultJqGrid({
                    table: table,
                    pager: pager,
                    grpBy: gridOpts().GroupBy,
                    options: gridOpts().Properties,
                });
                BT.Grid.addButton(table, {
                    title: 'إضافة ',
                    buttonicon: 'fa fa-plus-circle blue',
                    id: 'addMultiGroup' ,
                    onClickButton: function () {
                        //var sRow = BT.Grid.getSelectedRow(table, this);
                        //if (sRow == null) return;
                        var lnk1 = addMultiGroupStaffUrl;
                        BT.Dialog.Create('#modalCreateGroup', {
                            title: 'إضافة ',
                            onOpenFn: function () {
                                $("#nodeIdGroup").val(nodeId);
                            },
                            addButtons: [
                                {
                                    //id: 'btnUnEndProGrp',
                                    id: 'btnSaveC',
                                    text: 'حفظ',
                                    'class': 'btn btn-sm btn-success',
                                    click: function () {

                                        $('#modalCreateGroup' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                        $('#modalCreateGroup' + '~.ui-dialog-buttonpane #btnSaveC:first').prop('disabled', true);
                                        $.ajax({
                                            type: "POST",
                                            url: lnk1,
                                            data:
                                                {
                                                    NODE_ID: $("#nodeIdGroup").val(),
                                                    GROUP_NAME: $("#GROUP_NAME").val(),
                                                    RESPONSE_TYPE: $("#RESPONSE_TYPEg").val(),
                                                    StaffId: $("#StaffIdg").val(),
                                              
                                            },
                                            success: function (data) {
                                                if (data.done) {
                                                    BT.showSuccessNotice();
                                                    BT.Grid.reload(table);
                                                    $("#nodeIdGroup").val(""),
                                                    $("#GROUP_NAME").val(""),
                                                    $("#RESPONSE_TYPEg").val(""),
                                                    //$("#StaffIdg").data('kendoMultiSelect').value="",
                                                    BT.Dialog.hide('#modalCreateGroup');
                                                } else {
                                                    BT.showErrorNotice(data.msg);
                                                    $('#modalCreateGroup' + '~.ui-dialog-buttonpane #btnSaveC:first').prop('disabled', false);
                                                    $(".fa-spinner").css("display", "none");
                                                }
                                            }
                                        });

                                    }
                                }
                            ]
                        });
                    }
                });

                BT.Grid.addButton(table, {
                    title: 'تعديل ',
                    buttonicon: 'fa fa-pencil blue',
                    id: 'editGroup' ,
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                        var lnk2 = editMultiGroupStaffUrl;
                        lnk2 = lnk2.replace("__id__", sRow.ID);

                        BT.Dialog.Create('#modalEditGroup', {
                            title: 'تعديل ',
                            width: "max",
                            onOpenFn: function () {
                                $("#nodeIdGroup").val(nodeId);

                                $.ajax({
                                    type: "GET",
                                    url: lnk2,
                                    success: function (data) {
                                        $("#modalEditGroup").html(data);

                                        BT.Ajax.GET(staffGroupUrl,
                      { id: sRow.ID },
                      function (d) {
                          var mTo = [];

                          $.each(d.data, function (i, v) {
                              mTo.push(v.StaffId);
                          });

                          $('#StaffIdgE').data('kendoMultiSelect').value(mTo);
                      },
                      false,
                      function () {
                      });
                                   }
                                });


                            },
                            addButtons: [
                                {
                                    //id: 'btnUnEndProGrp',
                                    id: 'btnSave',
                                    text: 'حفظ',
                                    'class': 'btn btn-sm btn-success',
                                    click: function () {

                                        $('#modalEditGroup' + '~.ui-dialog-buttonpane').append('<h3><i class="ace-icon fa fa-spinner fa-spin orange bigger-125"></i></h3>');
                                        $('#modalEditGroup' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', true);
                                        $.ajax({
                                            type: "POST",
                                            url: lnk2,
                                            data: {
                                                ID: $("#IdGroup").val(),
                                                NODE_ID: $("#nodeIdGroup").val(),
                                                GROUP_NAME: $("#GROUP_NAMEE").val(),
                                                RESPONSE_TYPE: $("#RESPONSE_TYPEg1").val(),
                                                StaffId: $("#StaffIdgE").val(),
                                            },
                                            success: function (data) {
                                                if (data.done) {
                                                    BT.showSuccessNotice();
                                                    BT.Grid.reload(table);
                                                    BT.Dialog.hide('#modalEditGroup');
                                                } else {
                                                    BT.showErrorNotice(data.msg);
                                                    $('#modalEditGroup' + '~.ui-dialog-buttonpane #btnSave:first').prop('disabled', false);
                                                    $(".fa-spinner").css("display", "none");
                                                }
                                            }
                                        });

                                    }
                                }
                            ]
                        });
                    }
                });
                BT.Grid.addButton(table, {
                    title: ' حذف',
                    buttonicon: 'fa fa-trash-o red',
                    id: 'deleteGroupBtn',
                    onClickButton: function () {
                        var sRow = BT.Grid.getSelectedRow(table, this);
                        if (sRow == null) return;
                      
                                BT.Dialog.confirm({
                                    id: 'confirmDel',
                                    message: 'سيتم حذف السطر المختار هل انت متاكد؟',
                                    post: {
                                        url: deleteGroupUrl,
                                        data: {
                                            id: sRow.ID,
                                        },
                                        onSuccessFn: function (data) {
                                            $(table).trigger('reloadGrid');
                                        }
                                    }
                                });
                          
                            }});

                   


              

            };

            var init = function (pGetServicetPendingUrl, pAddMultiGroupStaffUrl, pEditMultiGroupStaffUrl, pStaffGroupUrl,pDeleteGroupUrl, pId) {
                if (
                    BT.isNullOrEmpty(pGetServicetPendingUrl)
                   || BT.isNullOrEmpty(pAddMultiGroupStaffUrl)
                   || BT.isNullOrEmpty(pEditMultiGroupStaffUrl)
                   || BT.isNullOrEmpty(pStaffGroupUrl)
                   || BT.isNullOrEmpty(pDeleteGroupUrl)


                ) {
                    BT.showErrorNotice('Em.ServicetUnderFlow.init: missing params');
                    return;
                }

                getServicetPendingUrl = pGetServicetPendingUrl;
                addMultiGroupStaffUrl = pAddMultiGroupStaffUrl;
                editMultiGroupStaffUrl = pEditMultiGroupStaffUrl;
                staffGroupUrl = pStaffGroupUrl;
                deleteGroupUrl = pDeleteGroupUrl;
                nodeId = pId;
                initServiceGrid();
            };

            return {
                init: init
            };
        })(),
},

scan = {

    displayImagesOnPage: function (successful, mesg, response) {
        if (!successful) { // On error
            console.error('Failed: ' + mesg);
            return;
        }
        if (successful && mesg != null && mesg.toLowerCase().indexOf('user cancel') >= 0) { // User cancelled.
            console.info('User cancelled');
            return;
        }
        var scannedImages = scanner.getScannedImages(response, true, false); // returns an array of ScannedImage

        var scannedImage = scannedImages[0];
        $("#img").attr('src', scannedImage.src);
        processScannedImage(scannedImage);

    },


    processScannedImage: function (scannedImage) {
        var imagesScanned = [];
        var blob = dataURItoBlob(scannedImage.src);
        imagesScanned.push(scannedImage);
        var fileh = "fileH";
        $("#" + fileh).val(blob);
        $("#" + fileh).val(scannedImage.src);
        $("#img").attr('src', scannedImage.src);

    },
    dataURItoBlob: function (dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], { type: mimeString });
    },
    scanAsPdf: function () {
        alert("PS")
        scanner.scan(displayImagesOnPage,
        {
            "output_settings": [
                {
                    "type": "return-base64",
                    "format": "pdf"
                }
            ]
        });
    },

}

function openWindowWithPost(url, data) {
    var form = document.createElement("form");
    form.target = "_blank";
    form.method = "POST";
    form.action = url;
    form.style.display = "none";

    for (var key in data) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}


function scanFnc() {
    alert("aaaa");
    scan.scanAsPdf()
}