<template>
    <div v-for="item in redCoats">
       
            
                {{ formatUserTodisplay(item) }}  <span v-if="isEdit"><button type="button"  class="btn btn-secondary"  v-on:click="remove(item.userId)">X</button> </span>
            
        
    </div>
</template>

<script setup lang="ts">
import shared from "../../shared";
import { Ref, ref, onBeforeMount, computed } from "vue";
import { _ } from 'lodash';
import { UserSlot,Mapping } from "../../models";
import { useToast } from "vue-toastification";

const toast = useToast();

const params = defineProps({
    redCoats: {
        type: Array<UserSlot>,
        required: true
    },
    isEdit: {
        type: Boolean,
        default: false
    },
    slotId: {
        type: String,
        required: true
    }
});

function formatUserTodisplay(u: UserSlot): String {
    return "- " + u.prenom + " " + _.upperCase(u.nom.substring(0, 1)) + ".";
}


function remove(uId:String) {
    console.log(params.slotId)
    let mapping = new Mapping(
          uId,
          params.slotId
        );
      fetch("/api/del-mapping", {
        body: JSON.stringify(mapping),
        method: "PUT",
        headers: shared.tokenHandle(),
      })
        .then((p) => {
          //refresh()
        //  this.dialogState = false;
          toast.success("Red coat removed!");
        });
    }



</script>