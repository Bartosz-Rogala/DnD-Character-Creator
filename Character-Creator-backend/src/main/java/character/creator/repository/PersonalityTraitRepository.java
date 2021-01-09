package character.creator.repository;

import character.creator.model.PersonalityTrait;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalityTraitRepository extends CrudRepository<PersonalityTrait, Long> {
}
