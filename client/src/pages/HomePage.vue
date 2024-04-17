<script setup>

</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 info-container p-2">
        <div class="d-flex justify-content-between">
          <img class="image ms-4" src="../assets/img/unnamed.jpg" alt="">
          <div class="text-center w-75">
            <div class="d-flex justify-content-center ">
              <h2 class="fst-italic title">Maxwell Petersen</h2>
            </div>
            <div class="d-flex">
              <div class="d-flex flex-column align-items-center mt-2 me-2">
                <h4 class="title">Career</h4>
                <div class="d-flex align-items-center career-button-section">
                  <h6>-Software Engineer⭐</h6>
                  <button class="button-style ms-1">Info</button>
                </div>
                <h4 class="mt-2 title">Former Careers</h4>
                <h6>-Technical Manager✅</h6>
                <h6>-Chef✅</h6>
                <h6>-Event Caterer✅</h6>
              </div>
              <div class="career-info"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.info-container{
  background-color: #4F4A45;
  color: white;
  outline: solid 2px #ED7D31;
}
.image{
  max-height: 280px;
  max-width: 200px;
}

.title{
  border-bottom: solid 1px #ED7D31;
}

.button-style{
  all: unset;
  outline: solid 1px #ED7D31;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 5px;
}

.career-info{

}

.career-button-section{
  
}
</style>
