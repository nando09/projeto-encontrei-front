<template>
  <div class="wrapper">
    <SidebarClient title="Área do Usuário"/>
    <div class="content-page">

      <div class="content">
        <TopMenu/>
        <div class="container-fluid">

          <link href="https://cdn-na.infragistics.com/igniteui/2016.2/latest/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
          <link href="https://cdn-na.infragistics.com/igniteui/2016.2/latest/css/structure/infragistics.css" rel="stylesheet" />

          <!-- start page title -->
          <PageTitle home="Encontrei" category="Parceiros" sub-category="Produtos" titulo="Produtos"/>
          <!-- end page title -->

          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">

                  <h4 class="header-title mb-3">Novo Produto</h4>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Nome do Produto:</label>
                        <input type="text" class="form-control" required/>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Valor:</label>
                        <input type="text" class="form-control" required/>
                      </div>

                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="custom-file-label">Foto</label>
                        <input type="file" class="custom-file-input" required/>
                      </div>
                    </div>

                    <div class="row col-md-12 justify-content-center">
                      <button class="btn btn-primary">Cadastrar</button>
                    </div>

                  </div>
                  <!-- end row-->
                </div> <!-- end card-body-->
              </div> <!-- end card-->
            </div> <!-- end col -->
          </div>
        </div> <!-- container -->
      </div>

      <Footer/>

    </div>
  </div>
