using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace binaryTable.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpPost]
        public int Post([FromBody] string index)
        {
            int binaryData =  int.Parse(index.Replace("," , ""));
            int decimalNum = 0;
            int b = 1;
            int rem;

            while(binaryData > 0){
                rem = binaryData % 10; /* divide the binary number by 10 and store the remainder in rem variable. */  
                decimalNum = decimalNum + rem * b;  
                binaryData = binaryData / 10; // divide the number with quotient  
                b = b * 2;  
            }
            Console.WriteLine(decimalNum);
            return decimalNum;
        }
    }
}
