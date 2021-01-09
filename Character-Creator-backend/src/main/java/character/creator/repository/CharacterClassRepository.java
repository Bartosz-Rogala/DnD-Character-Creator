package character.creator.repository;

import character.creator.model.CharacterClass;
import org.springframework.data.repository.CrudRepository;

public interface CharacterClassRepository extends CrudRepository<CharacterClass, Long> {
}
