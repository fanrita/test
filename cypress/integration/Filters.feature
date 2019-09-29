Feature: Filters

  I want to apply filters

  Background:
    Given Application page was opened

  Scenario Outline: should be possible apply filter by name
    When I type <name> into  Name filed
    And I apply filter
    Then I see #1 tile in the Applied section
    And I see #0 tile in the Interviewing section
    And I see #0 tile in the Hired section
    And I see <name> in the Applied section

    Examples:
      | name             |
      | "lloyd"          |
      | "lloyd gonzalez" |
      | "gonzalez"       |

  Scenario Outline: should be possible apply filter by name and city
    When I type <name> into  Name filed
    And I type <city> into  City filed
    And I apply filter
    Then I see #1 tile in the Applied section
    And I see #0 tile in the Interviewing section
    And I see #0 tile in the Hired section
    And I see <name> in the Applied section

    Examples:
      | name             | city       |
      | "lloyd"          | "hereford" |
      | "lloyd gonzalez" | "hereford" |
      | "gonzalez"       | "hereford" |

  Scenario Outline: should be show empty results if filter by invalid name or invalid city
    When I type <name> into  Name filed
    And I type <city> into  City filed
    And I apply filter
    Then I see #0 tile in the Applied section
    And I see #0 tile in the Interviewing section
    And I see #0 tile in the Hired section

    Examples:
      | name                                                | city       |
      | "lloyd"                                             | "11111"    |
      | "!@#$&"                                             | "hereford" |
      | "gonzalez"                                          | "333"      |
      | "<IMG SRC=\'javascript:alert('XSS');\'>"            | "hereford" |

  Scenario: should be possible apply filter by city
    When I type "hereford" into  City filed
    And I apply filter
    Then I see #1 tile in the Applied section
    And I see #0 tile in the Interviewing section
    And I see #0 tile in the Hired section
    And I see "lloyd" in the Applied section

  Scenario: should be possible to clear filter
    When I type "hereford" into  City filed
    And I apply filter
    And I clear filter
    Then I see #4 tile in the Applied section
    And I see #0 tile in the Interviewing section
    And I see #1 tile in the Hired section