<template>
    <div class="profile__container">
        <div class="profile__head">
            <h1 class="profile__title">Profile</h1>
            <v-icon color="#10DC87" large>person</v-icon>
        </div>

        <div class="profile__col-1">

            <div class="profile__card animated fadeIn" style="animation-delay: 0.2s;">
                <div class="card__content">
                    <p class="card__title">Personal Data</p>

                    <div class="card__content-inner">
                        <v-icon class="icon-test" medium color="##2F2F2F">home</v-icon>

                        <div class="card__content-text">
                            <p>{{userData.username}}</p>
                            <p>{{userData.email}}</p>
                        </div>
                    </div>

                    <div class="card__content-inner">
                        <v-icon class="icon-test" medium color="##2F2F2F">home</v-icon>

                        <div class="card__content-text">
                            <p>{{userProfileData.country}}</p>
                            <p>{{userProfileData.city}}, {{userProfileData.zipcode}}</p>
                            <p>{{userProfileData.street}} {{userProfileData.number}}</p>
                        </div>
                    </div>

                    <div class="card__content-inner card__content-final">
                        <v-icon class="icon-test" medium color="##2F2F2F">home</v-icon>

                        <div class="card__content-text">
                            <p>http://www.john.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="profile__card animated fadeIn" style="animation-delay: 0.4s;">
                <div class="card__content">
                    <p class="card__title">Settings</p>

                    <div class="card__content-inner card__reset">
                        <v-btn class="text-capitalize card__items card__extension"
                               style="height: 42px;" @click="editProfile = true"
                               :ripple="false" flat>Edit Profile
                        </v-btn>
                    </div>

                    <div class="card__content-inner card__reset">
                        <v-btn class="text-capitalize card__items card__extension"
                               style="height: 42px;" @click="editPassword = true"
                               :ripple="false" flat>Change Password
                        </v-btn>
                    </div>

                    <div class="card__content-inner card__reset card__content-final">
                        <v-btn class="text-capitalize card__items card__extension"
                               style="height: 42px;" @click="deleteAccount = true"
                               :ripple="false" flat>Delete Account
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>

        <ProfileModal/>
        <PasswordModal/>
        <DeleteModal/>
    </div>
</template>

<script>
    const ProfileModal = () => import('@/components/Layout/ProfileModal')
    const PasswordModal = () => import('@/components/Layout/PasswordModal')
    const DeleteModal = () => import('@/components/Layout/DeleteModal')

    export default {
        name: "Profile",
        components: {
            ProfileModal, PasswordModal, DeleteModal
        },

        data() {
            return {
                editProfile: false,
                editPassword: false,
                deleteAccount: false,

                /*twee onderst data gebruiken alleen na dat de profile component 
                geladen(created en mounted) is*/
                userProfileData: this.$store.state.userData.userProfileData,
                userData: this.$store.state.userData.userdata

            }
        },

        created(){
            
        },

        mounted(){
            this.$store.commit('saveUserData');
        },

        methods: {

            closeEdit(message){
                this.editProfile = false
                this.editPassword = false
                this.deleteAccount = false

                if(message){
                    this.$store.commit('modalStatus', {message})
                }
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .profile__container {
        border-radius: 4px;
        min-width: 1146px;
        width: 100%;
        height: 100%;
        display: flex;
        background: #FFFFFF;
        flex-direction: column;
        justify-content: flex-start;
        padding: 50px 100px 70px 100px;
    }

    .profile__head {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 22px;
    }

    .profile__title {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 36px;
        text-align: left;
        color: #10DC87;
        margin-right: 12px;
    }

    .profile__col-1 {
        display: flex;
        height: 100%;
        flex-direction: row;
        justify-content: flex-start;
    }

    .profile__card {
        max-width: 362px;
        width: 100%;
        min-height: 324px;
        height: 100%;
        box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15);
    }

    .profile__card:first-child {
        margin-right: 30px;
    }

    .card__content {
        padding: 45px;
    }

    .card__title {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 24px;
        color: #2F2F2F;
        text-align: left;

    }

    .card__content-inner {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 22px;
    }

    .card__content-text {
        margin-left: 16px;
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    }

    .card__content-text p {
        padding: 0;
        margin: 0;
        font-size: 18px;
    }

    .card__extension {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 100;
        min-width: 200px;
        min-height: 48px;
        color: white;
        border-radius: 5px;
        background: linear-gradient(to top, #08BA4D, #10DC87);
        transition: 0.2s ease-in-out;
    }

    .card__extension:hover {
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
        transition: 0.2s ease-in-out;
    }

    .card__reset {
        margin: 0;
        padding: 0;
    }

</style>
