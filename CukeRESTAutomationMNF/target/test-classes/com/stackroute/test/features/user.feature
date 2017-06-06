Feature: SOA Test
  In order to test rest services
  As a Registered user
  I want to specify the rest services test conditions

  Scenario: GET All Users - success
    When user sends a GET request with "http://localhost:8080/memorynotfound/users"
    Then status code should be 200
    And response type should be "json"
    And response should be following JSON:
    """
    [
  {
    "id": 1,
    "username": "Daenerys Targaryen"
  },
  {
    "id": 2,
    "username": "John Snow"
  },
  {
    "id": 3,
    "username": "Arya Stark"
  },
  {
    "id": 4,
    "username": "Cersei Baratheon"
  }
]
    """
   
 
Scenario: GET All Users - empty
    When user sends a GET request with "http://localhost:8080/memorynotfound/users"
    Then status code should be 200
    And response type should be "json"
    And response should be empty
    
    
Scenario: GET All Users - mismatch
    When user sends a GET request with "http://localhost:8080/memorynotfound/users"
    Then status code should be 200
    And response type should be "json"
    And response is not matching following JSON:
    """
    [
  {
    "id": 1,
    "username": "Daenerys Targaryen"
  },
  {
    "id": 2,
    "username": "John Snow"
  },
  {
    "id": 3,
    "username": "Arya Stark"
  },
  {
    "id": 4,
    "username": "Cersei Baratheon"
  },
  {
    "id": 5,
    "username": "Somsubhra Mukherjee"
  }
]
    """ 
 
 
 Scenario: GET a specific user - success
    When user sends a GET request with "http://localhost:8080/memorynotfound/users/1"
    Then status code should be 200
    And response type should be "json"
    And response should be following user JSON:
    """
  {
    "id": 1,
    "username": "Daenerys Targaryen"
  }
    """
   
 
Scenario: GET a specific user - failure
    When user sends a GET request with "http://localhost:8080/memorynotfound/users/1"
    Then status code should be 200
    And response type should be "json"
    And response should be empty
    
    
Scenario: GET a specific user - mismatch
    When user sends a GET request with "http://localhost:8080/memorynotfound/users/1"
    Then status code should be 200
    And response type should be "json"
    And response is not matching following JSON:
    """
  {
    "id": 1,
    "username": "Somsubhra"
  }
    """     
 
Scenario: Create a new user - success
    When user sends a POST request with "http://localhost:8080/memorynotfound/users" with following JSON:
    """
    {
    	"id": 6,
    	"username": "Abbas"
    }
    """
    Then status code should be 201
    
    
Scenario: Create a new user with existing username
    When user sends a POST request with "http://localhost:8080/memorynotfound/users" with following JSON:
    """
    {
    	"username": "Abbas"
    }
    """
    Then status code should be 201    
    


Scenario: Delete an existing user - success
    When user sends a DELETE request with "http://localhost:8080/memorynotfound/users/8"
    Then status code should be 200
    
Scenario: Delete an existing user - failure
    When user sends a DELETE request with "http://localhost:8080/memorynotfound/users/8"
    Then status code should be 200        
    
    
    
Scenario: Updating an existing user - success
    When user sends a PUT request with "http://localhost:8080/memorynotfound/users/9" with following JSON:
    """
    {
    	"id": 9,
    	"username": "Abbas Mohammad"
    }
    """
    Then status code should be 200
    And response type should be "json"
    And response is matching following JSON:
    """
  	{
    	"id": 9,
    	 "username": "Abbas Mohammad"
  	}
    """            
        
    
    
    
    
      
  
    