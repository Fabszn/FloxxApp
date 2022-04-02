import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    username: "-",
    rooms: []
}

const mutations = {
    setuserName(state, name) {
        state.username = name;
    },
    setRooms(state, rooms) {
        state.rooms = rooms;
    }

}




export default new Vuex.Store({
    state,
    mutations
})