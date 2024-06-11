

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
              <button @click="openModal()" class="contact-btn">Contact Me</button>
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
    <div class="row justify-content-center pt-4 mb-4 pb-4">
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
    <div class="row justify-content-center mt-4 info-container pt-4 pb-4">
      <div class="col-lg-3 col-11 text-center mt-2 me-lg-4 order-1 order-lg-0 text-dark">
        <h3 class="title-font d-inline-block">Education</h3>
        <h5 class="mt-2">Boise CodeWorks</h5>
        <h6 class="mt-2 ms-1">Graduated ✅</h6>
        <h6 class="mt-2">10/2023 - 03/2024</h6>
        <h5 class="mt-4">Highlights</h5>
        <h6 class="mt-2">- Excelled in a fast paced learning environment.</h6>
        <h6 class="mt-2">- Met all assignment deadlines and met all requirements for said assignments.</h6>
        <h6 class="mt-2">- Finished with 0 points taken off my final grade.</h6>
        <h6 class="mt-2">- Completed and launched 2 fullstack applications</h6>
        <h6 class="mt-2">- Completed over 600 hours of work on assigned and non-assigned coding projects.</h6>
      </div>
      <div class="col-lg-4 ms-lg-4 mt-2 text-center col-11 order-0 order-lg-1">
        <img class="graduate-image" src="../assets/img/codeworksGraduate.jpg" alt="">
      </div>
    </div>
    <div class="row mt-3 justify-content-center pt-3 pb-3">
      <div class="col-lg-3 col-11 text-center d-flex flex-column align-items-center">
        <h4>My Social Media</h4>
        <div class="d-flex social-section justify-content-center mt-3">
          <h5>Github</h5>
          <h5>
            <i class="mdi mdi-github ms-2"></i>
          </h5>
          <a class="ms-3" href="https://github.com/maxpete121">Explore</a>
        </div>
        <div class="d-flex social-section justify-content-center mt-3">
          <h5>Facebook</h5>
          <h5>
            <i class="mdi mdi-facebook ms-2"></i>
          </h5>
          <a class="ms-3" href="https://www.facebook.com/max.petersen.7712/">Explore</a>
        </div>
        <div class="d-flex justify-content-center social-section mt-3">
          <h5>Instagram</h5>
          <h5>
            <i class="mdi mdi-instagram ms-2"></i>
          </h5>
          <a class="ms-3" href="https://www.instagram.com/maxxpetersenn/">Explore</a>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-3 pt-4 info-container text-dark pb-3">
      <div class="col-3">
        <img class="img-fluid hobby-image" src="../assets/img/FamilyPic.jpg" alt="">
      </div>
      <div class="col-4 d-flex flex-column align-items-center ps-2 pe-2">
        <h3>About me</h3>
        <h6>I am a hard-working and driven individual who is always excited to learn new things! I'm passionate about the work I take on and about the people around me.
          Throughout my career I have always excelled working on a team, everyone coming together to achieve a common goal is a great experience to be a part of and has become
          one of my favorite. Aside from learning, I enjoy hanging out with my family. 
        </h6>
      </div>
    </div>
    <ContactModal id="ContactModal"/>
  </section>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import { AppState } from '../AppState';
import ContactModal from '../components/ContactModal.vue'
import { Modal } from 'bootstrap';
const theme = ref(loadState('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  changeProjectInfo()
})

const projectData = ref()
projectData.value = {}

const goalsData = ref()
goalsData.value = {}

function scrollPage(){}

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

function viewProjects(){}

function openModal(){
  Modal.getOrCreateInstance('#ContactModal').show()
}
function closeModal(){
  Modal.getOrCreateInstance('#ContactModal').hide()
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
.graduate-image{
  max-width: 600px;
  max-height: 500px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.26);
}
.hobby-image{
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.26);
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
.graduate-image{
  max-width: 600px;
  max-height: 500px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.26);
}
.hobby-image{
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.26);
}
}

.social-section{
  border-bottom: solid 2px rgb(49, 215, 237);
  width: 200px;
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
