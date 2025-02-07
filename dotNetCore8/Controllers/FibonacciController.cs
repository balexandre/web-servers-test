using Microsoft.AspNetCore.Mvc;

namespace fibonacci.Controllers;

[ApiController]
[Route("[controller]")]
public class FibonacciController : ControllerBase
{
    public FibonacciController() { }

    public static int GetNthFibonacci_Rec(int n)
    {
        if ((n == 0) || (n == 1))
            return n;
        else
            return GetNthFibonacci_Rec(n - 1) + GetNthFibonacci_Rec(n - 2);
    }

    [HttpGet]
    public string Get()
    {
        return $"result is {GetNthFibonacci_Rec(40)}";
    }
}
