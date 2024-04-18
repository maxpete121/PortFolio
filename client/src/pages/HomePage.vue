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
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-column align-items-center mt-2 me-2">
                <h4 class="title-career">My Career</h4>
                <div class="d-flex align-items-center justify-content-between career-button-section">
                  <h6>-Software Engineer⭐</h6>
                  <button class="button-style">Info</button>
                </div>
                <h4 class="mt-2 title-career">Former Careers</h4>
                <div class="d-flex align-items-center justify-content-between career-button-section">
                  <div class="w-75 text-center">
                    <h6>-Technical Manager✅</h6>
                  </div>
                  <button class="button-style">Info</button>
                </div>
                <div class="d-flex align-items-center justify-content-between career-button-section mt-2">
                  <div class="w-75 text-center">
                    <h6>-Event Caterer✅</h6>
                  </div>
                  <button class="button-style">Info</button>
                </div>
                <div class="d-flex align-items-center justify-content-between career-button-section mt-2">
                  <div class="w-75 text-center">
                    <h6>-Chef✅</h6>
                  </div>
                  <button class="button-style">Info</button>
                </div>
              </div>
              <div class="skills-info me-4">
                <h4 class="title">My Skills</h4>
                <div class="d-flex">
                  <div class="d-flex flex-column align-items-center">
                    <h5 class="fst-italic">Languages</h5>
                    <div class="skill-box">
                      <h6>Javascript</h6>
                    </div>
                    <div class="skill-box">
                      <h6>HTML</h6>
                    </div>
                    <div class="skill-box">
                      <h6>CSS</h6>
                    </div>
                    <div class="skill-box">
                      <h6>C Sharp</h6>
                    </div>
                    <div class="skill-box">
                      <h6>MYSQL</h6>
                    </div>
                  </div>
                  <div class="d-flex flex-column align-items-center ms-3">
                    <h5 class="fst-italic">Other</h5>
                    <div class="skill-box">
                      <h6>Figma</h6>
                    </div>
                    <div class="skill-box">
                      <h6>MongoDB</h6>
                    </div>
                    <div class="skill-box">
                      <h6>Web APIs</h6>
                    </div>
                    <div class="skill-box">
                      <h6>AWS</h6>
                    </div>
                    <div class="skill-box">
                      <h6>.NET CORE</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hobbies-view">
                <h3 class="title">Hobbies</h3>
                <div class="d-flex">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <h3>My Projects</h3>
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

.title-career{
  border-bottom: solid 1px #ED7D31;
  margin-right: 53px;
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

.button-style:hover{
  all: unset;
  outline: solid 1px #ED7D31;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 5px;
  transform: scale(1.05);
  background-color: #635d56;
}

.skill-box{
  outline: solid 1px black;
  color: black;
  background-color: #ED7D31;
  border-radius: 10px;
  width: 100px;
  height: 20px;
  margin-top: 4px;
}

.career-button-section{
  width: 219px;
}
</style>
