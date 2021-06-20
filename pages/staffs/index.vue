<template>
    <div>
        <div class="breadcrumb">
             <router-link to="/">Dashboard</router-link>
            <router-link to="/staffs" class="active">Staffs</router-link>
        </div>

        <v-card class="mx-auto defaulf">
            <staffs-list
            :datalist="ireports"
            :pagetitle="all_pagetitle"
             >    
            </staffs-list>
        </v-card>
    </div>
</template>

<script>

import staffs from "@/components/staffs/staffsListing";

export default {

    components:{
        "staffs-list": staffs
    },

}
</script>

<style scoped>
.v-text-field__slot {
  width: 20px;
}
</style>
