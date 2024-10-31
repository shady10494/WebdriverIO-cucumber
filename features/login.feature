Feature: My demo app login

Scenario Outline: Unsuccesful login
  Given I open login page
  When I login with "<username>" and "<password>"
  Then I should see a warning message "<message>"
  Examples:
    | username          | password | message                                                      |
    | alice@example.com | 10203040 | Sorry, this user has been locked out.                        |
    | 1@2.com           | f-o-o    | Provided credentials do not match any user in this service.  |
    |                   |          | Username is required                                         |
    | bob@example.com   |          | Password is required                                         |

Scenario: Succesful login
  Given I open login page
  When I login with "bob@example.com" and "10203040"
  Then I should be directed to products page