<template>
    <div v-if="isExistsSpeaker(selectSource())">
        <div class="speaker p-1" v-for="item in selectSource()">
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
                    <ul>

                        <li>{{ item.firstname }} {{ item.lastname }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="speaker p-2">No speaker found</div>
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
    },
    externalSource: {
        type: Boolean,
        required: true
    },
    externalSpeaker: {
        type: Array<ISpeaker>,
        required: false,
        default: new Array<ISpeaker>
    }
});
const speakers: Ref<Array<ISpeaker>> = ref(new Array<ISpeaker>())

function selectSource(): Array<ISpeaker> {
    if (params.externalSource) {
        return params.externalSpeaker;
    } else {
        return speakers.value;
    }
}


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
    if (!params.externalSource) {
        fetch("/api/speakers/" + params.slotId, {
            headers: shared.tokenHandle(),
        })
            .then((response) => response.json())
            .then((p: ISpeaker[]) => {
                speakers.value = p;
            });
    }

})



</script>

<style scoped>
.speaker {
    color: aliceblue;
}
</style>