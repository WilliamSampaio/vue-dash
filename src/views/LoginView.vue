<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-6">
                <div class="card my-4">
                    <div class="card-body">
                        <h5 class="card-title">Login</h5><br>
                        <div class="row mb-3">
                            <label for="email-input" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email-input" name="email" required>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="passwd-input" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="passwd-input" name="passwd" required>
                            </div>
                        </div><br>
                        <button class="btn btn-primary" @click="login">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    methods: {
        login() {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style scoped></style>