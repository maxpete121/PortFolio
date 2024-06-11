<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'

const user = computed(() => AppState.user)
const account = computed(() => AppState.account)
async function login() {
  AuthService.loginWithPopup()
}
async function logout() {
  AuthService.logout({ returnTo: window.location.origin })
}

</script>

<template>
<div class="modal fade" id="ContactModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Contact me</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="w-100 d-flex flex-column align-items-center">
            <form action="">
                <div class="d-flex flex-column">
                    <label for="Name">Name</label>
                    <input class="input-contact" name="Name" type="text" maxlength="60" required>
                </div>
                <div class="d-flex flex-column mt-3">
                    <label for="Email">Email</label>
                    <input name="Email" class="input-contact" type="text" maxlength="80" required>
                </div>
                <div class="d-flex flex-column mt-2">
                    <label for="Company">Phone (Optional)</label>
                    <input name="Company" class="input-contact" type="text" maxlength="80">
                </div>
                <div class="d-flex flex-column mt-3">
                    <label for="Company">Company (Optional)</label>
                    <input name="Company" class="input-contact" type="text" maxlength="80">
                </div>
                <div class="d-flex flex-column mt-2">
                    <label for="description">Reason for Contact</label>
                    <textarea name="description" cols="30" rows="5"></textarea>
                </div>
                <div class="text-center">
                    <button class="btn btn-outline-dark mt-3">Submit</button>
                </div>
            </form>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 576px) {
    .input-contact{
        width: 250px;
    }
}

@media screen and (max-width: 576px) {
    .input-contact{
        width: 250px;
    }
}

</style>