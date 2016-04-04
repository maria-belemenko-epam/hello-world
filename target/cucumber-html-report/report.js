$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search/searchExamples.feature");
formatter.feature({
  "line": 1,
  "name": "Searching, adding and deleting a good from the cart",
  "description": "Customer wants to check, that a good, he had chosen, was correctly added and then deleted from the cart",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#   Scenario: Searching for a Good"
    },
    {
      "line": 5,
      "value": "#    Given The user sets language to English"
    },
    {
      "line": 6,
      "value": "#    And  he enters \"iPhone s6\" in the searching field"
    },
    {
      "line": 7,
      "value": "#    When he presses a button \u0027Search\u0027"
    },
    {
      "line": 8,
      "value": "#    Then ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus\" has been searched correctly"
    },
    {
      "line": 11,
      "value": "#  Scenario: Adding the Goods to the Cart"
    },
    {
      "line": 12,
      "value": "#    Given he presses on an image of the good"
    },
    {
      "line": 13,
      "value": "#    When he sets good\u0027s color to \"Black\""
    },
    {
      "line": 14,
      "value": "#    And he sets good\u0027s model to \"For Apple iPhone 6\""
    },
    {
      "line": 15,
      "value": "#    And he sets good\u0027s glass screen protector to \"No\""
    },
    {
      "line": 16,
      "value": "#    And he presses a button \u0027Add to cart\u0027"
    },
    {
      "line": 17,
      "value": "#    And he presses button \u0027Cart\u0027 to see it\u0027s content"
    },
    {
      "line": 18,
      "value": "#    Then ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus\" is in the cart"
    },
    {
      "line": 20,
      "value": "#  Scenario: Deleting the Good from the Cart"
    },
    {
      "line": 21,
      "value": "#    Given he presses button \u0027Save for future\u0027"
    },
    {
      "line": 22,
      "value": "#    When he edits \"MariaBelemenko@gmail.com\" into the field \u0027Login\u0027"
    },
    {
      "line": 23,
      "value": "#    And he edits \"maria311089\" into the field \u0027Password\u0027"
    },
    {
      "line": 24,
      "value": "#    And he submits his personal information"
    },
    {
      "line": 25,
      "value": "#    And ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus has been saved for later.\" has been successfully removed to \u0027Saved goods\u0027"
    },
    {
      "line": 26,
      "value": "#    And he presses button \u0027Delete the good from the cart\u0027"
    },
    {
      "line": 27,
      "value": "#    And he presses button \u0027Show the cart\u0027"
    },
    {
      "line": 28,
      "value": "#    Then ensure \"Your shopping cart is empty, but it doesn\u0027t have to be.\" his cart is empty"
    }
  ],
  "line": 30,
  "name": "Searching for a Good",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;searching-for-a-good",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "The user sets language to English",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "he enters \"\u003ctype\u003e\" in the searching field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "he presses a button \u0027Search\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "ensure \"\u003cname\u003e\" has been searched correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;searching-for-a-good;",
  "rows": [
    {
      "cells": [
        "type",
        "name"
      ],
      "line": 37,
      "id": "searching,-adding-and-deleting-a-good-from-the-cart;searching-for-a-good;;1"
    },
    {
      "cells": [
        "iPhone s6",
        "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus"
      ],
      "line": 38,
      "id": "searching,-adding-and-deleting-a-good-from-the-cart;searching-for-a-good;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Searching for a Good",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;searching-for-a-good;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "The user sets language to English",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "he enters \"iPhone s6\" in the searching field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "he presses a button \u0027Search\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus\" has been searched correctly",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iSetLanguage()"
});
formatter.result({
  "duration": 13616520516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone s6",
      "offset": 11
    }
  ],
  "location": "SearchSteps.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 2462637024,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iSearchRequest()"
});
formatter.result({
  "duration": 6391785167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus",
      "offset": 8
    }
  ],
  "location": "SearchSteps.iCheckSearchRequest(String)"
});
formatter.result({
  "duration": 127695025,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Adding the Goods to the Cart",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;adding-the-goods-to-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "he presses on an image of the good",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "he sets good\u0027s color to \"\u003ccolor\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "he sets good\u0027s model to \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "he sets good\u0027s glass screen protector to \"\u003cScreen protector\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "he presses a button \u0027Add to cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "he presses button \u0027Cart\u0027 to see it\u0027s content",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "ensure \"\u003cname\u003e\" is in the cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;adding-the-goods-to-the-cart;",
  "rows": [
    {
      "cells": [
        "color",
        "model",
        "Screen protector",
        "name"
      ],
      "line": 50,
      "id": "searching,-adding-and-deleting-a-good-from-the-cart;adding-the-goods-to-the-cart;;1"
    },
    {
      "cells": [
        "Black",
        "For Apple iPhone 6",
        "No",
        "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus"
      ],
      "line": 51,
      "id": "searching,-adding-and-deleting-a-good-from-the-cart;adding-the-goods-to-the-cart;;2"
    },
    {
      "cells": [
        "Silver",
        "For Apple iPhone 6s",
        "No",
        "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus"
      ],
      "line": 52,
      "id": "searching,-adding-and-deleting-a-good-from-the-cart;adding-the-goods-to-the-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 51,
  "name": "Adding the Goods to the Cart",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;adding-the-goods-to-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "he presses on an image of the good",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "he sets good\u0027s color to \"Black\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "he sets good\u0027s model to \"For Apple iPhone 6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "he sets good\u0027s glass screen protector to \"No\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "he presses a button \u0027Add to cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "he presses button \u0027Cart\u0027 to see it\u0027s content",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus\" is in the cart",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.iShowDetailsOfTheGood()"
});
formatter.result({
  "duration": 9572746384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 25
    }
  ],
  "location": "AddToCartSteps.iChooseColor(String)"
});
formatter.result({
  "duration": 2895108945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "For Apple iPhone 6",
      "offset": 25
    }
  ],
  "location": "AddToCartSteps.iChooseModel(String)"
});
formatter.result({
  "duration": 441526527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 42
    }
  ],
  "location": "AddToCartSteps.iChooseGlassScreenProtector(String)"
});
formatter.result({
  "duration": 486809701,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.iAddGoodToTheCart()"
});
formatter.result({
  "duration": 725695474,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.iShowCartContent()"
});
formatter.result({
  "duration": 3235872236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus",
      "offset": 8
    }
  ],
  "location": "AddToCartSteps.iCheckTheCart(String)"
});
formatter.result({
  "duration": 136902915,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Adding the Goods to the Cart",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;adding-the-goods-to-the-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "he presses on an image of the good",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "he sets good\u0027s color to \"Silver\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "he sets good\u0027s model to \"For Apple iPhone 6s\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "he sets good\u0027s glass screen protector to \"No\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "he presses a button \u0027Add to cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "he presses button \u0027Cart\u0027 to see it\u0027s content",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus\" is in the cart",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.iShowDetailsOfTheGood()"
});
formatter.result({
  "duration": 452718709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 25
    }
  ],
  "location": "AddToCartSteps.iChooseColor(String)"
});
formatter.result({
  "duration": 1792812870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "For Apple iPhone 6s",
      "offset": 25
    }
  ],
  "location": "AddToCartSteps.iChooseModel(String)"
});
formatter.result({
  "duration": 217860666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 42
    }
  ],
  "location": "AddToCartSteps.iChooseGlassScreenProtector(String)"
});
formatter.result({
  "duration": 555509983,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.iAddGoodToTheCart()"
});
formatter.result({
  "duration": 375842581,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.iShowCartContent()"
});
formatter.result({
  "duration": 2858975916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus",
      "offset": 8
    }
  ],
  "location": "AddToCartSteps.iCheckTheCart(String)"
});
formatter.result({
  "duration": 1037150723,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Deleting the Good from the Cart",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;deleting-the-good-from-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "he presses button \u0027Save for future\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "he edits \"\u003clogin\u003e\" into the field \u0027Login\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "he edits \"\u003cpassword\u003e\" into the field \u0027Password\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "he submits his personal information",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "ensure \"\u003csave for future\u003e\" has been successfully removed to \u0027Saved goods\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "he presses button \u0027Delete the good from the cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "he presses button \u0027Show the cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "ensure \"\u003ccart content\u003e\" his cart is empty",
  "keyword": "Then "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;deleting-the-good-from-the-cart;",
  "rows": [
    {
      "cells": [
        "login",
        "password",
        "save for future",
        "cart content"
      ],
      "line": 65,
      "id": "searching,-adding-and-deleting-a-good-from-the-cart;deleting-the-good-from-the-cart;;1"
    },
    {
      "cells": [
        "MariaBelemenko@gmail.com",
        "maria311089",
        "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus has been saved for later.",
        "US $6.99"
      ],
      "line": 66,
      "id": "searching,-adding-and-deleting-a-good-from-the-cart;deleting-the-good-from-the-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Deleting the Good from the Cart",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;deleting-the-good-from-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "he presses button \u0027Save for future\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "he edits \"MariaBelemenko@gmail.com\" into the field \u0027Login\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "he edits \"maria311089\" into the field \u0027Password\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "he submits his personal information",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus has been saved for later.\" has been successfully removed to \u0027Saved goods\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "he presses button \u0027Delete the good from the cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "he presses button \u0027Show the cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "ensure \"US $6.99\" his cart is empty",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteFromTheCartSteps.iSaveForFuture()"
});
formatter.result({
  "duration": 441234307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MariaBelemenko@gmail.com",
      "offset": 10
    }
  ],
  "location": "DeleteFromTheCartSteps.iEditLogin(String)"
});
formatter.result({
  "duration": 10092278371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maria311089",
      "offset": 10
    }
  ],
  "location": "DeleteFromTheCartSteps.iEditPassword(String)"
});
formatter.result({
  "duration": 1215831578,
  "status": "passed"
});
formatter.match({
  "location": "DeleteFromTheCartSteps.iSubmitPersonalInformation()"
});
formatter.result({
  "duration": 2465197007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus has been saved for later.",
      "offset": 8
    }
  ],
  "location": "DeleteFromTheCartSteps.iCheckRemovedForFuture(String)"
});
formatter.result({
  "duration": 1674814283,
  "status": "passed"
});
formatter.match({
  "location": "DeleteFromTheCartSteps.iDeleteFromTheCart()"
});
formatter.result({
  "duration": 426001097,
  "status": "passed"
});
formatter.match({
  "location": "DeleteFromTheCartSteps.iShowCart()"
});
formatter.result({
  "duration": 2289239918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US $6.99",
      "offset": 8
    }
  ],
  "location": "DeleteFromTheCartSteps.iCheckTheCartWithDeletedGood(String)"
});
formatter.result({
  "duration": 1291608121,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Searching for a Good (negative scenario)",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;searching-for-a-good-(negative-scenario)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "The user sets language to English",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "he enters \"iPhone s6\" in the searching field",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "he presses a button \u0027Search\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5\" has not been searched",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iSetLanguage()"
});
formatter.result({
  "duration": 967325309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone s6",
      "offset": 11
    }
  ],
  "location": "SearchSteps.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 136663189,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iSearchRequest()"
});
formatter.result({
  "duration": 4362790693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5",
      "offset": 8
    }
  ],
  "location": "SearchSteps.iCheckSearchRequestNegative(String)"
});
formatter.result({
  "duration": 148937108,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Adding the Goods to the Cart (negative scenario)",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;adding-the-goods-to-the-cart-(negative-scenario)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "he presses on an image of the good",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "he sets good\u0027s color to \"Black\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "he sets good\u0027s model to \"For Apple iPhone 6\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "he sets good\u0027s glass screen protector to \"No\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "he presses a button \u0027Add to cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "he presses button \u0027Cart\u0027 to see it\u0027s content",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5\" is not in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.iShowDetailsOfTheGood()"
});
formatter.result({
  "duration": 8110275593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 25
    }
  ],
  "location": "AddToCartSteps.iChooseColor(String)"
});
formatter.result({
  "duration": 2794944148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "For Apple iPhone 6",
      "offset": 25
    }
  ],
  "location": "AddToCartSteps.iChooseModel(String)"
});
formatter.result({
  "duration": 179195651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 42
    }
  ],
  "location": "AddToCartSteps.iChooseGlassScreenProtector(String)"
});
formatter.result({
  "duration": 327353741,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.iAddGoodToTheCart()"
});
formatter.result({
  "duration": 434526907,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.iShowCartContent()"
});
formatter.result({
  "duration": 348449189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5",
      "offset": 8
    }
  ],
  "location": "AddToCartSteps.iCheckTheCartNegative(String)"
});
formatter.result({
  "duration": 1502441870,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Deleting the Good from the Cart (negative scenario)",
  "description": "",
  "id": "searching,-adding-and-deleting-a-good-from-the-cart;deleting-the-good-from-the-cart-(negative-scenario)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "he presses button \u0027Save for future\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "ensure \"Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus has been saved for later.\" has been successfully removed to \u0027Saved goods\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "he presses button \u0027Delete the good from the cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "he presses button \u0027Show the cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "ensure \"Your cart is not empty\" his cart doesn\u0027t consist anything",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteFromTheCartSteps.iSaveForFuture()"
});
formatter.result({
  "duration": 1906998604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luxury Aluminum Ultra-thin Mirror Metal Case Cover for iPhone 5/ 5s/ 6/ 6+ Plus has been saved for later.",
      "offset": 8
    }
  ],
  "location": "DeleteFromTheCartSteps.iCheckRemovedForFuture(String)"
});
formatter.result({
  "duration": 79992553,
  "status": "passed"
});
formatter.match({
  "location": "DeleteFromTheCartSteps.iDeleteFromTheCart()"
});
formatter.result({
  "duration": 1083001888,
  "status": "passed"
});
formatter.match({
  "location": "DeleteFromTheCartSteps.iShowCart()"
});
formatter.result({
  "duration": 1083654920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your cart is not empty",
      "offset": 8
    }
  ],
  "location": "DeleteFromTheCartSteps.iCheckTheCartWithDeletedGoodNegative(String)"
});
formatter.result({
  "duration": 117528586,
  "status": "passed"
});
});