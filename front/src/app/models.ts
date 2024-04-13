import _ from "lodash";
import { reactive, ref } from "@vue/runtime-core";

export class Hit {
    hitid: string;
    hitSlotId: string;
    percentage: number;
    dateTime: number;
    userId: string;
    constructor(hitid, hitSlotId, percentage, dateTime, userId) {
        this.hitid = hitid;
        this.hitSlotId = hitSlotId;
        this.percentage = percentage;
        this.dateTime = dateTime;
        userId = userId;
    }
}

export class Slot {
    slotId: string;
    roomId: string;
    fromTime: string;
    toTime: string;
    kind: string;
    title: string;
    day: string;
}

class TrackHitInfo {
    hitSlotId: string;
    slot: Slot;
    hitInfo?: Hit;
    overflow: IOverflow;
    constructor(hitSlotId, slot, hitInfo) {
        this.hitSlotId = hitSlotId;
        this.slot = slot;
        this.hitInfo = hitInfo;
    }
}

export interface IOverflow {
    slotId: string;
    level: number;
    datetime: string,
    affectedRoom: string
}

class User {
    id: string;
    label: string;
    constructor(userId, nom, prenom) {
        this.label = prenom + " " + nom;
        this.id = userId;
    }
}

class Mapping {
    userId: String;
    slotInfo: String;
    constructor(uId: String, sId: String) {
        this.userId = uId;
        this.slotInfo = sId;
    }
    toJSON() {
        return {
            "userId": this.userId,
            "slotId": this.slotInfo
        };
    }
}



class StatItem {
    slotId: string;
    title: string;
    kind: string;
    percentage: number = 0;
    roomid: string;
    fromtime: string;
    totime: string;
    day: String;

    constructor(si: string,
        title: string,
        kind: string,
        perc: number,
        roomid: string,
        ft: string,
        tt: string,
        day: string
    ) {
        this.slotId = si;
        this.title = title;
        this.kind = kind;
        this.percentage = perc;
        this.roomid = roomid;
        this.fromtime = this.fromtime;
        this.totime = this.totime;
        this.day = day;
    }
}

class OverflowRoomState {
    data = reactive({
        slotId: ref(""),
        roomId: ref("")
    });
}




class StateRoom {
    constructor(roomid: number) {
        this.data.roomId = roomid
    }

    data = reactive({
        roomId: -1,
        per: ref(0),
        color: ref("green"),
        overflowState: ref(0),
        selected: ref(false),
        affectedRoom: ref("")
    });

    dataOS = reactive({
        overflowJustFull: ref(false),
        overflowMedium: ref(false),
        overflowRequiered: ref(false),
    });

    computeRoomState(idx: number) {
        this.dataOS.overflowJustFull = false;
        this.dataOS.overflowMedium = false;
        this.dataOS.overflowRequiered = false;
        switch (idx) {
            case 1:
                this.dataOS.overflowJustFull = true;
                break;
            case 2:
                this.dataOS.overflowMedium = true;
                break;
            case 3:
                this.dataOS.overflowRequiered = true;
                break;
            default:
                console.error("index provided to compute overflow id unknown = " + idx);
                this.dataOS.overflowJustFull = false;
                this.dataOS.overflowMedium = false;
                this.dataOS.overflowRequiered = false;
        }
    }
}


class Conference {
    confTitle: string = "";
    confKind: string = "";
    room: string = "";
    fromTime: string = "";
    toTime: string = "";
    slotId: String = "";
    stateRoom: StateRoom;

    updateInfo(title: string, kind: string, room: string, from: string, to: string, slotId, stateRoom: StateRoom) {
        this.confTitle = title;
        this.confKind = kind;
        this.fromTime = from;
        this.toTime = to;
        this.room = room;
        this.slotId = slotId;
        this.stateRoom = stateRoom;
    }

    twitterMessage(): string {
        if (_.trim(this.room).length == 0) {
            return "Nothing to publish for now..."
        } else {
            return "La salle " + this.room + " [" + this.fromTime + " - " + this.toTime + "] " + this.confTitle + " est en OVERFLOW ....  @DevoxxFR";
        }
    }
}


class Information {
    id: number = -1;
    title: string = "totot";
    content: string = "";
    dateCreate: String = "";

    constructor(_id: number, _title: string, _content: string, _dateCreate: string) {
        this.id = _id;
        this.title = _title;
        this.content = _content;
        this.dateCreate = _dateCreate;
    }

    updateInfo(_id: number, _title: string, _content: string, _dateCreate: string) {
        this.id = _id;
        this.title = _title;
        this.content = _content;
        this.dateCreate = _dateCreate;
    }

    reset() {
        this.id = -1;
        this.title = "";
        this.content = "";
        this.dateCreate = "";
    }
}


export interface UserSlot {
    userId: string,
    nom: string,
    prenom: string
}


export interface ISpeaker {
    slotId: string
    firstname: string
    lastname: string
    fullname: string
    imageUrl: string
}

export { TrackHitInfo, User, Conference, StateRoom, Mapping, StatItem, OverflowRoomState, Information }





