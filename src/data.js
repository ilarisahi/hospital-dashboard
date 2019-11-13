const finances = {
    day: {
        costs: [
            {
                name: "Infra",
                value: .13
            },
            {
                name: "Medication",
                value: .16
            },
            {
                name: "Care supplies",
                value: .8
            },
            {
                name: "Laboratory",
                value: .09
            },
            {
                name: "Radiology",
                value: .12
            },
            {
                name: "Specialty consultations",
                value: .07
            },
            {
                name: "Personnel",
                value: .18
            },
            {
                name: "Medical devices",
                value: .03
            },
            {
                name: "Food services",
                value: .08
            },
            {
                name: "Cleaning and laundry",
                value: .06
            }
        ],
        income: [
            {
                name: "Municipality",
                value: .68
            },
            {
                name: "Subsidies",
                value: .08
            },
            {
                name: "Others",
                value: .03
            },
            {
                name: "Customer",
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
        other: {
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
        other: {
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
                name: "01.01.",
                entered: 31,
                discharged: 7,
                returning: 1
            },
            {
                name: "02.01.",
                entered: 37,
                discharged: 5,
                returning: 0
            },
            {
                name: "03.01.",
                entered: 32,
                discharged: 10,
                returning: 2
            },
            {
                name: "04.01.",
                entered: 35,
                discharged: 3,
                returning: 0
            },
            {
                name: "05.01.",
                entered: 40,
                discharged: 2,
                returning: 0
            },
            {
                name: "06.01.",
                entered: 34,
                discharged: 8,
                returning: 1
            },
            {
                name: "07.01.",
                entered: 31,
                discharged: 6,
                returning: 0
            }
        ],
        averageTreatementDays: 3.5,
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
    averageTreatementDays: flow.day.averageTreatementDays,
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
    performance: .9,
    quality: .7,
    satisfactionPersonnel: .98,
    satisfactionPatient: .8,
    patientComplaints: indicators.day.patientComplaints,
    infections: indicators.day.infections,
    errors: indicators.day.errors
}

export { finances, resources, flow, indicators };