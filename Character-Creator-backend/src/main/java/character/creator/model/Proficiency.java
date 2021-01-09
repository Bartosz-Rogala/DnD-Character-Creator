package character.creator.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Proficiency {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String type;
    private String name;
}