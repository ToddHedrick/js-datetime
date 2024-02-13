# js-datetime
Date and Time Helper classes to provide easier to use way of formatting dates and modifying the dates.

The JS DateTime class uses the PHP style DateTime formating [https://www.php.net/manual/en/datetime.format.php](https://www.php.net/manual/en/datetime.format.php) for easier use and extends the native JS Date class to allow you to fully utilize the native functions

## How To Use

* Include the DateTime.js file in your project.
* Instantiate a DateTime object the same way you would with native Date: `var date = new DateTime();`

## Useful Functions
* format(format, utc)
  * Using the PHP style date time format you can output a date, time, or datetime string much easier than native JS or other JS libraries
  * Example: `var date = new DateTime(); date.format("Y-m-d H:i:s");` Becomes 2024-01-01 12:00:00
* modify(interval, utc)
  * Uses a similar format to PHP's Date Time Interval: 1Y1M1DT1H1M1S = add 1 Year, add 1 Month, add 1 Day, add 1 Hour, add 1 Minute, and add 1 Second to the DateTime
  * Example: `var date = new DateTime(); date.modify("1Y-1D");` This will modify the current date (for example) 2024-01-01 12:00:00 and adds 1 year (1Y) and then substracts 1 day (-1D) to become 2024-12-31 12:00:00
* static createFromFormat(date_str, format)
  * If the incoming format is not a standard format then using native JS Date may not recognize it and fail to instantiate or generate an incorrect date. Using the createFromFormat function you can dictate the incoming format of the datetime string and ensure you get back a valid date object
  * Example: `var date = DateTime.createFromFormat("01.06.2024 12:00", "d\\.m\\.Y H:i");` With createFromDate it will properly recognize the month as June (06)
    * Using native JS Date `var date = new Date("01.06.2024 12:00");` it will incorrectly recognize the month as January (01) 
* static createDateFromUnixTimeStamp(value, noun)
* 
