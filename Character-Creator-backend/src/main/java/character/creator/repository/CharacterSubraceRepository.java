package character.creator.repository;

import character.creator.model.CharacterSubrace;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CharacterSubraceRepository extends CrudRepository<CharacterSubrace, Long> {

    List<CharacterSubrace> findByParentRaceId(Long parentRaceId);
}
