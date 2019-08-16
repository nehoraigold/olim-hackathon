  // if married, expect a family category appears 
  export function changeMaritalStatus(updated_status) {
    return { type: MARITAL_STATUS_CHANGE, updated_status }
  }


  export function changeAge(text) {
    return { type: ADD_TODO, text }
  }

/*
1. If user has Israeli license && <3 years , SHOW Car Importing Info ONLY, WITH TAX BENEFITS
2. If user has Israeli license && >3 years, SHOW car importin Info ONLY,W/O TAX BENEFITS
3. If user has foreign license && driving 5+ years && <3 years, SHOW expedited process(proof of driving 5 + years,etc.) + Car Importing WITH tax benefits
4. If user has foreign license && driving 5+ years && >5 years in country, SHOW long process + Car Importing W/O tax benefits
5. if user has foreign license && driving 5 + years && >3 years, but <5, SHOW expedited process + Importing Info W/O benefits
6. if user has foreign license && driving <5 years && <3 years in country, show long process +Importing car W/ TAX BENEFITS
7. if user has foreign license && driving <5 years && >3 years in country, show long process + Importing car W/O TAX BENEFITS
8. if user has no foreign license && < 3 years, show long process+ Importing W/ benefits
9. if user has no foreign license && > 3 years, show long process+ Importing W/O benefits


*/
  export function toggleLicense(text) {
    return { type: ADD_TODO, text }
  }

//
  export function changeAliyahDate(text) {
    return { type: ADD_TODO, text }
  }


