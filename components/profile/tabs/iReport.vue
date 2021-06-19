<template>
    <div>
        <v-progess-circular
        v-if="!ireport"
        indeterminate
        color="grey lighten-5"
        size="16">
        </v-progess-circular>
        <div md12 v-else>
            <v-data-table
             dense
             :headers="headers"
             :items="insurancecards"
             :search="search"
             width="100%"
             @click:row="handleClick">
             <template v-slot:top>
                <v-toolbar flat dark color="primary">
                    <h2>
                    <strong>{{ title }}</strong>
                    </h2>
                    <v-spacer></v-spacer><v-text-field
              v-model="search"
              append-icon="search"
              label="Search..."
              outlined
              single-line
              hide-details
              class="mt-2"
            ></v-text-field>&nbsp;&nbsp;
                <v-btn class="button mb-1" meduim @click="showActive">{{title}} </v-btn>&nbsp;&nbsp;
                
                </v-toolbar>
             </template>
            </v-data-table>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
