<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div>
      <br />
    </div>
    <div>
      <tabs>
        <div v-for="item in items" :key="item.day.value">
          <tab :name="item.day.value">
            <div class="grid">
              <div
                class="track"
                v-for="room in item.rooms"
                :key="room.roomId.value"
              >
                <div class="header">{{ room.roomId.value }}</div>

                <div
                  v-on:click="show(slot.slot.slotId.value, slot.user)"
                  v-bind:class="isAffected(slot.user)"
                  class="block"
                  v-for="slot in room.slots"
                  :key="slot.slot.slotId.value"
                >
                  {{ slot.slot.fromTime.value }}
                  {{ slot.slot.toTime.value }}

                  <div class="affected">{{ displayUser(slot.user) }}</div>
                </div>
              </div>
            </div>
          </tab>
        </div>
      </tabs>
    </div>

   <!-- <modal name="map-user-modal" @before-open="beforeOpen" :adaptive="true">
      <div class="floxxmodal over">
        <div class="modalinfo">
          <div>
            <p>{{ confTitle }}</p>
            <p>{{ room }} / {{ confKind }}</p>
            <p>
              {{ fromTime }} -> {{ toTime }} - RedCoat :
              {{ actualUserNameSelected }}
            </p>
          </div>
          <div class="over">
            <dropdown
              :options="users"
              v-on:selected="validateSelection"
              :disabled="false"
              :maxItem="4"
              placeholder="Search by name"
            >
            </dropdown>
          </div>
        </div>

        <div class="buttonmodal">
          <button type="button" v-on:click="hide" class="btn btn-secondary">
            Cancel
          </button>
          <button type="button" v-on:click="remove" class="btn btn-secondary">
            Remove
          </button>
          <button
            type="button"
            v-on:click="saveMapping"
            class="btn btn-secondary"
          >
            Save
          </button>
        </div>
      </div>
    </modal>-->
  </div>
</template>

<script>
import shared from "../../shared";
import _ from "lodash";
export default {
  data: function () {
    return {
      items: {},
      actualUserNameSelected: "",
      confTitle: "",
      confKind: "",
      room: "",
      fromTime: "",
      toTime: "",
      selectedSlotId: "",
      selectedUserId: "",
      users: [],
    };
  },
  created: function () {
    fetch("/api/planning", {
        headers: shared.tokenHandle(),
      })
      .then((p) => {
        this.items = p.data;
      });
  },
  methods: {
    backMenu: function () {
      this.$router.push("/admin");
    },
    getUserId: function (user) {

      if(_.isNull(user)){
        return "";
      }else{
        user.userId;
      }
    },
    isAffected: function (user) {
      var userIdVal = "NoData";
      if (!_.isNull(user)) {
        userIdVal = user.userId;
      }
      return {
        affectedBox: !_.isNull(user),
        userIdVal: !_.isNull(user)
      };

      //
    },
    displayUser: function (user) {
      if (_.isNull(user)) {
        return "-";
      } else {
        return (
          user.prenom.value +
          " " +
          _.upperCase(user.nom.value.substring(0, 1)) +
          "."
        );
      }
    },
    validateSelection: function (value) {
      this.selectedUserId = value.id;
    },
    show(idSlot, currentUser) {
      this.actualUserNameSelected = computeUser(currentUser);
      this.$modal.show("map-user-modal", { slotId: idSlot });
    },
    beforeOpen(event) {
      var slotId = event.params.slotId;

      shared.securityAccess(this.$router, (p) => {
        fetch("/api/slots/" + slotId, {
            headers: shared.tokenHandle(),
          })
          .then((p) => {
            this.confTitle = p.data.talk.title;
            this.confKind = p.data.talk.talkType;
            this.room = p.data.roomId.value;
            this.fromTime = p.data.fromTime.value;
            this.toTime = p.data.toTime.value;
            this.selectedSlotId = p.data.slotId.value;
          });
      });

      fetch("/api/users", {
          headers: shared.tokenHandle(),
        })
        .then((p) => {
          this.users = _.map(p.data, (user) => {
            var uName = user.prenom + " " + user.nom;
            return { id: user.userId, name: uName };
          });
        });
    },
    hide() {
      reInitModal(this);
      this.$forceUpdate();
      this.$modal.hide("map-user-modal");
    },
    remove() {
      fetch(
          "/api/set-user",
          {
            slotId: { value: this.selectedSlotId },
          },
          {
            method: "POST",
            headers: shared.tokenHandle(),
          }
        )
        .then((p) => {
          reInitModal(this);
          reloadData(this);
          this.$modal.hide("map-user-modal");
          this.$notify({ type: "success", text: "Red coat removed!" });
        });
    },
    saveMapping() {
      if (_.isUndefined(this.selectedUserId)) {
        this.$notify({ type: "error", text: "Red coat must be filled" });
      } else {
        fetch(
            "/api/set-user",
            {
              userId: { value: this.selectedUserId },
              slotId: { value: this.selectedSlotId },
            },
            {
              method: "POST",
              headers: shared.tokenHandle(),
            }
          )
          .then((p) => {
            reloadData(this);
            this.$modal.hide("map-user-modal");
            this.$notify({ type: "success", text: "Mapping done!" });
          });
      }
    },
    refresh: function () {
      reloadData(this);
    },
  },
};

function reInitModal(thisref) {
  thisref.selectedUserId = "";
  thisref.selectedSlotId = "";
  thisref.actualUserNameSelected = "";
}

function computeUser(user) {
  if (_.isNull(user)) {
    return "-";
  } else {
    return user.prenom.value + " " + user.nom.value;
  }
}

function reloadData(thisref) {
  shared.securityAccess(thisref.$router, (p) => {
    thisref.$http
      .get("/api/planning", {
        headers: shared.tokenHandle(),
      })
      .then((p) => {
        thisref.items = p.data;
      });
  });
}
</script>

<style  scoped>
.header {
  background-color: #61bf9b;
  padding: 14px 28px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
}

.block {
  background-color: #3399ff;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
}

.track {
  display: flex;
  flex-direction: column;
}

.grid {
  display: flex;
  flex-direction: row;
}

.affectedBox {
  font-weight: bold;
  background-color: rgb(4, 55, 38) !important;
}
.affected {
  font-weight: bold;
  color: aquamarine;
}
</style>