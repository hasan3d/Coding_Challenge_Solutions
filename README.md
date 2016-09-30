# Solution for Integrations Engineer Coding Challenge

**[the dashboard Sharing link](https://hasan.geckoboard.com/dashboards/6E2A8DF6473A232F)**

The main purpose of the test is to identify my ability to use Geckoboard product and integrate
it with an external API.

I have provided the solution in according to the requirements of the Challenge.

## 1. Pulls Data from an External API

I have used my favourite programming language JavaScript and its framework such as Node.js and Express.js
to implement this solution. 

After a moment of thought and reading the full requirements I have decided to use Blockchain.info API to 
return the latest Bitcoin exchange rates for a few popular currencies at the regular interval of 5 seconds.


## 2. Pushing Data to the Datasets API 

In order to accomplish this task, I have created my account with Geckoboard and then obtain the API key from 
the account section. After that I have used this API key and gackoboard Node Module to create datasets with the 
data types of Number and String to represent rates and Currency symbol respectively. Then I create a setInterval
method to update data to the datasets at every 10 minutes (Geckoboard API reference guide stated that update frequency
of a widget powered by datasets limited to 10 minutes currently). I have used currencies such as USD, GBP, EUR etc.
to build some widgets.

