# js-datetime
Date and Time Helper classes to provide easier to use way of formatting dates and modifying the dates.

The JS DateTime class uses (mostly) the same formatting characters as the PHP DateTime formating [https://www.php.net/manual/en/datetime.format.php](https://www.php.net/manual/en/datetime.format.php) for easier use and extends the native JS Date class to allow you to fully utilize the native functions

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
* static createFromUnixTimeStamp(value, noun)
  * Used to create a date oject based on a unix timestamp of either seconds (default) or milliseconds
  * Example: `var date = DateTime.createFromUnixTimeStamp(1735675200);`
  * Example: `var date = DateTime.createFromUnixTimeStamp(1735675200145, "milliseconds");`
 
## Format Guide
|  Character  |Explanation|
|:----------------:|:----------|
|Year|--------------------|
|Y|The four digit numeric representation of a year.	Examples: 1970, 1989, 2008, 2024, etc|
|y|The two digit numeric representation of a year.	Examples: 70, 89, 03, 08, 24|
|Month|--------------------|
|F|The full name of a month. Examples: January, June, December, etc|
|M|The three character representation of a month. Examples: Jan, Jun, Dec, etc|
|m|The number of the month with leading zeros. Examples:	01, 06, 12. 01 through 12|
|n|The number of the month without leading zeros. Examples:	1, 6, 12. 1 through 12|
|Day|--------------------|
|d|The two digit day of the month with leading zeros. Examples	01, 08, 15, 31. 01 through 31|
|j|The two digit day of the month without leading zeros. Examples	1, 8, 15, 31. 1 through 31|
|D|The three character representation of a day. List: Mon, Tue, Wed, Thu, Fri, Sat, and Sun|
|l|(lowercase "L")	The full name of the day of the week. List: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday|
|N|The ISO 8601 numerical representation of the day of the week starting with	1 for Monday through to 7 for Sunday|
|w|The numerical representation of the day of the week starting	0 for Sunday through to 6 for Saturday|
|Time|--------------------|
|a|The lowercase Ante meridiem and Post meridiem.	am or pm|
|A|The uppercase Ante meridiem and Post meridiem. AM or PM|
|g|12-hour format of the hour without leading zeros. Examples: 1, 6, 12.	1 through 12|
|h|12-hour format of the hour with leading zeros. Examples: 01, 06, 12.	01 through 12|
|G|24-hour format of the hour without leading zeros. Examples, 0, 8, 14, 23.	0 through 23|
|H|24-hour format of the hour with leading zeros. Exampls: 00, 08, 14, 23.	00 through 23|
|i|Minutes with leading zeros	00 to 59|
|s|Seconds with leading zeros	00 through 59|
|v|Milliseconds. Example: 654|
|Timezone|--------------------|
|e|Three character timezone abbreviation. Examples: UTC, PDT, EST|
|T|Three character timezone abbreviation. Same as "e". Examples: UTC, PDT, EST|
|O|The difference between the current timezon and UTC time without the colon between hours and minutes.	Example: +0800|
|P|The difference between the current timezon and UTC time with the colon between hours and minutes.	Example: +08:00|
|p|This is the same as "P", but returns Z instead of +00:00 for UTC.	Examples: Z, +08:00, -02:00|
|Z|The timezone offset in seconds. The offset for timezones east of UTC is always positive and timezones those west of UTC are always negative.	-43200 through 50400|
|Other|--------------------|
|c|ISO 8601 formatted date. Example:	2004-02-12T15:19:21+00:00 (equivalent of "Y-m-d\\TH:m:sP")|
|r|RFC 2822/RFC 5322 formatted date.	Example: Thu, 21 Dec 2000 16:01:07 +0200 (equivalent of "D, j M Y H:i:s O")|
|U|Seconds since the Unix Epoch 1970-01-01 00:00:00 UTC|
