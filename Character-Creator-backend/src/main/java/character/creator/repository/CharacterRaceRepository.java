package character.creator.repository;

import character.creator.model.CharacterRace;
import org.springframework.data.repository.CrudRepository;

public interface CharacterRaceRepository extends CrudRepository<CharacterRace, Long> {
}
