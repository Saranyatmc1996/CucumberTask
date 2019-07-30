$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AddCustMap.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "To check add customer functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@unit"
    }
  ]
});
formatter.step({
  "name": "User in telecom Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustMap.user_in_telecom_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add Customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustMap.user_click_on_Add_Customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to fill all personal details",
  "rows": [
    {
      "cells": [
        "Fname",
        "saranya"
      ]
    },
    {
      "cells": [
        "Lname",
        "T"
      ]
    },
    {
      "cells": [
        "Email",
        "sarayatmc@gmail.com"
      ]
    },
    {
      "cells": [
        "Address",
        "Dindigul"
      ]
    },
    {
      "cells": [
        "Mobile",
        "7339595826"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustMap.user_need_to_fill_all_personal_details(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat com.stepdefinition.AddCustMap.user_need_to_fill_all_personal_details(AddCustMap.java:39)\r\n\tat ✽.user need to fill all personal details(src/test/resources/AddCustMap.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user need to click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustMap.user_need_to_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see the customer ID is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustMap.user_should_see_the_customer_ID_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/AddTariff.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "to check Add Tariff functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@saranya"
    }
  ]
});
formatter.step({
  "name": "user in telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffClass.user_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "need to click add tariff button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffClass.need_to_click_add_tariff_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "need to fill all the details",
  "rows": [
    {
      "cells": [
        "500",
        "90",
        "15",
        "100",
        "1",
        "5",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffClass.need_to_fill_all_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "need to click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffClass.need_to_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the successfully compeletion page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffClass.user_should_see_the_successfully_compeletion_page()"
});
formatter.result({
  "status": "passed"
});
});