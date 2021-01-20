package character.creator.model;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.ManyToMany;
import java.util.List;

@Data
@Entity
public class CharacterBackground {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String backgroundName;
    @Lob
    @Column(name="BACKGROUND_DESCRIPTION", length=256)
    private String backgroundDescription;
    
    private int maxLanguages;

    @ManyToMany(targetEntity = Proficiency.class)
    private List<Proficiency> skills;

    @ManyToMany(targetEntity=Equipment.class)
    private List<Equipment> equipment;

    @ManyToMany(targetEntity=PersonalityTrait.class)
    private List<PersonalityTrait> personalityTrait;

    @ManyToMany(targetEntity=Ideal.class)
    private List<Ideal> ideals;

    @ManyToMany(targetEntity=Bond.class)
    private List<Bond> bonds;

    @ManyToMany(targetEntity=Flaw.class)
    private List<Flaw> flaws;

}
