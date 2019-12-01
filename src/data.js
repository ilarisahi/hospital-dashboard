const finances = {
    day: {
        costs: [
            {
                id: "infra",
                label: "Infra",
                value: .13
            },
            {
                id: "medication",
                label: "Medication",
                value: .16
            },
            {
                id: "careSupplies",
                label: "Care supplies",
                value: .8
            },
            {
                id: "laboratory",
                label: "Laboratory",
                value: .09
            },
            {
                id: "radiology",
                label: "Radiology",
                value: .12
            },
            {
                id: "specialtyConsultations",
                label: "Specialty consultations",
                value: .07
            },
            {
                id: "personnel",
                label: "Personnel",
                value: .18
            },
            {
                id: "medicalDevices",
                label: "Medical devices",
                value: .03
            },
            {
                id: "foodServices",
                label: "Food services",
                value: .08
            },
            {
                id: "cleaningLaundry",
                label: "Cleaning and laundry",
                value: .06
            }
        ],
        income: [
            {
                id: "municipality",
                label: "Municipality",
                value: .68
            },
            {
                id: "subsidies",
                label: "Subsidies",
                value: .08
            },
            {
                id: "others",
                label: "Others",
                value: .03
            },
            {
                id: "customer",
                label: "Customer",
                value: .21
            }
        ],
        total: -100000
    },
    night: {
        costs: [],
        income: [],
        total: 0
    }
}

finances.night = {
    costs: finances.day.costs,
    income: finances.day.income,
    total: finances.day.total
}

const resources = {
    day: {
        doctors: {
            inUse: 4,
            total: 5
        },
        nurses: {
            inUse: 8,
            total: 9
        },
        physiotherapists: {
            inUse: 1,
            total: 2
        },
        pharmasists: {
            inUse: 1,
            total: 1
        },
        others: {
            inUse: 2,
            total: 3
        },
        beds: {
            inUse: 31,
            total: 38
        },
        quarantine: {
            inUse: 4,
            total: 4
        },
        patients: {
            men: 32,
            women: 43
        },
        devicesUtilization: .45
    },
    night: {
        doctors: {
            inUse: 1,
            total: 1
        },
        nurses: {
            inUse: 3,
            total: 3
        },
        physiotherapists: {
            inUse: 0,
            total: 0
        },
        pharmasists: {
            inUse: 0,
            total: 0
        },
        others: {
            inUse: 1,
            total: 1
        },
        beds: {
            inUse: 31,
            total: 38
        },
        quarantine: {
            inUse: 4,
            total: 4
        },
        patients: {
            men: 32,
            women: 43
        },
        devicesUtilization: .10
    }
}

const flow = {
    day: {
        patientFlow: [
            {
                id: "entered",
                label: "Entered patients",
                data: [
                    {
                        x: "01.01.",
                        y: 31
                    },
                    {
                        x: "02.01.",
                        y: 37
                    },
                    {
                        x: "03.01.",
                        y: 32
                    },
                    {
                        x: "04.01.",
                        y: 35
                    },
                    {
                        x: "05.01.",
                        y: 40
                    },
                    {
                        x: "06.01.",
                        y: 34
                    },
                    {
                        x: "07.01.",
                        y: 31
                    }
                ]
            },
            {
                id: "discharged",
                label: "Discharged patients",
                data: [
                    {
                        x: "01.01.",
                        y: 7
                    },
                    {
                        x: "02.01.",
                        y: 5
                    },
                    {
                        x: "03.01.",
                        y: 10
                    },
                    {
                        x: "04.01.",
                        y: 3
                    },
                    {
                        x: "05.01.",
                        y: 2
                    },
                    {
                        x: "06.01.",
                        y: 8
                    },
                    {
                        x: "07.01.",
                        y: 6
                    }
                ]
            },
            {
                id: "returning",
                label: "Patients returning within 48 hours of discharge",
                data: [
                    {
                        x: "01.01.",
                        y: 1
                    },
                    {
                        x: "02.01.",
                        y: 0
                    },
                    {
                        x: "03.01.",
                        y: 2
                    },
                    {
                        x: "04.01.",
                        y: 0
                    },
                    {
                        x: "05.01.",
                        y: 0
                    },
                    {
                        x: "06.01.",
                        y: 1
                    },
                    {
                        x: "07.01.",
                        y: 0
                    }
                ]
            }
        ],
        averageTreatmentDays: 3.5,
        patientClassification: 4
    },
    night: {
        patientFlow: [],
        averageTreatementDays: 0,
        patientClassification: 0
    }
}

flow.night = {
    patientFlow: flow.day.patientFlow,
    averageTreatmentDays: flow.day.averageTreatmentDays,
    patientClassification: flow.day.patientClassification
}

const indicators = {
    day: {
        performance: .9,
        quality: .7,
        satisfactionPersonnel: .98,
        satisfactionPatient: .83,
        patientComplaints: 5,
        infections: .002,
        errors: .06
    },
    night: {
        performance: 0,
        quality: 0,
        satisfactionPersonnel: 0,
        satisfactionPatient: 0,
        patientComplaints: 0,
        infections: 0,
        errors: 0
    }
}

indicators.night = {
    performance: .7,
    quality: .9,
    satisfactionPersonnel: indicators.day.satisfactionPersonnel,
    satisfactionPatient: indicators.day.satisfactionPatient,
    patientComplaints: indicators.day.patientComplaints,
    infections: indicators.day.infections,
    errors: indicators.day.errors
}


const personnel = {
    day: {
        doctors: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "0401231231"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "0401231231"
            },
            {
                id: "3",
                name: "Hessu Hopo",
                phone: "0401231231"
            },
            {
                id: "4",
                name: "Roope Ankka",
                phone: "0401231231"
            },
            {
                id:"5",
                name: "Hannu Hanhi",
                phone: "0401231231"
            }            
        ],
        nurses: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "0401231231"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "0401231231"
            },
            {
                id: "3",
                name: "Hessu Hopo",
                phone: "0401231231"
            },
            {
                id: "4",
                name: "Roope Ankka",
                phone: "0401231231"
            },
            {
                id:"5",
                name: "Hannu Hanhi",
                phone: "0401231231"
            },
            {
                id:"6",
                name: "Milla Magia",
                phone: "0401231231"
            },
            {
                id:"7",
                name: "Pelle Peloton",
                phone: "0401231231"
            },
            {
                id:"8",
                name: "Kroisos Pennonen",
                phone: "0401231231"
            },
            {
                id:"9",
                name: "Kulta-Into Pii",
                phone: "0401231231"
            }
        ],
        physiotherapists: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "0401231231"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "0401231231"
            }
        ],
        pharmasists: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "0401231231"
            }
        ],
        others: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "0401231231"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "0401231231"
            },
            {
                id: "3",
                name: "Hessu Hopo",
                phone: "0401231231"
            }
        ],
    },
    night: {
        doctors: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "0401231231"
            }
        ],
        nurses: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "0401231231"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "0401231231"
            },
            {
                id:"3",
                name: "Milla Magia",
                phone: "0401231231"
            }            
        ],
        physiotherapists: [

        ],
        pharmasists: [

        ],
        others: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "0401231231"
            }
        ],
    }
}


export { finances, resources, flow, indicators, personnel };