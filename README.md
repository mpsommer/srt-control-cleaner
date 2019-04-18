## Program Description
`ControlCleaner.js` is a script that takes as input a corrupted .srt file, specifically a .srt file with the combination of CRLF (carriage return, line feed) and outputs a "cleaned" version of the file with the same name but suffixed with "_CLEANED.srt". Also if the corrupted input file contains the substring "(broken)", it is removed in the output file name.  Example: Kalune\_CANNELLE(broken).srt --> Kalune\_CANNELLE\_CLEANED.srt

## Program Dependencies
Nodejs

## How to Run
`node ControlCleaner.js "<PATH_TO_CORRUPT_FILE>"` 

e.g. node ControlCleaner.js "Kalune_CANNELLE(broken).srt"

## Solution.
As I currently understand the problem. "broken" .srt files in this context contain CRLF control characters at the end of every line. The implemented solution simply appends each line of the input file to the output file and in the process **only uses LF ('\n')** characters at the end of each line.  This is the common way Unix based systems handle control characters. I recognize this is not exactly how the provided working .srt file handles control characters. I am confident the implemented solution will work, but without more testing I am can not be 100%. In the event it fails, I can ensure the output file is formatted like the working example.

## TODO:
* In the event the input file cannot be found, the output file is still created but has no contents.  The fix is to not create the output file in this case.
* If the output file already exists and the program is run again with the same input, the output file will be appended to and instead it should be overwritten in this case. 
* More testing would be nice.
