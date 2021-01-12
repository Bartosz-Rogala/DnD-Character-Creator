package character.creator.controller;

import character.creator.model.*;

import character.creator.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class CharacterCreatorController {

    @Autowired
    private ProficiencyRepository proficiencyRepository;

    @Autowired
    private PersonalityTraitRepository personalityTraitRepository;

    @Autowired
    private LanguageRepository languageRepository;

    @Autowired
    private IdealRepository idealRepository;

    @Autowired
    private FlawRepository flawRepository;

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private CharacterRaceRepository characterRaceRepository;

    @Autowired
    private CharacterSubraceRepository characterSubraceRepository;

    @Autowired
    private CharacterClassRepository characterClassRepository;

    @Autowired
    private CharacterBackgroundRepository characterBackgroundRepository;

    @Autowired
    private BondRepository bondRepository;

    @Autowired
    private AlignmentRepository alignmentRepository;


//    get all proficiencies
    @GetMapping("/proficiencies")
    public List<Proficiency> getAllProficiencies() {
        return (List<Proficiency>) proficiencyRepository.findAll();
    }

//    get all personality traits
    @GetMapping("/personality_traits")
    public List<PersonalityTrait> getAllPersonalityTraits() {
        return (List<PersonalityTrait>) personalityTraitRepository.findAll();
    }

//    get all languages
    @GetMapping("/languages")
    public List<Language> getAllLanguages() {
        return (List<Language>) languageRepository.findAll();
    }

//    get all ideals
    @GetMapping("/ideals")
    public List<Ideal> getAllIdeals() {
        return (List<Ideal>) idealRepository.findAll();
    }

//    get all flaws
    @GetMapping("/flaws")
    public List<Flaw> getAllFlaws() {
        return (List<Flaw>) flawRepository.findAll();
    }

//    get all equipment
    @GetMapping("/equipment")
    public List<Equipment> getAllEquipment() {
        return (List<Equipment>) equipmentRepository.findAll();
    }

//    get all character races
    @GetMapping("/character_races")
    public List<CharacterRace> getAllCharacterRaces() {
        return (List<CharacterRace>) characterRaceRepository.findAll();
    }

//    get all character subraces
    @GetMapping("/character_subraces")
    public List<CharacterSubrace> getAllCharacterSubraces() {
        return (List<CharacterSubrace>) characterSubraceRepository.findAll();
    }

//    get subraces of proper races
    @GetMapping("/character_subraces/race")
    public List<CharacterSubrace> getCharacterSubracesByRace(@RequestParam Long raceId) {
        return (List<CharacterSubrace>) characterSubraceRepository.findByParentRaceId(raceId);
    }

//    get all character classes
    @GetMapping("/character_classes")
    public List<CharacterClass> getAllCharacterClasses() {
        return (List<CharacterClass>) characterClassRepository.findAll();
    }

//    get all character backgrounds
    @GetMapping("/character_backgrounds")
    public List<CharacterBackground> getAllCharacterBackgrounds() {
        return (List<CharacterBackground>) characterBackgroundRepository.findAll();
    }

//    get all bonds
    @GetMapping("/bonds")
    public List<Bond> getAllBonds() {
        return (List<Bond>) bondRepository.findAll();
    }


    //    get all alignments
    @GetMapping("/alignments")
    public List<Alignment> getAllAlignments() {
        return (List<Alignment>) alignmentRepository.findAll();
    }
}
