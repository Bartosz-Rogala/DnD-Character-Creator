package character.creator.repository;

import character.creator.model.DnDCharacter;
import org.springframework.data.repository.CrudRepository;

public interface DnDCharacterRepository extends CrudRepository<DnDCharacter, Long> {

}
