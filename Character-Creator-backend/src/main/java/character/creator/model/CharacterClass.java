package character.creator.model;

import lombok.Data;
import javax.persistence.ManyToMany;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class CharacterClass {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String className;
    @Lob
    @Column(name="CLASS_DESCRIPTION", length=512)
    private String classDescription;

    private int hitPoints;
    private int maxSkills;
    private String hitDice;
    private String savingThrow;

    @ManyToMany(targetEntity = Proficiency.class)
    private List<Proficiency> otherProficiencies;

    @ManyToMany(targetEntity = Proficiency.class)
    private List<Proficiency> skills;

    @ManyToMany(targetEntity=Equipment.class)
    private List<Equipment> equipment;


}
