# Run_Compare_Project

* Use the Strava API to store basic information about runs in the database
* Enable users to add a run to the database.
* The user then sees similar runs that took place that day.
* Users should be able to login. 

Use the Strava API to store basic information about runs in the database
Enable users to add a run to the database.
The user then sees similar runs that took place that day.
Users should be able to login.
Pseudocode: ----Once the Strava API has stored basic information about runs in the database---- 
-Find the time of the first runner per km/mile
-Assume the first runner has the lowest/best time per km/mile 
-Look at the time per km/mile of the remaining people one-by-one and compare their times to the best time runner you have found so far. 
-At each step, if you find someone whose time is less than the current best time runner, s/he becomes the new best time runner. 
-Once you have checked all of the runners' times, tell me which one is the lowest/best time runner and display 
-Remove the lowest/best time runner from the data set. 
-Re-check all of the remaining runners' times, tell me which one is the lowest/best time runner (to determine the second best runner) and display. 
-Remove the lowest/best time runner from the data set. 
-Re-check all of the remaining runners' times, tell me which one is the lowest/best time runner (to determine the third best runner) and display.
