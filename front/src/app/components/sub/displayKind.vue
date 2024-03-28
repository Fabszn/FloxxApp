<template>

    <div class="d-flex justify-content-center blockKindColor rounded-pill m-2 p-2 " v-bind:class="selectCssByKind(kind)">{{ kind }}</div>

</template>

<script setup lang="ts">


const params = defineProps({
    kind: {
        type: String,
        required: true
    }
});

function selectCssByKind(kind: string): {} {

    return {
        keynote: "Keynote" == kind,
        conference: "Conference" == kind,
        break : "Break" == kind,
        lunch_talk : "Lunch Talk" == kind,
        tools_in_action : "Tools-in-Action" == kind,
        lunch : "Lunch" == kind
    }
}


</script>

<style scoped>

.conference {
    background-color: #c2a68c;
    color: #3b1e02;;
}
.keynote {
    background-color: #cdb4db;
    color:#5a1185 
}

.break {
    background-color: #d8d6da;
    color:#454644 
}
.lunch {
    background-color: #f0547b;
    color:#f1eef0 
}

.lunch_talk {
    background-color: #a7e8db;
    color:#022c24 
}

.tools_in_action {
    background-color: #afb2e0;
    color:#3f4272;
}



.default {
    background-color: #1857b6;
    color:bisque
}
</style>