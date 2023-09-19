```mermaid
classDiagram
    Viking<|--Arme
    Combat<|--Viking
    class Viking{
        +String nom
        +Int pv
        +Int force
        +Arme arme
    }
    class Arme {
        +String nom
        +Int force
        +possedeVolDeVie()
    }
    class Combat{
        +Viking viking1
        +Viking viking2
        +Number[] pvLevel
        +combattre()
        +getWinner()
        +getLoser()
    }
```