//import { MockMethod } from 'vite-plugin-mock'

class UserAuthenticated {
    name: string;
    token: string;
    isAdmin: boolean = false;
    constructor(name, token, isAdmin) {
        this.name = name;
        this.token = token;
        this.isAdmin = isAdmin;
    }
}


export default [

    {
        url: '/api/slots/_filling',
        method: 'get',
        response: [{ "slotId": "2259", "kind": "Conference", "title": "---", "percentage": 80, "roomid": "Amphi bleu", "fromtime": "11:30", "totime": "12:15", "day": "Friday" }]
    },
    {
        url: '/api/admin/mapping',
        method: 'get',
        response: [{ "user": null, "slot": { "slotId": "62503", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "05:30", "toTime": "07:00", "kind": "Breakfast", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "62501", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "63456", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63451", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63455", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63458", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63459", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63457", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63453", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63454", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63452", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1752", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63468", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63465", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63462", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63463", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63466", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63464", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63467", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63460", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63461", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63469", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "08:00", "toTime": "08:30", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1780", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "1783", "roomName": "Maillot", "roomId": 1713, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1784", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1781", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1777", "roomName": "Paris 143", "roomId": 1705, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1776", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1778", "roomName": "Paris 141", "roomId": 1703, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1775", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1782", "roomName": "Paris 241", "roomId": 1710, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1779", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12902", "roomName": "Paris 243", "roomId": 1712, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12901", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12903", "roomName": "Paris 142", "roomId": 1704, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12904", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63483", "roomName": "Maillot", "roomId": 1713, "fromTime": "09:15", "toTime": "09:35", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "arn-her", "nom": "Heritier", "prenom": "Arnaud" }, "slot": { "slotId": "1791", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1794", "roomName": "Maillot", "roomId": 1713, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1793", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1788", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1787", "roomName": "Paris 143", "roomId": 1705, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1786", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1790", "roomName": "Paris 141", "roomId": 1703, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1785", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1789", "roomName": "Paris 241", "roomId": 1710, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1792", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63488", "roomName": "Maillot", "roomId": 1713, "fromTime": "10:20", "toTime": "11:30", "kind": "Lunch", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12917", "roomName": "Maillot", "roomId": 1713, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12916", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12913", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12909", "roomName": "Paris 143", "roomId": 1705, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12907", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12908", "roomName": "Paris 141", "roomId": 1703, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12905", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12914", "roomName": "Paris 241", "roomId": 1710, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12911", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63474", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63482", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63476", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63478", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63479", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63481", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63475", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63480", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63477", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1862", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1863", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1864", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1861", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1859", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1860", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1857", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1856", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1858", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1855", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1853", "roomName": "Paris 243", "roomId": 1712, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1852", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1851", "roomName": "Paris 142", "roomId": 1704, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1854", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1897", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "12:15", "toTime": "12:35", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1868", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "1869", "roomName": "Maillot", "roomId": 1713, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1870", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1867", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1866", "roomName": "Paris 143", "roomId": 1705, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1865", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1898", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "13:20", "toTime": "13:40", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "arn-her", "nom": "Heritier", "prenom": "Arnaud" }, "slot": { "slotId": "1876", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1875", "roomName": "Maillot", "roomId": 1713, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1874", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1873", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1872", "roomName": "Paris 143", "roomId": 1705, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1871", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1899", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "14:30", "toTime": "15:00", "kind": "Coffee Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1884", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1886", "roomName": "Maillot", "roomId": 1713, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1883", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1881", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1882", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1879", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1878", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1877", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1885", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1880", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63487", "roomName": "Paris 243", "roomId": 1712, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63484", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63485", "roomName": "Paris 142", "roomId": 1704, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63486", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1901", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "15:30", "toTime": "15:50", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1891", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1890", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1894", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1893", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1887", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1889", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1888", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1895", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1892", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63612", "roomName": "Salle Ternes", "roomId": 1715, "fromTime": "17:00", "toTime": "21:00", "kind": "Speakers Dinner", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2342", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "05:30", "toTime": "07:00", "kind": "Breakfast", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2101", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2120", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2118", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2113", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2112", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2116", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2114", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2115", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2119", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2117", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2139", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2149", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2148", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2146", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2145", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2143", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2142", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2141", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2147", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2144", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2344", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "08:00", "toTime": "08:30", "kind": "Coffee Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2168", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2165", "roomName": "Maillot", "roomId": 1713, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2166", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2159", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2160", "roomName": "Paris 143", "roomId": 1705, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2164", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2161", "roomName": "Paris 141", "roomId": 1703, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2163", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2167", "roomName": "Paris 241", "roomId": 1710, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2162", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2201", "roomName": "Paris 243", "roomId": 1712, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2200", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2202", "roomName": "Paris 142", "roomId": 1704, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2199", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2346", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "09:15", "toTime": "09:35", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2186", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2187", "roomName": "Maillot", "roomId": 1713, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2188", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2180", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2183", "roomName": "Paris 143", "roomId": 1705, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2181", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2182", "roomName": "Paris 141", "roomId": 1703, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2184", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2185", "roomName": "Paris 241", "roomId": 1710, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2179", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2348", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "10:20", "toTime": "11:30", "kind": "Lunch", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2232", "roomName": "Maillot", "roomId": 1713, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2215", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2214", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2213", "roomName": "Paris 143", "roomId": 1705, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2212", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2211", "roomName": "Paris 141", "roomId": 1703, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2207", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2216", "roomName": "Paris 241", "roomId": 1710, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2210", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63602", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63497", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63496", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63498", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63601", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63495", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63494", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63493", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63500", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2251", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2253", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2254", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2252", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2249", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2250", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2242", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2241", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2244", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2243", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2236", "roomName": "Paris 243", "roomId": 1712, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2235", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2234", "roomName": "Paris 142", "roomId": 1704, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2233", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2350", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "12:15", "toTime": "12:35", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2266", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2264", "roomName": "Maillot", "roomId": 1713, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2263", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2265", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2261", "roomName": "Paris 143", "roomId": 1705, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2262", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2285", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "13:20", "toTime": "13:40", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2276", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2278", "roomName": "Maillot", "roomId": 1713, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2277", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2275", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2274", "roomName": "Paris 143", "roomId": 1705, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2273", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2402", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "14:30", "toTime": "15:00", "kind": "Coffee Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2293", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2295", "roomName": "Maillot", "roomId": 1713, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2296", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2290", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2291", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2288", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2292", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2287", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2294", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2289", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63492", "roomName": "Paris 243", "roomId": 1712, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63490", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63491", "roomName": "Paris 142", "roomId": 1704, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63489", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2327", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "15:30", "toTime": "15:50", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12929", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12928", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12924", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12922", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12923", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12920", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12918", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12927", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12925", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12932", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "16:20", "toTime": "16:40", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2405", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "17:00", "toTime": "20:00", "kind": "Meet and Greet", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63611", "roomName": "Maillot", "roomId": 1713, "fromTime": "17:00", "toTime": "21:00", "kind": "The Voxx", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2334", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2329", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2332", "roomName": "Paris 241", "roomId": 1710, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2330", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2331", "roomName": "Paris 243", "roomId": 1712, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2333", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2337", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2336", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2339", "roomName": "Paris 241", "roomId": 1710, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2335", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2338", "roomName": "Paris 243", "roomId": 1712, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2340", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2343", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "06:00", "toTime": "07:00", "kind": "Breakfast", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2111", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2129", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2172", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2174", "roomName": "Paris 141", "roomId": 1703, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2170", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2177", "roomName": "Paris 241", "roomId": 1710, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2173", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2204", "roomName": "Paris 243", "roomId": 1712, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2206", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2205", "roomName": "Paris 142", "roomId": 1704, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2203", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2347", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "09:15", "toTime": "09:35", "kind": "Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2195", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2198", "roomName": "Maillot", "roomId": 1713, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2196", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2193", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2192", "roomName": "Paris 143", "roomId": 1705, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2190", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2191", "roomName": "Paris 141", "roomId": 1703, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2189", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2197", "roomName": "Paris 241", "roomId": 1710, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2194", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2349", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "10:20", "toTime": "11:30", "kind": "Lunch", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "21001", "roomName": "Lobby Neuilly", "roomId": 20951, "fromTime": "10:20", "toTime": "11:35", "kind": "Café Philoxx", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "70851", "roomName": "Maillot", "roomId": 1713, "fromTime": "10:30", "toTime": "11:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2231", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2227", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2223", "roomName": "Paris 143", "roomId": 1705, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2221", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2222", "roomName": "Paris 141", "roomId": 1703, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2220", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2228", "roomName": "Paris 241", "roomId": 1710, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2226", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2237", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2401", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "12:15", "toTime": "12:35", "kind": "Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2269", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2272", "roomName": "Maillot", "roomId": 1713, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2271", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2270", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2268", "roomName": "Paris 143", "roomId": 1705, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2267", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2286", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "13:20", "toTime": "13:40", "kind": "Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2284", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2283", "roomName": "Maillot", "roomId": 1713, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2282", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2281", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2280", "roomName": "Paris 143", "roomId": 1705, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2279", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2403", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "14:30", "toTime": "15:00", "kind": "Coffee Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12941", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12936", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12937", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12934", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12939", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12933", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12938", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12940", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12943", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "15:30", "toTime": "15:45", "kind": "Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2341", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:45", "toTime": "16:30", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2128", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2122", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2126", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2123", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2125", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2121", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2127", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2124", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2140", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2158", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2156", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2155", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2151", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2150", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2152", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2154", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2157", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2153", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2345", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "08:00", "toTime": "08:30", "kind": "Coffee Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2175", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2178", "roomName": "Maillot", "roomId": 1713, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2176", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2171", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2169", "roomName": "Paris 143", "roomId": 1705, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63610", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63606", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63608", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63604", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63607", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63603", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63609", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63605", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2259", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2258", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2260", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2257", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2256", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2255", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2245", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2246", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2248", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2247", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2239", "roomName": "Paris 243", "roomId": 1712, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2240", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2238", "roomName": "Paris 142", "roomId": 1704, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }]
    },
    {
        url: '/api/informations/current-user',
        method: 'get',
        response: "Fab test"
    },
    {
        url: '/api/slots/_current',
        method: 'get',
        response: [{ "slotId": "21001", "roomName": "Lobby Neuilly", "roomId": 20951, "fromTime": "10:20", "toTime": "11:35", "kind": "Café Philoxx", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2237", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2259", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2258", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2260", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2257", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2256", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2255", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2245", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2246", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2248", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2247", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2239", "roomName": "Paris 243", "roomId": 1712, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2240", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 }, { "slotId": "2238", "roomName": "Paris 142", "roomId": 1704, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 }]
    },
    {
        url: '/api/slots/_currentUser',
        method: 'get',
        response: [{ "day": "Wednesday", "slots": [{ "slotId": "63456", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 }, { "slotId": "1783", "roomName": "Maillot", "roomId": 1713, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 }, { "slotId": "1869", "roomName": "Maillot", "roomId": 1713, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 }], "currentActiveSlot": [{ "slotId": "2259", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }] }, { "day": "Thursday", "slots": [{ "slotId": "2101", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 }], "currentActiveSlot": [{ "slotId": "2259", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }] }, { "day": "Friday", "slots": [{ "slotId": "2259", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }], "currentActiveSlot": [{ "slotId": "2259", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }] }]
    },
    {

        url: '/api/tracks-infos',
        method: 'get',
        response: [{ "hitSlotId": "21001", "slot": { "slotId": "21001", "roomName": "Lobby Neuilly", "roomId": 20951, "fromTime": "10:20", "toTime": "11:35", "kind": "Café Philoxx", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2237", "slot": { "slotId": "2237", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": { "hitid": "cf14808c-ce8c-4eec-a1ca-62760e51f40c", "hitSlotId": "2237", "percentage": 100, "dateTime": 1709415673695, "userId": "fab-szn" }, "overflow": null }, { "hitSlotId": "2259", "slot": { "slotId": "2259", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": { "hitid": "0eb59c72-e696-44c0-8f16-ab6cce1e6662", "hitSlotId": "2259", "percentage": 80, "dateTime": 1708677167932, "userId": "fab-szn" }, "overflow": null }, { "hitSlotId": "2258", "slot": { "slotId": "2258", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": { "hitid": "d93ba4a6-0d4b-4749-ae7d-270d7a941985", "hitSlotId": "2258", "percentage": 30, "dateTime": 1709450938087, "userId": "fab-szn" }, "overflow": null }, { "hitSlotId": "2260", "slot": { "slotId": "2260", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2257", "slot": { "slotId": "2257", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2256", "slot": { "slotId": "2256", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": { "hitid": "39e2800a-4e32-4c51-8686-7282ecdaea73", "hitSlotId": "2256", "percentage": 50, "dateTime": 1709450949764, "userId": "fab-szn" }, "overflow": null }, { "hitSlotId": "2255", "slot": { "slotId": "2255", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2245", "slot": { "slotId": "2245", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2246", "slot": { "slotId": "2246", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2248", "slot": { "slotId": "2248", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2247", "slot": { "slotId": "2247", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2239", "slot": { "slotId": "2239", "roomName": "Paris 243", "roomId": 1712, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2240", "slot": { "slotId": "2240", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }, { "hitSlotId": "2238", "slot": { "slotId": "2238", "roomName": "Paris 142", "roomId": 1704, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 }, "hitInfo": null, "overflow": null }]




    },
    {

        url: 'api/admin/mapping',
        method: 'get',
        response: [{ "user": null, "slot": { "slotId": "62503", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "05:30", "toTime": "07:00", "kind": "Breakfast", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "62501", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "63456", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63451", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63455", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63458", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63459", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63457", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63453", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63454", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63452", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1752", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63468", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63465", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63462", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63463", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63466", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63464", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63467", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63460", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63461", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63469", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "08:00", "toTime": "08:30", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1780", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "1783", "roomName": "Maillot", "roomId": 1713, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1784", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1781", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1777", "roomName": "Paris 143", "roomId": 1705, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1776", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1778", "roomName": "Paris 141", "roomId": 1703, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1775", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1782", "roomName": "Paris 241", "roomId": 1710, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1779", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12902", "roomName": "Paris 243", "roomId": 1712, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12901", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12903", "roomName": "Paris 142", "roomId": 1704, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12904", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63483", "roomName": "Maillot", "roomId": 1713, "fromTime": "09:15", "toTime": "09:35", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "arn-her", "nom": "Heritier", "prenom": "Arnaud" }, "slot": { "slotId": "1791", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1794", "roomName": "Maillot", "roomId": 1713, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1793", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1788", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1787", "roomName": "Paris 143", "roomId": 1705, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1786", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1790", "roomName": "Paris 141", "roomId": 1703, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1785", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1789", "roomName": "Paris 241", "roomId": 1710, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1792", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63488", "roomName": "Maillot", "roomId": 1713, "fromTime": "10:20", "toTime": "11:30", "kind": "Lunch", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12917", "roomName": "Maillot", "roomId": 1713, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12916", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12913", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12909", "roomName": "Paris 143", "roomId": 1705, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12907", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12908", "roomName": "Paris 141", "roomId": 1703, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12905", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12914", "roomName": "Paris 241", "roomId": 1710, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12911", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63474", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63482", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63476", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63478", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63479", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63481", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63475", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63480", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63477", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1862", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1863", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1864", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1861", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1859", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1860", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1857", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1856", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1858", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1855", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1853", "roomName": "Paris 243", "roomId": 1712, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1852", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1851", "roomName": "Paris 142", "roomId": 1704, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1854", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1897", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "12:15", "toTime": "12:35", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1868", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "1869", "roomName": "Maillot", "roomId": 1713, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1870", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1867", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1866", "roomName": "Paris 143", "roomId": 1705, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1865", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1898", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "13:20", "toTime": "13:40", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": { "userId": "arn-her", "nom": "Heritier", "prenom": "Arnaud" }, "slot": { "slotId": "1876", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1875", "roomName": "Maillot", "roomId": 1713, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1874", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1873", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1872", "roomName": "Paris 143", "roomId": 1705, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1871", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1899", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "14:30", "toTime": "15:00", "kind": "Coffee Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1884", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1886", "roomName": "Maillot", "roomId": 1713, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1883", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1881", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1882", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1879", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1878", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1877", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1885", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1880", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63487", "roomName": "Paris 243", "roomId": 1712, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63484", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63485", "roomName": "Paris 142", "roomId": 1704, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63486", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1901", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "15:30", "toTime": "15:50", "kind": "Break", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1891", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1890", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1894", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1893", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1887", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1889", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1888", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1895", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "1892", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63612", "roomName": "Salle Ternes", "roomId": 1715, "fromTime": "17:00", "toTime": "21:00", "kind": "Speakers Dinner", "title": "---", "day": "Wednesday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2342", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "05:30", "toTime": "07:00", "kind": "Breakfast", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2101", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2120", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2118", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2113", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2112", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2116", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2114", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2115", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2119", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2117", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2139", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2149", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2148", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2146", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2145", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2143", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2142", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2141", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2147", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2144", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2344", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "08:00", "toTime": "08:30", "kind": "Coffee Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2168", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2165", "roomName": "Maillot", "roomId": 1713, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2166", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2159", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2160", "roomName": "Paris 143", "roomId": 1705, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2164", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2161", "roomName": "Paris 141", "roomId": 1703, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2163", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2167", "roomName": "Paris 241", "roomId": 1710, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2162", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2201", "roomName": "Paris 243", "roomId": 1712, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2200", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2202", "roomName": "Paris 142", "roomId": 1704, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2199", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2346", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "09:15", "toTime": "09:35", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2186", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2187", "roomName": "Maillot", "roomId": 1713, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2188", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2180", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2183", "roomName": "Paris 143", "roomId": 1705, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2181", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2182", "roomName": "Paris 141", "roomId": 1703, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2184", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2185", "roomName": "Paris 241", "roomId": 1710, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2179", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2348", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "10:20", "toTime": "11:30", "kind": "Lunch", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2232", "roomName": "Maillot", "roomId": 1713, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2215", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2214", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2213", "roomName": "Paris 143", "roomId": 1705, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2212", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2211", "roomName": "Paris 141", "roomId": 1703, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2207", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2216", "roomName": "Paris 241", "roomId": 1710, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2210", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63602", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63497", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63496", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63498", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63601", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63495", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63494", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63493", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63500", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2251", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2253", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2254", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2252", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2249", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2250", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2242", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2241", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2244", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2243", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2236", "roomName": "Paris 243", "roomId": 1712, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2235", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2234", "roomName": "Paris 142", "roomId": 1704, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2233", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2350", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "12:15", "toTime": "12:35", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2266", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2264", "roomName": "Maillot", "roomId": 1713, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2263", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2265", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2261", "roomName": "Paris 143", "roomId": 1705, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2262", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2285", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "13:20", "toTime": "13:40", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2276", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2278", "roomName": "Maillot", "roomId": 1713, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2277", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2275", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2274", "roomName": "Paris 143", "roomId": 1705, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2273", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2402", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "14:30", "toTime": "15:00", "kind": "Coffee Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2293", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2295", "roomName": "Maillot", "roomId": 1713, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2296", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2290", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2291", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2288", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2292", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2287", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2294", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2289", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63492", "roomName": "Paris 243", "roomId": 1712, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63490", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63491", "roomName": "Paris 142", "roomId": 1704, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63489", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "15:00", "toTime": "16:30", "kind": "Other", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2327", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "15:30", "toTime": "15:50", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12929", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12928", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12924", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12922", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12923", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12920", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12918", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12927", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12925", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:50", "toTime": "16:20", "kind": "Tools-in-Action", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12932", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "16:20", "toTime": "16:40", "kind": "Break", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2405", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "17:00", "toTime": "20:00", "kind": "Meet and Greet", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63611", "roomName": "Maillot", "roomId": 1713, "fromTime": "17:00", "toTime": "21:00", "kind": "The Voxx", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2334", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2329", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2332", "roomName": "Paris 241", "roomId": 1710, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2330", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2331", "roomName": "Paris 243", "roomId": 1712, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2333", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "17:00", "toTime": "18:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2337", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2336", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2339", "roomName": "Paris 241", "roomId": 1710, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2335", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2338", "roomName": "Paris 243", "roomId": 1712, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2340", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "18:00", "toTime": "19:00", "kind": "BOF", "title": "---", "day": "Thursday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2343", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "06:00", "toTime": "07:00", "kind": "Breakfast", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2111", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:00", "toTime": "07:25", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2129", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2172", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2174", "roomName": "Paris 141", "roomId": 1703, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2170", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2177", "roomName": "Paris 241", "roomId": 1710, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2173", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2204", "roomName": "Paris 243", "roomId": 1712, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2206", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2205", "roomName": "Paris 142", "roomId": 1704, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2203", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "08:30", "toTime": "10:30", "kind": "2H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2347", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "09:15", "toTime": "09:35", "kind": "Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2195", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2198", "roomName": "Maillot", "roomId": 1713, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2196", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2193", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2192", "roomName": "Paris 143", "roomId": 1705, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2190", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2191", "roomName": "Paris 141", "roomId": 1703, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2189", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2197", "roomName": "Paris 241", "roomId": 1710, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2194", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "09:35", "toTime": "10:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2349", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "10:20", "toTime": "11:30", "kind": "Lunch", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "21001", "roomName": "Lobby Neuilly", "roomId": 20951, "fromTime": "10:20", "toTime": "11:35", "kind": "Café Philoxx", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "70851", "roomName": "Maillot", "roomId": 1713, "fromTime": "10:30", "toTime": "11:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2231", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2227", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2223", "roomName": "Paris 143", "roomId": 1705, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2221", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2222", "roomName": "Paris 141", "roomId": 1703, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2220", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2228", "roomName": "Paris 241", "roomId": 1710, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2226", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "10:35", "toTime": "10:50", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2237", "roomName": "Neuilly 152", "roomId": 1701, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2401", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "12:15", "toTime": "12:35", "kind": "Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2269", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2272", "roomName": "Maillot", "roomId": 1713, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2271", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2270", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2268", "roomName": "Paris 143", "roomId": 1705, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2267", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "12:35", "toTime": "13:20", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2286", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "13:20", "toTime": "13:40", "kind": "Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2284", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2283", "roomName": "Maillot", "roomId": 1713, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2282", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2281", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2280", "roomName": "Paris 143", "roomId": 1705, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2279", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "13:40", "toTime": "14:25", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2403", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "14:30", "toTime": "15:00", "kind": "Coffee Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12941", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12936", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12937", "roomName": "Paris 143", "roomId": 1705, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12934", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12939", "roomName": "Paris 141", "roomId": 1703, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12933", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12938", "roomName": "Paris 241", "roomId": 1710, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12940", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "15:00", "toTime": "15:30", "kind": "Tools-in-Action", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "12943", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "15:30", "toTime": "15:45", "kind": "Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2341", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "15:45", "toTime": "16:30", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2128", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2122", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2126", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2123", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2125", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2121", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2127", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2124", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:00", "toTime": "07:20", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2140", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2158", "roomName": "Maillot", "roomId": 1713, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2156", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2155", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2151", "roomName": "Paris 143", "roomId": 1705, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2150", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2152", "roomName": "Paris 141", "roomId": 1703, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2154", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2157", "roomName": "Paris 241", "roomId": 1710, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2153", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "07:35", "toTime": "08:00", "kind": "Keynote", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2345", "roomName": "Hall Maillot", "roomId": 1714, "fromTime": "08:00", "toTime": "08:30", "kind": "Coffee Break", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2175", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2178", "roomName": "Maillot", "roomId": 1713, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2176", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2171", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2169", "roomName": "Paris 143", "roomId": 1705, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63610", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63606", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63608", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63604", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63607", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63603", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63609", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "63605", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:00", "toTime": "11:15", "kind": "Lunch Talk", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2259", "roomName": "Amphi bleu", "roomId": 1709, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2258", "roomName": "Maillot", "roomId": 1713, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2260", "roomName": "Paris 242AB", "roomId": 1711, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2257", "roomName": "Neuilly 252AB", "roomId": 1707, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2256", "roomName": "Paris 143", "roomId": 1705, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2255", "roomName": "Neuilly 153", "roomId": 1702, "fromTime": "11:30", "toTime": "12:15", "kind": "Conference", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2245", "roomName": "Paris 141", "roomId": 1703, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2246", "roomName": "Neuilly 151", "roomId": 1051, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2248", "roomName": "Paris 241", "roomId": 1710, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2247", "roomName": "Neuilly 251", "roomId": 1706, "fromTime": "11:30", "toTime": "14:30", "kind": "Deep Dive", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2239", "roomName": "Paris 243", "roomId": 1712, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, "slot": { "slotId": "2240", "roomName": "Neuilly 253", "roomId": 1708, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }, { "user": null, "slot": { "slotId": "2238", "roomName": "Paris 142", "roomId": 1704, "fromTime": "11:30", "toTime": "14:30", "kind": "3H Hands-on Lab", "title": "---", "day": "Friday", "yearSlot": 2024 } }]




    },
    {
        url: '/api/stats/slots',
        method: 'get',
        response: { "wednesday": { "09:30": [{ "slotId": "wednesday_b_amphi_09:30-12:30_2022", "kind": "University", "title": "Comprendre GraphQL", "percentage": 90, "roomid": "Amphi bleu", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_c_maillot_09:30-12:30_2022", "kind": "University", "title": "Spring Security - décodage et démystification 🕵️", "percentage": 70, "roomid": "Maillot", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_lab1_09:30-12:30_2022", "kind": "Hands-on Labs", "title": "Intégration à l’ère du cloud avec Camel Quarkus", "percentage": 30, "roomid": "Neuilly lab1", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_lab2_09:30-12:30_2022", "kind": "Hands-on Labs", "title": "Cassons des tokens JWT", "percentage": 100, "roomid": "Neuilly lab2", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_lab3_09:30-12:30_2022", "kind": "Hands-on Labs", "title": " Devenir svelte avec Svelte", "percentage": 100, "roomid": "Paris lab3", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_lab4_09:30-12:30_2022", "kind": "Hands-on Labs", "title": "Les tests unitaires Javascript", "percentage": 100, "roomid": "Paris lab4", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_par242AB_09:30-12:30_2022", "kind": "University", "title": "Remèdes aux oomkill", "percentage": 90, "roomid": "Paris 242AB ", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_par243_t_09:30-12:30_2022", "kind": "University", "title": "À la découverte des bases de données", "percentage": 90, "roomid": "Paris 243", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_neu253_t_09:30-12:30_2022", "kind": "University", "title": "Gradle: Donnez de l’amour à votre build", "percentage": 90, "roomid": "Neuilly 253", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_f_neu251_09:30-12:30_2022", "kind": "University", "title": "Ansible Ultimate Edition", "percentage": 90, "roomid": "Neuilly 251", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_d_par241_09:30-12:30_2022", "kind": "University", "title": "Théorie des Categories: vous la connaissez déjà.", "percentage": 70, "roomid": "Paris 241", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": "wednesday_e_neu252_09:30-12:30_2022", "kind": "University", "title": "La révolution (wasm) est incroyable parce que vraie", "percentage": 60, "roomid": "Neuilly 252AB", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }], "13:30": [{ "slotId": "wednesday_e_neu252_13:30-16:30_2022", "kind": "University", "title": "Architecturoplastie hexagonale d’un backend Node.js : Opération à code ouvert", "percentage": 90, "roomid": "Neuilly 252AB", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_neu253_t_13:30-16:30_2022", "kind": "University", "title": "Construction d’APIs Géographiques à base d’Open Data", "percentage": 70, "roomid": "Neuilly 253", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_lab1_13:30-16:30_2022", "kind": "Hands-on Labs", "title": "Découvrez la programmation au niveau type et relevez le challenge des types typescript !", "percentage": 100, "roomid": "Neuilly lab1", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_lab2_13:30-16:30_2022", "kind": "Hands-on Labs", "title": "Le chemin d’un petit modèle vers l’avenir en production", "percentage": 50, "roomid": "Neuilly lab2", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_lab3_13:30-16:30_2022", "kind": "Hands-on Labs", "title": "Déployer Vault et Consul dans Kubernetes", "percentage": 60, "roomid": "Paris lab3", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_lab4_13:30-16:30_2022", "kind": "Hands-on Labs", "title": "Testez vos compétences de refactoring sur la machine d’entrainement TCR !", "percentage": 70, "roomid": "Paris lab4", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_b_amphi_13:30-16:30_2022", "kind": "University", "title": "Loom nous Protègera-t-il du Braquage Temporel ?", "percentage": 90, "roomid": "Amphi bleu", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_c_maillot_13:30-16:30_2022", "kind": "University", "title": "Kafka: carte des pièges à l’usage des développeurs et des ops", "percentage": 90, "roomid": "Maillot", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_f_neu251_13:30-16:30_2022", "kind": "University", "title": "Sécuriser son cluster Kubernetes on-premise from scratch", "percentage": 70, "roomid": "Neuilly 251", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_d_par241_13:30-16:30_2022", "kind": "University", "title": "Java application security the hard way - a workshop for the serious developer", "percentage": 50, "roomid": "Paris 241", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_par242AB_13:30-16:30_2022", "kind": "University", "title": "Zero Trust : the new normal !", "percentage": 80, "roomid": "Paris 242AB ", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": "wednesday_par243_t_13:30-16:30_2022", "kind": "University", "title": "Initiation concrète à la compilation", "percentage": 90, "roomid": "Paris 243", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }], "17:00": [{ "slotId": "wednesday_b_amphi_17:00-17:30_2022", "kind": "Tools-in-Action", "title": "Pourquoi vous n’attirerez et ne retiendrez pas les femmes dans vos équipes tech !", "percentage": 80, "roomid": "Amphi bleu", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": "wednesday_c_maillot_17:00-17:30_2022", "kind": "Tools-in-Action", "title": "Gagner du temps en créant des extensions pour vos navigateurs", "percentage": 70, "roomid": "Maillot", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": "wednesday_f_neu251_17:00-17:30_2022", "kind": "Tools-in-Action", "title": "Du Chaos Engineering avec Litmus et Jenkins", "percentage": 90, "roomid": "Neuilly 251", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": "wednesday_d_par241_17:00-17:30_2022", "kind": "Tools-in-Action", "title": "Gitpod: la fin des frictions inutiles pour contribuer à un projet OSS ?", "percentage": 70, "roomid": "Paris 241", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": "wednesday_e_neu252_17:00-17:30_2022", "kind": "Tools-in-Action", "title": "Sécurisez votre pipeline de livraison multi-cloud avec HashiCorp Vault", "percentage": 70, "roomid": "Neuilly 252AB", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": "wednesday_par242AB_17:00-17:30_2022", "kind": "Tools-in-Action", "title": "Ajouter de A à Z une barre de recherche dans son application", "percentage": 60, "roomid": "Paris 242AB ", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": "wednesday_par243_t_17:00-17:30_2022", "kind": "Tools-in-Action", "title": "Ligne de Commande", "percentage": 90, "roomid": "Paris 243", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": "wednesday_neu253_t_17:00-17:30_2022", "kind": "Tools-in-Action", "title": "𝔸𝕛𝕠𝕦𝕥𝕖𝕫 du caractère à 𝕧𝕠𝕥𝕣𝕖 site 🚀", "percentage": 40, "roomid": "Neuilly 253", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }], "17:45": [{ "slotId": "wednesday_b_amphi_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Rendez l’agilité aux développeur(se)s !", "percentage": 70, "roomid": "Amphi bleu", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": "wednesday_c_maillot_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Bien maîtriser les Dev Tools de vos navigateurs", "percentage": 70, "roomid": "Maillot", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": "wednesday_f_neu251_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Into the flamegraph: From the primitives through advanced concepts", "percentage": 30, "roomid": "Neuilly 251", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": "wednesday_d_par241_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "AssemblyScript : TypeScript sous stéroïdes grâce à WebAssembly ?", "percentage": 40, "roomid": "Paris 241", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": "wednesday_e_neu252_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Type algébrique de données en Java 17", "percentage": 80, "roomid": "Neuilly 252AB", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": "wednesday_par242AB_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "(Re) Découvrir les outils UNIX", "percentage": 50, "roomid": "Paris 242AB ", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": "wednesday_par243_t_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Merci Keptn Obvious! SLOs observables avec Prometheus et Keptn", "percentage": 80, "roomid": "Paris 243", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": "wednesday_neu253_t_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Templates d’email: l’aventure dont vous êtes le héros", "percentage": 40, "roomid": "Neuilly 253", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }], "18:30": [{ "slotId": "wednesday_f_neu251_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Créer & distribuer un plugin pour Kubernetes en quelques minutes ? Easy ! 🙂", "percentage": 30, "roomid": "Neuilly 251", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": "wednesday_c_maillot_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Oubliez Docker", "percentage": 40, "roomid": "Maillot", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": "wednesday_d_par241_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Reprenez le contrôle de votre bash en devenant un ninja de la CLI ! 😎", "percentage": 40, "roomid": "Paris 241", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": "wednesday_par242AB_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Github Co-Pilot : Addictif ou Efficace ?", "percentage": 30, "roomid": "Paris 242AB ", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": "wednesday_par243_t_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "R2DBC = R2D2 + JDBC (enfin presque...)", "percentage": 40, "roomid": "Paris 243", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": "wednesday_neu253_t_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Materialize+Redpanda: streaming for the rest of us", "percentage": 40, "roomid": "Neuilly 253", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": "wednesday_e_neu252_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Construisons ensemble une application Micro-Frontend multi-frameworks avec Webpack 5 Module Federation", "percentage": 40, "roomid": "Neuilly 252AB", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": "wednesday_b_amphi_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "La sécurité avec les headers HTTP : Tour d’horizon des attaques et défenses possibles", "percentage": 60, "roomid": "Amphi bleu", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }] }, "friday": { "10:45": [{ "slotId": "friday_e_neu252_10:45-11:30_2022", "kind": "Conference", "title": "Développ(eur|euse) Senior avec 6 ans d’expérience", "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": "friday_lab2_10:45-14:15_2022", "kind": "Hands-on Labs", "title": "Event Storming par la Pratique", "percentage": 100, "roomid": "Neuilly lab2", "fromtime": "10:45", "totime": "14:15", "day": "friday" }, { "slotId": "friday_lab1_10:45-14:15_2022", "kind": "Hands-on Labs", "title": "Atelier Computer Vision avec TensorFlow ", "percentage": 70, "roomid": "Neuilly lab1", "fromtime": "10:45", "totime": "14:15", "day": "friday" }, { "slotId": "friday_lab3_10:45-14:15_2022", "kind": "Hands-on Labs", "title": "Gérer ses environnements de travail avec Nix.", "percentage": 40, "roomid": "Paris lab3", "fromtime": "10:45", "totime": "14:15", "day": "friday" }, { "slotId": "friday_lab4_10:45-14:15_2022", "kind": "Hands-on Labs", "title": "Découpe mon monolithe", "percentage": 90, "roomid": "Paris lab4", "fromtime": "10:45", "totime": "14:15", "day": "friday" }, { "slotId": "friday_b_amphi_10:45-11:30_2022", "kind": "Conference", "title": "Migrer de Spring MVC à Spring Web Flux", "percentage": 70, "roomid": "Amphi bleu", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": "friday_c_maillot_10:45-11:30_2022", "kind": "Conference", "title": "Comment OpenTelemetry peut transformer votre monitoring en unifiant vos logs/metrics/traces", "percentage": 100, "roomid": "Maillot", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": "friday_par242AB_10:45-11:30_2022", "kind": "Conference", "title": "Microservices", "percentage": 90, "roomid": "Paris 242AB ", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": "friday_d_par241_10:45-11:30_2022", "kind": "Conference", "title": "Kafka Streams @ Carrefour : du big data à la vitesse de l’éclair", "percentage": 100, "roomid": "Paris 241", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": "friday_par243_t_10:45-11:30_2022", "kind": "Conference", "title": "React dans tous ses états", "percentage": 100, "roomid": "Paris 243", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": "friday_neu253_t_10:45-11:30_2022", "kind": "Conference", "title": "Exploring Linux Memory Usage and IO Performance in Cloud Native Applications", "percentage": 100, "roomid": "Neuilly 253", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": "friday_f_neu251_10:45-11:30_2022", "kind": "Conference", "title": "10 ans de Devoxx FR et de Java", "percentage": 100, "roomid": "Neuilly 251", "fromtime": "10:45", "totime": "11:30", "day": "friday" }], "11:45": [{ "slotId": "friday_b_amphi_11:45-12:30_2022", "kind": "Conference", "title": "Doctolib a besoin d’une base de données plus puissante. Ok", "percentage": 100, "roomid": "Amphi bleu", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": "friday_c_maillot_11:45-12:30_2022", "kind": "Conference", "title": "Notre cerveau est \"\"null\"\"! Quelques biais cognitifs appliqués au métier de dev...\"", "percentage": 100, "roomid": "Maillot", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": "friday_par242AB_11:45-12:30_2022", "kind": "Conference", "title": "La scale-up", "percentage": 70, "roomid": "Paris 242AB ", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": "friday_e_neu252_11:45-12:30_2022", "kind": "Conference", "title": "À la découverte des Docker Dev Environments", "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": "friday_d_par241_11:45-12:30_2022", "kind": "Conference", "title": "The Art of Java Type Patterns", "percentage": 70, "roomid": "Paris 241", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": "friday_f_neu251_11:45-12:30_2022", "kind": "Conference", "title": "Les parsers", "percentage": 70, "roomid": "Neuilly 251", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": "friday_par243_t_11:45-12:30_2022", "kind": "Conference", "title": "Quarkus Renarde 🦊♥ : un framework Web old-school au goût du jour", "percentage": 80, "roomid": "Paris 243", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": "friday_neu253_t_11:45-12:30_2022", "kind": "Conference", "title": "L’IA pour le bon usage des médicaments", "percentage": 70, "roomid": "Neuilly 253", "fromtime": "11:45", "totime": "12:30", "day": "friday" }], "13:00": [{ "slotId": "friday_d_par241_13:00-13:15_2022", "kind": "Quickie", "title": "Mon site déjà en ligne doit être accessible", "percentage": 50, "roomid": "Paris 241", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": "friday_c_maillot_13:00-13:15_2022", "kind": "Quickie", "title": "Tests Cucumber: légendes et réalité", "percentage": 70, "roomid": "Maillot", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": "friday_par242AB_13:00-13:15_2022", "kind": "Quickie", "title": "Les Java Array Lists ne sont pas magiques", "percentage": 50, "roomid": "Paris 242AB ", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": "friday_e_neu252_13:00-13:15_2022", "kind": "Quickie", "title": " Profiler un pod dans Kubernetes avec kube-flame", "percentage": 30, "roomid": "Neuilly 252AB", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": "friday_f_neu251_13:00-13:15_2022", "kind": "Quickie", "title": "Depuis 2 ans", "percentage": 60, "roomid": "Neuilly 251", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": "friday_par243_t_13:00-13:15_2022", "kind": "Quickie", "title": "Record du monde - Tour d’horizon et cas d’utilisation des records", "percentage": 80, "roomid": "Paris 243", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": "friday_neu253_t_13:00-13:15_2022", "kind": "Quickie", "title": "Go Generics", "percentage": 20, "roomid": "Neuilly 253", "fromtime": "13:00", "totime": "13:15", "day": "friday" }], "13:30": [{ "slotId": "friday_b_amphi_13:30-14:15_2022", "kind": "Conference", "title": "Mieux maitriser TLS", "percentage": 90, "roomid": "Amphi bleu", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": "friday_c_maillot_13:30-14:15_2022", "kind": "Conference", "title": "Les lois universelles de la performance", "percentage": 90, "roomid": "Maillot", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": "friday_par242AB_13:30-14:15_2022", "kind": "Conference", "title": "Le secret des illoominaties ", "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": "friday_e_neu252_13:30-14:15_2022", "kind": "Conference", "title": "Rendez vos interfaces fiables en faisant aimer les tests à votre équipe !", "percentage": 80, "roomid": "Neuilly 252AB", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": "friday_d_par241_13:30-14:15_2022", "kind": "Conference", "title": "Père Castor 🐻", "percentage": 90, "roomid": "Paris 241", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": "friday_f_neu251_13:30-14:15_2022", "kind": "Conference", "title": "Dates et heures à l’horizon ? Fuyez… ou venez découvrir tous les pièges qu’elles vous tendent !", "percentage": 60, "roomid": "Neuilly 251", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": "friday_par243_t_13:30-14:15_2022", "kind": "Conference", "title": "Art & Entropie: Du Chaos dans ton Frontend", "percentage": 70, "roomid": "Paris 243", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": "friday_neu253_t_13:30-14:15_2022", "kind": "Conference", "title": "Réception d’image satellite 🛰️ avec un Raspberry", "percentage": 100, "roomid": "Neuilly 253", "fromtime": "13:30", "totime": "14:15", "day": "friday" }], "14:30": [{ "slotId": "friday_b_amphi_14:30-15:15_2022", "kind": "Conference", "title": "Comment permettre 100 millions de logins sans interruption de service ? Betclic raconte son Euro 2020 de football", "percentage": 70, "roomid": "Amphi bleu", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": "friday_c_maillot_14:30-15:15_2022", "kind": "Conference", "title": "Mob programming", "percentage": 80, "roomid": "Maillot", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": "friday_par242AB_14:30-15:15_2022", "kind": "Conference", "title": "En quête du Clean Code avec Sonar", "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": "friday_e_neu252_14:30-15:15_2022", "kind": "Conference", "title": "Valhalla: To the Hell and Back", "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": "friday_d_par241_14:30-15:15_2022", "kind": "Conference", "title": "Qu’avons nous appris après un an passé à développer des opérateurs Kubernetes ?", "percentage": 90, "roomid": "Paris 241", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": "friday_f_neu251_14:30-15:15_2022", "kind": "Conference", "title": "Enrichir son application web sans toucher au code source", "percentage": 70, "roomid": "Neuilly 251", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": "friday_par243_t_14:30-15:15_2022", "kind": "Conference", "title": "La signature électronique vue par des développeurs Java.", "percentage": 90, "roomid": "Paris 243", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": "friday_neu253_t_14:30-15:15_2022", "kind": "Conference", "title": "Première application mobile Flutter ? Ne faites pas les mêmes erreurs que nous !", "percentage": 100, "roomid": "Neuilly 253", "fromtime": "14:30", "totime": "15:15", "day": "friday" }], "15:30": [{ "slotId": "friday_par242AB_15:30-16:15_2022", "kind": "Conference", "title": "Cryptanalyse de la machine Enigma : entre espionnage et mathématiques", "percentage": 60, "roomid": "Paris 242AB ", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": "friday_b_amphi_15:30-16:15_2022", "kind": "Conference", "title": "Architecture microservices et cohérence des données : mais on fait comment pour de vrai ?", "percentage": 100, "roomid": "Amphi bleu", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": "friday_c_maillot_15:30-16:15_2022", "kind": "Conference", "title": "CI/CD", "percentage": 80, "roomid": "Maillot", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": "friday_e_neu252_15:30-16:15_2022", "kind": "Conference", "title": "Comprendre le comportement des français", "percentage": 60, "roomid": "Neuilly 252AB", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": "friday_d_par241_15:30-16:15_2022", "kind": "Conference", "title": "Ce que les développeurs doivent savoir sur les index", "percentage": 100, "roomid": "Paris 241", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": "friday_f_neu251_15:30-16:15_2022", "kind": "Conference", "title": "Développement sans fron-Tiers", "percentage": 30, "roomid": "Neuilly 251", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": "friday_par243_t_15:30-16:15_2022", "kind": "Conference", "title": "Ensemble Programming Toolbox", "percentage": 40, "roomid": "Paris 243", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": "friday_neu253_t_15:30-16:15_2022", "kind": "Conference", "title": "Kotlin", "percentage": 40, "roomid": "Neuilly 253", "fromtime": "15:30", "totime": "16:15", "day": "friday" }], "16:45": [{ "slotId": "friday_par242AB_16:45-17:30_2022", "kind": "Conference", "title": "Les fonctions (récursives) décortiquées", "percentage": 20, "roomid": "Paris 242AB ", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": "friday_e_neu252_16:45-17:30_2022", "kind": "Conference", "title": "Pourquoi DevOps ne tient pas ses promesses ?", "percentage": 60, "roomid": "Neuilly 252AB", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": "friday_f_neu251_16:45-17:30_2022", "kind": "Conference", "title": "Créer un jeu cross plateforme... en Rust!", "percentage": 80, "roomid": "Neuilly 251", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": "friday_d_par241_16:45-17:30_2022", "kind": "Conference", "title": "400 endpoints d’API et 2000 types : genèse et utilisation du nouveau client Java pour Elasticsearch", "percentage": 30, "roomid": "Paris 241", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": "friday_b_amphi_16:45-17:30_2022", "kind": "Conference", "title": "La fin des architectures en couches avec l’approche hexagonale", "percentage": 80, "roomid": "Amphi bleu", "fromtime": "16:45", "totime": "17:30", "day": "friday" }] }, "thursday": { "09:00": [{ "slotId": "thursday_b_amphi_09:00-09:20_2022", "kind": "Keynote", "title": "La Keynote de Devoxx France 2022 - 10 ans déjà", "percentage": 100, "roomid": "Amphi bleu", "fromtime": "09:00", "totime": "09:20", "day": "thursday" }], "09:25": [{ "slotId": "thursday_b_amphi_09:25-09:45_2022", "kind": "Keynote", "title": "10 ans de Tech à travers le podcast Niptech", "percentage": 100, "roomid": "Amphi bleu", "fromtime": "09:25", "totime": "09:45", "day": "thursday" }], "09:50": [{ "slotId": "thursday_b_amphi_09:50-10:10_2022", "kind": "Keynote", "title": "Slow.tech : il est urgent de hacker le système ! ", "percentage": 100, "roomid": "Amphi bleu", "fromtime": "09:50", "totime": "10:10", "day": "thursday" }], "10:45": [{ "slotId": "thursday_lab1_10:45-14:15_2022", "kind": "Hands-on Labs", "title": "Contract testing : la thérapie pour une meilleure communication", "percentage": 30, "roomid": "Neuilly lab1", "fromtime": "10:45", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_lab2_10:45-14:15_2022", "kind": "Hands-on Labs", "title": "Le jeu du frigo - petit exercice de pensée systémique", "percentage": 90, "roomid": "Neuilly lab2", "fromtime": "10:45", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_lab3_10:45-14:15_2022", "kind": "Hands-on Labs", "title": "Compiler-Driven Development avec Elm", "percentage": 10, "roomid": "Paris lab3", "fromtime": "10:45", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_lab4_10:45-14:15_2022", "kind": "Hands-on Labs", "title": "Exploration de Java 17", "percentage": 100, "roomid": "Paris lab4", "fromtime": "10:45", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_b_amphi_10:45-11:30_2022", "kind": "Conference", "title": "OAUTH 2.1 expliqué simplement (même si tu n’es pas dev) !", "percentage": 90, "roomid": "Amphi bleu", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": "thursday_c_maillot_10:45-11:30_2022", "kind": "Conference", "title": "Développer des applications observables pour la production", "percentage": 100, "roomid": "Maillot", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": "thursday_par242AB_10:45-11:30_2022", "kind": "Conference", "title": "Et si les micro-services n’avaient rien à voir avec la technique ?", "percentage": 90, "roomid": "Paris 242AB ", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": "thursday_e_neu252_10:45-11:30_2022", "kind": "Conference", "title": "Comprendre les enjeux de consommation de ressource et d’énergie dans le secteur numérique", "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": "thursday_d_par241_10:45-11:30_2022", "kind": "Conference", "title": "Micro Frontends REX - Diviser pour mieux régner !", "percentage": 100, "roomid": "Paris 241", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": "thursday_f_neu251_10:45-11:30_2022", "kind": "Conference", "title": "Rust pour les humains", "percentage": 100, "roomid": "Neuilly 251", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": "thursday_par243_t_10:45-11:30_2022", "kind": "Conference", "title": "JOOQ", "percentage": 80, "roomid": "Paris 243", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": "thursday_neu253_t_10:45-11:30_2022", "kind": "Conference", "title": " Qu’est-ce que l’InnerSource ? Comment ça se met en place et pourquoi ça va améliorer votre IT ... mais pas que ?", "percentage": 100, "roomid": "Neuilly 253", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }], "11:45": [{ "slotId": "thursday_e_neu252_11:45-12:30_2022", "kind": "Conference", "title": "Et si on faisait le tour de CORS ? ⛵", "percentage": 90, "roomid": "Neuilly 252AB", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": "thursday_neu253_t_11:45-12:30_2022", "kind": "Conference", "title": "Licences open source : entre guerre de clochers et radicalité ", "percentage": 90, "roomid": "Neuilly 253", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": "thursday_b_amphi_11:45-12:30_2022", "kind": "Conference", "title": "Model-Driven Design", "percentage": 100, "roomid": "Amphi bleu", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": "thursday_c_maillot_11:45-12:30_2022", "kind": "Conference", "title": "Comparing Native Java REST API Frameworks", "percentage": 40, "roomid": "Maillot", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": "thursday_d_par241_11:45-12:30_2022", "kind": "Conference", "title": "Le (dés)amour des tests web", "percentage": 100, "roomid": "Paris 241", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": "thursday_f_neu251_11:45-12:30_2022", "kind": "Conference", "title": "Dans les coulisses du \"\"Cloud\"\"\"", "percentage": 100, "roomid": "Neuilly 251", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": "thursday_par243_t_11:45-12:30_2022", "kind": "Conference", "title": "Jetpack Compose: UI toolkit pour Android et Desktop", "percentage": 70, "roomid": "Paris 243", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": "thursday_par242AB_11:45-12:30_2022", "kind": "Conference", "title": "D’un hack au datamesh", "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }], "13:00": [{ "slotId": "thursday_c_maillot_13:00-13:15_2022", "kind": "Quickie", "title": "Simplifiez vos revues de code avec le rebase interactif", "percentage": 80, "roomid": "Maillot", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": "thursday_par242AB_13:00-13:15_2022", "kind": "Quickie", "title": "Equity for software engineers", "percentage": 30, "roomid": "Paris 242AB ", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": "thursday_par243_t_13:00-13:15_2022", "kind": "Quickie", "title": "Introduction à REMIX", "percentage": 50, "roomid": "Paris 243", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": "thursday_neu253_t_13:00-13:15_2022", "kind": "Quickie", "title": "Fuzzing en Go", "percentage": 60, "roomid": "Neuilly 253", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": "thursday_e_neu252_13:00-13:15_2022", "kind": "Quickie", "title": "J’ai presque fini ! Pourquoi notre cerveau nous aide pas sur ce coup là...", "percentage": 80, "roomid": "Neuilly 252AB", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": "thursday_d_par241_13:00-13:15_2022", "kind": "Quickie", "title": "Major migrations made easy", "percentage": 30, "roomid": "Paris 241", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": "thursday_f_neu251_13:00-13:15_2022", "kind": "Quickie", "title": "Rendu 3D", "percentage": 30, "roomid": "Neuilly 251", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }], "13:30": [{ "slotId": "thursday_c_maillot_13:30-14:15_2022", "kind": "Conference", "title": "Traiter 1 million de messages par CPU par Go de mémoire avec Quarkus et Microprofile reactive messaging kafka à Décathlon", "percentage": 100, "roomid": "Maillot", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_b_amphi_13:30-14:15_2022", "kind": "Conference", "title": "Dois-je migrer en Reactive et comment ?", "percentage": 90, "roomid": "Amphi bleu", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_par242AB_13:30-14:15_2022", "kind": "Conference", "title": "Construire et déployer son application avec Argo dans Kubernetes", "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_e_neu252_13:30-14:15_2022", "kind": "Conference", "title": "Protéger son organisation des attaques par le système de build", "percentage": 80, "roomid": "Neuilly 252AB", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_d_par241_13:30-14:15_2022", "kind": "Conference", "title": "Comment Q travaille-t-il avec James Bond", "percentage": 100, "roomid": "Paris 241", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_f_neu251_13:30-14:15_2022", "kind": "Conference", "title": "Des Z’Individus et des Z’Interactions", "percentage": 100, "roomid": "Neuilly 251", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_par243_t_13:30-14:15_2022", "kind": "Conference", "title": "What’s cooking in Maven?", "percentage": 30, "roomid": "Paris 243", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": "thursday_neu253_t_13:30-14:15_2022", "kind": "Conference", "title": "entiers", "percentage": 100, "roomid": "Neuilly 253", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }], "14:30": [{ "slotId": "thursday_b_amphi_14:30-15:15_2022", "kind": "Conference", "title": "Etre développeur: grandir et se développer", "percentage": 80, "roomid": "Amphi bleu", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": "thursday_c_maillot_14:30-15:15_2022", "kind": "Conference", "title": "Connaissez-vous vraiment JWT ?", "percentage": 90, "roomid": "Maillot", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": "thursday_par242AB_14:30-15:15_2022", "kind": "Conference", "title": "De OUI.sncf à SNCF Connect", "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": "thursday_e_neu252_14:30-15:15_2022", "kind": "Conference", "title": "Vers une culture où tout le monde est responsable de l’indisponibilité", "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": "thursday_d_par241_14:30-15:15_2022", "kind": "Conference", "title": "Data scientists vs. développeurs: des métiers (très!) différents", "percentage": 70, "roomid": "Paris 241", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": "thursday_f_neu251_14:30-15:15_2022", "kind": "Conference", "title": "Cloud public", "percentage": 100, "roomid": "Neuilly 251", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": "thursday_par243_t_14:30-15:15_2022", "kind": "Conference", "title": "Ciel ! Mon Kubernetes mine des bitcoins !", "percentage": 100, "roomid": "Paris 243", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": "thursday_neu253_t_14:30-15:15_2022", "kind": "Conference", "title": "Micronaut AOT: optimiser vos applications pour le JIT et GraalVM", "percentage": 100, "roomid": "Neuilly 253", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }], "15:30": [{ "slotId": "thursday_par243_t_15:30-16:15_2022", "kind": "Conference", "title": "Java Next - From Amber to Loom", "percentage": 100, "roomid": "Paris 243", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": "thursday_lab2_15:30-18:30_2022", "kind": "Hands-on Labs", "title": "Construire des applications performantes avec Apache Cassandra", "percentage": 90, "roomid": "Neuilly lab2", "fromtime": "15:30", "totime": "18:30", "day": "thursday" }, { "slotId": "thursday_lab3_15:30-18:30_2022", "kind": "Hands-on Labs", "title": "Compétition - hacker un coffre fort et repartir avec le contenu", "percentage": 100, "roomid": "Paris lab3", "fromtime": "15:30", "totime": "18:30", "day": "thursday" }, { "slotId": "thursday_lab4_15:30-18:30_2022", "kind": "Hands-on Labs", "title": "Architecture hexagonale par la pratique avec Spring ", "percentage": 100, "roomid": "Paris lab4", "fromtime": "15:30", "totime": "18:30", "day": "thursday" }, { "slotId": "thursday_b_amphi_15:30-16:15_2022", "kind": "Conference", "title": "Log4shell", "percentage": 60, "roomid": "Amphi bleu", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": "thursday_c_maillot_15:30-16:15_2022", "kind": "Conference", "title": "Comment j’ai aidé ma fille à lire avec le machine learning", "percentage": 90, "roomid": "Maillot", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": "thursday_par242AB_15:30-16:15_2022", "kind": "Conference", "title": "Save the date !", "percentage": 90, "roomid": "Paris 242AB ", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": "thursday_e_neu252_15:30-16:15_2022", "kind": "Conference", "title": "Coder pour l’Éternité", "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": "thursday_d_par241_15:30-16:15_2022", "kind": "Conference", "title": "Eliminez la complexité de Kubernetes avec LENS !", "percentage": 90, "roomid": "Paris 241", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": "thursday_f_neu251_15:30-16:15_2022", "kind": "Conference", "title": "Continuous delivery on premise : Gerrit", "percentage": 90, "roomid": "Neuilly 251", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": "thursday_neu253_t_15:30-16:15_2022", "kind": "Conference", "title": "Anatomie d’une base SQL distribuée (YugabyteDB)", "percentage": 100, "roomid": "Neuilly 253", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": "thursday_lab1_15:30-18:30_2022", "kind": "Hands-on Labs", "title": "GitOps ", "percentage": 90, "roomid": "Neuilly lab1", "fromtime": "15:30", "totime": "18:30", "day": "thursday" }], "16:45": [{ "slotId": "thursday_par243_t_16:45-17:30_2022", "kind": "Conference", "title": "Analytique temp réel pour vos utilisateurs avec Apache Pinot", "percentage": 90, "roomid": "Paris 243", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": "thursday_f_neu251_16:45-17:30_2022", "kind": "Conference", "title": "Apprendre la musique - developer edition", "percentage": 80, "roomid": "Neuilly 251", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": "thursday_b_amphi_16:45-17:30_2022", "kind": "Conference", "title": "S’affranchir de la Pyramide des Tests", "percentage": 100, "roomid": "Amphi bleu", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": "thursday_c_maillot_16:45-17:30_2022", "kind": "Conference", "title": "Montée de version sans interruption", "percentage": 60, "roomid": "Maillot", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": "thursday_par242AB_16:45-17:30_2022", "kind": "Conference", "title": "Apprendre à coder en maternelle", "percentage": 80, "roomid": "Paris 242AB ", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": "thursday_e_neu252_16:45-17:30_2022", "kind": "Conference", "title": "Petit guide pratique pour commencer un design system", "percentage": 60, "roomid": "Neuilly 252AB", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": "thursday_d_par241_16:45-17:30_2022", "kind": "Conference", "title": "Cybersécurité et générateurs de nombres aléatoires", "percentage": 90, "roomid": "Paris 241", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": "thursday_neu253_t_16:45-17:30_2022", "kind": "Conference", "title": "Comment orchestrer une flotte de 200 clusters Kubernetes sur Microsoft Azure ?", "percentage": 90, "roomid": "Neuilly 253", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }], "17:45": [{ "slotId": "thursday_f_neu251_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Comment Betclic utilise son datalake pour générer des tests de charge et simuler des évènements sportifs ?", "percentage": 70, "roomid": "Neuilly 251", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": "thursday_b_amphi_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Git", "percentage": 60, "roomid": "Amphi bleu", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": "thursday_c_maillot_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "The unknowns of JUnit 5", "percentage": 30, "roomid": "Maillot", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": "thursday_d_par241_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Tailwind ou le futur du CSS", "percentage": 80, "roomid": "Paris 241", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": "thursday_e_neu252_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Accéder à mon cerveau par une API", "percentage": 90, "roomid": "Neuilly 252AB", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": "thursday_par243_t_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Dekorate: l’outil pour deployer tes microservices sur Kubernetes", "percentage": 80, "roomid": "Paris 243", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": "thursday_neu253_t_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "Après la censure", "percentage": 50, "roomid": "Neuilly 253", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": "thursday_par242AB_17:45-18:15_2022", "kind": "Tools-in-Action", "title": "⚡️ Vite⚡️the Webpack killer", "percentage": 60, "roomid": "Paris 242AB ", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }], "18:30": [{ "slotId": "thursday_e_neu252_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Le DOM Testing : Testez vos applications front plus facilement et efficacement !", "percentage": 20, "roomid": "Neuilly 252AB", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": "thursday_b_amphi_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "REX: TDD avec TestContainers", "percentage": 70, "roomid": "Amphi bleu", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": "thursday_f_neu251_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Building your first malicious chrome extension 😈", "percentage": 60, "roomid": "Neuilly 251", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": "thursday_d_par241_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Exploiter facilement des fonctions natives avec le Projet Panama depuis Java", "percentage": 40, "roomid": "Paris 241", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": "thursday_par243_t_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Jouer à Minecraft avec une IA générée par GPT-3", "percentage": 100, "roomid": "Paris 243", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": "thursday_neu253_t_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Coder avec Crystal pour ne pas perdre la boule", "percentage": 10, "roomid": "Neuilly 253", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": "thursday_par242AB_18:30-19:00_2022", "kind": "Tools-in-Action", "title": "Spécifier ses API asynchrones avec AsyncAPI", "percentage": 50, "roomid": "Paris 242AB ", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }] } }
    },
    {
        url: '/api/stats/slots/_filling',
        method: 'get',
        response: { "labels": [10, 100, 20], "percentages": [2, 2, 35] }
    },
    {
        url: '/infos',
        method: 'get',
        response: "devLocal"
    },

    {
        url: '/api/mapping',
        method: 'get',
        response: ({ query }) => [{ "user": { "userId": { "value": "car-chu" }, "nom": { "value": "Chuong" }, "prenom": { "value": "Caroline" } }, "slot": { "slotId": { "value": "wednesday_par242AB_09:30-12:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "University", "title": "Remèdes aux oomkill, warm-ups, et lenteurs pour des conteneurs JVM" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "wednesday_par243_t_09:30-12:30" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "University", "title": "À la découverte des bases de données" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "wednesday_neu253_t_09:30-12:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "University", "title": "Gradle: Donnez de l’amour à votre build, il vous le rendra!" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "gau-de" }, "nom": { "value": "de Saint-Martin Lacace" }, "prenom": { "value": "Gautier" } }, "slot": { "slotId": { "value": "wednesday_b_amphi_13:30-16:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "University", "title": "Loom nous Protègera-t-il du Braquage Temporel ?" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "gui-lou" }, "nom": { "value": "Lours" }, "prenom": { "value": "Guillaume" } }, "slot": { "slotId": { "value": "wednesday_c_maillot_13:30-16:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "University", "title": "Kafka: carte des pièges à l’usage des développeurs et des ops" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "wednesday_f_neu251_13:30-16:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "University", "title": "Sécuriser son cluster Kubernetes on-premise from scratch" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "wednesday_d_par241_13:30-16:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "University", "title": "Java application security the hard way - a workshop for the serious developer" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "ste-bra" }, "nom": { "value": "Bran" }, "prenom": { "value": "Stephane" } }, "slot": { "slotId": { "value": "wednesday_par242AB_13:30-16:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "University", "title": "Zero Trust : the new normal !" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "wednesday_par243_t_13:30-16:30" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "University", "title": "Initiation concrète à la compilation" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "ben-dis" }, "nom": { "value": "Dissert" }, "prenom": { "value": "Benoît" } }, "slot": { "slotId": { "value": "wednesday_c_maillot_17:00-17:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "17:00" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Gagner du temps en créant des extensions pour vos navigateurs" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "wednesday_f_neu251_17:00-17:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "17:00" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Du Chaos Engineering avec Litmus et Jenkins" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "wednesday_d_par241_17:00-17:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "17:00" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Gitpod: la fin des frictions inutiles pour contribuer à un projet OSS ?" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "wednesday_e_neu252_17:00-17:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "17:00" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Sécurisez votre pipeline de livraison multi-cloud avec HashiCorp Vault" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "eri-lem" }, "nom": { "value": "Lemerdy" }, "prenom": { "value": "Eric" } }, "slot": { "slotId": { "value": "wednesday_par242AB_17:00-17:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "17:00" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Ajouter de A à Z une barre de recherche dans son application" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "wednesday_par243_t_17:00-17:30" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "17:00" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Ligne de Commande, Kotlin et Star Wars : Présenter PicoCLI avec le combo gagnant" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "wednesday_neu253_t_17:00-17:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "17:00" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "𝔸𝕛𝕠𝕦𝕥𝕖𝕫 du caractère à 𝕧𝕠𝕥𝕣𝕖 site 🚀" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "adr-ysn" }, "nom": { "value": "Ysnel" }, "prenom": { "value": "Adrien" } }, "slot": { "slotId": { "value": "wednesday_b_amphi_17:45-18:15" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Rendez l'agilité aux développeur(se)s !" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "ben-dis" }, "nom": { "value": "Dissert" }, "prenom": { "value": "Benoît" } }, "slot": { "slotId": { "value": "wednesday_c_maillot_17:45-18:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Bien maîtriser les Dev Tools de vos navigateurs" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "wednesday_f_neu251_17:45-18:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Into the flamegraph: From the primitives through advanced concepts" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "wednesday_d_par241_17:45-18:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "AssemblyScript : TypeScript sous stéroïdes grâce à WebAssembly ?" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "wednesday_e_neu252_17:45-18:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Type algébrique de données en Java 17" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "car-chu" }, "nom": { "value": "Chuong" }, "prenom": { "value": "Caroline" } }, "slot": { "slotId": { "value": "wednesday_par242AB_17:45-18:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "(Re) Découvrir les outils UNIX" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "wednesday_par243_t_17:45-18:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Merci Keptn Obvious! SLOs observables avec Prometheus et Keptn" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "wednesday_neu253_t_17:45-18:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Templates d'email: l'aventure dont vous êtes le héros" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "ben-dis" }, "nom": { "value": "Dissert" }, "prenom": { "value": "Benoît" } }, "slot": { "slotId": { "value": "wednesday_c_maillot_18:30-19:00" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Oubliez Docker, appelez moi Compose" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "wednesday_d_par241_18:30-19:00" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Reprenez le contrôle de votre bash en devenant un ninja de la CLI ! 😎" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "car-chu" }, "nom": { "value": "Chuong" }, "prenom": { "value": "Caroline" } }, "slot": { "slotId": { "value": "wednesday_par242AB_18:30-19:00" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Github Co-Pilot : Addictif ou Efficace ?" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "wednesday_par243_t_18:30-19:00" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "R2DBC = R2D2 + JDBC (enfin presque...)" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "cha-sab" }, "nom": { "value": "Sabourdin" }, "prenom": { "value": "Charles" } }, "slot": { "slotId": { "value": "thursday_b_amphi_10:45-11:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "OAUTH 2.1 expliqué simplement (même si tu n'es pas dev) !" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "wednesday_neu253_t_18:30-19:00" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Materialize+Redpanda: streaming for the rest of us" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "thursday_c_maillot_10:45-11:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Développer des applications observables pour la production" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gui-lou" }, "nom": { "value": "Lours" }, "prenom": { "value": "Guillaume" } }, "slot": { "slotId": { "value": "thursday_par242AB_10:45-11:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Et si les micro-services n'avaient rien à voir avec la technique ?" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kev-lau" }, "nom": { "value": "Laurent" }, "prenom": { "value": "Kevin" } }, "slot": { "slotId": { "value": "thursday_e_neu252_10:45-11:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Comprendre les enjeux de consommation de ressource et d’énergie dans le secteur numérique" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "thursday_d_par241_10:45-11:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Micro Frontends REX - Diviser pour mieux régner !" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "thursday_f_neu251_10:45-11:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Rust pour les humains" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "thursday_par243_t_10:45-11:30" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "JOOQ, joy of SQL" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "eri-lem" }, "nom": { "value": "Lemerdy" }, "prenom": { "value": "Eric" } }, "slot": { "slotId": { "value": "thursday_neu253_t_10:45-11:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": " Qu'est-ce que l'InnerSource ? Comment ça se met en place et pourquoi ça va améliorer votre IT ... mais pas que ?" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "cha-sab" }, "nom": { "value": "Sabourdin" }, "prenom": { "value": "Charles" } }, "slot": { "slotId": { "value": "thursday_b_amphi_11:45-12:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Model-Driven Design" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "thursday_c_maillot_11:45-12:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Comparing Native Java REST API Frameworks" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "thursday_d_par241_11:45-12:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Le (dés)amour des tests web" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "thursday_f_neu251_11:45-12:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Dans les coulisses du \"Cloud\"" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "thursday_par243_t_11:45-12:30" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Jetpack Compose: UI toolkit pour Android et Desktop" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kaj-ras" }, "nom": { "value": "Rashid" }, "prenom": { "value": "Kajin" } }, "slot": { "slotId": { "value": "thursday_c_maillot_13:00-13:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Simplifiez vos revues de code avec le rebase interactif" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "jea-sir" }, "nom": { "value": "Sirot" }, "prenom": { "value": "Jean-Christophe" } }, "slot": { "slotId": { "value": "thursday_par242AB_13:00-13:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Equity for software engineers" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "wednesday_f_neu251_09:30-12:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "University", "title": "Ansible Ultimate Edition" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "wednesday_d_par241_09:30-12:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "University", "title": "Théorie des Categories: vous la connaissez déjà." }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "cha-sab" }, "nom": { "value": "Sabourdin" }, "prenom": { "value": "Charles" } }, "slot": { "slotId": { "value": "wednesday_e_neu252_09:30-12:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "University", "title": "La révolution (wasm) est incroyable parce que vraie" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "thursday_par243_t_13:00-13:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Introduction à REMIX" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "thursday_neu253_t_13:00-13:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Fuzzing en Go" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gui-lou" }, "nom": { "value": "Lours" }, "prenom": { "value": "Guillaume" } }, "slot": { "slotId": { "value": "thursday_b_amphi_13:30-14:15" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Dois-je migrer en Reactive et comment ?" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "jea-sir" }, "nom": { "value": "Sirot" }, "prenom": { "value": "Jean-Christophe" } }, "slot": { "slotId": { "value": "thursday_par242AB_13:30-14:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Construire et déployer son application avec Argo dans Kubernetes" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "thursday_e_neu252_13:30-14:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Protéger son organisation des attaques par le système de build" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "thursday_d_par241_13:30-14:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Comment Q travaille-t-il avec James Bond, ou  comment faire de l'IA agile dans le milieu du renseignement." }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gau-de" }, "nom": { "value": "de Saint-Martin Lacace" }, "prenom": { "value": "Gautier" } }, "slot": { "slotId": { "value": "thursday_f_neu251_13:30-14:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Des Z’Individus et des Z’Interactions, ou l’inclusion des (neuro) atypiques dans les équipes." }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "thursday_par243_t_13:30-14:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "What's cooking in Maven?" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "thursday_neu253_t_13:30-14:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "entiers, virgules flottantes ou représentations exotiques : parlons d'élégance" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gui-lou" }, "nom": { "value": "Lours" }, "prenom": { "value": "Guillaume" } }, "slot": { "slotId": { "value": "thursday_b_amphi_14:30-15:15" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Etre développeur: grandir et se développer" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "car-chu" }, "nom": { "value": "Chuong" }, "prenom": { "value": "Caroline" } }, "slot": { "slotId": { "value": "thursday_c_maillot_14:30-15:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Connaissez-vous vraiment JWT ?" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "jea-sir" }, "nom": { "value": "Sirot" }, "prenom": { "value": "Jean-Christophe" } }, "slot": { "slotId": { "value": "thursday_par242AB_14:30-15:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "De OUI.sncf à SNCF Connect, 10 ans de mobile natif à Flutter" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "thursday_e_neu252_14:30-15:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Vers une culture où tout le monde est responsable de l'indisponibilité" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "thursday_d_par241_14:30-15:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Data scientists vs. développeurs: des métiers (très!) différents" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gau-de" }, "nom": { "value": "de Saint-Martin Lacace" }, "prenom": { "value": "Gautier" } }, "slot": { "slotId": { "value": "thursday_f_neu251_14:30-15:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Cloud public, mais données privées !" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "thursday_par243_t_14:30-15:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Ciel ! Mon Kubernetes mine des bitcoins !" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "thursday_neu253_t_14:30-15:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Micronaut AOT: optimiser vos applications pour le JIT et GraalVM" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gui-lou" }, "nom": { "value": "Lours" }, "prenom": { "value": "Guillaume" } }, "slot": { "slotId": { "value": "thursday_b_amphi_15:30-16:15" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Log4shell, c'est la faute à la fondation Apache ?" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "car-chu" }, "nom": { "value": "Chuong" }, "prenom": { "value": "Caroline" } }, "slot": { "slotId": { "value": "thursday_c_maillot_15:30-16:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Comment j'ai aidé ma fille à lire avec le machine learning" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "jea-sir" }, "nom": { "value": "Sirot" }, "prenom": { "value": "Jean-Christophe" } }, "slot": { "slotId": { "value": "thursday_par242AB_15:30-16:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Save the date !" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "thursday_e_neu252_15:30-16:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Coder pour l'Éternité, comprendre le développement sur la blockchain Ethereum." }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "thursday_d_par241_15:30-16:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Eliminez la complexité de Kubernetes avec LENS !" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gau-de" }, "nom": { "value": "de Saint-Martin Lacace" }, "prenom": { "value": "Gautier" } }, "slot": { "slotId": { "value": "thursday_f_neu251_15:30-16:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Continuous delivery on premise : Gerrit, Jenkins et Sonarqube entrent dans un bar..." }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "thursday_neu253_t_15:30-16:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Anatomie d'une base SQL distribuée (YugabyteDB)" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "thursday_b_amphi_16:45-17:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "S'affranchir de la Pyramide des Tests" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "thursday_c_maillot_16:45-17:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Montée de version sans interruption" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "thursday_par242AB_16:45-17:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Apprendre à coder en maternelle, sans écran" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kev-lau" }, "nom": { "value": "Laurent" }, "prenom": { "value": "Kevin" } }, "slot": { "slotId": { "value": "thursday_e_neu252_16:45-17:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Petit guide pratique pour commencer un design system" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "thursday_d_par241_16:45-17:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Cybersécurité et générateurs de nombres aléatoires" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "thursday_neu253_t_16:45-17:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Comment orchestrer une flotte de 200 clusters Kubernetes sur Microsoft Azure ?" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "thursday_b_amphi_17:45-18:15" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Git, back to the future " }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "thursday_c_maillot_17:45-18:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "The unknowns of JUnit 5" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "thursday_d_par241_17:45-18:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Tailwind ou le futur du CSS" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kev-lau" }, "nom": { "value": "Laurent" }, "prenom": { "value": "Kevin" } }, "slot": { "slotId": { "value": "thursday_e_neu252_17:45-18:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Accéder à mon cerveau par une API" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "thursday_par243_t_17:45-18:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Dekorate: l'outil pour deployer tes microservices sur Kubernetes" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "thursday_neu253_t_17:45-18:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Après la censure, l’auto censure… mais là c’est drôle, éducatif et avec de l’IA" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "thursday_b_amphi_18:30-19:00" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "REX: TDD avec TestContainers" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kaj-ras" }, "nom": { "value": "Rashid" }, "prenom": { "value": "Kajin" } }, "slot": { "slotId": { "value": "thursday_f_neu251_18:30-19:00" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Building your first malicious chrome extension 😈" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "thursday_d_par241_18:30-19:00" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Exploiter facilement des fonctions natives avec le Projet Panama depuis Java" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "thursday_par243_t_18:30-19:00" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Jouer à Minecraft avec une IA générée par GPT-3" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "thursday_neu253_t_18:30-19:00" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Coder avec Crystal pour ne pas perdre la boule" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "friday_b_amphi_10:45-11:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Migrer de Spring MVC à Spring Web Flux" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "friday_c_maillot_10:45-11:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Comment OpenTelemetry peut transformer votre monitoring en unifiant vos logs/metrics/traces" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "ben-dis" }, "nom": { "value": "Dissert" }, "prenom": { "value": "Benoît" } }, "slot": { "slotId": { "value": "friday_par242AB_10:45-11:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Microservices, DDD et bootstrapping pour faire un départ lancé." }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "friday_d_par241_10:45-11:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Kafka Streams @ Carrefour : du big data à la vitesse de l'éclair" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "thursday_e_neu252_13:00-13:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "J'ai presque fini ! Pourquoi notre cerveau nous aide pas sur ce coup là..." }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "thursday_d_par241_13:00-13:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Major migrations made easy" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gau-de" }, "nom": { "value": "de Saint-Martin Lacace" }, "prenom": { "value": "Gautier" } }, "slot": { "slotId": { "value": "thursday_f_neu251_13:00-13:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Rendu 3D, la grande illusion expliquée" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "cha-sab" }, "nom": { "value": "Sabourdin" }, "prenom": { "value": "Charles" } }, "slot": { "slotId": { "value": "thursday_b_amphi_09:25-09:45" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "09:25" }, "toTime": { "value": "09:45" }, "talk": { "talkType": "Keynote", "title": "10 ans de Tech à travers le podcast Niptech" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "cha-sab" }, "nom": { "value": "Sabourdin" }, "prenom": { "value": "Charles" } }, "slot": { "slotId": { "value": "thursday_b_amphi_09:50-10:10" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "09:50" }, "toTime": { "value": "10:10" }, "talk": { "talkType": "Keynote", "title": "Slow.tech : il est urgent de hacker le système ! " }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "gui-lou" }, "nom": { "value": "Lours" }, "prenom": { "value": "Guillaume" } }, "slot": { "slotId": { "value": "thursday_par242AB_11:45-12:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "D'un hack au datamesh, l'évolution du data engineering chez Leboncoin" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "thursday_par242AB_17:45-18:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "⚡️ Vite⚡️the Webpack killer" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "thursday_par242AB_18:30-19:00" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Spécifier ses API asynchrones avec AsyncAPI" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ste-bra" }, "nom": { "value": "Bran" }, "prenom": { "value": "Stephane" } }, "slot": { "slotId": { "value": "friday_par243_t_10:45-11:30" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "React dans tous ses états" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "kaj-ras" }, "nom": { "value": "Rashid" }, "prenom": { "value": "Kajin" } }, "slot": { "slotId": { "value": "friday_neu253_t_10:45-11:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Exploring Linux Memory Usage and IO Performance in Cloud Native Applications" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "friday_b_amphi_11:45-12:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Doctolib a besoin d'une base de données plus puissante. Ok, mais laquelle?" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "friday_c_maillot_11:45-12:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Notre cerveau est \"null\"! Quelques biais cognitifs appliqués au métier de dev..." }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "ben-dis" }, "nom": { "value": "Dissert" }, "prenom": { "value": "Benoît" } }, "slot": { "slotId": { "value": "friday_par242AB_11:45-12:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "La scale-up, l’autonomie et le sous-marin nucléaire" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "friday_e_neu252_11:45-12:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "À la découverte des Docker Dev Environments" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "friday_d_par241_11:45-12:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "The Art of Java Type Patterns" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "friday_f_neu251_11:45-12:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Les parsers, ou comment exploiter efficacement du texte brut" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "ste-bra" }, "nom": { "value": "Bran" }, "prenom": { "value": "Stephane" } }, "slot": { "slotId": { "value": "friday_par243_t_11:45-12:30" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Quarkus Renarde 🦊♥ : un framework Web old-school au goût du jour" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "kaj-ras" }, "nom": { "value": "Rashid" }, "prenom": { "value": "Kajin" } }, "slot": { "slotId": { "value": "friday_neu253_t_11:45-12:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "L'IA pour le bon usage des médicaments" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "friday_c_maillot_13:00-13:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Tests Cucumber: légendes et réalité" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "friday_par242AB_13:00-13:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Les Java Array Lists ne sont pas magiques" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "friday_e_neu252_13:00-13:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": " Profiler un pod dans Kubernetes avec kube-flame" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "friday_f_neu251_13:00-13:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Depuis 2 ans, je suis la seule à lire mes mails ! (ou presque)" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "friday_par243_t_13:00-13:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Record du monde - Tour d’horizon et cas d’utilisation des records" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "friday_neu253_t_13:00-13:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Go Generics" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "gui-lou" }, "nom": { "value": "Lours" }, "prenom": { "value": "Guillaume" } }, "slot": { "slotId": { "value": "friday_b_amphi_13:30-14:15" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Mieux maitriser TLS, OpenSSL et les certificats" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "hor-gon" }, "nom": { "value": "Gonzalez" }, "prenom": { "value": "Horacio" } }, "slot": { "slotId": { "value": "friday_c_maillot_13:30-14:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Les lois universelles de la performance" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "friday_par242AB_13:30-14:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Le secret des illoominaties " }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "friday_e_neu252_13:30-14:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Rendez vos interfaces fiables en faisant aimer les tests à votre équipe !" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "gau-de" }, "nom": { "value": "de Saint-Martin Lacace" }, "prenom": { "value": "Gautier" } }, "slot": { "slotId": { "value": "friday_d_par241_13:30-14:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Père Castor 🐻, raconte nous une histoire (d'OPS)" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "friday_f_neu251_13:30-14:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Dates et heures à l'horizon ? Fuyez… ou venez découvrir tous les pièges qu'elles vous tendent !" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "friday_par243_t_13:30-14:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Art & Entropie: Du Chaos dans ton Frontend" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "car-chu" }, "nom": { "value": "Chuong" }, "prenom": { "value": "Caroline" } }, "slot": { "slotId": { "value": "friday_neu253_t_13:30-14:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Réception d'image satellite 🛰️ avec un Raspberry" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "hor-gon" }, "nom": { "value": "Gonzalez" }, "prenom": { "value": "Horacio" } }, "slot": { "slotId": { "value": "friday_c_maillot_14:30-15:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Mob programming, la véritable approche du développement en équipe" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "friday_par242AB_14:30-15:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "En quête du Clean Code avec Sonar, 20 000 lieues sous un océan de code!" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "friday_e_neu252_14:30-15:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Valhalla: To the Hell and Back" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "gau-de" }, "nom": { "value": "de Saint-Martin Lacace" }, "prenom": { "value": "Gautier" } }, "slot": { "slotId": { "value": "friday_d_par241_14:30-15:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Qu'avons nous appris après un an passé à développer des opérateurs Kubernetes ?" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "friday_f_neu251_14:30-15:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Enrichir son application web sans toucher au code source, c'est possible grâce au nouveau standard Web Extension API !" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "friday_par243_t_14:30-15:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "La signature électronique vue par des développeurs Java." }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "car-chu" }, "nom": { "value": "Chuong" }, "prenom": { "value": "Caroline" } }, "slot": { "slotId": { "value": "friday_neu253_t_14:30-15:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Première application mobile Flutter ? Ne faites pas les mêmes erreurs que nous !" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "friday_b_amphi_15:30-16:15" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Architecture microservices et cohérence des données : mais on fait comment pour de vrai ?" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "hor-gon" }, "nom": { "value": "Gonzalez" }, "prenom": { "value": "Horacio" } }, "slot": { "slotId": { "value": "friday_c_maillot_15:30-16:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "CI/CD, le divorce serait-il prononcé ?" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "friday_e_neu252_15:30-16:15" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Comprendre le comportement des français, c'est possible grâce à la data chez Leboncoin " }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "friday_d_par241_15:30-16:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Ce que les développeurs doivent savoir sur les index" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "eri-lem" }, "nom": { "value": "Lemerdy" }, "prenom": { "value": "Eric" } }, "slot": { "slotId": { "value": "friday_f_neu251_15:30-16:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Développement sans fron-Tiers" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "friday_par243_t_15:30-16:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Ensemble Programming Toolbox" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "friday_neu253_t_15:30-16:15" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Kotlin, Java 4..18, Code Coverage and their best friend — bytecode: scandals, intrigues, investigations" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "friday_b_amphi_16:45-17:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "La fin des architectures en couches avec l’approche hexagonale" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "wednesday_e_neu252_18:30-19:00" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Construisons ensemble une application Micro-Frontend multi-frameworks avec Webpack 5 Module Federation" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "adr-ysn" }, "nom": { "value": "Ysnel" }, "prenom": { "value": "Adrien" } }, "slot": { "slotId": { "value": "wednesday_b_amphi_18:30-19:00" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "La sécurité avec les headers HTTP : Tour d’horizon des attaques et défenses possibles" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "cha-sab" }, "nom": { "value": "Sabourdin" }, "prenom": { "value": "Charles" } }, "slot": { "slotId": { "value": "thursday_b_amphi_09:00-09:20" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "09:00" }, "toTime": { "value": "09:20" }, "talk": { "talkType": "Keynote", "title": "La Keynote de Devoxx France 2022 - 10 ans déjà" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "cha-sab" }, "nom": { "value": "Sabourdin" }, "prenom": { "value": "Charles" } }, "slot": { "slotId": { "value": "thursday_lab1_15:30-18:30" }, "roomId": { "value": "Neuilly lab1" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "18:30" }, "talk": { "talkType": "Hands-on Labs", "title": "GitOps , une mise en situation un peu réaliste sur Kubernetes avec Flux" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ben-dis" }, "nom": { "value": "Dissert" }, "prenom": { "value": "Benoît" } }, "slot": { "slotId": { "value": "thursday_lab3_15:30-18:30" }, "roomId": { "value": "Paris lab3" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "18:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Compétition - hacker un coffre fort et repartir avec le contenu" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_f_neu251_20:00-20:50" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "20:00" }, "toTime": { "value": "20:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "Moving Java Forward...Together" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_e_neu252_20:00-20:50" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "20:00" }, "toTime": { "value": "20:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "10 ans déjà ! Devoxx France , l'envers du décors" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_par242AB_20:00-20:50" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "20:00" }, "toTime": { "value": "20:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "Mais au fait DevRel c'est vraiment qu'un lanceur de paillettes ?" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_par243_t_20:00-20:50" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "20:00" }, "toTime": { "value": "20:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "BOF Docker & Kubernetes" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_neu253_t_20:00-20:50" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "20:00" }, "toTime": { "value": "20:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "Jenkins Community" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_f_neu251_21:00-21:50" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "21:00" }, "toTime": { "value": "21:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "Gradle BoF" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_d_par241_21:00-21:50" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "21:00" }, "toTime": { "value": "21:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "Ethereum meetup" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_e_neu252_21:00-21:50" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "21:00" }, "toTime": { "value": "21:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "Duchess France" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_par242AB_21:00-21:50" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "21:00" }, "toTime": { "value": "21:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "Il y a des cloud en Europe ?" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_par243_t_21:00-21:50" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "21:00" }, "toTime": { "value": "21:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "BOF TypeScript" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_neu253_t_21:00-21:50" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "21:00" }, "toTime": { "value": "21:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "Maven BoF" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "friday_b_amphi_09:00-09:20" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "09:00" }, "toTime": { "value": "09:20" }, "talk": { "talkType": "Keynote", "title": "Futurospective digitale : le futur est-il encore ce qu’il était ?" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "friday_b_amphi_09:50-10:10" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "09:50" }, "toTime": { "value": "10:10" }, "talk": { "talkType": "Keynote", "title": "La quête d'une gouvernance collaborative du web" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "friday_f_neu251_10:45-11:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "10 ans de Devoxx FR et de Java" }, "day": { "value": "friday" } } }, { "user": null, "slot": { "slotId": { "value": "friday_lobby_neuilly_13:00-14:15" }, "roomId": { "value": "" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Autres formats de conférence", "title": "Café Philoxx" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "ste-bra" }, "nom": { "value": "Bran" }, "prenom": { "value": "Stephane" } }, "slot": { "slotId": { "value": "friday_par242AB_15:30-16:15" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Cryptanalyse de la machine Enigma : entre espionnage et mathématiques" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "ste-bra" }, "nom": { "value": "Bran" }, "prenom": { "value": "Stephane" } }, "slot": { "slotId": { "value": "friday_par242AB_16:45-17:30" }, "roomId": { "value": "Paris 242AB " }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Les fonctions (récursives) décortiquées" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "friday_e_neu252_16:45-17:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Pourquoi DevOps ne tient pas ses promesses ?" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "eri-lem" }, "nom": { "value": "Lemerdy" }, "prenom": { "value": "Eric" } }, "slot": { "slotId": { "value": "friday_f_neu251_16:45-17:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Créer un jeu cross plateforme... en Rust!" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "friday_neu253_t_16:45-17:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "De l’OutOfMemory à l’OutOfSerenity, quand un consultant devient chef d’entreprise." }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "mau-cah" }, "nom": { "value": "Cahuet Laurent" }, "prenom": { "value": "Maude" } }, "slot": { "slotId": { "value": "friday_e_neu252_17:45-18:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:30" }, "talk": { "talkType": "Conference", "title": "Les Cast Codeurs en 🪑  et en 🦴 " }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "adr-ysn" }, "nom": { "value": "Ysnel" }, "prenom": { "value": "Adrien" } }, "slot": { "slotId": { "value": "wednesday_b_amphi_09:30-12:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "University", "title": "Comprendre GraphQL" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "ben-dis" }, "nom": { "value": "Dissert" }, "prenom": { "value": "Benoît" } }, "slot": { "slotId": { "value": "wednesday_c_maillot_09:30-12:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "University", "title": "Spring Security - décodage et démystification 🕵️" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "wednesday_lab1_09:30-12:30" }, "roomId": { "value": "Neuilly lab1" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Intégration à l'ère du cloud avec Camel Quarkus" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "fra-kal" }, "nom": { "value": "Kalb" }, "prenom": { "value": "Franck" } }, "slot": { "slotId": { "value": "wednesday_lab2_09:30-12:30" }, "roomId": { "value": "Neuilly lab2" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Cassons des tokens JWT" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "wednesday_lab3_09:30-12:30" }, "roomId": { "value": "Paris lab3" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Hands-on Labs", "title": " Devenir svelte avec Svelte" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "wednesday_lab4_09:30-12:30" }, "roomId": { "value": "Paris lab4" }, "fromTime": { "value": "09:30" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Les tests unitaires Javascript, vers l'infini et au-delà " }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "kev-lau" }, "nom": { "value": "Laurent" }, "prenom": { "value": "Kevin" } }, "slot": { "slotId": { "value": "wednesday_e_neu252_13:30-16:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "University", "title": "Architecturoplastie hexagonale d’un backend Node.js : Opération à code ouvert" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "bab-cis" }, "nom": { "value": "Ciss" }, "prenom": { "value": "Babacar" } }, "slot": { "slotId": { "value": "wednesday_neu253_t_13:30-16:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "University", "title": "Construction d'APIs Géographiques à base d'Open Data, PostgreSQL & PostGIS" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "wednesday_lab1_13:30-16:30" }, "roomId": { "value": "Neuilly lab1" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Découvrez la programmation au niveau type et relevez le challenge des types typescript !" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "ala-reg" }, "nom": { "value": "Regnier" }, "prenom": { "value": "Alain" } }, "slot": { "slotId": { "value": "wednesday_lab2_13:30-16:30" }, "roomId": { "value": "Neuilly lab2" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Le chemin d’un petit modèle vers l’avenir en production" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "jea-sir" }, "nom": { "value": "Sirot" }, "prenom": { "value": "Jean-Christophe" } }, "slot": { "slotId": { "value": "wednesday_lab3_13:30-16:30" }, "roomId": { "value": "Paris lab3" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Déployer Vault et Consul dans Kubernetes" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "jea-sir" }, "nom": { "value": "Sirot" }, "prenom": { "value": "Jean-Christophe" } }, "slot": { "slotId": { "value": "wednesday_lab4_13:30-16:30" }, "roomId": { "value": "Paris lab4" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "16:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Testez vos compétences de refactoring sur la machine d'entrainement TCR !" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "est-lan" }, "nom": { "value": "Landry" }, "prenom": { "value": "Estelle" } }, "slot": { "slotId": { "value": "wednesday_f_neu251_18:30-19:00" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Créer & distribuer un plugin pour Kubernetes en quelques minutes ? Easy ! 🙂" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "thursday_lab1_10:45-14:15" }, "roomId": { "value": "Neuilly lab1" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Contract testing : la thérapie pour une meilleure communication" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fab-szn" }, "nom": { "value": "Sznajderman" }, "prenom": { "value": "Fabrice" } }, "slot": { "slotId": { "value": "thursday_lab2_10:45-14:15" }, "roomId": { "value": "Neuilly lab2" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Le jeu du frigo - petit exercice de pensée systémique" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ste-bra" }, "nom": { "value": "Bran" }, "prenom": { "value": "Stephane" } }, "slot": { "slotId": { "value": "thursday_lab3_10:45-14:15" }, "roomId": { "value": "Paris lab3" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Compiler-Driven Development avec Elm" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ste-bra" }, "nom": { "value": "Bran" }, "prenom": { "value": "Stephane" } }, "slot": { "slotId": { "value": "thursday_lab4_10:45-14:15" }, "roomId": { "value": "Paris lab4" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Exploration de Java 17" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kev-lau" }, "nom": { "value": "Laurent" }, "prenom": { "value": "Kevin" } }, "slot": { "slotId": { "value": "thursday_e_neu252_11:45-12:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Et si on faisait le tour de CORS ? ⛵" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "eri-lem" }, "nom": { "value": "Lemerdy" }, "prenom": { "value": "Eric" } }, "slot": { "slotId": { "value": "thursday_neu253_t_11:45-12:30" }, "roomId": { "value": "Neuilly 253" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Licences open source : entre guerre de clochers et radicalité " }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "fla-leb" }, "nom": { "value": "Lebarbe" }, "prenom": { "value": "Flavien" } }, "slot": { "slotId": { "value": "thursday_par243_t_15:30-16:15" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "16:15" }, "talk": { "talkType": "Conference", "title": "Java Next - From Amber to Loom, from Panama to Valhalla" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "cha-sab" }, "nom": { "value": "Sabourdin" }, "prenom": { "value": "Charles" } }, "slot": { "slotId": { "value": "thursday_lab2_15:30-18:30" }, "roomId": { "value": "Neuilly lab2" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "18:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Construire des applications performantes avec Apache Cassandra" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "ben-dis" }, "nom": { "value": "Dissert" }, "prenom": { "value": "Benoît" } }, "slot": { "slotId": { "value": "thursday_lab4_15:30-18:30" }, "roomId": { "value": "Paris lab4" }, "fromTime": { "value": "15:30" }, "toTime": { "value": "18:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Architecture hexagonale par la pratique avec Spring " }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kaj-ras" }, "nom": { "value": "Rashid" }, "prenom": { "value": "Kajin" } }, "slot": { "slotId": { "value": "thursday_f_neu251_16:45-17:30" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Apprendre la musique - developer edition" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "mar-ter" }, "nom": { "value": "Terrier" }, "prenom": { "value": "Marie" } }, "slot": { "slotId": { "value": "thursday_par243_t_16:45-17:30" }, "roomId": { "value": "Paris 243" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "Analytique temp réel pour vos utilisateurs avec Apache Pinot" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kev-lau" }, "nom": { "value": "Laurent" }, "prenom": { "value": "Kevin" } }, "slot": { "slotId": { "value": "thursday_e_neu252_18:30-19:00" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "18:30" }, "toTime": { "value": "19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Le DOM Testing : Testez vos applications front plus facilement et efficacement !" }, "day": { "value": "thursday" } } }, { "user": null, "slot": { "slotId": { "value": "thursday_d_par241_20:00-20:50" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "20:00" }, "toTime": { "value": "20:50" }, "talk": { "talkType": "BOF (Bird of a Feather)", "title": "BOF Meetup Search and Data" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "adr-ysn" }, "nom": { "value": "Ysnel" }, "prenom": { "value": "Adrien" } }, "slot": { "slotId": { "value": "wednesday_b_amphi_17:00-17:30" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "17:00" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Pourquoi vous n'attirerez et ne retiendrez pas les femmes dans vos équipes tech !" }, "day": { "value": "wednesday" } } }, { "user": { "userId": { "value": "car-chu" }, "nom": { "value": "Chuong" }, "prenom": { "value": "Caroline" } }, "slot": { "slotId": { "value": "thursday_c_maillot_13:30-14:15" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "13:30" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Conference", "title": "Traiter 1 million de messages par CPU par Go de mémoire avec Quarkus et Microprofile reactive messaging kafka à Décathlon" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "kaj-ras" }, "nom": { "value": "Rashid" }, "prenom": { "value": "Kajin" } }, "slot": { "slotId": { "value": "thursday_f_neu251_17:45-18:15" }, "roomId": { "value": "Neuilly 251" }, "fromTime": { "value": "17:45" }, "toTime": { "value": "18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Comment Betclic utilise son datalake pour générer des tests de charge et simuler des évènements sportifs ?" }, "day": { "value": "thursday" } } }, { "user": { "userId": { "value": "dam-vie" }, "nom": { "value": "Viennot" }, "prenom": { "value": "Damien" } }, "slot": { "slotId": { "value": "friday_e_neu252_10:45-11:30" }, "roomId": { "value": "Neuilly 252AB" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Développ(eur|euse) Senior avec 6 ans d’expérience, et après ?" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "eri-lem" }, "nom": { "value": "Lemerdy" }, "prenom": { "value": "Eric" } }, "slot": { "slotId": { "value": "friday_lab1_10:45-14:15" }, "roomId": { "value": "Neuilly lab1" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Atelier Computer Vision avec TensorFlow " }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "eri-lem" }, "nom": { "value": "Lemerdy" }, "prenom": { "value": "Eric" } }, "slot": { "slotId": { "value": "friday_lab2_10:45-14:15" }, "roomId": { "value": "Neuilly lab2" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Event Storming par la Pratique" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "friday_lab3_10:45-14:15" }, "roomId": { "value": "Paris lab3" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Gérer ses environnements de travail avec Nix." }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "dav-dew" }, "nom": { "value": "Dewalle" }, "prenom": { "value": "David" } }, "slot": { "slotId": { "value": "friday_lab4_10:45-14:15" }, "roomId": { "value": "Paris lab4" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Découpe mon monolithe" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "gau-de" }, "nom": { "value": "de Saint-Martin Lacace" }, "prenom": { "value": "Gautier" } }, "slot": { "slotId": { "value": "friday_d_par241_13:00-13:15" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "13:00" }, "toTime": { "value": "13:15" }, "talk": { "talkType": "Quickie", "title": "Mon site déjà en ligne doit être accessible, je fais comment ?" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "gui-lou" }, "nom": { "value": "Lours" }, "prenom": { "value": "Guillaume" } }, "slot": { "slotId": { "value": "friday_b_amphi_14:30-15:15" }, "roomId": { "value": "Amphi bleu" }, "fromTime": { "value": "14:30" }, "toTime": { "value": "15:15" }, "talk": { "talkType": "Conference", "title": "Comment permettre 100 millions de logins sans interruption de service ? Betclic raconte son Euro 2020 de football" }, "day": { "value": "friday" } } }, { "user": { "userId": { "value": "gab-kas" }, "nom": { "value": "Kastenbaum" }, "prenom": { "value": "Gabriel" } }, "slot": { "slotId": { "value": "friday_d_par241_16:45-17:30" }, "roomId": { "value": "Paris 241" }, "fromTime": { "value": "16:45" }, "toTime": { "value": "17:30" }, "talk": { "talkType": "Conference", "title": "400 endpoints d'API et 2000 types : genèse et utilisation du nouveau client Java pour Elasticsearch" }, "day": { "value": "friday" } } }]
    },
    {
        url: '/api/tracks-infos/63456',
        method: 'get',
        response: {"hitSlotId":"2237","slot":{"slotId":"1790","roomName":"Neuilly 152","roomId":1701,"fromTime":"11:30","toTime":"14:30","kind":"3H Hands-on Lab","title":"Travaillez vos réflexions architecturales en kata","day":"Friday","yearSlot":2024},"hitInfo":{"hitid":"cf14808c-ce8c-4eec-a1ca-62760e51f40c","hitSlotId":"2237","percentage":100,"dateTime":1709415673695,"userId":"fab-szn"},"overflow":null}
        
    },
    {
        url: '/api/users',
        method: 'get',
        response: ({ query }) => {
            return [{ "userId": "arn-her", "nom": "Heritier", "prenom": "Arnaud" }, { "userId": "fab-szn", "nom": "Sznajderman", "prenom": "Fabrice" }, { "userId": "fre-cam", "nom": "Camblor", "prenom": "Frédéric" }, { "userId": "adr-ysn", "nom": "Ysnel", "prenom": "Adrien" }, { "userId": "ala-reg", "nom": "Regnier", "prenom": "Alain" }, { "userId": "ben-dis", "nom": "Dissert", "prenom": "Benoît" }, { "userId": "car-chu", "nom": "Chuong", "prenom": "Caroline" }, { "userId": "cha-sab", "nom": "Sabourdin", "prenom": "Charles" }, { "userId": "dam-vie", "nom": "Viennot", "prenom": "Damien" }, { "userId": "dav-dew", "nom": "Dewalle", "prenom": "David" }, { "userId": "emm-fel", "nom": "Feller", "prenom": "Emmanuel" }, { "userId": "est-lan", "nom": "Landry", "prenom": "Estelle" }, { "userId": "fla-leb", "nom": "Lebarbe", "prenom": "Flavien" }, { "userId": "fra-kal", "nom": "Kalb", "prenom": "Franck" }, { "userId": "gab-kas", "nom": "Kastenbaum", "prenom": "Gabriel" }, { "userId": "gui-lou", "nom": "Lours", "prenom": "Guillaume" }, { "userId": "hor-gon", "nom": "Gonzalez", "prenom": "Horacio" }, { "userId": "jea-sir", "nom": "Sirot", "prenom": "Jean-Christophe" }, { "userId": "kaj-ras", "nom": "Rashid", "prenom": "Kajin" }, { "userId": "kev-lau", "nom": "Laurent", "prenom": "Kevin" }, { "userId": "mar-ter", "nom": "Terrier", "prenom": "Marie" }, { "userId": "mau-cah", "nom": "Cahuet Laurent", "prenom": "Maude" }, { "userId": "ste-bra", "nom": "Bran", "prenom": "Stephane" }, { "userId": "kha-mau", "nom": "Tuong", "prenom": "khanh " }, { "userId": "gau-de", "nom": "de Saint-Martin Lacace", "prenom": "Gautier" }, { "userId": "jea-gir", "nom": "Girard", "prenom": "Jean-Francois" }, { "userId": "bab-cis", "nom": "Ciss", "prenom": "Babacar" }, { "userId": "eri-lem", "nom": "Lemerdy", "prenom": "Eric" }];
        }
    },
    {
        url: '/api/slots/_currentUser',
        method: 'get',
        response: ({ query }) => {
            return [{ "day": "wednesday", "slots": [{ "slotId": "wednesday_par243_t_13:30-16:30_2022", "roomId": "Paris 243", "fromTime": "13:30", "toTime": "16:30", "talk": { "talkType": "University", "title": "Initiation concrète à la compilation" }, "day": "wednesday", "yearSlot": 2022 }], "currentActiveSlot": [] }, { "day": "thursday", "slots": [{ "slotId": "thursday_lab1_10:45-14:15_2022", "roomId": "Neuilly lab1", "fromTime": "10:45", "toTime": "14:15", "talk": { "talkType": "Hands-on Labs", "title": "Contract testing : la thérapie pour une meilleure communication" }, "day": "thursday", "yearSlot": 2022 }, { "slotId": "thursday_lab2_10:45-14:15_2022", "roomId": "Neuilly lab2", "fromTime": "10:45", "toTime": "14:15", "talk": { "talkType": "Hands-on Labs", "title": "Le jeu du frigo - petit exercice de pensée systémique" }, "day": "thursday", "yearSlot": 2022 }, { "slotId": "thursday_neu253_t_16:45-17:30_2022", "roomId": "Neuilly 253", "fromTime": "16:45", "toTime": "17:30", "talk": { "talkType": "Conference", "title": "Comment orchestrer une flotte de 200 clusters Kubernetes sur Microsoft Azure ?" }, "day": "thursday", "yearSlot": 2022 }, { "slotId": "thursday_neu253_t_17:45-18:15_2022", "roomId": "Neuilly 253", "fromTime": "17:45", "toTime": "18:15", "talk": { "talkType": "Tools-in-Action", "title": "Après la censure, l’auto censure… mais là c’est drôle, éducatif et avec de l’IA" }, "day": "thursday", "yearSlot": 2022 }, { "slotId": "thursday_neu253_t_18:30-19:00_2022", "roomId": "Neuilly 253", "fromTime": "18:30", "toTime": "19:00", "talk": { "talkType": "Tools-in-Action", "title": "Coder avec Crystal pour ne pas perdre la boule" }, "day": "thursday", "yearSlot": 2022 }], "currentActiveSlot": [] }, { "day": "friday", "slots": [{ "slotId": "friday_par243_t_13:00-13:15_2022", "roomId": "Paris 243", "fromTime": "13:00", "toTime": "13:15", "talk": { "talkType": "Quickie", "title": "Record du monde - Tour d’horizon et cas d’utilisation des records" }, "day": "friday", "yearSlot": 2022 }, { "slotId": "friday_par243_t_13:30-14:15_2022", "roomId": "Paris 243", "fromTime": "13:30", "toTime": "14:15", "talk": { "talkType": "Conference", "title": "Art & Entropie: Du Chaos dans ton Frontend" }, "day": "friday", "yearSlot": 2022 }, { "slotId": "friday_par243_t_14:30-15:15_2022", "roomId": "Paris 243", "fromTime": "14:30", "toTime": "15:15", "talk": { "talkType": "Conference", "title": "La signature électronique vue par des développeurs Java." }, "day": "friday", "yearSlot": 2022 }, { "slotId": "friday_par243_t_15:30-16:15_2022", "roomId": "Paris 243", "fromTime": "15:30", "toTime": "16:15", "talk": { "talkType": "Conference", "title": "Ensemble Programming Toolbox" }, "day": "friday", "yearSlot": 2022 }], "currentActiveSlot": [] }];
        }
    },
    {
        url: '/api/slots/_current',
        method: 'get',
        response: ({ query }) => {
            return [];
        }
    },
    {
        url: '/api/stats/slots',
        method: 'get',
        response: ({ query }) => {
            return [{ "slotId": { "id": "wednesday_lab4_09:30-12:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Les tests unitaires Javascript, vers l'infini et au-delà " }, "percentage": 100, "roomid": "Paris lab4", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_lab2_09:30-12:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Cassons des tokens JWT" }, "percentage": 30, "roomid": "Neuilly lab2", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_f_neu251_09:30-12:30" }, "talk": { "talkType": "University", "title": "Ansible Ultimate Edition" }, "percentage": 90, "roomid": "Neuilly 251", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_c_maillot_09:30-12:30" }, "talk": { "talkType": "University", "title": "Spring Security - décodage et démystification 🕵️" }, "percentage": 70, "roomid": "Maillot", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_lab1_09:30-12:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Intégration à l'ère du cloud avec Camel Quarkus" }, "percentage": 30, "roomid": "Neuilly lab1", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_e_neu252_09:30-12:30" }, "talk": { "talkType": "University", "title": "La révolution (wasm) est incroyable parce que vraie" }, "percentage": 60, "roomid": "Neuilly 252AB", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_par243_t_09:30-12:30" }, "talk": { "talkType": "University", "title": "À la découverte des bases de données" }, "percentage": 90, "roomid": "Paris 243", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_par242AB_09:30-12:30" }, "talk": { "talkType": "University", "title": "Remèdes aux oomkill, warm-ups, et lenteurs pour des conteneurs JVM" }, "percentage": 90, "roomid": "Paris 242AB ", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_d_par241_09:30-12:30" }, "talk": { "talkType": "University", "title": "Théorie des Categories: vous la connaissez déjà." }, "percentage": 70, "roomid": "Paris 241", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_b_amphi_09:30-12:30" }, "talk": { "talkType": "University", "title": "Comprendre GraphQL" }, "percentage": 90, "roomid": "Amphi bleu", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_lab3_09:30-12:30" }, "talk": { "talkType": "Hands-on Labs", "title": " Devenir svelte avec Svelte" }, "percentage": 100, "roomid": "Paris lab3", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_neu253_t_09:30-12:30" }, "talk": { "talkType": "University", "title": "Gradle: Donnez de l’amour à votre build, il vous le rendra!" }, "percentage": 90, "roomid": "Neuilly 253", "fromtime": "09:30", "totime": "12:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_d_par241_13:30-16:30" }, "talk": { "talkType": "University", "title": "Java application security the hard way - a workshop for the serious developer" }, "percentage": 50, "roomid": "Paris 241", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_lab3_13:30-16:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Déployer Vault et Consul dans Kubernetes" }, "percentage": 60, "roomid": "Paris lab3", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_par242AB_13:30-16:30" }, "talk": { "talkType": "University", "title": "Zero Trust : the new normal !" }, "percentage": 80, "roomid": "Paris 242AB ", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_lab4_13:30-16:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Testez vos compétences de refactoring sur la machine d'entrainement TCR !" }, "percentage": 70, "roomid": "Paris lab4", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_c_maillot_13:30-16:30" }, "talk": { "talkType": "University", "title": "Kafka: carte des pièges à l’usage des développeurs et des ops" }, "percentage": 90, "roomid": "Maillot", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_f_neu251_13:30-16:30" }, "talk": { "talkType": "University", "title": "Sécuriser son cluster Kubernetes on-premise from scratch" }, "percentage": 70, "roomid": "Neuilly 251", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_par243_t_13:30-16:30" }, "talk": { "talkType": "University", "title": "Initiation concrète à la compilation" }, "percentage": 90, "roomid": "Paris 243", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_lab1_13:30-16:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Découvrez la programmation au niveau type et relevez le challenge des types typescript !" }, "percentage": 100, "roomid": "Neuilly lab1", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_e_neu252_13:30-16:30" }, "talk": { "talkType": "University", "title": "Architecturoplastie hexagonale d’un backend Node.js : Opération à code ouvert" }, "percentage": 90, "roomid": "Neuilly 252AB", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_lab2_13:30-16:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Le chemin d’un petit modèle vers l’avenir en production" }, "percentage": 50, "roomid": "Neuilly lab2", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_neu253_t_13:30-16:30" }, "talk": { "talkType": "University", "title": "Construction d'APIs Géographiques à base d'Open Data, PostgreSQL & PostGIS" }, "percentage": 70, "roomid": "Neuilly 253", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_b_amphi_13:30-16:30" }, "talk": { "talkType": "University", "title": "Loom nous Protègera-t-il du Braquage Temporel ?" }, "percentage": 90, "roomid": "Amphi bleu", "fromtime": "13:30", "totime": "16:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_c_maillot_17:00-17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Gagner du temps en créant des extensions pour vos navigateurs" }, "percentage": 70, "roomid": "Maillot", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_b_amphi_17:00-17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Pourquoi vous n'attirerez et ne retiendrez pas les femmes dans vos équipes tech !" }, "percentage": 80, "roomid": "Amphi bleu", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_f_neu251_17:00-17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Du Chaos Engineering avec Litmus et Jenkins" }, "percentage": 90, "roomid": "Neuilly 251", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_par242AB_17:00-17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Ajouter de A à Z une barre de recherche dans son application" }, "percentage": 60, "roomid": "Paris 242AB ", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_e_neu252_17:00-17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Sécurisez votre pipeline de livraison multi-cloud avec HashiCorp Vault" }, "percentage": 70, "roomid": "Neuilly 252AB", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_d_par241_17:00-17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Gitpod: la fin des frictions inutiles pour contribuer à un projet OSS ?" }, "percentage": 70, "roomid": "Paris 241", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_par243_t_17:00-17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "Ligne de Commande, Kotlin et Star Wars : Présenter PicoCLI avec le combo gagnant" }, "percentage": 90, "roomid": "Paris 243", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_f_neu251_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Into the flamegraph: From the primitives through advanced concepts" }, "percentage": 30, "roomid": "Neuilly 251", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": { "id": "wednesday_d_par241_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "AssemblyScript : TypeScript sous stéroïdes grâce à WebAssembly ?" }, "percentage": 40, "roomid": "Paris 241", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": { "id": "wednesday_neu253_t_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Templates d'email: l'aventure dont vous êtes le héros" }, "percentage": 40, "roomid": "Neuilly 253", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": { "id": "wednesday_neu253_t_17:00-17:30" }, "talk": { "talkType": "Tools-in-Action", "title": "𝔸𝕛𝕠𝕦𝕥𝕖𝕫 du caractère à 𝕧𝕠𝕥𝕣𝕖 site 🚀" }, "percentage": 40, "roomid": "Neuilly 253", "fromtime": "17:00", "totime": "17:30", "day": "wednesday" }, { "slotId": { "id": "wednesday_par242AB_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "(Re) Découvrir les outils UNIX" }, "percentage": 50, "roomid": "Paris 242AB ", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": { "id": "wednesday_par243_t_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Merci Keptn Obvious! SLOs observables avec Prometheus et Keptn" }, "percentage": 80, "roomid": "Paris 243", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": { "id": "wednesday_e_neu252_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Type algébrique de données en Java 17" }, "percentage": 80, "roomid": "Neuilly 252AB", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": { "id": "wednesday_c_maillot_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Bien maîtriser les Dev Tools de vos navigateurs" }, "percentage": 70, "roomid": "Maillot", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": { "id": "wednesday_b_amphi_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Rendez l'agilité aux développeur(se)s !" }, "percentage": 70, "roomid": "Amphi bleu", "fromtime": "17:45", "totime": "18:15", "day": "wednesday" }, { "slotId": { "id": "wednesday_c_maillot_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Oubliez Docker, appelez moi Compose" }, "percentage": 40, "roomid": "Maillot", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": { "id": "wednesday_f_neu251_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Créer & distribuer un plugin pour Kubernetes en quelques minutes ? Easy ! 🙂" }, "percentage": 30, "roomid": "Neuilly 251", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": { "id": "wednesday_b_amphi_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "La sécurité avec les headers HTTP : Tour d’horizon des attaques et défenses possibles" }, "percentage": 60, "roomid": "Amphi bleu", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": { "id": "wednesday_d_par241_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Reprenez le contrôle de votre bash en devenant un ninja de la CLI ! 😎" }, "percentage": 40, "roomid": "Paris 241", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": { "id": "wednesday_par242AB_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Github Co-Pilot : Addictif ou Efficace ?" }, "percentage": 30, "roomid": "Paris 242AB ", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": { "id": "wednesday_par243_t_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "R2DBC = R2D2 + JDBC (enfin presque...)" }, "percentage": 40, "roomid": "Paris 243", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": { "id": "wednesday_neu253_t_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Materialize+Redpanda: streaming for the rest of us" }, "percentage": 40, "roomid": "Neuilly 253", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": { "id": "thursday_b_amphi_09:00-09:20" }, "talk": { "talkType": "Keynote", "title": "La Keynote de Devoxx France 2022 - 10 ans déjà" }, "percentage": 100, "roomid": "Amphi bleu", "fromtime": "09:00", "totime": "09:20", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_09:25-09:45" }, "talk": { "talkType": "Keynote", "title": "10 ans de Tech à travers le podcast Niptech" }, "percentage": 100, "roomid": "Amphi bleu", "fromtime": "09:25", "totime": "09:45", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_09:50-10:10" }, "talk": { "talkType": "Keynote", "title": "Slow.tech : il est urgent de hacker le système ! " }, "percentage": 100, "roomid": "Amphi bleu", "fromtime": "09:50", "totime": "10:10", "day": "thursday" }, { "slotId": { "id": "thursday_c_maillot_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Développer des applications observables pour la production" }, "percentage": 100, "roomid": "Maillot", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": { "id": "thursday_lab2_10:45-14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Le jeu du frigo - petit exercice de pensée systémique" }, "percentage": 90, "roomid": "Neuilly lab2", "fromtime": "10:45", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Micro Frontends REX - Diviser pour mieux régner !" }, "percentage": 100, "roomid": "Paris 241", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": { "id": "thursday_lab1_10:45-14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Contract testing : la thérapie pour une meilleure communication" }, "percentage": 30, "roomid": "Neuilly lab1", "fromtime": "10:45", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Rust pour les humains" }, "percentage": 100, "roomid": "Neuilly 251", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "OAUTH 2.1 expliqué simplement (même si tu n'es pas dev) !" }, "percentage": 90, "roomid": "Amphi bleu", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": { "id": "thursday_lab3_10:45-14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Compiler-Driven Development avec Elm" }, "percentage": 10, "roomid": "Paris lab3", "fromtime": "10:45", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_par243_t_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "JOOQ, joy of SQL" }, "percentage": 80, "roomid": "Paris 243", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Et si les micro-services n'avaient rien à voir avec la technique ?" }, "percentage": 90, "roomid": "Paris 242AB ", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Comprendre les enjeux de consommation de ressource et d’énergie dans le secteur numérique" }, "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": { "id": "thursday_lab4_10:45-14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Exploration de Java 17" }, "percentage": 100, "roomid": "Paris lab4", "fromtime": "10:45", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_10:45-11:30" }, "talk": { "talkType": "Conference", "title": " Qu'est-ce que l'InnerSource ? Comment ça se met en place et pourquoi ça va améliorer votre IT ... mais pas que ?" }, "percentage": 100, "roomid": "Neuilly 253", "fromtime": "10:45", "totime": "11:30", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Le (dés)amour des tests web" }, "percentage": 100, "roomid": "Paris 241", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Dans les coulisses du \"Cloud\"" }, "percentage": 100, "roomid": "Neuilly 251", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Licences open source : entre guerre de clochers et radicalité " }, "percentage": 90, "roomid": "Neuilly 253", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Et si on faisait le tour de CORS ? ⛵" }, "percentage": 90, "roomid": "Neuilly 252AB", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "D'un hack au datamesh, l'évolution du data engineering chez Leboncoin" }, "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Model-Driven Design" }, "percentage": 100, "roomid": "Amphi bleu", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": { "id": "thursday_par243_t_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Jetpack Compose: UI toolkit pour Android et Desktop" }, "percentage": 70, "roomid": "Paris 243", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": { "id": "thursday_c_maillot_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Comparing Native Java REST API Frameworks" }, "percentage": 40, "roomid": "Maillot", "fromtime": "11:45", "totime": "12:30", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Rendu 3D, la grande illusion expliquée" }, "percentage": 30, "roomid": "Neuilly 251", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": { "id": "thursday_par243_t_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Introduction à REMIX" }, "percentage": 50, "roomid": "Paris 243", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Fuzzing en Go" }, "percentage": 60, "roomid": "Neuilly 253", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "J'ai presque fini ! Pourquoi notre cerveau nous aide pas sur ce coup là..." }, "percentage": 80, "roomid": "Neuilly 252AB", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Equity for software engineers" }, "percentage": 30, "roomid": "Paris 242AB ", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Major migrations made easy" }, "percentage": 30, "roomid": "Paris 241", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": { "id": "thursday_c_maillot_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Simplifiez vos revues de code avec le rebase interactif" }, "percentage": 80, "roomid": "Maillot", "fromtime": "13:00", "totime": "13:15", "day": "thursday" }, { "slotId": { "id": "thursday_c_maillot_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Traiter 1 million de messages par CPU par Go de mémoire avec Quarkus et Microprofile reactive messaging kafka à Décathlon" }, "percentage": 100, "roomid": "Maillot", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Dois-je migrer en Reactive et comment ?" }, "percentage": 90, "roomid": "Amphi bleu", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Des Z’Individus et des Z’Interactions, ou l’inclusion des (neuro) atypiques dans les équipes." }, "percentage": 100, "roomid": "Neuilly 251", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Protéger son organisation des attaques par le système de build" }, "percentage": 80, "roomid": "Neuilly 252AB", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Comment Q travaille-t-il avec James Bond, ou  comment faire de l'IA agile dans le milieu du renseignement." }, "percentage": 100, "roomid": "Paris 241", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "entiers, virgules flottantes ou représentations exotiques : parlons d'élégance" }, "percentage": 100, "roomid": "Neuilly 253", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Construire et déployer son application avec Argo dans Kubernetes" }, "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Micronaut AOT: optimiser vos applications pour le JIT et GraalVM" }, "percentage": 100, "roomid": "Neuilly 253", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Vers une culture où tout le monde est responsable de l'indisponibilité" }, "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": { "id": "thursday_c_maillot_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Connaissez-vous vraiment JWT ?" }, "percentage": 90, "roomid": "Maillot", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": { "id": "thursday_par243_t_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Ciel ! Mon Kubernetes mine des bitcoins !" }, "percentage": 100, "roomid": "Paris 243", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "De OUI.sncf à SNCF Connect, 10 ans de mobile natif à Flutter" }, "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Etre développeur: grandir et se développer" }, "percentage": 80, "roomid": "Amphi bleu", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Data scientists vs. développeurs: des métiers (très!) différents" }, "percentage": 70, "roomid": "Paris 241", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Cloud public, mais données privées !" }, "percentage": 100, "roomid": "Neuilly 251", "fromtime": "14:30", "totime": "15:15", "day": "thursday" }, { "slotId": { "id": "thursday_par243_t_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Java Next - From Amber to Loom, from Panama to Valhalla" }, "percentage": 100, "roomid": "Paris 243", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Anatomie d'une base SQL distribuée (YugabyteDB)" }, "percentage": 100, "roomid": "Neuilly 253", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Continuous delivery on premise : Gerrit, Jenkins et Sonarqube entrent dans un bar..." }, "percentage": 90, "roomid": "Neuilly 251", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": { "id": "thursday_c_maillot_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Comment j'ai aidé ma fille à lire avec le machine learning" }, "percentage": 90, "roomid": "Maillot", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Save the date !" }, "percentage": 90, "roomid": "Paris 242AB ", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Eliminez la complexité de Kubernetes avec LENS !" }, "percentage": 90, "roomid": "Paris 241", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Log4shell, c'est la faute à la fondation Apache ?" }, "percentage": 60, "roomid": "Amphi bleu", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Coder pour l'Éternité, comprendre le développement sur la blockchain Ethereum." }, "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "15:30", "totime": "16:15", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Cybersécurité et générateurs de nombres aléatoires" }, "percentage": 90, "roomid": "Paris 241", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": { "id": "thursday_c_maillot_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Montée de version sans interruption" }, "percentage": 60, "roomid": "Maillot", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": { "id": "thursday_par243_t_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Analytique temp réel pour vos utilisateurs avec Apache Pinot" }, "percentage": 90, "roomid": "Paris 243", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Apprendre à coder en maternelle, sans écran" }, "percentage": 80, "roomid": "Paris 242AB ", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Petit guide pratique pour commencer un design system" }, "percentage": 60, "roomid": "Neuilly 252AB", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Comment orchestrer une flotte de 200 clusters Kubernetes sur Microsoft Azure ?" }, "percentage": 90, "roomid": "Neuilly 253", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "S'affranchir de la Pyramide des Tests" }, "percentage": 100, "roomid": "Amphi bleu", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": { "id": "thursday_lab2_15:30-18:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Construire des applications performantes avec Apache Cassandra" }, "percentage": 90, "roomid": "Neuilly lab2", "fromtime": "15:30", "totime": "18:30", "day": "thursday" }, { "slotId": { "id": "thursday_lab1_15:30-18:30" }, "talk": { "talkType": "Hands-on Labs", "title": "GitOps , une mise en situation un peu réaliste sur Kubernetes avec Flux" }, "percentage": 90, "roomid": "Neuilly lab1", "fromtime": "15:30", "totime": "18:30", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Après la censure, l’auto censure… mais là c’est drôle, éducatif et avec de l’IA" }, "percentage": 50, "roomid": "Neuilly 253", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": { "id": "thursday_par243_t_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Dekorate: l'outil pour deployer tes microservices sur Kubernetes" }, "percentage": 80, "roomid": "Paris 243", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Accéder à mon cerveau par une API" }, "percentage": 90, "roomid": "Neuilly 252AB", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Comment Betclic utilise son datalake pour générer des tests de charge et simuler des évènements sportifs ?" }, "percentage": 70, "roomid": "Neuilly 251", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "⚡️ Vite⚡️the Webpack killer" }, "percentage": 60, "roomid": "Paris 242AB ", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Apprendre la musique - developer edition" }, "percentage": 80, "roomid": "Neuilly 251", "fromtime": "16:45", "totime": "17:30", "day": "thursday" }, { "slotId": { "id": "thursday_c_maillot_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "The unknowns of JUnit 5" }, "percentage": 30, "roomid": "Maillot", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Tailwind ou le futur du CSS" }, "percentage": 80, "roomid": "Paris 241", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": { "id": "thursday_e_neu252_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Le DOM Testing : Testez vos applications front plus facilement et efficacement !" }, "percentage": 20, "roomid": "Neuilly 252AB", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": { "id": "thursday_par243_t_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Jouer à Minecraft avec une IA générée par GPT-3" }, "percentage": 100, "roomid": "Paris 243", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": { "id": "thursday_d_par241_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Exploiter facilement des fonctions natives avec le Projet Panama depuis Java" }, "percentage": 40, "roomid": "Paris 241", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": { "id": "thursday_f_neu251_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Building your first malicious chrome extension 😈" }, "percentage": 60, "roomid": "Neuilly 251", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": { "id": "thursday_neu253_t_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Coder avec Crystal pour ne pas perdre la boule" }, "percentage": 10, "roomid": "Neuilly 253", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_17:45-18:15" }, "talk": { "talkType": "Tools-in-Action", "title": "Git, back to the future " }, "percentage": 60, "roomid": "Amphi bleu", "fromtime": "17:45", "totime": "18:15", "day": "thursday" }, { "slotId": { "id": "thursday_b_amphi_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "REX: TDD avec TestContainers" }, "percentage": 70, "roomid": "Amphi bleu", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": { "id": "thursday_par242AB_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Spécifier ses API asynchrones avec AsyncAPI" }, "percentage": 50, "roomid": "Paris 242AB ", "fromtime": "18:30", "totime": "19:00", "day": "thursday" }, { "slotId": { "id": "wednesday_e_neu252_18:30-19:00" }, "talk": { "talkType": "Tools-in-Action", "title": "Construisons ensemble une application Micro-Frontend multi-frameworks avec Webpack 5 Module Federation" }, "percentage": 40, "roomid": "Neuilly 252AB", "fromtime": "18:30", "totime": "19:00", "day": "wednesday" }, { "slotId": { "id": "friday_f_neu251_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "10 ans de Devoxx FR et de Java" }, "percentage": 100, "roomid": "Neuilly 251", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": { "id": "friday_c_maillot_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Comment OpenTelemetry peut transformer votre monitoring en unifiant vos logs/metrics/traces" }, "percentage": 100, "roomid": "Maillot", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": { "id": "friday_e_neu252_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Développ(eur|euse) Senior avec 6 ans d’expérience, et après ?" }, "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": { "id": "friday_d_par241_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Kafka Streams @ Carrefour : du big data à la vitesse de l'éclair" }, "percentage": 100, "roomid": "Paris 241", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": { "id": "friday_par243_t_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "React dans tous ses états" }, "percentage": 100, "roomid": "Paris 243", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": { "id": "friday_par242AB_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Microservices, DDD et bootstrapping pour faire un départ lancé." }, "percentage": 90, "roomid": "Paris 242AB ", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": { "id": "friday_lab2_10:45-14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Event Storming par la Pratique" }, "percentage": 100, "roomid": "Neuilly lab2", "fromtime": "10:45", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_lab1_10:45-14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Atelier Computer Vision avec TensorFlow " }, "percentage": 70, "roomid": "Neuilly lab1", "fromtime": "10:45", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_b_amphi_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Migrer de Spring MVC à Spring Web Flux" }, "percentage": 70, "roomid": "Amphi bleu", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": { "id": "friday_b_amphi_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Doctolib a besoin d'une base de données plus puissante. Ok, mais laquelle?" }, "percentage": 100, "roomid": "Amphi bleu", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": { "id": "friday_f_neu251_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Les parsers, ou comment exploiter efficacement du texte brut" }, "percentage": 70, "roomid": "Neuilly 251", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": { "id": "friday_neu253_t_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "L'IA pour le bon usage des médicaments" }, "percentage": 70, "roomid": "Neuilly 253", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": { "id": "friday_par243_t_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Quarkus Renarde 🦊♥ : un framework Web old-school au goût du jour" }, "percentage": 80, "roomid": "Paris 243", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": { "id": "friday_neu253_t_10:45-11:30" }, "talk": { "talkType": "Conference", "title": "Exploring Linux Memory Usage and IO Performance in Cloud Native Applications" }, "percentage": 100, "roomid": "Neuilly 253", "fromtime": "10:45", "totime": "11:30", "day": "friday" }, { "slotId": { "id": "friday_c_maillot_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "Notre cerveau est \"null\"! Quelques biais cognitifs appliqués au métier de dev..." }, "percentage": 100, "roomid": "Maillot", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": { "id": "friday_d_par241_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "The Art of Java Type Patterns" }, "percentage": 70, "roomid": "Paris 241", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": { "id": "friday_par242AB_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "La scale-up, l’autonomie et le sous-marin nucléaire" }, "percentage": 70, "roomid": "Paris 242AB ", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": { "id": "friday_e_neu252_11:45-12:30" }, "talk": { "talkType": "Conference", "title": "À la découverte des Docker Dev Environments" }, "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "11:45", "totime": "12:30", "day": "friday" }, { "slotId": { "id": "friday_neu253_t_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Go Generics" }, "percentage": 20, "roomid": "Neuilly 253", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": { "id": "friday_f_neu251_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Depuis 2 ans, je suis la seule à lire mes mails ! (ou presque)" }, "percentage": 60, "roomid": "Neuilly 251", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": { "id": "friday_par242AB_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Les Java Array Lists ne sont pas magiques" }, "percentage": 50, "roomid": "Paris 242AB ", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": { "id": "friday_d_par241_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Mon site déjà en ligne doit être accessible, je fais comment ?" }, "percentage": 50, "roomid": "Paris 241", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": { "id": "friday_par243_t_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Record du monde - Tour d’horizon et cas d’utilisation des records" }, "percentage": 80, "roomid": "Paris 243", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": { "id": "friday_c_maillot_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": "Tests Cucumber: légendes et réalité" }, "percentage": 70, "roomid": "Maillot", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": { "id": "thursday_par243_t_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "What's cooking in Maven?" }, "percentage": 30, "roomid": "Paris 243", "fromtime": "13:30", "totime": "14:15", "day": "thursday" }, { "slotId": { "id": "friday_e_neu252_13:00-13:15" }, "talk": { "talkType": "Quickie", "title": " Profiler un pod dans Kubernetes avec kube-flame" }, "percentage": 30, "roomid": "Neuilly 252AB", "fromtime": "13:00", "totime": "13:15", "day": "friday" }, { "slotId": { "id": "friday_lab3_10:45-14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Gérer ses environnements de travail avec Nix." }, "percentage": 40, "roomid": "Paris lab3", "fromtime": "10:45", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_lab4_10:45-14:15" }, "talk": { "talkType": "Hands-on Labs", "title": "Découpe mon monolithe" }, "percentage": 90, "roomid": "Paris lab4", "fromtime": "10:45", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_neu253_t_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Réception d'image satellite 🛰️ avec un Raspberry" }, "percentage": 100, "roomid": "Neuilly 253", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_d_par241_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Père Castor 🐻, raconte nous une histoire (d'OPS)" }, "percentage": 90, "roomid": "Paris 241", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_b_amphi_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Mieux maitriser TLS, OpenSSL et les certificats" }, "percentage": 90, "roomid": "Amphi bleu", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_par242AB_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Le secret des illoominaties " }, "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_f_neu251_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Dates et heures à l'horizon ? Fuyez… ou venez découvrir tous les pièges qu'elles vous tendent !" }, "percentage": 60, "roomid": "Neuilly 251", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_e_neu252_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Rendez vos interfaces fiables en faisant aimer les tests à votre équipe !" }, "percentage": 80, "roomid": "Neuilly 252AB", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_par243_t_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Art & Entropie: Du Chaos dans ton Frontend" }, "percentage": 70, "roomid": "Paris 243", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_c_maillot_13:30-14:15" }, "talk": { "talkType": "Conference", "title": "Les lois universelles de la performance" }, "percentage": 90, "roomid": "Maillot", "fromtime": "13:30", "totime": "14:15", "day": "friday" }, { "slotId": { "id": "friday_d_par241_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Qu'avons nous appris après un an passé à développer des opérateurs Kubernetes ?" }, "percentage": 90, "roomid": "Paris 241", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": { "id": "friday_c_maillot_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Mob programming, la véritable approche du développement en équipe" }, "percentage": 80, "roomid": "Maillot", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": { "id": "friday_f_neu251_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Enrichir son application web sans toucher au code source, c'est possible grâce au nouveau standard Web Extension API !" }, "percentage": 70, "roomid": "Neuilly 251", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": { "id": "friday_par242AB_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "En quête du Clean Code avec Sonar, 20 000 lieues sous un océan de code!" }, "percentage": 100, "roomid": "Paris 242AB ", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": { "id": "friday_neu253_t_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Première application mobile Flutter ? Ne faites pas les mêmes erreurs que nous !" }, "percentage": 100, "roomid": "Neuilly 253", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": { "id": "friday_e_neu252_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Valhalla: To the Hell and Back" }, "percentage": 100, "roomid": "Neuilly 252AB", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": { "id": "friday_b_amphi_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "Comment permettre 100 millions de logins sans interruption de service ? Betclic raconte son Euro 2020 de football" }, "percentage": 70, "roomid": "Amphi bleu", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": { "id": "friday_par243_t_14:30-15:15" }, "talk": { "talkType": "Conference", "title": "La signature électronique vue par des développeurs Java." }, "percentage": 90, "roomid": "Paris 243", "fromtime": "14:30", "totime": "15:15", "day": "friday" }, { "slotId": { "id": "friday_par242AB_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Cryptanalyse de la machine Enigma : entre espionnage et mathématiques" }, "percentage": 60, "roomid": "Paris 242AB ", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": { "id": "friday_f_neu251_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Développement sans fron-Tiers" }, "percentage": 30, "roomid": "Neuilly 251", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": { "id": "friday_c_maillot_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "CI/CD, le divorce serait-il prononcé ?" }, "percentage": 80, "roomid": "Maillot", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": { "id": "friday_neu253_t_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Kotlin, Java 4..18, Code Coverage and their best friend — bytecode: scandals, intrigues, investigations" }, "percentage": 40, "roomid": "Neuilly 253", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": { "id": "friday_e_neu252_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Comprendre le comportement des français, c'est possible grâce à la data chez Leboncoin " }, "percentage": 60, "roomid": "Neuilly 252AB", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": { "id": "friday_b_amphi_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Architecture microservices et cohérence des données : mais on fait comment pour de vrai ?" }, "percentage": 100, "roomid": "Amphi bleu", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": { "id": "friday_d_par241_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Ce que les développeurs doivent savoir sur les index" }, "percentage": 100, "roomid": "Paris 241", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": { "id": "friday_par243_t_15:30-16:15" }, "talk": { "talkType": "Conference", "title": "Ensemble Programming Toolbox" }, "percentage": 40, "roomid": "Paris 243", "fromtime": "15:30", "totime": "16:15", "day": "friday" }, { "slotId": { "id": "friday_par242AB_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Les fonctions (récursives) décortiquées" }, "percentage": 20, "roomid": "Paris 242AB ", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": { "id": "friday_f_neu251_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Créer un jeu cross plateforme... en Rust!" }, "percentage": 80, "roomid": "Neuilly 251", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": { "id": "friday_b_amphi_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "La fin des architectures en couches avec l’approche hexagonale" }, "percentage": 80, "roomid": "Amphi bleu", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": { "id": "friday_d_par241_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "400 endpoints d'API et 2000 types : genèse et utilisation du nouveau client Java pour Elasticsearch" }, "percentage": 30, "roomid": "Paris 241", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": { "id": "friday_e_neu252_16:45-17:30" }, "talk": { "talkType": "Conference", "title": "Pourquoi DevOps ne tient pas ses promesses ?" }, "percentage": 60, "roomid": "Neuilly 252AB", "fromtime": "16:45", "totime": "17:30", "day": "friday" }, { "slotId": { "id": "thursday_lab3_15:30-18:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Compétition - hacker un coffre fort et repartir avec le contenu" }, "percentage": 100, "roomid": "Paris lab3", "fromtime": "15:30", "totime": "18:30", "day": "thursday" }, { "slotId": { "id": "thursday_lab4_15:30-18:30" }, "talk": { "talkType": "Hands-on Labs", "title": "Architecture hexagonale par la pratique avec Spring " }, "percentage": 100, "roomid": "Paris lab4", "fromtime": "15:30", "totime": "18:30", "day": "thursday" }];
        }
    }
    ,
    {
        url: '/login',
        method: 'post',
        response: ({ query }) => {
            return new UserAuthenticated("Fabrice Sznajderman", "token", true);
        }
    }, {
        url: '/api/informations/_unread',
        method: 'get',
        response: [7]
    }, {
        url: '/api/informations/_markAsRead/7',
        method: 'patch',
        response: [7]
    }, {
        url: '/api/informations',
        method: 'get',
        response: ({ query }) => [{ "id": 1, "title": "Code Wifif", "content": "tezez", "dateCreate": "2023-04-04T19:18:12.522462Z", "isArchived": false }, { "id": 2, "title": "Tartanpion", "content": "Fabrice Snaff", "dateCreate": "2023-04-04T20:24:42.337868Z", "isArchived": false }, { "id": 3, "title": "test", "content": "test", "dateCreate": "2023-04-04T20:26:15.718382Z", "isArchived": false }, { "id": 4, "title": "Heure de déjeuner", "content": "12h30", "dateCreate": "2023-04-05T06:50:05.359285Z", "isArchived": false }, { "id": 7, "title": "Last one", "content": "Laster oneuh", "dateCreate": "2023-04-05T06:59:21.378673Z", "isArchived": false }]
    }, {
        url: '/api/rooms',
        method: 'get',
        response: ({ query }) => [{ "id": 1714, "name": "Hall Maillot", "capacity": 4000 }, { "id": 1715, "name": "Salle Ternes", "capacity": 1128 }, { "id": 1709, "name": "Amphi bleu", "capacity": 826 }, { "id": 1713, "name": "Maillot", "capacity": 380 }, { "id": 1711, "name": "Paris 242AB", "capacity": 280 }, { "id": 1707, "name": "Neuilly 252AB", "capacity": 380 }, { "id": 1705, "name": "Paris 143", "capacity": 341 }, { "id": 1702, "name": "Neuilly 153", "capacity": 341 }, { "id": 1703, "name": "Paris 141", "capacity": 341 }, { "id": 1051, "name": "Neuilly 151", "capacity": 341 }, { "id": 1710, "name": "Paris 241", "capacity": 220 }, { "id": 1706, "name": "Neuilly 251", "capacity": 220 }, { "id": 1712, "name": "Paris 243", "capacity": 60 }, { "id": 1708, "name": "Neuilly 253", "capacity": 60 }, { "id": 1704, "name": "Paris 142", "capacity": 40 }, { "id": 1701, "name": "Neuilly 152", "capacity": 40 }, { "id": 20952, "name": "Lobby Paris", "capacity": 60 }, { "id": 20951, "name": "Lobby Neuilly", "capacity": 60 }]
    },
    {
        url: '/api/planning',
        method: 'get',
        response: ({ query }) => {
            return  [
                {
                  "day": "Wednesday",
                  "rooms": [
                    {
                      "roomId": 1051,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63453",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "07:00",
                            "toTime": "07:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63467",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1775",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "React Server Components : Effet de mode ou réel progrès ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1785",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Le SQL pour les nerds",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12905",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Partagez simplement vos Java CLI Apps",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63475",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Que restera-t-il de mon site web dans 50 ans ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1856",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Équilibrez le Stress, Maximisez la Collaboration : communiquez sans heurts à l’aide de la Process Communication (deep-dive intro)",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1877",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "SQLite, la base de données la plus répandue au monde et pourtant méconnue !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1888",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Bye-bye les race-conditions, détectons-les avant nos utilisateur·rice·s !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1701,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12904",
                            "roomName": "Neuilly 152",
                            "roomId": 1701,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Chasse aux erreurs AWS : un atelier CTF !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1854",
                            "roomName": "Neuilly 152",
                            "roomId": 1701,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "Mission: Playwright 🎭, the Cypress killer by Microsoft",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63486",
                            "roomName": "Neuilly 152",
                            "roomId": 1701,
                            "fromTime": "17:00",
                            "toTime": "18:30",
                            "kind": "Other",
                            "title": "Meet with an OSS project: Immutable.js",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1702,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63459",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "07:00",
                            "toTime": "07:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63466",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1776",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "CSS renaît de ses cendres: (re)devenez copains avec votre feuille de style",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1786",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Going AOT: Everything you need to know about GraalVM for Java applications",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12907",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "SOPS, Passez un savon à vos secrets en clair !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63479",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Qu'est ce que les champignons nous apprennent sur l'intelligence artificielle?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1860",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Quality & Security Gate dans nos chaines CI⚡CD",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1865",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Infuser du métier dans les autorisations avec ReBAC",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1871",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Transcendez les frontières linguistiques avec des APIs de Machine Learning sur mesure : embarquez dans le développement d’une solution de transcription temps réel de vos contenus multimédias !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1879",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "11 tricks to improve your productivity and reduce your frustration with Kubernetes",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1887",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Creating a documentation site for users with AsciiDoc and Antora",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1703,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63457",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "07:00",
                            "toTime": "07:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63464",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1778",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Domptez le multi-plateforme",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1790",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Jeux en ligne, mais comment ça lag pas ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12908",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": " Révolutionnez votre expérience utilisateur avec les Progressive Web Apps",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63481",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Je me suis fait voler la carte de crédit de ma banque en ligne et mon téléphone portable... C'est grave docteur ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1857",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Utiliser les IA Génératives avec Java : Au delà des simples chatbots",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1878",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "asdf, un outil pour toutes vos versions",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1889",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Dimensionnez correctement vos déploiements Kubernetes",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1704,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12903",
                            "roomName": "Paris 142",
                            "roomId": 1704,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Unconference - Management et Leadership",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1851",
                            "roomName": "Paris 142",
                            "roomId": 1704,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "OpenTelemetry Hands-On",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63485",
                            "roomName": "Paris 142",
                            "roomId": 1704,
                            "fromTime": "17:00",
                            "toTime": "18:30",
                            "kind": "Other",
                            "title": "Meet with an OSS project: Quarkus",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1705,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63458",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "07:00",
                            "toTime": "07:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63463",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1777",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Butcher Virtual Threads like a pro!",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1787",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Elasticsearch data streams, un condensé de bonnes pratiques pour vos données temporelles",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12909",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Sécuriser son infrastructure Cloud: une première baseline",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63478",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Comment bien planter un side project ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1859",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Quelle est la place des introverti·e·s dans une équipe agile ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1866",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Advanced Software Teaming",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1872",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Multi-Cloud & On Premise, dépassons les frontières ! Tirez le meilleur de chacun des mondes. ",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1882",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "(Neo)Vim en 2024",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1893",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "A Java lambda is all you need for distributed background jobs!",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1706,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63452",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63461",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1779",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Linux Kernel Functional Testing ou comment builder et tester des millions de noyaux Linux",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1792",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Sécurité du GenAI & des LLM: Une nouvelle ère d'Hacking éthique",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12911",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Back on Track: Navigating the Return to Work after Parental Leave",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63477",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Conception des packages génériques \"slices\" et \"maps\" en Go",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1855",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Cloud Native apps with Micronaut 4 and GraalVM",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1880",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "La recherche sous stéroïdes - une histoire de sémantique",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1892",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "De la Data science oui, mais en Kotlin !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1707,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63455",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63462",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1781",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "A Healthy diet for your Java application",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1788",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "200 équipes, 1 objectif : Maturité DevOps à grande échelle",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12913",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "TDD n'est pas vraiment votre type ? Venez découvrir Canon TDD ",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63476",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Faut-il privilégier la performance ou la lisibilité ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1861",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Du Clic à la Conversation : remplaçons boutons et formulaires par un LLM !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1867",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Tout ce que vous n'avez jamais voulu savoir sur les fuseaux horaires",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1873",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Hacker le TDAH : Stratégies pour le développeur moderne",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1881",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Mettre en place un RAG Open Source en 30 minutes ",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1894",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Surveillance de la sécurité des applications Java avec les outils du JDK et les événements JFR",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1708,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12901",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Hands-on Gemini, the Google DeepMind LLM",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1852",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "Toutes et tous Mercenaires de Devops!",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63484",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "17:00",
                            "toTime": "18:30",
                            "kind": "Other",
                            "title": "Toutes et tous Mercenaires de Devops!",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1709,
                      "slots": [
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "62501",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "Bienvenue à Devoxx France 2024",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1752",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "IA en médecine : où en sommes-nous ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1780",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Instrumenter vos applications natives Spring Boot et Quarkus avec OpenTelemetry",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "arn-her",
                              "nom": "Heritier",
                              "prenom": "Arnaud"
                            }
                          ],
                          "slot": {
                            "slotId": "1791",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "High-Speed DDD (revisited)",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1862",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Bootiful Spring Boot 3.3",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1868",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Sauve un dév, écris une doc !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "arn-her",
                              "nom": "Heritier",
                              "prenom": "Arnaud"
                            }
                          ],
                          "slot": {
                            "slotId": "1876",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "⚡Une application résiliente, dans un monde partiellement dégradé ⚡",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1884",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Observabilité : dépoussiérer Prometheus avec VictoriaMetrics",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1891",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "La fin des mots de passes partagés avec Vault et Boundary ",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1710,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63454",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63460",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1782",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Confidentialité des données sur les offres SaaS Kafka ou Pulsar",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1789",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Comment intégrer du hardware à une suite de test full software",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12914",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "V, comme Vautledétour",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63480",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "La positive alt-itude ! Un outil d'inclusion pour votre accessibilité.",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1858",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Les systèmes distribués: Dans le quotidien du data engineer",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1885",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Implémentation du Zero Trust dans un cluster Kubernetes avec Istio",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1895",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": " 🌴 Youpi dansons la Kapoeira, en testant nos kafka streams 🕺 💃",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1711,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63451",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63465",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1784",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Datacenter-as-Code : les arcanes de notre build system omniscient basé sur Nix.",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1793",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Vous pouvez venir à ce talk les yeux fermés",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12916",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Comment inclure l’inclusivité dès les premières étapes de conception d’un service ou d’un produit digital ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63482",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Passer d'une application Flutter mobile à une application Web de production en 2 mois, c'est possible !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1864",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Histoire de l'ALTO et du Xerox PARC",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1870",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Michelin(e), 120 ans, est passée à l'IaC",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1874",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Crafting your own RAG system: Leveraging 30+ LLMs for enhanced performance",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1883",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Picocli : mets du Java dans ton terminal !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1890",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Réduisez votre coût d'entrée avec Nix",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1712,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12902",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Refactorer votre code vers le Data Oriented Programming",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1853",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "🍳 Recette pour des environnements aux petits oignons pour ton déploiement continu 🚀",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63487",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "17:00",
                            "toTime": "18:30",
                            "kind": "Other",
                            "title": "Meet with an OSS project: Spring Boot",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1713,
                      "slots": [
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            },
                            {
                              "userId": "ede-azi",
                              "nom": "AZIAHOME",
                              "prenom": "Edem"
                            }
                          ],
                          "slot": {
                            "slotId": "63456",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63468",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "arn-her",
                              "nom": "Heritier",
                              "prenom": "Arnaud"
                            }
                          ],
                          "slot": {
                            "slotId": "1783",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Notre dépendance à l'Open Source est effrayante. SLSA, SBOM et Sigstore à la rescousse",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63483",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "11:15",
                            "toTime": "11:35",
                            "kind": "Break",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1794",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "La doc va bien, ne t'en fais pas",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63488",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "12:20",
                            "toTime": "13:30",
                            "kind": "Lunch",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12917",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Tabby, mon \"Copilot\" libre",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63474",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Comment merger sa PR en 10 secondes ? Avez-vous essayé les mob code review ?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1863",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "📝 ✅ La checklist ultime pour rendre vos applications cloud native !",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "1869",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Nous somme tous rassemblés - We are all to gather",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1875",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Les équipes distribuées, ça peut marcher?",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1886",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "CTRL+ALT+MAISON: Un exploration fantastique de la domotique",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1714,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "62503",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "07:30",
                            "toTime": "09:00",
                            "kind": "Breakfast",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63469",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "10:00",
                            "toTime": "10:30",
                            "kind": "Break",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1897",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "14:15",
                            "toTime": "14:35",
                            "kind": "Break",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1898",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "15:20",
                            "toTime": "15:40",
                            "kind": "Break",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1899",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "16:30",
                            "toTime": "17:00",
                            "kind": "Coffee Break",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "1901",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "17:30",
                            "toTime": "17:50",
                            "kind": "Break",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1715,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63612",
                            "roomName": "Salle Ternes",
                            "roomId": 1715,
                            "fromTime": "19:30",
                            "toTime": "23:30",
                            "kind": "Speakers Dinner",
                            "title": "---",
                            "day": "Wednesday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "day": "Thursday",
                  "rooms": [
                    {
                      "roomId": 1051,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2115",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "07:00",
                            "toTime": "07:20",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2141",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2163",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Rendez-moi mon front !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2184",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Panorama des risques, vulnérabilités et pistes pour une utilisation plus sûre de l'IA générative",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2207",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Architecture Hexagonale: Comment venir à bout du code spaghetti ?",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63494",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "La recherche sous stéroïdes ",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2241",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Day of the Dukentacle : la meilleure façon de prévoir le futur, c'est de le fabriquer soi-même",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2287",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Qui de Deno ou Bun arrivera en production ? Retour d'expérience sur la mise en oeuvre des alternatives à Node.js",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12918",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "C'est pas le réseau, ça ping Marty !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1701,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2199",
                            "roomName": "Neuilly 152",
                            "roomId": 1701,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Fundamentals of Migration Engineering with OpenRewrite",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2233",
                            "roomName": "Neuilly 152",
                            "roomId": 1701,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "Viens comme tu es et apprends à coder ta première IA",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63489",
                            "roomName": "Neuilly 152",
                            "roomId": 1701,
                            "fromTime": "17:00",
                            "toTime": "18:30",
                            "kind": "Other",
                            "title": "Meet with an OSS project: Micronaut",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1702,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2116",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "07:00",
                            "toTime": "07:20",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2143",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2164",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Cyber Resilience Act : 36 mois pour préparer vos chaînes DevOps !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2181",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Rendre une application multitenant sans embêter les développeurs",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2212",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Comment nous utilisons Kotlin et Gradle pour faire évoluer la communauté WireMock",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63601",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Mais non, c'est pas une erreur de CORS",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2250",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Porter le Flambeau du Clean Code à l’ère du GenAI",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2262",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Password-less apps: implementing WebAuthN",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2273",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "La base de données : une structure de données sophistiquée et spéciale",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2288",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Monster AI : l'odyssée de Back Market vers une plateforme IA générative sur-mesure",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12923",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Taskfile, le Makefile sous stéroïde !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1703,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2114",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "07:00",
                            "toTime": "07:20",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2142",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2161",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Quand la cybersécurité n'est pas qu'une affaire de failles ",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2182",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "La recherche à l'ère de l'IA",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2211",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": " La fin des mots de passes oubliés - Authentification Biométriques",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63495",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Garbage Collectors : Battle Royale",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2242",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Pulumi, ou comment gérer votre infrastructure avec votre langage préféré",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2292",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Serverless & JVM : construisez votre benchmark pour dépasser les idées reçues",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12920",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "SurrealDB : La Révolution des Bases de Données ✨ NewSQL ✨",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1704,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2202",
                            "roomName": "Paris 142",
                            "roomId": 1704,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "✏️ Apprendre à faire du sketchnoting avec Ane et Aurélie",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2234",
                            "roomName": "Paris 142",
                            "roomId": 1704,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "Generative AI in Practice: A Hands-on Codelab",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63491",
                            "roomName": "Paris 142",
                            "roomId": 1704,
                            "fromTime": "17:00",
                            "toTime": "18:30",
                            "kind": "Other",
                            "title": "Meet with an OSS project: OpenRewrite",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1705,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2112",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "07:00",
                            "toTime": "07:20",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2145",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2160",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Comment Back Market a reconditionné sa plateforme en changeant de Cloud Provider",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2183",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Faire simple, la clé de la durabilité",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2213",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "aCropalypse Now, à la recherche du PNG disparu",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63498",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Il n'est jamais trop tard pour redevenir junior",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2249",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Ma vie en vente flash sur le Dark Web ?!",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2261",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "L'AGC : retour sur l'ordinateur qui a amené l'humanité sur la Lune",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2274",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "10 Incredible Things you can do with Micronaut & GraalVM",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2291",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Réussir le grand écart à l'aide d'OpenRewrite",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12922",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Visualize more, spend less: Unlock data visualizations with Apache Superset ",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1706,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2117",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2144",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2162",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Work it smarter, dev it better, Ship it faster, Test it stronger",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2179",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Au cœur de la ruche eBPF!",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2210",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Les bugs de 1843 à nos jours",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63500",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Astro: Une Nouvelle Ère de Lazy Loading Efficace",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2243",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Construire son Assistant Intelligent avec Hugging Face et Elasticsearch",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2289",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "React Server Components 101",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12925",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Au Cœur de l'Odyssée: Migrer une application d'Angular 10 à 17",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2330",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "19:00",
                            "toTime": "19:55",
                            "kind": "BOF",
                            "title": "Staff42 - Meetup pour Staff Engineers (H/F)",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2335",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "20:00",
                            "toTime": "20:55",
                            "kind": "BOF",
                            "title": "BOF des JUG Leaders",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1707,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2113",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2146",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2159",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Apache Pulsar : enfin une alternative à Kafka ?",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2180",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "How JavaScript Happened: A Short History of Programming Languages",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2214",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Testcontainers : Simplifiez vos tests d'intégration et vos développements",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63496",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "XPath 4.0, XQuery 4.0, XSLT 4.0 : avancée des standards",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2252",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Multi Kubernetes, Multi Régions, Au-secours !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2265",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Indexation SQL au delà des simples colonnes: Expressions, fragments de texte, attributs JSON et requêtes Top-N",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2275",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "IA ou IA pas ? Nous l’IA qui remplace les devs on y croit pas (encore) !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2290",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Orchestrer ses workflows métiers avec Temporal",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12924",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Comment écrire des mails pourris de qualité ?",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2329",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "19:00",
                            "toTime": "19:55",
                            "kind": "BOF",
                            "title": "GitLab : passé, présent et futur",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2336",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "20:00",
                            "toTime": "20:55",
                            "kind": "BOF",
                            "title": "Parlons de sécurité Kubernetes",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1708,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2200",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Access management orienté métier avec ReBAC",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2235",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": " Maîtriser Angular 17: Développement Avancé et Techniques Novatrices",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63490",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "17:00",
                            "toTime": "18:30",
                            "kind": "Other",
                            "title": "Toutes et tous Mercenaires de Devops!",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2333",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "19:00",
                            "toTime": "19:55",
                            "kind": "BOF",
                            "title": "BoF Paris Scala User Group: Projet Loom, quels impacts du côté de Scala ?",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2340",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "20:00",
                            "toTime": "20:55",
                            "kind": "BOF",
                            "title": "BOF Duchess France",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1709,
                      "slots": [
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2101",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "Programming’s Greatest Mistakes",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2139",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "Un monde shooté aux métaux",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2168",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "GatewayAPI, 10 ans de maturation pour une nouvelle API Kubernetes",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2186",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Automatiser ses contrôles de sécurité : Arrêtez de cacher vos failles à côté des monstres sous votre lit !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2251",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Java rencontre l'IA : Comment intégrer les LLMs dans vos applications avec LangChain4j",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2266",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Les nouveautés de Java 21",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2276",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Debugguez votre salaire ! Mes stratégies gagnantes pour réussir sa négociation salariale",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2293",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Renovate/Dependabot, ou comment reprendre le contrôle sur la mise à jour de ses dépendances",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12929",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "De Compose à Kubernetes, Same player shoot again",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1710,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2119",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2147",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2167",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "A hitchhikers guide to observe (Java) applications in Kubernetes",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2185",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Highly available Identity and Access Management with multi-site Keycloak deployments in the cloud",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2216",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Angular Deferrable Views : Amélioration de la performance d'une application et de l'expérience utilisateur ",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63493",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Daltonien, mais pourquoi je vois rien ? ",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2244",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Beyond Estimates (Estimates and \"NoEstimates\") - Let's Explore the Possibilities",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2294",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Renforçons notre Developer eXperience pour faire face aux menaces d'obsolescence et de vulnérabilité",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12927",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "CyberPeace Miners : introduction à la cybersécurité avec Minecraft",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2332",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "19:00",
                            "toTime": "19:55",
                            "kind": "BOF",
                            "title": "BOF OpenTelemetry",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2339",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "20:00",
                            "toTime": "20:55",
                            "kind": "BOF",
                            "title": "Keycloak Birds-of-a-Feather session",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1711,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2118",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2148",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2166",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "What’s new in Traefik v3?",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2188",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Trying to be Barbie in Ken's Mojo Dojo Casa House",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2215",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Je délègue tous mes tests à une IA",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63497",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "/e/OS, mon smartphone Android sans Google",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2254",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Using OpenTelemetry, Splunk, and CI(Jenkins) to deliver a Monitoring Solution for Financial Software (Murex) ",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2263",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Comment réduire son empreinte carbone grâce à un calendrier de mise à l’échelle automatique ?",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2277",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Retour aux sources de l'authentification unique : Kerberos",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2296",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Builds Reproductibles avec Apache Maven",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12928",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "17:50",
                            "toTime": "18:20",
                            "kind": "Tools-in-Action",
                            "title": "Testons notre CSS !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2334",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "19:00",
                            "toTime": "19:55",
                            "kind": "BOF",
                            "title": "Créer un meetup ? mais quelle drôle d'idée !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2337",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "20:00",
                            "toTime": "20:55",
                            "kind": "BOF",
                            "title": "Archilocus, c'est LA place des architectes IT.",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1712,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2201",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Comprendre l'IA: construisez votre propre ChatGPT d'entreprise avec LangChain4J",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2236",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "fp-ts : Quand TypeScript devient fonctionnel",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63492",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "17:00",
                            "toTime": "18:30",
                            "kind": "Other",
                            "title": "Meet with an OSS project: LangChain4j",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2331",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "19:00",
                            "toTime": "19:55",
                            "kind": "BOF",
                            "title": "BOF : Meetup Search & Data",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2338",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "20:00",
                            "toTime": "20:55",
                            "kind": "BOF",
                            "title": "BoF TypeScript",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1713,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2120",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2149",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2165",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Revue de code : on n'est pas venu-e-s pour souffrir !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2187",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Comment K8S a changé le monde de l'Ops",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2232",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Green washing ou RSE pragmatique, si on choisissait ?",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63602",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "C4 model, la solution pour standardiser mes schémas d'architecture ?",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2253",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "La fin des archis event-based ? Orchestration avec Temporal",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2264",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Rendez vos applications Kafka plus robustes",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2278",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Et l'ANSSI dit \"Voici comment sécuriser un container\"",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2295",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Instrumentez vos applications Java avec OpenTelemetry !",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63611",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "19:00",
                            "toTime": "23:00",
                            "kind": "The Voxx",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1714,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2342",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "07:30",
                            "toTime": "09:00",
                            "kind": "Breakfast",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2344",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "10:00",
                            "toTime": "10:30",
                            "kind": "Coffee Break",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2346",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "11:15",
                            "toTime": "11:35",
                            "kind": "Break",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2348",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "12:20",
                            "toTime": "13:30",
                            "kind": "Lunch",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2350",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "14:15",
                            "toTime": "14:35",
                            "kind": "Break",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2285",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "15:20",
                            "toTime": "15:40",
                            "kind": "Break",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2402",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "16:30",
                            "toTime": "17:00",
                            "kind": "Coffee Break",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2327",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "17:30",
                            "toTime": "17:50",
                            "kind": "Break",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12932",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "18:20",
                            "toTime": "18:40",
                            "kind": "Break",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2405",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "19:00",
                            "toTime": "22:00",
                            "kind": "Meet and Greet",
                            "title": "---",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 77401,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "77351",
                            "roomName": "Salle Ternes",
                            "roomId": 77401,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Fresque",
                            "title": "La Fresque Du Climat",
                            "day": "Thursday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "day": "Friday",
                  "rooms": [
                    {
                      "roomId": 1051,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2121",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "07:00",
                            "toTime": "07:20",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2154",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2170",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Keeping Your Java Hot by Solving the JVM Warmup Problem",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2189",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Naviguer dans le Labyrinthe de la Gestion de Dépendances",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2220",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Apprivoiser la guitare ET la programmation fonctionnelle !",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63603",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": " De la couleurs dans nos Apps",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2246",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "De l'Orchestration à la Chorégraphie, de la Pratique à la Théorie",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12933",
                            "roomName": "Neuilly 151",
                            "roomId": 1051,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Réconcilions Kafka, SQL et Parquet",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1701,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2203",
                            "roomName": "Neuilly 152",
                            "roomId": 1701,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Les développeurs attaqués ! Du conflit à la conversation avec l'Aïkido Verbal",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2237",
                            "roomName": "Neuilly 152",
                            "roomId": 1701,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "Travaillez vos réflexions architecturales en kata",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1702,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2123",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "07:00",
                            "toTime": "07:20",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2150",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2172",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "La compression Web : comment (re)prendre le contrôle ?",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2190",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Hibernate Search 7: Nouveautés et cas pratiques de la recherche full-text et vectorielle Java",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2221",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "C'est une bonne situation ça, Staff Engineer ? 😉",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63604",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "cod == doc",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2255",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Il en est où Henri Motte ? Petit état des lieux du télétravail",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2267",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Super Tech'Rex World 🦖 : L'assembleur contre-attaque 🌟",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2279",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Comment rendre une web app accessible à une personne non voyante ?",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12934",
                            "roomName": "Neuilly 153",
                            "roomId": 1702,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Développement de Malware : Backdoor asynchrone reposant sur des API publiques",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1703,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2125",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "07:00",
                            "toTime": "07:20",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2152",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2174",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Refonte d'un Access Management avec ReBAC",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2191",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Comment ça marche l'IA Generative ? LLM, RAG sous le capot.",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2222",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Comment j'ai trouvé le sens de la vie grâce à WebAssembly ",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63607",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "ADR: Le chaînon manquant",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2245",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Des silos au Platform Engineering en passant par le DevOps : adopter GitOps et aller au-delà de l’hype",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12939",
                            "roomName": "Paris 141",
                            "roomId": 1703,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Mais au fait, ça marche comment les service accounts ?",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1704,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2205",
                            "roomName": "Paris 142",
                            "roomId": 1704,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Serverless : Éviter le vendor locking en construisant sa propre plateforme FaaS avec OpenFaaS et Kubernetes",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2238",
                            "roomName": "Paris 142",
                            "roomId": 1704,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "Le Grand Braquage: Hacker une machine pour ensuite mieux défendre",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1705,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2126",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "07:00",
                            "toTime": "07:20",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2151",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "07:35",
                            "toTime": "08:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2169",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Dépannage des bases de données pour les devs",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2192",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Sous le capot d'une application JVM - Java Flight Recorder / Java Mission Control",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2223",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "🚀 Vers l'infini et l'au-delà : exploration des mondes secrets d'Internet",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63608",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Comment orchestrer l'IA générative pour qu'elle code à votre place le front-end d'une page en moins de 2min.",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2256",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Détection de Fraude chez Floa (Groupe BNP Paribas)",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2268",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Apache Flink - Data Processing en temps réel",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2280",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Software teaming : onboarding, remote, productivité, 4 ans dans la vie d’une équipe",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12937",
                            "roomName": "Paris 143",
                            "roomId": 1705,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Monorepo intelligent et CI rapide avec Nx",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1706,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2124",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2153",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2173",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Au-delà des paris : PMU redéfinit l'expérience de son service de streaming de données temps réel sur AWS!",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2194",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Rhythm 'n Rust : Construire un Synthétiseur de A à Z en Rust",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2226",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Unifié et Universel, le JavaScript avec UnJS",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63605",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Accélérez vos patchs mobiles en prod avec Shorebird & Flutter",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2247",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Angular : le renouveau",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12940",
                            "roomName": "Neuilly 251",
                            "roomId": 1706,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Réinventer l'exploration des bases de données avec Azimutt",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1707,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2122",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2155",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2171",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "L'IA et qualité de code : Construire une synergie avec l’intelligence humaine",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2193",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Et si on divisait par 4 l'empreinte carbone du numérique ?",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2227",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "Interagir avec votre documentation technique via l'Intelligence Artificielle Générative",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63606",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "AssertJ comme un pro",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2257",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Netty, découvrez LE framework IO pour la JVM",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2270",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Créer sa propre VM avec compilation JIT pour les nuls",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2281",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Programmation Parallèle SIMD avec l'API Vector",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12936",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Tout ce que vous avez toujours voulu savoir sur les CNI (Container Network Interface) dans Kubernetes",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2341",
                            "roomName": "Neuilly 252AB",
                            "roomId": 1707,
                            "fromTime": "17:45",
                            "toTime": "18:30",
                            "kind": "Conference",
                            "title": "Les Cast Codeurs en chair, en os et en béret",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1708,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2206",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "LangChain4j en Action - Créez des Applications avec LLMs",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2240",
                            "roomName": "Neuilly 253",
                            "roomId": 1708,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "Apprendre le Machine Learning avec le Titanic",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1709,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2111",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "Comment modéliser l’état du monde en 2100 ? Le Rapport Meadows",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2140",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "Cybersécurité et cyberdéfense : un sujet géopolitique",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2175",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Model Mitosis : ne plus se tromper entre les microservices et le monolithe",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2195",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "L’architecture micro frontend : comment transformer son site web en puzzle géant collaboratif",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2259",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Au-delà des heures : La semaine de 4 jours comme levier d’égalité",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2269",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Des tests fonctionnels aux tests de performance. Robustum, un exemple d’implémentation.",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2284",
                            "roomName": "Amphi bleu",
                            "roomId": 1709,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": " L'Architecture Hexagonale par la pratique, le live coding qui rendra vos applications plus pérennes",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1710,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2127",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2157",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2177",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "JSol'Ex : traitement d'images solaires en Java",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2197",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "Understanding 5 languages memory models (or most of them)",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2228",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "/react fait du slack",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63609",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "SQLite en Wasm... pourquoi faire et comment?",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2248",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "Deep Dive",
                            "title": "Cap sur Gradle 9",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12938",
                            "roomName": "Paris 241",
                            "roomId": 1710,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Accessibilité du web : du design au code comment tendre vers davantage d’inclusion ?",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1711,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2128",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2156",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2176",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "La communauté des Scrum Master chez AXA : naissance et vie d'un collectif",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2196",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": "All-In sur l'Innovation: La Plateforme Poker Winamax",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2231",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "12:35",
                            "toTime": "12:50",
                            "kind": "Lunch Talk",
                            "title": "String Templates - Syntactic sugar or useful improvement?",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "63610",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "13:00",
                            "toTime": "13:15",
                            "kind": "Lunch Talk",
                            "title": "Elevating Pull Requests: The Role of Conventional Comments",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2260",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Le trop méconnu (mais néanmoins incroyable) org-mode d’Emacs",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2271",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Beyond the Pod: Privilege Escalation in Kubernetes",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2282",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "Architecture d’une protection anti-bot",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12941",
                            "roomName": "Paris 242AB",
                            "roomId": 1711,
                            "fromTime": "17:00",
                            "toTime": "17:30",
                            "kind": "Tools-in-Action",
                            "title": "Apache Lucene : de l'indexation textuelle à l'intelligence artificielle",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1712,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2204",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "10:30",
                            "toTime": "12:30",
                            "kind": "2H Hands-on Lab",
                            "title": "Si j’étais un hacker, comment est-ce que je prendrais le contrôle de votre cluster Kubernetes ",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2239",
                            "roomName": "Paris 243",
                            "roomId": 1712,
                            "fromTime": "13:30",
                            "toTime": "16:30",
                            "kind": "3H Hands-on Lab",
                            "title": "RAGtime : Discuter avec vos propres données",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1713,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2129",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "09:00",
                            "toTime": "09:25",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2158",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "09:35",
                            "toTime": "10:00",
                            "kind": "Keynote",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2178",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "10:30",
                            "toTime": "11:15",
                            "kind": "Conference",
                            "title": "Au-delà du Craft : Revisitez Votre Relation avec le Software Craft",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2198",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "11:35",
                            "toTime": "12:20",
                            "kind": "Conference",
                            "title": " L’IA et le handicap : progrès ou exclusion ?",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "70851",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "12:30",
                            "toTime": "13:15",
                            "kind": "Conference",
                            "title": "Speechless Live @ Devoxx ",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [
                            {
                              "userId": "fab-szn",
                              "nom": "Sznajderman",
                              "prenom": "Fabrice"
                            }
                          ],
                          "slot": {
                            "slotId": "2258",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "13:30",
                            "toTime": "14:15",
                            "kind": "Conference",
                            "title": "Le cauchemar des attaquants : une infrastructure sans secret",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2272",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "14:35",
                            "toTime": "15:20",
                            "kind": "Conference",
                            "title": "Papa, dessine moi un mouton 🐑 !",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2283",
                            "roomName": "Maillot",
                            "roomId": 1713,
                            "fromTime": "15:40",
                            "toTime": "16:25",
                            "kind": "Conference",
                            "title": "J'ai terminé les 9 Advents of Code : Leçons Apprises",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 1714,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2343",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "08:00",
                            "toTime": "09:00",
                            "kind": "Breakfast",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2345",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "10:00",
                            "toTime": "10:30",
                            "kind": "Coffee Break",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2347",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "11:15",
                            "toTime": "11:35",
                            "kind": "Break",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2349",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "12:20",
                            "toTime": "13:30",
                            "kind": "Lunch",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2401",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "14:15",
                            "toTime": "14:35",
                            "kind": "Break",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2286",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "15:20",
                            "toTime": "15:40",
                            "kind": "Break",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "12943",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "15:30",
                            "toTime": "15:45",
                            "kind": "Break",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        },
                        {
                          "users": [],
                          "slot": {
                            "slotId": "2403",
                            "roomName": "Hall Maillot",
                            "roomId": 1714,
                            "fromTime": "16:30",
                            "toTime": "17:00",
                            "kind": "Coffee Break",
                            "title": "---",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    },
                    {
                      "roomId": 20951,
                      "slots": [
                        {
                          "users": [],
                          "slot": {
                            "slotId": "21001",
                            "roomName": "Lobby Neuilly",
                            "roomId": 20951,
                            "fromTime": "12:30",
                            "toTime": "14:15",
                            "kind": "Café Philoxx",
                            "title": "Café Philoxx",
                            "day": "Friday",
                            "yearSlot": 2024
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            
            


        }
    },


    {
        url: '/api/speakers/63456',
        method: 'get',
        response: [
            {
                "id": 20772,
                "slotId": "12902",
                "firstname": "Mete",
                "lastname": "Atamel",
                "fullname": "Mete Atamel",
                "imageUrl": "https://devoxxian-image-thumbnails.s3-eu-west-1.amazonaws.com/profile-fd532d48-bce5-4e59-83a7-8d902ebfe0fc.jpg"
            },
            {
                "id": 45104,
                "slotId": "12902",
                "firstname": "Valentin",
                "lastname": "Deleplace",
                "fullname": "Valentin Deleplace",
                "imageUrl": "https://devoxxian-image-thumbnails.s3-eu-west-1.amazonaws.com/profile-cf989f8d-84f5-4a72-996f-1b11bf8f9c07.jpg"
            }
        ]
    },
    {
        url: '/api/slots/63456',
        method: 'get',
        response: { "slotId": "1783", "roomName": "Maillot", "roomId": 1713, "fromTime": "08:30", "toTime": "09:15", "kind": "Conference", "title": "Conf de test au top", "day": "Wednesday", "yearSlot": 2024 }
    },
    {
        url: '/api/days',
        method: 'get',
        response: [
            {
                "dayIndex": 1,
                "dayValue": "wednesday"
            },
            {
                "dayIndex": 2,
                "dayValue": "thursday"
            },
            {
                "dayIndex": 3,
                "dayValue": "friday"
            }
        ]
    }




]