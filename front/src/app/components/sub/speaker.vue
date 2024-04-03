<template>
    <div v-if="isExistsSpeaker(speakers)">
        <div class="speaker p-4" v-for="item in speakers">
            <div v-if="params.withPicture">
                <b-card bodyBgVariant='dark' :img-src=computePicture(item.imageUrl)>
                    <b-card-text>
                        <div class="speaker">
                            {{ item.firstname }} {{ item.lastname }}
                        </div>
                    </b-card-text>
                </b-card>
            </div>
            <div v-else>
                <div class="speaker">

                    <p>
                        {{ item.firstname }} {{ item.lastname }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="speaker p-4">No speaker found</div>
    </div>


</template>

<script setup lang="ts">

import { onBeforeMount, ref, Ref, defineProps } from 'vue';
import shared from "../../shared";
import { ISpeaker } from '../../models'
import _ from "lodash";

const params = defineProps({
    slotId: {
        type: String,
        required: true

    },
    withPicture: {
        type: Boolean,
        default: true
    }
});
const speakers: Ref<ISpeaker[]> = ref([])

function isExistsSpeaker(speakers: Array<ISpeaker>) {
    return !_.isEmpty(speakers)
}

function computePicture(urlImage: string) {
    if (_.isUndefined(urlImage) || _.isNull(urlImage)) {
        return "https://vistapointe.net/images/unknown-5.jpg"
    } else {
        return urlImage
    }


}



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