package character.creator.model;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.ManyToMany;
import java.util.List;

@Data
@Entity
public class CharacterSubrace {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String subraceName;
    private String subraceDescription;

    @ManyToOne(optional = false)
    private CharacterRace parentRace;

    @ManyToMany(targetEntity = Proficiency.class)
    private List<Proficiency> skills;
    @ManyToMany(targetEntity = Proficiency.class)
    private List<Proficiency> otherProficiencies;
    private Integer strengthBonus;
    private Integer dexterityBonus;
    private Integer constitutionBonus;
    private Integer intelligenceBonus;
    private Integer wisdomBonus;
    private Integer charismaBonus;
    private Double speed;
}
