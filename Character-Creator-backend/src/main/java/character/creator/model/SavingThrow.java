package character.creator.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class SavingThrow {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String name;
}