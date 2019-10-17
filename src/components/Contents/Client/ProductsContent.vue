<template>
  <!-- Start Content-->
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
            <div class="col-sm-12">
              <div>
                <ul>
                  <li>Clique no botão para importar uma planilha.</li>
                </ul>
                <input type="file" id="input" accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
                <div id="result"></div>
                <table id="grid1"></table>
              </div>
            </div>

              <div class="col-sm-12">
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade active show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <form class="form-horizontal">
                      <div class="form-group row mb-3">
                        <label for="inputEmail3" class="col-2 col-form-label">Nome do Produto:</label>
                        <div class="col-12">
                          <input type="email" class="form-control" id="inputEmail3">
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="example-textarea" class="col-2 col-form-label">Descrição:</label>
                        <div class="col-12">
                          <textarea class="form-control" id="example-textarea" rows="5"></textarea>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="inputState" class="col-2 col-form-label">Formato</label>
                        <div class="col-12">
                          <select id="inputState" class="form-control">
                            <option>--Selecione--</option>
                            <option>Aplicativos p/ Celular</option>
                            <option>Áudios, Músicas, Ringtones</option>
                            <option>Ebooks, Documentos, Texto</option>
                            <option>Evento</option>
                            <option>Imagens, Ícones, Fotos</option>
                            <option>Mentoria/Mastermind</option>
                            <option>Planilha de Excel</option>
                            <option>Produto Físico</option>
                            <option>Screencasts, Filmes</option>
                            <option>Serviços</option>
                            <option>Sites Membros (Cursos, Video Aulas)/ Serviço de Assinatura</option>
                            <option>Software</option>
                            <option>Templates, Códigos Fonte</option>
                          </select>
                        </div>

                        <label for="example-textarea" class="col-2 col-form-label"></label>
                        <div class="col-12">
                          <p>Por favor, informar o formato do produto.</p>
                          <p>AVISO: É expressamente proíbido a comercialização de DROPSHIPPING. Veja nosso termos de uso</p>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="example-textarea" class="col-2 col-form-label">Tipo de Cobrança:</label>
                        <div class="custom-control custom-radio col-5">
                          <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                          <label class="custom-control-label" for="customRadio1">Única</label>
                        </div>
                        <div class="custom-control custom-radio col-5">
                          <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                          <label class="custom-control-label" for="customRadio2">Recorrente</label>
                        </div>
                        <label for="example-textarea" class="col-2 col-form-label"></label>
                        <div class="col-12">
                          <p class="small">IMPORTANTE - Após salvar o produto o tipo de cobrança não poderá mais ser alterado.</p>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="example-textarea" class="col-2 col-form-label">Tipo de precificação:</label>
                        <div class="col-12">
                          <select class="custom-select mt-3">
                            <option value="1">Preço único</option>
                            <option value="2">Planos (Tenho vários planos com preços diferentes ex.: Básico, Intermediário e Avançado - Mensal, Anual, etc.)</option>
                          </select>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <div class="col-2 float-left">
                          <label>Preço: <p class="small">(Primeiro Plano)</p></label>
                        </div>
                        <div class="col-8 float-left">
                          <input data-toggle="touchspin" type="text" data-bts-prefix="R$">
                        </div>
                        <div class="custom-control custom-checkbox col-2 float-left">
                          <input type="checkbox" class="custom-control-input" id="customCheck1">
                          <label class="custom-control-label" for="customCheck1">Grátis</label>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="example-textarea" class="col-2 col-form-label">Disponível para Venda:</label>
                        <div class="custom-control custom-radio col-5">
                          <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                          <label class="custom-control-label" for="customRadio4">Sim</label>
                        </div>
                        <div class="custom-control custom-radio col-5">
                          <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input">
                          <label class="custom-control-label" for="customRadio5">Não</label>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label class="col-2" for="example-number">Quantidade Máx.:</label>
                        <input class="form-control col-2" id="example-number" type="number" name="number">
                        <div class="col-8">
                          <p class="small">Quantidade máxima que o cliente pode comprar em uma única compra.</p>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="inputState" class="col-2 col-form-label">Tempo de Garantia:</label>
                        <div class="col-2">
                          <select id="" class="form-control">
                            <option>30</option>
                            <option>21</option>
                            <option>15</option>
                            <option>7</option>
                          </select>
                        </div>
                        <p class="col-2">Dias</p>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="inputEmail3" class="col-2 col-form-label">E-mail suporte:</label>
                        <div class="col-12">
                          <input type="email" class="form-control" id="inputEmail3">
                        </div>
                        <label for="example-textarea" class="col-2 col-form-label"></label>
                        <div class="col-12">
                          <p class="small">(OPCIONAL) - Se não informado o e-mail que irá aparecer será o do seu cadastro. (julio@jduart.com.br)</p>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="inputState" class="col-2 col-form-label">Categoria</label>
                        <div class="col-12">
                          <select id="inputState" class="form-control">
                            <option>--Selecione--</option>
                            <option>Administração e Negócios</option>
                            <option>Animais de Estimação</option>
                            <option>Arquitetura e Engenharia</option>
                            <option>Artes e Música</option>
                            <option>Auto-ajuda e Desenvolvimento Pessoal</option>
                            <option>Automóveis</option>
                            <option>Blogs e Redes Sociais</option>
                            <option>Casa e Jardinagem</option>
                            <option>Culinária, Gastronomia, Receitas</option>
                            <option>Design e Templates PSD, PPT ou HTML</option>
                            <option>Edição de Áudio, Vídeo ou Imagens</option>
                            <option>Educacional, Cursos Técnicos e Profissionalizantes</option>
                            <option>Eletrodomésticos</option>
                            <option>Eletroportáteis</option>
                            <option>Entretenimento, Lazer e Diversão</option>
                            <option>Esportes e Fitness</option>
                            <option>Filmes e Cinema</option>
                            <option>Geral</option>
                            <option>História em Quadrinhos</option>
                            <option>Idiomas</option>
                            <option>Informática</option>
                            <option>Internet Marketing</option>
                            <option>Investimentos e Finanças</option>
                            <option>Jogos de Cartas, Poker, Loterias</option>
                            <option>Jogos de Computador, Jogos Online</option>
                            <option>Jurídico</option>
                            <option>Literatura e Poesia</option>
                            <option>Marketing de Rede</option>
                            <option>Marketing e Comunicação</option>
                            <option>Meio Ambiente</option>
                            <option>Moda e vestuário</option>
                            <option>Móveis e decoração</option>
                            <option>Música, Bandas e Shows</option>
                            <option>Paquera, Sedução e Relacionamentos</option>
                            <option>Perfumaria</option>
                            <option>Pessoas com deficiência</option>
                            <option>Plugins, Widgets e Extensões</option>
                            <option>Produtividade e Organização Pessoal</option>
                            <option>Produtos infantis</option>
                            <option>Relatórios, Artigos e Pesquisas</option>
                            <option>Religião e Crenças</option>
                            <option>Romances, Dramas, Estórias e Contos</option>
                            <option>RPG e Jogos de Mesa</option>
                            <option>Saúde, Bem-estar e Beleza</option>
                            <option>Scripts</option>
                            <option>Segurança do Trabalho</option>
                            <option>Sexologia e Sexualidade</option>
                            <option>Snippets (Trechos de Vídeo)</option>
                            <option>Turismo</option>
                          </select>
                        </div>
                      </div>

                      <div class="form-group row mb-3">
                        <label for="example-textarea" class="col-2 col-form-label">Página de Venda:</label>
                        <div class="custom-control custom-radio col-5">
                          <input type="radio" id="customRadio6" name="customRadio" class="custom-control-input">
                          <label class="custom-control-label" for="customRadio6">Meu próprio site</label>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12">
                          <div class="card">
                            <div class="card-body">
                              <h4 class="header-title mb-3">Fotos</h4>
                              <div class="row">
                                <div class="col-12">
                                  <label class="btn btn-default">Selecionar arquivo <input type="file" hidden></label>
                                  <button type="button" class="btn btn-icon btn-primary">Processar</button>
                                </div>
                                <p class="small m-0">Para melhor exibição use 200px por 200px</p> <br>
                                <p class="small m-0">Máximo de 8 fotos</p> <br>
                                <p class="small m-0">Tamanho máximo por arquivo: 500kb</p> <br>
                                <p class="small m-0">Tipos de arquivos aceitos: JPG, PNG</p> <br>
                              </div>
                            </div> <!-- end card body-->
                          </div> <!-- end card -->
                        </div><!-- end col-->
                      </div>

                      <div class="row">
                        <div class="col-12">
                          <div class="card">
                            <div class="card-body">
                              <h4 class="header-title mb-3">Produto - Arquivos</h4>
                              <div class="row">
                                <div class="col-12">
                                  <label class="btn btn-default">Selecionar arquivo <input type="file" hidden></label>
                                  <button type="button" class="btn btn-icon btn-primary">Processar</button>
                                </div>
                              </div>
                            </div> <!-- end card body-->
                          </div> <!-- end card -->
                        </div><!-- end col-->
                      </div>
                      <div class="form-group row mb-3">
                        <button type="submit" class="btn btn-info ml-3">Salvar</button>
                      </div>
                    </form>
                  </div>
                </div> <!-- end tab-content-->
              </div> <!-- end col-->
            </div>
            <!-- end row-->
          </div> <!-- end card-body-->
        </div> <!-- end card-->
      </div> <!-- end col -->
  </div> <!-- container -->
</template>

<script>




    import PageTitle from '@/components/PageTitle';
    import CardBody from '@/components/CardBody';

    export default {
        name: 'ProductsContent',
        props: [],
        data () {
            return {

            }
        },

        components:{
            CardBody,
            PageTitle
        },

        created() {
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #sampleContainer ol {
    padding: 0px 0px 0px 15px;
    margin: 0;
  }

  #sampleContainer input {
    margin: 10px 0;
  }
  #result {
    display: none;
    color: red;
  }
</style>
