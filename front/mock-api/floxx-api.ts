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
                    "hitSlotId": {
                        "value": "friday_f_neu251_11:45-12:30"
                    },
                    "slot": {
                        "slotId": {
                            "value": "friday_f_neu251_11:45-12:30"
                        },
                        "roomId": {
                            "value": "251"
                        },
                        "fromTime": {
                            "value": "11:45"
                        },
                        "toTime": {
                            "value": "12:30"
                        },
                        "talk": {
                            "talkType": "Conference",
                            "title": "À la découverte des Docker Dev Environments"
                        },
                        "day": {
                            "value": "friday"
                        }
                    },
                    "hitInfo": null
                },
                {
                    "hitSlotId": {
                        "value": "friday_neu253_t_11:45-12:30"
                    },
                    "slot": {
                        "slotId": {
                            "value": "friday_neu253_t_11:45-12:30"
                        },
                        "roomId": {
                            "value": "253"
                        },
                        "fromTime": {
                            "value": "11:45"
                        },
                        "toTime": {
                            "value": "12:30"
                        },
                        "talk": {
                            "talkType": "Conference",
                            "title": "L'IA pour le bon usage des médicaments"
                        },
                        "day": {
                            "value": "friday"
                        }
                    },
                    "hitInfo": null
                },
                {
                    "hitSlotId": {
                        "value": "friday_c_maillot_11:45-12:30"
                    },
                    "slot": {
                        "slotId": {
                            "value": "friday_c_maillot_11:45-12:30"
                        },
                        "roomId": {
                            "value": "Maillot"
                        },
                        "fromTime": {
                            "value": "11:45"
                        },
                        "toTime": {
                            "value": "12:30"
                        },
                        "talk": {
                            "talkType": "Conference",
                            "title": "Les parsers, ou comment exploiter efficacement du texte brut"
                        },
                        "day": {
                            "value": "friday"
                        }
                    },
                    "hitInfo": null
                },
                {
                    "hitSlotId": {
                        "value": "friday_par242AB_11:45-12:30"
                    },
                    "slot": {
                        "slotId": {
                            "value": "friday_par242AB_11:45-12:30"
                        },
                        "roomId": {
                            "value": "242"
                        },
                        "fromTime": {
                            "value": "11:45"
                        },
                        "toTime": {
                            "value": "12:30"
                        },
                        "talk": {
                            "talkType": "Conference",
                            "title": "The Art of Java Type Patterns"
                        },
                        "day": {
                            "value": "friday"
                        }
                    },
                    "hitInfo": null
                },
                {
                    "hitSlotId": {
                        "value": "friday_d_par241_11:45-12:30"
                    },
                    "slot": {
                        "slotId": {
                            "value": "friday_d_par241_11:45-12:30"
                        },
                        "roomId": {
                            "value": "241"
                        },
                        "fromTime": {
                            "value": "11:45"
                        },
                        "toTime": {
                            "value": "12:30"
                        },
                        "talk": {
                            "talkType": "Conference",
                            "title": "Notre cerveau est \"null\"! Quelques biais cognitifs appliqués au métier de dev..."
                        },
                        "day": {
                            "value": "friday"
                        }
                    },
                    "hitInfo": null
                },
                {
                    "hitSlotId": {
                        "value": "friday_par243_t_11:45-12:30"
                    },
                    "slot": {
                        "slotId": {
                            "value": "friday_par243_t_11:45-12:30"
                        },
                        "roomId": {
                            "value": "243"
                        },
                        "fromTime": {
                            "value": "11:45"
                        },
                        "toTime": {
                            "value": "12:30"
                        },
                        "talk": {
                            "talkType": "Conference",
                            "title": "Quarkus Renarde 🦊♥ : un framework Web old-school au goût du jour"
                        },
                        "day": {
                            "value": "friday"
                        }
                    },
                    "hitInfo": null
                }
            ];
        }
    }




]