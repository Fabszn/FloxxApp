<template>

    <div class="d-flex justify-content-center rounded-pill m-1 p-1  " v-bind:class="selectCssByKind(kind)">{{ kind }}
    </div>

</template>

<script setup lang="ts">
import _default from 'vuex';
import _ from "lodash"



const params = defineProps({
    kind: {
        type: String,
        required: true
    },
    activate: {
        type: Boolean,
        required: false,
        default: true
    }

});

function selectCssByKind(kind: string): {} {


    if (params.activate) {
        return {

            keynote: "Keynote" == kind,
            conference: "Conference" == kind,
            break: "Break" == kind,
            lunch_talk: "Lunch Talk" == kind,
            tools_in_action: "Tools-in-Action" == kind,
            lunch: "Lunch" == kind,
            HH_Hands_on_Lab: "2H Hands-on Lab" == kind,
            other: "Other" == kind,
            deep_dive: "Deep Dive" == kind,
            logistique: _.size(_.filter(["Accueil","Circulation"], (c) => c == kind)) != 0,
            HHH_Hands_on_Lab: "3H Hands-on Lab" == kind

        }
    } else {
        return {
            deactivate: params.activate
        }
    }
}


</script>

<style scoped>
.conference {
    background-color: #c2a68c;
    color: #3b1e02;
    ;
}

.keynote {
    background-color: #cdb4db;
    color: #5a1185
}

.break {
    background-color: #d8d6da;
    color: #454644
}

.lunch {
    background-color: #f0547b;
    color: #f1eef0
}

.lunch_talk {
    background-color: #a7e8db;
    color: #022c24
}

.tools_in_action {
    background-color: #afb2e0;
    color: #3f4272;
}

.HH_Hands_on_Lab {
    background-color: #bcf7c8;
    color: #07180a;
}

.HHH_Hands_on_Lab {
    background-color: #58e758;
    color: #142e14;
}

.other {
    background-color: #afc0c7;
    color: #142e14;
}

.deep_dive {
    background-color: #c0cceb;
    color: #142e14;
}

.logistique {
    background-color: #791e03;
    color: #fa9992;
}

.default {
    background-color: #1857b6;
    color: bisque
}

.deactivate {
    background-color: #2e3133;
    color: rgb(17, 16, 15)
}
</style>
