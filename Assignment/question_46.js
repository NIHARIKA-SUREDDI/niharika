//Create a function that checks if a given number is prime and returns true or false.
function prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n ===2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x == 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(prime(3));