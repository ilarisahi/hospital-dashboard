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
            total: 4
        },
        nurses: {
            inUse: 4,
            total: 4
        },
        physiotherapists: {
            inUse: 4,
            total: 4
        },
        pharmasists: {
            inUse: 4,
            total: 4
        },
        others: {
            inUse: 4,
            total: 4
        },
        beds: {
            inUse: 4,
            total: 4
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
            inUse: 2,
            total: 4
        },
        nurses: {
            inUse: 2,
            total: 4
        },
        physiotherapists: {
            inUse: 2,
            total: 4
        },
        pharmasists: {
            inUse: 2,
            total: 4
        },
        others: {
            inUse: 2,
            total: 4
        },
        beds: {
            inUse: 2,
            total: 4
        },
        quarantine: {
            inUse: 2,
            total: 4
        },
        patients: {
            men: 22,
            women: 13
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
        satisfactionPatient: .8,
        patientComplaints: 5,
        infections: .03,
        errors: .32
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
    performance: .5,
    quality: .7,
    satisfactionPersonnel: .98,
    satisfactionPatient: .8,
    patientComplaints: indicators.day.patientComplaints,
    infections: 0.01,
    errors: indicators.day.errors
}


const personnel = {
    day: {
        doctors: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            },
            {
                id: "3",
                name: "Hessu Hopo",
                phone: "234"
            },
            {
                id: "4",
                name: "Roope Ankka",
                phone: "432"
            }
        ],
        nurses: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            },
            {
                id: "3",
                name: "Hessu Hopo",
                phone: "234"
            },
            {
                id: "4",
                name: "Roope Ankka",
                phone: "432"
            }
        ],
        physiotherapists: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            },
            {
                id: "3",
                name: "Hessu Hopo",
                phone: "234"
            },
            {
                id: "4",
                name: "Roope Ankka",
                phone: "432"
            }
        ],
        pharmasists: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            },
            {
                id: "3",
                name: "Hessu Hopo",
                phone: "234"
            },
            {
                id: "4",
                name: "Roope Ankka",
                phone: "432"
            }
        ],
        others: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            },
            {
                id: "3",
                name: "Hessu Hopo",
                phone: "234"
            },
            {
                id: "4",
                name: "Roope Ankka",
                phone: "432"
            }
        ],
    },
    night: {
        doctors: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            }
        ],
        nurses: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            }
        ],
        physiotherapists: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            },
        ],
        pharmasists: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            },
        ],
        others: [
            {
                id: "1",
                name: "Aku Ankka",
                phone: "123"
            },
            {
                id: "2",
                name: "Mikki Hiiri",
                phone: "321"
            },
        ],
    }
}


export { finances, resources, flow, indicators, personnel };