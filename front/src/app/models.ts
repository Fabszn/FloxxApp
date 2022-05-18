
declare class Hit {
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
        this.userId = userId;
    }
}

declare class Slot {
    slotId: string;
    roomId: string;
    fromTime: string;
    toTime: string;
    talk?: string;
    day: string
}

declare class TrackHitInfo {
    hitSlotId: string;
    slot: Slot;
    hitInfo?: Hit;
    constructor(hitSlotId, slot, hitInfo) {
        this.hitSlotId = hitSlotId;
        this.slot = slot;
        this.hitInfo = hitInfo;
    }
}


export { TrackHitInfo }





