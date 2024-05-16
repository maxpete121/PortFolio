

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-11 info-container p-2">
        <div class="d-lg-flex justify-content-center">
          <div class="d-flex flex-column align-items-center me-4">
            <div class="d-inline-block title-box ps-2 pe-2">
              <h2 class="fst-italic">Maxwell Petersen</h2>
            </div>
            <img class="image mt-3" src="../assets/img/unnamed.jpg" alt="">
          </div>
          <div class="ms-4 text-center about-parent">
            <h4 class="fst-italic">About me</h4>
            <div class="about-child p-1">
              <h5>To sum me up.</h5>
              <p>Hello! Thank you for taking the time to learn more about me!</p>
            </div>
            <div class="about-child p-1 mt-3">
              <h5>My Hobbies</h5>
              <p>Some of my favorite things to do are to develope video games, play video games, develope new applications, build gaming computers, and going on walks with my wife!</p>
            </div>
          </div>
        </div>
        <div class="d-lg-flex">
          <div class="d-flex flex-column me-lg-4">
            <div class="text-center">
              <h3 class="title d-inline-block">My Projects</h3>
            </div>
            <div class="mt-2 d-flex flex-column align-items-center">
              <div class="d-flex">
                <button @click="changeProjectInfo(0)" class="filter-btn">In Development</button>
                <button @click="changeProjectInfo(1)" class="filter-btn">KeeprCo</button>
                <button @click="changeProjectInfo(2)" class="filter-btn">All Spice</button>
              </div>
              <div class="project-info pt-2 ps-1 pe-1">
                <div class="text-center">
                  <h4 class="fst-italic">{{ projectData.name }}</h4>
                </div>
                <div class="language-one d-flex align-items-baseline justify-content-center pt-2">
                  <h5>Languages:</h5>
                  <h6 class="ms-3">{{ projectData.languages }}</h6>
                </div>
                <div class="language-one mt-2 pt-2">
                  <h5 class="fst-italic text-center">Info:</h5>
                  <div class="d-flex justify-content-center">
                    <h6>{{ projectData.info }}</h6>
                  </div>
                </div>
                <div class="language-one mt-2 justify-content-center">
                  <a :href="projectData.link" target="_blank">Explore</a>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center ms-lg-4">
            <h3 class="title d-inline-block">My Goals</h3>
            <div class="mt-2">
              <button class="filter-btn">Career</button>
              <button class="filter-btn">Personal</button>
            </div>
            <div class="project-info"></div>
          </div>
        </div>
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

</script>
<style scoped lang="scss">
.info-container{
  background-color: #4F4A45;
  color: white;
  outline: solid 2px #ED7D31;
  
}
.image{
  max-height: 400px;
  max-width: 300px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.377);
}

.title{
  border-bottom: solid 1px #ED7D31;
}

.title-career{
  border-bottom: solid 1px #ED7D31;
  margin-right: 53px;
}

.title-box{
  background-color: rgba(255, 255, 255, 0.808);
  color: black;
  outline: solid 2px #ED7D31;
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
  border-top: solid 1px #ED7D31;
}

.project-info{
  outline: solid 1px #ED7D31;
  background-color: #635d56;
  max-width: 400px;
}

.filter-btn{
  all: unset;
  outline: solid 1px #ED7D31;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
}

.filter-btn:hover{
  all: unset;
  outline: solid 1px #ED7D31;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #635d56;
}

.filter-btn:focus{
  all: unset;
  border-top: solid 1px #ED7D31;
  border-right: solid 1px #ED7D31;
  border-left: solid 1px #ED7D31;
  border-bottom: solid 2px white;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
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
