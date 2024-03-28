<template>
    <div class="speaker p-4" v-for="item in speakers">
        <b-card bodyBgVariant= 'dark'
            :img-src=item.imageUrl
        >

            <b-card-text>
            <div class="speaker">
                {{ item.firstname }} {{ item.lastname }}
            </div>
            <div class="speaker">
                
            </div>
        </b-card-text>
        </b-card>

        
    </div>


</template>

<script setup lang="ts">

import { onBeforeMount, ref, Ref, defineProps } from 'vue';
import shared from "../../shared";
import { ISpeaker } from '../../models'

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