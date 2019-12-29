<template>
  <div class="wrapper">
    <div v-if="loadingPage" class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
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
                <div class="card-body" v-on:keyup.enter="cadastrarProduto()">


                  <h4 class="header-title mb-3">Novo Produto</h4>

                  <label>Excel</label>
                  <div class="row">
                    <div class="col-md-5">
                      <div class="input-group">
                        <div class="custom-file">
                          <input
                            @change="uploadExcel"
                            type="file"
                            ref="arquivo"
                            accept="excelFileArq"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <button class="btn btn-primary" @click="cadastrarProdutoPorExcel()">Subir Excel</button>
                    </div>
                  </div>
                  <br>

                  <hr>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Nome do Produto:</label>
                        <input v-model="nome" type="text" class="form-control" required/>
                      </div>
                    </div>

                    <!--                    <div class="col-md-6">
                          <div class="form-group">
                          <label>Valor: (R$)</label>
                          <input v-model="preco" type="text" class="form-control" required v-mask-decimal.br="2"/>
                          </div>

                          </div> -->

                    <div class="col-md-6">
                      <label>Imagem</label>
                      <div class="input-group">
                        <div class="custom-file">
                          <input
                            @change="uploadImage"
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile04"
                            ref="files"
                            accept="image"
                          />
                          <label class="custom-file-label" for="inputGroupFile04">Selecionar Arquivo</label>
                        </div>
                      </div>
                      <br />
                      <p class="text-center">
                        <img
                          id="photo"
                          :src="photo||'https://image.service.encontrei.online/products/produto-sem-imagem.png'"
                          width="132"
                        />
                      </p>

                    </div>

                    <div class="row col-md-12 justify-content-center">
                      <button class="btn btn-primary" @click="cadastrarProduto()">Cadastrar</button>
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
  import axios from "axios";

  export default {
    name: 'Products',
    components:{
      SidebarClient,
      TopMenu,
      Footer,
      CardBody,
      PageTitle
    },
    data(){
      return {
        user: JSON.parse(sessionStorage.getItem("usuario")),
        nome: '',
        preco: '',
        photo: "",
        excel: '',
        loadingPage: false,
      };
    },
    created() {
      let usuarioAux = sessionStorage.getItem('usuario')
      if (usuarioAux) {
        this.usuario = JSON.parse(usuarioAux)
      } else {
        this.$router.push('/login');
      }
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
    },

    methods: {
      cadastrarProduto(){
        this.loadingPage = true;
          console.log(this.image);

        let formData = new FormData();
        formData.append("nome", this.nome);
        if (!this.photo == "") {
          for (var i = 0; i < this.image.length; i++) {
            formData.append('image[]', this.image[i]);
            console.log(this.image[i]);
          }
        }

        axios.post("https://service.encontrei.online/api/produto", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.user.token
          }
        })
          .then(response => {
            if (response.data.id){
              this.toast(response.data.nome + ' cadastrado com sucesso!', '#73b730');
            }else{
              this.toast('Preecher campo nome do produto!', '#ec293c');
            }

            this.nome   =   "";
            this.preco  =   "";
            this.image  =   "";
            this.photo  =   "";
            this.loadingPage = false;
          })
          .catch(e => {
            // console.log(e);
            alert("servidor fora de área");
          });
      },

      cadastrarProdutoPorExcel(){
        this.loadingPage = true;

        if (!this.excel == "") {
          let formData = new FormData();
          for (var i = 0; i < this.excelFileArq.length; i++) {
            formData.append('file[]', this.excelFileArq[i]);
            console.log(this.excelFileArq[i]);
          }

          console.log(formData);
          console.log(this.excelFileArq);

          // this.loadingPage = false;
          axios.post("https://service.encontrei.online/api/excel_product", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + this.user.token
            }
          })
            .then(response => {
              this.excel  =   "";
              this.nome   =   "";
              this.preco  =   "";
              this.excelFileArq  =   "";
              this.photo  =   "";
              this.loadingPage = false;
            })
            .catch(e => {
              // console.log(e);
              alert("servidor fora de área");
            });
        }else{
          console.log("Teste!");
        }

      },

      uploadImage(event) {
        let input = event.target;
        if (input.files && input.files[0]) {
          let reader = new FileReader();
          reader.onload = e => {
            this.photo = e.target.result;
            console.log(e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
          console.log(input.files);
        }

        this.image = this.$refs.files.files;
      },

      uploadExcel(event) {
        let input = event.target;
        if (input.arquivo && input.arquivo[0]) {
          let reader = new FileReader();
          reader.onload = e => {
            this.excel = e.target.result;
            console.log(e.target.result);
          };
          reader.readAsDataURL(input.arquivo[0]);
          console.log(input.arquivo);
        }

        this.excelFileArq = this.$refs.arquivo.files;
        this.excel = 123;
      },

      toast(nome, cor){
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          background: cor,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        });

        Toast.fire({
          icon: 'success',
          title: nome
        });
      },
    }
  };
</script>

<style>
  .swal2-popup.swal2-toast .swal2-title {
    color: white;
  }

  .swal2-popup.swal2-toast.swal2-show {
    /*background: #73b730;*/
  }

  .lds-facebook {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 9999;
    background: rgba(40, 167, 69, 0.1);
    left: 0;
  }

  .lds-facebook div {
    display: inline-block;
    position: fixed;
    left: 8px;
    width: 16px;
    background-color: rgba(0, 128, 0, 1);
    -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    text-align: center;
    margin: 0 auto;
    margin-top: 40vh;
  }

  .lds-facebook div:nth-child(1) {
    right: 8px;
    animation-delay: -0.24s;
  }

  .lds-facebook div:nth-child(2) {
    right: 50px;
    animation-delay: -0.12s;
  }

  .lds-facebook div:nth-child(3) {
    right: 95px;
    animation-delay: 0;
  }

  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
</style>
