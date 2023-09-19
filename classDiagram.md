```mermaid
classDiagram
    Viking<|--Arme
    class Viking{
        +String nom
        +Int pv
        +Int force
        +Arme arme
    }
    class Arme {
        +String nom
        +Int force
    }
```