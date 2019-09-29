Feature: Sections

  I want to move tiles between sections

  Background:
    Given Application page was opened

  Scenario: should verify section title
    Then I see title "Applied" in the Applied section
    And I see title "Interviewing" in the Interviewing section
    And I see title "Hired" in the Hired section

  Scenario: should be possible move tile from Applied to Interviewing section
    When I click move up button on tile "danielle"
    Then I see #3 tile in the Applied section
    And I see #1 tile in the Interviewing section
    And I see #1 tile in the Hired section
    And I see move up button on "danielle" tile
    And I see move down button on "danielle" tile

  Scenario: should be possible move tile from Hired to Interviewing section
    When I click move down button on tile "julia"
    Then I see #4 tile in the Applied section
    And I see #1 tile in the Interviewing section
    And I see #0 tile in the Hired section
    And I see move up button on "julia" tile
    And I see move down button on "julia" tile

  Scenario: should be possible move tile from Applied to Hired section
    When I click move up button on tile "linda"
    And I click move up button on tile "linda"
    Then I see #3 tile in the Applied section
    And I see #0 tile in the Interviewing section
    And I see #2 tile in the Hired section
    And I should not see move up button on "linda" tile
    And I see move down button on "linda" tile

  Scenario: should be possible move tile from Hired to Applied section
    When I click move down button on tile "julia"
    And I click move down button on tile "julia"
    Then I see #5 tile in the Applied section
    And I see #0 tile in the Interviewing section
    And I see #0 tile in the Hired section
    And I see move up button on "julia" tile
    And I should not see move down button on "julia" tile
