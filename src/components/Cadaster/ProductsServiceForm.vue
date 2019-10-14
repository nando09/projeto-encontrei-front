<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">

          <h4 class="header-title mb-3">Novo Produto</h4>

          <div class="row">
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
                      <div class="col-10">
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
                        <input type="email" class="form-control" id="inputEmail4">
                      </div>
                      <label for="example-textarea" class="col-2 col-form-label"></label>
                      <div class="col-12">
                        <p class="small">(OPCIONAL) - Se não informado o e-mail que irá aparecer será o do seu cadastro. (julio@jduart.com.br)</p>
                      </div>
                    </div>

                    <div class="form-group row mb-3">
                      <label for="inputState" class="col-2 col-form-label">Categoria</label>
                      <div class="col-12">
                        <select class="form-control">
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
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="checkmeout">
                        <label class="custom-control-label mr-3" for="checkmeout">Confirmar dados.</label>
                      </div>
                      <button type="submit" class="btn btn-info">Cadastrar</button>
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
  </div>
</template>



<script>
    export default {
        name: 'ProductsServiceForm',
        data () {
            return {

            }
        },
        components:{
        }
    }
</script>

<style>

</style>
