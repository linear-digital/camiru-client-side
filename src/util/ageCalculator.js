function calculateAge(birthdate, year) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
  
    // If the birth month is greater than the current month, subtract one year
    // If the birth month is the same but the birth date is in the future, subtract one year
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }
  
    // Adjust months if birth date is later in the month than the current date
    if (today.getDate() < birthDate.getDate()) {
      months--;
      if (months < 0) {
        months += 12;
        years--;
      }
    }
    if (year) {
       return years 
    }
    return `${years}Y ${months}M`;
  }
  
  export default calculateAge