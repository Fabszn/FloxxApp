<template>
    <div class="speaker" v-for="item in speakers">
        <b-card
            :img-src=item.imageUrl
            >

        </b-card>

        <b-card-text>
            <div class="speaker">
                {{ item.firstname }}
            </div>
            <div class="speaker">
                {{ item.lastname }}
            </div>
        </b-card-text>
    </div>


</template>

<script setup lang="ts">

import { onBeforeMount, ref, Ref, defineProps } from 'vue';
import shared from "../shared";
import { ISpeaker } from '../models'

const params = defineProps({
    slotId: String
});
const speakers: Ref<ISpeaker[]> = ref([])

onBeforeMount(async () => {

    fetch("/api/speakers/" + params.slotId, {
        headers: shared.tokenHandle(),
    })
        .then((response) => response.json())
        .then((p: ISpeaker[]) => {

            speakers.value = p;
            console.log(p);
        });

})













</script>

<style scoped>
.speaker {
    color: aliceblue;
}
</style>