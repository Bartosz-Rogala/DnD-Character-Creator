package character.creator.repository;

import character.creator.model.Alignment;
import org.springframework.data.repository.CrudRepository;

public interface AlignmentRepository extends CrudRepository<Alignment, Long> {
}
