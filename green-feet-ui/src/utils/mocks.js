const mocks = {
    get: {
        '': ['bank', 'slsp', 'bank2'],
        '/tenants': [
            { data: {
                tenantId: "bank",
                version: 2,
                bucket: "slsp",
                retentionPeriod: 24,
                livenessCheckMinPoints: 4,
                livenessCheckMaxPoints: 8,
                livenessCheckThreshold: 1,
                idToSelfieSimilarityThreshold: 1000,
                selfieToLivenessSimilarityThreshold: 1000,
            } },
            { data: {
                tenantId: "slsp",
                version: 1,
                bucket: "slsp",
                retentionPeriod: 24,
                livenessCheckMinPoints: 4,
                livenessCheckMaxPoints: 8,
                livenessCheckThreshold: 1,
                idToSelfieSimilarityThreshold: 1000,
                selfieToLivenessSimilarityThreshold: 1000,
            } },
            { data: {
                tenantId: "bank2",
                version: 2,
                bucket: "slsp",
                retentionPeriod: 24,
                livenessCheckMinPoints: 4,
                livenessCheckMaxPoints: 8,
                livenessCheckThreshold: 1,
                idToSelfieSimilarityThreshold: 1000,
                selfieToLivenessSimilarityThreshold: 1000,
            } },
        ],
        '/tenant/templates': {
            templates: [
                {
                    id: 'p1',
                    currentVersion: 6,
                },
                {
                    id: 'p2',
                    currentVersion: 1,
                },
            ],
        },
        '/tenant/templates/full': [
            {
                documents: {
                    configs: [
                        {
                            type: "SK_ID",
                            confidenceThreshold: 0.85,
                            frontSide: {
                                checks: [
                                    "CORRECT_SIDE",
                                    "NOT_EXPIRED",
                                    "CORRECT_VALIDITY",
                                    "UNDER_AGED",
                                    "OVER_AGED",
                                    "MINIMUM_ISSUING_DATE",
                                    "NOT_EMPTY"
                                ],
                                mandatoryFields: [
                                    "givenName",
                                    "surname"
                                ]
                            },
                            backSide: {
                                checks: [
                                    "CORRECT_SIDE",
                                    "NOT_EXPIRED",
                                    "CORRECT_VALIDITY",
                                    "UNDER_AGED",
                                    "OVER_AGED",
                                    "MINIMUM_ISSUING_DATE",
                                    "NOT_EMPTY"
                                ],
                                mandatoryFields: [
                                    "givenName",
                                    "surname"
                                ]
                            },
                            checks: [
                                "OCR_CONFIDENCE"
                            ]
                        }
                    ],
                    sequence: [
                        [
                            "SK_ID",
                            "SK_DRIVERS_LICENSE"
                        ]
                    ]
                },
                id: 'p1',
                selfie: {
                    estimatedAgeDeltaPlus: 5,
                    estimatedAgeDeltaMinus: 5,
                    genderDetectionEnabled: true,
                    documentToSelfieSimilarityThreshold: 70
                },
                version: 6
            },
            {
                documents: {
                    configs: [
                        {
                            type: "SK_ID",
                            confidenceThreshold: 0.85,
                            frontSide: {
                                checks: [
                                    "CORRECT_SIDE",
                                    "NOT_EXPIRED",
                                    "CORRECT_VALIDITY",
                                    "UNDER_AGED",
                                    "OVER_AGED",
                                    "MINIMUM_ISSUING_DATE",
                                    "NOT_EMPTY"
                                ],
                                mandatoryFields: [
                                    "givenName",
                                    "surname"
                                ]
                            },
                            backSide: {
                                checks: [
                                    "CORRECT_SIDE",
                                    "NOT_EXPIRED",
                                    "CORRECT_VALIDITY",
                                    "UNDER_AGED",
                                    "OVER_AGED",
                                    "MINIMUM_ISSUING_DATE",
                                    "NOT_EMPTY"
                                ],
                                mandatoryFields: [
                                    "givenName",
                                    "surname"
                                ]
                            },
                            checks: [
                                "OCR_CONFIDENCE"
                            ]
                        }
                    ],
                    sequence: [
                        [
                            "SK_ID",
                            "SK_DRIVERS_LICENSE"
                        ]
                    ]
                },
                id: 'p2',
                selfie: {
                    estimatedAgeDeltaPlus: 5,
                    estimatedAgeDeltaMinus: 5,
                    genderDetectionEnabled: true,
                    documentToSelfieSimilarityThreshold: 70
                },
                version: 1
            },
        ],
        '/documents': [
            {
                documentType: 'sk_id',
                version: 1,
            }
        ],
        '/documents/full': [
            {
                modelId: "sk_id",
                version: 1,
                descriptor: {
                    documentNumber: {
                        field: "id",
                        label: "ID number",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    personalNumber: {
                        field: "personal_no",
                        label: "Personal Number",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    givenNames: {
                        field: "first_name",
                        label: "First Name",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    surname: {
                        field: "surname",
                        label: "Surname",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    surnameAtBirth: {
                        field: "surname_at_birth",
                        label: "Surname at birth",
                        page: "back",
                        regex: "(?<value>.*)"
                    },
                    nationality: {
                        field: "nationality",
                        label: "Nationality",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    gender: {
                        field: "sex",
                        label: "Sex",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    dateOfBirth: {
                        field: "date_birth",
                        label: "Date of birth",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    placeOfBirth: {
                        field: "place_of_birth",
                        label: "Place of birth",
                        page: "back",
                        regex: "(?<value>.*)"
                    },
                    dateOfIssue: {
                        field: "date_issue",
                        label: "Date of issue",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    issuedBy: {
                        field: "issued_by",
                        label: "Issued by",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    dateOfExpiry: {
                        field: "date_expiry",
                        label: "Date of Expiry",
                        page: "front",
                        regex: "(?<value>.*)"
                    },
                    addressLine1: {
                        field: "address_top_row",
                        label: "Address top row",
                        page: "back",
                        regex: "(?<value>.*)"
                    },
                    addressLine2: {
                        field: "address_bottom_row",
                        label: "Address bottom row",
                        page: "back",
                        regex: "(?<value>.*)"
                    },
                    additionalText1: null,
                    additionalText2: null,
                    additionalText3: null,
                    dateFormat: "EU"
                }
            },
        ],
    },
    post: {
        '/tenant': (tenant) => ({
            tenantId: tenant.tenantId,
            version: 0,
            bucket: tenant.bucket,
            retentionPeriod: parseInt(tenant.retentionPeriod),
        }),
        '/tenant/template': (template) => ({
            id: template.id,
            selfie: template.selfie,
            liveness: template.liveness,
            documents: {
                configs: [template.documents.configs[0]],
                sequence: [],
            },
            version: 1,
        }),
        '/document': (document) => ({
            modelId: document.modelId,
            version: 1,
            descriptor: {
                documentNumber: document.descriptor.documentNumber ? { ...document.descriptor.documentNumber } : null,
                personalNumber: document.descriptor.personalNumber ? { ...document.descriptor.personalNumber } : null,
                givenNames: document.descriptor.givenNames ? { ...document.descriptor.givenNames } : null,
                surname: document.descriptor.surname ? { ...document.descriptor.surname } : null,
                surnameAtBirth: document.descriptor.surnameAtBirth ? { ...document.descriptor.surnameAtBirth } : null,
                nationality: document.descriptor.nationality ? { ...document.descriptor.nationality } : null,
                gender: document.descriptor.gender ? { ...document.descriptor.gender } : null,
                dateOfBirth: document.descriptor.dateOfBirth ? { ...document.descriptor.dateOfBirth } : null,
                placeOfBirth: document.descriptor.placeOfBirth ? { ...document.descriptor.placeOfBirth } : null,
                dateOfIssue: document.descriptor.dateOfIssue ? { ...document.descriptor.dateOfIssue } : null,
                issuedBy: document.descriptor.issuedBy ? { ...document.descriptor.issuedBy } : null,
                dateOfExpiry: document.descriptor.dateOfExpiry ? { ...document.descriptor.dateOfExpiry } : null,
                addressLine1: document.descriptor.addressLine1 ? { ...document.descriptor.addressLine1 } : null,
                addressLine2: document.descriptor.addressLine2 ? { ...document.descriptor.addressLine2 } : null,
                additionalText1: document.descriptor.additionalText1 ? { ...document.descriptor.additionalText1 } : null,
                additionalText2: document.descriptor.additionalText2 ? { ...document.descriptor.additionalText2 } : null,
                additionalText3: document.descriptor.additionalText3 ? { ...document.descriptor.additionalText3 } : null,
                dateFormat: document.descriptor.dateFormat,
            },
        }),
    },
};

const withDelay = (response) => new Promise(resolve => setTimeout(() => resolve(response), 300));

const asResponse = (obj) => withDelay({ data: obj });

const get = (url) => asResponse(mocks.get[url]);

const post = (url, body) => asResponse(mocks.post[url](body));

export const mock = {
    get,
    post,
};
