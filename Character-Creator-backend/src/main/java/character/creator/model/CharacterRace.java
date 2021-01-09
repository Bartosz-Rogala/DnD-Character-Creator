package character.creator.model;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.ManyToMany;
import java.util.List;

@Data
@Entity
public class CharacterRace {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String raceName;
    @Lob
    @Column(name="RACE_DESCRIPTION", length=256)
    private String raceDescription;

    private int ageLowerLimit;
    private int ageUpperLimit;

    private Double heightLowerLimit;
    private Double heightUpperLimit;

    private Double speed;
    private String speedDescription;

    @ManyToMany(targetEntity = Language.class)
    private List<Language> languages;

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
}
