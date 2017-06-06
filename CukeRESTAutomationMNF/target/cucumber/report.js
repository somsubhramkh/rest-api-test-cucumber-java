$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("user.feature");
formatter.feature({
  "line": 1,
  "name": "SOA Test",
  "description": "In order to test rest services\r\nAs a Registered user\r\nI want to specify the rest services test conditions",
  "id": "soa-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "GET All Users - success",
  "description": "",
  "id": "soa-test;get-all-users---success",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user sends a GET request with \"http://localhost:8080/memorynotfound/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "response type should be \"json\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "response should be following JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 11,
    "value": "[\r\n{\r\n\"id\": 1,\r\n\"username\": \"Daenerys Targaryen\"\r\n},\r\n{\r\n\"id\": 2,\r\n\"username\": \"John Snow\"\r\n},\r\n{\r\n\"id\": 3,\r\n\"username\": \"Arya Stark\"\r\n},\r\n{\r\n\"id\": 4,\r\n\"username\": \"Cersei Baratheon\"\r\n}\r\n]"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users",
      "offset": 31
    }
  ],
  "location": "RestServicesSD.user_sends_a_GET_request_with(String)"
});
formatter.result({
  "duration": 787637491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 3090360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 25
    }
  ],
  "location": "RestServicesSD.response_type_should_be(String)"
});
formatter.result({
  "duration": 1765498,
  "status": "passed"
});
formatter.match({
  "location": "RestServicesSD.response_should_be_following_JSON(String)"
});
formatter.result({
  "duration": 57861054,
  "error_message": "java.lang.AssertionError: expected:\u003c[{\"id\":1,\"username\":\"Daenerys Targaryen\"},{\"id\":2,\"username\":\"John Snow\"},{\"id\":3,\"username\":\"Arya Stark\"},{\"id\":4,\"username\":\"Cersei Baratheon\"}]\u003e but was:\u003c[{\"id\":1,\"username\":\"Daenerys Targaryen\"},{\"id\":2,\"username\":\"John Snow\"},{\"id\":3,\"username\":\"Arya Stark\"},{\"id\":4,\"username\":\"Cersei Baratheon\"},{\"id\":9,\"username\":\"Abbas\"},{\"id\":9,\"username\":\"Somsubhra\"}]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.response_should_be_following_JSON(RestServicesSD.java:77)\r\n\tat ✽.And response should be following JSON:(user.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "GET All Users - empty",
  "description": "",
  "id": "soa-test;get-all-users---empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "user sends a GET request with \"http://localhost:8080/memorynotfound/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "response type should be \"json\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "response should be empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users",
      "offset": 31
    }
  ],
  "location": "RestServicesSD.user_sends_a_GET_request_with(String)"
});
formatter.result({
  "duration": 18173785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 234531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 25
    }
  ],
  "location": "RestServicesSD.response_type_should_be(String)"
});
formatter.result({
  "duration": 187743,
  "status": "passed"
});
formatter.match({
  "location": "RestServicesSD.response_should_be_empty()"
});
formatter.result({
  "duration": 1368690,
  "error_message": "java.lang.AssertionError: expected:\u003c[]\u003e but was:\u003c[{\"id\":1,\"username\":\"Daenerys Targaryen\"},{\"id\":2,\"username\":\"John Snow\"},{\"id\":3,\"username\":\"Arya Stark\"},{\"id\":4,\"username\":\"Cersei Baratheon\"},{\"id\":9,\"username\":\"Abbas\"},{\"id\":9,\"username\":\"Somsubhra\"}]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.response_should_be_empty(RestServicesSD.java:90)\r\n\tat ✽.And response should be empty(user.feature:37)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 40,
  "name": "GET All Users - mismatch",
  "description": "",
  "id": "soa-test;get-all-users---mismatch",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "user sends a GET request with \"http://localhost:8080/memorynotfound/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "response type should be \"json\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "response is not matching following JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 45,
    "value": "[\r\n{\r\n\"id\": 1,\r\n\"username\": \"Daenerys Targaryen\"\r\n},\r\n{\r\n\"id\": 2,\r\n\"username\": \"John Snow\"\r\n},\r\n{\r\n\"id\": 3,\r\n\"username\": \"Arya Stark\"\r\n},\r\n{\r\n\"id\": 4,\r\n\"username\": \"Cersei Baratheon\"\r\n},\r\n{\r\n\"id\": 5,\r\n\"username\": \"Somsubhra Mukherjee\"\r\n}\r\n]"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users",
      "offset": 31
    }
  ],
  "location": "RestServicesSD.user_sends_a_GET_request_with(String)"
});
formatter.result({
  "duration": 25428256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 122596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 25
    }
  ],
  "location": "RestServicesSD.response_type_should_be(String)"
});
formatter.result({
  "duration": 174714,
  "status": "passed"
});
formatter.match({
  "location": "RestServicesSD.response_is_not_matching_following_JSON(String)"
});
formatter.result({
  "duration": 1100993,
  "error_message": "java.lang.AssertionError: expected:\u003c[{\"id\":1,\"username\":\"Daenerys Targaryen\"},{\"id\":2,\"username\":\"John Snow\"},{\"id\":3,\"username\":\"Arya Stark\"},{\"id\":4,\"username\":\"Cersei Baratheon\"},{\"id\":5,\"username\":\"Somsubhra Mukherjee\"}]\u003e but was:\u003c[{\"id\":1,\"username\":\"Daenerys Targaryen\"},{\"id\":2,\"username\":\"John Snow\"},{\"id\":3,\"username\":\"Arya Stark\"},{\"id\":4,\"username\":\"Cersei Baratheon\"},{\"id\":9,\"username\":\"Abbas\"},{\"id\":9,\"username\":\"Somsubhra\"}]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.response_is_not_matching_following_JSON(RestServicesSD.java:103)\r\n\tat ✽.And response is not matching following JSON:(user.feature:44)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 71,
  "name": "GET a specific user - success",
  "description": "",
  "id": "soa-test;get-a-specific-user---success",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 72,
  "name": "user sends a GET request with \"http://localhost:8080/memorynotfound/users/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "response type should be \"json\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "response should be following user JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 76,
    "value": "{\r\n\"id\": 1,\r\n\"username\": \"Daenerys Targaryen\"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users/1",
      "offset": 31
    }
  ],
  "location": "RestServicesSD.user_sends_a_GET_request_with(String)"
});
formatter.result({
  "duration": 17070423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 175306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 25
    }
  ],
  "location": "RestServicesSD.response_type_should_be(String)"
});
formatter.result({
  "duration": 130888,
  "status": "passed"
});
formatter.match({
  "location": "RestServicesSD.response_should_be_following_user_JSON(String)"
});
formatter.result({
  "duration": 337582,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "GET a specific user - failure",
  "description": "",
  "id": "soa-test;get-a-specific-user---failure",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 85,
  "name": "user sends a GET request with \"http://localhost:8080/memorynotfound/users/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "response type should be \"json\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "response should be empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users/1",
      "offset": 31
    }
  ],
  "location": "RestServicesSD.user_sends_a_GET_request_with(String)"
});
formatter.result({
  "duration": 14566390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 111935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 25
    }
  ],
  "location": "RestServicesSD.response_type_should_be(String)"
});
formatter.result({
  "duration": 104236,
  "status": "passed"
});
formatter.match({
  "location": "RestServicesSD.response_should_be_empty()"
});
formatter.result({
  "duration": 786508,
  "error_message": "java.lang.AssertionError: expected:\u003c[]\u003e but was:\u003c{\"id\":1,\"username\":\"Daenerys Targaryen\"}\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.response_should_be_empty(RestServicesSD.java:90)\r\n\tat ✽.And response should be empty(user.feature:88)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 91,
  "name": "GET a specific user - mismatch",
  "description": "",
  "id": "soa-test;get-a-specific-user---mismatch",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 92,
  "name": "user sends a GET request with \"http://localhost:8080/memorynotfound/users/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "response type should be \"json\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "response is not matching following JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 96,
    "value": "{\r\n\"id\": 1,\r\n\"username\": \"Somsubhra\"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users/1",
      "offset": 31
    }
  ],
  "location": "RestServicesSD.user_sends_a_GET_request_with(String)"
});
formatter.result({
  "duration": 15766881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 111935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 25
    }
  ],
  "location": "RestServicesSD.response_type_should_be(String)"
});
formatter.result({
  "duration": 115489,
  "status": "passed"
});
formatter.match({
  "location": "RestServicesSD.response_is_not_matching_following_JSON(String)"
});
formatter.result({
  "duration": 857578,
  "error_message": "java.lang.AssertionError: expected:\u003c{\"id\":1,\"username\":\"Somsubhra\"}\u003e but was:\u003c{\"id\":1,\"username\":\"Daenerys Targaryen\"}\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.response_is_not_matching_following_JSON(RestServicesSD.java:103)\r\n\tat ✽.And response is not matching following JSON:(user.feature:95)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 103,
  "name": "Create a new user - success",
  "description": "",
  "id": "soa-test;create-a-new-user---success",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 104,
  "name": "user sends a POST request with \"http://localhost:8080/memorynotfound/users\" with following JSON:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 105,
    "value": "{\r\n\t\"id\": 6,\r\n\t\"username\": \"Abbas\"\r\n}"
  }
});
formatter.step({
  "line": 111,
  "name": "status code should be 201",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users",
      "offset": 32
    }
  ],
  "location": "RestServicesSD.user_sends_a_POST_request_with_with_following_JSON(String,String)"
});
formatter.result({
  "duration": 26227202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 325146,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c409\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.status_code_should_be(RestServicesSD.java:59)\r\n\tat ✽.Then status code should be 201(user.feature:111)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 114,
  "name": "Create a new user with existing username",
  "description": "",
  "id": "soa-test;create-a-new-user-with-existing-username",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 115,
  "name": "user sends a POST request with \"http://localhost:8080/memorynotfound/users\" with following JSON:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 116,
    "value": "{\r\n\t\"username\": \"Abbas\"\r\n}"
  }
});
formatter.step({
  "line": 121,
  "name": "status code should be 201",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users",
      "offset": 32
    }
  ],
  "location": "RestServicesSD.user_sends_a_POST_request_with_with_following_JSON(String,String)"
});
formatter.result({
  "duration": 14530855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 323369,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c409\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.status_code_should_be(RestServicesSD.java:59)\r\n\tat ✽.Then status code should be 201(user.feature:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 125,
  "name": "Delete an existing user - success",
  "description": "",
  "id": "soa-test;delete-an-existing-user---success",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 126,
  "name": "user sends a DELETE request with \"http://localhost:8080/memorynotfound/users/8\"",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users/8",
      "offset": 34
    }
  ],
  "location": "RestServicesSD.user_sends_a_DELETE_request_with(String)"
});
formatter.result({
  "duration": 17159260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 321000,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.status_code_should_be(RestServicesSD.java:59)\r\n\tat ✽.Then status code should be 200(user.feature:127)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 129,
  "name": "Delete an existing user - failure",
  "description": "",
  "id": "soa-test;delete-an-existing-user---failure",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 130,
  "name": "user sends a DELETE request with \"http://localhost:8080/memorynotfound/users/8\"",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users/8",
      "offset": 34
    }
  ],
  "location": "RestServicesSD.user_sends_a_DELETE_request_with(String)"
});
formatter.result({
  "duration": 16110978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 542501,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat com.stackroute.test.stepdefinitions.RestServicesSD.status_code_should_be(RestServicesSD.java:59)\r\n\tat ✽.Then status code should be 200(user.feature:131)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 135,
  "name": "Updating an existing user - success",
  "description": "",
  "id": "soa-test;updating-an-existing-user---success",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 136,
  "name": "user sends a PUT request with \"http://localhost:8080/memorynotfound/users/9\" with following JSON:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 137,
    "value": "{\r\n\t\"id\": 9,\r\n\t\"username\": \"Abbas Mohammad\"\r\n}"
  }
});
formatter.step({
  "line": 143,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "response type should be \"json\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "response is matching following JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 146,
    "value": "{\r\n\t\"id\": 9,\r\n\t \"username\": \"Abbas Mohammad\"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/memorynotfound/users/9",
      "offset": 31
    }
  ],
  "location": "RestServicesSD.user_sends_a_PUT_request_with_with_following_JSON(String,String)"
});
formatter.result({
  "duration": 20266796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "RestServicesSD.status_code_should_be(int)"
});
formatter.result({
  "duration": 148655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 25
    }
  ],
  "location": "RestServicesSD.response_type_should_be(String)"
});
formatter.result({
  "duration": 125557,
  "status": "passed"
});
formatter.match({
  "location": "RestServicesSD.response_is_matching_following_JSON(String)"
});
formatter.result({
  "duration": 363642,
  "status": "passed"
});
});