var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "team_no",
      "type": "number",
      "defaultValue": 1280
    },
    { "name": "Width",
      "code": "width",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "weight",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drivetrain",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "other-drivetrain",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "swerve-ratio",
      "type": "radio",
      "choices": {
        "1": "L1<br>",
        "2": "L2<br>",
        "3": "L3<br>",
        "4": "L4<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "motor",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Batteries",
      "code": "battery_no",
      "type": "number"
    },
    { "name": "Floor pickup Cones",
      "code": "floor-cones",
      "type": "bool"
    },
    { "name": "Floor pickup Cubes",
      "code": "floor-cubes",
      "type": "bool"
    },
    { "name": "Cross Charging Station",
      "code": "cross-charge",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "autos",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
