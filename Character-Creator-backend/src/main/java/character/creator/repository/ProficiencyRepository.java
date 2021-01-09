package character.creator.repository;

import character.creator.model.Proficiency;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProficiencyRepository extends CrudRepository<Proficiency, Long> {
}
