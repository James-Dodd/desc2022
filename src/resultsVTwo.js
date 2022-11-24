const data = [
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 119592.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 146,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 3,
    home_ownership: "Rent",
    annual_income: 48946.7,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 50,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 36,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Other",
    annual_income: 48343.2,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 72,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 49,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 100828.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 252,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 49,
    sex: "Male",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 131880.0,
    transaction_type: "inward_remittance_foreign",
    transaction_amount: 21,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Female",
    job_title: "Doctor",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 3,
    home_ownership: "Owner",
    annual_income: 51295.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 300,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 36491.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 139,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Lawyer",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 56673.9,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 367,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 73391.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 309,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "1.0",
    age_0: 14,
    sex: "Male",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Daily Wages",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_contactless",
    transaction_amount: 13,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 73391.0,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 64,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 11,
    sex: "Male",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Unemployed",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_ATM",
    transaction_amount: 17,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 36491.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 161,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "8.0",
    age_0: 16,
    sex: "Female",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Daily Wages",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_contactless",
    transaction_amount: 10,
    kpi: 58,
  },
  {
    city: "Kolkata",
    merchant_category_code: "",
    age_0: 44,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 143092.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 113,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 119592.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 151,
    kpi: 58,
  },
  {
    city: "Kolkata",
    merchant_category_code: "",
    age_0: 44,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 143092.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 253,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 49,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 100828.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 85,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 35,
    sex: "Male",
    job_title: "Doctor",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 42684.4,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 415,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Lawyer",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 56673.9,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 71,
    kpi: 58,
  },
  {
    city: "Kolkata",
    merchant_category_code: "",
    age_0: 44,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 143092.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 54,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 46,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 73360.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 378,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 39,
    sex: "Female",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 34558.3,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 71,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 45,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 101966.0,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 42,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 38,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 25803.1,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 475,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Lawyer",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 56673.9,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 259,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "6.0",
    age_0: 2,
    sex: "Male",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Unemployed",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_contactless",
    transaction_amount: 18,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 3,
    home_ownership: "Rent",
    annual_income: 48946.7,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 115,
    kpi: 58,
  },
  {
    city: "Cardiff",
    merchant_category_code: "",
    age_0: 48,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 132804.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 462,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Owner",
    annual_income: 88353.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 197,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 73391.0,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 57,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 36,
    sex: "Female",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 24858.3,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 95,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 36,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Other",
    annual_income: 48343.2,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 246,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 47,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 129551.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 86,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 73391.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 209,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 46,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 73360.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 198,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 38,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 25803.1,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 20,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 41,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 48381.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 12,
    kpi: 58,
  },
  {
    city: "Birmingham",
    merchant_category_code: "",
    age_0: 35,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Lease",
    annual_income: 37114.2,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 89,
    kpi: 58,
  },
  {
    city: "Mumbai",
    merchant_category_code: "",
    age_0: 46,
    sex: "Female",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 146915.0,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 15,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Doctor",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 24725.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 417,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 34539.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 216,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 41,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 0.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 360,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "3.0",
    age_0: 15,
    sex: "Female",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Daily Wages",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_contactless",
    transaction_amount: 14,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 37,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 25885.5,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 84,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 39,
    sex: "Female",
    job_title: "Lawyer",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 35944.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 282,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 42,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 100418.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 248,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 47,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 100818.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 333,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 16,
    sex: "Female",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Part Time",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_ATM",
    transaction_amount: 98,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 39,
    sex: "Female",
    job_title: "Lawyer",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 35944.0,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 28,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 58769.2,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 88,
    kpi: 58,
  },
  {
    city: "Birmingham",
    merchant_category_code: "5.0",
    age_0: 17,
    sex: "Female",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Part Time",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_contactless",
    transaction_amount: 18,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 58769.2,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 48,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Lawyer",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 56673.9,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 156,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 35,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Lease",
    annual_income: 33398.7,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 78,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 34539.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 38,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 34539.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 384,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 44,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 49595.2,
    transaction_type: "inward_remittance_foreign",
    transaction_amount: 82,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 48,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 2,
    home_ownership: "Owner",
    annual_income: 81785.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 15,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "1",
    age_0: 1,
    sex: "Female",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Unemployed",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_contactless",
    transaction_amount: 18,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "6.0",
    age_0: 21,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Single",
    employment_status: "Part Time",
    dependents: 0,
    home_ownership: "Rent",
    annual_income: 0.0,
    transaction_type: "pay_by_credit_card_POS",
    transaction_amount: 24,
    kpi: 58,
  },
  {
    city: "Mumbai",
    merchant_category_code: "",
    age_0: 46,
    sex: "Female",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 146915.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 332,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 42,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 100418.0,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 37,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 34539.5,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 70,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Doctor",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 24725.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 425,
    kpi: 58,
  },
  {
    city: "Mumbai",
    merchant_category_code: "",
    age_0: 46,
    sex: "Female",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 146915.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 444,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 38,
    sex: "Male",
    job_title: "Lawyer",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 35786.7,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 99,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 47,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 100818.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 175,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 37,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 25885.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 123,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 49,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 100828.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 73,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 46,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 73423.9,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 67,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 46,
    sex: "Female",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 119173.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 305,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 37,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 42671.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 374,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 39,
    sex: "Female",
    job_title: "Lawyer",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 35944.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 274,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 37,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 42671.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 297,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 3,
    home_ownership: "Rent",
    annual_income: 57738.4,
    transaction_type: "inward_remittance_foreign",
    transaction_amount: 54,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Doctor",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 24725.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 396,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 46,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 73360.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 351,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 37,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Lease",
    annual_income: 42671.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 459,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 34539.5,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 65,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Owner",
    annual_income: 88353.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 11,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 44,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 49595.2,
    transaction_type: "inward_remittance_foreign",
    transaction_amount: 39,
    kpi: 58,
  },
  {
    city: "Birmingham",
    merchant_category_code: "",
    age_0: 45,
    sex: "Male",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 100455.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 104,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 34539.5,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 76,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 43,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Owner",
    annual_income: 88353.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 144,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 46,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 73360.8,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 57,
    kpi: 58,
  },
  {
    city: "Glasgow",
    merchant_category_code: "",
    age_0: 48,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 66955.4,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 360,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 45,
    sex: "Female",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 112915.0,
    transaction_type: "inward_remittance_foreign",
    transaction_amount: 91,
    kpi: 58,
  },
  {
    city: "Glasgow",
    merchant_category_code: "",
    age_0: 48,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 66955.4,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 69,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 36,
    sex: "Male",
    job_title: "Armed Forces",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 3,
    home_ownership: "Rent",
    annual_income: 48946.7,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 359,
    kpi: 58,
  },
  {
    city: "Birmingham",
    merchant_category_code: "",
    age_0: 46,
    sex: "Female",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 104419.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 379,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Female",
    job_title: "Doctor",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 3,
    home_ownership: "Owner",
    annual_income: 51295.0,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 14,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 37,
    sex: "Female",
    job_title: "Doctor",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Rent",
    annual_income: 24725.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 440,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 47,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 100818.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 408,
    kpi: 58,
  },
  {
    city: "Cambridge",
    merchant_category_code: "",
    age_0: 38,
    sex: "Male",
    job_title: "Government Service",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 3,
    home_ownership: "Owner",
    annual_income: 51901.5,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 429,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "",
    age_0: 36,
    sex: "Female",
    job_title: "Doctor",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 3,
    home_ownership: "Owner",
    annual_income: 51295.0,
    transaction_type: "inward_remittance_domestic",
    transaction_amount: 391,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "",
    age_0: 48,
    sex: "Female",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Full Time",
    dependents: 1,
    home_ownership: "Owner",
    annual_income: 70516.5,
    transaction_type: "domestic_transfer_same_bank",
    transaction_amount: 62,
    kpi: 58,
  },
  {
    city: "London",
    merchant_category_code: "3.0",
    age_0: 16,
    sex: "Female",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Unemployed",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_contactless",
    transaction_amount: 19,
    kpi: 58,
  },
  {
    city: "Manchester",
    merchant_category_code: "",
    age_0: 44,
    sex: "Male",
    job_title: "Corporate",
    marital_status: "Married",
    employment_status: "Part Time",
    dependents: 2,
    home_ownership: "Rent",
    annual_income: 49595.2,
    transaction_type: "inward_remittance_foreign",
    transaction_amount: 20,
    kpi: 58,
  },
  {
    city: "Edinburgh",
    merchant_category_code: "1.0",
    age_0: 8,
    sex: "Female",
    job_title: "Others",
    marital_status: "Single",
    employment_status: "Unemployed",
    dependents: 0,
    home_ownership: "NA",
    annual_income: 0.0,
    transaction_type: "domestic_transaction_contactless",
    transaction_amount: 16,
    kpi: 58,
  },
];

export { data };
