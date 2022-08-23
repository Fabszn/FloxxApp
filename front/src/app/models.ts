import { stringify } from "querystring";
import { stringify } from "querystring";
import { stringify } from "querystring";

class Hit {
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

class Slot {
    slotId: string;
    roomId: string;
    fromTime: string;
    toTime: string;
    talk?: string;
    day: string
}

class TrackHitInfo {
    hitSlotId: string;
    slot: Slot;
    hitInfo?: Hit;
    constructor(hitSlotId, slot, hitInfo) {
        this.hitSlotId = hitSlotId;
        this.slot = slot;
        this.hitInfo = hitInfo;
    }
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
    slotId: String;
    constructor(uId: String, sId: String) {
        this.userId = uId;
        this.slotId = sId;
    }
    toJSON() {
        return {
            "userId": this.userId,
            "slotId": this.slotId
        };
    }
}

class Talk {
    talkType: string = "";
    title: string = "";
    constructor(tt: string, title: string) {
        this.talkType = tt;
        this.title = title;
    }

}

class StatItem {
    slotId: string;
    talk: Talk;
    percentage: number = 0;
    roomid: string;
    fromtime: string;
    totime: string;
    day: String;

    constructor(si: string,
        t: Talk,
        perc: number,
        roomid: string,
        ft: string,
        tt: string,
        day: string
    ) {
        this.slotId = si;
        this.talk = t;
        this.percentage = perc;
        this.roomid = roomid;
        this.fromtime = this.fromtime;
        this.totime = this.totime;
        this.day = day;
    }
}


class Conference {
    confTitle: string = "";
    confKind: string = "";
    room: string = "";
    fromTime: string = "";
    toTime: string = "";
    slotId: String = ""

    updateInfo(title: string, kind: string, room: string, from: string, to: string, slotId) {
        this.confTitle = title;
        this.confKind = kind;
        this.fromTime = from;
        this.toTime = to;
        this.room = room;
        this.slotId = slotId;
    }

    resetData() {
        this.confTitle = "";
        this.confKind = "";
        this.fromTime = "";
        this.toTime = "";
        this.room = "";
        this.slotId = "";
    }

    twitterMessage(): string {
        return "La salle " + this.room + " [" + this.fromTime + " - " + this.toTime + "] " + this.confTitle + " est en OVERFLOW ....  @DevoxxFR";

    }


}


export { TrackHitInfo, User, Conference, Mapping, StatItem, Talk }





