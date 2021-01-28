package character.creator.repository;

import character.creator.model.SavingThrow;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavingThrowRepository extends CrudRepository<SavingThrow, Long> {
}
