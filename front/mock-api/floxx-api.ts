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
        url: '/login',
        method: 'post',
        response: ({ query }) => {
            console.log(query)
            return new UserAuthenticated("Fabrice Sznajderman", "token", true);
        }
    },
    {
        url: '/api/tracks-infos',
        method: 'get',
        response: ({ query }) => {
            console.log(query)
            return [
                {
                    "hitSlotId": "friday_f_neu251_11:45-12:30"
                    ,
                    "slot": {
                        "slotId": "friday_f_neu251_11:45-12:30"
                        ,
                        "roomId": "251"
                        ,
                        "fromTime": "11:45"
                        ,
                        "toTime": "12:30"
                        ,
                        "talk": {
                            "talkType": "Conference",
                            "title": "À la découverte des Docker Dev Environments"
                        },
                        "day": "friday"

                    },
                    "hitInfo": {
                        hitSlotId: "friday_f_neu251_11:45-12:30",
                        percentage: 20,
                        dateTime: 1234,
                        userId: "fab-qzn"
                    }
                },
                {
                    "hitSlotId": "friday_neu253_t_11:45-12:30",
                    "slot": {
                        "slotId": "friday_neu253_t_11:45-12:30",
                        "roomId": "253",
                        "fromTime": "11:45",
                        "toTime": "12:30",
                        "talk": {
                            "talkType": "Conference",
                            "title": "L'IA pour le bon usage des médicaments"
                        },
                        "day": "friday"

                    },
                    "hitInfo": {
                        hitSlotId: "friday_neu253_t_11:45-12:30",
                        percentage: 10,
                        dateTime: 1234,
                        userId: "fab-qzn"
                    }
                },
                {
                    "hitSlotId": "friday_c_maillot_11:45-12:30",
                    "slot": {
                        "slotId": {
                            "value": "friday_c_maillot_11:45-12:30"
                        },
                        "roomId": "Maillot"
                        ,
                        "fromTime": "11:45"
                        ,
                        "toTime": "12:30"
                        ,
                        "talk": {
                            "talkType": "Conference",
                            "title": "Les parsers, ou comment exploiter efficacement du texte brut"
                        },
                        "day": "friday"

                    },
                    "hitInfo": {
                        hitSlotId: "friday_c_maillot_11:45-12:30",
                        percentage: 43,
                        dateTime: 1234,
                        userId: "fab-qzn"
                    }
                },
                {
                    "hitSlotId": "friday_par242AB_11:45-12:30",
                    "slot": {
                        "slotId": "friday_par242AB_11:45-12:30"
                        ,
                        "roomId": "242"
                        ,
                        "fromTime": "11:45",
                        "toTime": "12:30"
                        ,
                        "talk": {
                            "talkType": "Conference",
                            "title": "The Art of Java Type Patterns"
                        },
                        "day": "friday"

                    },
                    "hitInfo": {
                        hitSlotId: "friday_par242AB_11:45-12:30",
                        percentage: 40,
                        dateTime: 1234,
                        userId: "fab-qzn"
                    }
                },
                {
                    "hitSlotId": "friday_d_par241_11:45-12:30"
                    ,
                    "slot": {
                        "slotId": "friday_d_par241_11:45-12:30"
                        ,
                        "roomId": "241"
                        ,
                        "fromTime": "11:45"
                        ,
                        "toTime": "12:30"
                        ,
                        "talk": {
                            "talkType": "Conference",
                            "title": "Notre cerveau est \"null\"! Quelques biais cognitifs appliqués au métier de dev..."
                        },
                        "day": "friday"

                    },
                    "hitInfo": {
                        hitSlotId: "friday_d_par241_11:45-12:30",
                        percentage: 60,
                        dateTime: 1234,
                        userId: "fab-qzn"
                    }
                },
                {
                    "hitSlotId": "friday_par243_t_11:45-12:30"
                    ,
                    "slot": {
                        "slotId": "friday_par243_t_11:45-12:30"
                        ,
                        "roomId": "243"
                        ,
                        "fromTime": "11:45"
                        ,
                        "toTime": "12:30"
                        ,
                        "talk": {
                            "talkType": "Conference",
                            "title": "Quarkus Renarde 🦊♥ : un framework Web old-school au goût du jour"
                        },
                        "day": "friday"

                    },
                    "hitInfo": {
                        hitSlotId: "friday_par243_t_11:45-12:30",
                        percentage: 58,
                        dateTime: 1234,
                        userId: "fab-qzn"
                    }
                }
            ];
        }
    }




]