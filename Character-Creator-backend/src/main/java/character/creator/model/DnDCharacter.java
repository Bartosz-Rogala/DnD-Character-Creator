package character.creator.model;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.ManyToMany;
import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.StreamSupport;

import static java.lang.Math.floor;

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

    @ManyToMany(targetEntity = Equipment.class)
    private List<Equipment> equipment;

    @ManyToMany(targetEntity = Proficiency.class)
    private List<Proficiency> skills;

    @ManyToMany(targetEntity = Language.class)
    private List<Language> languages;

    private int passivePerception;
    private int proficiencyBonus;
    private int initiative;
    private int maxHitPoints;
    private int armorClass;
    private double speed;

    private int strength;
    private int dexterity;
    private int constitution;
    private int intelligence;
    private int wisdom;
    private int charisma;

    private int strengthModifier;
    private int dexterityModifier;
    private int constitutionModifier;
    private int intelligenceModifier;
    private int wisdomModifier;
    private int charismaModifier;

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

    @PrePersist
    void Modifiers() {
        if (characterSubrace == null) {
            this.strengthModifier = (int) (Math.floor((strength-10)/2)+characterRace.getStrengthBonus());
            this.dexterityModifier = (int) (Math.floor((dexterity-10)/2)+characterRace.getDexterityBonus());
            this.constitutionModifier = (int) (Math.floor((constitution-10)/2)+characterRace.getConstitutionBonus());
            this.intelligenceModifier = (int) (Math.floor((intelligence-10)/2)+characterRace.getIntelligenceBonus());
            this.wisdomModifier = (int) (Math.floor((wisdom-10)/2)+characterRace.getWisdomBonus());
            this.charismaModifier = (int) (Math.floor((charisma-10)/2)+characterRace.getCharismaBonus());
        } else {
            this.strengthModifier = (int) (Math.floor((strength-10)/2)+characterRace.getStrengthBonus()+characterSubrace.getStrengthBonus());
            this.dexterityModifier = (int) (Math.floor((dexterity-10)/2)+characterRace.getDexterityBonus()+characterSubrace.getDexterityBonus());
            this.constitutionModifier = (int) (Math.floor((constitution-10)/2)+characterRace.getConstitutionBonus()+characterSubrace.getConstitutionBonus());
            this.intelligenceModifier = (int) (Math.floor((intelligence-10)/2)+characterRace.getIntelligenceBonus()+characterSubrace.getIntelligenceBonus());
            this.wisdomModifier = (int) (Math.floor((wisdom-10)/2)+characterRace.getWisdomBonus()+characterSubrace.getWisdomBonus());
            this.charismaModifier = (int) (Math.floor((charisma-10)/2)+characterRace.getCharismaBonus()+characterSubrace.getCharismaBonus());
        }
        this.proficiencyBonus = 2;
        this.initiative = dexterityModifier;
        this.maxHitPoints = 8 + constitutionModifier;



        if (skills.stream().anyMatch(o -> o.getName().equals("Perception"))) {
            this.passivePerception = 10 + wisdomModifier + proficiencyBonus;
        } else {
            this.passivePerception = 10 + wisdomModifier;
        }

         Integer mainArmor = equipment.stream().filter(eq -> eq.getType().equals("Armor")).max(Comparator.comparing(Equipment::getArmorClass)).map(Equipment::getArmorClass).orElse(0);
         Integer shieldArmor = equipment.stream().filter(eq -> eq.getSubtype().equals("Shield")).max(Comparator.comparing(Equipment::getArmorClass)).map(Equipment::getArmorClass).orElse(0);

         this.armorClass = mainArmor + shieldArmor;

         if (characterSubrace != null) {
             this.speed = characterSubrace.getSpeed();
         } else {
             this.speed = characterRace.getSpeed();
         }
    }

}
