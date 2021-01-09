package character.creator.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Ideal {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String ideal;
    private String idealDescription;
}
