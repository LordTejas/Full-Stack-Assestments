function minimumRefuelingsNeeded(airports) {
    const n = airports.length;
    
    if (n === 0) {
      return -1;
    }
    
    let refuelingsNeeded = 0;
    let position = 0;
    let fuel = 0;
    
    while (position < n - 1) {
      if (fuel === 0) {
        if (position === n - 1) {
          return -1; // Unable to reach the last index
        }
        
        fuel += airports[position];
        refuelingsNeeded++;
      }
      
      fuel--;
      position++;
    }
    
    return refuelingsNeeded;
  }
  
  // Example usage:
  const airports1 = [2, 1, 2, 3, 1];
  const airports2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
  const airports3 = [1, 1, 2, 1, 3, 1, 1, 1];
  
  console.log(minimumRefuelingsNeeded(airports1)); // Output: 2
  console.log(minimumRefuelingsNeeded(airports2)); // Output: 3
  console.log(minimumRefuelingsNeeded(airports3)); // Output: 4

  