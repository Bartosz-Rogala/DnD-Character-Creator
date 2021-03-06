package character.creator.controller;

import character.creator.exception.ResourceNotFoundException;
import character.creator.model.*;

import character.creator.model.DnDCharacter;
import character.creator.repository.*;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

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

    @Autowired
    private DnDCharacterRepository dnDCharacterRepository;



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

//    create character rest api
    @PostMapping("/character/create")
    public DnDCharacter createCharacter(@RequestBody DnDCharacter character) {
        return dnDCharacterRepository.save(character);
    }

//    create character rest api
    @GetMapping("/character/created")
    public List<DnDCharacter> getAllCharacters() {
        return StreamSupport.stream(dnDCharacterRepository.findAll().spliterator(), false).collect(Collectors.toList());
    }

//    delete character by id
    @DeleteMapping("/character/created/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCharacter(@PathVariable Long id) {
        DnDCharacter character = dnDCharacterRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ToDo with id : " + id + " does not exist"));

        dnDCharacterRepository.delete(character);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

//    get character by id rest api
    @GetMapping("/character/created/{id}")
    public ResponseEntity<DnDCharacter> getCharacterById(@PathVariable Long id) {
    DnDCharacter character = dnDCharacterRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("character with id : " + id + " does not exist"));

    return ResponseEntity.ok(character);
    }

//    get character for pdf export
    @GetMapping(value = "/character/export", produces = MediaType.APPLICATION_PDF_VALUE)
        public ResponseEntity<InputStreamResource> characterSheetExport(@RequestParam Long id) throws IOException {
            DnDCharacter character = dnDCharacterRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("character with id : " + id + " does not exist"));

            ByteArrayInputStream bis = DnDCharacterPDFGenerator.CharacterPDF(character);

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; filename=characterSheet.pdf");

            return ResponseEntity
                    .ok()
                    .headers(headers)
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));
    }
}
