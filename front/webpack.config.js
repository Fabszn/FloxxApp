const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = env => {
    return {
        entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
        output: {
            path: __dirname + '/dist', // Folder to store generated bundle
            filename: 'floxx.[chunkhash].js', // Name of generated bundle after build
            publicPath: '/' // public URL of the output directory when referenced in a browser
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + "/src/public/index.html",
                inject: 'body'
            }),
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(),

        ],
        devServer: {
            contentBase: './src/public',
            port: 8082,
            host: '0.0.0.0',
            disableHostCheck: true,
            before: function(app) {
                mockApi(app)
            }
        },
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm.js'
            }
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }]
        }
    }
}

function tracksInfo() {
    return [{ "hitSlotId": { "value": "friday_f_neu251_11:45-12:30" }, "slot": { "slotId": { "value": "friday_f_neu251_11:45-12:30" }, "roomId": { "value": "251" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "À la découverte des Docker Dev Environments" }, "day": { "value": "friday" } }, "hitInfo": null }, { "hitSlotId": { "value": "friday_neu253_t_11:45-12:30" }, "slot": { "slotId": { "value": "friday_neu253_t_11:45-12:30" }, "roomId": { "value": "253" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "L'IA pour le bon usage des médicaments" }, "day": { "value": "friday" } }, "hitInfo": null }, { "hitSlotId": { "value": "friday_c_maillot_11:45-12:30" }, "slot": { "slotId": { "value": "friday_c_maillot_11:45-12:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Les parsers, ou comment exploiter efficacement du texte brut" }, "day": { "value": "friday" } }, "hitInfo": null }, { "hitSlotId": { "value": "friday_par242AB_11:45-12:30" }, "slot": { "slotId": { "value": "friday_par242AB_11:45-12:30" }, "roomId": { "value": "242" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "The Art of Java Type Patterns" }, "day": { "value": "friday" } }, "hitInfo": null }, { "hitSlotId": { "value": "friday_d_par241_11:45-12:30" }, "slot": { "slotId": { "value": "friday_d_par241_11:45-12:30" }, "roomId": { "value": "241" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Notre cerveau est \"null\"! Quelques biais cognitifs appliqués au métier de dev..." }, "day": { "value": "friday" } }, "hitInfo": null }, { "hitSlotId": { "value": "friday_par243_t_11:45-12:30" }, "slot": { "slotId": { "value": "friday_par243_t_11:45-12:30" }, "roomId": { "value": "243" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Quarkus Renarde 🦊♥ : un framework Web old-school au goût du jour" }, "day": { "value": "friday" } }, "hitInfo": null }];
}


function mockApi(app) {

    app.get('/infos', function(req, res) {
        res.send('devMode');
    })
    app.get('/api/tracks-infos', function(req, res) {
        res.send(tracksInfo());
    })

    app.get('/api/planning', function(req, res) {
        res.json(planning())
    })
    app.get('/api/rooms', function(req, res) {
        res.send({
            "par224M-225M": "224_225",
            "neu_234_235": "234_235",
            "neu_212_213": "212_213",
            "par242B": "242B",
            "par242A": "242A",
            "lobby_neuilly": "None name",
            "neu_232_232": "232",
            "e_neu252": "252",
            "d_par241": "241",
            "par202_203": "202_203",
            "b_amphi": "Amphi bleu",
            "par204": "204",
            "neu253": "253",
            "neu253_t": "253",
            "par221M-222M": "221_222",
            "x_hall_a": "openDataCamp",
            "a_hall": "None name",
            "par243_t": "243",
            "par201": "201",
            "f_neu251": "251",
            "par243": "243",
            "par242AB": "242",
            "c_maillot": "Maillot"
        });
    })

    app.get('/api/slots/_currentUser', function(req, res) {
        res.send(
            [{ "day": { "value": "wednesday" }, "slots": [{ "slotId": { "value": "wednesday_e_neu252_18:30-19:00" }, "roomId": { "value": "252" }, "fromTime": { "value": "21:20" }, "toTime": { "value": "23:00" }, "talk": { "talkType": "Tools-in-Action", "title": "R2DBC = R2D2 + JDBC (enfin presque...)" }, "day": { "value": "wednesday" } }], "currentActiveSlot": null }, { "day": { "value": "thursday" }, "slots": [{ "slotId": { "value": "thursday_e_neu252_10:45-11:30" }, "roomId": { "value": "252" }, "fromTime": { "value": "10:45" }, "toTime": { "value": "11:30" }, "talk": { "talkType": "Conference", "title": "Et si les micro-services n'avaient rien à voir avec la technique ?" }, "day": { "value": "thursday" } }], "currentActiveSlot": null }, { "day": { "value": "friday" }, "slots": [{ "slotId": { "value": "friday_c_maillot_11:45-12:30" }, "roomId": { "value": "Maillot" }, "fromTime": { "value": "11:45" }, "toTime": { "value": "12:30" }, "talk": { "talkType": "Conference", "title": "Les parsers, ou comment exploiter efficacement du texte brut" }, "day": { "value": "friday" } }], "currentActiveSlot": null }]);
    })
    app.post('/login', function(req, res) {
        res.json({ 'name': 'Fabrice Szanjderman', 'isAdmin': true, token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJhaGVyaXRpZXIiLCJmaXJzdG5hbWUiOiJhaGVyaXRpZXJAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZX0.-ymZ5w8e6Whw2BYl0TVlqNA2q4mLe1YoEyjQsDxWJm0' });
    })
    app.get('/api/users', function(req, res) {
        res.json([{
                "userId": "toto",
                "nom": "toto",
                "prenom": "Sznajderman"
            }, {
                "userId": "toto",
                "nom": "toto",
                "prenom": "Sznajderman"
            },
            {
                "userId": "mpierre",
                "nom": "Micheld",
                "prenom": "Pierre"
            }, {
                "userId": "fsznaj",
                "nom": "fabricez",
                "prenom": "Sznajderman"
            },
            {
                "userId": "mpierre",
                "nom": "Micheld",
                "prenom": "Pierre"
            }, {
                "userId": "aheritier",
                "nom": "Arnaudff",
                "prenom": "Heritier"
            },
            {
                "userId": "fsznaj2",
                "nom": "fabrice",
                "prenom": "Sznajderman"
            },
            {
                "userId": "mpierre3",
                "nom": "Michel",
                "prenom": "Pierre"
            },
            {
                "userId": "aheritier4",
                "nom": "Arnaud",
                "prenom": "Heritier"
            }
        ]);
    })



    app.get('/api/slots/friday_b_amphi_13:30-14:15', function(req, res) {
        res.json({
            "slot": {
                "slotId": {
                    "id": "friday_b_amphi_13:30-14:15"
                },
                "roomId": "Maillot",
                "fromTime": "09:30",
                "toTime": "12:30",
                "talk": {
                    "talkType": "University",
                    "title": "La révolution (wasm) est incroyable parce que vraie"
                },
                "day": "wednesday"
            }
        });
    })

    app.get('/api/mapping', function(req, res) {
        res.json([{
                "user": {
                    "userId": {
                        "value": "fsznaj"
                    },
                    "nom": {
                        "value": "Sznajderman"
                    },
                    "prenom": {
                        "value": "fabrice"
                    }
                },
                "slotId": {
                    "value": "wednesday_neu253_t_09:30-12:30"
                }
            },
            {
                "user": {
                    "userId": {
                        "value": "mpierre"
                    },
                    "nom": {
                        "value": "Michel"
                    },
                    "prenom": {
                        "value": "Pierre"
                    }
                },
                "slotId": {
                    "value": "wednesday_b_amphi_13:30-16:30"
                }
            }, {
                "user": null,
                "slotId": {
                    "value": "wednesday_b_amphi_13:30-16:30"
                }
            }
        ]);
    })


    app.post('/all-tracks-info', function(req, res) {
        res.json({
            "friday_c_maillot_15:30-16:15": {
                "hitSlotId": {
                    "id": "friday_c_maillot_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_c_maillot_15:30-16:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Kotlin, Java 4..18, Code Coverage and their best friend — bytecode: scandals, intrigues, investigations"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_par243_t_13:00-13:15": {
                "hitSlotId": {
                    "id": "thursday_par243_t_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par243_t_13:00-13:15"
                    },
                    "roomId": "243",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Equity for software engineers"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_11:45-12:30": {
                "hitSlotId": {
                    "id": "thursday_d_par241_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_11:45-12:30"
                    },
                    "roomId": "241",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Licences open source : entre guerre de clochers et radicalité "
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_c_maillot_09:30-12:30": {
                "hitSlotId": {
                    "id": "wednesday_c_maillot_09:30-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_c_maillot_09:30-12:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "09:30",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "University",
                        "title": "La révolution (wasm) est incroyable parce que vraie"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_par243_t_14:30-15:15": {
                "hitSlotId": {
                    "id": "friday_par243_t_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par243_t_14:30-15:15"
                    },
                    "roomId": "243",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Enrichir son application web sans toucher au code source, c'est possible grâce au nouveau standard Web Extension API !"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_par243_t_09:30-12:30": {
                "hitSlotId": {
                    "id": "wednesday_par243_t_09:30-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par243_t_09:30-12:30"
                    },
                    "roomId": "243",
                    "fromTime": "09:30",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "University",
                        "title": "À la découverte des bases de données"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_d_par241_09:30-12:30": {
                "hitSlotId": {
                    "id": "wednesday_d_par241_09:30-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_d_par241_09:30-12:30"
                    },
                    "roomId": "241",
                    "fromTime": "09:30",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Comprendre GraphQL"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_b_amphi_16:45-17:30": {
                "hitSlotId": {
                    "id": "friday_b_amphi_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_b_amphi_16:45-17:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "La fin des architectures en couches avec l’approche hexagonale"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_f_neu251_13:30-14:15": {
                "hitSlotId": {
                    "id": "thursday_f_neu251_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_f_neu251_13:30-14:15"
                    },
                    "roomId": "251",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Construire et déployer son application avec Argo dans Kubernetes"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_e_neu252_17:45-18:30": {
                "hitSlotId": {
                    "id": "friday_e_neu252_17:45-18:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_e_neu252_17:45-18:30"
                    },
                    "roomId": "252",
                    "fromTime": "17:45",
                    "toTime": "18:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Les Cast Codeurs en 🪑  et en 🦴 "
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_c_maillot_13:00-13:15": {
                "hitSlotId": {
                    "id": "thursday_c_maillot_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_c_maillot_13:00-13:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Major migrations made easy"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_15:30-16:15": {
                "hitSlotId": {
                    "id": "thursday_par242AB_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_15:30-16:15"
                    },
                    "roomId": "242",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Java Next - From Amber to Loom, from Panama to Valhalla"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_10:45-11:30": {
                "hitSlotId": {
                    "id": "thursday_d_par241_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_10:45-11:30"
                    },
                    "roomId": "241",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Rust pour les humains"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_par243_t_15:30-16:15": {
                "hitSlotId": {
                    "id": "friday_par243_t_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par243_t_15:30-16:15"
                    },
                    "roomId": "243",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Développement sans fron-Tiers"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_neu253_t_14:30-15:15": {
                "hitSlotId": {
                    "id": "thursday_neu253_t_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_neu253_t_14:30-15:15"
                    },
                    "roomId": "253",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Data scientists vs. développeurs: des métiers (très!) différents"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_par243_t_18:30-19:00": {
                "hitSlotId": {
                    "id": "thursday_par243_t_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par243_t_18:30-19:00"
                    },
                    "roomId": "243",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "REX: TDD avec TestContainers"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_par242AB_13:30-14:15": {
                "hitSlotId": {
                    "id": "friday_par242AB_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par242AB_13:30-14:15"
                    },
                    "roomId": "242",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Le secret des illoominaties "
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_b_amphi_15:30-16:15": {
                "hitSlotId": {
                    "id": "friday_b_amphi_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_b_amphi_15:30-16:15"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Architecture microservices et cohérence des données : mais on fait comment pour de vrai ?"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_f_neu251_17:45-18:15": {
                "hitSlotId": {
                    "id": "wednesday_f_neu251_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_f_neu251_17:45-18:15"
                    },
                    "roomId": "251",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Merci Keptn Obvious! SLOs observables avec Prometheus et Keptn"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_c_maillot_13:30-16:30": {
                "hitSlotId": {
                    "id": "wednesday_c_maillot_13:30-16:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_c_maillot_13:30-16:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "13:30",
                    "toTime": "16:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Sécuriser son cluster Kubernetes on-premise from scratch"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_b_amphi_15:30-16:15": {
                "hitSlotId": {
                    "id": "thursday_b_amphi_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_b_amphi_15:30-16:15"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Log4shell, c'est la faute à la fondation Apache ?"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_17:45-18:15": {
                "hitSlotId": {
                    "id": "thursday_par242AB_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_17:45-18:15"
                    },
                    "roomId": "242",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Comment Betclic utilise son datalake pour générer des tests de charge et simuler des évènements sportifs ?"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_f_neu251_11:45-12:30": {
                "hitSlotId": {
                    "id": "friday_f_neu251_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_f_neu251_11:45-12:30"
                    },
                    "roomId": "251",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "À la découverte des Docker Dev Environments"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_b_amphi_18:30-19:00": {
                "hitSlotId": {
                    "id": "thursday_b_amphi_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_b_amphi_18:30-19:00"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Building your first malicious chrome extension 😈"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_e_neu252_13:00-13:15": {
                "hitSlotId": {
                    "id": "friday_e_neu252_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_e_neu252_13:00-13:15"
                    },
                    "roomId": "252",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Tests Cucumber: légendes et réalité"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_c_maillot_17:45-18:15": {
                "hitSlotId": {
                    "id": "wednesday_c_maillot_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_c_maillot_17:45-18:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "(Re) Découvrir les outils UNIX"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_d_par241_14:30-15:15": {
                "hitSlotId": {
                    "id": "friday_d_par241_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_d_par241_14:30-15:15"
                    },
                    "roomId": "241",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "La signature électronique vue par des développeurs Java."
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_e_neu252_11:45-12:30": {
                "hitSlotId": {
                    "id": "friday_e_neu252_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_e_neu252_11:45-12:30"
                    },
                    "roomId": "252",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "La scale-up, l’autonomie et le sous-marin nucléaire"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_par242AB_13:30-16:30": {
                "hitSlotId": {
                    "id": "wednesday_par242AB_13:30-16:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par242AB_13:30-16:30"
                    },
                    "roomId": "242",
                    "fromTime": "13:30",
                    "toTime": "16:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Loom nous Protègera-t-il du Braquage Temporel ?"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_par243_t_17:00-17:30": {
                "hitSlotId": {
                    "id": "wednesday_par243_t_17:00-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par243_t_17:00-17:30"
                    },
                    "roomId": "243",
                    "fromTime": "17:00",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Ajouter de A à Z une barre de recherche dans son application"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_10:45-11:30": {
                "hitSlotId": {
                    "id": "thursday_par242AB_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_10:45-11:30"
                    },
                    "roomId": "242",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "JOOQ, joy of SQL"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_e_neu252_15:30-16:15": {
                "hitSlotId": {
                    "id": "friday_e_neu252_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_e_neu252_15:30-16:15"
                    },
                    "roomId": "252",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Ensemble Programming Toolbox"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_15:30-16:15": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_15:30-16:15"
                    },
                    "roomId": "252",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Gerrit, Jenkins et Sonarqube entrent dans un bar..."
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_f_neu251_13:00-13:15": {
                "hitSlotId": {
                    "id": "thursday_f_neu251_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_f_neu251_13:00-13:15"
                    },
                    "roomId": "251",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Introduction à REMIX"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_d_par241_11:45-12:30": {
                "hitSlotId": {
                    "id": "friday_d_par241_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_d_par241_11:45-12:30"
                    },
                    "roomId": "241",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Notre cerveau est \"null\"! Quelques biais cognitifs appliqués au métier de dev..."
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_d_par241_13:00-13:15": {
                "hitSlotId": {
                    "id": "friday_d_par241_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_d_par241_13:00-13:15"
                    },
                    "roomId": "241",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": " Profiler un pod dans Kubernetes avec kube-flame"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_e_neu252_13:30-14:15": {
                "hitSlotId": {
                    "id": "friday_e_neu252_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_e_neu252_13:30-14:15"
                    },
                    "roomId": "252",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Rendez vos interfaces fiables en faisant aimer les tests à votre équipe !"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_f_neu251_10:45-11:30": {
                "hitSlotId": {
                    "id": "friday_f_neu251_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_f_neu251_10:45-11:30"
                    },
                    "roomId": "251",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Comment OpenTelemetry peut transformer votre monitoring en unifiant vos logs/metrics/traces"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_18:30-19:00": {
                "hitSlotId": {
                    "id": "thursday_par242AB_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_18:30-19:00"
                    },
                    "roomId": "242",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Spécifier ses API asynchrones avec AsyncAPI"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_e_neu252_16:45-17:30": {
                "hitSlotId": {
                    "id": "friday_e_neu252_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_e_neu252_16:45-17:30"
                    },
                    "roomId": "252",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Pourquoi DevOps ne tient pas ses promesses ?"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_neu253_t_15:30-16:15": {
                "hitSlotId": {
                    "id": "friday_neu253_t_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_neu253_t_15:30-16:15"
                    },
                    "roomId": "253",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Comprendre le comportement des français, c'est possible grâce à la data chez Leboncoin "
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_f_neu251_18:30-19:00": {
                "hitSlotId": {
                    "id": "wednesday_f_neu251_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_f_neu251_18:30-19:00"
                    },
                    "roomId": "251",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Créer & distribuer un plugin pour Kubernetes en quelques minutes ? Easy ! 🙂"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_f_neu251_15:30-16:15": {
                "hitSlotId": {
                    "id": "friday_f_neu251_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_f_neu251_15:30-16:15"
                    },
                    "roomId": "251",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "CI/CD, le divorce serait-il prononcé ?"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_c_maillot_10:45-11:30": {
                "hitSlotId": {
                    "id": "thursday_c_maillot_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_c_maillot_10:45-11:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Développer des applications observables pour la production"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_b_amphi_18:30-19:00": {
                "hitSlotId": {
                    "id": "wednesday_b_amphi_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_b_amphi_18:30-19:00"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Construisons ensemble une application Micro-Frontend multi-frameworks avec Webpack 5 Module Federation"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_f_neu251_11:45-12:30": {
                "hitSlotId": {
                    "id": "thursday_f_neu251_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_f_neu251_11:45-12:30"
                    },
                    "roomId": "251",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Dans les coulisses du \"Cloud\""
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_neu253_t_17:45-18:15": {
                "hitSlotId": {
                    "id": "wednesday_neu253_t_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_neu253_t_17:45-18:15"
                    },
                    "roomId": "253",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "AssemblyScript : TypeScript sous stéroïdes grâce à WebAssembly ?"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_d_par241_13:30-16:30": {
                "hitSlotId": {
                    "id": "wednesday_d_par241_13:30-16:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_d_par241_13:30-16:30"
                    },
                    "roomId": "241",
                    "fromTime": "13:30",
                    "toTime": "16:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Zero Trust : the new normal !"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_e_neu252_09:30-12:30": {
                "hitSlotId": {
                    "id": "wednesday_e_neu252_09:30-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_e_neu252_09:30-12:30"
                    },
                    "roomId": "252",
                    "fromTime": "09:30",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Ansible Ultimate Edition"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_par243_t_11:45-12:30": {
                "hitSlotId": {
                    "id": "friday_par243_t_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par243_t_11:45-12:30"
                    },
                    "roomId": "243",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Quarkus Renarde 🦊♥ : un framework Web old-school au goût du jour"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_11:45-12:30": {
                "hitSlotId": {
                    "id": "thursday_par242AB_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_11:45-12:30"
                    },
                    "roomId": "242",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Comparing Native Java REST API Frameworks"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_neu253_t_11:45-12:30": {
                "hitSlotId": {
                    "id": "friday_neu253_t_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_neu253_t_11:45-12:30"
                    },
                    "roomId": "253",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "L'IA pour le bon usage des médicaments"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_16:45-17:30": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_16:45-17:30"
                    },
                    "roomId": "252",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Comment écrire des tests que vous ne regretterez pas demain"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_14:30-15:15": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_14:30-15:15"
                    },
                    "roomId": "252",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Vers une culture où tout le monde est responsable de l'indisponibilité"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_f_neu251_13:30-14:15": {
                "hitSlotId": {
                    "id": "friday_f_neu251_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_f_neu251_13:30-14:15"
                    },
                    "roomId": "251",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Père Castor 🐻, raconte nous une histoire (d'OPS)"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_b_amphi_09:30-12:30": {
                "hitSlotId": {
                    "id": "wednesday_b_amphi_09:30-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_b_amphi_09:30-12:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "09:30",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Remèdes aux oomkill, warm-ups, et lenteurs pour des conteneurs JVM"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_c_maillot_10:45-11:30": {
                "hitSlotId": {
                    "id": "friday_c_maillot_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_c_maillot_10:45-11:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Migrer de Spring MVC à Spring Web Flux"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_13:00-13:15": {
                "hitSlotId": {
                    "id": "thursday_d_par241_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_13:00-13:15"
                    },
                    "roomId": "241",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Simplifiez vos revues de code avec le rebase interactif"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_14:30-15:15": {
                "hitSlotId": {
                    "id": "thursday_d_par241_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_14:30-15:15"
                    },
                    "roomId": "241",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Etre développeur: grandir et se développer"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_c_maillot_14:30-15:15": {
                "hitSlotId": {
                    "id": "thursday_c_maillot_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_c_maillot_14:30-15:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "De OUI.sncf à SNCF Connect, 10 ans de mobile natif à Flutter"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_par243_t_13:00-13:15": {
                "hitSlotId": {
                    "id": "friday_par243_t_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par243_t_13:00-13:15"
                    },
                    "roomId": "243",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Depuis 2 ans, je suis la seule à lire mes mails ! (ou presque)"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_par242AB_14:30-15:15": {
                "hitSlotId": {
                    "id": "friday_par242AB_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par242AB_14:30-15:15"
                    },
                    "roomId": "242",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Valhalla: To the Hell and Back"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_b_amphi_11:45-12:30": {
                "hitSlotId": {
                    "id": "thursday_b_amphi_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_b_amphi_11:45-12:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Et si on faisait le tour de CORS ? ⛵"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_f_neu251_17:00-17:30": {
                "hitSlotId": {
                    "id": "wednesday_f_neu251_17:00-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_f_neu251_17:00-17:30"
                    },
                    "roomId": "251",
                    "fromTime": "17:00",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Du Chaos Engineering avec Litmus et Jenkins"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_c_maillot_16:45-17:30": {
                "hitSlotId": {
                    "id": "thursday_c_maillot_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_c_maillot_16:45-17:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Apprendre à coder en maternelle, sans écran"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_neu253_t_09:30-12:30": {
                "hitSlotId": {
                    "id": "wednesday_neu253_t_09:30-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_neu253_t_09:30-12:30"
                    },
                    "roomId": "253",
                    "fromTime": "19:15",
                    "toTime": "22:50",
                    "talk": {
                        "talkType": "University",
                        "title": "Théorie des Categories: vous la connaissez déjà."
                    },
                    "day": "friday"
                },
                "hitInfo": {
                    "hitid": "29d672d3-c8c9-411c-bc39-3c938326a104",
                    "hitSlotId": "wednesday_neu253_t_09:30-12:30",
                    "percentage": 10,
                    "dateTime": 1647627270490
                }
            },
            "friday_c_maillot_11:45-12:30": {
                "hitSlotId": {
                    "id": "friday_c_maillot_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_c_maillot_11:45-12:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Les parsers, ou comment exploiter efficacement du texte brut"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_par243_t_17:45-18:15": {
                "hitSlotId": {
                    "id": "wednesday_par243_t_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par243_t_17:45-18:15"
                    },
                    "roomId": "243",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Rendez l'agilité aux développeur(se)s !"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_par243_t_14:30-15:15": {
                "hitSlotId": {
                    "id": "thursday_par243_t_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par243_t_14:30-15:15"
                    },
                    "roomId": "243",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Cloud public, mais données privées !"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_d_par241_17:00-17:30": {
                "hitSlotId": {
                    "id": "wednesday_d_par241_17:00-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_d_par241_17:00-17:30"
                    },
                    "roomId": "241",
                    "fromTime": "17:00",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "𝔸𝕛𝕠𝕦𝕥𝕖𝕫 du caractère à 𝕧𝕠𝕥𝕣𝕖 site 🚀"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_c_maillot_17:45-18:15": {
                "hitSlotId": {
                    "id": "thursday_c_maillot_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_c_maillot_17:45-18:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Accéder à mon cerveau par une API"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_e_neu252_14:30-15:15": {
                "hitSlotId": {
                    "id": "friday_e_neu252_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_e_neu252_14:30-15:15"
                    },
                    "roomId": "252",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Mob programming, la véritable approche du développement en équipe"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_par243_t_16:45-17:30": {
                "hitSlotId": {
                    "id": "thursday_par243_t_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par243_t_16:45-17:30"
                    },
                    "roomId": "243",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Petit guide pratique pour commencer un design system"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_e_neu252_17:45-18:15": {
                "hitSlotId": {
                    "id": "wednesday_e_neu252_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_e_neu252_17:45-18:15"
                    },
                    "roomId": "252",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Type algébrique de données en Java 17"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_f_neu251_13:30-16:30": {
                "hitSlotId": {
                    "id": "wednesday_f_neu251_13:30-16:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_f_neu251_13:30-16:30"
                    },
                    "roomId": "251",
                    "fromTime": "13:30",
                    "toTime": "16:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Construction d'APIs Géographiques à base d'Open Data, PostgreSQL & PostGIS"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_c_maillot_16:45-17:30": {
                "hitSlotId": {
                    "id": "friday_c_maillot_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_c_maillot_16:45-17:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Réception d'image satellite 🛰️ avec un Raspberry"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_13:30-14:15": {
                "hitSlotId": {
                    "id": "thursday_par242AB_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_13:30-14:15"
                    },
                    "roomId": "242",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Dois-je migrer en Reactive et comment ?"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_b_amphi_11:45-12:30": {
                "hitSlotId": {
                    "id": "friday_b_amphi_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_b_amphi_11:45-12:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Doctolib a besoin d'une base de données plus puissante. Ok, mais laquelle?"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_b_amphi_17:45-18:15": {
                "hitSlotId": {
                    "id": "wednesday_b_amphi_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_b_amphi_17:45-18:15"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Bien maîtriser les Dev Tools de vos navigateurs"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_par243_t_13:30-14:15": {
                "hitSlotId": {
                    "id": "friday_par243_t_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par243_t_13:30-14:15"
                    },
                    "roomId": "243",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Art & Entropie: Du Chaos dans ton Frontend"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_par242AB_09:30-12:30": {
                "hitSlotId": {
                    "id": "wednesday_par242AB_09:30-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par242AB_09:30-12:30"
                    },
                    "roomId": "242",
                    "fromTime": "09:30",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Spring Security - décodage et démystification 🕵️"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_d_par241_13:30-14:15": {
                "hitSlotId": {
                    "id": "friday_d_par241_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_d_par241_13:30-14:15"
                    },
                    "roomId": "241",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Dates et heures à l'horizon ? Fuyez… ou venez découvrir tous les pièges qu'elles vous tendent !"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_b_amphi_13:30-14:15": {
                "hitSlotId": {
                    "id": "thursday_b_amphi_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_b_amphi_13:30-14:15"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Protéger son organisation des attaques par le système de build"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_neu253_t_13:00-13:15": {
                "hitSlotId": {
                    "id": "friday_neu253_t_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_neu253_t_13:00-13:15"
                    },
                    "roomId": "253",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Record du monde - Tour d’horizon et cas d’utilisation des records"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_f_neu251_09:30-12:30": {
                "hitSlotId": {
                    "id": "wednesday_f_neu251_09:30-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_f_neu251_09:30-12:30"
                    },
                    "roomId": "251",
                    "fromTime": "09:30",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Gradle: Donnez de l’amour à votre build, il vous le rendra!"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_par242AB_13:00-13:15": {
                "hitSlotId": {
                    "id": "friday_par242AB_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par242AB_13:00-13:15"
                    },
                    "roomId": "242",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Mon site déjà en ligne doit être accessible, je fais comment ?"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_par243_t_10:45-11:30": {
                "hitSlotId": {
                    "id": "friday_par243_t_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par243_t_10:45-11:30"
                    },
                    "roomId": "243",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "React dans tous ses états"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_par242AB_10:45-11:30": {
                "hitSlotId": {
                    "id": "friday_par242AB_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par242AB_10:45-11:30"
                    },
                    "roomId": "242",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "10 ans de Devoxx FR et de Java"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_c_maillot_13:30-14:15": {
                "hitSlotId": {
                    "id": "thursday_c_maillot_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_c_maillot_13:30-14:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Traiter 1 million de messages par CPU par Go de mémoire avec Quarkus et Microprofile reactive messaging kafka à Décathlon"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_par242AB_17:00-17:30": {
                "hitSlotId": {
                    "id": "wednesday_par242AB_17:00-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par242AB_17:00-17:30"
                    },
                    "roomId": "242",
                    "fromTime": "17:00",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Sécurisez votre pipeline de livraison multi-cloud avec HashiCorp Vault"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_f_neu251_13:00-13:15": {
                "hitSlotId": {
                    "id": "friday_f_neu251_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_f_neu251_13:00-13:15"
                    },
                    "roomId": "251",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Go Generics"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_b_amphi_10:45-11:30": {
                "hitSlotId": {
                    "id": "thursday_b_amphi_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_b_amphi_10:45-11:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "OAUTH 2.1 expliqué simplement (même si tu n'es pas dev) !"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_f_neu251_14:30-15:15": {
                "hitSlotId": {
                    "id": "thursday_f_neu251_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_f_neu251_14:30-15:15"
                    },
                    "roomId": "251",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Ciel ! Mon Kubernetes mine des bitcoins !"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_15:30-16:15": {
                "hitSlotId": {
                    "id": "thursday_d_par241_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_15:30-16:15"
                    },
                    "roomId": "241",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Coder pour l'Éternité, comprendre le développement sur la blockchain Ethereum."
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_17:45-18:15": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_17:45-18:15"
                    },
                    "roomId": "252",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "The unknowns of JUnit 5"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_13:00-13:15": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_13:00-13:15"
                    },
                    "roomId": "252",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Fuzzing en Go"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_neu253_t_14:30-15:15": {
                "hitSlotId": {
                    "id": "friday_neu253_t_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_neu253_t_14:30-15:15"
                    },
                    "roomId": "253",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "En quête du Clean Code avec Sonar, 20 000 lieues sous un océan de code!"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_e_neu252_17:00-17:30": {
                "hitSlotId": {
                    "id": "wednesday_e_neu252_17:00-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_e_neu252_17:00-17:30"
                    },
                    "roomId": "252",
                    "fromTime": "17:00",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Ligne de Commande, Kotlin et Star Wars : Présenter PicoCLI avec le combo gagnant"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_c_maillot_14:30-15:15": {
                "hitSlotId": {
                    "id": "friday_c_maillot_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_c_maillot_14:30-15:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Première application mobile Flutter ? Ne faites pas les mêmes erreurs que nous !"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_b_amphi_16:45-17:30": {
                "hitSlotId": {
                    "id": "thursday_b_amphi_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_b_amphi_16:45-17:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Cybersécurité et générateurs de nombres aléatoires"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_par243_t_18:30-19:00": {
                "hitSlotId": {
                    "id": "wednesday_par243_t_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par243_t_18:30-19:00"
                    },
                    "roomId": "243",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Materialize+Redpanda: streaming for the rest of us"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_f_neu251_15:30-16:15": {
                "hitSlotId": {
                    "id": "thursday_f_neu251_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_f_neu251_15:30-16:15"
                    },
                    "roomId": "251",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Anatomie d'une base SQL distribuée (YugabyteDB)"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_neu253_t_17:00-17:30": {
                "hitSlotId": {
                    "id": "wednesday_neu253_t_17:00-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_neu253_t_17:00-17:30"
                    },
                    "roomId": "253",
                    "fromTime": "17:00",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Gitpod: la fin des frictions inutiles pour contribuer à un projet OSS ?"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_neu253_t_13:30-16:30": {
                "hitSlotId": {
                    "id": "wednesday_neu253_t_13:30-16:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_neu253_t_13:30-16:30"
                    },
                    "roomId": "253",
                    "fromTime": "13:30",
                    "toTime": "16:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Architecturoplastie hexagonale d’un backend Node.js : Opération à code ouvert"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_neu253_t_13:00-13:15": {
                "hitSlotId": {
                    "id": "thursday_neu253_t_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_neu253_t_13:00-13:15"
                    },
                    "roomId": "253",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Rendu 3D, la grande illusion expliquée"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_13:30-14:15": {
                "hitSlotId": {
                    "id": "thursday_d_par241_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_13:30-14:15"
                    },
                    "roomId": "241",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Des Z’Individus et des Z’Interactions, ou l’inclusion des (neuro) atypiques dans les équipes."
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_par243_t_13:30-16:30": {
                "hitSlotId": {
                    "id": "wednesday_par243_t_13:30-16:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par243_t_13:30-16:30"
                    },
                    "roomId": "243",
                    "fromTime": "13:30",
                    "toTime": "16:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Initiation concrète à la compilation"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_b_amphi_17:00-17:30": {
                "hitSlotId": {
                    "id": "wednesday_b_amphi_17:00-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_b_amphi_17:00-17:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "17:00",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Gagner du temps en créant des extensions pour vos navigateurs"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_14:30-15:15": {
                "hitSlotId": {
                    "id": "thursday_par242AB_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_14:30-15:15"
                    },
                    "roomId": "242",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Micronaut AOT: optimiser vos applications pour le JIT et GraalVM"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_par243_t_11:45-12:30": {
                "hitSlotId": {
                    "id": "thursday_par243_t_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par243_t_11:45-12:30"
                    },
                    "roomId": "243",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Le (dés)amour des tests web"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_10:45-11:30": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_10:45-11:30"
                    },
                    "roomId": "252",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Et si les micro-services n'avaient rien à voir avec la technique ?"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_e_neu252_18:30-19:00": {
                "hitSlotId": {
                    "id": "wednesday_e_neu252_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_e_neu252_18:30-19:00"
                    },
                    "roomId": "252",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "R2DBC = R2D2 + JDBC (enfin presque...)"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_neu253_t_11:45-12:30": {
                "hitSlotId": {
                    "id": "thursday_neu253_t_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_neu253_t_11:45-12:30"
                    },
                    "roomId": "253",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "D'un hack au datamesh, l'évolution du data engineering chez Leboncoin"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_par243_t_16:45-17:30": {
                "hitSlotId": {
                    "id": "friday_par243_t_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par243_t_16:45-17:30"
                    },
                    "roomId": "243",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Les fonctions (récursives) décortiquées"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_c_maillot_15:30-16:15": {
                "hitSlotId": {
                    "id": "thursday_c_maillot_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_c_maillot_15:30-16:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Save the date !"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_d_par241_18:30-19:00": {
                "hitSlotId": {
                    "id": "wednesday_d_par241_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_d_par241_18:30-19:00"
                    },
                    "roomId": "241",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Oubliez Docker, appelez moi Compose"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_13:30-14:15": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_13:30-14:15"
                    },
                    "roomId": "252",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "What's cooking in Maven?"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_par243_t_17:45-18:15": {
                "hitSlotId": {
                    "id": "thursday_par243_t_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par243_t_17:45-18:15"
                    },
                    "roomId": "243",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Après la censure, l’auto censure… mais là c’est drôle, éducatif et avec de l’IA"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_16:45-17:30": {
                "hitSlotId": {
                    "id": "thursday_d_par241_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_16:45-17:30"
                    },
                    "roomId": "241",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Apprendre la musique - developer edition"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_c_maillot_17:00-17:30": {
                "hitSlotId": {
                    "id": "wednesday_c_maillot_17:00-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_c_maillot_17:00-17:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "17:00",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Pourquoi vous n'attirerez et ne retiendrez pas les femmes dans vos équipes tech !"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_neu253_t_16:45-17:30": {
                "hitSlotId": {
                    "id": "thursday_neu253_t_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_neu253_t_16:45-17:30"
                    },
                    "roomId": "253",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Analytique temp réel pour vos utilisateurs avec Apache Pinot"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_par242AB_16:45-17:30": {
                "hitSlotId": {
                    "id": "friday_par242AB_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par242AB_16:45-17:30"
                    },
                    "roomId": "242",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "400 endpoints d'API et 2000 types : genèse et utilisation du nouveau client Java pour Elasticsearch"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "wednesday_e_neu252_13:30-16:30": {
                "hitSlotId": {
                    "id": "wednesday_e_neu252_13:30-16:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_e_neu252_13:30-16:30"
                    },
                    "roomId": "252",
                    "fromTime": "13:30",
                    "toTime": "16:30",
                    "talk": {
                        "talkType": "University",
                        "title": "Java application security the hard way - a workshop for the serious developer"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "friday_neu253_t_10:45-11:30": {
                "hitSlotId": {
                    "id": "friday_neu253_t_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_neu253_t_10:45-11:30"
                    },
                    "roomId": "253",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Kafka Streams @ Carrefour : du big data à la vitesse de l'éclair"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_17:45-18:15": {
                "hitSlotId": {
                    "id": "thursday_d_par241_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_17:45-18:15"
                    },
                    "roomId": "241",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Tailwind ou le futur du CSS"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_par243_t_13:30-14:15": {
                "hitSlotId": {
                    "id": "thursday_par243_t_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par243_t_13:30-14:15"
                    },
                    "roomId": "243",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "entiers, virgules flottantes ou représentations exotiques : parlons d'élégance"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_f_neu251_17:45-18:15": {
                "hitSlotId": {
                    "id": "thursday_f_neu251_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_f_neu251_17:45-18:15"
                    },
                    "roomId": "251",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Dekorate: l'outil pour deployer tes microservices sur Kubernetes"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_d_par241_15:30-16:15": {
                "hitSlotId": {
                    "id": "friday_d_par241_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_d_par241_15:30-16:15"
                    },
                    "roomId": "241",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Cryptanalyse de la machine Enigma : entre espionnage et mathématiques"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_neu253_t_15:30-16:15": {
                "hitSlotId": {
                    "id": "thursday_neu253_t_15:30-16:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_neu253_t_15:30-16:15"
                    },
                    "roomId": "253",
                    "fromTime": "15:30",
                    "toTime": "16:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Comment j'ai aidé ma fille à lire avec le machine learning"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_f_neu251_14:30-15:15": {
                "hitSlotId": {
                    "id": "friday_f_neu251_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_f_neu251_14:30-15:15"
                    },
                    "roomId": "251",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Qu'avons nous appris après un an passé à développer des opérateurs Kubernetes ?"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_d_par241_16:45-17:30": {
                "hitSlotId": {
                    "id": "friday_d_par241_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_d_par241_16:45-17:30"
                    },
                    "roomId": "241",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "De l’OutOfMemory à l’OutOfSerenity, quand un consultant devient chef d’entreprise."
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_f_neu251_10:45-11:30": {
                "hitSlotId": {
                    "id": "thursday_f_neu251_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_f_neu251_10:45-11:30"
                    },
                    "roomId": "251",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Comprendre les enjeux de consommation de ressource et d’énergie dans le secteur numérique"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_b_amphi_13:30-14:15": {
                "hitSlotId": {
                    "id": "friday_b_amphi_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_b_amphi_13:30-14:15"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Mieux maitriser TLS, OpenSSL et les certificats"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_c_maillot_11:45-12:30": {
                "hitSlotId": {
                    "id": "thursday_c_maillot_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_c_maillot_11:45-12:30"
                    },
                    "roomId": "Maillot",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Jetpack Compose: UI toolkit pour Android et Desktop"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_par242AB_17:45-18:15": {
                "hitSlotId": {
                    "id": "wednesday_par242AB_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par242AB_17:45-18:15"
                    },
                    "roomId": "242",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Into the flamegraph: From the primitives through advanced concepts"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "wednesday_b_amphi_13:30-16:30": {
                "hitSlotId": {
                    "id": "wednesday_b_amphi_13:30-16:30"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_b_amphi_13:30-16:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "21:50",
                    "toTime": "22:50",
                    "talk": {
                        "talkType": "University",
                        "title": "Kafka: carte des pièges à l’usage des développeurs et des ops"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_b_amphi_14:30-15:15": {
                "hitSlotId": {
                    "id": "thursday_b_amphi_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_b_amphi_14:30-15:15"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Connaissez-vous vraiment JWT ?"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_c_maillot_18:30-19:00": {
                "hitSlotId": {
                    "id": "wednesday_c_maillot_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_c_maillot_18:30-19:00"
                    },
                    "roomId": "Maillot",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Github Co-Pilot : Addictif ou Efficace ?"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_f_neu251_18:30-19:00": {
                "hitSlotId": {
                    "id": "thursday_f_neu251_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_f_neu251_18:30-19:00"
                    },
                    "roomId": "251",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Jouer à Minecraft avec une IA générée par GPT-3"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_11:45-12:30": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_11:45-12:30"
                    },
                    "roomId": "252",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Model-Driven Design"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "thursday_neu253_t_18:30-19:00": {
                "hitSlotId": {
                    "id": "thursday_neu253_t_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_neu253_t_18:30-19:00"
                    },
                    "roomId": "253",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Coder avec Crystal pour ne pas perdre la boule"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_par242AB_11:45-12:30": {
                "hitSlotId": {
                    "id": "friday_par242AB_11:45-12:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_par242AB_11:45-12:30"
                    },
                    "roomId": "242",
                    "fromTime": "11:45",
                    "toTime": "12:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "The Art of Java Type Patterns"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_par243_t_10:45-11:30": {
                "hitSlotId": {
                    "id": "thursday_par243_t_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par243_t_10:45-11:30"
                    },
                    "roomId": "243",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Micro Frontends REX - Diviser pour mieux régner !"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_f_neu251_16:45-17:30": {
                "hitSlotId": {
                    "id": "friday_f_neu251_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_f_neu251_16:45-17:30"
                    },
                    "roomId": "251",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Créer un jeu cross plateforme... en Rust!"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_neu253_t_17:45-18:15": {
                "hitSlotId": {
                    "id": "thursday_neu253_t_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_neu253_t_17:45-18:15"
                    },
                    "roomId": "253",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Git, back to the future "
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_d_par241_17:45-18:15": {
                "hitSlotId": {
                    "id": "wednesday_d_par241_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_d_par241_17:45-18:15"
                    },
                    "roomId": "241",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Templates d'email: l'aventure dont vous êtes le héros"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_d_par241_18:30-19:00": {
                "hitSlotId": {
                    "id": "thursday_d_par241_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_d_par241_18:30-19:00"
                    },
                    "roomId": "241",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Le DOM Testing : Testez vos applications front plus facilement et efficacement !"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_par242AB_18:30-19:00": {
                "hitSlotId": {
                    "id": "wednesday_par242AB_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_par242AB_18:30-19:00"
                    },
                    "roomId": "242",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "La sécurité avec les headers HTTP : Tour d’horizon des attaques et défenses possibles"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_e_neu252_18:30-19:00": {
                "hitSlotId": {
                    "id": "thursday_e_neu252_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_e_neu252_18:30-19:00"
                    },
                    "roomId": "252",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Exploiter facilement des fonctions natives avec le Projet Panama depuis Java"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_c_maillot_13:00-13:15": {
                "hitSlotId": {
                    "id": "friday_c_maillot_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_c_maillot_13:00-13:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "Les Java Array Lists ne sont pas magiques"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_e_neu252_10:45-11:30": {
                "hitSlotId": {
                    "id": "friday_e_neu252_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_e_neu252_10:45-11:30"
                    },
                    "roomId": "252",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Développ(eur|euse) Senior avec 6 ans d’expérience, et après ?"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_13:00-13:15": {
                "hitSlotId": {
                    "id": "thursday_par242AB_13:00-13:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_13:00-13:15"
                    },
                    "roomId": "242",
                    "fromTime": "13:00",
                    "toTime": "13:15",
                    "talk": {
                        "talkType": "Quickie",
                        "title": "J'ai presque fini ! Pourquoi notre cerveau nous aide pas sur ce coup là..."
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "wednesday_neu253_t_18:30-19:00": {
                "hitSlotId": {
                    "id": "wednesday_neu253_t_18:30-19:00"
                },
                "slot": {
                    "slotId": {
                        "id": "wednesday_neu253_t_18:30-19:00"
                    },
                    "roomId": "253",
                    "fromTime": "18:30",
                    "toTime": "19:00",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "Reprenez le contrôle de votre bash en devenant un ninja de la CLI ! 😎"
                    },
                    "day": "wednesday"
                },
                "hitInfo": null
            },
            "thursday_par242AB_16:45-17:30": {
                "hitSlotId": {
                    "id": "thursday_par242AB_16:45-17:30"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_par242AB_16:45-17:30"
                    },
                    "roomId": "242",
                    "fromTime": "16:45",
                    "toTime": "17:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Montée de version sans interruption"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_c_maillot_13:30-14:15": {
                "hitSlotId": {
                    "id": "friday_c_maillot_13:30-14:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_c_maillot_13:30-14:15"
                    },
                    "roomId": "Maillot",
                    "fromTime": "13:30",
                    "toTime": "14:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Les lois universelles de la performance"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "thursday_b_amphi_17:45-18:15": {
                "hitSlotId": {
                    "id": "thursday_b_amphi_17:45-18:15"
                },
                "slot": {
                    "slotId": {
                        "id": "thursday_b_amphi_17:45-18:15"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "17:45",
                    "toTime": "18:15",
                    "talk": {
                        "talkType": "Tools-in-Action",
                        "title": "⚡️ Vite⚡️the Webpack killer"
                    },
                    "day": "thursday"
                },
                "hitInfo": null
            },
            "friday_b_amphi_10:45-11:30": {
                "hitSlotId": {
                    "id": "friday_b_amphi_10:45-11:30"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_b_amphi_10:45-11:30"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "10:45",
                    "toTime": "11:30",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Exploring Linux Memory Usage and IO Performance in Cloud Native Applications"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            },
            "friday_b_amphi_14:30-15:15": {
                "hitSlotId": {
                    "id": "friday_b_amphi_14:30-15:15"
                },
                "slot": {
                    "slotId": {
                        "id": "friday_b_amphi_14:30-15:15"
                    },
                    "roomId": "Amphi bleu",
                    "fromTime": "14:30",
                    "toTime": "15:15",
                    "talk": {
                        "talkType": "Conference",
                        "title": "Comment permettre 100 millions de logins sans interruption de service ? Betclic raconte son Euro 2020 de football"
                    },
                    "day": "friday"
                },
                "hitInfo": null
            }
        });
    })

}

function planning() {

    return [{
            "day": {
                "value": "wednesday"
            },
            "rooms": [{
                    "roomId": {
                        "value": "241"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_d_par241_09:30-12:30"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "09:30"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_d_par241_13:30-16:30"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "16:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_d_par241_17:00-17:30"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "17:00"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_d_par241_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_d_par241_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "242"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par242AB_09:30-12:30"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "09:30"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": {
                                "userId": {
                                    "value": "fab-szn"
                                },
                                "nom": {
                                    "value": "Sznajderman"
                                },
                                "prenom": {
                                    "value": "Fabrice"
                                }
                            },
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par242AB_13:30-16:30"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "16:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par242AB_17:00-17:30"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "17:00"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par242AB_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par242AB_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "243"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par243_t_09:30-12:30"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "09:30"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par243_t_13:30-16:30"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "16:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par243_t_17:00-17:30"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "17:00"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par243_t_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_par243_t_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "251"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_f_neu251_09:30-12:30"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "09:30"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_f_neu251_13:30-16:30"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "16:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_f_neu251_17:00-17:30"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "17:00"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_f_neu251_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_f_neu251_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "252"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_e_neu252_09:30-12:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "09:30"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_e_neu252_13:30-16:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "16:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_e_neu252_17:00-17:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "17:00"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_e_neu252_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_e_neu252_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "253"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_neu253_t_09:30-12:30"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "09:30"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_neu253_t_13:30-16:30"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "16:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_neu253_t_17:00-17:30"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "17:00"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_neu253_t_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_neu253_t_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "Amphi bleu"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_b_amphi_09:30-12:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "09:30"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_b_amphi_13:30-16:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "16:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_b_amphi_17:00-17:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "17:00"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_b_amphi_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": {
                                "userId": {
                                    "value": "fab-szn"
                                },
                                "nom": {
                                    "value": "Sznajderman"
                                },
                                "prenom": {
                                    "value": "Fabrice"
                                }
                            },
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_b_amphi_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "Maillot"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_c_maillot_09:30-12:30"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "09:30"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_c_maillot_13:30-16:30"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "16:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": {
                                "userId": {
                                    "value": "adr-ysn"
                                },
                                "nom": {
                                    "value": "Ysnel"
                                },
                                "prenom": {
                                    "value": "Adrien"
                                }
                            },
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_c_maillot_17:00-17:30"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "17:00"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_c_maillot_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "wednesday_c_maillot_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "wednesday"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            "day": {
                "value": "friday"
            },
            "rooms": [{
                    "roomId": {
                        "value": "241"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_d_par241_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
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
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_d_par241_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_d_par241_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_d_par241_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_d_par241_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_d_par241_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "242"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par242AB_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
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
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par242AB_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par242AB_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par242AB_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par242AB_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "243"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par243_t_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
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
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par243_t_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par243_t_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par243_t_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par243_t_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_par243_t_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "251"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_f_neu251_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
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
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_f_neu251_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_f_neu251_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_f_neu251_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_f_neu251_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_f_neu251_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "252"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_e_neu252_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_e_neu252_11:45-12:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "11:45"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_e_neu252_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_e_neu252_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_e_neu252_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_e_neu252_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_e_neu252_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_e_neu252_17:45-18:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "253"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_neu253_t_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
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
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_neu253_t_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_neu253_t_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_neu253_t_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_neu253_t_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "Amphi bleu"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_b_amphi_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": {
                                "userId": {
                                    "value": "fab-szn"
                                },
                                "nom": {
                                    "value": "Sznajderman"
                                },
                                "prenom": {
                                    "value": "Fabrice"
                                }
                            },
                            "slot": {
                                "slotId": {
                                    "value": "friday_b_amphi_11:45-12:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "11:45"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": {
                                "userId": {
                                    "value": "cha-sab"
                                },
                                "nom": {
                                    "value": "Sabourdin"
                                },
                                "prenom": {
                                    "value": "Charles"
                                }
                            },
                            "slot": {
                                "slotId": {
                                    "value": "friday_b_amphi_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_b_amphi_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_b_amphi_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_b_amphi_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "Maillot"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_c_maillot_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
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
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_c_maillot_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_c_maillot_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_c_maillot_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "friday_c_maillot_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "friday"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            "day": {
                "value": "thursday"
            },
            "rooms": [{
                    "roomId": {
                        "value": "241"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_11:45-12:30"
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
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_d_par241_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "241"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "242"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_11:45-12:30"
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
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par242AB_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "242"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "243"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par243_t_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par243_t_11:45-12:30"
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
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par243_t_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par243_t_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par243_t_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par243_t_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par243_t_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_par243_t_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "243"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "251"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_f_neu251_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_f_neu251_11:45-12:30"
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
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_f_neu251_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_f_neu251_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_f_neu251_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_f_neu251_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_f_neu251_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_f_neu251_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "251"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "252"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_11:45-12:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "11:45"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_e_neu252_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "252"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "253"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_11:45-12:30"
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
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_neu253_t_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "253"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "Amphi bleu"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_b_amphi_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_b_amphi_11:45-12:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "11:45"
                                },
                                "toTime": {
                                    "value": "12:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_b_amphi_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_b_amphi_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_b_amphi_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_b_amphi_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_b_amphi_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_b_amphi_18:30-19:00"
                                },
                                "roomId": {
                                    "value": "Amphi bleu"
                                },
                                "fromTime": {
                                    "value": "18:30"
                                },
                                "toTime": {
                                    "value": "19:00"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        }
                    ]
                },
                {
                    "roomId": {
                        "value": "Maillot"
                    },
                    "slots": [{
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_c_maillot_10:45-11:30"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "10:45"
                                },
                                "toTime": {
                                    "value": "11:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_c_maillot_11:45-12:30"
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
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_c_maillot_13:00-13:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "13:00"
                                },
                                "toTime": {
                                    "value": "13:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_c_maillot_13:30-14:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "13:30"
                                },
                                "toTime": {
                                    "value": "14:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_c_maillot_14:30-15:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "14:30"
                                },
                                "toTime": {
                                    "value": "15:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_c_maillot_15:30-16:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "15:30"
                                },
                                "toTime": {
                                    "value": "16:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_c_maillot_16:45-17:30"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "16:45"
                                },
                                "toTime": {
                                    "value": "17:30"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        },
                        {
                            "user": null,
                            "slot": {
                                "slotId": {
                                    "value": "thursday_c_maillot_17:45-18:15"
                                },
                                "roomId": {
                                    "value": "Maillot"
                                },
                                "fromTime": {
                                    "value": "17:45"
                                },
                                "toTime": {
                                    "value": "18:15"
                                },
                                "talk": null,
                                "day": {
                                    "value": "thursday"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]


}