</template>
<script>

    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'
    import SidebarClient from "@/components/Client/SidebarClient";
    import PageTitle from '@/components/PageTitle';
    import CardBody from '@/components/CardBody';

    export default {
        name: 'Products',
        components:{
            SidebarClient,
            TopMenu,
            Footer,
            CardBody,
            PageTitle
        },

        created() {
            let usuarioAux = sessionStorage.getItem('usuario')
            if (usuarioAux) {
                this.usuario = JSON.parse(usuarioAux)
            } else {
                this.$router.push('/login');
            }

            let ckeditor = document.createElement('script');    ckeditor.setAttribute('src',"//ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js");
            document.head.appendChild(ckeditor);
            let infragisticscore = document.createElement('script');    infragisticscore.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/infragistics.core.js");
            document.head.appendChild(infragisticscore);
            let infragisticscorelob = document.createElement('script');    infragisticscorelob.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/infragistics.lob.js");
            document.head.appendChild(infragisticscorelob);
            let infragisticsextcore = document.createElement('script');    infragisticsextcore.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.ext_core.js");
            document.head.appendChild(infragisticsextcore);
            let infragisticsextcollections = document.createElement('script');    infragisticsextcollections.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.ext_collections.js");
            document.head.appendChild(infragisticsextcollections);
            let infragisticsexttext = document.createElement('script');    infragisticsexttext.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.ext_text.js");
            document.head.appendChild(infragisticsexttext);
            let infragisticsextio = document.createElement('script');    infragisticsextio.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.ext_io.js");
            document.head.appendChild(infragisticsextio);
            let infragisticsextui = document.createElement('script');    infragisticsextui.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.ext_ui.js");
            document.head.appendChild(infragisticsextui);
            let infragisticsdocumentscore = document.createElement('script');    infragisticsdocumentscore.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.documents.core_core.js");
            document.head.appendChild(infragisticsdocumentscore);
            let infragisticsextcollectionsextended = document.createElement('script');    infragisticsextcollectionsextended.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.ext_text.js");
            document.head.appendChild(infragisticsextcollectionsextended);
            let infragisticsexcelcore = document.createElement('script');    infragisticsexcelcore.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.excel_core.js");
            document.head.appendChild(infragisticsexcelcore);
            let infragisticsextthreading = document.createElement('script');    infragisticsextthreading.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.ext_threading.js");
            document.head.appendChild(infragisticsextthreading);
            let infragisticsextweb = document.createElement('script');    infragisticsextweb.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.ext_web.js\"");
            document.head.appendChild(infragisticsextweb);
            let infragisticsxml = document.createElement('script');    infragisticsxml.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.xml.js");
            document.head.appendChild(infragisticsxml);
            let infragisticsdocumentscoreopenxml = document.createElement('script');    infragisticsdocumentscoreopenxml.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.documents.core_openxml.js");
            document.head.appendChild(infragisticsdocumentscoreopenxml);
            let infragisticsexcelserializationopenxml = document.createElement('script');    infragisticsexcelserializationopenxml.setAttribute('src',"//cdn-na.infragistics.com/igniteui/2019.1/latest/js/modules/infragistics.excel_serialization_openxml.js");
            document.head.appendChild(infragisticsexcelserializationopenxml);
            let jquery = document.createElement('script');    jquery.setAttribute('src',"//code.jquery.com/jquery-1.11.3.min.js");
            document.head.appendChild(jquery);
            let jquerymin = document.createElement('script');    jquerymin.setAttribute('src',"//code.jquery.com/ui/1.11.1/jquery-ui.min.js");
            document.head.appendChild(jquerymin);
        },


        mounted() {
            $(function () {
                $("#input").on("change", function () {
                    var excelFile,
                        fileReader = new FileReader();

                    $("#result").hide();

                    fileReader.onload = function (e) {
                        var buffer = new Uint8Array(fileReader.result);

                        $.ig.excel.Workbook.load(buffer, function (workbook) {
                            var column, row, newRow, cellValue, columnIndex, i,
                                worksheet = workbook.worksheets(0),
                                columnsNumber = 0,
                                gridColumns = [],
                                data = [],
                                worksheetRowsCount;

                            // Both the columns and rows in the worksheet are lazily created and because of this most of the time worksheet.columns().count() will return 0
                            // So to get the number of columns we read the values in the first row and count. When value is null we stop counting columns:
                            while (worksheet.rows(0).getCellValue(columnsNumber)) {
                                columnsNumber++;
                            }

                            // Iterating through cells in first row and use the cell text as key and header text for the grid columns
                            for (columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
                                column = worksheet.rows(0).getCellText(columnIndex);
                                gridColumns.push({ headerText: column, key: column });
                            }

                            // We start iterating from 1, because we already read the first row to build the gridColumns array above
                            // We use each cell value and add it to json array, which will be used as dataSource for the grid
                            for (i = 1, worksheetRowsCount = worksheet.rows().count() ; i < worksheetRowsCount; i++) {
                                newRow = {};
                                row = worksheet.rows(i);

                                for (columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
                                    cellValue = row.getCellText(columnIndex);
                                    newRow[gridColumns[columnIndex].key] = cellValue;
                                }

                                data.push(newRow);
                            }

                            // we can also skip passing the gridColumns use autoGenerateColumns = true, or modify the gridColumns array
                            createGrid(data, gridColumns);
                        }, function (error) {
                            $("#result").text("The excel file is corrupted.");
                            $("#result").show(1000);
                        });
                    }

                    if (this.files.length > 0) {
                        excelFile = this.files[0];
                        if (excelFile.type === "application/vnd.ms-excel" || excelFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || (excelFile.type === "" && (excelFile.name.endsWith("xls") || excelFile.name.endsWith("xlsx")))) {
                            fileReader.readAsArrayBuffer(excelFile);
                        } else {
                            $("#result").text("The format of the file you have selected is not supported. Please select a valid Excel file ('.xls, *.xlsx').");
                            $("#result").show(1000);
                        }
                    }

                })
            });

            function createGrid(data, gridColumns) {
                if ($("#grid1").data("igGrid") !== undefined) {
                    $("#grid1").igGrid("destroy");
                }

                $("#grid1").igGrid({
                    columns: gridColumns,
                    autoGenerateColumns: true,
                    dataSource: data,
                    width: "100%"
                });
            }
        }
    }
</script>

<style>

</style>
