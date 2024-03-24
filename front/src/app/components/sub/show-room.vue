<template>

    <span>{{ getRoomName() }} </span>

</template>

<script setup lang="ts">
import shared from "../../shared";
import { Ref, ref, onBeforeMount, computed } from "vue";
import { useStore } from 'vuex';
import { _ } from 'lodash';

const store = useStore();
const rooms = computed(() => store.state.rooms)


const params = defineProps({
    roomId: {
        type: Number,
        required: true
    }
});

function getRoomName() {
    return shared.getRoomName(params.roomId, rooms.value)
}

onBeforeMount(async () => {
    if (_.isEmpty(store.state.rooms)) {
        await store.dispatch('fetchRooms');
    }
});

</script>