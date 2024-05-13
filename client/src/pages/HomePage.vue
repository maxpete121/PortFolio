

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 info-container p-2">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column align-items-center">
            <div class="d-inline-block title-box ps-2 pe-2">
              <h2 class="fst-italic">Maxwell Petersen</h2>
            </div>
            <img class="image mt-3" src="../assets/img/unnamed.jpg" alt="">
          </div>
          <div class="d-flex flex-column">
            <h3 class="title">My Projects</h3>
            <div>
              <div class="d-flex">
                <button @click="changeProjectInfo(0)" class="filter-btn">PcPals</button>
                <button @click="changeProjectInfo(1)" class="filter-btn">KeeprCo</button>
                <button @click="changeProjectInfo(2)" class="filter-btn">All Spice</button>
              </div>
              <div class="project-info pt-2 ps-1 pe-1">
                <h4>{{ projectData.name }}</h4>
              </div>
            </div>
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
}

.project-info{
  border-left: solid 1px #ED7D31;
  border-right: solid 1px #ED7D31;
  border-bottom: solid 1px #ED7D31;
  background-color: #635d56;
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
