<template>


    <div class="grid">
        <div class="track" v-for="room in trackItems" :key="room.roomId">
            <div class="header">
                <showRoom :roomId=toNumber(room.roomId) />
            </div>

            <div v-bind:class="isAffectedClass(slotItem.users)" class="block" v-for="slotItem in room.slots"
                :key="slotItem.slot.slotId">
                <div>
                    {{ slotItem.slot.fromTime }} -
                    {{ slotItem.slot.toTime }}
                    <displayKind :kind="slotItem.slot.kind" :activate="isSlotShouldBeDisplay(slotItem.users)" />
                    <div class="affected">
                        <showRc :red-coats=slotItem.users :slot-id=slotItem.slot.slotId />
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script setup lang="ts">

import _ from "lodash";

import { UserSlot, IItemPlanning } from "../../models";
import showRoom from "./show-room.vue";
import showRc from "./show-rc.vue";
import displayKind from "./displayKind.vue";
import speaker from "./speaker.vue";
import shared from "../../shared";

const params = defineProps({
    trackItems: {
        type: Array<IItemPlanning>,
        required: true
    }
});


function filterByGpr(idRoomRef: Number, currentRooms) {
    return _.filter(currentRooms, (ro) => {
        return idRoomRef == ro.roomId;
    });
}
function toNumber(roomId: String): number {
    return _.toNumber(roomId)
}
function isAffectedClass(users: Array<UserSlot>) {
    var userIdVal = "NoData";
    if ((_.size(users) != 0)) {
        userIdVal = "users.userId";
    }
    return {
        affectedBox: (_.size(users) != 0),
        userIdVal: (_.size(users) != 0),
        blockColor: (_.size(users) == 0) && shared.readAdminEtat(),
        deactivate: (_.size(users) == 0) && !shared.readAdminEtat()
    };
}

function isSlotShouldBeDisplay(users) {
    //if no user and mode admin then hide block
    return (_.size(users) == 0 && shared.readAdminEtat()) || !(_.size(users) == 0);
}


</script>
<style scoped>
.header {
    display: flex;
    background-color: #044169;
    padding: 14px 28px;
    font-size: 20px;
    cursor: pointer;
    margin: 5px;
    justify-content: center;
}

.blockColor {
    background-color: #085db3;
}

.deactivate {
    background-color: #2a2e31;

}

.block {
    padding: 14px 28px;
    font-size: 60px;
    cursor: pointer;
    margin: 5px;
}


.grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.track {
    display: flex;
    flex-direction: column;
}

.affectedBox {
    font-weight: bold;
    background-color: #022b53 !important;
}

.affected {
    font-weight: bold;
    color: aquamarine;
}

.kindTitle {
    display: flex;
    font-size: 24px;
    text-transform: capitalize !important;
    color: cornsilk;
    justify-content: center;
}

@media screen and (min-width: 400px) {

    .grid {
        display: inline-block;

    }

    

    .info-talk {
        font-size: 12px;
    }

    .speaker-list {
        font-size: 12px;
    }

    .header {
        display: flex;
        background-color: #044169;
        padding: 7px 14px;
        font-size: 10px;
        cursor: pointer;
        margin: 2px;
        justify-content: center;
    }

    .block {
        padding: 7px 14px;
        font-size: 8px;
        cursor: pointer;
        margin: 2px;
    }


}

@media screen and (min-width: 1280px) {

    .grid {
        display: flex;
        justify-content: left;
    }

    .info-talk {
        font-size: 12px;
    }

    .speaker-list {
        font-size: 12px;
    }

    .header {
        display: flex;
        background-color: #044169;
        padding: 7px 14px;
        font-size: 10px;
        cursor: pointer;
        margin: 2px;
        justify-content: center;
        height: 40px;
    }

    .block {
        padding: 7px 14px;
        font-size: 9px;
        cursor: pointer;
        margin: 2px;
    }


}

@media screen and (min-width: 2555px) {


    .info-talk {
        font-size: 12px;
    }

    .speaker-list {
        font-size: 12px;
    }

    .header {
        display: flex;
        background-color: #044169;
        padding: 7px 14px;
        font-size: 10px;
        cursor: pointer;
        margin: 2px;
        justify-content: center;
    }

    .block {
        padding: 7px 14px;
        font-size: 13px;
        cursor: pointer;
        margin: 2px;
    }


}
</style>