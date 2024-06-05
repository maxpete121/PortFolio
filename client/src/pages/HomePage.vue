

<template>
  <section class="container-fluid">
    <div class="row justify-content-center info-container">
      <div class="col-lg-7 col-11 p-4 d-flex justify-content-center justify-content-lg-evenly">
        <div class="d-flex justify-content-lg-evenly justify-content-center top-container">
          <div class="d-flex flex-column align-items-center me-lg-4 text-center">
            <div class="d-inline-block title-box ps-2 pe-2">
              <h2 class="fst-italic main-font">Maxwell Petersen</h2>
            </div>
            <div>
              <img class="image mt-3" src="../assets/img/unnamed.jpg" alt="">
            </div>
          </div>
          <div class="ms-lg-4 mt-3 text-center about-parent">
            <h3 class="fst-italic title-font">Software Engineer</h3>
            <div class="d-flex p-1 justify-content-center mt-4">
              <button class="contact-btn">Contact Me</button>
              <button class="project-btn">Projects <i class="mdi mdi-arrow-top-right-thick"></i></button>
            </div>
            <div class="p-1 mt-4">
              <h4 class="title-font ps-1 pe-1">Skills</h4>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">Javascript</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">HTML</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">CSS</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">C#</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">MYSQL</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">Web APIs</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">Figma</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">Bootstrap</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">.NET Core</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">MVC</h6>
              </div>
              <div class="skill-box d-inline-block m-1">
                <h6 class="fst-italic">VUE</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center pt-4 mb-4">
      <div class="col-12 col-lg-7">
        <div class="d-lg-flex justify-content-center">
          <div class="d-flex flex-column me-lg-4">
            <div class="text-center">
              <h3 class="title d-inline-block title-font mt-3">My Projects</h3>
            </div>
            <div class="mt-2 d-flex flex-column align-items-center">
              <div class="d-flex justify-content-center">
                <button @click="changeProjectInfo(0)" class="filter-btn">In Development</button>
                <button @click="changeProjectInfo(1)" class="filter-btn">KeeprCo</button>
                <button @click="changeProjectInfo(2)" class="filter-btn">All Spice</button>
              </div>
              <div class="project-info ps-2 pe-2 pt-3">
                <div class="text-center">
                  <h4 class="fst-italic mt-2 mb-2">{{ projectData.name }}</h4>
                </div>
                <div class="language-one d-flex align-items-baseline justify-content-center pt-3 pb-2">
                  <h5>Languages:</h5>
                  <h6 class="ms-3">{{ projectData.languages }}</h6>
                </div>
                <div class="language-one pt-3 pb-2">
                  <h5 class="fst-italic text-center">Info:</h5>
                  <div class="d-flex justify-content-center">
                    <h6>{{ projectData.info }}</h6>
                  </div>
                </div>
                <div class="language-one mt-2 justify-content-center text-center">
                  <a :href="projectData.link" target="_blank">Explore</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-4 info-container pt-4">
      <div class="col-lg-3 col-11 text-center me-lg-4 order-1 order-lg-0 text-dark">
        <h3 class="title-font d-inline-block">Education</h3>
        <h5>Boise CodeWorks</h5>
      </div>
      <div class="col-lg-4 ms-lg-4 col-11 order-0 order-lg-1">
        <img class="graduate-image" src="../assets/img/codeworksGraduate.jpg" alt="">
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import { AppState } from '../AppState';
const theme = ref(loadState('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  changeProjectInfo()
})

const projectData = ref()
projectData.value = {}

const goalsData = ref()
goalsData.value = {}

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}

async function changeProjectInfo(index){
  if(index == null){
    index = 0
  }
  let data = AppState.projectInfo[index]
  projectData.value = data
}

async function changeGoalsInfo(index){
  if(index == null){
    index = 0
  }
  let data = AppState.goals[index]
  goalsData.value = data
}

</script>
<style scoped lang="scss">

@media screen and (min-width: 576px) {
  .about-parent{
    width: 300px;
  }

  .project-info{
  background-color: #c4c1bf3a;
  max-width: 400px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.24);
  border-left: solid 2px rgb(49, 215, 237);
  border-top: solid 2px rgb(49, 215, 237);
}
}

@media screen and (max-width: 576px) {
  .about-parent{
    width: 260px;
  }

  .top-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-info{
  background-color: #c4c1bf3a;
  max-width: 357px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.24);
  border-left: solid 2px rgb(49, 215, 237);
  border-top: solid 2px rgb(49, 215, 237);
}
}

.title-font{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: black;
  border-bottom: solid 1px rgb(49, 215, 237);
}
.main-font{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.info-container{
  background-color: #4f4a453a;
  color: white;
  
}

.graduate-image{
  max-width: 600px;
  max-height: 500px;
}

.image{
  max-height: 400px;
  max-width: 300px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.377);
}

.title-career{
  border-bottom: solid 1px #ED7D31;
  margin-right: 53px;
}

.title-box{
  background-color: rgba(255, 255, 255, 0.808);
  color: black;
  outline: solid 2px rgb(49, 215, 237);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.377);
}

.about-child{
  outline: solid 1px #ED7D31;
  border-radius: 10px;
  background-color: rgb(233, 233, 233);
  color: black;
  max-width: 450px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.377);
}

.language-one{
  border-top: solid 1px rgb(49, 215, 237);
}

.contact-btn{
  all: unset;
  background-color: rgb(49, 215, 237);
  outline: solid 2px rgb(46, 199, 219);
  color: black;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
}
.contact-btn:hover{
  all: unset;
  background-color: rgb(51, 227, 250);
  outline: solid 2px rgb(46, 199, 219);
  color: black;
  cursor: pointer;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
}
.project-btn{
  all: unset;
  background-color: rgb(255, 255, 255);
  outline: solid 2px white;
  color: black;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
}
.project-btn:hover{
  all: unset;
  background-color: rgb(255, 255, 255);
  outline: solid 2px rgb(0, 0, 0);
  cursor: pointer;
  color: black;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
}

.filter-btn{
  all: unset;
  background-color: rgb(255, 255, 255);
  outline: solid 2px rgb(46, 199, 219);
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
}

.filter-btn:hover{
  all: unset;
  background-color: rgb(230, 230, 230);
  outline: solid 2px rgb(46, 199, 219);
  cursor: pointer;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
}

.filter-btn:focus{
  all: unset;
  border-top: solid 2px rgb(46, 199, 219);
  border-right: solid 2px rgb(46, 199, 219);
  border-left: solid 2px rgb(46, 199, 219);
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #c4c1bf3a;
}

.skill-box{
  color: black;
  background-color: rgb(51, 227, 250);
  border-radius: 10px;
  max-width: 100px;
  height: 25px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 5px;
}

.career-button-section{
  width: 219px;
}
</style>
