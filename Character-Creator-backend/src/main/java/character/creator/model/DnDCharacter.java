package character.creator.model;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.ManyToMany;
import java.util.List;

@Data
@Entity
public class DnDCharacter {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String characterName;

    @OneToOne
    private CharacterClass characterClass;

    @OneToOne
    private CharacterRace characterRace;

    @OneToOne
    private CharacterSubrace characterSubrace;

    @OneToOne
    private CharacterBackground characterBackground;

    @OneToOne
    private Alignment alignment;

    private int strength;
    private int dexterity;
    private int constitution;
    private int intelligence;
    private int wisdom;
    private int charisma;

    private String personalityTrait;
    private String ideal;
    private String bond;
    private String flaw;

    private int age;
    private int height;
    private int weight;
    private String eyes;
    private String skin;
    private String hair;

    @Lob
    @Column(name="ALLIES_AND_ORGANISATIONS", length=512)
    private String alliesAndOrganisations;

    @Lob
    @Column(name="CHARACTER_BACKSTORY", length=512)
    private String characterBackstory;

    @Lob
    @Column(name="ADDITIONAL_FEATURES_AND_TRAITS", length=512)
    private String additionalFeaturesAndTraits;

    @Lob
    @Column(name="TREASURE", length=512)
    private String treasure;

}
